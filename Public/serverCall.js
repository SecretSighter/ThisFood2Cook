var serverCallMonitor = {
    server_called: false,
    response: null,

    //get json file from server
    getrecipesFromServer: function (callback) {
        var httpRequest = new XMLHttpRequest(),
            url_path = "../Private/recipesContainer.json";

        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState === 4 && httpRequest.status === 200) {
                callback(httpRequest.responseText);
            }
        };

        httpRequest.open("GET", url_path, true);
        httpRequest.send();
    },

    callInfo: function () {
        var get_response;
        if (!this.server_called) {
            this.getrecipesFromServer(function (server_response) {
                serverCallMonitor.response = JSON.parse(server_response);
            });
            this.server_called = true;
        }
    }
};

//check for user search. output search results.
function searchrecipes() {
    var user_input = document.getElementById("search_for"),
        server_output = document.getElementById("search_results");

    if (user_input.value !== "") {
        displaySearchResults(serverCallMonitor.response, user_input.value);
    } else {
        server_output.innerHTML = "";
    }
}