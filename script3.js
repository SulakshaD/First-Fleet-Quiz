var b1 = document.getElementsByTagName("button")[0];

b1.addEventListener("click",function(){console.log("click!");

    if(document.getElementById('q3a3').checked == true)

    {    console.log("correct!");

        document.getElementById('outcome').innerHTML = 'Your answer is correct! The industrial revolution was when machines were taking over. Lots of people lost there turned to crime.';

        document.getElementById('outcome').style.color = "green";

    }

    else if(document.getElementById('q3a2').checked == true){

        {

           console.log("Not correct!");

            document.getElementById('outcome').innerHTML = 'Your answer is wrong! The industrial revolution was when machines were taking over. Lots of people lost there turned to crime.';

            document.getElementById('outcome').style.color = "red";

        }

    }

    else if(document.getElementById('q3a1').checked == true){

        {

            console.log("Not correct!");

            document.getElementById('outcome').innerHTML = 'Your answer is wrong! The industrial revolution was when machines were taking over. Lots of people lost there turned to crime.';

            document.getElementById('outcome').style.color = "red";

        }

    }

    else if(document.getElementById('q3a4').checked == true){

      {

          console.log("Not correct!");

          document.getElementById('outcome').innerHTML = 'Your answer is wrong! The industrial revolution was when machines were taking over. Lots of people lost there turned to crime.';

          document.getElementById('outcome').style.color = "red";

      }

  }

})

