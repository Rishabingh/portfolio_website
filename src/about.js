document.addEventListener('DOMContentLoaded', () => {

    const rishab = document.querySelector('.rishab');
    const text = "Hey, I'm Rishab Singh";
    let index = 0;
  
    function typeWriter() {
      if (index <= text.length) {
        rishab.textContent = text.slice(0, index);
        index++;
        setTimeout(typeWriter, 60); // Adjust speed here (ms)
      }
    }
  
    typeWriter();
    
});