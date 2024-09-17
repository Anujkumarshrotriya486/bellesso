if (GmPXtTest === undefined) {
	var GmPXtTest = {};
}

GmPXtTest.conf = {};
GmPXtTest.conf.version = "2024.5.0";
GmPXtTest.conf.env = "Test";

GmPXtTest.conf.creatorApp = 'mgExt';
GmPXtTest.conf.playerApp = 'mgPlayer';
GmPXtTest.conf.creatorJS = 'mgCreator';
GmPXtTest.conf.appName = "mgPlayer";

GmPXtTest.conf.allowedDomains = [];
GmPXtTest.conf.autologin = false;
GmPXtTest.conf.appTypeExt = 'Extension';
GmPXtTest.conf.appTypeScript = 'JScript';
GmPXtTest.conf.appTypeElectron = 'electron';
GmPXtTest.conf.Premise = 'Premise';
GmPXtTest.conf.runEnv = "browser";
GmPXtTest.conf.msgPrefix = "mgPlayerExtChromeTest_";

GmPXtTest.conf.showWidget = false;

GmPXtTest.conf.playerExtension = GmPXtTest.conf.playerApp + GmPXtTest.conf.appTypeExt;
GmPXtTest.conf.playerJS = GmPXtTest.conf.playerApp + GmPXtTest.conf.appTypeScript;

GmPXtTest.conf.websiteUrl = "https://myguide.org";
GmPXtTest.conf.privacyPolicyUrl = "https://www.edcast.com/corp/privacy-policy/";
GmPXtTest.conf.termsURL = "https://www.edcast.com/corp/terms-of-service/";
GmPXtTest.conf.feedbackDetails = "mailto:support@csod.com?Subject=MyGuide Feedback";
GmPXtTest.conf.adminEmail = "<a href='mailto:admin@edcast.com' target='_top'>admin@edcast.com</a>";
GmPXtTest.conf.hideCaptcha = "";

try {
	chrome.runtime.onMessage.addListener(function() {
		return true;
	});
	GmPXtTest.conf.appType = GmPXtTest.conf.appTypeExt;
} catch (e) {
	try {
		var uri = safari.extension.baseURI;
		if (uri !== null) {
			GmPXtTest.conf.appType = GmPXtTest.conf.appTypeExt;
		}
	} catch (e2) {
		GmPXtTest.conf.appType = GmPXtTest.conf.appTypeScript;
	}
}

// Default true, guideme icon will be visible on all urls. 
// If false, guideme icon will only be visible on urls where user have created tours. 

GmPXtTest.conf.allUrls = true;

GmPXtTest.conf.provider = "Cdn";

GmPXtTest.conf.storageUrl = "";

GmPXtTest.setOnPremise = function() {

	function apply(p) {
		if (p.apiSecrret) GmPXtTest.conf.apiSecrret = p.apiSecrret;
		if (p.apiUrl) GmPXtTest.conf.webServiceUrl = p.apiUrl;
		if (p.analyticsUrl) GmPXtTest.conf.analyticsPath = p.analyticsUrl;
		if (p.cdnUrl) GmPXtTest.conf.staticContentPath = p.cdnUrl;
		if (p.webPortal) GmPXtTest.conf.webPortalUrl = p.webPortal;
		if (p.analyticsPortal) GmPXtTest.conf.analyticsPortalUrl = p.analyticsPortal;
		if (p.assetPath) GmPXtTest.conf.staticContentPath = p.assetPath;
	}

	if (GmPXtTest.conf.appName === GmPXtTest.conf.creatorApp) {

		if (GmPXtTest.onPremise) {
			apply(GmPXtTest.onPremise);
		} else {
			chrome.storage.sync.get({
				onPrem_appKey: '',
				onPrem_apiUrl: '',
				onPrem_insightsUrl: '',
				onPrem_cdnUrl: '',
				onPrem_adminPortal: '',
				onPrem_insightsPortal: '',
				onPrem_assetPath: ''
			}, function(items) {
				var prem = {
					appKey: items.onPrem_appKey,
					apiUrl: items.onPrem_apiUrl,
					analyticsUrl: items.onPrem_insightsUrl,
					cdnUrl: items.onPrem_cdnUrl,
					webPortal: items.onPrem_adminPortal,
					analyticsPortal: items.onPrem_insightsPortal,
					assetPath: items.onPrem_assetPath
				};
				apply(prem);
			});
		}
	}
};

GmPXtTest.setConfig = function() {
	GmPXtTest.conf.apiSecrret = "TESTAUTHKEY";
	GmPXtTest.conf.orgSecrret = "";
	GmPXtTest.conf.clientJsBaseUrl = "//stagecdn.guideme.io/guideme-player/ent/";
	GmPXtTest.conf.chromeExtensionUrl = "";
	GmPXtTest.conf.webServiceUrl = "https://qa-api.guideme.io/v3/";
	GmPXtTest.conf.staticContentPath = "https://stagecdn.guideme.io/guideme-assests/";
	GmPXtTest.conf.webPortalUrl = "https://qa-admin.myguide.org/";
	GmPXtTest.conf.analyticsPath = "https://analytics-qa.guideme.io/";
	GmPXtTest.conf.analyticsPortalUrl = "https://analytics-qa.myguide.org/";

	GmPXtTest.conf.cdnStorage = "https://stagecdn.guideme.io/";
	GmPXtTest.conf.jsonStorageUrl = "https://stage-mycdn.guideme.io/";
	
	GmPXtTest.conf.ssoRedirectionUrl = "https://qa-sso.guideme.io/saml2/sp/sso/";
	GmPXtTest.conf.ssoApiUrl = "https://qa-sso.guideme.io/saml2/sp/session/";
	GmPXtTest.conf.ssoConfigUrl = "https://stagecdn.guideme.io/guideme-auth-qa/objects/";

	GmPXtTest.conf.paymentEndPoint = "";

	GmPXtTest.setOnPremise();
};

GmPXtTest.setConfig();

(function() {
	if (GmPXtTest.conf.appType === GmPXtTest.conf.appTypeExt) {

		var root = '';

		if (GmPXtTest.browserApp === 'Safari') {
			root = safari.extension.baseURI;
		} else if (GmPXtTest.browserApp === 'firefox' ) {

			root = chrome.extension.getURL('');

		} else {
			root = chrome.runtime.getURL('');
		}
	}

})();

GmPXtTest.conf.appConfig = {
	login: { guideme: 1, forgotPass: 1 },
	requireLogin: true,
	tourViewOptions: { showMe:1, testme:1, audio:1 },
	defaultIcon: 'myguide.png',
	isLXP: false,
	customer: 'myguide',
	desktopCommunication: false,
	iframeInjection: true
};