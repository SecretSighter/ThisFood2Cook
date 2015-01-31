"use strict";
/*
* Function explanation: displays recipes containing selected ingredient
* Parameter clicked: selected ingredient
*/
function displayIngredientSearch(clicked) {
    var clicked_recipe = document.getElementById(clicked).innerHTML,
        results_string = "",
        recipe_index = serverCallMonitor.getRecipeIndex(clicked_recipe),
        i,
        j;

        globe.hint_span.innerHTML = " Recipes containing " + clicked_recipe;
        globe.user_search.value = "";
        removeLink();
        
        for (i = 0; i < serverCallMonitor.response.length; i += 1) {
            for (j = 0; j < serverCallMonitor.response[i].ingredients.length; j += 1) {
                if (serverCallMonitor.response[i].ingredients[j].ingredient === clicked_recipe) {
                    results_string += "<p id=\"" + i.toString() + "\">" + serverCallMonitor.response[i].toMake + "</p>";
                    globe.addID(i.toString());
                    break;
                }
            }
        }

        globe.results_div.innerHTML = results_string;
        globe.search_type_name.checked = true;
        globe.search_type_ingredient.checked = false;
        createLink();
}

/*
* Function explanation: displays selected recipe
* Parameter clicked: selected recipe
*/
function dispalySelectedRecipe(clicked) {
    var request_recipie = document.getElementById(clicked),
        create_innerHTML = "<br />",
        i;

    if (globe.getID(0)) {
        removeLink();
    }

    globe.user_search.value = "";
    globe.hint_span.innerHTML = "";
    globe.results_div.innerHTML = "";
    create_innerHTML += serverCallMonitor.response[clicked].toMake + " Recipe<br /><br />";
    for (i = 0; i < serverCallMonitor.response[clicked].ingredients.length; i += 1) {
        create_innerHTML += "<span class=\"ingredients\">" + serverCallMonitor.response[clicked].ingredients[i].ingredient + "</span> ";
        create_innerHTML += "<span class=\"amount\">" + serverCallMonitor.response[clicked].ingredients[i].amount + "</span> ";
        create_innerHTML += "<span class=\"mesure\">" + serverCallMonitor.response[clicked].ingredients[i].mesure + "</span><br />";
    }
    
    // for(i = 0; i < serverCallMonitor.response)
    
    globe.display_recipe.innerHTML = create_innerHTML;
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

    if(globe.getID(0)) {
        removeLink();
    }

    if (globe.search_type_name.checked) {
        for (i = 0; i < response.length; i += 1) {
            if (user_finder.test(response[i].toMake)) {
                results_string += "<p id=\"" + i.toString() + "\">" + response[i].toMake + "</p>";
                globe.addID(i.toString());
            }
        }
    } else {
        for (i = 0; i < response.length; i += 1) {
            for (j = 0; j < response[i].ingredients.length; j += 1) {
                if (user_finder.test(response[i].ingredients[j].ingredient)) {
                    results_string += "<p id=\"" + i.toString() + "\">" + response[i].ingredients[j].ingredient + "</p>";
                    globe.addID(i.toString());
                    break;
                }
            }
        }
    }

    globe.hint_span.innerHTML = "";
    globe.results_div.innerHTML = results_string;
    
    if (globe.getID(0)) {
        createLink();
    }
}