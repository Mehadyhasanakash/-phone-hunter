

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
        newDiv.className = ('col-md-4');
        newDiv.innerHTML = `
        <div class="border border-1 text-center">
      <img src="${data.image}" alt="">
      <h4>${data.brand}</h4>
      <h4>${data.phone_name}</h4>

    </div>
        `
        
        mainDaiv.appendChild(newDiv);
    }
}
