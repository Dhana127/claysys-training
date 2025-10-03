"use strict";
var _a;
var adduser = (_a = document
    .getElementById("add-all")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", userlist);
var id = 1;
function userlist() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var role = document.getElementById("role");
    var name_val = name.value;
    var email_val = email.value;
    var role_val = role.value;
    if (!name_val || !email_val || !role_val) {
        alert("Please enter all details");
        return;
    }
    var user = new users(id, name_val, email_val, role_val);
    user.addlist();
    id++;
}
var users = /** @class */ (function () {
    function users(id, name, email, role) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
    }
    users.prototype.addlist = function () {
        var table = document.createElement("table");
        table.style.width = "100%";
        table.style.padding = '10px';
        table.style.backgroundColor = "#f9f8f8";
        table.style.borderRadius = "4px";
        table.style.marginBottom = "5px";
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        td1.textContent = "".concat(this.id, ". ").concat(this.name);
        var td2 = document.createElement("td");
        td2.textContent = "".concat(this.email);
        var td3 = document.createElement("td");
        td3.textContent = "".concat(this.role);
        var editbtn = document.createElement("button");
        editbtn.textContent = "Edit";
        editbtn.style.backgroundColor = "dodgerblue";
        editbtn.style.color = "white";
        editbtn.style.border = '0px';
        editbtn.style.height = "28px";
        editbtn.style.width = "50px";
        editbtn.style.marginRight = '15px';
        editbtn.style.borderRadius = "4px";
        var deletebtn = document.createElement("button");
        deletebtn.textContent = "Delete";
        deletebtn.style.backgroundColor = "dodgerblue";
        deletebtn.style.color = "white";
        deletebtn.style.border = '0px';
        deletebtn.style.height = "28px";
        deletebtn.style.width = "50px";
        deletebtn.style.borderRadius = "4px";
        deletebtn.addEventListener("click", function () {
            var db = deletebtn.closest("table");
            db === null || db === void 0 ? void 0 : db.remove();
        });
        var td4 = document.createElement("td");
        td4.appendChild(editbtn);
        td4.appendChild(deletebtn);
        table.appendChild(tr);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        var displaylist = document.getElementById("display-lists");
        if (displaylist) {
            displaylist.appendChild(table);
        }
        else {
            console.error("Element with ID 'display-lists' not found.");
        }
    };
    return users;
}());
