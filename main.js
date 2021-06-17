function validation(){

   var userName = document.getElementById("name");
   var surName = document.getElementById("surname");
   var email = document.getElementById("email");
   var phone = document.getElementById("phone");
   var message = document.getElementById("comment");


   if (userName.value == "")                                  
   { 
       alert("Пожалуйста, введите имя"); 
       name.focus(); 
       return false; 
   } 

   if(userName.value.match("[0-9]+") || userName.value.match("[\!\@\#\$\%\^\&\*\.\,]+"))
   {
        alert("Имя содержит только буквы"); 
        userName.focus();
        return false;
    }
  
   if (surName.value == "")                               
   { 
       alert("Пожалуйста введите фамилию"); 
       name.focus(); 
       return false; 
   } 

   if(surName.value.match("[0-9]+") || surName.value.match("[\!\@\#\$\%\^\&\*\,\.]+"))
   {
        alert("Фамилия может содержать только буквы"); 
        surName.focus();
        return false;
    }
      
   if (email.value == "")                                   
   { 
       alert("Пожалуйста, введите email"); 
       email.focus(); 
       return false; 
   } 

   if((email.value.indexOf("@", 0) < 0) || (email.value.indexOf(".", 0) < 0 ))
   {
        alert("Пожалуйста, введите корректный email"); 
        email.focus();
        return false;
    }

   if (phone.value == "")                                   
   { 
       alert("Пожалуйста, введите номер телефона"); 
       email.focus(); 
       return false; 
   } 

    if( phone.value.match("[a-zA-Z]+") || phone.value.match("[а-яА-Я]+") || (phone.value.indexOf("+", 0) < 0 ))
    {
        alert("Пожалуйста, введите корректный номер телефона"); 
        phone.focus();
        return false;
    }

    if (message.value == "")                                   
   { 
       alert("Пожалуйста, введите сообщение"); 
       email.focus(); 
       return false; 
   } 

    return true;
}
$(document).ready(function() {
	$('#form').submit(function() { 
		if (document.form.name.value == '' || document.form.phone.value == '' || document.form.surname.value == '' || document.form.comment.value == '') {
			valid = false;
			return valid;
		}
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
            $('#form').trigger('reset');
            
        });
        alert("Форма отправлена");
		return false;
    });
    
});



