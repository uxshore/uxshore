let logoRanNum;

logoRanNum = Math.floor(Math.random() * (5 - 1) + 1);

let desktopLogo = document.getElementById("desktoplogo");


desktopLogo.setAttribute("src", "/images/icons/" + logoRanNum + ".png");