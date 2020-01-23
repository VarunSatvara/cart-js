var img1 = document.getElementById('img1').getAttribute("src");


function add() {
    var item1 = document.getElementById("item1");
    var cartimg1 = document.createElement('img');
    cartimg1.setAttribute("src", img1);
    cartimg1.setAttribute("height", "50px");
    item1.appendChild(cartimg1);

    var item2 = document.getElementById("item2");
    var food1 = document.getElementById('food1');
    item2.appendChild(food1);

    var item3 = document.getElementById("item3");
    var price1 = document.getElementById('price1');
    item3.appendChild(price1);
}

function remove() {
    document.getElementById('item1').removeAttribute("onclick");
}