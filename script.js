console.log("Portfolio JavaScript Loaded Successfully!");

function showWelcome(){
    window.alert("Welcome to My Portfolio!");
    document.getElementById("title").innerText = 
    "Welcome to My Portfolio Website!";
document.getElementById("title").style.color = "red";
document.getElementById("title").style.fontSize = "30px";
}

let darkMode = false;

function changeTheme() {
    if (!darkMode) {
        document.body.style.backgroundColor = "#f1caf9";
        document.body.style.color = "black";
        darkMode = true;
        console.log("Dark Mode Enabled");
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "pink";
        darkMode = false;
        console.log("Light Mode Enabled");
    }
}


function showInfo() {
    document.getElementById("info").innerHTML =
        "<strong>Name:</strong> Krissel Mae B. Olmedo<br>" +
        "<strong>Course:</strong> Bachelor of Science in Information Technology<br>" +
        "<strong>Email:</strong> krisolmedo@gmail.com";

    console.log("Personal information displayed.");
}
