//augments
var FbApi = ((oldCrap) => {

	oldCrap.getTodos = () => {
		let items = [];
		return new Promise ((resolve, reject) => {
			$.ajax('./database/seed.json')
			.done((data) => {
				let response = data.items;
				Object.keys(response).forEach((key) => {
					response[key].id = key;
					//response[item0] = { is complete: true, task: mow the lawn
					items.push(response[key]);
				});
				FbApi.setTodos(items);
				resolve();
			})
			.fail((error) => {
				reject(error);
			});
		});
	};

	oldCrap.addTodo = (newTodo) => {
		return new Promise ((resolve, reject) => {
			newTodo.id = `item${FbApi.todoGetter().length}`;
			console.log("mew mew", newTodo);
			FbApi.setSingleTodo(newTodo);
			resolve();
		});
	};

	oldCrap.checker = (id) => {
		return new Promise((resolve, reject) => {
			FbApi.setChecked(id);
			resolve();

		});
	};

	oldCrap.deleteTodo = (id) => {
		return new Promise ((resolve, reject) => {
			FbApi.duhlete(id);
			resolve();
		});
	};

	oldCrap.editTodo = (id) => {
		return new Promise ((resolve, reject) => {
			FbApi.duhlete(id);
			resolve();
		});
	};


	return oldCrap;
})(FbApi || {});