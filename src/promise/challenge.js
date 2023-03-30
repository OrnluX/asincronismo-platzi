const API = 'https://api.escuelajs.co/api/v1';
const app = document.getElementById('app');

function fetchData(urlApi){
    console.log('Fetching Data...')
    return fetch(urlApi).then(response => response.json())
    .then(console.log('Fetching Done'))
    .catch(error => console.error(`Error fetching data! ${error}`));
};

//Set attributes to HTML elements
const setAtr = (element, {id, className}) => {
    
    element.setAttribute('id',id );
    element.setAttribute('class', className);
}

//Function to render the main container section
const createContainer = (sectionName) => {
    const section = document.createElement('section');
    const sectionTitle = document.createElement('h2');
    const sectionContent = document.createElement('div');
    const sectionBtn = document.createElement('button');
    
    sectionTitle.innerText= sectionName;
    sectionBtn.innerText='Cargar Más';
    
    section.appendChild(sectionTitle);
    section.appendChild(sectionContent);
    section.appendChild(sectionBtn);
    
    setAtr(section, {id: 'products', className:'products'} );
    setAtr(sectionContent, {id: 'product-container', className: 'section-container'});
    setAtr(sectionBtn, {id: 'products-btn', className: 'section-btn'});

    app.appendChild(section);
}
createContainer('products');

//Function to create the modal window
const createModal = ()=> {
    const modal = document.createElement('div');
    app.appendChild(modal);

    setAtr(modal, {id: 'product-modal', className: 'modal'});
}

createModal()



/////////Get product data
let products = []
let pagination = 0;

const getProductData = async () => {
    
    const response = await fetchData(`${API}/products?offset=${pagination}&limit=12`);
    products = response;
}



const setProducts = async (asyncFunc)=>{
    const container = document.getElementById("product-container");
    container.innerHTML= '';
    await asyncFunc()
    .then(console.log('Done!'));
    container.append(
      ...products.map((product) => createCards(product))
    );
    
    // Getting all the elements with the class card-link and adding an event listener to each one of them. 
    const productLink = document.querySelectorAll('.card-link');
    productLink.forEach((link)=>{
        link.addEventListener('click', (e)=>{
            setModal(e.target.id);
        })
    }) 
}

setProducts(getProductData);

const createCards = (product) => {
    const card = document.createElement("article");
    const cardImgContainer = document.createElement('div');
    const cardContent = document.createElement('div');
    
    cardContent.setAttribute('class', 'card-content');
    card.setAttribute("class", "card");
    cardImgContainer.setAttribute('class', 'card-img_container');

    card.appendChild(cardImgContainer);
    card.appendChild(cardContent);

    cardImgContainer.innerHTML = `
        <img loading="lazy" src="${product.images[0]}" alt="${product.title}">
    `;

    cardContent.innerHTML = `
        <h3>${product.title}</h3>
        <span>$${product.price}</span>
        <p>${product.description}</p>
        <a class="card-link" href="#" id="${product.id}">Ver Producto</a>
    `
    
    return card;
};

//Function to set single product data into modal window
const setModal = async (id)=>{
    const modalWindow = document.getElementById('product-modal');
    modalWindow.classList.add('show');
    document.body.classList.add('no-scroll');
    
    const product = await fetchData(`${API}/products/${id}`)
    .catch((e)=>{
        console.error(`Get product data failed! ${e}`);
    });
    
    console.log(product);
    modalWindow.innerHTML = `
        <h2>${product.title}</h2>
        <p>${product.description}</p>
    `
}

//Pagination of global products
const productsBtn = document.getElementById('products-btn');
productsBtn.addEventListener('click', ()=>{
    pagination+=12;
   
    setProducts(getProductData);
});

//Product Button

