var button = document.querySelector("button");

button.addEventListener("click", function() {
    const curColour = document.button.style.backgroundColor;

    document.button.style.backgroundColor = curColour === 'red' ? 'black' : 'red';
});

