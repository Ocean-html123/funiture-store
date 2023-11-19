const input = document.querySelector('.input')
const form = document.querySelector('.form')

const searchForm = (ocean, collection) => {
    
form.addEventListener('keyup', () =>{

    let searchInput = input.value.toLowerCase();

    if (searchInput) {

        
const newArray = ocean.filter((item) =>{
    const{name} = item.fields
    return name.toLowerCase().startsWith(searchInput)
           })

           collection.innerHTML = newArray.map((items)=>{
          
            const {id} = items
     const {company} = items.fields
     const {colors} = items.fields
     const {url: image} = items.fields.image[0]
     const {name: Name} = items.fields
     const {price} = items.fields
     return ` <div class="funitures">
     <img src="${image}" alt="">
     <h2>${Name}</h2>
     <h3>$${price}</h3>
     <a href="ocean.html?id=${id}"><button>More Details</button></a>
     </div>`
     
           }).join('')
    } else {
        
        collection.innerHTML = ocean.map((item) =>{

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
           <a href="ocean.html?id=${id}"><button>More Details</button></a>
           </div>`
          }).join('')
    }

  


      
    
})
    
}
export default searchForm