// ==UserScript==
// @name         AutoTrimps-Ray
// @version      6.0.0.0
// @namespace    https://github.com/Mega-Git/AutoTrimps
// @downloadURL  https://github.com/Mega-Git/AutoTrimps/.user.js
// @updateURL    https://github.com/Mega-Git/AutoTrimps/.user.js
// @description  Automate all the trimps!
// @author       zininzinin, spindrjr, Ishkaru, genBTC, Zeker0, Psycho-Ray, livercat
// @include      *trimps.github.io*
// @include      *kongregate.com/games/GreenSatellite/trimps
// @connect      *Zorn192.github.io/AutoTrimps*
// @connect      *trimps.github.io*
// @connect      self
// @grant        GM_xmlhttpRequest
// ==/UserScript==

var script = document.createElement('script');
script.id = 'AutoTrimps-Ray';
//This can be edited to point to your own Github Repository URL.
script.src = 'https://raw.githack.com/Mega-Git/AutoTrimps/gh-pages/AutoTrimps2.js';
//script.setAttribute('crossorigin',"use-credentials");
script.setAttribute('crossorigin',"anonymous");
document.head.appendChild(script);
