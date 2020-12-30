// //-------binary search
// function binar(arr, x) {
//   let start = 0,
//     end = arr.length - 1;

//   while (start <= end) {
//     mid = Math.round((start + end) / 2);
//     if (x === arr[mid]) {
//       return true;
//     } else if (arr[mid] < x) {
//       start = mid + 1;
//     } else {
//       end = mid - 1;
//     }
//   }
//   return false;
// }
// console.log(binar([1, 2, 3, 4, 5, 6, 7, 8], 9));

// // ----------prime
// function isPri(n) {
//   if (n < 2) return false;
//   var div = 2;

//   while (n > div) {
//     if (n % div == 0) {
//       return false;
//     } else {
//       div++;
//     }
//   }
//   return true;
// }
// console.log(isPri(1));

// //------------prime factor
// function prifac(n) {
//   var an = [],
//     div = 2;
//   while (n > 2) {
//     if (n % div == 0) {
//       an.push(div);
//       n = n / div;
//     } else {
//       div++;
//     }
//   }
//   return an;
// }

// console.log(prifac(56));

// //--------------fibonacci
// function fibo(n) {
//   var arr = [0, 1];
//   if (n <= 2) {
//     return 1;
//   }

//   for (var i = 2; i <= n; i++) {
//     arr[i] = arr[i - 1] + arr[i - 2];
//   }
//   return arr[n];
// }
// console.log(fibo(12));

// //----------------fibonacci recursive
// function fibonacci(n) {
//   if (n <= 1) return n;
//   else return fibonacci(n - 1) + fibonacci(n - 2);
// }
// console.log(fibonacci(12));

// //-----------greatest common divisor
// function greatestCommonDivisor(a, b) {
//   var div = 2,
//     grediv = 1;

//   if (a < 2 || b < 2) return 1;

//   while (a >= div && b >= div) {
//     if (a % div == 0 && b % div == 0) {
//       grediv = div;
//     }
//     div++;
//   }
//   return grediv;
// }
// console.log(greatestCommonDivisor(14, 21));

// //------------------remove duplicate
// function remDup(arr) {
//   var exists = {},
//     an = [],
//     ele;

//   for (var i = 0; i < arr.length; i++) {
//     ele = arr[i];
//     if (!exists[ele]) {
//       an.push(ele);
//       exists[ele] = true;
//     }
//   }
//   return an;
// }
// console.log(remDup([1, 3, 3, 3, 1, 5, 6, 7, 8, 1]));

// //------------------mergesortedarray
// function msa(arr1, arr2) {
//   var ans = [],
//     ele1 = arr1[0],
//     ele2 = arr2[0],
//     i = 0,
//     j = 0;

//   if (arr1.length == 0) return arr2;
//   if (arr2.length == 0) return arr1;

//   while (ele1 || ele2) {
//     if ((ele1 && !ele2) || ele1 < ele2) {
//       ans.push(ele1);
//       ele1 = arr1[i++];
//     } else {
//       ans.push(ele2);
//       ele2 = arr2[j++];
//     }
//   }
//   return ans;
// }
// console.log(msa([2, 5, 6, 9], [1, 2, 3, 29]));

// //----------------------swap number
// function sn(a, b) {
//   b = b - a; // 3 - 2 b=1
//   a = a + b; // 2 + 1 a=3
//   b = a - b; // 3 - 1 b=2
//   return [a, b];
// }
// console.log(sn(2, 1));

// // ----------------------reverse string
// function rs(str) {
//   var ans = "";
//   for (i = str.length - 1; i >= 0; i--) {
//     ans += str[i];
//   }
//   return ans;
// }

// console.log(rs("zhao zhi yuan shi da mei nv"));

//----------------------------

// const isPrime = num => {
//   if (num == 2) {
//     return true;
//   }
//   if (num < 2) {
//     return false;
//   }

//   for (let i = 2; i < num; i++) {
//     if (num % i == 0) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(isPrime(2));

// const binarySearch = (arr, x) => {
//   let start = arr[0];
//   let end = arr[arr.length - 1];

//   while (end > start) {
//     let mid = Math.round((start + end) / 2);
//     if (mid === x) {
//       return true;
//     } else if (mid > x) {
//       end = mid - 1;
//     } else if (mid < x) {
//       start = mid + 1;
//     }
//   }
//   return false;
// };

// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 9));

// const sameCollaps = (arr) => {
// 	const ans = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] !== arr[i - 1]) {
// 			ans.push(arr[i]);
// 		}
// 	}
// 	return ans;
// };

// console.log(sameCollaps([1, 3, 3, 3, 1, 5, 6, 7, 8, 1]));

// const fibonacci = n => {
//   if (n <= 2) {
//     return 1;
//   }

//   let fibo = [0, 1];
//   for (let i = 2; i <= n + 1; i++) {
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
//   }
//   return fibo[n + 1];
// };

// console.log(fibonacci(12));

// const sameCollaps = arr => {
//   let ele = "";
//   let ans = [];
//   let exists = {};

//   for(let i=0; i < arr.length ; i++){
//     ele = arr[i];
//     if(!exists[ele]){
//       ans.push(ele);
//       exists[ele] = true;
//     }
//   }
//   return ans;
// }

// console.log(sameCollaps([1, 3, 3, 3, 1, 5, 6, 7, 8, 1]));

// // const fiborec = n => {
// //   if (n <= 1) {
// //     return 1;
// //   } else {
// //     return fiborec(n - 1) + fiborec(n - 2);
//   }
// // };

// // console.log(fiborec(12));

// const greatestCommonDivisor = (a, b) => {
//   if (a % b === 0) {
//     return b;
//   }

//   if (b % a === 0) {
//     return a;
//   }

// let ans = [];
// for (let i = 1; i < a; i++) {
//   if (a % i === 0 && b % i === 0) {
//     ans.push(i);
//   }
//   }
//   return ans[ans.length - 1];
// };

// console.log(greatestCommonDivisor(-69, 169));

// // const mergesortedarray = (arrA, arrB) => {
// //   let a = arrA[0];
//   let b = arrB[0];
//   let i = 1;
//   let j = 1;
//   let ans = [];

//   while (i < arrA.length && j < arrB.length) {
//     if (a < b) {
//       ans.push(a);
//       a = arrA[i++];
//       i++;
//     } else {
//       ans.push(b);
//       b = arrB[i++];
//       j++;
//     }
//   }
//   return ans;
// };

// console.log(mergesortedarray([2, 5, 6, 9], [1, 2, 3, 29]));

// const reverseStr = (str) => {
// 	let answer = '';
// 	for (let i = str.length - 1; i >= 0; i--) {
// 		answer += str[i];
// 	}
// 	return answer;
// };

// // console.log(reverseStr('bao bao zi la'));
// const reverseWord = (str) => {
// 	let wordArr = str.split(' ');
// 	const ans = wordArr.map((word) => {
// 		return reverseStr(word);
// 	});
// 	return ans.join(' ');
// };

// console.log(reverseWord('bao bao zi la'));
// const reverseWord = str => {
//   words = str.split(" ");
//   answer = [];
//   for (let i = words.length - 1; i >= 0; i--) {
//     answer.push(words[i]);
//   }
//   return answer.join(" ");
// };

// console.log(reverseWord("bao bao zi le"));

// const greatestCommonDivisor = (num1, num2) => {
//   if (num1 < 2 || num2 < 2) {
//     return 1;
//   }
//   let ans = 1;
//   let div = 2;
//   while (num1 >= div && num2 >= div) {
//     if (num1 % div === 0 && num2 % div === 0) {
//       ans = div;
//     }
//     div++;
//   }
//   return ans;
// };

// // console.log(greatestCommonDivisor(14, 21));

// const rmvSame = str => {
//   let ans = [];
//   let exist = {};
//   let char;
//   let letArr = str.split("");

//   for (let i = 0; i < letArr.length; i++) {
//     char = letArr[i];
//     if (exist[char]) {
//       exist[char]++;
//     } else {
//       exist[char] = 1;
//     }
//   }

//   for (var j in exist) {
//     if (exist[j] == 1) {
//       ans.push(j);
//     }
//   }
//   return ans.join("");
// };

// console.log(rmvSame("aaabbbc"));
// // 先把str拆成字母放进arr中，然后选出字母存进obj中，如果有重复value++，最后用for in loop找出value 是1的key push进答案里。 妙啊~

