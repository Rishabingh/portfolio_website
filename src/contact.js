document.addEventListener('DOMContentLoaded', ()=> {
    const formHeading = document.querySelector('.form-heading');

    const formText = 'Got something cool in mind? I’m open to work, collaboration, and freelance gigs. Feel free to reach out anytime.';

    function typewriter() {
        for(let i = 0; i<formText.length+1; i++) {
            setTimeout(()=>{
                formHeading.textContent = formText.slice(0, i);
            }, i*60);
        }
    }
    typewriter();
});