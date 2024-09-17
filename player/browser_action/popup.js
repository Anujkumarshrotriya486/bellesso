mg$(document).ready(function() {
	GmPXtTest.getAllLabels(GmPXtTest.mgActiveLang);

	if (GmPXtTest.isWB()) {
		mg$(".mgPlayerExtChromeTest_browser-action-popup-container").remove();
		mg$(".mgPlayerExtChromeTest_wb-action-popup-container").removeClass('mgPlayerExtChromeTest_hidden');
	} else {
		mg$(".mgPlayerExtChromeTest_wb-action-popup-container").remove();
	}

	mg$('#mgPlayerExtChromeTest_action_popup_close').on("click", function() {
		window.close();
	});

	mg$('#mgPlayerExtChromeTest_btn_enable_cookies').on("click", function() {
		var newURL = "chrome://settings/content/cookies";
		chrome.tabs.create({
			url: newURL
		});
	});

	mg$("#mgPlayerExtChromeTest_url-msg-wrapper").text(GmPXtTest.label.badDomain);

});