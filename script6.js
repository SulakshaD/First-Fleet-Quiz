var b1 = document.getElementsByTagName("button")[0];

b1.addEventListener("click",function(){console.log("click!");

    if(document.getElementById('q6a2').checked == true)

    {    console.log("correct!");

        document.getElementById('outcome').innerHTML = 'Your answer is correct! There was not enough food so the officers went hard core and gave rations to convicts.';

        document.getElementById('outcome').style.color = "green";

    }

    else if(document.getElementById('q6a1').checked == true){

        {

           console.log("Not correct!");

            document.getElementById('outcome').innerHTML = 'Your answer is wrong! There was not enough food so the officers went hard core and gave rations to convicts.';

            document.getElementById('outcome').style.color = "red";

        }

    }

    else if(document.getElementById('q6a3').checked == true){

        {

            console.log("Not correct!");

            document.getElementById('outcome').innerHTML = 'Your answer is wrong! There was not enough food so the officers went hard core and gave rations to convicts.';

            document.getElementById('outcome').style.color = "red";

        }

    }

    else if(document.getElementById('q6a4').checked == true){

      {

          console.log("Not correct!");

          document.getElementById('outcome').innerHTML = 'Your answer is wrong! There was not enough food so the officers went hard core and gave rations to convicts.';

          document.getElementById('outcome').style.color = "red";

      }

  }

})

