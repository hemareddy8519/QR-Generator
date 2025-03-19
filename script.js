function generateQRCode() {
    var text = document.getElementById("qrInput").value;
    var size = document.getElementById("qrSize").value;
    var color = document.getElementById("qrColor").value;
    
    if (!text) {
        alert("Please enter the data for the QR code.");
        return;
    }
    document.getElementById("qrCodeContainer").innerHTML = "";
    document.getElementById("downloadBtn").style.display = "none";
    var qrCode = new QRCode(document.getElementById("qrCodeContainer"), {
        text: text,
        width: size, 
        height: size, 
        colorDark: color,  
        colorLight: "#ffffff", 
        correctLevel: QRCode.CorrectLevel.H 
    });
   document.getElementById("downloadBtn").style.display = "block";
}
function downloadQRCode() {
    var qrCodeContainer = document.getElementById("qrCodeContainer");
    var img = qrCodeContainer.querySelector("img");
    
    if (img) {
        var link = document.createElement("a");
        link.href = img.src;
        link.download = "QRCode.png";  
        link.click();
    } else {
        alert("No QR code to download.");
    }
}