$(document).ready(function(){
  window.dancers = [];
  // window.dmf=[];
  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // window.dmf=window[dancerMakerFunctionName];
    // make a dancer with a random position
    //console.dir(dancerMakerFunction);


    var newTop=$("body").height() * Math.random();
    var newLeft=$("body").width() * Math.random();
    var newStep=Math.random()*1000;

    if (dancerMakerFunctionName==='Jesus'){
      newTop=0.548*$("body").height();
      newStep=10000;
    }

    var dancer = new dancerMakerFunction(
      newTop,
      newLeft,
      newStep
    );
    window.dancers.push(dancer);

    $('body').append(dancer.$node);

  });


  $(".lineUp").on("click", function(event){
    for (var i=0; i<window.dancers.length; ++i){
      window.dancers[i].lineUp();
    }

  });


});

