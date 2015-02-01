

/*
* Function explanation: cleans user input
* Parameter string: user input
* Returns: clean string
*/
function escapeRegExp(string){
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/*
* Function explanation: checks user input to determin if recipes should be searched
*/
function searchrecipes() {
    var cleaned_string = escapeRegExp(globe.user_search.value)
    if (cleaned_string !== "") {
        displaySearchResults(globe.getRecipes(), cleaned_string);
    } else {
        if(globe.getID(0)) {
            removeLink();
        }
        globe.results_div.innerHTML = "";
    }
}