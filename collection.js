var productContainer = document.getElementById("products");
var productList = productContainer.querySelectorAll(".products-box");
var search = document.getElementById("search");

search.addEventListener("keyup",function(){
    var enteredSearchValue = event.target.value.toUpperCase();

    for(count=0;count<productList.length;count++){
        var productName = productList[count].querySelector("p").textContent.toUpperCase();

        if(productName.indexOf(enteredSearchValue) < 0){
            productList[count].style.display = "none"
        } else{
            productList[count].style.display = "block"
        }
    }


});