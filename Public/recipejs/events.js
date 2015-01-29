/*
* Object explanation: container for all global variables
* Variable id_array: array containing temporary HTML element IDs
*/
var globe = (function() {
    var pub = {},
        id_array = [];

        //id_array menthods start
        pub.addID = function(IDinput) {
            id_array.push(IDinput);
        },

        pub.unloadID = function() {
            id_array = [];
        },

        pub.getID = function(IDinput) {
            return id_array[IDinput];
        };
        //id_array methods end

    return pub;
}());

/*
* Function explanation: removes event listeners from elements
*/
function load(element_to_use, event_to_listen_for, function_to_call) {
    element_to_use.addEventListener(event_to_listen_for, function_to_call, false);
}

/*
* Function explanation: adds event listeners to elements
*/
function unload(element_to_use, event_to_listen_for) {
    element_to_use.removeEventListener(event_to_listen_for, false);
}

/*
* Function explanation: loops though elemetns needing event handlers removed
*/
function removeLink() {
    var destroy_element,
        i;

    for (i = 0; i < globe.getID.length; i += 1) {
        destroy_element = document.getElementById(globe.getID(i));
        unload(destroy_element, _const.user_event_click);
    }

    globe.unloadID();
}

/*
* Function explanation: create link to search generated elements
*/
function createLink() {
    var create_element,
        i;

    if (_const.search_type_name.checked) {
        for (i = 0; i < globe.getID.length; i += 1) {
            create_element = document.getElementById(globe.getID(i));
            load(create_element, _const.user_event_click, function(e) {
                dispalySelectedRecipe(e.target.id);
            });
        }
    } else {
        for (i = 0; i < globe.getID.length; i += 1) {
            create_element = document.getElementById(globe.getID(i));
            load(create_element, _const.user_event_click, function(e) {
                displayIngredientSearch(e.target.id);
            });
        }
    }
}

function loadInitialListeners() {

    serverCallMonitor.callInfo();

    load(_const.user_search,            _const.user_event_keyup,   searchrecipes);
    load(_const.search_type_name,       _const.Search_type_change, searchrecipes);
    load(_const.search_type_ingredient, _const.Search_type_change, searchrecipes);
}

window.onload = loadInitialListeners();