const adduser = document
  .getElementById("add-all")
  ?.addEventListener("click", userlist);
let id = 1;
function userlist() {
  const name = document.getElementById("name") as HTMLInputElement;
  const email = document.getElementById("email") as HTMLInputElement;
  const role = document.getElementById("role") as HTMLInputElement;

  const name_val = name.value;
  const email_val = email.value;
  const role_val = role.value;
  
  if (!name_val || !email_val || !role_val) {
    alert("Please enter all details");
    return;
  }

  const user = new users(id, name_val, email_val, role_val);
  user.addlist();
  id++;
}
interface user_data {
  id: number;
  name: string;
  email: string;
  role: string;
}
class users implements user_data {
  id: number;
  name: string;
  email: string;
  role: string;

  constructor(id: number, name: string, email: string, role: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.role = role;
  }
  public addlist() {
    
    const table = document.createElement("table");
    table.style.width="100%";
    table.style.padding='10px';
    table.style.backgroundColor="#f9f8f8";
    table.style.borderRadius="4px";
    table.style.marginBottom="5px";
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.textContent = `${this.id}. ${this.name}`;
    const td2 = document.createElement("td");
    td2.textContent = `${this.email}`;
    const td3 = document.createElement("td");
    td3.textContent = `${this.role}`;
    const editbtn = document.createElement("button");
    editbtn.textContent = "Edit";
    editbtn.style.backgroundColor="dodgerblue";
    editbtn.style.color="white";
    editbtn.style.border='0px';
    editbtn.style.height="28px";
    editbtn.style.width="50px";
    editbtn.style.marginRight='15px';
    editbtn.style.borderRadius="4px";
    const deletebtn = document.createElement("button");
    deletebtn.textContent = "Delete";
    deletebtn.style.backgroundColor="dodgerblue";
    deletebtn.style.color="white";
    deletebtn.style.border='0px';
    deletebtn.style.height="28px";
    deletebtn.style.width="50px";
    deletebtn.style.borderRadius="4px";
    deletebtn.addEventListener("click",()=>{
      const db=deletebtn.closest("table");
      db?.remove();
    })
    const td4 = document.createElement("td");
    td4.appendChild(editbtn);
    td4.appendChild(deletebtn);
    table.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    const displaylist = document.getElementById("display-lists");
    if (displaylist) {
      displaylist.appendChild(table);
    } else {
      console.error("Element with ID 'display-lists' not found.");
    }
  }
}
