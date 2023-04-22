

// about page js
document.getElementById("backtohome").addEventListener("click", () => {
  document.querySelector("about").style.display = "none";
  document.querySelector("main").style.display = "block";


});

document.getElementById("infoicon").addEventListener("click", () => {
  document.querySelector("main").style.display = "none";
  document.querySelector("about").style.display = "block";
  
});
