//store the products array in localstorage as "products"
document.querySelector("#form").addEventListener('submit',submitFunction);
var data=JSON.parse(localStorage.getItem('products')) || [];

function productData(T,D,P,I){
    this.Type=T;
    this.Description=D;
    this.Price=P;
    this.Image=I;
}

function submitFunction(){
    event.preventDefault();
    var Type = document.querySelector("#type").value;
    var Description = document.querySelector("#desc").value;
    var Price = document.querySelector("#price").value;
    var Image = document.querySelector("#image").value;
    
    let dataObj= new productData(Type,Description,Price,Image)

    data.push(dataObj)
    // console.log(data)

    localStorage.setItem('products',JSON.stringify(data));
    alert("Data Added")

    Type.value='';
    Description.value='';
    Price.value='';
    Image.value='';
}