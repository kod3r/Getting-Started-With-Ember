Welcome = Ember.Application.create({
	ready: function(){
		// alert('you did it!');
	}
});

Welcome.Books = Ember.Object.extend({
	title: '',
	author: '',
	genre: ''
});

Welcome.bookController = Ember.ArrayController.create({
	content: [],
	loadBooks: function(){
		$.get('data/books.json', function(data) {
			Welcome.bookController.pushObjects(data);
			// console.log(data);
		});
	}
});