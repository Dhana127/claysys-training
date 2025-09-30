const inventry_arr=[];
class Product{
    constructor(name,price,quantity){
        this.name=name;
        this.price=price;
        this.quantity=quantity;
    }
}
const display=document.getElementById("display-list");
const table=document.createElement("table");
table.style.border="1px solid grey";
table.style.borderCollapse="collapse";
    const tr=document.createElement("tr");
    tr.style.backgroundColor="lightgrey";
    tr.style.width="100%";
    const th1=document.createElement("th");
    th1.style.border="1px solid grey";
    th1.textContent="Product Name";
    th1.style.padding="10px";
    const th2=document.createElement("th");
    th2.textContent="Price";
    th2.style.padding="10px";
    th2.style.border="1px solid grey";
    const th3=document.createElement("th");
    th3.textContent="Quantity";
    th3.style.padding="10px";
    th3.style.border="1px solid grey";
    display.appendChild(table);
    table.appendChild(tr);
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
const addpoduct=document.getElementById("add-order").addEventListener("click",addProductData);
function addProductData(){
    const name=document.getElementById("name-id").value;
    const price=parseFloat(document.getElementById("price-id").value);
    const quantity=parseFloat(document.getElementById("quantity-id").value);
    
    if(name && !isNaN(price) && !isNaN(quantity)){
        inventry_arr.push(new Product(name,price,quantity));
    }else{
        alert("add required datas");
    }

    const td1=document.createElement("td");
    td1.style.border="1px solid grey";
    td1.style.padding="10px";
    const td2=document.createElement("td");
    td2.style.border="1px solid grey";
    td2.style.padding="10px";
    const td3=document.createElement("td");
    td3.style.border="1px solid grey";
    td3.style.padding="10px";

    inventry_arr.forEach(element => {
        const tr2=document.createElement("tr");
        td1.textContent=`${element.name}`;
        td2.textContent="$"+`${element.price}`;
        td3.textContent=`${element.quantity}`
        tr2.appendChild(td1);
        tr2.appendChild(td2);
        tr2.appendChild(td3);
        table.appendChild(tr2);
    });

}