var todos = [];

var input = prompt("What would you like to do? Options are: new, list, delete and quit");

while(input !== "quit"){
	//handle input

	if(input === "list") {
		listTodos()
	}
		else if(input === "new"){
			newTodoItem()
		}

		else if(input === "delete"){
			deleteTodo()
		}
	
	//ask again for new input
	input = prompt("What would you like to do? Options are: new, list, delete and quit");

	
}

console.log("Ok, you quit the app");

function listTodos(){
		console.log("*****************")
		todos.forEach(function(todo, i){
		console.log((i + 1) + ": " + todo);
		});
		console.log("*****************")
}

function newTodoItem(){
		//ask for new todo
		var newTodo = prompt("Enter new todo");
		//add to todos array
		todos.push(newTodo);
}

function deleteTodo(){
		//ask for index of todo to be deleted
		var index = prompt("Enter The To Do number you would like to delete");
		var actualIndex = index - 1;
		//delete that todo
		//splice(x,y) will remove a chunk of an array starting at x, and then delete y enteries. Seeing how we just want to delete one value we set y to 1
		todos.splice(actualIndex,1);
		console.log("Item deleted");
}