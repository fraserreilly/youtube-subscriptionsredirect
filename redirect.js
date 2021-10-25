// ==UserScript==
// @name         Youtube Subscriptions Redirect
// @namespace    https://github.com/fraserreilly
// @version      1.0
// @license      MIT
// @description  Shows all subscribed videos in subscription feed.
// @author       fraserreilly
// @match        *://www.youtube.com/feed/subscriptions
// @grant        none
// @homepageURL  https://github.com/fraserreilly/Youtube-Subscriptions-Redirect
// @supportURL   https://github.com/fraserreilly/Youtube-Subscriptions-Redirect/issues
// @downloadURL  https://raw.githubusercontent.com/fraserreilly/Youtube-Subscriptions-Redirect/redirect.js
// @updateURL    https://raw.githubusercontent.com/fraserreilly/Youtube-Subscriptions-Redirect/redirect.js
// ==/UserScript==

var bYoutubeURL = window.location.pathname;

if ( ! /\?flow=1$/.test (badYoutubeURL) ) {
    var DisplayAllVideosURL = window.location.protocol + "//"
                                + window.location.host
                                + badYoutubeURL + "?flow=1"
                                +window.location.search
                                +window.location.hash
                                ;

    window.location.replace (DisplayAllVideosURL);
}
