const addBtn = document.querySelector("#addBtn");
const mainList = document.querySelector("#list");
const clearAllBtn = document.querySelector("#clear-all-btn");
const filterInput = document.querySelector("#filter-input");

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
  // e.preventDefault();

  //getting the value form the input form
  const inputValue = document.querySelector("#mainInput").value;

  //validation - if the input value is an empty string then warn and return
  if (inputValue === "") {
    alert("kya add karu ? kuch input toh daalo bhai.");
    return;
  }

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

//ClearAll Function
const clearAllItemsFromDOM = () => {
  //this will return a nodeList
  const itemsToBeDeleted = document.querySelectorAll("li");

  //validation - if node list empty then warn the user and return
  if (itemsToBeDeleted.length === 0) {
    alert("List toh kahli hai, kya delete karu ? pura github :)");
    return;
  }
  alert(
    "This will delete all list items, to proceed click OK or refresh the page to abort the operation."
  );

  itemsToBeDeleted.forEach((item) => item.remove());
};

//filter function
const filterListItems = (e) => {
  const inputVal = e.currentTarget.value;
  const listItems = document.querySelectorAll("li");

  listItems.forEach((item) => {
    //if the item include the input string then set it to flex else to none
    if (item.firstChild.wholeText.includes(inputVal)) {
      // console.log("true");
      item.style.display = "flex";
    } else {
      // console.log("false");
      item.style.display = "none";
    }
  });
};

//event Listeners
addBtn.addEventListener("click", addElementToDOM); // for add function
mainList.addEventListener("click", deleteItemFromDOM); // for delete function
clearAllBtn.addEventListener("click", clearAllItemsFromDOM); //for clear all button
filterInput.addEventListener("input", filterListItems); // for filtering the list items

window.addEventListener("DOMContentLoaded", alert("Wellcome :)"));
