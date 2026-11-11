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