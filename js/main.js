var h1 = document.querySelector('h1');
var btn = document.querySelector('button');
var body = document.querySelector('body');
btn.addEventListener('click', function() {
  if (btn.className === 'switch on') {
    body.className = 'dark';
    btn.className = 'switch off';
    h1.innerText = 'Hey, who turned off the light ?'
  } else {
    btn.className = 'switch on';
    body.className = 'light';
    h1.innerText = "It's so bright in here !"
  }

});
