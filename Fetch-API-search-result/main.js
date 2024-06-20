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


async function fetchDataAndShowResult(searcData = null) {
    let resposeObj;
    const res = await fetch('https://fakestoreapi.com/products');
    resposeObj = await res.json();
    const parentDiv = document.getElementById('show-result');
    console.log(resposeObj)
    parentDiv.innerHTML = "";
    for (let i = 0; i < resposeObj.length; i++) {
        console.log(searcData)
        if(searcData != null){
            if(resposeObj[i].title.toLowerCase().includes(searcData.toLowerCase())){
                const productTitleDiv = document.createElement('div');
                productTitleDiv.innerHTML = '<span><img style="height:50px; width:50px;" src="'+resposeObj[i].image+'" alt=""></span><span>'+resposeObj[i].title+'</span>';
                parentDiv.append(productTitleDiv)
            }
        }else{
            const productTitleDiv = document.createElement('div');
            productTitleDiv.innerHTML = '<span><img style="height:50px; width:50px;" src="'+resposeObj[i].image+'" alt=""></span><span class="product-title">'+resposeObj[i].title+'</span>';
            parentDiv.appendChild(productTitleDiv)

        }
        
    }
}
fetchDataAndShowResult()
const searchField = document.getElementById('search');
searchField.addEventListener('keyup', function(data){
    searcData = searchField.value;
    fetchDataAndShowResult(searcData)
})