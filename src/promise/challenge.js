const API = 'https://api.escuelajs.co/api/v1';
const app = document.getElementById('app');

function fetchData(urlApi){
    console.log('Rendering...')
    return fetch(urlApi).then(response => response.json());
    
};


const setAtr = (element, attributes) => {
    for (let i = 0; i < attributes.length; i++){
        element.setAttribute(`${attributes[i]}`, 'products');
    }
}

function createContainer (cb) {
    const section = document.createElement('section');
    const sectionTitle = document.createElement('h1');
    section.appendChild(sectionTitle);
    sectionTitle.innerText='Productos';
    
    const atrs = ['class', 'id'];
    cb(section, atrs);
    app.appendChild(section);
}

createContainer(setAtr);


let products = []

const getProductData = async () => {
    console.log('Fetching data...')
    const response = await fetchData(`${API}/products?offset=0&limit=12`);
    products.push(response)

    return response
}


const setProducts = async ()=>{
    products = await getProductData()
    .catch(e=>console.log('Has fallado miserablemente!'));
    //Creamos las tarjetas del producto una vez tenemos la data disponible
    products.forEach( product => createCard(product));
    console.log('Done!')
}

setProducts();

const createCard = (product)=>{
    const container = document.getElementById('products')
    const card =  document.createElement('article');
    card.setAttribute('class', 'card')
    container.appendChild(card);
    
    card.innerHTML = `
        <img loading="lazy" src="${product.images[0]}">
        <h3>${product.title}</h3>
        <span>$${product.price}</span>
        <p>${product.description}</p>

    `
}













































// const createCards = (title, price, img) =>{
//     const card = document.createElement('article');
//     card.setAttribute('class', 'card');
//     app.appendChild(card);
//     card.innerHTML = `
//         <h1>${title}</h1>
//         <span>$${price}</span>
//         <img loading = "lazy" src="${img[0]}">
//     `;
// }



// const getProductData = async () => {
//     console.log('Fetching data...')
//     const response = await fetchData(`${API}/products`)
//     .then(products => {
//         return (fetchData(`${API}/products/${products[0].id}`))
//     })
    
//     .catch(e=>console.log('Has fallado!'))
    
//     return response;
// }

// const mostrarData = async (callback)=>{
//     const data = await getProductData();
//     const cardTitle = data.title;
//     const cardPrice = data.price;
//     const cardImg = data.images;
//     callback(cardTitle, cardPrice, cardImg);

//     console.log(data)
// }

// mostrarData(createCards);

