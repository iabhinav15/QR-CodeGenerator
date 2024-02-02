const imgBox = document.getElementById("imgBox");
    const qrImage = document.getElementById("qrImage");
    const qrText = document.getElementById("qrText");
    const btn = document.getElementById("btn");

    btn.addEventListener("click", generateQR);

    function generateQR(){
      if(qrText.value !== ""){
        let paragraph = imgBox.querySelector("p");
        if(paragraph){
          imgBox.removeChild(paragraph);
        }
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`;
      } 
    }