
var resparray =[];

 $(document).ready(function(){


  var locationValue;

 	var zipValue;



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

                var ans4 = document.getElementById("q4");
                q4Value = ans4.options[ans4.selectedIndex].text;

                var ans5 = document.getElementById("q5");
                q5Value = ans5.options[ans5.selectedIndex].text;

                var ans6 = document.getElementById("q6");
                q6Value = ans6.options[ans6.selectedIndex].text;

                var ans7 = document.getElementById("q7");
                q7Value = ans7.options[ans7.selectedIndex].text;

                var ans8 = document.getElementById("q8");
                q8Value = ans8.options[ans8.selectedIndex].text;

                var ans9 = document.getElementById("q9");
                q9Value = ans9.options[ans9.selectedIndex].text;

                var ans10 = document.getElementById("q10");
                q10Value = ans10.options[ans10.selectedIndex].text;

                var ans11 = document.getElementById("q11");
                q11Value = ans11.options[ans11.selectedIndex].text;

                var ans12 = document.getElementById("q12");
                q12Value = ans12.options[ans12.selectedIndex].text;

                var ans13 = document.getElementById("q13");
                q13Value = ans13.options[ans13.selectedIndex].text;


                resparray = [q1Value, q2Value,q3Value,q4Value,q5Value
                ,q6Value,q7Value,q8Value,q9Value,q10Value,q11Value,q12Value,q13Value];


                //console.log(resparray);

                var age =  $('#age').val();

                return resparray

               // console.log(age);
                // });

                $.post( "/responses", {age: age, livingStyle:resparray}, function( data ) {
                  console.log( age ); // John
                  console.log( resparray); // 2pm
                }, "json");




            });


  $('#zipbutton').on('click', function(){

                    console.log("find matches button clicked");

                   location.href = "survey.html";


                     zipValue = $('#locationdiv').val();


                     console.log( "location is " + zipValue);
                // This line of code will grab the input from the textbox...

                   $.put( "db/user/response", {regionDestination: zipValue}, function( data ) {
                  console.log( zipValue ); //
                }, "json");




            });


 // 	 document.getElementById("zipbutton").onclick = function () {
  //       location.href = "survey.html";
  //   };

//   $("#submit").on("click", function(){
// var userInfo = {
//                 name: $("#name").val(),
//                 photo: $("#photo").val(),
//                 scores: [$('#q1:checked').val(), $('#q2:checked').val(),
//                 $('#q3:checked').val(),$('#q4:checked').val(),
//                 $('#q5:checked').val(),$('#q6:checked').val(),
//                 $('#q7:checked').val(),$('#q8:checked').val(),
//                 $('#q9:checked').val(),$('#q10:checked').val() ]

//             }
//     console.log(userInfo);
//     var currentURL = window.location.origin;
//     $.post(currentURL +"/api/friends", userInfo)
//     .done(function(data)
//     {
//         console.log("Added current friend");
//         console.log("your friend is " + data.name);
//         console.log("your friend's photo is " + data.photo);
//         $("#matchName").text(data.name);
//        $('#matchImg').attr("src", data.photo);
//          $('#modal fade bd-example-modal-lg').modal('toggle');


//     });
// });


   // document.getElementById("zipbutton").onclick = function () {
   //      location.href = "survey.html";
   //  };


 });
