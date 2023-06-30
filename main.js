const form = document.querySelector('#addForm');
const itemList = document.querySelector('#items');
const filter = document.querySelector('#filter');

form.addEventListener('submit', addItem);

itemList.addEventListener('click', removeItem);

filter.addEventListener('keyup', filterItems);

function addItem(e) {
  e.preventDefault();

  let newItem = document.querySelector('#item').value;
  let li = document.createElement('li');
  li.className = 'list-group-item';
  let deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-sm float-right delete';
  deleteBtn.appendChild(document.createTextNode('X'));
  li.appendChild(deleteBtn);
  li.appendChild(document.createTextNode(newItem));
  itemList.appendChild(li);
}

function removeItem(e) {
  if ( e.target.classList.contains('delete') ) {
    if ( confirm('Are You Sure?') ) {
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

function filterItems(e) {
  let text = e.target.value.toLowerCase();
  let items = itemList.getElementsByTagName('li');
  Array.from(items).forEach(item => {
    let itemName = item.firstChild.textContent;
    if( itemName.toLowerCase().indexOf(text) != -1 ) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  }) 
}
