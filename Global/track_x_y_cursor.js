// ==UserScript==
// @version      2026-03-19
// @name         Cursor X Y
// @description  Display cursor X Y coordinates
// @namespace    lp177
// @author       lp177
// @match        https://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @grant        GM_registerMenuCommand
// @run-at       context-menu
// @noframes
// @downloadURL  https://raw.githubusercontent.com/lp177/monkeysScripts/master/Global/track_x_y_cursor.js
// @updateURL    https://raw.githubusercontent.com/lp177/monkeysScripts/master/Global/track_x_y_cursor.js
// ==/UserScript==

(function() {
	'use strict';
	if (document.querySelector('#track_x_y_177'))
		return console.error('track_x_y_177 already injected');
	document.querySelector('body').insertAdjacentHTML('beforeend', `
		<div style="position: fixed; top: 10px; right: 10px; background: rgba(0,0,0,0.8); color: white; padding: 10px; font-family: monospace; z-index: 9999;" id="track_x_y_177">
			<div>X: <span id="mouseX">0</span></div>
			<div>Y: <span id="mouseY">0</span></div>
		</div>
	`);

	const mouseXDisplay = document.getElementById('mouseX');
	const mouseYDisplay = document.getElementById('mouseY');

	// Add an event listener for the 'mousemove' event on the entire document
	document.addEventListener('mousemove', (event) => {
		// clientX and clientY provide coordinates relative to the browser viewport
		const clientX = event.clientX;
		const clientY = event.clientY;

		// pageX and pageY provide coordinates relative to the top-left of the *entire* document, accounting for scroll
		// You can use clientX/clientY for this example as the display box is "fixed"

		// Update the text content of the spans
		mouseXDisplay.textContent = clientX;
		mouseYDisplay.textContent = clientY;
	});
})();
