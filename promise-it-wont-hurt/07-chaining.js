'use strict';

// The comment out code below didn't take into account
// that first and second are global functions provided by the exercise
//var first = () => {
//	return Promise.resolve('SECRET VALUE');
//}

//var second = (val) => {
//	return Promise.resolve(val);
//}

first().then(second).then(console.log);

// OFFICIAL SOLUTION

//var firstPromise = first();
//var secondPromise = firstPromise.then((val) => return second(val));
//secondPromise.then(console.log);