let keyUp = document.querySelector('.go-up');

window.onscroll = function(){
    if(window.scrollY >= 5000){
        keyUp.classList.add('show');
    }else{
        if(keyUp.classList.contains('show')){
            keyUp.classList.remove('show');
        }
    }
};

keyUp.onclick = function(){
    window.scrollTo( 0, 0 ) ;
};

