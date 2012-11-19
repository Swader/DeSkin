// These are the elements that get force-fed ad styles
var ids = new Array("watch-headline-show-title", "watch-headline-title", "content");

// Cache the array count to get the fastest looping
var idsCount = ids.length;

// Loop through every one of those IDs and..
while(idsCount--) {
	// Fetch the element by current ID
	var element = document.getElementById(ids[idsCount]);
	// If the element was found...
	if (element != undefined || element) {
		// Create a new one with the same ID
		var new_element = document.createElement(element.nodeName);
		new_element.id = element.id;
		// Change the ID of the old one to something randomly different
		element.id = element.id + "_deskin";
		// Add the new fake element with the old element's ID to the content of the page
		var body = document.getElementsByTagName("body")[0];
		body.appendChild(new_element);
	}
}

// Show address bar icon (calls scripts/background.js)
chrome.extension.sendMessage({}, function(response) {});