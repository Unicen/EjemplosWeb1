document.getElementById('create').addEventListener('click',createButtons);
function createButtons() {
  let quantity = document.getElementById('quantity').value;
  for (let i = 0; i < quantity; i++) {
    let randTime = Math.random() * 5000;
    setTimeout(function(){createButton(i)}, randTime);
  }
}

function createButton(name){
  let div = document.getElementById('buttons');
  let button = document. createElement("button");
  button.name = name;
  button.innerHTML = "Button " + name;
  button.addEventListener('click',() => { alert('This is the button: ' + name)});
  div.appendChild(button);
}
