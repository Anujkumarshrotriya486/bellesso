if (GmCXt === undefined) {
	var GmCXt = {};
}

GmCXt.conf = {};
GmCXt.conf.version = "2025.1.3";
GmCXt.conf.env = "Test2";

GmCXt.conf.creatorApp = 'mgExt';
GmCXt.conf.playerApp = 'mgPlayer';
GmCXt.conf.creatorJS = 'mgCreator';
GmCXt.conf.appName = "mgPlayer";

GmCXt.conf.allowedDomains = [];
GmCXt.conf.autologin = false;
GmCXt.conf.appTypeExt = 'Extension';
GmCXt.conf.appTypeScript = 'JScript';
GmCXt.conf.appTypeElectron = 'electron';
GmCXt.conf.Premise = 'Premise';
GmCXt.conf.runEnv = "browser";
GmCXt.conf.msgPrefix = "mgPlayerJSTest2_";

GmCXt.conf.showWidget = true;

GmCXt.conf.playerExtension = GmCXt.conf.playerApp + GmCXt.conf.appTypeExt;
GmCXt.conf.playerJS = GmCXt.conf.playerApp + GmCXt.conf.appTypeScript;

GmCXt.conf.websiteUrl = "https://myguide.org";
GmCXt.conf.privacyPolicyUrl = "https://www.edcast.com/corp/privacy-policy/";
GmCXt.conf.termsURL = "https://www.edcast.com/corp/terms-of-service/";
GmCXt.conf.feedbackDetails = "mailto:support@csod.com?Subject=MyGuide Feedback";
GmCXt.conf.adminEmail = "<a href='mailto:admin@edcast.com' target='_top'>admin@edcast.com</a>";
GmCXt.conf.hideCaptcha = "";

try {
	chrome.runtime.onMessage.addListener(function() {
		return true;
	});
	GmCXt.conf.appType = GmCXt.conf.appTypeExt;
} catch (e) {
	try {
		var uri = safari.extension.baseURI;
		if (uri !== null) {
			GmCXt.conf.appType = GmCXt.conf.appTypeExt;
		}
	} catch (e2) {
		GmCXt.conf.appType = GmCXt.conf.appTypeScript;
	}
}

// Default true, guideme icon will be visible on all urls. 
// If false, guideme icon will only be visible on urls where user have created tours. 

GmCXt.conf.allUrls = true;

GmCXt.conf.provider = "Cdn";

GmCXt.conf.storageUrl = "";

GmCXt.setOnPremise = function() {

	function apply(p) {
		if (p.apiSecrret) GmCXt.conf.apiSecrret = p.apiSecrret;
		if (p.apiUrl) GmCXt.conf.webServiceUrl = p.apiUrl;
		if (p.analyticsUrl) GmCXt.conf.analyticsPath = p.analyticsUrl;
		if (p.cdnUrl) GmCXt.conf.staticContentPath = p.cdnUrl;
		if (p.webPortal) GmCXt.conf.webPortalUrl = p.webPortal;
		if (p.analyticsPortal) GmCXt.conf.analyticsPortalUrl = p.analyticsPortal;
		if (p.assetPath) GmCXt.conf.staticContentPath = p.assetPath;
	}

	if (GmCXt.conf.appName === GmCXt.conf.creatorApp) {

		if (GmCXt.onPremise) {
			apply(GmCXt.onPremise);
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

GmCXt.setConfig = function() {
	GmCXt.conf.apiSecrret = "TESTAUTHKEY";
	GmCXt.conf.orgSecrret = "";
	GmCXt.conf.clientJsBaseUrl = "https://anujkumarshrotriya486.github.io/bellesso/player/";
	GmCXt.conf.chromeExtensionUrl = "";
	GmCXt.conf.webServiceUrl = "https://qa2-api.guideme.io/v3/";
	GmCXt.conf.staticContentPath = "https://qa2-cdn.guideme.io/guideme-assests/";
	GmCXt.conf.webPortalUrl = "https://qa2-admin.guideme.io/";
	GmCXt.conf.analyticsPath = "https://qa2-insightsapi.guideme.io/";
	GmCXt.conf.analyticsPortalUrl = "https://qa2-insights.guideme.io/";

	GmCXt.conf.cdnStorage = "https://qa2-cdn.guideme.io/";
	GmCXt.conf.jsonStorageUrl = "https://qa2-mycdn.guideme.io/";
	
	GmCXt.conf.ssoRedirectionUrl = "https://qa2-sso.guideme.io/saml2/sp/sso/";
	GmCXt.conf.ssoApiUrl = "https://qa2-sso.guideme.io/saml2/sp/session/";
	GmCXt.conf.ssoConfigUrl = "https://qa2-cdn.guideme.io/guideme-auth-qa2/"+"objects/";
	GmCXt.conf.publicTimestampUrl = "https://qa2-cdn.guideme.io/guideme-auth-qa2/"+"timestamp/";

	GmCXt.conf.paymentEndPoint = "";

	GmCXt.setOnPremise();
};

GmCXt.setConfig();

(function() {
	if (GmCXt.conf.appType === GmCXt.conf.appTypeExt) {

		var root = '';

		if (GmCXt.browserApp === 'Safari') {
			root = safari.extension.baseURI;
		} else if (GmCXt.browserApp === 'firefox' ) {

			root = chrome.extension.getURL('');

		} else {
			root = chrome.runtime.getURL('');
		}
	}

})();

GmCXt.conf.appConfig = {
	login: { guideme: 1, forgotPass: 1 },
	requireLogin: true,
	tourViewOptions: { showMe:1, testme:1, audio:1 },
	defaultIcon: 'myguide.png',
	isLXP: false,
	customer: 'myguide',
	desktopCommunication: false,
	iframeInjection: true
};