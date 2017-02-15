/**
 * Created by siaskov on 2/6/17.
 */


APP.directive("hideonloading", function(){

    return function() {

        setTimeout(function() {

            var elem = document.getElementById("journals-table");

            elem.classList.add("is-visible");

        }, 500)

    }
});