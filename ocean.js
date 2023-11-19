const single = document.querySelector('.single');
const search = new URLSearchParams(window.location.search).get('id')

const url2 = 'https://course-api.com/javascript-store-single-product?id='

const fetchData = async () => {
    const response = await fetch(`${url2}${search}`);
    const data = await response.json()
    const{id} = data
    const{url} = data.fields.image[0]
   const{name} =data.fields
  const{price} = data.fields
  const{description} = data.fields
  single.innerHTML = `<h1>${name}</h1>
  <div class="flex">
      <div>
          <img src="${url}" alt="">
      </div>
      <div class="class">
          <h2>${name}</h2>
          <h4>${description}</h4>
          <h3>$${price}</h3>
      </div>
  </div>`
}

fetchData()