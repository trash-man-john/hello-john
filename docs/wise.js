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


var x = document.getElementById("bottom-wise");

var y = document.getElementById("middle-wise");

var z = document.getElementById("bottom");


function wisePost() {
    var input = document.getElementById("formInput").value; {
      if (input === "Sex") {
        function runWiseTwo() {
          var x = document.getElementById("bottom-wise");
          var y = document.getElementById("middle-wise");
          var z = document.getElementById("bottom");
          x.style.display = "block";
          y.style.display = "none";
          z.style.display = "none";
          document.getElementById('sound1').play();
          document.getElementById("formInput").value = "";
          document.getElementById("wiseButton").disabled = true;
        }
        runWiseTwo();
      }
      else if (input === "Balls farting 💯") {
        function runWiseTwo() {
          var x = document.getElementById("bottom-wise");
          var y = document.getElementById("middle-wise");
          var z = document.getElementById("bottom");
          y.style.display = "block";
          x.style.display = "none";
          z.style.display = "none";
          document.getElementById('sound1').play();
          document.getElementById("formInput").value = "";
          document.getElementById("wiseButton").disabled = true;
        }
        runWiseTwo();
      }
      else {
        function runWise() {
          var x = document.getElementById("bottom-wise");
          var y = document.getElementById("middle-wise");
          var z = document.getElementById("bottom");
          z.style.display = "block";
          x.style.display = "none";
          y.style.display = "none";
          document.getElementById('sound1').play();
          document.getElementById("formInput").value = "";
          document.getElementById("wiseButton").disabled = true;
        }
        runWise();
      }
    }
  }
