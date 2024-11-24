type number1 = 2 extends number ? true : false;
type number2 = number extends 2 ? true : false;

type numberArray1 = number[] extends [] ? true : false;
type numberArray2 = [] extends number[] ? true : false;
type numberArray3 = number[] extends any[] ? true : false;
