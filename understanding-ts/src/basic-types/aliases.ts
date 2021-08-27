// import React from 'react';

type CustomType = number | string;

function combineValues(input1: CustomType, input2: CustomType) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

enum Types {
  COISO = 'COISO',
  COISINHO = 'COISINHO',
  COISAO = 'COISAO',
}

const combineNumbers = combineValues(30, 26);
console.log(combineNumbers);

const combineStrings = combineValues('Pedro', 'Lucía');
console.log(combineStrings);
