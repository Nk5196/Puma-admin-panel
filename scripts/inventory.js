var data= JSON.parse(localStorage.getItem("products")) || [];
console.log(data);

data.map(function(elem,index){

    console.log(elem)
    var box= document.createElement("div");
    box.setAttribute("class", "box");
    
    var Imageurl= document.createElement("img");
    Imageurl.src=elem.Image

    var Type= document.createElement("p");
    Type.textContent=elem.Type

    var Description= document.createElement("p");
    Description.textContent=elem.Description

    var Price= document.createElement("p");
    Price.textContent=elem.Price

    var btn=document.createElement("button");
    btn.setAttribute="remove_product"
    btn.innerText="Remove Product"
    btn.addEventListener("click",function(){
        removeItem(elem,index);
    });

    box.append(Imageurl,Type,Description,Price,btn);

    document.querySelector("#all_products").append(box)
});

function removeItem(elem,index){
    // console.log(elem,index);
    data.splice(index,1);
    // console.log(data);
    localStorage.setItem("products",JSON.stringify(data));
    window.location.reload();
}