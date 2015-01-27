var serverCallMonitor = {
    response: null,

    /*
    * Function explanation: get json file from server
    * Parameter callBack: function to return server file to as a perameter
    */
    getrecipesFromServer: function (callback) {
        var httpRequest = new XMLHttpRequest();

        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState === 4 && httpRequest.status === 200) {
                callback(httpRequest.responseText);
            }
        };

        httpRequest.open("GET", _const.recipe_file, true);
        httpRequest.send();
    },

    /*
    * Function explanation: check if file is recieved from the server. if not get file.
    */
    callInfo: function () {
        var get_response;
        if (this.response === null) {
            this.getrecipesFromServer(function (server_response) {
                serverCallMonitor.response = JSON.parse(server_response);
            });
        }
    }

    /*
    * Function explanation: search ingredients for match.
    * Parameter clicked_recipe: ingredient to search for.
    * Returns: array containing ingredient index.
    */
    getRecipesByIngredient: function(clicked_recipe) {
        var recipe_array = [];

        for (i = 0; i < this.response.length; i += 1) {
            for (j = 0; j < this.response[i].ingredients.length; j += 1) {
                if (this.response[i].ingredients[j].ingredient === clicked_recipe) {
                    recipe_array.push(i);
                    break;
                }
            }
        }
        return recipe_array;
    }
};

function escapeRegExp(string){
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

//check for user search. output search results.
function searchrecipes() {
    var cleaned_string = escapeRegExp(_const.user_search.value)
    if (cleaned_string !== "") {
        displaySearchResults(serverCallMonitor.response, cleaned_string);
    } else {
        if(id_array[0]) {
            removeLink();
        }
        _const.results_div.innerHTML = "";
    }
}