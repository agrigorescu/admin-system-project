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

    //uploading an image
    document.getElementById('fileinput').addEventListener('change', () => {
            let file = this.file;
        }, false);
    function uploadFile(file){
        let url = '/';
        let xhr = new XMLHttpRequest();
        let fd = new FormData();
        xhr.open("POST", url, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                // Every thing ok, file uploaded
                console.log(xhr.responseText); // handle response.
            }
        };
        fd.append("upload_file", file);
        xhr.send(fd);
    }
    let uploadfiles = document.getElementById('uploadfiles');
    uploadfiles.addEventListener('change', () => {
            uploadFile(this.files[i]); // call the function to upload the file
    }, false);




});