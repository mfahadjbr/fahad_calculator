#! /usr/bin/env node
import inquirer from "inquirer";
const mycalculator= await inquirer.prompt([
    {
        type: 'list',
        name:'cal',
        message: 'calculator list:',
        choices: ['add','substract','multip','division','modulo']
    }, 
    {
        type: 'number',
        name: 'num1',
        message: 'Enter first number ='
    },
    {
        type: 'number',
        name: 'num2',
        message: 'Enter second number ='
    }
])
if(mycalculator.cal=='add'){
    console.log(`Add the two number = ${mycalculator.num1+mycalculator.num2}`);
}else if(mycalculator.cal=='substract'){
    console.log(`substract the two number = ${mycalculator.num1-mycalculator.num2}`);
}else if(mycalculator.cal=='multip'){
    console.log(`multiply the two number = ${mycalculator.num1*mycalculator.num2}`);
}else if(mycalculator.cal=='division'){
    console.log(`division the two number = ${mycalculator.num1/mycalculator.num2}`);
}else{
    console.log(`module of two number =`);
}
