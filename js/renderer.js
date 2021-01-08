let $ = jQuery = require('jquery')
const {ipcRenderer, contextBridge} = require('electron')

$( window ).on( "load", function() {
    $( "main" ).hide();
    (function () {
        'use strict'
        feather.replace()
      
    })()
} );

$( "#register" ).on( "click", function() {
    $( "main" ).show();
    $(this).children("a").addClass("active");
    ipcRenderer.send("message", "register button clicked");
})
