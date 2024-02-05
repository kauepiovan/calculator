function addNumber(number){
    if (document.getElementById('current-number').value.length == 12){
        return null;
    }
    document.getElementById('current-number').value += number;
}