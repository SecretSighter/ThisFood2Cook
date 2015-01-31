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
        unload(destroy_element, globe.user_event_click);
    }

    globe.unloadID();
}

/*
* Function explanation: create link to search generated elements
*/
function createLink() {
    var create_element,
        i;

    if (globe.search_type_name.checked) {
        for (i = 0; i < globe.getID.length; i += 1) {
            create_element = document.getElementById(globe.getID(i));
            load(create_element, globe.user_event_click, function(e) {
                dispalySelectedRecipe(e.target.id);
            });
        }
    } else {
        for (i = 0; i < globe.getID.length; i += 1) {
            create_element = document.getElementById(globe.getID(i));
            load(create_element, globe.user_event_click, function(e) {
                displayIngredientSearch(e.target.id);
            });
        }
    }
}

/*
* Function explanation: load all nessesary event liteners to start
*/
function loadInitialListeners() {

    serverCallMonitor.callInfo();

    load(globe.user_search,            globe.user_event_keyup,   searchrecipes);
    load(globe.search_type_name,       globe.Search_type_change, searchrecipes);
    load(globe.search_type_ingredient, globe.Search_type_change, searchrecipes);
}

window.onload = loadInitialListeners();