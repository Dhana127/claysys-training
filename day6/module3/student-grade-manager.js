const addStuDetails = document.getElementById("stu-add").addEventListener("click", addStudentData)
const arr = [];
function addStudentData() {
    const stu_name = document.getElementById("stu-name").value;
    const stu_grade = document.getElementById("stu-grade").value;
    if (stu_name && stu_grade != "undefined") {
        if (stu_grade >= 0 && stu_grade <= 100) {
            const stu_data = {
                name: stu_name,
                grade: stu_grade
            };
            arr.push(stu_data);
        } else {
            alert("grade must within 0 to 100");
        }

    }
    else {
        alert("Enter valid input");
    }
}

const toDisplayGrades = document.getElementById("display-grade").addEventListener("click", displayStudentGrades)
function displayStudentGrades() {
    const datadisplay = document.getElementById("list-stu-grade");
    datadisplay.innerHTML = "";
    const orderlist=document.createElement("ol");
    arr.forEach((student) => {
        const list=document.createElement("li");
        list.textContent=`${student.name} - Grade ${student.grade}`
        orderlist.appendChild(list);
        datadisplay.appendChild(orderlist);
    });
}

const average=document.getElementById("calculate-avg").addEventListener("click",calculateAverage)
function calculateAverage(){
    const avg_grade=document.getElementById("avg-grade");
    avg_grade.innerHTML="";
    const total = arr.reduce((sum, arr) => sum + Number(arr.grade), 0);
    const average = (total / arr.length).toFixed(2);
    const createp=document.createElement("p");
    createp.textContent=`${average}`;
    avg_grade.appendChild(createp);
}

