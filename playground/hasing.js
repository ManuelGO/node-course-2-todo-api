const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

// bcrypt.genSalt(10, (err, salt)=>{
// 	bcrypt.hash(password, salt, (err, hash)=>{
// 		console.log(hash);
// 	});
// });

var hp = '$2a$10$iwClWvjfM8s7Ybw9EQK5dO6Cx5ftrwMMtRO9l6CMT/YfzQ2LQIEOy';
bcrypt.compare(password, hp, (err, res)=>{
	console.log(res);
})



// var data = {
// 	id: 10
// };

// var token = jwt.sign(data, '123abc');
// var decoded = jwt.verify(token, '123abc');
// console.log(token);
// console.log('-------');
// console.log(decoded);

//jwt hace que lo comentado no sea necesario:

// var message = 'I am user number 3';
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// var data = {
// 	id: 4
// };

// var token = {
// 	data: data,
// 	hash: SHA256(JSON.stringify(data)+'some').toString()
// }


// var resultHash =SHA256(JSON.stringify(token.data)+'some').toString();

// if(resultHash === token.hash){
// 	console.log('Data was not changed');
// }else{
// 	console.log('Data was changed');
// }