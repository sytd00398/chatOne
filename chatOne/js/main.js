(function ($) {
    "use strict";

    if (typeof(Storage) !== "undefined") {
      localStorage.setItem("userid", "12345678");
    } else {
        alert('Sorry! This page doesn\'t support for your browser.\nPlease updgrade your browser.');
      
    }

    /*==================================================================
    [ UI ]*/
    $('[data-toggle="tooltip"]').tooltip();

    /*==================================================================
    [ Tab ]*/
    $('.tab-button').on('click',function(){
        var tab = $(this).attr('tab');
        showTab(tab);
    });
    function showTab(tab) {
        $('.tab-content').each(function(){
            if($(this).attr('tab')==tab) {
                $(this).addClass('active');
            }
            else {
                $(this).removeClass('active');
            }
        })
    }

    /*==================================================================
    [ Image Browse ]*/
    $('#browse-avatar').on('change',function(){
        var reader = new FileReader();
        reader.onload = function(e) {
            // get loaded data and render thumbnail.
            document.getElementById('preview-avatar').src = e.target.result;
        };
        // read the image file as a data URL.
        reader.readAsDataURL(this.files[0]);
        $('#browse-avatar-file-name').text(this.files[0].name);
        console.log(this.files[0].name);
    });
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        try {
            var value = $(input).val().trim();
            switch($(input).attr('name')) {
                case 'email':
                    if(value.match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                        return false;
                    }
                    break;
                case 'confirm-pass':
                    var passInput = $($(input).attr('confirm-for-input'));
                    alert(passInput.length);
                    if (passInput.length == 0) {
                        return false;
                    }
                    alert($(passInput[0]).val());
                    if ($(passInput[0]).val().trim() != value) {
                        return false;
                    }

                case 'pass':
                case 'username':
                    var minLength = parseInt($(input).attr('min-length'));
                    var maxLength = parseInt($(input).attr('max-length'));
                    if(value.length < minLength || value.length > maxLength || value.includes(' ')){
                        return false;
                    }
                    break;
                default:
                    return false;
            }
        }
        catch(e) {
            alert(e);
            return false;
        }
        
    }
                                                                                                                                            

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);
