function addDato(dato){
    var input=document.getElementById('input');
    if(dato=="DEL"){
        input.value = input.value.slice(0, -1);
        return;
    }
    input.value+=dato;
}