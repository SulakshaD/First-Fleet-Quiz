var b1 = document.getElementsByTagName("button")[0];

b1.addEventListener("click",function(){console.log("click!");

    if(document.getElementById('q7a4').checked == true)

    {    console.log("correct!");

        document.getElementById('outcome').innerHTML = 'Your answer is correct! Bennelong was a first nations person. He was the first person to befriend Phillip. After that he started wearing their clothes and was no longer fully accepted by the First Nations.';

        document.getElementById('outcome').style.color = "green";

    }

    else if(document.getElementById('q7a2').checked == true){

        {

           console.log("Not correct!");

            document.getElementById('outcome').innerHTML = 'Your answer is wrong! Bennelong was a first nations person. He was the first person to befriend Phillip. After that he started wearing their clothes and was no longer fully accepted by the First Nations.';

            document.getElementById('outcome').style.color = "red";

        }

    }

    else if(document.getElementById('q7a3').checked == true){

        {

            console.log("Not correct!");

            document.getElementById('outcome').innerHTML = 'Your answer is wrong! Bennelong was a first nations person. He was the first person to befriend Phillip. After that he started wearing their clothes and was no longer fully accepted by the First Nations.';

            document.getElementById('outcome').style.color = "red";

        }

    }

    else if(document.getElementById('q7a1').checked == true){

      {

          console.log("Not correct!");

          document.getElementById('outcome').innerHTML = 'Your answer is wrong! Bennelong was a first nations person. He was the first person to befriend Phillip. After that he started wearing their clothes and was no longer fully accepted by the First Nations.';

          document.getElementById('outcome').style.color = "red";

      }

  }

})

