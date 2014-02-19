var ListView = Backbone.View.extend({
	className: 'list-item',

	createTemplate:_.template($('#list-item-template').text()),

	events: {
		'click': 'newJumbo'
	},

	initialize: function(){
		$('.js-contact-list').prepend(this.el);

		this.render();

	},

	render: function(){
		var renderedTemplate = this.createTemplate(this.model.attributes)

		this.$el.html(renderedTemplate)
	},
	
	newJumbo: function(){
		new MainView({model: this.model})
		
	}
	

});