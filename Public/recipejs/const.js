var config_const = {
    writable:       false,
    enumerable:     false,
    configurable:   false
};

var defineConstant = function(obj, name, value) {
    config_const.value = value;
    Object.defineProperty(obj, name, config_const);
}

// Constant container
var _const = Object.create(null);

// HTML elment constatnts
defineConstant(_const, 'search_type_name',          document.getElementById("search_type_name"));
defineConstant(_const, 'results_div',               document.getElementById("search_results"));
defineConstant(_const, 'display_recipe',            document.getElementById("recipe_display"));
defineConstant(_const, 'search_type_ingredient',    document.getElementById("search_type_ingredient"));
defineConstant(_const, 'user_search',               document.getElementById("search_for"));

// Event constatnts
defineConstant(_const, 'Search_type_change',        "change");
defineConstant(_const, 'user_event_keyup',          "keyup");
defineConstant(_const, 'user_event_click',          "click");

// Url
defineConstant(_const, 'recipe_file',               "http://localhost/Recipes/Private/recipesContainer.json");