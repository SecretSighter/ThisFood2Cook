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
        unload(destroy_element, "click");
    }
}

function createLink() {
    var elementID = function (id) {
            dispalySelectedRecipe(id);
        },
        create_element,
        i;

    for (i = 0; i < id_array.length; i += 1) {
        create_element = document.getElementById(id_array[i]);
        load(create_element, "click", function() {
            dispalySelectedRecipe(id_array[i]);
        });
        id_array.shift();
    }
}

function loadInitialListeners() {
    var user_input = document.getElementById("search_for"),
        search_type_A = document.getElementById("search_type_name"),
        search_type_B = document.getElementById("search_type_ingredient"),
        Search_type_change = "change",
        user_event = "keyup";

    serverCallMonitor.callInfo();

    load(user_input, user_event, searchrecipes);
    load(search_type_A, Search_type_change, searchrecipes);
    load(search_type_B, Search_type_change, searchrecipes);
}

window.onload = loadInitialListeners();