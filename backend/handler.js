'use strict';

const words = require('./words');

module.exports.index = async (event) => {
  if (event["queryStringParameters"]) {
    const { length } = event["queryStringParameters"];

    if (!length) {
      return { statusCode: 400, body: JSON.stringify({message: 'No length has been provided'})}
    }

    const allowed = words.allowedWords.filter(el => el.length == length);
    const answers = words.possibleAnswers.filter(el => el.length == length);
  
    return {
      statusCode: 200,
      body: JSON.stringify({ answers, allowed }),
    }
  }
};
