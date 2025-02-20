const img=document.querySelectorAll('.slider ul img')
const prev=document.querySelector('.previous')
const next=document.querySelector('.next')

let n = 0;

function changeSlide(){
    for(let i=0; i < img.length; i++){
        img[i].style.display='none';
    }
    img[n].style.display='block';
}
changeSlide();

prev.addEventListener('click',(e)=>{
    if(n > 0){
        n--;
    }
    else{
        n= img.length -1;
    }
    changeSlide();
    
})
next.addEventListener('click',(e)=>{
    if(n < img.length-1){
        n++;
    }
    else{
        n=0
    }
    changeSlide();
    
})

var scroll=document.querySelectorAll(".products");

for(var item of scroll){
    item.addEventListener("wheel",(evt)=>{
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    })
}


