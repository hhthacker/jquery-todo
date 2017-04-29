$(document).ready(function(){

	$('#new-item').click(() => {
		$('.list-container').addClass('hide');
		$('.new-container').removeClass('hide');

	}); 

	$('#list-items').click(() => {
		$('.new-container').addClass('hide');
		$('.list-container').removeClass('hide');

	}); 

//call things in crud: get todo
	FbApi.getTodos().then(() => {
		FbApi.writeDom();
		countTask();
		})
	.catch((error) => {
		console.log("getTodos Error", error);
	});

//add todo
	$('#add-todo-button').click(() => {
		let newTodo = {
			isCompleted: false,
			task: $('#add-todo-text').val()
		};
		console.log("newpotato", newTodo);
		FbApi.addTodo(newTodo).then(() => {
			$('#add-todo-text').val("");
			$('.list-container').removeClass('hide');
			$('.new-container').addClass('hide');
			FbApi.writeDom();
			countTask();
		 }).catch((error) => {
		 	console.log("addTodo error", error);
		});
	});

	//delete todo
	//edit todo
	//complete todos















let countTask = () => {
	let remainingTasks = $('#incomplete-tasks li').length;
	$('#counter').hide().fadeIn(3000).html(remainingTasks);
};








});