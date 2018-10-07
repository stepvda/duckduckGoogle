let urlParams = new URLSearchParams(window.location.search);

if(urlParams.has("q")) {

    function searchGoogle() {
        var searchText=document.querySelector("#search_form_input").value;
        window.open("https://www.google.com/search?q="+searchText,"_self");
    }

    var dSearch=document.querySelector("#search_button")
    var gSearch=dSearch.cloneNode(true);
    dSearch.id="google_search";
    //dSearch.tabIndex=3;
    //dSearch.insertAdjacentElement("afterend",gSearch);


    var dSearchForm=document.querySelector("#header > div.header__search-wrap > div:nth-child(2)");
    var gSearchForm=dSearchForm.cloneNode(false); 

    dSearchForm.insertAdjacentElement("afterend",gSearchForm);
    gSearchForm.appendChild(gSearch);
    gSearch.addEventListener("click",searchGoogle);

}