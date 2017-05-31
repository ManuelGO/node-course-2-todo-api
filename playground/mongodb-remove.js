const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//tres metodos para borrar:
//Todo.remove({}) * para borrar todo en la coleccion 'Todo'

Todo.remove({}).then((result)=>{
	console.log(result);
});

//Borar solo uno: Todo.findOneAndRemove() y Todo.findByIdAndRemove()

Todo.findOneAndRemove({_id: "asdfasdffsd"}).then((todo)=>{
	console.log(todo);
})

Todo.findByIdAndRemove('akl44').then((todo)=>{
	console.log(todo);
});