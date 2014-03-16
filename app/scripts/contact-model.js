// constructor
var Contact = Backbone.Model.extend({
	idAttribute: "_.id",   //does this need a dot?

	defaults:{
		name: 'sparky',
		phone: '999-9999',
		avatar: 'http://dogswiki.wikispaces.com/file/view/dalmatian.jpg/347843330/317x357/dalmatian.jpg',
		bio: 'woof'
	}
});

var ContactsCollection = Backbone.Collection.extend({
	model: Contact,

	url: 'http://0.0.0.0:3000/collections/contacts'
})