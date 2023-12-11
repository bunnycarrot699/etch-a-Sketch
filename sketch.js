const container=document.querySelector('.container');
var slider=document.getElementById("myRange");
slider.oninput=function(){
container.textContent='';
n=this.value;
for(i=0;i<n;i++)
{ 
    const firstrow=document.createElement('div');
    firstrow.classList.add('firstrow');
    //firstrow.textContent=` ${i}`;
    container.appendChild(firstrow);
    for(j=0;j<n;j++)
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



