if (GmCXt === undefined) var GmCXt = {};
var stepAudio = {};
var userPrefAudio = false;

// Starts message channel only inside audio iframe
GmCXt.msgChannel = new MessageChannel();
GmCXt.startMsgChannel = function(initiator) {
	window.top.postMessage(initiator, '*', [GmCXt.msgChannel.port2]);
};
if (document.querySelectorAll('.mgPlayerJSTest2_audio-iframe-icons').length > 0) {
	GmCXt.startMsgChannel('Guide:audioIframe');
}

function modifyElements(elements, operation, className) {
	elements.forEach(element => {
		switch (operation) {
			case 'show':
				element.style.display = 'block';
				break;

			case 'hide':
				element.style.display = 'none';
				break;

			case 'addClass':
				element.classList.add(className);
				break;

			case 'removeClass':
				element.classList.remove(className);
        		break;
		}
	});
}

function setAudioModeOn() {
	modifyElements(document.querySelectorAll('.mgPlayerJSTest2_play-step-audio-on'),'show');
	modifyElements(document.querySelectorAll('.mgPlayerJSTest2_play-step-audio-off'),'hide');
	modifyElements(document.querySelectorAll('.mgPlayerJSTest2_play-step-audio'),'addClass','playing-audio');

	if (userPrefAudio) {

		var action = "mgPlayerJSTest2_action:set_audio_storage";
		var data = {
			'stepAudioRunningStatus': true
		};
		formatAndSendToParentWindow(action, data);
	}
}

function setAudioModeOff() {
	modifyElements(document.querySelectorAll('.mgPlayerJSTest2_play-step-audio-on'),'hide');
	modifyElements(document.querySelectorAll('.mgPlayerJSTest2_play-step-audio-off'),'show');
	modifyElements(document.querySelectorAll('.mgPlayerJSTest2_play-step-audio'),'removeClass','playing-audio');

	if (userPrefAudio) {

		var action = "mgPlayerJSTest2_action:set_audio_storage";
		var data = {
			'stepAudioRunningStatus': false
		};
		formatAndSendToParentWindow(action, data);
	}
}

if (GmCXt.requestHandler === undefined) {
	GmCXt.requestHandler = {};
}

GmCXt.requestHandler.playAudioTrack = function(message) {
	if (message.data.playerInstance) {
		GmCXt.playerI = message.data.playerInstance;
	}
	GmCXt.playStepAudio(message.data);
};

GmCXt.requestHandler.stopAudioTrack = function(message) {
	GmCXt.stopAudio();
};

function parseJSON (str) {
	try {
		if (typeof str === 'object') {
			return str;
		} else if (str === '' || str === 'AS' ||
			str === 'na' || str === '[object Object]' ||
			str === undefined || str === 'undefined'
		) {
			return {};
		} else {
			return JSON.parse(str);
		}

	} catch (e) {
		return {};
	}
};

function parseMsg (e) {

    let msg = {};
    msg.data = parseJSON(e.data);
    return msg.data;
};

function getCdnSign () {
    var sign = '';

    if (GmCXt.user) {
        sign = GmCXt.user.cdn_signature;
    }

    return sign;
};

// This listener is only in Guide iframe
window.addEventListener('message', function(event) {
	if (!GmCXt) {
		GmCXt = event.target.GmCXt;
	}
	var message = parseMsg(event);

	if (!message) return;
	if (!message.action || message.action.indexOf('mgPlayerJSTest2_action:') !== 0) return;

	if (message.mgdata && message.mgdata.playerInstance) {
		GmCXt.playerI = message.mgdata.playerInstance

		// if (message.data.config) {
		// 	GmCXt.conf = message.data.config;
		// }

		// if (message.data.user && !GmCXt.isEmpty(message.data.user)) {
		// 	GmCXt.updateGlobalUser(message.data.user);
		// }
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
			document.documentElement.insertAdjacentHTML('beforeend', message.mgdata.data);
			document.querySelectorAll('.mgPlayerJSTest2_audio-iframe-icons').forEach((element) => {
				element.removeAttribute('style');
			});
			if (message.mgdata.user) GmCXt.user = message.mgdata.user;	  
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
			var step = getStepFromPlayerI(GmCXt.playerI.currentStepId);
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
		audioTrack = audioTrack + getCdnSign();
	}

	GmCXt.checkAssetUrl(audioTrack, audioTrack, play);

};

GmCXt.stopAudio = function() {
	if (GmCXt.audioObject) GmCXt.audioObject.pause();
};

function formatAndSendToParentWindow(action, data) {

	var obj = {};
	obj.action = action;
	obj.mgdata = data || {};

	if (GmCXt.playerI || GmCXt.playerI === null) {
		obj.mgdata.playerInstance = GmCXt.playerI;
	}
	GmCXt.msgChannel.port1.postMessage(JSON.stringify(obj));
}

function getStepFromPlayerI (step_id) {
    var step = false;
    var steps = [];

    var steps = GmCXt.playerI.tour.steps;

    for (var i = 0; i < steps.length; i++) {
        if (parseInt(steps[i].step_id) === parseInt(step_id)) {
            step = steps[i];
            break;
        }
    }
	if (!step.step_description) step.step_description = " ";

    // Map properties
    step.image_url = step.image_url + getCdnSign();
    step.screen_url = step.screen_url + getCdnSign();
    return step;
};

document.querySelectorAll('.mgPlayerJSTest2_play-step-audio-on').forEach((element) => {
	element.addEventListener('click', function() {
		userPrefAudio = true;
		GmCXt.stopAudio();
		formatAndSendToParentWindow('mgPlayerJSTest2_action:stop_audio', {});
		setAudioModeOff();
	});
});
document.querySelectorAll('.mgPlayerJSTest2_play-step-audio-off').forEach((element) => {
	element.addEventListener('click', function() {
		userPrefAudio = true;
		if (GmCXt.playerI) {
			var step = getStepFromPlayerI(GmCXt.playerI.currentStepId);
			message = {
				audioTrack: step.step_audio,
				step: step
			}
			GmCXt.isPageReloaded = false;
			GmCXt.playStepAudio(message);
		}
	});
});

document.addEventListener('DOMContentLoaded', function() {
	formatAndSendToParentWindow('mgPlayerJSTest2_action:set_style_audio_icon', {});
});