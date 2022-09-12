function scegliUnTitolo(){
    
    var titolo = prompt("Inscrisci un titolo decente");
    
    if (titolo !== "Home" && titolo !== "Homepage")
    
   alert("Ho detto un titolo decente");

    else
    document.getElementById("titologiusto").innerHTML = titolo;
    
}
