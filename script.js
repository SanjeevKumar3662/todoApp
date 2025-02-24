const addBtn = document.querySelector("#addBtn");

//creates list item for DOM
const createListItem = (inputVal) => {
  //creating li and appending a textNode within it
  const li = document.createElement("li");
  li.classList.add("list-item");
  li.appendChild(document.createTextNode(inputVal));

  //creating the x button
  const btn = document.createElement("button");
  const icon = document.createElement("i");
  icon.classList.add("fa");
  icon.classList.add("fa-x");
  btn.appendChild(icon);

  //appending the x/delete button to li
  li.appendChild(btn);

  //list element has been created and returned
  return li;
};

const addElementToDOM = (e) => {
  //this will prevent the form from submitting
  e.preventDefault();

  //getting the value form the input form
  const inputValue = document.querySelector("#mainInput").value;
  // console.log(inputValue);

  //calling the creatListItem function this will create the list item
  const liItem = createListItem(inputValue);

  //adding list item to the DOM
  const parentUl = document.querySelector("#list");
  parentUl.appendChild(liItem);
};

addBtn.addEventListener("click", addElementToDOM);

alert("reloaded / load");
