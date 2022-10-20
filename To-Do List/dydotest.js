function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("task").value;
    var Cate= document.getElementById('select').value;
    var t = document.createTextNode(inputValue);

    li.appendChild(t);
    if (inputValue === '') {
      alert("You Dumb Bitch !");
    } 

    if (Cate==='') {
      alert("You Dumb Bitch !")
    }

    if (Cate==='Studies') {
      document.getElementById('StudiesL').appendChild(li)
    }

    if (Cate==='HomeMaintenance') {
      document.getElementById('HomeMain').appendChild(li)
    }

    if (Cate==='Entertainment') {
      document.getElementById("Enter").appendChild(li);
    }
    
    if (Cate==='Work') {
      document.getElementById("Wor").appendChild(li);
    }

    document.getElementById("task").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }

var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}