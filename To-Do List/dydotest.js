function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("task").value;
    var Cate= document.getElementById('select').value;
    var t = document.createTextNode(inputValue);

    li.appendChild(t);
    if (inputValue === '') { //si rien n'est saisi dans la barre de texte, on aura un message d'alerte
      alert("You Dumb Bitch !");
    } 

    if (Cate==='') {
      alert("You Dumb Bitch !") //si aucune catégorie n'est choisi, on aura un message d'alerte
    }

    if (Cate==='Studies') {
      document.getElementById('StudiesL').appendChild(li)
    }

    if (Cate==='HomeMaintenance') {
      document.getElementById('HomeMain').appendChild(li)
    }                                                                           // 4 boucles qui permettent de distinguer la catégorie de la tâche saisie

    if (Cate==='Entertainment') {
      document.getElementById("Enter").appendChild(li);
    }
    
    if (Cate==='Work') {
      document.getElementById("Wor").appendChild(li);
    }

    document.getElementById("task").value = ""; // Reset la barre de texte
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";                         // Permet de coller le X à chaque élément de la liste
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
}                                                                         // Rendent le X fonctionnel qui servira d'outil pour supprimer des tâches

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}