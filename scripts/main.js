var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		var element = document.getElementById('watch7-video-container');
		if (element != undefined || element) {
			var new_element = document.createElement(element.nodeName);
			new_element.id = element.id;
			element.id = element.id + "_deskin";
			element.style.paddingLeft = '225px';

			var body = document.getElementsByTagName("body")[0];
			body.appendChild(new_element);
		}
	}
	}, 10
);

chrome.extension.sendMessage({}, function(response) {});