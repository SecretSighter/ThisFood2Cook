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

    if (_const.search_type_name.checked) {
        for (i = 0; i < id_array.length; i += 1) {
            create_element = document.getElementById(id_array[i]);
            load(create_element, _const.user_event_click, function(e) {
                dispalySelectedRecipe(e.target.id);
            });
        }
    } else {
        for (i = 0; i < id_array.length; i += 1) {
            create_element = document.getElementById(id_array[i]);
            load(create_element, _const.user_event_click, function(e) {
                var clicked_recipe = document.getElementById(e.target.id).innerHTML,
                results_string = "",
                i,
                j;

                _const.user_search.value = clicked_recipe;
                removeLink();
                
                for (i = 0; i < serverCallMonitor.response.length; i += 1) {
                    for (j = 0; j < serverCallMonitor.response[i].ingredients.length; j += 1) {
                        if (serverCallMonitor.response[i].ingredients[j].ingredient === clicked_recipe) {
                            results_string += "<p id=\"" + i.toString() + "\">" + serverCallMonitor.response[i].toMake + "</p>";
                            id_array.push(i.toString());
                            break;
                        }
                    }
                }

                _const.results_div.innerHTML = results_string;
                _const.search_type_name.checked = true;
                _const.search_type_ingredient.checked = false;
                createLink();
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