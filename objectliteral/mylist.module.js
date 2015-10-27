(function(){
	var myList = {
		myList: [
		'item1',
		'item2',
		'item3'
		],
		init: function() {
			this.cacheDom();
			this.bindEvents();
			this.render();
			
		},	

		cacheDom: function() {
			this.$el = $('#myList');
			this.$ul = this.$el.find('ul');
			this.$button = this.$el.find('button');
			this.$input = this.$el.find('input');
			this.template = this.$el.find('#my-list-template').html();
		},

		bindEvents: function() {
			this.$button.on('click', this.addItem.bind(this));
			this.$ul.delegate('i.del', 'click', this.deleteItem.bind(this));
		},

		render: function() {
			var data = {
				list: this.myList
			};
			this.$ul.html(Mustache.render(this.template, data));
		},

		addItem: function() {
			this.myList.push(this.$input.val());
			this.render();
			this.$input.val(' ');

		},
		deleteItem: function(e) {
			var $remove = $(e.target).closest('li');
			var i = this.$ul.find('li').index($remove);
			this.myList.splice(i, 1);
			this.render();
		}

	}

	myList.init();

}());