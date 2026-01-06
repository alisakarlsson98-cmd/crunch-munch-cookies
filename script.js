// Hämtar alla kakor som ska ha allergiinformation
var cookies = document.querySelectorAll(".cookie-info");

// Går igenom varje kaka
for (var i = 0; i < cookies.length; i++) {

  var cookie = cookies[i];

  // Skapar rutan som visar allergener
  var tooltip = document.createElement("div");
  tooltip.className = "tooltip";

  // Hämtar texten från data-info
  tooltip.innerText = cookie.getAttribute("data-info");

  // Lägger rutan i kakan
  cookie.appendChild(tooltip);

  // Visar rutan när musen är över
  cookie.onmouseenter = function () {
    this.querySelector(".tooltip").style.opacity = "1";
  };

  // Gömmer rutan när musen lämnar
  cookie.onmouseleave = function () {
    this.querySelector(".tooltip").style.opacity = "0";
  };
}

