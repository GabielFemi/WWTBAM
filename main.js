$.getJSON("quiz.json", function( data ) {
let items = [];
$.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
});

$( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
}).appendTo( "body" );
});