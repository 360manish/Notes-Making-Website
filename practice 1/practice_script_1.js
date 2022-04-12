
let i,k=0;
// constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
  }
  
  // Display Constructor
  
  function Display() {}
  Display.prototype.add = function (book) {
    console.log("I am adding");
    let tablebody = document.getElementById("tablebody");
    let uistring = `<tr>
                          <td>${book.name}</td>
                          <td>${book.author}</td>
                          <td>${book.type}</td>
                      </tr>`;
    tablebody.innerHTML += uistring;
  };
  
  Display.prototype.clear = function () {
    let libraryform = document.getElementById("libraryform");
    libraryform.reset();
  };
  
  // IMPLEMENTING VALIDATE FUNCTION
  Display.prototype.validate = function () {
    if (book[i].name.length < 2 || book[i].author.length < 2) {
      return false;
    } else {
      return true;
    }
  };
  
  // IMPLEMENTING SHOW FUNCTION
  Display.prototype.show = function (element, help) {
      if(k==i){
    html = `<div id="alertstr" class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>${element}</strong><br>${help}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> 
          </div>`;
    let message = document.getElementById("message");
    message.innerHTML += html;
  
    setTimeout(() => {
      message.innerHTML='';
    }, 2000);
}
  };
  
  // Add methods to display prototype
  
  // add Submit eventlistener to libraryform
  let libraryform = document.getElementById("libraryform");
  libraryform.addEventListener("submit", libraryFormSubmit);
  let book=[];
  // libraryformsuubmit function is startes from here
  function libraryFormSubmit(e) {
    let bookobj = [];
    e.preventDefault();
    let name = document.getElementById("bookname").value;
    let author = document.getElementById("author").value;
    let type;
    let fiction = document.getElementById("fiction");
    let programming = document.getElementById("programming");
    let cooking = document.getElementById("cooking");

    if (fiction.checked) {
        type = fiction.value;
      }
    if (programming.checked) {
        type = programming.value;
      }
    if (cooking.checked) {
        type = cooking.value;
      }
    
    // local storage work starts
    bookname=localStorage.getItem("name");
    bookauthor=localStorage.getItem("author");
    booktype=localStorage.getItem("type")
    if(bookname==null){
        nameobj=[];
    }
    else{
        nameobj=JSON.parse(bookname);
    }
    nameobj.push(name)
    if(bookauthor==null){
        authorobj=[];
    }
    else{
        authorobj=JSON.parse(bookauthor);
    }
    authorobj.push(author);
    if(booktype==null){
        typeobj=[];
    }
    else{
        typeobj=JSON.parse(booktype);
    }
    typeobj.push(type);
    localStorage.setItem("name",JSON.stringify(nameobj));
    localStorage.setItem("author",JSON.stringify(authorobj));
    localStorage.setItem("type",JSON.stringify(typeobj));
    // local storage works ends
    let tablebody = document.getElementById("tablebody");
    tablebody.innerHTML="";
    for(i=0;i<typeobj.length;i++){
        book[i]=new Book(nameobj[i],authorobj[i],typeobj[i]);
        let display = new Display();
    if (display.validate()) {
      display.add(book[i]);
      display.clear();
      display.show("success", "Successfully added");
    } else {
      display.show(
        "error",
        "Author and Book name must be greater than two words."
      );
    }
    }
    k=k+1;
    console.log(book);
    console.log("namaste world");

  }
  

