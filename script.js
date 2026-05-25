function bookAppointment() {
    const name = document.getElementById("name").value;
    const doctor = document.getElementById("doctor").value;
    const date = document.getElementById("date").value;
    const message = document.getElementById("message");

    if (name === "" || date === "") {
        message.style.color = "red";
        message.innerText = "Please fill all fields.";
        return;
    }

    message.style.color = "green";
    message.innerText =
        `Appointment booked for ${name} with ${doctor} on ${date}.`;
}function bookAppointment() {
    const name = document.getElementById("name").value;
    const doctor = document.getElementById("doctor").value;
    const date = document.getElementById("date").value;
    const message = document.getElementById("message");

    if (name === "" || date === "") {
        message.style.color = "red";
        message.innerText = "Please fill all fields.";
        return;
    }

    message.style.color = "green";
    message.innerText =
        `Appointment booked for ${name} with ${doctor} on ${date}.`;
}