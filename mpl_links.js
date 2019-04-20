"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 1

   Author: MIllione Johnson
   Date: 4/18/19  
   
   Filename: mpl_links.js

*/

window.addEventListener("load", function () {
    //creates a function inside of the onload form that runs when the javascript is loaded 
    var allSelect = document.forms.govLinks;
    //cretes a variable which referneces all nested elements within the govLinks form
    for (var i = 0; i < allSelect.length; i++) {
        //loops through allSelect object collection. For each object in the selection list, anonymous function is created.
        allSelect[i].onchange = function (e) {
            document.location.href = e.target.value;
        }
    }
});