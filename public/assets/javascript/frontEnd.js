


 $(document).ready(function(){

 	var zipValue;


 	$('#findroomiebutton').on('click', function(){

                    console.log("find your roomie button clicked");
                // This line of code will grab the input from the textbox...

            });


 	$('#zipbutton').on('click', function(){

                    console.log("find matches button clicked");

                   location.href = "survey.html";


                     zipValue = $('#zipinput').val().trim();


                     console.log( "zip code is " + zipValue);
                // This line of code will grab the input from the textbox...

            });


 // 	 document.getElementById("zipbutton").onclick = function () {
  //       location.href = "survey.html";
  //   };


 });
