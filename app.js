

// search & inputFiled && json convert javaScript
const phoneHunter = ()=>{
    const inputFiled = document.getElementById('input-filed').value;
    // const inputFiledText = parseFloat(inputFiled);
    //     console.log(inputFiled);
    // inputFiledText.value ='';
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputFiled}`
    fetch(url)
    .then(response => response.json())
    .then(data => phoneItem(data.data))
    
}

const phoneItem = (datas)=>{
    
    console.log(datas)
    const mainDaiv = document.getElementById('main');
    // const frist20Data = data.slice(0, 20);
    // console.log(frist20Data);
    for(const data of datas){
        console.log(data);
        const newDiv = document.createElement('div')
        newDiv.innerHTML =
        mainDaiv.appendChild(newDiv);
    }
}
