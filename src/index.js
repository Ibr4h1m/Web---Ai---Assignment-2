if ('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
        .then(function() {
        console.log("SW Registered")
    });
}

var generateButton = document.querySelector(".btnGenerate");
generateButton.addEventListener('click', numGenerator);

function numGenerator(){
    var num1 = document.querySelector(".fromNum").value;
    var num2 = document.querySelector(".toNum").value;
    num3 = Math.floor(Math.random() * parseInt(num2));
    
    if (num3 >= parseInt(num1)) {
        var resultNum = document.querySelector(".result");
        resultNum.innerHTML = num3;
    }
}