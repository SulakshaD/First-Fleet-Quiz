var b1 = document.getElementsByTagName("button")[0];

b1.addEventListener("click",function(){console.log("click!");

    if(document.getElementById('q5a4').checked == true)

    {    console.log("correct!");

        document.getElementById('outcome').innerHTML = 'Your answer is correct! Cape Town was the third stop. The first stop was Camnary Islands. The second stop was Rio de ja Nairo. The third stop was Cape town and then it was straight to the Great Southern Land.';

        document.getElementById('outcome').style.color = "green";

    }

    else if(document.getElementById('q5a2').checked == true){

        {

           console.log("Not correct!");

            document.getElementById('outcome').innerHTML = 'Your answer is wrong! Cape Town was the third stop. The first stop was Camnary Islands. The second stop was Rio de ja Nairo. The third stop was Cape town and then it was straight to the Great Southern Land.';

            document.getElementById('outcome').style.color = "red";

        }

    }

    else if(document.getElementById('q5a3').checked == true){

        {

            console.log("Not correct!");

            document.getElementById('outcome').innerHTML = 'Your answer is wrong! Cape Town was the third stop. The first stop was Camnary Islands. The second stop was Rio de ja Nairo. The third stop was Cape town and then it was straight to the Great Southern Land.';

            document.getElementById('outcome').style.color = "red";

        }

    }

    else if(document.getElementById('q5a1').checked == true){

      {

          console.log("Not correct!");

          document.getElementById('outcome').innerHTML = 'Your answer is wrong! Cape Town was the third stop. The first stop was Camnary Islands. The second stop was Rio de ja Nairo. The third stop was Cape town and then it was straight to the Great Southern Land.';

          document.getElementById('outcome').style.color = "red";

      }

  }

})

