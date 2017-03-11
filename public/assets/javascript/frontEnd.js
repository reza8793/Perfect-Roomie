 


 $(document).ready(function(){

 	var locationValue;


 	$('#findroomiebutton').on('click', function(){

                    console.log("find your roomie button clicked");
                // This line of code will grab the input from the textbox...

                var ans1 = document.getElementById("q1");
                q1Value = ans1.options[ans1.selectedIndex].text;
                console.log( "q1 value is " + q1Value);

                var ans2 = document.getElementById("q2");
                q2Value = ans2.options[ans2.selectedIndex].text;
                console.log( "q2 value is " + q2Value);

                var ans3 = document.getElementById("q3");
                q3Value = ans3.options[ans3.selectedIndex].text;
                console.log( "q3 value is " + q3Value);

            });


 	$('#zipbutton').on('click', function(){

                    console.log("find matches button clicked");

                   // location.href = "survey.html";

                    var val = document.getElementById("locationdiv");


                     locationValue = val.options[val.selectedIndex].text;
 


                     console.log( "location is " + locationValue);

                     location.href = "survey.html";

                // This line of code will grab the input from the textbox...

            });


 	 // document.getElementById("zipbutton").onclick = function () {
   //      location.href = "survey.html";
   //  };


 });

 