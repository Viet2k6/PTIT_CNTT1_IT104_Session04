"use strict";
const processInput = (input) => {
    if (typeof input === "string") {
        const isNumeric = /^\d+$/.test(input);
        if (isNumeric) {
            const numberValue = parseInt(input, 10);
            console.log(numberValue * numberValue);
        } else {
            let letterCount = 0;
            for (let i = 0; i < input.length; i++) {
                const char = input[i];
                if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
                    letterCount++;
                }
            }
            console.log(`${letterCount} ký tự chữ cái`);
        }
    } else if (typeof input === "number") {
        if (input < 2) {
            console.log("Không phải số nguyên tố");
            return;
        }

        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(input); i++) {
            if (input % i === 0) {
                isPrime = false;
                break;
            }
        }

        console.log(isPrime ? "Là số nguyên tố" : "Không phải số nguyên tố");
    } else if (typeof input === "boolean") {
        if (input === true) {
            console.log("Giá trị là true - tiến hành xử lý");
        } else {
            console.log("Giá trị là false - dừng xử lý");
        }
    }
};

processInput("123");       
processInput("abc123!");    
processInput(7);           
processInput(8);          
processInput(true);       
processInput(false);        

