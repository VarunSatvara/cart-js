var img1 = document.getElementById('img1').getAttribute("src");


function add() {
    var item1 = document.getElementById("item1");
    var cartimg1 = document.createElement('img');
    cartimg1.setAttribute("src", img1);
    cartimg1.setAttribute("height", "50px");
    item1.appendChild(cartimg1);
}