const newspaperSpinning = [
    // { transform: 'rotate(0) scale(1)' },
    // { transform: 'rotate(360deg) scale(0)' },
    { transform: 'translateY(0px)' },
  { transform: 'translateY(-300px)' }
   ];

  const newspaperTiming = {
    duration: 2000,
    // iterations: 1,
    iterations: Infinity
  }
  


let buttons = document.querySelectorAll('.btn-sm');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e)=>{
//console.log(e.target) 
e.target.innerHTML = "😍";
button.animate(newspaperSpinning, newspaperTiming);
  })
});
