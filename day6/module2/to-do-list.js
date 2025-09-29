const adder=document.getElementById("add-task").addEventListener("click",addlist);
function addlist(){

const element_class=document.getElementsByClassName("result");
const data=document.getElementById("to-do").value;
if (data=="")return;
const divele=document.createElement("div");
const table=document.createElement("table");
table.id="list-table";
table.style.width="100%";
table.style.paddingTop='20px';
table.style.border="collapse";
table.style.borderBottom = "1px solid lightgrey";

table.style.justifyContent="space-between";

const tr=document.createElement("tr");
tr.style.padding="10px";


const td1=document.createElement("td");
td1.style.textAlign="center";
td1.style.padding="10px";
td1.style.alignItems="center";

const td2=document.createElement("td");
td2.style.textAlign="center";
td2.style.padding="10px";
td2.style.textDecoration="none";
td2.style.alignItems="center";
td2.style.fontSize="30px";

const td3=document.createElement("td");
td3.style.textAlign="center";
td3.style.padding="10px";
td3.style.alignItems="center";


const checkbox=document.createElement("input");
checkbox.type="checkbox";
checkbox.id="checkbox-id";
const deletebtn=document.createElement("button");
deletebtn.innerText="Delete";
deletebtn.id="delete-id";
deletebtn.style.backgroundColor="red";
deletebtn.style.color="white";
deletebtn.style.border='0';
deletebtn.style.padding='7px';
deletebtn.style.alignItems="flex-end";



divele.appendChild(table);
table.appendChild(tr);
tr.appendChild(td1);
td1.appendChild(checkbox);
tr.appendChild(td2);
td2.appendChild(document.createTextNode(data));
tr.appendChild(td3);
td3.appendChild(deletebtn);

element_class[0].appendChild(divele);



deletebtn.addEventListener("click",  ()=> {
  const delete_tr=deletebtn.closest("tr");
  const delete_td=delete_tr.querySelectorAll("td");
  delete_td[0].parentElement.remove();
  delete_td[1].parentElement.remove();
  delete_td[2].parentElement.remove();
});

checkbox.addEventListener("click",()=>{
  const select_tr=checkbox.closest("tr");
  const select_td=select_tr.querySelectorAll("td")
  if(checkbox.checked){
  select_td[1].style.textDecoration="line-through";
  }else{
    select_td[1].style.textDecoration="none";
  }
})
}