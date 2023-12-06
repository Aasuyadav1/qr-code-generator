
var input = document.querySelector("#input")
var userName = document.querySelector("#username");

var submitButton = document.querySelector("#btn");
submitButton.addEventListener("click", ()=>{
    if(input.value === ""){
        alert("Please enter the values")
    }
    else{
        qrGenerate();
    }
})

var image = document.querySelector("#img")

async function qrGenerate(){
    var userDta = input.value;
    var response = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${userDta}`);
    // var data = await response.json();
    console.log(response)
    image.src = response.url;
    userName.innerHTML = userDta;
    clearField()
}
function clearField (){
    input.value = "";
}

