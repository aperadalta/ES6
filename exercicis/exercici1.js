var moviePoster = "${./nothing.jpg}";
var movieTitle = "${amazing}";

const li = `'<li>' +
'<div class="row">' +
'<div class="col-md-4">' +
'<img src="' + moviePoster + '" height="250" alt="" />' +
'</div>' +
'<div class="col-md-8">' +
'<h2>' + movieTitle + '</h2>' +
'</div>' +
'</div>' +
'</li>'`;


const li2 = 
`<li>
    <div class="row">
        <div class="col-md-4">
            <img src=$ {moviePoster}>
        </div>
        <div class="col-md-8">
            <h2>$ {movieTitle}</h2>
        </div>
    </div>
</li>`;

export {li, li2};
