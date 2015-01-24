var config_const = {
    writable: false,
    enumerable: false,
    configurable: false
};

var defineConstant = function(obj, name, value) {
    config_const.value = value;
    Object.defineProperty(obj, name, config_const);
}
 
var _const = Object.create(null);
defineProperty(_const, 'search_type', document.getElementById("search_type_name"));
defineProperty(_const, 'results_div',   document.getElementById("search_results"));
defineConstant(_const, 'display_recipe',   document.getElementById("recipe_display"));
defineConstant(_const, 'user_input',   document.getElementById("search_for"));
defineConstant(_const, 'user_input',   document.getElementById("search_for"));
defineConstant(_const, 'user_input',   document.getElementById("search_for"));
defineConstant(_const, 'user_input',   document.getElementById("search_for"));
defineConstant(_const, 'user_input',   document.getElementById("search_for"));
defineConstant(_const, 'user_input',   document.getElementById("search_for"));
defineConstant(_const, 'user_input',   document.getElementById("search_for"));
defineConstant(_const, 'user_input',   document.getElementById("search_for"));
defineConstant(_const, 'user_input',   document.getElementById("search_for"));
defineConstant(_const, 'user_input',   document.getElementById("search_for"));
defineConstant(_const, 'user_input',   document.getElementById("search_for"));