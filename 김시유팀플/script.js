// function ViewLayer() {
//   document.getElementsByClassName('Pop_c').style.display = "inline";
// }
// function ViewLayer() {
//     document.getElementById("Pop_d").style.display = "inline";
//   }

function ViewLayer() {
  var con = document.getElementById("pop_c");
  if (con.style.display == "none") {
    con.style.display = "block";
  } else {
    con.style.display = "none";
  }
}

 