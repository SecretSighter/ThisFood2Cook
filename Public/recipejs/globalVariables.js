/*
* Function explanation: returns a object container for all global variables
* Variable pub: object to be returned as a public vairable
* Variable id_array: array containing temporary HTML element IDs
* Variable config_const: object containing values to create constants
* Variable response: file containing recipes
*/
var globe = (function () {
    'use strict';
    var pub = {},
        id_array = [],
        config_const = {
            writable:       false,
            enumerable:     false,
            configurable:   false
        },
        response = null;

    // id_array menthods start -----------------------
    /*
    * Method explanation: adds element to ID array
    */
    pub.addID = function (IDinput) {
        id_array.push(IDinput);
    };

    /*
    * Method explanation: empties ID array
    */
    pub.unloadID = function () {
        id_array = [];
    };

    /*
    * Method explanation: returns ID array element
    * return: array element
    */
    pub.getID = function (IDinput) {
        return id_array[IDinput];
    };

    pub.lengthID = function () {
        return id_array.length;
    };
    // id_array methods end --------------------------

    // constants methods start -------------------------------
    /*
    * Function explanation: adds a property to object
    * Parameter obj: object to add property to
    * Parameter name: name of property
    * Parameter value: value of property
    */
    function defineConstant(obj, name, value) {
        config_const.value = value;
        Object.defineProperty(obj, name, config_const);
    }

    // HTML elment constatnts
    defineConstant(pub, 'search_type_name',          document.getElementById("search_type_name"));
    defineConstant(pub, 'results_div',               document.getElementById("search_results"));
    defineConstant(pub, 'display_recipe',            document.getElementById("recipe_display"));
    defineConstant(pub, 'search_type_ingredient',    document.getElementById("search_type_ingredient"));
    defineConstant(pub, 'user_search',               document.getElementById("search_for"));
    defineConstant(pub, 'hint_span',                 document.getElementById("hint_span"));

    // Event constatnts
    defineConstant(pub, 'Search_type_change',        "change");
    defineConstant(pub, 'user_event_keyup',          "keyup");
    defineConstant(pub, 'user_event_click',          "click");

    // Url
    defineConstant(pub, 'recipe_file',               "http://localhost/Recipes/Private/recipesContainer.json");
    // constants methods end ---------------------------------

    // recipie methods start ---------------------------------
    /*
    * Function explanation: get json file from server
    * Parameter callBack: function to return server file to as a perameter
    */
    function getrecipesFromServer(callback) {
        var httpRequest = new XMLHttpRequest();

        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState === 4 && httpRequest.status === 200) {
                callback(httpRequest.responseText);
            }
        };

        httpRequest.open("GET", pub.recipe_file, true);
        httpRequest.send();
    }

    /*
    * Function explanation: check if file is recieved from the server. if not get file
    */
    (function callInfo() {
        getrecipesFromServer(function (server_response) {
            response = JSON.parse(server_response);
        });
    }());

    /*
    * Method explanation: select recipe file
    * Return: recipie file
    */
    pub.getRecipes = function () {
        return response;
    };
    // recipe methods end ------------------------------------

    return pub;
}());