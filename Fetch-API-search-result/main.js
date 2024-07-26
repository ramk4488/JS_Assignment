// let apiResponse = fetch('https://fakestoreapi.com/products');
// let resposeObj;
// apiResponse.then(res => res.json())
//                 .then(data => {
//                     resposeObj = data;
//                 }).then(() => {
//                     console.log("data", resposeObj);
//                 });
//                 console.log("data", resposeObj);

// fetch('https://fakestoreapi.com/products')
//   .then(res => res.json())
//   .then(data => {
//     obj = data;
//    })
//   .then(() => {
//     console.log(obj);
//    });

let resposeObj;
async function fetchDataAndShowResult() {
    // localStorage.removeItem('fav-product-id');
    const res = await fetch('https://dummyjson.com/products');
    resposeObj = await res.json();
    showData();
    
}
fetchDataAndShowResult()
function showData(searcData = null){
    const parentDiv = document.getElementById('show-result');
    const favProducts = document.getElementById('favProducts');
    console.log(resposeObj.products)
    parentDiv.innerHTML = "";
    favProducts.innerHTML = "";
    for (let i = 0; i < resposeObj.products.length; i++) {
        const existingData = localStorage.getItem('fav-product-id');
        let favIcon = '<span onclick="addToFav('+resposeObj.products[i].id+')" class="add-to-fav" style="font-size:200%;color:green;">&hearts;</span>';
        if(existingData){
            const dataArray = JSON.parse(existingData);
            const index = dataArray.indexOf(String(resposeObj.products[i].id));
            // alert(index);
            if (index > -1) { 
            // if(existingData.includes(String(resposeObj.products[i].id))){
                favIcon = '<span onclick="removeFromFav('+resposeObj.products[i].id+')" class="remove-to-fav" style="font-size:200%;color:red;">&hearts;</span>';
                const productTitleDiv = document.createElement('div');
                productTitleDiv.innerHTML = '<span class="prod-img"><img style="height:50px; width:50px;" src="'+resposeObj.products[i].images+'" alt=""></span><span class="product-title">'+resposeObj.products[i].title+'</span>'+favIcon;
                favProducts.append(productTitleDiv)
            }
        }
        if(searcData != null){
            if(resposeObj.products[i].title.toLowerCase().includes(searcData.toLowerCase())){
                const productTitleDiv = document.createElement('div');
                productTitleDiv.innerHTML = '<span class="prod-img"><img style="height:50px; width:50px;" src="'+resposeObj.products[i].images+'" alt=""></span><span class="product-title">'+resposeObj.products[i].title+'</span>'+favIcon;
                parentDiv.append(productTitleDiv);
            }
        }else{
            const productTitleDiv = document.createElement('div');
            productTitleDiv.innerHTML = '<span class="prod-img"><img style="height:50px; width:50px;" src="'+resposeObj.products[i].images+'" alt=""></span><span class="product-title">'+resposeObj.products[i].title+'</span>'+favIcon;
            parentDiv.appendChild(productTitleDiv);

        }
        
    }
}
const searchField = document.getElementById('search');
searchField.addEventListener('keyup', function(data){
    searcData = searchField.value;
    showData(searcData)
})

function addToFav(productId){
    const existingData = localStorage.getItem('fav-product-id');
    const dataArray = [];
    if(existingData){
        const dataArray = JSON.parse(existingData);
        dataArray.push(String(productId));
        localStorage.setItem('fav-product-id', JSON.stringify(dataArray));
    }else{
        dataArray.push(String(productId));
        localStorage.setItem('fav-product-id', JSON.stringify(dataArray));
    }
    showData();
}

function removeFromFav(productId){
    const existingData = localStorage.getItem('fav-product-id');
    if(existingData){
        const dataArray = JSON.parse(existingData);
        const index = dataArray.indexOf(String(productId));
        if (index > -1) {
            dataArray.splice(index, 1);
        }
        localStorage.setItem('fav-product-id', JSON.stringify(dataArray));
    }
    showData();
}