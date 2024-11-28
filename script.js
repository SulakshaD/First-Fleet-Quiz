var b1 = document.getElementsByTagName("button")[0];

b1.addEventListener("click",function(){console.log("click!");

    if(document.getElementById('q1a1').checked == true)

    {    console.log("correct!");

        document.getElementById('outcome').innerHTML = 'Your answer is correct! Captain James Cook mapped out the eastern side of Australia. He did not map out the western of Australia. He was sent by the Queen.';

        document.getElementById('outcome').style.color = "green";

    }

    else if(document.getElementById('q1a2').checked == true){

        {

           console.log("Not correct!");

            document.getElementById('outcome').innerHTML = 'Your answer is wrong! Captain James Cook mapped out the eastern side of Australia. He did not map out the western of Australia. He was sent by the Queen.';

            document.getElementById('outcome').style.color = "red";

        }

    }

    else if(document.getElementById('q1a3').checked == true){

        {

            console.log("Not correct!");

            document.getElementById('outcome').innerHTML = 'Your answer is wrong! Captain James Cook mapped out the eastern side of Australia. He did not map out the western of Australia. He was sent by the Queen.';

            document.getElementById('outcome').style.color = "red";

        }

    }

    else if(document.getElementById('q1a4').checked == true){

      {

          console.log("Not correct!");

          document.getElementById('outcome').innerHTML = 'Your answer is wrong! Captain James Cook mapped out the eastern side of Australia. He did not map out the western of Australia. He was sent by the Queen.';

          document.getElementById('outcome').style.color = "red";

      }

  }

})
