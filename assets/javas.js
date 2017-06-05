
$(document).ready(function () {

var animate = 0;

//BTN topics prefix
var topics = ["Bart", "Lisa", "Marge", "Maggie", "Homer"];
console.log(topics);

// search gif
function displayTopicInfo() {

    $('#gifs').empty();

    var topics = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        topics + "&api_key=dc6zaTOxFJmzC&limit=4";
    console.log(topics);
    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {
        var results = response.data;
        console.log(results);

        for (var i = 0; i < results.length; i++) {
            var imageDiv = $("<div class='item'>");
            var rating = results[i].rating;
            var p = $("<p>").text("Rating: " + rating);
            var img = $("<img>");

            img.attr("src", results[i].images.fixed_height_still.url).val(i);
            imageDiv.append(p);
            imageDiv.prepend(img);

            $("#gifs").prepend(imageDiv);
        }
    });
}

// generate BTNS
function renderButtons() {
    $('#result').empty();
    for (var i = 0; i < topics.length; i++) {
        var a = $("<button>");
        a.addClass("topic");
        a.attr("data-name", topics[i]);
        a.text(topics[i]);
        $('#result').append(a);
    }
}

//  Submit my BTN
$("#submit-btn").on("click", function(event) {
    event.preventDefault();
    var topic = $("#wordadd").val().trim();
    topics.push(topic);
    renderButtons();
});
renderButtons();

$(document).on("click", ".topic", displayTopicInfo);
renderButtons();


// Gifs Animation
$('.item').on('click', function () {

    if (animate === 0) {
        $(this).attr("src", results(this.value).images.fixed_width.url);
        animate++;
    } else {
        $(this).attr("src", results(this.value).images.fixed_height_still.url);
    }

    console.log()
});


});