var id_array = [];

function load(element_to_use, event_to_listen_for, function_to_call) {
    element_to_use.addEventListener(event_to_listen_for, function_to_call, false);
}

function unload(element_to_use, event_to_listen_for) {
    element_to_use.removeEventListener(event_to_listen_for, false);
}

function removeLink() {
    var destroy_element,
        i;

    for (i = 0; i < id_array.length; i += 1) {
        destroy_element = document.getElementById(id_array[i]);
        unload(destroy_element, _const.user_event_click);
    }

    id_array = [];
}

function createLink() {
    var create_element,
        i;

    for (i = 0; i < id_array.length; i += 1) {
        create_element = document.getElementById(id_array[i]);
        load(create_element, _const.user_event_click, function(e) {
            dispalySelectedRecipe(e.target.id);
        });
    }
}

function loadInitialListeners() {

    serverCallMonitor.callInfo();

    load(_const.user_search,            _const.user_event_keyup,   searchrecipes);
    load(_const.search_type_name,       _const.Search_type_change, searchrecipes);
    load(_const.search_type_ingredient, _const.Search_type_change, searchrecipes);
}

window.onload = loadInitialListeners();