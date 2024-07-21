#! usr/bin/env node
import inquirer from 'inquirer';
//asking for roll number
let roll = await inquirer.prompt({
    type: "number",
    name: "num1",
    message: "please enter your roll number: ",
});
//roll number
let rollNo = roll.num1;
//checking roll no
if (rollNo === 323245) {
    //asking for marks
    let marks = await inquirer.prompt([
        {
            name: "typescript",
            type: "number",
            message: "please enter your typescript number: ",
        }, {
            name: "python",
            type: "number",
            message: "please enter your python number: ",
        }, {
            name: "csharp",
            type: "number",
            message: "please enter your csharp number: ",
        }
    ]);
    //extract marks
    let ts = marks.typescript;
    let pyth = marks.python;
    let c_Sharp = marks.csharp;
    //percentage
    let totalMarks = 300;
    let obtainMarks = ts + pyth + c_Sharp;
    let percent = ((obtainMarks / totalMarks) * 100);
    //answers
    console.log("Name:Ratan lal");
    console.log("FatherName: chaman Lal");
    console.log(`typescript marks = ${ts} out of 100`);
    console.log(`typescript marks = ${pyth} out of 100`);
    console.log(`typescript marks = ${c_Sharp} out of 100`);
    console.log(`obtainMarks = ${obtainMarks}  totalMarks = ${totalMarks}`);
    console.log(`percentage = ${percent}`);
}
else {
    console.log("invalid roll number");
}
