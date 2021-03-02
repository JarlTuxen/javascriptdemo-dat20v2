function btnClick(){
    let textSektion = document.getElementById("textsektion");
    if (textSektion.hidden == true){
        textSektion.hidden = false;
    }
    else{
        textSektion.hidden=true;
    }

    alert(document.getElementById("textsektion").innerText);

}

function formSubmit(){
    let txt = document.getElementById("txtForm").value;
    alert(txt);
    //document.getElementById("textsektion").innerText = txt; //dur ikke - siden reloader onsubmit
}