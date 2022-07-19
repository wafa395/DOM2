function push(){
    let number = document.getElementById('num').value;
    let warning = document.getElementById('warning');
    console.log(number);

    let stackElement = document.createElement('div');
    let elementNumber = document.createElement('span');
    elementNumber.textContent = number;
    stackElement.setAttribute('class', 'inside');
    stackElement.setAttribute('id', 'stackDiv');
    elementNumber.setAttribute('id', 'stackNumber');
    stackElement.append(elementNumber);
    const stack = document.querySelector('.stack');
    stack.insertBefore(stackElement, stack.children[0]);

    document.getElementById('num').value = '';

    console.log(stackElement);


    if (!number.length) {
        warning.classList.remove('hidden-item');
        return;
    }
    if (!warning.classList.contains('hidden-item')) {
        warning.classList.add('hidden-item');
    }

}

function pop(){
    let stack = document.querySelector('.stack');
    stack.removeChild(stack.firstChild);
}