const correctAnswers = ['B','B','B','B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e =>{
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value,form.q3.value,form.q4.value];

    //check answers
    userAnswers.forEach((answer , index)=>{
       if( answer=== correctAnswers[index]){
        score += 25;
       }
    });
   // console.log(score);

   //show results on the page 
   scrollTo(0,0);  
   //result.querySelector('span').textContent = `${score}%`;
   result.classList.remove('d-none');

//Score animation   
   let output = 0;
const timer = setInterval(()=>{
    result.querySelector('span').textContent = `${output}%`;
    if(output === score){
        clearInterval(timer);
    } else {
        output++;
    }
}, 10);

});





//WINDOW OBJECT OR GLOBAL OBJECT
//set timeout
setTimeout(()=>{
    alert('hello, ninjas');
}, 3000);

//SET INTERVAL - FOR ANIMATION
// setInterval(()=>{       //if we do nothing it will keep executing over and over
//     console.log('helo');
// }, 1000);

//to clear the interval do
// let i = 0;
// const timer = setInterval(()=>{   
//     console.log('helo');
//     i++;
//     if(i ==5){
//         clearInterval(timer);
//     }

// }, 1000);
