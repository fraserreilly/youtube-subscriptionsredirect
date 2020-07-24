// ==UserScript==
// @name         Youtube Subscriptions Redirect
// @namespace    https://github.com/spacegIider
// @version      1.0
// @description  Shows all subscribed videos in subscription feed.
// @author       Spaceglider
// @match        *://www.youtube.com/feed/subscriptions
// @grant        none
// @homepageURL  https://github.com/spacegIider/Youtube-Subscriptions-Redirect
// @supportURL   https://github.com/spacegIider/Youtube-Subscriptions-Redirect/issues
// @downloadURL  https://raw.githubusercontent.com/spacegIider/Youtube-Subscriptions-Redirect/redirect.js
// @updateURL    https://raw.githubusercontent.com/spacegIider/Youtube-Subscriptions-Redirect/redirect.js
// ==/UserScript==

var BadDumbYoutubeURL = window.location.pathname;

if ( ! /\?flow=1$/.test (BadDumbYoutubeURL) ) {
    var ActuallySeeAllVideosURL = window.location.protocol + "//"
                                + window.location.host
                                + BadDumbYoutubeURL + "?flow=1"
                                +window.location.search
                                +window.location.hash
                                ;

    window.location.replace (ActuallySeeAllVideosURL);
}
