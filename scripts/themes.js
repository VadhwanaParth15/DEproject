const themes = () => {
  let themeBtn = document.getElementById("modecheck");
  let userPreferedScheme = window.matchMedia("(prefers-color-scheme:dark)");
  let currentTheme = localStorage.getItem("theme");

  if (currentTheme == "dark") {
    document.body.classList.toggle("dark-theme");
    document.getElementById("navlogo").src =
      "https://see.fontimg.com/api/renderfont4/Yz84q/eyJyIjoiZnMiLCJoIjo2OSwidyI6MTAwMCwiZnMiOjY5LCJmZ2MiOiIjM0ExNUNFIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/RGVza1NoYXJl/typeface-mario-world-pixel-filled-regular.png";
  } else if (currentTheme == "light") {
    document.body.classList.toggle("light-theme");
    document.getElementById("navlogo").src =
      "https://see.fontimg.com/api/renderfont4/Yz84q/eyJyIjoiZnMiLCJoIjo2OSwidyI6MTAwMCwiZnMiOjY5LCJmZ2MiOiIjM0ExNUNFIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/RGVza1NoYXJl/typeface-mario-world-pixel-filled-regular.png";
  }

  themeBtn.addEventListener("click", () => {
    if (userPreferedScheme.matches) {
      document.body.classList.toggle("light-theme");

      var theme = document.body.classList.contains("light-theme")
        ? "light"
        : "dark";
    } else {
      document.body.classList.toggle("dark-theme");

      var theme = document.body.classList.contains("dark-theme")
        ? "dark"
        : "light";
    }
    document.getElementById("navlogo").src =
      theme == "dark"
        ? "https://see.fontimg.com/api/renderfont4/Yz84q/eyJyIjoiZnMiLCJoIjo2OSwidyI6MTAwMCwiZnMiOjY5LCJmZ2MiOiIjM0ExNUNFIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/RGVza1NoYXJl/typeface-mario-world-pixel-filled-regular.png"
        : "https://see.fontimg.com/api/renderfont4/Yz84q/eyJyIjoiZnMiLCJoIjo2OSwidyI6MTAwMCwiZnMiOjY5LCJmZ2MiOiIjM0ExNUNFIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/RGVza1NoYXJl/typeface-mario-world-pixel-filled-regular.png";
    localStorage.setItem("theme", theme);
  });
};
themes();

// about page js
document.getElementById("backtohome").addEventListener("click", () => {
  document.querySelector("about").style.display = "none";
  document.querySelector("main").style.display = "block";
  document.querySelector("body").style.backgroundColor = "var(--bg-color)";

  themes;
});

document.getElementById("infoicon").addEventListener("click", () => {
  document.querySelector("main").style.display = "none";
  document.querySelector("about").style.display = "block";
  document.querySelector("body").style.backgroundColor = "#00eeffd5";
  themes;
});
