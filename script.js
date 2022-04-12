let addbtn = document.getElementById("addbtn");
let addtext = document.getElementById("addtext");
let addtitle=document.getElementById("title");
console.log("hello bhaimya");
// localStorage.clear();
addbtn.addEventListener("click", function (e) {
  let notes = document.getElementById("notes");
  
  notes = localStorage.getItem("notes");
  title=localStorage.getItem("titles");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
  let myobj={
    text: addtext.value,
    title: addtitle.value
  }
  notesobj.push(myobj);
  localStorage.setItem("notes", JSON.stringify(notesobj));
  addtext.value = "";
  addtitle.value="";
  console.log(notesobj);
  showNotes();
});
let xml = [];
let i = 0;
function showNotes() {
  notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
  let html = "";
  notesobj.forEach(function (element, index) {
    html += ` <div class="noteCard my-2 mx-2 card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
           <p class="card-text dtext">
          ${element.text}
           </p> 
          
          <button id="${index}" onclick="deletenote(this.id)" class="btn btn-primary delnotes">Delete Node</button>
        </div>
      </div>`;

    let noteselm = document.getElementById("notes");
    if (notes.length != 0) {
      noteselm.innerHTML = html;
    } else {
      noteselm.innerHTML = `nothing to show use a "add a notes" option`;
    }
  });
}

function deletenote(index) {
  console.log("i am deleting", index + 1);
  let notes = document.getElementById("notes");
  notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
  if(notesobj.length!=1){
  notesobj.splice(index, 1);
  }
  else{
    notesobj=[];
  }
  localStorage.setItem("notes", JSON.stringify(notesobj));
  showNotes();
  //   console.log(notesobj);
}

search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
  let input = search.value.toLowerCase;
  // console.log("input event fired", input);
  let notecards = document.getElementsByClassName("noteCard");
  Array.from(notecards).forEach(function (element) {
    let cardtxt = element.getElementsByTagName("p")[0].innerText;
    if (cardtxt.includes(input)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});
