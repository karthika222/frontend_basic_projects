let count=0
const button=document.getElementById('b1')
const counterText=document.getElementById('counter')
button.addEventListener('click', function (){
    count++;
    counterText.textContent=`Clicked ${count} times`
});
