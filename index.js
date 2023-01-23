const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", () => {
    event.preventDefault();

    let input = document.getElementById("input").value;
    if (input) {
        localStorage.setItem("api-key", input);
        console.log(localStorage)
        window.location.href = "explore.html";
    } else {
        document.getElementById("inputInvalid").className = "unhide";
    }

});