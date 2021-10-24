var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(xhttp.responseText);
        var product = response.product
        
        var output = '';

        for (var i = 0;i < product.length; i++) {
            output += '<div class="product">';
            output += '<a href="' + product[i].url + '" target="_blank">';
            output += '<img src="' + product[i].image + '" alt="' + product[i].name + '">';
            output += '</a>';
            output += '<h3>' + product[i].name + '</h3>';
            output += '<p class="price">' + product[i].price + '</p>';
            output += '</div>';
        }
        document.getElementById('merch').innerHTML = output;
    }
};
xhttp.open("GET", "../assets/json/products.json", true);
xhttp.send();