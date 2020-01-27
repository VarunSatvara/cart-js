function add(item) {
    console.log(item);

    var item1 = document.getElementById("item" + item);


    var img = document.getElementById('img' + item).getAttribute("src");

    var price = document.getElementById('price' + item);
    price.innerHTML;


    var food = document.getElementById('food' + item);
    food.innerHTML;

    var list = document.getElementById("list");

    var ti = document.createElement('li');
    ti.classList.add("p-2");
    console.log(ti);

    ti.onclick = function() {
        this.parentNode.removeChild(this);
    }

    ti.innerHTML = '<div class="row"><div class="col-3"> <img src="' + img + '" class="img-fluid fd"></div><div class="col-3 ">' + food.innerHTML + '</div><div class="col-3">' + price.innerHTML + '</div><div class="col-3"><button onlclick="remove()">r</button></div></div>';

    list.appendChild(ti);
}