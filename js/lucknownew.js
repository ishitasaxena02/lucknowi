function mymap(idCheck, idText) {
    var checkBox = document.getElementById(idCheck);
    var text = document.getElementById(idText);
    if (checkBox.checked == false){
        text.style.display = "block";
    } else {
       text.style.display = "none";
    }
}