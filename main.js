$.getJSON("quiz.json", function( data ) {
let items = [];
$.each( data, function( key, val ) {
    if (key === 'options' || key === 'id') {

    }
    else {
    items.push( "<div id='" + key + "' class='mx-5 text-left "  + "'>" + val + "</div>" );
    }

});

$( "<div/>", {
    "class": "d-div",
    html: items.join( "" )
}).appendTo( ".main-div" );
});