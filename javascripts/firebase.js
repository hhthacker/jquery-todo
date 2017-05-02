//main iffe, so return everything... augmentor do "old stuff"

var FbApi = (() => {

	//private array
	let todos = [];

	return {
		firebaseCredentials : () => {
			return new Promise((resolve, reject) => {
				$.ajax("apiKeys.json")
				.done((data) => {
					resolve(data);
				})
				.fail((error) => {
					reject(error);
				});
			});
		}
	};

})();