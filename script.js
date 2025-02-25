const addBtn = document.querySelector("#addBtn");
const mainList = document.querySelector("#list");
// const deleteItem = document.querySelector("#list");

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

//will delete list-item function
const deleteItemFromDOM = (e) => {
  // if the target is an icon inside the ul then the parent's
  // parent element will be removed and that would be the whole list-item

  if (e.target.tagName === "I") {
    e.target.parentElement.parentElement.remove();
  }
};

addBtn.addEventListener("click", addElementToDOM);
mainList.addEventListener("click", deleteItemFromDOM);

alert("reloaded / load");
