document.addEventListener("DOMContentLoaded", function() {

  for (var i = 0; i < 50; i++) {
    var column = document.createElement('div');
    var topBox = document.getElementsByClassName('top')[0];

    column.style.height = '100%';
    column.style.width = '100%';

    topBox.append(column);

    for (var j = 0; j < 30; j++) {
      var row = document.createElement('div');

      row.style.dispay = 'left';
      row.style.height = '3%';
      row.style.width = '100%';
      row.style.backgroundColor = 'white';
      row.style.border = 'solid rgba(184, 184, 184, 0.5) 1px';

      column.append(row);
    }
  }

  var chosenColor = "";
  var currentColor = document.getElementsByClassName('square')[0];
  var colorPicker = document.getElementById('bottom');
  var canvas = document.getElementsByClassName('top')[0];
  var mouseClick = false;

  console.log('this is', canvas);

  colorPicker.addEventListener('click', function(event) {
    chosenColor = event.target.style.backgroundColor;
    currentColor.style.backgroundColor = event.target.style.backgroundColor;
    return chosenColor;
  })

  canvas.addEventListener('click', function(event) {
    event.target.style.backgroundColor = chosenColor;
  })


  canvas.addEventListener('mousedown', function(event) {
    mouseClick = true;
  })

  canvas.addEventListener('mouseover', function(event) {
    if (mouseClick === true) {
      event.target.style.backgroundColor = chosenColor;
    }
  })

  canvas.addEventListener('mouseup', function(event) {
    mouseClick = false;
  })
});
