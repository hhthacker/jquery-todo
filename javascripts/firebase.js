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

		}

	};

})();