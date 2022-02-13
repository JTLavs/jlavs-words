'use strict';

import { allowedWords } from './words';

module.exports.index = async (event) => {
  const { queryStringParameters } = event;

  const { length } = queryStringParameters;

  if (!length) {
    return {
      statusCode:200,
      body: JSON.stringify({ message: 'All words' })
    }
  }

  
  return {
    statusCode: 200,
    body: JSON.stringify({ words: allowedWords.filter(el => el.length() ) })
  }
};
