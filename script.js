let qr;
function generateQRCode() {
    let qrInput = document.getElementById("qrInput").value;
    let qrSize = document.getElementById("qrSize").value;
    let qrColor = document.getElementById("qrColor").value;
    let qrCodeContainer = document.getElementById("qrCodeContainer");
    qrCodeContainer.innerHTML = "";
    if (qrInput.trim() === "") {
        alert("Please enter text to generate QR Code!");
        return;
    }
    qr = new QRCode(qrCodeContainer, {
        text: qrInput,
        width: parseInt(qrSize),
        height: parseInt(qrSize),
        colorDark: qrColor,
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
    setTimeout(() => {
        document.getElementById("downloadBtn").style.display = "block";
    }, 500);
}

function downloadQRCode() {
    let qrCodeImg = document.querySelector("#qrCodeContainer img");
    let qrCodeCanvas = document.querySelector("#qrCodeContainer canvas");

    if (!qrCodeImg && !qrCodeCanvas) {
        alert("Please generate a QR code first!");
        return;
    }

    let link = document.createElement("a");
    link.download = "qrcode.png";

    if (qrCodeImg) {
        link.href = qrCodeImg.src;  
    } else if (qrCodeCanvas) {
        link.href = qrCodeCanvas.toDataURL("image/png");  
    }

    link.click();
}
