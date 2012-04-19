Welcome = Ember.Application.create({
	ready: function(){
		// alert('you did it!');
	}
});

Welcome.Book = Ember.Object.extend({
	title: '',
	author: '',
	genre: ''
});

Welcome.booksController = Ember.ArrayController.create({
	content: [],
	loadBooks: function(){
		var self = this;
		$.getJSON('data/books.json', function(data) {
			data.forEach(function(item){
				self.pushObject(Welcome.Book.create(item));
			});
		});
	}
});