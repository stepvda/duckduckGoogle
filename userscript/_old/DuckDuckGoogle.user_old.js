// ==UserScript==
// @name         DuckDuckGoogle
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://duckduckgo.com/*
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

 var urlParams = new URLSearchParams(window.location.search);
if(urlParams.has("q")) {


function addGoogleSearchButton() {
       function searchGoogle() {
            var searchText=document.querySelector("#search_form_input").value;
            window.open("https://www.google.com/search?q="+searchText,"_self");
        }

        var dSearch=document.querySelector("#search_button");
        var gSearch=dSearch.cloneNode(true);
        dSearch.id="google_search";

        var dSearchForm=document.querySelector("#header > div.header__search-wrap > div");
        var gSearchForm=dSearchForm.cloneNode(false);

        dSearchForm.insertAdjacentElement("afterend",gSearchForm);
        gSearchForm.appendChild(gSearch);
        gSearch.addEventListener("click",searchGoogle);

    }

    window.onload=function(){
        setTimeout(addGoogleSearchButton,0);
    }
//console.log("Userscript DuckDuckGoogle executed ---@v2---");
}
})();