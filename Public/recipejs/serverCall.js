var serverCallMonitor = {
    response: null,

    /*
    * Method explanation: get json file from server
    * Parameter callBack: function to return server file to as a perameter
    */
    getrecipesFromServer: function (callback) {
        var httpRequest = new XMLHttpRequest();

        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState === 4 && httpRequest.status === 200) {
                callback(httpRequest.responseText);
            }
        };

        httpRequest.open("GET", globe.recipe_file, true);
        httpRequest.send();
    },

    /*
    * Method explanation: check if file is recieved from the server. if not get file
    */
    callInfo: function () {
        var get_response;
        if (this.response === null) {
            this.getrecipesFromServer(function (server_response) {
                serverCallMonitor.response = JSON.parse(server_response);
            });
        }
    }
};

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
        displaySearchResults(serverCallMonitor.response, cleaned_string);
    } else {
        if(globe.getID(0)) {
            removeLink();
        }
        globe.results_div.innerHTML = "";
    }
}