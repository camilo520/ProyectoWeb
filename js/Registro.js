
function changeVar() {
    var type = document.getElementById('o-option').value;
    var typeU = document.getElementById('o-pacientes');
    var typeU2 = document.getElementById('o-doctores');
    var typeU3 = document.getElementById('o-eps');
    if(type == "paciente") {
    typeU.style.display='block';
    typeU2.style.display='none';
    typeU3.style.display='none';
    //document.getElementById('picture_div').innerHTML = 'URL: <input name="url" type="text" style="width: 100%" />';
    console.log("sisas", "p");    
}
    else if (type == "medico") {
        typeU2.style.display='block';
        console.log("sisas", "m");    
        typeU.style.display='none';
        typeU3.style.display='none';
        //document.getElementById('picture_div').style.display = 'block';
    } 

    else if (type == "eps") {
        typeU3.style.display='block';
        console.log("sisas", "e"); 
        typeU.style.display='none';
        typeU2.style.display='none';   
        //document.getElementById('picture_div').style.display = 'block';
    }
    else {
        
        //document.getElementById('picture_div').style.display = 'none';
        console.log("natucha", "m");    
    }
}