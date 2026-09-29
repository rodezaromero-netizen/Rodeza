function showMessage() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;

    if (name === "" || age === "") {
        document.getElementById("message").innerHTML =
            "Please enter your name and age.";
    } else {
        document.getElementById("message").innerHTML =
            "Hello " + name + ", Welcome!!";
    }
}