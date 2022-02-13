import axios from 'axios';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  return Math.floor(Math.random() * (Math.floor(max) - min) + min);
}

export async function setup() {
  const length = getRandomInt(4,11);

    //Set board layout
    document.documentElement.style.setProperty('--length', length);

  try {
    const response = await axios.get(`https://api.jlavs.com/words?length=${length}`);
    
    if (response.status !== 200) {
      console.error("An error has occured");
      return;
    }

    const { allowed, answers } = response.data;
    const word = answers[getRandomInt(0, answers.length)];
  
    return { 
      word,
      length,
      allowedGuesses: [...allowed, ...answers],
    }

  } catch (error) {
    console.error("Something went wrong!")
  }
}