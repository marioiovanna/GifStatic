# GifStatic

### Gif Generator by AJAX request...



        var topics = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            topics + "&api_key=dc6zaTOxFJmzC&limit=4";
        console.log(topics);
        console.log(queryURL);

        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function (response) {
            var results = response.data;
            console.log(results);
           

Once input the topic will request the information to the site. You can create your button and search the Gifs.