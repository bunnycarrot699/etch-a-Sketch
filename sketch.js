const container=document.querySelector('.container');
const bts=document.querySelectorAll('input[type=radio]');
const colors=['#9F2B68', '#BF40BF', '#800020','	#702963','#CF9FFF', '#483248','#A95C68'];
let functiedefacut = function how(event)
{   
    if(bts[0].checked){
        changebColor(event.target, 1);
    }
     else if(bts[1].checked){
        changebColor(event.target, +0.1);
    }
    else if(bts[2].checked){
        rainbow(event.target);
    }
}

function Sketch(number)
{
    for(i=0;i<number;i++)
    { 
        const firstrow=document.createElement('div');
        firstrow.classList.add('firstrow');
        //firstrow.textContent=` ${i}`;
        container.appendChild(firstrow);
        for(j=0;j<number;j++)
        {
            const element=document.createElement('div');
            element.classList.add('element');
            firstrow.appendChild(element);
            element.textContent=``;
        }
    }
    const elements=document.querySelectorAll('.element');
         for(i=0;i<elements.length; i++)
    elements[i].addEventListener('mouseover', functiedefacut)
}
Sketch(16);

var slider=document.getElementById("myRange");

slider.oninput=function(){
   container.textContent='';
   Sketch(this.value);
   const Restart=document.querySelector('#Restart')
} 

function changebColor(bColor, change){
    const value = getComputedStyle(bColor).getPropertyValue("background-color");
    const parts=value.match(/[\d.]+/g);
    if (parts.length === 3){
        parts.push(1);
    }
    parts[3]= parseFloat(parts[3])+ change;
    bColor.style.backgroundColor=`rgba(${ parts.join(',') })`;
}
function makeallclear(bCol){
    bColor.style.backgroundColor
}

function rainbow(bColor){
   const a=Math.floor(Math.random()*colors.length)
   bColor.style.backgroundColor=`${colors[a]}`;
}








