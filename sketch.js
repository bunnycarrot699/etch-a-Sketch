const container=document.querySelector('.container');

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
            element.textContent=``;
            firstrow.appendChild(element);
        }
    }
    const elements=document.querySelectorAll('.element');
         for(i=0;i<elements.length; i++)
    elements[i].addEventListener('mouseover', (event)=>
    {
        event.target.style.backgroundColor='purple';
    });
}
Sketch(16);

var slider=document.getElementById("myRange");

slider.oninput=function(){
   container.textContent='';
   Sketch(this.value);
} 



