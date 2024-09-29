const share =document.querySelector("button");
const information =document.querySelector(".share-container")
function fshare () {
information.style.display="flex";
information.style.translate="40px";
information.style.transition = 'all 0.9s ease-in-out';
}
share.addEventListener("click",fshare)