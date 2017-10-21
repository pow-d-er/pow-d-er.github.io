function count(){
    prod = 0;
    exp = 0;
    cont = 0;
    producents();
    contractors();
    experience();

}

function producents(){
    var i = 350;
    document.getElementById('producents').innerHTML = prod.toString();
    prod++;
    if(prod>4) return;
    setTimeout(producents, i);
}

function contractors(){
    var i = 10;
    document.getElementById('contractors').innerHTML = cont.toString();
    cont++;
    if(cont>100) return;
    setTimeout(contractors, i);
}

function experience() {
    var i = 140;
    document.getElementById('experience').innerHTML = exp.toString();
    exp++;
    if(exp>10) return;
    setTimeout(experience, i);
}

window.onload = count;
