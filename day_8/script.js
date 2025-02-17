const qr_URL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=www.google.com";

let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrtext = document.getElementById("qrText");
const generateBtn = document.getElementsByTagName("button"); 



function generateQR(){
    if(qrtext.value.length > 0){
        qrImage.setAttribute("src", "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value);
    }
    
}






// async function getQR(url){
//     const response = await fetch(url);
//     var data = await response.json();
//     console.log(data);
// }
// getQR(qr_URL);