// store elements

const adviceBtn = document.querySelector('.button');
const adviceContainer = document.querySelector('.container');
const adviceText = document.querySelector('h2')
const adviceURL = 'https://api.adviceslip.com/advice';

// fetch API

async function getAdvice () {

    const response = await fetch(adviceURL);
    const data = await response.json(); 
    const slipAdvice = slip.advice;
    console.log(data);
    console.log(slip);
    console.log(slipAdvice);


    adviceBtn.addEventListener('click',function(){
    
    // random advice --copied this from stack overflow
    // picks random letters lol 
    // idk what's going on here really

    const adviceArray = Object.keys(slip.advice);
    const randomNumber = Math.random();
    const adviceIndex = Math.floor(randomNumber * adviceArray.length);
    const randomKey = adviceArray[adviceIndex];
    const randomValue = slipAdvice[randomKey];
    console.log(randomValue);

    // change the text content 

         adviceText.textContent = randomValue;
    })

}

getAdvice();











 