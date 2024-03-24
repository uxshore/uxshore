let logoRanNum;

logoRanNum = Math.floor(Math.random() * (5 - 1) + 1);

let desktopLogo = document.getElementById("desktoplogo");
let mobileLogo = document.getElementById("mobilelogo");


desktopLogo.setAttribute("src", "/images/icons/" + logoRanNum + ".png");
mobileLogo.setAttribute("src", "/images/icons/" + logoRanNum + ".png");
