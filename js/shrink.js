// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 80) {
    document.querySelector("nav").style.padding = "5px 10px";
    document.querySelector("nav").style.background = "rgba(7,14,39,.4)";
    // document.querySelector("nav").style.borderBottom =
    // "1px solid rgb(22, 32, 68)";
  } else {
    document.querySelector("nav").style.padding = "40px 10px";
    document.querySelector("nav").style.background = "#070e27";
    // document.querySelector("nav").style.borderBottom = "none";
  }

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    // document.querySelector("nav").style.padding = "20px 10px";
    // document.querySelector("nav").style.background = "#070e27";
    document.querySelector("nav").style.background = "rgba(7,14,39,.8)";
  }
  // else {
  //   // document.querySelector("nav").style.padding = "40px 10px";
  //   document.querySelector("nav").style.background = "rgba(7,14,39,.1)";
  // }

  if (
    document.body.scrollTop > 250 ||
    document.documentElement.scrollTop > 250
  ) {
    // document.querySelector("nav").style.padding = "20px 10px";
    document.querySelector("nav").style.background = "#070e27";
    // document.querySelector("nav").style.background = "rgba(7,14,39,.8)";
  }
}
