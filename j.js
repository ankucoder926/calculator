let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("button");
let screenvalue = "";
let refreshNextClick = false; // Flag to track if the next click should refresh the page

for (item of buttons) {
    item.addEventListener("click", function (e) {
        if (refreshNextClick) {
            // Refresh the page
            location.reload();
            return;
        }

        let buttontext = e.target.innerText;
        console.log(buttontext);

        if (buttontext == "X") {
            buttontext = "*";
            screenvalue += buttontext;
            screen.value = screenvalue;
        } 
        else if (buttontext == "C") {
            screenvalue = "";
            screen.value = screenvalue;
        } 
        else if (buttontext == "=") {
            screen.value = eval(screenvalue); // Evaluate the screenvalue
            refreshNextClick = true; // Set flag to refresh on the next click
        } 
        else {
            screenvalue += buttontext;
            screen.value = screenvalue;
        }
    });
}
