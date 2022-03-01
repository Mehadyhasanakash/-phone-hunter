

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
    
    // console.log(datas)
    const mainDaiv = document.getElementById('main');
    // const frist20Data = data.slice(0, 20);
    // console.log(frist20Data);
    for(const data of datas){
        console.log(data);
        const newDiv = document.createElement('div')
        newDiv.className = ('col-md-4');
        newDiv.innerHTML = `
        <div class="border border-1 text-center p-3">
      <img src="${data.image}" alt="">
      <h4> Brand: ${data.brand}</h4>
      <h4> Phone Name: ${data.phone_name}</h4>
      <button onclick="phoneDetails('${data.slug}')" type="button" class="btn btn-success">Phone Details</button>

    </div>
        `
        
        mainDaiv.appendChild(newDiv);
    }
}

const phoneDetails = (id)=>{
    // console.log(id)
    
    const url =`https://openapi.programming-hero.com/api/phone/${id}`
    fetch(url)
    .then(response => response.json())
    .then(data => allPhoneDetail(data.data))

}

const allPhoneDetail = (info)=>{

    console.log(info);
    const mainDetail = document.getElementById('phone-details');
    mainDetail.innerHTML =`
    <div>
    <img src="${info.image}" alt="">
    <h4> slug: ${info.slug}</h4>
    <h4> releaseDate: ${info.releaseDate}</h4>
    <h4> sensors: ${info.sensors}</h4>
    <h4> memory: ${info.memory}</h4>


    </div>`


}
