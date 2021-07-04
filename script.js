const form = document.forms['register'];

form.getElementsByTagName('button')[0].addEventListener('click', handleSubmit);

function handleSubmit(event) {
    Array.from(form.getElementsByTagName('input')).forEach(input => {
        if (input.checkValidity()) {
            input.parentElement.classList.remove('invalid');
        } else {    
            input.parentElement.classList.add('invalid');
            event.preventDefault();
        }
    });
}