const zt= document.getElementById('zt')
const na= document.getElementById('na')
const ds= document.getElementById('ds')

zt.addEventListener('click',() => {
    document.body.classList.remove('na','ds')
    document.body.classList.add('zt')
});
na.addEventListener('click',() => {
    document.body.classList.remove('zt','ds')
    document.body.classList.add('na')
});
ds.addEventListener('click',() => {
    document.body.classList.remove('zt','na')
    document.body.classList.add('ds')
});



// -------timmer-----------
//Make the DIV element draggagle:
dragElement(document.getElementById("mydiv-timmer"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
//----to-hide&unhid------

const targetDivtimmer = document.getElementById("timmerid");
const btntimmertoggle = document.getElementById("timmertoggle");
const btntimmertoggleoff = document.getElementById("btntimmertoggleoff")
btntimmertoggle.onclick = function () {
    targetDivtimmer.style.display = "block";
};
btntimmertoggleoff.onclick = function (){
  targetDivtimmer.style.display = "none";
}

//----to-hide&unhid-end------
// -----------timmer-end-------------


// -----------music---------

//Make the DIV element draggagle:
dragElement(document.getElementById("mydiv-music"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

//----to-hide&unhid------

const targetDivmusic = document.getElementById("musicid");
const btnmusictoggle = document.getElementById("musictoggle");
const btnmusictoggleoff = document.getElementById("btnmusictoggleoff")
btnmusictoggle.onclick = function () {
  targetDivmusic.style.display = "block";
};
btnmusictoggleoff.onclick = function (){
  targetDivmusic.style.display = "none";
}

//----to-hide&unhid-end------
//------changin-the-link---
const mus1 = document.getElementById('music-1')
const mus2 = document.getElementById('music-2')
const mus3 = document.getElementById('music-3')

mus1.addEventListener('click',() => {
  document.getElementById("mus-src").src="https://open.spotify.com/embed/playlist/7Cq5O9cTVa1OEutcLTYm5x?utm_source=generator";
});
mus2.addEventListener('click',() => {
  document.getElementById("mus-src").src="https://open.spotify.com/embed/playlist/0ffnLxCftwLzmXDO7DJEXc?utm_source=generator";
});
mus3.addEventListener('click',() => {
  document.getElementById("mus-src").src="https://open.spotify.com/embed/playlist/6rMhkhdcAeG4AUQMmZQVwE?utm_source=generator";
});




//-------changing-link-end-


// -----------music-end---------



//-----------tod-------------

//Make the DIV element draggagle:
dragElement(document.getElementById("mydiv-todo"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

//----to-hide&unhid------

const targetDivtodo = document.getElementById("todoid");
const btntodotoggle = document.getElementById("todotoggle");
const btntodotoggleoff = document.getElementById("btntodotoggleoff")
btntodotoggle.onclick = function () {
  targetDivtodo.style.display = "block";
};
btntodotoggleoff.onclick = function (){
  targetDivtodo.style.display = "none";
}

//----to-hide&unhid-end------



//------------todo-end-------