function add(item) {
    console.log(item);

    var item1 = document.getElementById("item" + item);
    console.log(item1);

    var img = document.getElementById('img' + item).getAttribute("src");
    console.log(img);

    var price = document.getElementById('price' + item);
    price.innerHTML;
    console.log(price.innerHTML);

    var food = document.getElementById('food' + item);
    food.innerHTML;
    console.log(food.innerHTML);
}