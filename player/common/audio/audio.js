if (GmCXt === undefined) var GmCXt = {};
var stepAudio = {};
var userPrefAudio = false;

// Starts message channel only inside audio iframe
if (mg$('.mgPlayerJSTest2_audio-iframe-icons') && mg$('.mgPlayerJSTest2_audio-iframe-icons').length > 0) {
	GmCXt.startMsgChannel('Guide:audioIframe');
}

function setAudioModeOn() {
	mg$('.mgPlayerJSTest2_play-step-audio-on').show();
	mg$('.mgPlayerJSTest2_play-step-audio-off').hide();
	mg$('.mgPlayerJSTest2_play-step-audio').addClass('playing-audio');

	if (userPrefAudio) {

		var action = "mgPlayerJSTest2_action:set_audio_storage";
		var data = {
			'stepAudioRunningStatus': true
		};
		formatAndSendToParentWindow(action, data);
	}
}

function setAudioModeOff() {
	mg$('.mgPlayerJSTest2_play-step-audio-on').hide();
	mg$('.mgPlayerJSTest2_play-step-audio-off').show();
	mg$('.mgPlayerJSTest2_play-step-audio').removeClass('playing-audio');

	if (userPrefAudio) {

		var action = "mgPlayerJSTest2_action:set_audio_storage";
		var data = {
			'stepAudioRunningStatus': false
		};
		formatAndSendToParentWindow(action, data);
	}
}

window.addEventListener('error', function(event) {
	if (event && event.target) {
		GmCXt.onImageLoadError(mg$(event.target));
	}
}, true);

if (GmCXt.requestHandler === undefined) {
	GmCXt.requestHandler = {};
}

GmCXt.requestHandler.playAudioTrack = function(message) {
	if (GmCXt.FT.audio) {
		if (message.data.playerInstance) {
			GmCXt.playerI = message.data.playerInstance;
		}
		GmCXt.playStepAudio(message.data);
	}
};

GmCXt.requestHandler.stopAudioTrack = function(message) {
	GmCXt.stopAudio();
};

// This listener is only in Guide iframe
window.addEventListener('message', function(event) {
	if (!GmCXt) {
		GmCXt = event.target.GmCXt;
	}
	var message = GmCXt.parseMsg(event);

	if (!message) return;
	if (!message.action || message.action.indexOf('mgPlayerJSTest2_action:') !== 0) return;
	message = GmCXt.convertMgdata(message);

	if (message.data) {

		if (message.data.config) {
			GmCXt.conf = message.data.config;
		}

		if (message.data.user && !GmCXt.isEmpty(message.data.user)) {
			GmCXt.updateGlobalUser(message.data.user);
		}

		stepAudio.tour = (message.data.tour) ? message.data.tour : {};
		stepAudio.type = (message.data.type) ? message.data.type : '';
		stepAudio.stepIndex = (message.data.stepIndex) ? message.data.stepIndex : -1;

		if (GmCXt.syncPlayerInst(message.action)) {
			if (message.data.playerInstance) {
				GmCXt.playerI = message.data.playerInstance;
			}
		}
	}

	switch (message.action) {

		case 'mgPlayerJSTest2_action:set_audio_mode_on':
			setAudioModeOn();
			break;

		case 'mgPlayerJSTest2_action:set_audio_mode_off':
			setAudioModeOff();
			break;

		case 'mgPlayerJSTest2_action:stop_audio':
			GmCXt.requestHandler.stopAudioTrack();
			break;

		case 'mgPlayerJSTest2_action:set_style_audio_icon_response':
			mg$("html:first").append(message.data.data);
			mg$('.mgPlayerJSTest2_audio-iframe-icons').removeAttr('style');
			formatAndSendToParentWindow('mgPlayerJSTest2_action:hide_pop_audio_ctrl', {});
			break;
	}

}, false);

function pauseAudio() {
	if (GmCXt.audioObject) {
		GmCXt.audioObject.pause();
	}
}

GmCXt.checkAssetUrl = function(tempUrl, url, cb) {
	if (tempUrl === url) {
		cb(tempUrl);
	} else {
		var promise = GmCXt.checkFileExist(tempUrl);
		promise.then(function() {
			cb(tempUrl);
		}).catch(function(e) {
			cb(url);
		});
	}
};

GmCXt.playStepAudio = function(message) {
	GmCXt.isPageReloaded = false;
	setAudioModeOn();
	if (!message || !message.data) {
		if (GmCXt.playerI) {
			var step = GmCXt.getCurrentStep(GmCXt.playerI.currentStepId);
			message = {
				audioTrack: step.step_audio,
				step: step
			}
		}
	}

	var audioTrack = message.audioTrack;

	var play = function(url) {
		if (url) {
			audioTrack = url;
		}
		var stepObj = message.step;

		if (GmCXt.audioObject) {
			GmCXt.audioObject.pause();
		}

		GmCXt.audioObject = new Audio(audioTrack);

		var action = "mgPlayerJSTest2_action:start_step_completion_timeout";
		var data = {
			step: stepObj
		};

		GmCXt.audioObject.onended = function() {
			// Set Complete step timeout after audio is finished
			formatAndSendToParentWindow(action, data);
		};

		var promise = GmCXt.audioObject.play();
		if (promise !== undefined) {
			promise.then(function() {
				// Autoplay started!
			}).catch(function(e) {
				// Autoplay was prevented.
				// disbaled audio button
				formatAndSendToParentWindow(action, data);
				setAudioModeOff();
			});
		}
	};

	if (audioTrack && audioTrack.indexOf('?st=') === -1) {
		audioTrack = audioTrack + GmCXt.getCdnSign();
	}

	GmCXt.checkAssetUrl(audioTrack, audioTrack, play);

};

GmCXt.stopAudio = function() {
	if (GmCXt.audioObject) GmCXt.audioObject.pause();
};

function formatAndSendToParentWindow(action, data) {

	var obj = {};
	obj.action = action;
	obj.data = data || {};

	if (GmCXt.playerI || GmCXt.playerI === null) {
		obj.data.playerInstance = GmCXt.playerI;
	}

	GmCXt.sendToParentWindow(obj);
}

mg$('.mgPlayerJSTest2_play-step-audio-on').off('click').on('click', function() {
	userPrefAudio = true;
	GmCXt.stopAudio();
	formatAndSendToParentWindow('mgPlayerJSTest2_action:stop_audio', {});
	setAudioModeOff();
});

mg$('.mgPlayerJSTest2_play-step-audio-off').off('click').on('click', function() {
	userPrefAudio = true;
	setAudioModeOn();
	if (GmCXt.playerI) {
		var step = GmCXt.getCurrentStep(GmCXt.playerI.currentStepId);
		message = {
			audioTrack: step.step_audio,
			step: step
		}
		GmCXt.isPageReloaded = false;
		GmCXt.playStepAudio(message);
	}
});

mg$(document).ready(function() {
	formatAndSendToParentWindow('mgPlayerJSTest2_action:set_style_audio_icon', {});
});