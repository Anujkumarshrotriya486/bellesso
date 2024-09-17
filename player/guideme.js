var configPath = null;
if (typeof guideMe === 'undefined') {
	guideMe = {};
}
if (!guideMe.baseUrl) {
	guideMe.baseUrl = "//stagecdn.guideme.io/guideme-player/ent/";
}
configPath = guideMe.baseUrl + 'config.js';
var playerExtImgUrl = "";

function getScript(source, callback) {
	if (source) {
		var el = document.createElement('script');
		el.onload = callback;
		el.src = source;

		document.head.appendChild(el);
	} else {
		console.log("Invalid config path");
	}
}

function getScriptCB() {

	GmPXtTest.conf.baseUrl = guideMe.baseUrl;
	var a = document.createElement('script');

	if (GmPXtTest.conf.allowedDomains && GmPXtTest.conf.allowedDomains.length && window.location.hostname.length > 0) {
		var foundDomain = false;
		for (var i = 0; i < GmPXtTest.conf.allowedDomains.length; i++) {
			if (window.location.hostname.indexOf(GmPXtTest.conf.allowedDomains[i]) >= 0) {
				foundDomain = true;
				break;
			}
		}

		if (foundDomain) {
			loadGuideMeClientFiles();
		}
	} else {
		loadGuideMeClientFiles();
	}

	function loadGuideMeClientFiles() {
		if (window.self === window.top) {
			a.src = GmPXtTest.conf.baseUrl + 'gm_client.js';
		} else {
			a.src = GmPXtTest.conf.baseUrl + 'gm_client_iframe.js';
		}
		document.head.appendChild(a);
	}
};

function detectExtension() {
	if(playerExtImgUrl){
		var img;
	    img = new Image();
	    img.src = playerExtImgUrl;
	    img.onload = function() {
	        console.log("MyGuide player Extension installed, Skiping client JS load.");
	    };
	    img.onerror = function() {
	        getScript(configPath, getScriptCB );
	    };
	} else{
		getScript(configPath, getScriptCB );
	}
    
}

detectExtension();