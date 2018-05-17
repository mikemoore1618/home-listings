var $address = $('#address')
var $bathrooms = $('#bathrooms')
var $bedrooms = $('#bedrooms')
var $list = $('#list')
var $form = $('form')

$form.on('submit', function(evt) {
    evt.preventDefault()
    var adressValue = $address.val()
    var bedroomsValue = $bedrooms.val()
    var bathroomsValue = $bathrooms.val()
    console.log(adressValue)
})