// const findArr = (input, num) => {
//   //     const newArr = input.map((v, i) => {
//   //         if (+v === num) {
//   //             return i
//   //         }
//   //     });
//   //     return "Index of " + num + " is " + newArr.join('');
//   // };
//   let newArr = [];
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] === num) {
//       newArr.push(i);
//     }
//     return "Index of " + num + " is " + newArr.join("");
//   }
// };
// // console.log(findArr([1, 2, 3, 4, 5], 5));

// const twoSum = (arr, num) => {------------------------------------------
//   ans = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let l = i + 1; l < arr.length; l++) {
//       if (num === arr[i] + arr[l]) {
//         ans.push(i);
//         ans.push(l);
//       }
//     }
//   }
//   return ans;
// };
// console.log(twoSum([2, 3, 5, 8], 11));

// const isPalindrome = str => {
//   let strArr = str.split("");
//   for (let i = 0; i < strArr.length; i++) {
//     if (strArr[i] === strArr[strArr.length - 1 - i]) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// };

// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("toyota"));

// const missingNum = arr => {
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] + 1 !== arr[i + 1]) {
//       return arr[i] + 1;
//     }
//   }
// };

// console.log(missingNum([1, 2, 3, 5, 6]));
// sort array only

// const MissingNum = arr => {
// 	let n = arr.length + 1;
// 	let includeSum = (n * (n + 1)) / 2;
// 	let sum = 0;
// 	for (let i = 0; i < arr.length; i++) {
// 		sum += arr[i];
// 	}
// 	return includeSum - sum;
// };
// console.log(MissingNum([1, 2, 3, 5, 6]));
//have to start with one

// const twoSum = (arr, num) => {
// 	for (let i = 0; i < arr.length - 1; i++) {
// 		for (let j = i + 1; j < arr.length; j++) {
// 			if (arr[i] + arr[j] === num) {
// 				return true;
// 			}
// 		}
// 	}
// 	return false;
// };
// console.log(twoSum([1, 2, 3, 4, 5], 10));

// const largestSum = arr => {
// 	let first = arr[0];
// 	let second = arr[1];

// 	if (first < second) {
// 		first = arr[1];
// 		second = arr[0];
// 	}

// 	for (let i = 2; i < arr.length; i++) {
// 		if (arr[i] > first) {
// 			second = first;
// 			first = arr[i];
// 		} else if (arr[i] > second) {
// 			second = arr[i];
// 		}
// 	}
// 	return first + second;
// };

// console.log(largestSum([1, 7, 3, 4, 5]));

// const countingZero = num => {
// 	let count = 0;
// 	while (num > 0) {
// 		count += Math.floor(num / 10);
// 		num = num / 10;
// 	}
// 	return count;
// };

// console.log(countingZero(100));
// counting zero only 10% === 0

// const countingZero = num => {
// let count = 0;
// while (num > 0) {
// 	count += Math.floor(num / 10);
// 	num = num / 10;
// }
// return count;
// };

// console.log(countingZero(100));
// counting zero only 10% === 0

// const countingZero = num => {
// 	let count = 0;
// 	while (num > 0) {
// 		count += Math.floor(num / 10);
// 		num = num / 10;
// 	}
// 	return count;
// };

// console.log(countingZero(100));
// counting zero only 10% === 0
// const reverseNumber = num => {
// 	let ans = [];
// 	if (num < 0) {
// 		num = Math.abs(num).toString();
// 		let numArr = num.split('');
// 		for (let i = numArr.length - 1; i >= 0; i--) {
// 			ans.push(numArr[i]);
// 		}
// 		ans.unshift('-');
// 	} else if (num % 10 === 0) {
// 		let numArr = num.toString().split('');
// 		for (let i = numArr.length - 1; i >= 0; i--) {
// 			ans.push(numArr[i]);
// 		}
// 		console.log(ans);
// 		for (let j = 0; j < ans.length; j++) {
// 			while (ans[j] == 0) {
// 				ans.shift();
// 			}
// 		}
// 	} else {
// 		let numArr = num.toString().split('');
// 		for (let i = numArr.length - 1; i >= 0; i--) {
// 			ans.push(numArr[i]);
// 		}
// 	}
// 	return ans.join('');
// };

// console.log(reverseNumber(1022));

// const reverseNumber = num => {
// 	let x = Math.abs(num);
// 	if (x.toString().split('').length > 32) {
// 		return 0;
// 	}
// 	let arr = x
// 		.toString()
// 		.split('')
// 		.reverse();
// 	let ans = Number(arr.join(''));

// 	if (num >= 0) {
// 		return ans;
// 	}
// 	return -ans;
// };

// console.log(reverseNumber(-01800101));
// console.log(reverseNumber(123456789987654381));
// // const reverseNumber = num => {
// // 	let numStr = num
// 		.toString()
// 		.split('')
// 		.reverse()
// 		.join('');
// 	let result;
// 	// console.log(numStr);
// 	if (numStr.indexOf('-') === -1) {
// 		return (result = Math.abs(Number(numStr)));
// 	} else {
// 		return (result = '-' + Math.abs(Number(numStr.replace('-', ''))));
// 	}
// };
// console.log(reverseNumber(123123112122121223));

// var reverse = function(x) {
// 	let y = Math.abs(x);
// 	if (y.toString(2).length > 31) return 0;
// 	let arr = y
// 		.toString()
// 		.split('')
// 		.reverse();
// 	if (Number(arr.join('')).toString(2).length > 31) return 0;
// 	let z = Number(arr.join(''));
// 	return x >= 0 ? z : -z;
// };
// const solution = numbers => {
// 	if (numbers.length == 0) {
// 		return 0;
// 	}
// 	let ans = 0;
// 	for (let i = 0; i < numbers.length; i++) {
// 		console.log(numbers[i] > ans);
// 		if (numbers[i] > ans) {
// 	ans = numbers[i];
// }
// 	}
// 	return ans;
// };

// console.log(solution([1, 2, 3, 4, 7, 5, 2]));

// const agentRandomID = () => {
// 	const num = Math.floor(0 + Math.random() * 9999).toString();
// 	const digit = 4;
// 	let missing;
// 	console.log(num.length);

// 	if (num.length < digit) {
// 		missing = digit - num.length;
// 		console.log(missing);
// 		return missing * '0' + num;
// 	}
// 	return num;
// };

// console.log(agentRandomID());

// const x = () => {
// 	return (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
// };

// console.log(x());

// const isPri = (num) => {
// 	let div = 2;

// 	while (num > div) {
// 		if (num % div == 0) {
// 			return false;
// 		} else {
// 			div++;
// 		}
// 	}
// 	return true;
// };

// console.log(isPri());

// const priFac = (num) => {
// 	let facs = [];
// 	let div = 2;

// 	while (num > div) {
// 		if (num % div == 0) {
// 			facs.push(div);
// 			num = num / div;
// 		} else {
// 			div++;
// 		}
// 	}
// 	return facs;
// };

// console.log(priFac(21));

// const fib = (num) => {
// 	let fibo = [0, 1];

// 	if (num <= 2) return 1;

// 	for (let i = 2; i <= num; i++) {
// 		fibo[i] = fibo[i - 1] + fibo[i - 2];
// 	}
// 	return fibo[num];
// };

// console.log(fib());

// const fib = (n) => {
// 	if (n <= 1) {
// 		return n;
// 	} else {
// 		return fib(n - 1) + fib(n - 2);
// 	}
// };
// console.log(fib(12));

// const greatestCommonDivisor = (a, b) => {
// 	let div = 2;
// 	let grtdiv = 1;

// 	if (a < 2 || b < 2) {
// 		return 1;
// 	}

// 	while (a >= div && b >= div) {
// 		if (a % div == 0 && b % div == 0) {
// 			grtdiv = div;
// 		}
// 		div++;
// 	}
// 	return grtdiv;
// };

// console.log(greatestCommonDivisor(69, 69));

// const grtCommonDiv = (a, b) => {
// 	if (b == 0) {
// 		return a;
// 	}
// 	return grtCommonDiv(b, a % b);
// };

// console.log(grtCommonDiv(144, 10));

// const removeDup = (arr) => {
// 	let exist = {},
// 		ans = [],
// 		elm;

// 	for (let i = 0; i < arr.length; i++) {
// 		elm = arr[i];
// 		if (!exist[elm]) {
// 			ans.push(elm);
// 			exist[elm] = true;
// 		}
// 	}
// 	return ans;
// };

// console.log(removeDup([1, 1, 3, 3, 1, 5, 6, 7, 8, 1]));

const mergesortedarray = (a, b) => {
	let ans = [],
		i = 0,
		j = 0,
		k = 0;

	while (i < a.length && j < b.length) {
		if (a[i] > b[j]) {
			ans.push(b[j]);
			j++;
		} else {
			ans.push(a[i]);
			i++;
		}
	}
	while (i < a.length) {
		ans.push(a[i]);
		i++;
	}
	while (j < b.length) {
		ans.push(b[j]);
		j++;
	}

	return ans;
};

console.log(mergesortedarray([2, 5, 6, 9], [1, 2, 3, 29, 20, 30, 40]));

// const swap = (a, b) => {
// 	console.log(a, b);
// 	a = a - b;
// 	b = b + a;
// 	a = b - a;
// 	console.log(a, b);
// };
// console.log(swap(5, 3));

// const reverseStr = (str) => {
// 	let ans = '';
// 	for (let i = str.length - 1; i >= 0; i--) {
// 		ans += str[i];
// 	}
// 	return ans;
// };

// console.log(reverseStr('zhao zhi yuan'));

// const firstNonRe = (str) => {
// 	let charCount = {},
// 		char;
// 	for (let i = 0; i < str.length; i++) {
// 		char = str[i];
// 		if (charCount[char]) {
// 			charCount[char]++;
// 		} else {
// 			charCount[char] = 1;
// 		}
// 	}
// 	const ans = Object.entries(charCount).find((arr) => arr[1] == 1);
// 	return ans[0];
// };

// console.log(firstNonRe('the quick brown fox jumps then quickly blow air'));

// const grtcomdiv = (a, b) => {
// 	if (a < 2 || b < 2) {
// 		return 1;
// 	}

// 	let ans = 1,
// 		grtdiv = 2;

// 	while (a >= grtdiv && b >= grtdiv) {
// 		if (a % grtdiv == 0 && b % grtdiv == 0) {
// 			ans = grtdiv;
// 		}
// 		grtdiv++;
// 	}
// 	return ans;
// };

// console.log(grtcomdiv(7, 21));

// const removeDup = (str) => {
// 	let charCount = {},
// 		char,
// 		ans = [];

// 	for (let i = 0; i <= str.length - 1; i++) {
// 		char = str[i];
// 		if (charCount[char]) {
// 			charCount[char]++;
// 		} else {
// 			charCount[char] = 1;
// 		}
// 	}
// 	for (let j in charCount) {
// 		if (charCount[j] == 1) ans.push(j);
// 	}
// 	return ans.join('');
// };

// console.log(removeDup('Learn more javascript dude'));

// const isPalindrome = (str) => {
// 	for (let i = 0; i < str.length - 1; i++) {
// 		if (str[i] !== str[str.length - 1 - i]) {
// 			return false;
// 		}
// 	}
// 	return true;
// };
// console.log(isPalindrome('racec'));

// const random = (a, b) => {
// 	return Math.floor(Math.random() * (b - a) + a);
// };

// console.log(random(10, 15));

// const twoSum = (arr, sum) => {
// 	let numCount = {},
// 		diff;

// 	for (let i = 0; i < arr.length - 1; i++) {
// 		diff = sum - arr[i];
// 		if (numCount[diff]) {
// 			return true;
// 		} else {
// 			numCount[arr[i]] = true;
// 		}
// 	}
// 	return false;
// };

// console.log(twoSum([6, 4, 3, 2, 1, 7], 17));

// const points = {
// 	0: [4, 6],
// 	1: [6, 8],
// };

// const routes = (start, jumps) => {
// 	const startingPoint = points[start];
// 	const arr = Object.entries(points);
// 	for (let i = 0; i < arr.length - 1; i++) {}
// };

// const arr1 = [1, 2, 3, 4];
// const arr2 = [5, 6, 7, 8, 9];

// const arr3 = [...arr1, ...arr2];
// console.log(arr3);
