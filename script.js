const colorBtn = document.querySelector(".colorBtn");
//const colorBackground = document.querySelector("body");
const colors = ["red", "blue", "#9400D3", "#800080", "#D3D3D3"];
                
colorBtn.addEventListener("click", changeColor);
                
function changeColor() {
    let random = Math.floor(Math.random() * colors.length);
    //colorBackground.style.backgroundColor = colors[random];
    document.body.style.backgroundColor = colors[random];;
}