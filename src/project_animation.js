document.addEventListener('DOMContentLoaded', ()=> {

    function changeimage(no, arrayImages) {
        const projectImg = document.querySelector(`.project-img${no}`);
        const card = document.querySelector(`.card${no}`);
    
        const images = arrayImages;
    
        let index = 0;
        let isHovered = false;
     
        card.addEventListener('mouseenter', () => {
            isHovered = true;
        });
        card.addEventListener('mouseleave', () => {
            isHovered = false;
        });
        
    
    setInterval(()=>{
    
        if (isHovered) return;
        
        projectImg.classList.remove('scale-100');
        projectImg.classList.add('scale-90');
          
        setTimeout(()=>{
            projectImg.src = images[index];
    
            projectImg.classList.remove('scale-90');
            projectImg.classList.add('scale-100');
    
            setTimeout(() => {
                projectImg.classList.remove('scale-110');
                projectImg.classList.add('scale-100');
            }, 300);
        }, 200)
        index = (index+1) % images.length;
    },1500);

    }

  const imgGroup1 = ['./images/movie-project2img.png', './images/movie-project3img.png', './images/movie-project1img.png'];
  const imgGroup2 = ['./images/rock-project2img.png', './images/rock-project3img.png', './images/rock-project1img.png'];
  const imgGroup3 = ['./images/cal-project3img.png', './images/cal-project2img.png', './images/cal-project1img.png'];

  changeimage(1, imgGroup1);
  changeimage(2, imgGroup2);
  changeimage(3, imgGroup3);

});