function checkRoom() {
    let name = document.getElementById("name").value;
    let checkin = document.getElementById("checkin").value;
    let checkout = document.getElementById("checkout").value;
    let room = document.getElementById("room").value;

    let result = document.getElementById("result");

    // Check empty fields
    if (name === "" || checkin === "" || checkout === "") {
        result.innerText = "Please fill full information.";
        return;
    }

    // Simple availability (random)
    let available = Math.random() > 0.5;

    if (available) {
        result.innerText = room + " is available.";
    } else {
        result.innerText = room + " is not available.";
    }
}