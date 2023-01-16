const API = 'https://api.escuelajs.co/api/v1';
const app = document.getElementById('app');

function fetchData(urlApi){
    console.log('Fetching Data...')
    return fetch(urlApi).then(response => response.json())
    .then(console.log('Fetching Done'))
    .catch(error => console.error(`Error fetching data! ${error}`));
};


const setAtr = (element, {id, className}) => {
    
    element.setAttribute('id',id );
    element.setAttribute('class', className);
}

const createContainer = () => {
    const section = document.createElement('section');
    const sectionTitle = document.createElement('h2');
    const sectionContent = document.createElement('div');
    const sectionBtn = document.createElement('button');
    
    sectionTitle.innerText='Productos';
    sectionBtn.innerText='Cargar Más';
    
    section.appendChild(sectionTitle);
    section.appendChild(sectionContent);
    section.appendChild(sectionBtn);
    
    setAtr(section, {id: 'products', className:'products'} );
    setAtr(sectionContent, {id: 'product-container', className: 'section-container'});
    setAtr(sectionBtn, {id: 'products-btn', className: 'section-btn'});

    app.appendChild(section);
}

createContainer();


let products = []
let pagination = 0;

const getProductData = async () => {
    
    const response = await fetchData(`${API}/products?offset=${pagination}&limit=12`);
    products = response;
    console.log(products)
    return response
}

const setProducts = async ()=>{
    products = await getProductData();
    const container = document.getElementById("product-container");
    container.append(
      ...products.map((product) => createCard(product))
    );
    console.log('Done!')
}

setProducts();

const createCard = (product) => {
    const card = document.createElement("article");
    card.setAttribute("class", "card");
    card.innerHTML = `
        <img loading="lazy" src="${product.images[0]}">
        <h3>${product.title}</h3>
        <span>$${product.price}</span>
        <p>${product.description}</p>
    `;
    
    return card;
};

//Pagination
const paginationBtn = document.getElementById('products-btn');
paginationBtn.addEventListener('click', ()=>{
    pagination+=12;
    console.log(pagination)
    setProducts()
});