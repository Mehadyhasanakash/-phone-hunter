

// search & inputFiled && json convert javaScript
const phoneHunter = ()=>{
    const inputFiled = document.getElementById('input-filed').value;
    const inputFiledText = parseFloat(inputFiled);
    //     console.log(inputFiled);
    // inputFiledText.value ='';
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputFiled}`
    fetch(url)
    .then(response => response.json())
    .then(data => phoneItem(data.data))
    
}

const phoneItem = (phones)=>{
    
    // console.log(phones)
    
    const frist20Data = phones.slice(0, 20);
}
