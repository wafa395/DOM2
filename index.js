function push(){
    let number = document.getElementById('num').value;
    console.log(number);

    let stackElement = document.createElement('div');
    let elementNumber = document.createElement('span');
    stackElement.setAttribute('class', 'inside');
    stackElement.setAttribute('id', 'stackDiv');
    elementNumber.setAttribute('id', 'stackNumber');

    elementNumber.innerText = number;

    if (!number.length) {
        warning.classList.remove('hidden-item');
        return;
    }
    if (!warning.classList.contains('hidden-item')) {
        warning.classList.add('hidden-item');
    }

}