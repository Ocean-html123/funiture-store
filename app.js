import searchForm from './search.js'
const loader = document.querySelector('.loader-1')
const collection = document.querySelector('.collection')
const url = 'https://course-api.com/javascript-store-products'
const fetchData = async () => {
  loader.innerHTML = `<div class='loader'></div>`
  
    const response = await fetch(url)
    const data = await response.json();

    searchForm(data,collection);
    loader.innerHTML = ''
    const ocean = data.map((item) =>{
      const {id} = item
     const {company} = item.fields
     const {colors} = item.fields
     const {url: image} = item.fields.image[0]
     const {name: Name} = item.fields
     const {price} = item.fields
     return ` <div class="funitures">
     <img src="${image}" alt="">
     <h2>${Name}</h2>
     <h3>$${price}</h3>
     <a href="./ocean.html?id=${id}"><button>More Details</button></a>
     </div>`
    }).join('')
    collection.innerHTML = `${ocean}`
}
fetchData()