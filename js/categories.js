const categories = [{
    "name": "aliquet ultrices erat",
    "imgSrc": "https://picsum.photos/id/237/200/150",
    "id": 1723,
    "productCount": 4
  }, {
    "name": "imperdiet",
    "imgSrc": "https://picsum.photos/id/1/200/150",
    "id": 2224,
    "productCount": 3
  }, {
    "name": "fermentum donec",
    "imgSrc": "https://picsum.photos/id/103/200/150",
    "id": 3215,
    "productCount": 5
}];

function setCatID(id) {
    localStorage.setItem("cat_ID", "a" + id);
    window.location = "products.html"
}

function showCategory(array) {
    let htmlContentToAppend = "";
    for (let category of array){
        htmlContentToAppend +=`
        
                <div onclick="setCatID(${category.id})" class="col-sm-3 border border-dark rounded p-1 m-3 cursor-active">
                    <img class="col-12 border border-dark" src="${category.imgSrc}" alt="category image">
                    <p class="border border-dark p-3 m-3 text-center fs-5">${category.name}</p>
                    <p class="text-center fs-6 fw-light">Products: ${category.productCount} </p>
                </div>
            
            `
    } 
    document.getElementById('category').innerHTML = htmlContentToAppend;
}
document.addEventListener('DOMContentLoaded', ()=>{
    showCategory(categories);

})