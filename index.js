function clickCheck() {
    if (document.getElementById('yesCheck').checked) {
        document.getElementById('ifYes').style.display = 'block';
        document.getElementById('ifClicked').style.display = 'none';
    }
    else if(document.getElementById('clCheck').checked){
        document.getElementById('ifClicked').style.display = 'block';
        document.getElementById('ifYes').style.display = 'none';
    }

}




