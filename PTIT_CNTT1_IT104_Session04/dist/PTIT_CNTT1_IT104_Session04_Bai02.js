"use strict";
const scores = [8.5, 7.2, 9.0, 6.8, 7.5, 8.0, 6.9, 9.2, 7.8, 8.3];
let total = 0;
for (const score of scores) {
    total += score;
}
const average = total / scores.length;
console.log("Điểm trung bình:", average.toFixed(2));
