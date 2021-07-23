var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => {
    document.querySelector(".header").style.height = window.innerHeight + "px";
})

function basicPopup(url) {
popupWindow = window.open(url,'popUpWindow','height=500,width=500,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes');
	}


  function enableWise () {
    document.getElementById("wiseButton").disabled = false;
  }

  function runWise() {
    var w = document.getElementById("bottom");
    w.style.display = "block";
    document.getElementById('sound1').play();
    document.getElementById("formInput").value = "";
    document.getElementById("wiseButton").disabled = true;
  }

// function checkAnswer() {
//   document.getElementById("demo").innerHTML = 5 + 6;
// }


// function returnText(){
//     let input = document.getElementById("formInput").value;
//     document.getElementById("demo").innerHTML = "Mmmmm no, " + input + " is very unwise.";
// }





// function wisePost() {
//   var input = document.getElementById("formInput").value; {
//     if (input === "sex") {
//       alert("This content is wise. Approved for posting.");
//     }
//     else {
//       alert("Hmmm no, very unwise.");
//     }
//   }
// }
