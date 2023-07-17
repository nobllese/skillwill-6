const colors = document.querySelectorAll('#colors p');

colors.forEach(function(color) {
  color.addEventListener('click', function() {
    var colorValue = color.id;
    changeBackgroundColor(colorValue);
  });
});

function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}

document.getElementById("submitButton").addEventListener("click", function() {
    var color = document.getElementById("colorInput").value;
    if (isValidColor(color)) {
      document.body.style.backgroundColor = color;
    } else {
      alert('Invalid color! Try Another One ');
    }
  });

  function isValidColor(color) {
    var validColors = ['red', 'blue', 'green', 'black', 'white'];
    return validColors.includes(color);
  }
  