console.log('surfs up');

$(document).ready(function(){


//start the app
window.contacts = new ContactsCollection()
	
	
	contacts.fetch({
		success: function(){
			contacts.each(function(contact){
				new ListView({model: contact});
			})

		},

		error: function(){
			console.log('robot warning');
		}
	})

});

$('.save-btn-js').on('click', function(){


var userProfile = new Contact()
	if($('.name-js').val()) {userProfile.set({name: $('.name-js').val()})}; 
	if($('.bio-js').val()) {userProfile.set({bio: $('.bio-js').val()})};
	if($('.phone-js').val()) {userProfile.set({phone: $('.phone-js').val()})};  
	if($('.avatar-js').val()) {userProfile.set({avatar: $('.avatar-js').val()})}; 
	//name: $('.name-js').val(),
	//bio: $('.bio-js').val(),
	//phone: $('.phone-js').val(),


var newInfo = contacts.add(userProfile);

new ListView({model: userProfile});

userProfile.save();

})


// delete. still acts kinda funny
window.deleteFunction = function(){
	contacts.each(function(dataStuff){
		console.log(dataStuff)
		$.ajax({
		type: 'delete',
			url: 'http://0.0.0.0:3000/collections/contacts/'+dataStuff.get("_id")
		})
	})
}