var b1 = document.getElementsByTagName("button")[0];

b1.addEventListener("click",function(){console.log("click!");

    if(document.getElementById('q8a1').checked == true)

    {    console.log("correct!");

        document.getElementById('outcome').innerHTML = 'Your answer is correct! Terra Nulius means claiming unclaimed land.';

        document.getElementById('outcome').style.color = "green";

    }

    else if(document.getElementById('q8a2').checked == true){

        {

           console.log("Not correct!");

            document.getElementById('outcome').innerHTML = 'Your answer is wrong! Terra Nulius means claiming unclaimed land.';

            document.getElementById('outcome').style.color = "red";

        }

    }

    else if(document.getElementById('q8a3').checked == true){

        {

            console.log("Not correct!");

            document.getElementById('outcome').innerHTML = 'Your answer is wrong! Terra Nulius means claiming unclaimed land.';

            document.getElementById('outcome').style.color = "red";

        }

    }

    else if(document.getElementById('q8a4').checked == true){

      {

          console.log("Not correct!");

          document.getElementById('outcome').innerHTML = 'Your answer is wrong! Terra Nulius means claiming unclaimed land.';

          document.getElementById('outcome').style.color = "red";

      }

  }

})

