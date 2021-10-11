let accItem = document.getElementsByClassName("accordionItem");
let accHD = document.getElementsByClassName("header-arrow-container");
for (i = 0; i < accHD.length; i++) {
  accHD[i].addEventListener("click", toggleItem, false);
}
function toggleItem() {
  let itemClass = this.parentNode.className;
  for (i = 0; i < accItem.length; i++) {
    accItem[i].className = "accordionItem close";
  }
  if (itemClass == "accordionItem close") {
    this.parentNode.className = "accordionItem open";
  }
}
