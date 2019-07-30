function clickCheck() {
    if (document.getElementById('compareToURL').checked) {
        document.getElementById('ifYes').style.display = 'block';
        document.getElementById('ifClicked').style.display = 'none';
    }
    else if(document.getElementById('compareToGoogle').checked){
        document.getElementById('googleResults').style.display = 'block';
        document.getElementById('ifYes').style.display = 'none';
    }

}




