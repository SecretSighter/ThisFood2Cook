/*
* Function explanation: returns a object container for all global variables
* Variable pub: object to be returned as a public vairable
* Variable id_array: array containing temporary HTML element IDs
* Variable config_const: object containing values to create constants
*/
var globe = (function() {
    var pub = {},
        id_array = [],
        config_const = {
            writable:       false,
            enumerable:     false,
            configurable:   false
        };

    // id_array menthods start -----------------------
    /*
    * Method explanation: adds element to ID array
    */
    pub.addID = function(IDinput) {
        id_array.push(IDinput);
    },

    /*
    * Method explanation: empties ID array
    */
    pub.unloadID = function() {
        id_array = [];
    },

    /*
    * Method explanation: returns ID array element
    * return: array element
    */
    pub.getID = function(IDinput) {
        return id_array[IDinput];
    };
    // id_array methods end --------------------------

    // constants start -------------------------------
    /*
    * Function explanation: adds a property to object
    * Parameter obj: object to add property to
    * Parameter name: name of property
    * Parameter value: value of property
    */
    defineConstant = function(obj, name, value) {
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
        // constants end -----------------------------

    return pub;
}());