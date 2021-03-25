$('.btn').click(function(e){
    e.preventDefault();
    let login = $('.email').val();
    if (login == ''){
        $('.email').addClass('error');
        alert("Please fill in all the fields of the form!")
    }
}); 
$('.btn').click(function(e){
    e.preventDefault();
    let login = $('#phone').val();
    if (login == ''){
        $('#phone').addClass('error');
        alert("Please fill in all the fields of the form!")
    }
}); 

$('.btn').click(function(e){
    e.preventDefault();
    let login = $('.name').val();
    if (login == ''){
        $('.name').addClass('error');
        alert("Please fill in all the fields of the form!")
    }
}); 