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
    },

    /*
    * Method explanation: search ingredients for match
    * Parameter clicked_recipe: ingredient to search for
    * Returns: array containing recipe index
    */
    getRecipeIndex: function(clicked_recipe) {
        var recipe_index = [];

        for (i = 0; i < this.response.length; i += 1) {
            for (j = 0; j < this.response[i].ingredients.length; j += 1) {
                if (this.response[i].ingredients[j].ingredient === clicked_recipe) {
                    recipe_index.push(i);
                    break;
                }
            }
        }
        return recipe_index;
    },

    /*
    * Method explanation: search ingredients for match
    * Parameter clicked_recipe: ingredient to search for
    * Returns: array containing ingredient index
    */
    getIngredientIndex: function() {
        var ingredient_index = [];

        for (i = 0; i < this.response.length; i += 1) {
            for (j = 0; j < this.response[i].ingredients.length; j += 1) {
                if (this.response[i].ingredients[j].ingredient === clicked_recipe) {
                    ingredient_index[i].push(i);
                    break;
                }
            }
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