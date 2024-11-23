$(document).ready(function(){
    $("#btn1").mouseenter(function(){
        $(this).css({"background":"lightgray"})
      })
      $("#btn1").mouseleave(function(){
        $(this).css({"background":"#00a400"})
      })
        
              $("#signup-form").validate({
                rules:{

                   Fname:{
                           required:true,
                          minlength:4
                      },
    
                      Sname:{
                    required:true,
                    minlength:4
    
                     },
                     emailMobile:{
                        email:true,
                       
                     },
                     password:{
                        minlength:6,
                        maxlength:8,
                        required:true,
                     },
                     day:{
                        required:true,
                     },
                     month:{
                        required:true,
                     },
                     year:{
                        required:true,
                     },
                     Gender:{
                        required:true,
                     },
                    },
                    Fname: {
                        username: {
                          required:"Please enter a username.",
                          minlength:"Enter atlest 4 charachtors"
                        },
                        Sname: {
                            required:"Please enter a username.",
                            minlength:"Enter atlest 4 charachtors"
                          },

                        
                    }
                    
    })




})
























