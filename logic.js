let checkbox = document.getElementById('checkbox');
let allContent = document.querySelector('.container')
let bluredContent = document.querySelector('.content');
let xmark = document.getElementById('xmark');
let menu = document.getElementById('menu')


xmark.style.display = 'none'


checkbox.addEventListener('change', () => {
  
    if(checkbox.checked){
        xmark.style.display = 'block'
        xmark.style.color ='white'
        xmark.style.fontSize ='40px'
        menu.style.display = 'none'
          bluredContent.style.filter  = 'blur(30px)'
  
    }
    else{
          xmark.style.display = 'none';
          menu.style.display = 'block';
          bluredContent.style.filter  = 'blur(0px)'
    }












})