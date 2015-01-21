"use strict";
//add function to create elements. replace portion of displaySelectedRecipie code and have it refrence this function.

//needs work
function dispalySelectedRecipe(clicked) {
    var display_recipe = document.getElementById("recipe_display"),
        results_div = document.getElementById("search_results"),
        request_recipie = document.getElementById(clicked),
        create_innerHTML = "",
        i;

    if (id_array[0]) {
        removeLink();
    }

    results_div.innerHTML = "";
    create_innerHTML += serverCallMonitor.response[0].toMake + "working";
    
    // for(i = 0; i < serverCallMonitor.response)
    
    display_recipe.innerHTML = create_innerHTML;
}

/*
* Function displaySearchResults: searches though a parsed json file then desplays results in html
* Parameter response: parsed json file
* Parameter search: string to search for in json file
*/
function displaySearchResults(response, search) {
    var search_type = document.getElementById("search_type_name").checked,
        results_div = document.getElementById("search_results"),
        user_finder = new RegExp(search, 'i'),
        results_string = "",
        i,
        j;

    if(id_array[0]) {
        removeLink();
    }

    if (search_type) {
        for (i = 0; i < response.length; i += 1) {
            if (user_finder.test(response[i].toMake)) {
                results_string += "<p id=\"A" + i.toString() + "\">" + response[i].toMake + "</p>";
                id_array.push("A" + i.toString());
            }
        }
    } else {
        for (i = 0; i < response.length; i += 1) {
            for (j = 0; j < response[i].ingredients.length; j += 1) {
                if (user_finder.test(response[i].ingredients[j].ingredient)) {
                    results_string += "<p id=\"A" + i.toString() + "\">" + response[i].toMake + "</p>";
                    id_array.push("A" + i.toString());
                    break;
                }
            }
        }
    }

    results_div.innerHTML = results_string;
    
    if (id_array[0]) {
        createLink();
    }
}