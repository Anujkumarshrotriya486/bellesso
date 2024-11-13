var app = angular.module('guideme');

app.controller('BotCtrl', ['$scope', '$rootScope', 'api', 'storage', 'modal',
	'$location', '$state', '$timeout', '$anchorScroll', 'mgError',

	function($scope, $rootScope, api, storage, modal, $location, $state, $timeout, $anchorScroll, mgError) {

		$rootScope.showSpinner = false;
		$rootScope.currentView = 'chatbot';

		$scope.limit = 50;
		$scope.offset = 0;
		$scope.userRole = $rootScope.organization.role;
		$scope.tours = [];
		$rootScope.botTourPlayList = [];
		$scope.allBotGuides = [];
		$scope.ansData = [];

		GmCXt.reduceSidePanel();

		$rootScope.toggleChaticon(0);

		storage.activeView.set("/chatbot");

		var uilb = new UILandingBot(document.getElementById("botdiv"));

		var currentTour;
		var tourlist = [];
		var stepQuestions = [];
		var stepQuestionsIndex = 0;
		var surveyQuestionCount = 0;
		var surveyQList = [];
		var surveyQuestionIndex = -1;
		var currentSurveyPageIndex = -1;
		var surveyBranchNodes = [];
		var currentBSPageIndex = -1;
		var conversationRespData = [];

		var as = GmCXt.getAppSetting();
		if (!$rootScope.chatLabels) $rootScope.setDefaultChatLabels();
		$rootScope.getChatLabels(as.chatLabels);

		$scope.reInitSurveyVar = function() {
			stepQuestions = [];
			stepQuestionsIndex = 0;
			surveyQuestionCount = 0;
			surveyQList = [];
			surveyQuestionIndex = -1;
			currentSurveyPageIndex = -1;
			surveyBranchNodes = [];
			currentBSPageIndex = -1;
			$scope.ansData = [];
		};

		$scope.onloadchat = function() {
			$rootScope.botTourPlayList = [];
			GmCXt.storage().remove(['botTourPlayList']);

			showMsg("", $rootScope.chatLabels.greetingMessage, "animated fadeInLeft", 0)
				.then(function() {
					$scope.getBotGuides();
				});
		};

		$scope.showLinkGuideQuestion = function(nstep, resultCB) {
			var ts = [];

			function finalcb(steps) {
				currentTour.steps = steps;
				if (resultCB) {
					resultCB(ts[0]);
				}
			}

			function cb(ps) {
				if (!ts.length) return;
				currentTour.tour_settings.play_structure = ps;
				GmCXt.concatLinkGuideSteps(ts, currentTour, nstep.step_id, finalcb);
			}

			var d = {
				tour_id: nstep.step_settings.tour_id
			};
			if (GmCXt.apiPlayer) {
				d.forceJSONApi = true;
			}
			GmCXt.getSteps(d).then(function(tour) {
				if (!tour) {
					return;
				}
				var playerInstance = {
					currentStepId: nstep.step_id,
					playStructure: currentTour.tour_settings.play_structure
				};
				ts = tour.steps;
				GmCXt.updatePlayStructureLinkGuide(tour, playerInstance, cb);
			});
		};

		$scope.getBranchNodes = function(id) {

			var playStructure = currentTour.tour_settings.play_structure;
			var node = null;

			for (var i = 0; i < playStructure.length; i++) {
				if (parseInt(playStructure[i].id) === parseInt(id)) {
					node = playStructure[i];
				}
			}
			return node;
		};

		$scope.showNextBotStep = function(step) {
			var nextStepId = GmCXt.getTail(step.step_id, currentTour.tour_settings.play_structure, null, currentTour);
			if (nextStepId) {
				var nstep = GmCXt.getNextBotStepFromTour(nextStepId, currentTour);
				if (nstep) {
					$scope.showBotStepQuestion(currentTour.steps, nstep.step_id);
				} else {
					$scope.endMessage();
				}
			} else {
				$scope.endMessage();
			}
		};

		$scope.getQuesIndexByPI = function(pageIndex) {
			var qi = -1;
			for (var i = 0; i < surveyQList.length; i++) {
				if (surveyQList[i].pageIndex === pageIndex) {
					qi = i;
					break;
				}
			}
			return qi;
		};

		$scope.getSurveyQuestion = function(tour) {
			var data = {};
			data.conversation = tour.tour_settings.conversation;
			GmCXt.requestHandler.handleGetBotConvDetail(data, function(res) {
				surveyQuestionCount = res.data.questions.length;
				surveyQList = res.data.questions;
				surveyQuestionIndex++;
				$scope.showSurveyQuestion(surveyQList, tour);
			});
		};

		$scope.showSurveyQuestion = function(qlist, tour) {
			if (surveyQuestionCount !== surveyQuestionIndex) {
				var ques = qlist[surveyQuestionIndex];
				$scope.displaySurveyQues(ques, tour);
			}
		};

		$scope.surveyIterOfNonBranch = function(ques, tour) {
			if (surveyQuestionIndex < surveyQList.length - 1) {
				if (!ques.isBranchNode &&
					(currentBSPageIndex === surveyQList[surveyQuestionIndex + 1].pageIndex ||
						!surveyBranchNodes.includes((surveyQList[surveyQuestionIndex + 1].pageIndex)))) {
					surveyQuestionIndex++;
					$scope.showSurveyQuestion(surveyQList, tour);
				} else if (GmCXt.isEmpty(surveyBranchNodes)) {
					surveyQuestionIndex++;
					$scope.showSurveyQuestion(surveyQList, tour);
				} else {
					surveyQuestionIndex++;
					$scope.surveyIterOfNonBranch(ques, tour);
				}
			} else {
				$scope.endMessage();
			}
		};

		$scope.showSingleSelectQuestion = function(ques, tour) {
			showMsg("", ques.question, "animated fadeInLeft", 0)
				.then(function() {
					var optList = [];

					if (ques.options && ques.options.length > 0) {

						var cssClass = "animated fadeInRight uilb-button-opt";
						if (ques.type === 'yes-no') cssClass = "animated fadeInUp uilb-button-opt-yesno";

						angular.forEach(ques.options, function(opt, key) {
							optList.push({
								text: opt.option,
								value: opt,
								cssClass: cssClass
							});
							if (ques.isBranchNode) {
								surveyBranchNodes.push(opt.nextHopOnBranch);
							}

						});

						showActionButton("", "animated fadeInRight", optList, 200)
							.then(function(o) {
								if (o.optionReferenceLink) {
									window.open(o.optionReferenceLink, '_blank');
								}
								$scope.trackAns(ques, o.option);
								showHumanMsg(o.option)
									.then(function() {
										if (surveyQuestionIndex < surveyQList.length - 1) {
											if (ques.isBranchNode) {
												index = $scope.getQuesIndexByPI(o.nextHopOnBranch);
												currentBSPageIndex = o.nextHopOnBranch;
												surveyQuestionIndex = index;
												$scope.showSurveyQuestion(surveyQList, tour);
											} else {
												$scope.surveyIterOfNonBranch(ques, tour);
											}

										} else {
											$scope.endMessage();
										}
									});
							});
					}
				});
		};

		$scope.showMultiSelectQuestion = function(ques, tour) {
			showMsg("", ques.question, "animated fadeInLeft", 0)
				.then(function() {
					var optList = [];

					if (ques.options && ques.options.length > 0) {
						angular.forEach(ques.options, function(opt, key) {
							optList.push({
								text: "&#9744; " + opt.option,
								value: opt,
								cssClass: "animated fadeInRight uilb-button-multi-opt",
								tag: "multiselect"
							});
						});

						var selecOpList = [];
						optList.push({
							text: "Done",
							value: selecOpList,
							cssClass: "animated fadeInRight uilb-button-multi-opt-done",
						});


						showActionButton("mgPlayerJSPreview_multi", "animated fadeInRight", optList, 200)
							.then(function(o) {
								var optionStr = "";
								if (o && o.length) {
									for (var i = 0; i < o.length; i++) {
										if (GmCXt.isEmpty(optionStr)) {
											optionStr = o[i].option;
										} else {
											optionStr = optionStr + " , " + o[i].option;
										}
									}
									$scope.trackAns(ques, optionStr);
									showHumanMsg(optionStr)
										.then(function() {
											$scope.surveyIterOfNonBranch(ques, tour);
										});
								} else {
									showHumanMsg($rootScope.labels.multiSelectOptionError)
										.then(function() {
											$scope.showMultiSelectQuestion(ques, tour);
										});
								}

							});


					}
				});
		};

		$scope.displaySurveyQues = function(ques, tour) {
			currentSurveyPageIndex = ques.pageIndex;

			switch (ques.type) {
				case 'select':
				case 'yes-no':
					$scope.showSingleSelectQuestion(ques, tour);
					break;
				case 'multi-select':
					$scope.showMultiSelectQuestion(ques, tour);
					break;
				case 'comment':
					showMsg("", ques.question, "animated fadeInLeft", 0)
						.then(function() {
							uilb.action({
								type: "text",
								cssClass: "animated fadeInLeft",
								delay: 100,
								tag: "comment_" + tour.tour_id,
								validate: ques.validateEmail
							});
						});
					break;
				case 'range':
					showMsg("", ques.question, "animated fadeInLeft", 0)
						.then(function() {
							showActionButton("uilb-btn-range", "animated fadeInRight", $scope.addRangeQuestion(ques), 200)
								.then(function(str) {
									$scope.trackAns(ques, str);
									showHumanMsg(str).then(function() {
										$scope.surveyIterOfNonBranch(ques, tour);
									});
								});
						});
					break;
				case 'rating':
					showMsg("", ques.question, "animated fadeInLeft", 0)
						.then(function() {
							showActionButton("uilb-btn-rate", "animated fadeInRight", $scope.addRateQuestion(ques), 200)
								.then(function(str) {
									$scope.trackAns(ques, str);
									showHumanMsg($scope.addRateAnswer(ques, str), true).then(function() {
										$scope.surveyIterOfNonBranch(ques, tour);
									});
								});
						});
					break;
			}
		};

		$scope.addRangeQuestion = function(question) {
			var optList = [];
			for (var i = question.options[0]; i <= question.options[1]; i++) {
				optList.push({
					text: i,
					value: i,
					cssClass: "animated fadeInRight uilb-button-opt-range"
				});
			}
			return optList;
		};

		$scope.addRateQuestion = function(question) {
			var optList = [];
			for (var i = question.options[0]; i <= question.options[1]; i++) {
				optList.push({
					id: 'mgPlayerJSPreview_rate-' + i,
					text: '&#9733;',
					value: i,
					cssClass: "animated fadeInRight uilb-button-opt-range"
				});
			}
			return optList;
		};

		$scope.addRateAnswer = function(question, ans) {
			var html = "<wmgPlayerJSPreview_ class='mgPlayerJSPreview_rating' style='font-size:20px;'>";

			for (var i = question.options[0]; i <= question.options[1]; i++) {
				var className = "mgPlayerJSPreview_lbl-btn mgPlayerJSPreview_stars-rate";
				if (i < parseInt(ans) + 1) {
					html += "<button class='" + className + "' id='mgPlayerJSPreview_rate-" + i + "' aria-label='rate' >&#9733;</button>";
				} else {
					html += "<button class='" + className + "' id='mgPlayerJSPreview_rate-" + i + "' aria-label='rate' >&#9734;</button>";
				}
			}
			html += "</wmgPlayerJSPreview_>";

			return html;
		};

		$scope.showBranchQuestions = function(question, branches, bstep) {
			showMsg("", question, "animated fadeInLeft", 0)
				.then(function() {
					var optList = [];
					if (branches && branches.length > 0) {
						angular.forEach(branches, function(opt, key) {
							optList.push({
								text: opt.branchName,
								value: opt,
								cssClass: "animated fadeInRight uilb-button-opt"
							});
						});

						showActionButton("", "animated fadeInRight", optList, 200)
							.then(function(res) {

								var tailStepId = res.tail;
								if (!tailStepId) {
									var nodes = $scope.getBranchNodes(bstep.step_id);
									var bIndex = branches.indexOf(res);
									tailStepId = nodes.branch[bIndex].tail;
								}

								$scope.updateStepInCurrentTour(bstep, res);
								showHumanMsg(res.branchName).then(function() {
									if (tailStepId) {
										var tailStep = GmCXt.getNextBotStepFromTour(tailStepId, currentTour);
										if (tailStep) {
											$scope.showBotStepQuestion(currentTour.steps, tailStep.step_id);
										} else {
											$scope.showNextBotStep(tailStep);
										}
									} else {
										$scope.endMessage();
									}
								});
							});
					}
				});
		};

		mg$(document).off('keypress', '#txtsearch');
		mg$(document).on('keypress', '#txtsearch', function(e) {
			var keycode = (e.keyCode ? e.keyCode : e.which);

			if (keycode === 13) {
				var isValidate = false;
				if (e.target.validate) isValidate = true;
				$scope.textSearch(isValidate);
			}
		});

		$scope.textSearch = function(isValidate) {
			var txtsearch = document.getElementById("txtsearch");

			if (txtsearch !== null && txtsearch.value.length > 0) {
				var txtparent = txtsearch.parentElement;
				var container = txtparent.parentElement;
				var stext = txtsearch.value;
				if (txtsearch.tag && typeof(txtsearch.tag) !== "object" && txtsearch.tag.indexOf("comment_") !== -1 && stext) {
					var tId = txtsearch.tag.replace("comment_", "");
					//var s = GmCXt.getStepFromTourData(stepId, currentTour);
					if (isValidate) {
						var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,3}$/i;
						if (emailRegex.test(stext)) {
							stext = txtsearch.value;
						} else {
							stext = $rootScope.labels.emailError;
						}
					}

					showHumanMsg(stext)
						.then(function() {
							if (stext === $rootScope.labels.emailError) {
								$scope.showSurveyQuestion(surveyQList, currentTour);
							} else {
								var q = surveyQList[surveyQuestionIndex];
								$scope.trackAns(q, stext);
								$scope.surveyIterOfNonBranch(q, currentTour);
							}
						});

				} else if (txtsearch.tag && typeof(txtsearch.tag) !== "object" && txtsearch.tag === "searchGuide" && stext) {
					var tourdiv = document.getElementsByClassName('uilb-button-options')[0];
					var tourDivParent = tourdiv.parentElement;
					var tlist = $scope.filterTourBytext($scope.allBotGuides, stext);
					if (tlist) {
						$scope.processBotGuides(tlist);
						$timeout($scope.onRemoveElement(tourDivParent), 200);
					}
				} else {
					var step = txtsearch.tag;
					container.style.opacity = 0;
					showHumanMsg(stext)
						.then(function(r) {
							$scope.updateStepInCurrentTour(step, stext);
							if (GmCXt.isLastStep(step.step_id, currentTour.tour_settings.play_structure)) {
								$scope.endMessage();
							} else {
								$scope.showNextBotStep(step);
							}
						});
				}
				$timeout($scope.onRemoveElement(txtparent), 200);
			}
		};

		mg$(document).off('click', '#uilb-txt-enter');
		mg$(document).on('click', '#uilb-txt-enter', function(e) {
			$scope.textSearch();
		});

		$scope.onRemoveElement = function(elem) {
			var element = elem.parentElement;
			if (element.parentElement !== null) element.parentElement.removeChild(element);
		};

		function showMsg(id, msg, css, delay, isHtmlContent) {
			return uilb.message({
				id: id,
				content: msg,
				cssClass: css,
				isHtmlContent: isHtmlContent,
				delay: delay
			});
		}

		function showHumanMsg(str, isHtmlContent) {
			return uilb.message({
				human: true,
				content: str,
				cssClass: "animated fadeInRight",
				isHtmlContent: isHtmlContent,
				delay: 0
			});
		}

		function showActionButton(id, css, itemlist, delay) {
			return uilb.action({
				id: id,
				type: "button",
				cssClass: css,
				items: itemlist,
				delay: delay
			});
		}

		$scope.filterTourBytext = function(t, word) {
			var tlist = t.filter(function(r) {
				if (r.tour_title.toLowerCase().indexOf(word.toLowerCase()) !== -1) {
					return r;
				}
			});
			return tlist;
		};

		$scope.processBotGuides = function(_tours) {

			var guides = $rootScope.filterBotGuides(_tours);
			if (guides && guides.length) {
				$scope.tours = guides;
				var guidesarr = [];

				angular.forEach($scope.tours, function(tour, key) {
					guidesarr.push({
						text: tour.tour_title,
						value: tour,
						cssClass: "animated fadeInRight uilb-button-options"
					});
				});

				showActionButton("", "animated fadeInUp", guidesarr, 200)
					.then(function(res) {
						currentTour = res;
						showHumanMsg(currentTour.tour_title)
							.then(function(res) {
								var params = {
									tour_id: currentTour.tour_id,
									category_id: currentTour.category_id
								};

								if (!GmCXt.checkDefaultLangForTour(res, $scope.lang)) {
									params.language = $scope.lang;
								}

								api.getTour(params, function(t) {
									currentTour = t;
									if (!GmCXt.containBranchStep(currentTour)) {
										currentTour.tour_settings.play_structure = GmCXt.buildGuidePlayStructure(currentTour);
									}
									if ($rootScope.isBotGuide(currentTour)) {
										$scope.getSurveyQuestion(currentTour);
									} else {
										$scope.showBotStepQuestion(currentTour.steps);
									}

								});

							});
					});
			} else {
				showMsg("", myChatStr.noDataFound, "animated fadeInLeft", 100);
			}

		};

		$scope.showBotStepQuestion = function(steps, step_id) {
			var botStepId;
			if (step_id) {
				botStepId = step_id;
			} else {
				botStepId = steps[0].step_id;
			}
			botStep = GmCXt.getStepFromTourData(botStepId, currentTour);

			if (botStep && botStep.step_settings && botStep.step_settings.automation &&
				botStep.step_settings.automation.enableBot &&
				botStep.step_settings.automation.botQuestion) {
				var ss = botStep.step_settings;
				var ques = ss.automation.botQuestion;

				if (ss.element && ss.element.targetInfo && ss.element.targetInfo.tagName === 'SELECT' &&
					ss.element.elOptions && ss.element.elOptions.length > 0) {
					$scope.showSelectOption(ques, ss.element.elOptions, botStep);
				} else if (ss.branch && ss.branch.length > 0) {
					$scope.showBranchQuestions(ques, ss.branch, botStep);
				} else if (botStep.step_type !== GmCXt.STEP_TYPE_GUIDE) {
					showMsg("", ques, "animated fadeInLeft", 0)
						.then(function() {
							uilb.action({
								type: "text",
								cssClass: "animated fadeInLeft",
								delay: 100,
								tag: botStep
							});
						});
				}
			} else if (botStep.step_type === GmCXt.STEP_TYPE_GUIDE) {
				$scope.showLinkGuideQuestion(botStep, function(lstep) {
					$scope.showBotStepQuestion(currentTour.steps, lstep.step_id);
				});
			} else if (currentTour.tour_type.includes("onboarding_tour")) {
				if (!GmCXt.isEmpty(botStep.step_settings.tutorialUploadUrl) &&
					currentTour.tour_settings.tutorial_tour_type === "upload") {
					var tutUrl = botStep.step_settings.tutorialUploadUrl;
					if (tutUrl.indexOf(GmCXt.conf.cdnStorage) !== -1) {
						tutUrl = botStep.step_settings.tutorialUploadUrl + GmCXt.getCdnSign();
					}
					showMsg("", "<a alt='' href='" + tutUrl + "' target='_blank' >" + botStep.step_settings.tutorialUploadUrl + "</a> ", "animated fadeInLeft", 0, true)
						.then(function() {
							$scope.showNextBotStep(botStep);
						});

				} else {

					var tutInlineHtml = "<div class='mgPlayerJSPreview_chat-tg-content-wrapper'>";

					var stepText = "";

					if (botStep.step_description) {
						stepText = GmCXt.replaceVariableWithValue(GmCXt.updateOrgAndAddSignature(botStep.step_description));
					}

					if (botStep && botStep.step_video > 0 && botStep.step_video_url) {
						tutInlineHtml = tutInlineHtml + "<div class='mgPlayerJSPreview_chat-guide-info-wrapper mgPlayerJSPreview_video-info-wrapper'>" +
							"<video controls autoplay controlsList='nodownload' disablePictureInPicture >" +
							"<source src='" + botStep.step_video_url + GmCXt.getCdnSign() + "' type='video/mp4'>" +
							"</video></div>";

					} else if (botStep && botStep.image_url.indexOf('default') < 0) {
						tutInlineHtml = tutInlineHtml + "<div class='mgPlayerJSPreview_chat-info-wrapper mgPlayerJSPreview_img-info-wrapper'>" +
							"<img class='mgPlayerJSPreview_chat-tg-image' src='" + botStep.image_url + GmCXt.getCdnSign() + "' /></div>";
					}

					tutInlineHtml = tutInlineHtml + "<div class='mgPlayerJSPreview_chat-tg-step-content' > " + stepText + " </div>" +
						"</div>";



					showMsg("", tutInlineHtml, "animated fadeInLeft", 0, true).then(function() {
						$scope.showNextBotStep(botStep);
					});
				}
			} else if (GmCXt.isLastStep(botStep.step_id, currentTour.tour_settings.play_structure)) {
				$scope.endMessage();
			} else if (botStep) {
				var nstep = GmCXt.getNextBotStepFromTour(botStep.step_id, currentTour);
				if (nstep) {
					$scope.showBotStepQuestion(currentTour.steps, nstep.step_id);
				} else {
					$scope.endMessage();
				}
			}

		};

		$scope.showSelectOption = function(question, options, step) {
			showMsg("", question, "animated fadeInLeft", 0).then(function() {
				var optList = [];
				if (options && options.length > 0) {
					angular.forEach(options, function(opt, key) {
						optList.push({
							text: opt.name,
							value: opt,
							cssClass: "animated fadeInRight uilb-button-opt"
						});
					});

					showActionButton("", "animated fadeInRight", optList, 200)
						.then(function(res) {
							$scope.updateStepInCurrentTour(step, res);
							showHumanMsg(res.name).then(function() {
								$scope.showNextBotStep(step);
							});
						});
				}
			});
		};

		$scope.trackAns = function(ques, answer) {
			var ans = {
				'question_id': ques.questionID ? ques.questionID : '',
				'question_type': ques.type,
				'question_name': ques.question ? ques.question : '',
			};

			switch (ques.type) {
				case 'yes-no':
					if (answer !== undefined)
						valueData = (answer === 'Yes') ? true : (answer === 'No') ? false : false;
					ans.is_answer_yes = valueData;
					break;

				case 'comment':
					ans.comment = answer;
					break;
				case 'multi-select':
					ans.option = answer.split(",");
					break;
				case 'select':
				case 'range':
				case 'rating':
					ans.option = answer.toString().split();
					break;
			}

			$scope.ansData.push(ans);
		};

		$scope.endMessage = function() {

			showMsg("", $rootScope.chatLabels.botEndingMessage, "animated fadeInLeft", 500)
				.then(function() {

					var itemlist2 = [{
						text: $rootScope.labels.btnYes,
						value: $rootScope.labels.btnYes,
						cssClass: "animated fadeInUp uilb-button-opt-yesno"
					}, {
						text: $rootScope.labels.btnNo,
						value: $rootScope.labels.btnNo,
						cssClass: "animated fadeInUp uilb-button-opt-yesno"
					}];

					showActionButton("", "animated fadeInUp", itemlist2, 100)
						.then(function(res) {
							$rootScope.botTourPlayList.push(currentTour);
							if (!$rootScope.$$phase) $rootScope.$apply();
							//store bot tour list;
							GmCXt.storage().set({
								"botTourPlayList": $rootScope.botTourPlayList
							});

							if ($rootScope.isOnboarding(currentTour) &&
								$rootScope.isUploadTutorial(currentTour)) {
								GmCXt.trackerV1.trackTutGuide(currentTour, "upload_tutorial_guide_new_tab", "bot");
							} else if ($rootScope.isOnboarding(currentTour)) {
								GmCXt.trackerV1.trackTutGuide(currentTour, "create_tutorial_guide", "bot");
							}

							if ($rootScope.isBotGuide(currentTour)) {
								var idata = {
									trigger_source_type: 'bot',
									trigger_source_id: currentTour.tour_id,
									conversationCode: currentTour.tour_settings.conversation.conversationCode
								};

								GmCXt.trackerV1.trackConversationResponse($scope.ansData, idata);
							}


							$scope.reInitSurveyVar();

							if (res === $rootScope.labels.btnNo) {
								showHumanMsg(res).then(function() {
									if ($scope.checkIfAllowTourPlay()) {
										$rootScope.guideAction($rootScope.playAuto, null, $rootScope.botTourPlayList[0], "bot");
									}
									$scope.onBack();
								});
							} else {
								$scope.getBotGuides();
							}
						});
				});
		};

		$scope.checkIfAllowTourPlay = function() {
			var allowPlay = true;
			var notAllowInx = [];

			if ($rootScope.botTourPlayList && $rootScope.botTourPlayList.length) {
				var btlist = $rootScope.botTourPlayList.filter(function(t) {
					if (!($rootScope.isBotGuide(t) ||
							t.tour_type.indexOf("onboarding_tour") !== -1)) {
						return t;
					}
				});

				$rootScope.botTourPlayList = btlist;


				if ($rootScope.botTourPlayList.length > 0) {
					allowPlay = true;
				} else {
					allowPlay = false;
				}
			}
			return allowPlay;
		};

		$scope.getStepSorted = function(ps, stepId) {
			var steps = [];

			var firstStep;

			if (stepId) {
				firstStep = GmCXt.getStepFromTourData(stepId, currentTour);
			} else {
				firstStep = GmCXt.getStepFromTourData(ps[0].id, currentTour);
			}


			steps.push(firstStep);

			var seedStepID = firstStep.step_id;

			if (firstStep.step_type !== "branch") {
				for (var i = 0; i < ps.length; i++) {
					var nextStepId = GmCXt.getTail(seedStepID, ps, null, currentTour);
					if (nextStepId) {
						stepToPush = GmCXt.getStepFromTourData(nextStepId, currentTour);
						if (stepToPush) {
							seedStepID = stepToPush.step_id;
							steps.push(stepToPush);
							if (stepToPush.step_type === "branch") {
								break;
							}
						} else {
							break;
						}

					} else {
						break;
					}
				}
			}

			return steps;
		};

		$scope.getBotGuides = function() {
			var res = $rootScope.readLocalCT($rootScope.pageUrl, GmCXt.pageTitle);
			if (res && res.length) {
				$scope.allBotGuides = res;
				$scope.processBotGuides(res);
			} else {
				var param = {
					url: $rootScope.pageUrl
				};
				api.getContextualTour(param, function(r) {
					GmCXt.log(30, "FETCHED tours from API");
					res = $rootScope.processContextualGuide(r, param.url);
					$scope.allBotGuides = res;
					$scope.processBotGuides(res);
				});
			}
		};

		$scope.updateStepInCurrentTour = function(step, botData) {
			for (var cs = 0; cs < currentTour.steps.length; cs++) {
				if (step.step_id === currentTour.steps[cs].step_id) {
					currentTour.steps[cs].step_settings.automation.defaultData = botData;
					currentTour.steps[cs].step_settings.automation.enableDefaultData = true;
					currentTour.steps[cs].step_settings.automation.hasHumanInteraction = false;
				}
			}
		};

		$scope.onBack = function() {
			$rootScope.updateActiveTab($rootScope.labels.allGuides);
			$scope.trackInteraction();
			$rootScope.goBack();
		};

		$scope.trackInteraction = function() {
			if ($rootScope.botTourPlayList || currentTour) {
				var tl = [];
				if (currentTour && !($rootScope.botTourPlayList && $rootScope.botTourPlayList.length)) {
					tl.push(currentTour);
				} else if ($rootScope.botTourPlayList) {
					tl = $rootScope.botTourPlayList;
				}
				GmCXt.trackerV1.trackBotInteraction(tl);
			}
		};

		// set the list hight on window resize
		mg$(window).off('resize').on('resize', $scope.setHeight);
		//Play Tour

	}
]);
var myChatStr = {
	welcomeGreet: 'Hey! Welcome to MyGuide. How can I help you?',
	searchGuide: 'Search Guide',
	searchMessage: 'What would you like to search? Just type or say!',
	noDataFound: 'No Data Found',
	pleaseTryAgain: 'Try Again!',
	chooseResult: 'The results are here, choose your preferred one!',
	noInput: 'No input found!',
	searchAgain: "Try Again!"
};
var _createClass = function() {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];
			descriptor.enumerable = descriptor.enumerable || false;
			descriptor.configurable = true;
			if ("value" in descriptor) descriptor.writable = true;
			Object.defineProperty(target, descriptor.key, descriptor);
		}
	}
	return function(Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);
		if (staticProps) defineProperties(Constructor, staticProps);
		return Constructor;
	};
}();

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

