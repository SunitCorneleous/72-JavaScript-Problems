/* 2) Write a program to calculate the average marks of Mathematics,
Biology, Chemistry, Physics, and Bangla of a student.
 */

function avgMarks(math, biology, chemistry, physics, bangla) {
  const average = (math + biology + chemistry + physics + bangla) / 5;

  return average;
}

const result = avgMarks(85, 75, 65, 76, 62);
console.log(result);
