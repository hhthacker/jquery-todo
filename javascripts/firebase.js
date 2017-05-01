//main iffe, so return everything... augmentor do "old stuff"

var FbApi = (() => {

	//private array
	let todos = [];

	return {
		todoGetter : () => {
			return todos;
		},
		setTodos : (newArray) => {
			todos = newArray;

		},
		setSingleTodo : (newObject) => {
			todos.push(newObject);
		},
		setChecked : (itemId) => {
			const position = itemId.split("item")[1];
			todos[position].isCompleted = !todos[position].isCompleted;
		},
		duhlete : (itemId) => {
			const position = itemId.split("item")[1];		
			todos.splice(position, 1);
		}

	};

})();