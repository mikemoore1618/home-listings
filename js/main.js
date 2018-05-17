var $address = $('#address')
var $bathrooms = $('#bathrooms')
var $bedrooms = $('#bedrooms')
var $list = $('#list')
var $form = $('form')

$form.on('submit', function(evt) {
    evt.preventDefault()
    var addressValue = $address.val()
    var bedroomsValue = $bedrooms.val()
    var bathroomsValue = $bathrooms.val()
    console.log(addressValue)
    $list.append(`<li style="display:none">Address: ${addressValue} Bedrooms: ${bedroomsValue} Bathrooms: ${bathroomsValue}</li>`)
    $('li').last().fadeIn()
})


//jQuery event delegation! 
//if user clicks anywhere in the list, 
//'this' refers to a specific thing within
//that was clicked

$list.on('click','li', function() {
    $(this).fadeOut(function() {
        $('this').remove()
    })
})
