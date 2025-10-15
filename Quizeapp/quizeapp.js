const submit=document.getElementById("submit-btn").addEventListener("click", nextQuestion);
let qustioncount = 0;
let correctans = 0;
function nextQuestion() {

    const selected = document.querySelector('input[name="ans1"]:checked');


    if (qustioncount === 0) {
        if (selected && selected.value.toLowerCase() === "javascript") {
            correctans++;
        }
    } else if (qustioncount === 1) {
        if (selected && selected.value.toLowerCase() === "c#.net") {
            correctans++;
        }
    } else if (qustioncount === 2) {
        if (selected && selected.value.toLowerCase() === "azure") {
            correctans++;
        }
    }

    qustioncount++;

    if (qustioncount === 1) {
        firstQuestion();
    } else if (qustioncount === 2) {
        secondQuestion();
    } else {
        document.getElementById("qustion").textContent = `You answered ${correctans}/3 qustions correctly`;
        document.getElementById("select-ans").innerHTML = "";
        document.getElementById("submit-btn").innerHTML = `<a href="index.html" style="border: 0;
    width: 100%;
    height: 40px;
    background-color: blueviolet;
    color: white";
    text-decoration="none";
    >Reload</a>`;
    }
}

function firstQuestion() {
    const qustion = document.getElementById("qustion");
    qustion.textContent = "Which is developed by microsoft?";

    const div_select_ans = document.getElementById("select-ans");
    div_select_ans.innerHTML = `
    <input type="radio" name="ans1" id="ans1" value="java">
    <label for="ans1">java</label>
    <br>
    <input type="radio" name="ans1" id="ans2" value="python">
    <label for="ans2">python</label>
    <br>
    <input type="radio" name="ans1" id="ans3" value="javascript">
    <label for="ans3">javascript</label>
    <br>
    <input type="radio" name="ans1" id="ans4" value="c#.net">
    <label for="ans4">C#.net</label>
  `;
}

function secondQuestion() {
    const qustion = document.getElementById("qustion");
    qustion.textContent = "Which cloud is developed by microsoft?";

    const div_select_ans = document.getElementById("select-ans");
    div_select_ans.innerHTML = `
    <input type="radio" name="ans1" id="ans1" value="aws">
    <label for="ans1">aws</label>
    <br>
    <input type="radio" name="ans1" id="ans2" value="gcp">
    <label for="ans2">google cloud</label>
    <br>
    <input type="radio" name="ans1" id="ans3" value="azure">
    <label for="ans3">azure</label>
    <br>
    <input type="radio" name="ans1" id="ans4" value="ibm">
    <label for="ans4">ibm cloud</label>
  `;
}
