$(function(){
    console.log("the dom is ready");

    //the collapsible side nav
    $(".button-collapse").sideNav();

    //the loading bar
    function move() {
        let elem = document.getElementById("myBar"); 
        let width = 1;
        let id = setInterval(frame, 10);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
            } else {
                width++; 
                elem.style.width = width + '%'; 
            }
        }
    }

    $("form").submit(function(e) {
        let form = this;
        e.preventDefault(); //Stop the submit for now
        //Replace with your selector to find the file input in your form
        let fileInput = $(this).find("input[type=file]")[0];
        let file = fileInput.files && fileInput.files[0];
        if( file ) {
            let img = new Image();
            img.src = window.URL.createObjectURL( file );
            img.onload = () => {
                let width = img.naturalWidth;
                let height = img.naturalHeight;
                window.URL.revokeObjectURL( img.src );
                if( width <= 1024 && height == 1024 ) {
                    console.log("the image is fine");
                    form.submit();
                } else {
                //fail
                }
            };
        } else { 
            //No file was input or browser doesn't support client side reading
            form.submit();
        }
    });
})
