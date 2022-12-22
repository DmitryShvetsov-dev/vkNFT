function vkPay() {
  let idArray = [
    "textName",
    "description",
    "counter",
    "vkPayButton",
    "or",
    "metamaskButton",
  ];
  for (let i = 0; i < idArray.length; i++) {
    document.getElementById(idArray[i]).style.display = "none";
  }
  let thanksLetter = document.getElementById("thanksLetter");
  thanksLetter.style.display = "block";
  let nft = document.getElementById("buyNFT");
  document.getElementById("clearNFT").style.display = "none";
  nft.style.display = "block";
}
