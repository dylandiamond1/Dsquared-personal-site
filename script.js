const h2 = document.createElement("h2");
h2.textContent = "Click Each Character!";
document.querySelector("body").appendChild(h2);

const input = document.getElementById('test');
input.addEventListener('click', function() {
  alert('The best show there ever was!');
});


const button = document.getElementById("test")

function changeColor() {
    button.style.color = "red"
}