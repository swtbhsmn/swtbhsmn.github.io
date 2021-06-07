const imageHolder = document.querySelector('.backdrop');


window.addEventListener('scroll', () => {


    if(window.scrollY>=50){
      
        if(imageHolder){
            imageHolder.classList.add('show-backdrop')
            imageHolder.classList.remove('hide-backdrop')
        }
    }else{
       
        if(imageHolder){
            imageHolder.classList.remove('show-backdrop')
            imageHolder.classList.add('hide-backdrop')
        }
    }
  


})



