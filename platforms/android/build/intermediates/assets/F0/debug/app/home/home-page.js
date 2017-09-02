/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

/*
NativeScript adheres to the CommonJS specification for dealing with
JavaScript modules. The CommonJS require() function is how you import
JavaScript modules defined in other files.
*/
var frameModule = require("ui/frame");
var HomeViewModel = require("./home-view-model");
var externCard = require("../class/card");

var homeViewModel = new HomeViewModel();
var card = null;

function onLoaded(args) {
    let cards = [52];
    for (var j = 0; j < 4; j++) {
        for (var k = 1; k <= 13; k++) {
            cards[(j * 13) + k] = new externCard.Card(k, j, j % 2);
            console.log("card info : " + cards[(j * 13) + k].number + 
                " " + cards[(j * 13) + k].pattern + 
                " " + cards[(j * 13) + k].color);
        }
    }
}

function onNavigatingTo(args) {
    /*
    This gets a reference this page’s <Page> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
    var page = args.object;

    /*
    A page’s bindingContext is an object that should be used to perform
    data binding between XML markup and JavaScript code. Properties
    on the bindingContext can be accessed using the {{ }} syntax in XML.
    In this example, the {{ message }} and {{ onTap }} bindings are resolved
    against the object returned by createViewModel().

    You can learn more about data binding in NativeScript at
    https://docs.nativescript.org/core-concepts/data-binding.
    */
    page.bindingContext = homeViewModel;
}

/*
Exporting a function in a NativeScript code-behind file makes it accessible
to the file’s corresponding XML file. In this case, exporting the onNavigatingTo
function here makes the navigatingTo="onNavigatingTo" binding in this page’s XML
file work.
*/
exports.onLoaded = onLoaded;
exports.onNavigatingTo = onNavigatingTo;