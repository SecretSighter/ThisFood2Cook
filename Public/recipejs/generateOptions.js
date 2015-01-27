"use strict";
//add function to create elements. replace portion of displaySelectedRecipie code and have it refrence this function.

//needs work
function dispalySelectedRecipe(clicked) {
    var request_recipie = document.getElementById(clicked),
        create_innerHTML = "",
        i;

    if (id_array[0]) {
        removeLink();
    }

    _const.results_div.innerHTML = "";
    create_innerHTML += serverCallMonitor.response[0].toMake + "working";
    
    // for(i = 0; i < serverCallMonitor.response)
    
    _const.display_recipe.innerHTML = create_innerHTML;
}

/*
* Function explanation: searches though a parsed json file then desplays results in html
* Parameter response: parsed json file
* Parameter search: string to search for in json file
*/
function displaySearchResults(response, search) {
    var user_finder = new RegExp(search, 'i'),
        results_string = "",
        i,
        j;

    if(id_array[0]) {
        removeLink();
    }

    if (_const.search_type_name.checked) {
        for (i = 0; i < response.length; i += 1) {
            if (user_finder.test(response[i].toMake)) {
                results_string += "<p id=\"" + i.toString() + "\">" + response[i].toMake + "</p>";
                id_array.push(i.toString());
            }
        }
    } else {
        for (i = 0; i < response.length; i += 1) {
            for (j = 0; j < response[i].ingredients.length; j += 1) {
                if (user_finder.test(response[i].ingredients[j].ingredient)) {
                    results_string += "<p id=\"" + i.toString() + "\">" + response[i].ingredients[j].ingredient + "</p>";
                    id_array.push(i.toString());
                    break;
                }
            }
        }
    }

    _const.results_div.innerHTML = results_string;
    
    if (id_array[0]) {
        createLink();
    }
}