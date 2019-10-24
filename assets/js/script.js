document.getElementById("submit").onclick = function() {message()};

function message() {
  let age = document.getElementById("age").value;

  alert((age >= 18) ? "Vous êtes majeur" : "Vous êtes mineur" );
}
