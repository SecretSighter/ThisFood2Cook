<?php include 'header.php'; ?>
<body>
    <div>
        <div id="search_container">
            Search recipes by :
            <input type="radio" name="search_type" id="search_type_name" checked="checked">name</input>
            <input type="radio" name="search_type" id="search_type_ingredient">ingredient</input><br />
            <input type="text" id="search_for"></input><br />
            <div id="search_results"></div>
            <p id="show"></p>
        </div>      
        <div id="recipe_display"></div>
    </div>
<?php include 'footer.php'; ?>
