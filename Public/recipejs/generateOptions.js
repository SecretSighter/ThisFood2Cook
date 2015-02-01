"use strict";
/*
* Function explanation: displays recipes containing selected ingredient
* Parameter clicked: selected ingredient
*/
function displayIngredientSearch(clicked) {
    var clicked_recipe = document.getElementById(clicked).innerHTML,
        results_string = "",
        r_list = globe.getRecipes(),
        i,
        j;

        globe.hint_span.innerHTML = " Recipes containing " + clicked_recipe;
        globe.user_search.value = "";
        removeLink();
        
        for (i = 0; i < r_list.length; i += 1) {
            for (j = 0; j < r_list[i].ingredients.length; j += 1) {
                if (r_list[i].ingredients[j].ingredient === clicked_recipe) {
                    results_string += "<p id=\"" + i.toString() + "\">" + r_list[i].toMake + "</p>";
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
        r_list = globe.getRecipes(),
        i;

    if (globe.getID(0)) {
        removeLink();
    }

    globe.user_search.value = "";
    globe.hint_span.innerHTML = "";
    globe.results_div.innerHTML = "";
    create_innerHTML += r_list[clicked].toMake + " Recipe<br /><br /><table>";
    create_innerHTML += "<tr><th>ingredients</th><th>Amount</th><th>Mesure</th></tr>"
    for (i = 0; i < r_list[clicked].ingredients.length; i += 1) {
        create_innerHTML += "<tr>"
        create_innerHTML += "<td class=\"ingredients\">" + r_list[clicked].ingredients[i].ingredient + "</td>";
        create_innerHTML += "<td class=\"amount\">" + r_list[clicked].ingredients[i].amount + "</td>";
        create_innerHTML += "<td class=\"mesure\">" + r_list[clicked].ingredients[i].mesure + "</td>";
        create_innerHTML += "</tr>"
    }
    create_innerHTML += "</table>"
    
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