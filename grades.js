/* Loop over an array of student grades (values from 50-100) and keep track of how 
many students get each grade in an object named grades.

A score of 50-60 is an F
A score of 61-70 is a D
A score of 71-80 is a C
A score of 81-90 is a B
A score of 91-100 is an A
Start with array of random scores in your JavaScript

const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60]
const grades = {} // You'll need to change this line of code

for (let i = 0; i < scores.length; i++) {
    /*
      If the score is greater than 90, increment grades.A by 1.

      You can use a series of `if/then` blocks, but you could
      also achieve this with a switch statement.
}*/


/* Use console.log() to output the following criteria to the browser console.

- [ ]How many of each grade? Accomplish this with a for..in loop.
- [x]What is the lowest score? Sort the array and find out.
- [x]What is the highest score?
- [ ]Which grade had the most students achieve it? Use an if statment, 
and a currentGradeCount variable, in your for..in loop to see if the current grade's value is higher than the last one.
- [ ]Which grade had the fewest students achieve it? */

const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60]
//sorts thescored in ascending order:
let sortedScores = scores.sort(function(a, b) {
  return a - b }
);
  console.log("Ascending order scores: ", sortedScores);
  
  s = scores.length;
  console.log("Number of scores: ", s);
  console.log("The lowest score: ", sortedScores[0]);
  console.log("The highest score: ", sortedScores[s-1]);
 
//created an object named grades:
const grades = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    F: 0,
};
//counts the number of students for each grades and adds to the values in the Grades object key.
    for (let s = 0; s < scores.length; s++) {
        if (scores[s] >= 91) {
           grades.A += 1;
           

          }else if (scores[s] <= 90 && scores[s] >= 81) {
            grades.B += 1;
            

          }else if (scores[s] <= 80 && scores[s] >= 71) {
           grades.C += 1;
           

          }else if (scores[s] <= 70 && scores[s] >= 61) {
            grades.D += 1;
            

          }else if (scores[s] <= 60 && scores[s] >= 51) {
            grades.F += 1;
            
          }    
    };
  // How many of each grade? 
    console.log("A-grades: ", grades.A);
    console.log("B-grades: ", grades.B);
    console.log("C-grades: ", grades.C);
    console.log("D-grades: ", grades.D);
    console.log("F-grades: ", grades.F);

  

           
        /*for (let s = 0; s < scores.length; s++) {
            if (scores[s] >= 91) {
               grades.A;
               
              }else if (scores[s] <= 90 && scores[s] >= 81) {
                grades.B;
                
              }else if (scores[s] <= 80 && scores[s] >= 71) {
               grades.C;
              }else if (scores[s] <= 70 && scores[s] >= 61) {
                grades.D;
              }else if (scores[s] <= 60 && scores[s] >= 51) {
                grades.F;
              }
          /* console.log("how many A-grades? ", grades.A += 1);
            console.log("how many B-grades? ", grades.B += 1);
            console.log("how many C-grades? ", grades.C += 1);
            console.log("how many D-grades? ", grades.D += 1);
            console.log("how many F-grades? ", grades.F += 1);
            };*/


        

// You'll need to change this line of code 