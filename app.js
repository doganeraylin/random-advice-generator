// store elements

const adviceBtn = document.querySelector('.button');
const adviceContainer = document.querySelector('.container');
const adviceText = document.querySelector('h2')
const adviceURL = 'https://api.adviceslip.com/advice';

// button click event

adviceBtn.addEventListener('click', getAdvice)


// fetch API

async function getAdvice () {

    const response = await fetch(adviceURL);
    const data = await response.json();
    const {slip} = data;
    const slipAdvice = slip.advice;
    
    // change text content 

    adviceText.textContent = slipAdvice;
    // console.log(data);
    // console.log(slip);
    // console.log(slipAdvice);

}








