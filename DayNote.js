//select popup button,popbox and popoverlay
var addpopupbtn = document.getElementById("addbtn");
var popbox = document.querySelector(".pop-box");
var popoverlay = document.querySelector(".pop-overlay");

//add event listener to popup button
addpopupbtn.addEventListener("click", function () {
  popoverlay.style.display = "block";
  popbox.style.display = "block";
});

//select cancel button
var cancelbtn = document.querySelector(".box-cancel");
cancelbtn.addEventListener("click", function (event) {
  event.preventDefault();
});

//select add button
var addbtn = document.querySelector(".box-add");
addbtn.addEventListener("click", function (event) {
  event.preventDefault();
});

//cancel the popup using cancel button
cancelbtn.addEventListener("click", function () {
  popoverlay.style.display = "none";
  popbox.style.display = "none";
});

// select continer,title-input,date-input,content-input
var continer = document.querySelector(".book-container");
var titleinput = document.querySelector(".title-input");
var dateinput = document.querySelector(".date-input");
var contentinput = document.querySelector(".content-input");
var body = document.querySelector(".body");

//add the content to the main page using add button
addbtn.addEventListener("click", function () {
  console.log("clicked");
  var div = document.createElement("div");
  div.setAttribute("class", "book-container");
  div.innerHTML = `
<h1 class="title">${titleinput.value}</h1>
        <h1 class="date">${dateinput.value}</h1>
        <p class="content">${contentinput.value}</p>
        <button class="delete" onclick="deletebook(event)">Delete</button>
`;
  body.append(div);
  popoverlay.style.display = "none";
  popbox.style.display = "none";
});

//delete the content using delete button
function deletebook(event) {
  event.target.parentElement.remove();
}
