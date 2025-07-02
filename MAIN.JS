let word = prompt("اكتب كلمة أو جملة:");
let charCount = word.length;
alert("عدد الحروف هو: " + charCount);
رايلان 
function calculateSum() {
      const input = document.getElementById('numbersInput').value;
      const numbers = input.split(',').map(Number);
      const sum = numbers.reduce((acc, val) => acc + val, 0);
      document.getElementById('result').textContent = "La somme est : " + sum;
    }
انس
// Define your array
let numbers = [12, 45, 7, 89, 34, 2, 99, 23];

// Find minimum and maximum
let min = Math.min(...numbers);
let max = Math.max(...numbers);

// Show results
console.log("Minimum value is:", min);
console.log("Maximum value is:", max);
فارس
let word = prompt("أدخل كلمة:");
let reversed = word.split("").reverse().join("");
alert("الكلمة المعكوسة هي: " + reversed);
