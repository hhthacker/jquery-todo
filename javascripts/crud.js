//augments
var FbApi = ((oldCrap) => {

	oldCrap.getTodos = (apiKeys) => {
		let items = [];
		return new Promise ((resolve, reject) => {
			let uid = FbApi.credentialsCurrentUser().uid;
			$.ajax(`${apiKeys.databaseURL}/items.json?orderBy="uid"&equalTo="${uid}"`)
			.done((data) => {
				let response = data;
				Object.keys(response).forEach((key) => {
					response[key].id = key;
					//response[item0] = { is complete: true, task: mow the lawn
					items.push(response[key]);
				});
				//FbApi.setTodos(items);
				resolve(items);
			})
			.fail((error) => {
				reject(error);
			});
		});
	};

	oldCrap.addTodo = (apiKeys, newTodo) => {
		newTodo.uid = FbApi.credentialsCurrentUser().uid;
		return new Promise ((resolve, reject) => {
			$.ajax({
				method: 'POST',
				url: `${apiKeys.databaseURL}/items.json`,
				data: JSON.stringify(newTodo)
			}).done(() => {
				resolve();
			}).fail((error) => {
				reject(error);
			});
		});
	};

	oldCrap.deleteTodo = (apiKeys, id) => {
		return new Promise ((resolve, reject) => {
			$.ajax({
				method: 'DELETE',
				url: `${apiKeys.databaseURL}/items/${id}.json`
			}).done(() => {
				resolve();
			}).fail((error) => {
				reject(error);
			});
		});
	};

	oldCrap.editTodo = (apiKeys, editTodo, id) => {
		editTodo.uid = FbApi.credentialsCurrentUser().uid;
		return new Promise ((resolve, reject) => {
			$.ajax({
				method: 'PUT',
				url: `${apiKeys.databaseURL}/items/${id}.json`,
				data: JSON.stringify(editTodo)
			}).done(() => {
				resolve();
			}).fail((error) => {
				reject(error);
			});
		});
	};

	return oldCrap;
})(FbApi || {});