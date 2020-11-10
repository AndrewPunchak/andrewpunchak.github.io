
//Javascript for custom button "DONATE" inside AR Quick Look

document.getElementById("ar-link").addEventListener("message", function (event) {
    if (event.data == "_apple_ar_quicklook_button_tapped") {
        window.location.href="https://google.com";
      //document.getElementById("ar-link2").click();
        
    }
}, true); 
