var b1 = document.getElementsByTagName("button")[0];

b1.addEventListener("click",function(){console.log("click!");

    if(document.getElementById('q4a3').checked == true)

    {    console.log("correct!");

        document.getElementById('outcome').innerHTML = 'Your answer is correct! The Friend did not exist. The Friendship on th other hand was part of the First Fleet, but had to be scutteled.';

        document.getElementById('outcome').style.color = "green";

    }

    else if(document.getElementById('q4a2').checked == true){

        {

           console.log("Not correct!");

            document.getElementById('outcome').innerHTML = 'Your answer is wrong! The Friend did not exist. The Friendship on th other hand was part of the First Fleet, but had to be scutteled.';

            document.getElementById('outcome').style.color = "red";

        }

    }

    else if(document.getElementById('q4a1').checked == true){

        {

            console.log("Not correct!");

            document.getElementById('outcome').innerHTML = 'Your answer is wrong! The Friend did not exist. The Friendship on th other hand was part of the First Fleet, but had to be scutteled.';

            document.getElementById('outcome').style.color = "red";

        }

    }

    else if(document.getElementById('q4a4').checked == true){

      {

          console.log("Not correct!");

          document.getElementById('outcome').innerHTML = 'Your answer is wrong! The Friend did not exist. The Friendship on th other hand was part of the First Fleet, but had to be scutteled.';

          document.getElementById('outcome').style.color = "red";

      }

  }

})

