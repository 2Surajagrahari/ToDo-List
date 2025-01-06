const inputBox = document.getElementById('input-box');
const listCont = document.getElementById('list');

function addTask() {
  if(inputBox.value === ''){
    alert('You must write something!');
  }
  else{
    let listItem = document.createElement('li');
    listItem.innerText = inputBox.value;
    listCont.appendChild(listItem);
    let span = document.createElement('span');
    span.innerHTML = '\u00D7';
    listItem.appendChild(span);
  }
  inputBox.value = '';
    saveData();
}

listCont.addEventListener('click', function(e) {
  if(e.target.tagName === 'LI'){
    e.target.classList.toggle('checked');
    saveData();
  }
  if(e.target.tagName === 'SPAN'){
    e.target.parentElement.style.display = 'none';
    saveData();
  }
});

function saveData() {
    localStorage.setItem('data', listCont.innerHTML);
}

function loadData() {
    listCont.innerHTML = localStorage.getItem('data');
}
loadData();