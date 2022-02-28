

// search & inputFiled && json convert javaScript
const phoneHunter = ()=>{
    const inputFiled = document.getElementById('input-filed').value;
    const inputFiledText = parseFloat(inputFiled);
    //     console.log(inputFiled);
    // inputFiledText.value ='';
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputFiled}`
    fetch(url)
    .then(response => response)
    .then(data => phoneItem(data))
    
}

const phoneItem = (phonItem)=>{
    // console.log(phonItem);
}
