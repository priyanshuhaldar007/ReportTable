const imageModals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close-modal');

imageModals.forEach(modal => {
  modal.addEventListener('click', (event) => {
    // Check if user clicked outside the modal content
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modalId = button.parentElement.parentElement.id;
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
  });
});

// Get all images with data-modal attribute
const imageCells = document.querySelectorAll('.consleSnapshots');

imageCells.forEach(image => {
  image.addEventListener('click', () => {
    const imgSrc = image.src;
    const modalImg = document.getElementById('modal-img');
    modalImg.src = imgSrc;

    const modal = document.getElementById('image-modal');
    modal.style.display = "block";
  });
});

// color coding the INP value
const inpScores = document.querySelectorAll('.inpScore');

inpScores.forEach(inpscore =>{
    let value = inpscore.innerHTML;
    value = value.split(' ')[0];
    value = value.split(',').join('');
    console.log(value);
    if(value<=200){
        inpscore.style.color = '#09ce6b';
    }
    if(value>=500){
        inpscore.style.color = '#ff4e42';
    }
    else {
        inpscore.style.color = '#ffa400';
    }
})