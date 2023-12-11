const container=document.querySelector('.container');

for(i=0;i<16;i++)
{
    const firstrow=document.createElement('div');
    firstrow.classList.add('firstrow');
    //firstrow.textContent=` ${i}`;
    container.appendChild(firstrow);
    for(j=i*16+1;j<=(i+1)*16;j++)
    {
        const element=document.createElement('div');
        element.classList.add('element');
        element.textContent=` ${j}`;
        firstrow.appendChild(element);
    }

}
const elements=document.querySelectorAll('.element');
elements.addEventListener("mouseover", (event)=>
{
    event.target.style.color="purple";
});
