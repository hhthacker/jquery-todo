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

	return oldCrap;
})(FbApi || {});