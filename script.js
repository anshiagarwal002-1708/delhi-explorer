function showMessage() {
    alert("Welcome to Delhi Explorer! Explore the beautiful places of Delhi.");
}
function searchPlaces() {
    let input=
    document.getElementById("search").value.toLowerCase();
    let cards=
    document.getElementsByClassName("place-card");
    for (let i=0; i<cards.length; i++) {
        let name=
        cards[i].getElementsByTagName("h3")
        [0].innerText.toLowerCase();
        if (name.includes(input)) {
            cards[i].style.display="block";
        } else {
            cards[i].style.display="none";
        }
    }
}
function validateForm() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name == "" || email == "" || message == "") {
        alert("Please fill all the fields.");
        return false;
    }

    alert("Your form has been submitted successfully!");
    return false;
}