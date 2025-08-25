// ==UserScript==
// @name         PhotopeaUselessGapRemover (PUGR)
// @namespace    https://github.com/progzone122/pugr
// @version      2025-08-26
// @description  Removes the right gap (block) in Photopea used to display ads, expanding the workspace
// @author       DiabloSat (progzone122)
// @match        https://www.photopea.com/*
// @icon         https://raw.githubusercontent.com/progzone122/pugr/refs/heads/main/logo.webp
// @updateURL    https://raw.githubusercontent.com/progzone122/pugr/refs/heads/main/pugr.user.js
// @downloadURL  https://raw.githubusercontent.com/progzone122/pugr/refs/heads/main/pugr.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if (!Object.getOwnPropertyDescriptor(window, 'innerWidth')?.configurable) {
        console.warn('innerWidth is not configurable. Skipping.');
    } else {
        Object.defineProperty(window, 'innerWidth', {
            get() { return document.documentElement.offsetWidth + 320 },
            configurable: true
        });
    }
})();