var UILandingBot = function() {
	function UILandingBot(node) {
		_classCallCheck(this, UILandingBot);

		this.domNode = node;
		this.domNode.classList.add("uilb");
	}

	_createClass(UILandingBot, [{
		key: "createtypingodots",
		value: function createtypingodots() {
			var typediv = document.createElement("div");
			typediv.setAttribute("class", "typing-indicator animated fadeInLeft");
			var typespan1 = document.createElement("uilb-span");
			var typespan2 = document.createElement("uilb-span");
			var typespan3 = document.createElement("uilb-span");
			typediv.appendChild(typespan1);
			typediv.appendChild(typespan2);
			typediv.appendChild(typespan3);
			this.domNode.appendChild(typediv);
			return typediv;
		}
	}, {
		key: "createContainer",
		value: function createContainer(_ref) {
			var _this = this;

			var human = _ref.human;
			var cssClass = _ref.cssClass;
			var delay = _ref.delay;
			var resolve = _ref.resolve;


			var container = document.createElement("div");
			container.className = "uilb-container " + (human ? "human" : "bot") + " " + cssClass;
			container.style.opacity = 0;
			container.style.transform = "translateX(" + (human ? "" : "-") + "8%)";

			setTimeout(function() {
				_this.domNode.appendChild(container);
			}, delay);

			setTimeout(function() {
				container.style.opacity = 1;
				container.style.transform = "translateX(0)";
				if (resolve) {
					resolve(container);
				}
			}, delay + 200);

			return container;
		}
	}, {
		key: "htmlToText",
		value: function htmlToText(text) {
			return text ? String(text).replace(/<[^>]+>/gm, '') : '';
		}
	}, {
		key: "message",
		value: function message(_ref2) {
			var _this2 = this;

			var id = _ref2.id;
			var content = _ref2.content;
			var cssClass = _ref2.cssClass;
			var delay = _ref2.delay;
			var human = _ref2.human;
			var isHtmlContent = _ref2.isHtmlContent;

			return new Promise(function(resolve, reject) {
				var container = _this2.createContainer({
					human: human,
					cssClass: cssClass,
					delay: delay,
					isHtmlContent: isHtmlContent,
					resolve: resolve
				});

				var message = document.createElement("div");
				if (id !== "") message.setAttribute("id", id);
				message.className = "uilb-message showtextdelay  " + (human ? "human" : "bot") + " " + cssClass;

				if (id !== "msg_search" && id !== "msg-vid" && !isHtmlContent) {
					if (content === "") message.innerHTML = "<div id='wave'><span class='dot'></span><span class='dot'></span><span class='dot'></span></div>";
					else message.innerHTML = "<div id='hideMe'><div id='wave'><span class='dot'></span><span class='dot'></span><span class='dot'></span></div></div>";
					message.innerHTML += _this2.htmlToText(content);
				} else if (isHtmlContent) {
					message.innerHTML = content;
				} else {
					message.innerHTML = _this2.htmlToText(content);
				}
				container.appendChild(message);
				if (document.getElementById('uilb-main-container')) {
					document.getElementById('uilb-main-container').scrollTop = 300;
				}
			});
		}
	}, {
		key: "action",
		value: function action(obj) {
			return this[obj.type + "Action"](obj);
		}
	}, {
		key: "buttonAction",
		value: function buttonAction(_ref3) {
			var _this3 = this;

			var id = _ref3.id;
			var items = _ref3.items;
			var delay = _ref3.delay;
			var human = _ref3.human;
			var cssClass = _ref3.cssClass;
			var tag = _ref3.tag;
			var multiValue = [];
			return new Promise(function(resolve, reject) {
				var container = _this3.createContainer({
					human: human,
					delay: delay,
					cssClass: "no-icon"
				});
				//container.style.position = 'absolute';
				if (id !== "") container.id = id;
				var form = document.createElement("form");
				form.className = "uilb-action " + (human ? "human" : "bot") + " " + cssClass;
				form.addEventListener('submit', function(e) {
					return e.preventDefault;
				});

				if (id === "uilb-btn-action") {
					var imgback = document.createElement("div");
					imgback.id = "uilb-back-chat";
					imgback.title = "Back";
					imgback.setAttribute("class", "uilb-action-opt-back");

					var inputbackbtn = document.createElement("button");
					inputbackbtn.id = "uilb-back-btn";
					inputbackbtn.className = "uilb-back";
					imgback.appendChild(inputbackbtn);

					var lblback = document.createElement("div");
					lblback.innerHTML = "Back";
					lblback.setAttribute("class", "uilb-back-label");
					imgback.appendChild(lblback);

					form.style = "width: 360px;height: 100px;overflow: hidden;";
					container.appendChild(imgback);
				}

				if (id === "uilb-btn-range") {
					
				}

				var items_cnt = 0;
				items.forEach(function(item) {
					var button = document.createElement("button");
					if (item.id !== "") button.id = item.id;
					button.className = "uilb-button " + item.cssClass;
					button.type = 'button';
					button.innerHTML = item.text;
					button.tag = item.tag;
					if (id === "uilb-btn-action") {
						button.id = "uilb-btnresult" + items_cnt;
						if (items_cnt === 0 || items_cnt === 1) {
							button.style.display = "block";
						} else {
							button.style.display = "none";
						}
					}
					button.title = item.text;

					button.addEventListener("click", function(e) {
						if (item.tag !== "multiselect") {
							if (multiValue && multiValue.length) {
								resolve(multiValue);
							} else {
								resolve(item.value);
							}

							container.style.opacity = 0;
							var cont = document.getElementById('uilb-searchagain');
							if (cont && button.id !== "uilb-searchagain" && button.className.indexOf("uilb-button-opt") > -1) {
								setTimeout(function() {
									cont.parentElement.removeChild(cont);
									container.parentElement.removeChild(container);
								}, 200);
							} else {
								setTimeout(function() {
									return _this3.domNode.removeChild(container);
								}, 200);
							}
						} else {
							if (!multiValue.includes(item.value)) {
								multiValue.push(item.value);
								e.target.innerHTML = e.target.title.replace("&#9744;","&#9989;");
							} else {
								var ind = multiValue.indexOf(item.value);
								if (ind > -1) { 
								  multiValue.splice(ind, 1); 
								};
								e.target.innerHTML = e.target.title.replace("&#9989;","&#9744;");
							}

						}
					});
					form.appendChild(button);
					items_cnt = items_cnt + 1;
				});

				container.appendChild(form);

				if (id === "uilb-btn-action" && items_cnt > 2) {
					var divtotalresult = document.createElement("div");
					divtotalresult.id = "uilb_totalresult";
					divtotalresult.style.fontSize = "12px";
					divtotalresult.style.marginTop = "10px";
					divtotalresult.innerHTML = "Total Guides: " + items_cnt;
					container.appendChild(divtotalresult);

					var imglft = document.createElement("div");
					imglft.id = "uilb-leftarrow";
					container.appendChild(imglft);

					var imgrgt = document.createElement("div");
					imgrgt.id = "uilb-rightarrow";
					imgrgt.style.display = "none";
					container.appendChild(imgrgt);
				}
			});
		}
	}, {
		key: "textAction",
		value: function textAction(_ref4) {
			var _this4 = this;

			var items = _ref4.items;
			var delay = _ref4.delay;
			var human = _ref4.human;
			var cssClass = _ref4.cssClass;

			return new Promise(function(resolve, reject) {
				var container = _this4.createContainer({
					human: human,
					delay: delay,
					cssClass: "no-icon"
				});
				//container.style.position = 'absolute';
				var inputbackdiv = document.createElement("div");
				inputbackdiv.id = "uilb-back-chat";
				inputbackdiv.title = "Back";
				inputbackdiv.setAttribute("class", "uilb-action-opt-back");
				inputbackdiv.setAttribute("style", "margin-left: -60px; margin-top: -10px;");

				var inputbackbtn = document.createElement("button");
				inputbackbtn.id = "uilb-back-btn";
				inputbackbtn.className = "uilb-back";
				inputbackdiv.appendChild(inputbackbtn);

				var lblback = document.createElement("div");
				lblback.innerHTML = "Back";
				lblback.setAttribute("class", "uilb-back-label");
				inputbackdiv.appendChild(lblback);

				var inputdiv = document.createElement("div");
				inputdiv.className = "uilb-text-div";

				var input = document.createElement("input");
				input.className = "uilb-text";
				input.id = "txtsearch";
				input.type = 'text';
				input.placeholder = 'Type here';
				input.autocomplete = "off";
				input.tag = _ref4.tag;
				input.validate = _ref4.validate;

				var entericon = document.createElement("div");
				entericon.id = 'uilb-txt-enter';
				entericon.className = "uilb-enter";

				/*var mikeicon = document.createElement("div");
				mikeicon.id = 'uilb-mike';
				mikeicon.className = "uilb-mike";
				mikeicon.innerHTML = "<svg xmlns=\"https://www.w3.org/2000/svg\" width=24px height=24px viewBox=\"0 0 11.71 16.99\"><title>search</title><g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"Layer_2-2\" data-name=\"Layer 2\"><path d=\"M11.29,5.1a.42.42,0,0,0-.42.42V8.13a5,5,0,1,1-10,0V5.52A.42.42,0,0,0,.42,5.1.42.42,0,0,0,0,5.52V8.13A5.87,5.87,0,0,0,5.44,14v2.17H3.27a.42.42,0,0,0,0,.84H8.44a.42.42,0,0,0,0-.84H6.27V14a5.87,5.87,0,0,0,5.44-5.85V5.52A.42.42,0,0,0,11.29,5.1Z\"/><path d=\"M4.88,8.13a.42.42,0,0,1-.42.42H3a2.64,2.64,0,0,0,2.63,2.5h.56a2.63,2.63,0,0,0,2.62-2.5H7.25a.42.42,0,1,1,0-.83H8.77V6.55H7.25a.42.42,0,0,1,0-.84H8.77V4.55H7.25a.42.42,0,0,1,0-.84H8.77V2.62A2.64,2.64,0,0,0,7.28.25a4.33,4.33,0,0,0-2.84,0,2.63,2.63,0,0,0-1.5,2.37V3.71H4.46a.42.42,0,0,1,0,.84H2.94V5.71H4.46a.42.42,0,0,1,0,.84H2.94V7.72H4.46A.41.41,0,0,1,4.88,8.13Z\"/></g></g></svg>";
				*/
				inputdiv.appendChild(inputbackdiv);
				inputdiv.appendChild(input);
				inputdiv.appendChild(entericon);
				/*inputdiv.appendChild(mikeicon);*/
				container.appendChild(inputdiv);
			});
		}
	}]);
	return UILandingBot;
}();