 
var resparray =[];

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

                q4Value = ans4.options[ans4.selectedIndex].text;
                q5Value = ans5.options[ans5.selectedIndex].text;
                q6Value = ans6.options[ans6.selectedIndex].text;
                q7Value = ans7.options[ans7.selectedIndex].text;
                q8Value = ans8.options[ans8.selectedIndex].text;
                q9Value = ans9.options[ans9.selectedIndex].text;
                q10Value = ans10.options[ans10.selectedIndex].text;
                q11Value = ans11.options[ans11.selectedIndex].text;
                q12Value = ans12.options[ans12.selectedIndex].text;
                q13Value = ans13.options[ans13.selectedIndex].text;


                resparray = [q1Value, q2Value,q3Value,q4Value,q5Value
                ,q6Value,q7Value,q8Value,q9Value,q10Value,q11Value,q12Value,q13Value];

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

 