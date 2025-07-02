const appEL = document.querySelector('#app');

const titleEl = document.createElement("div");
titleEl.setAttribute("class", "content");
console.log(titleEl);

headingEl = document.createElement("h2");
headingEl.textContent = "News1";
headingEl.setAttribute('class', 'heading');
console.log(headingEl);

titleEl.append(headingEl);
appEL.append(titleEl);



textEl = document.createElement("p");
textEl.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus"
textEl.setAttribute('class', 'text');
console.log(textEl);

titleEl.append(textEl);
appEL.append(textEl);


//Создать множество параграфов с числами от 0 до 19.
//Дополнительное задание 
//Спросить у пользователя сколько нужно создать параграфов

//const askUser = +prompt("How many paragraphs do you want to create?");

//for (let i = 0; i <= askUser; i++) {
//  const pEl = document.createElement("p");
//  pEl.textContent = i;
//  appEL.append(pEl);
//  console.log(pEl.textContent
//  );

//}

/*const data = ['info 1', 'lorem', 'text 3', 'info 4', 'info 5'];
data.forEach((el) => {
    const pEl = document.createElement("p");
    pEl.textContent = el;
    appEL.append(pEl);
    console.log(pEl.textContent);
});




const pages = [
    { link: 'https://skilldesk.starta.university/', title: 'SkillDesk' },
    { link: 'https://starta.university/', title: 'Starta University' },
    { link: 'https://skilldesk.starta.university/courses', title: 'Courses' },
    { link: 'https://skilldesk.starta.university/faq', title: 'FAQ' },
    { link: 'https://skilldesk.starta.university/contacts', title: 'Contacts' },
];
//Массив из объектов со свойствами link и title. Свойства хранят в себе ссылку на страницу и название страницы соответственно. Напишите цикл, который создаст для каждого объекта ссылку и добавит в #app.

/*<div class="page">
            <h2>Title</h2>
            <a href="">Link</a>
        </div>
        */

/*pages.forEach((page) => {
    const pageEl = document.createElement("div");
    pageEl.setAttribute("class", "page");

    const headingEl = document.createElement("h2");
    headingEl.textContent = page.title;

    const linkEl = document.createElement("a");
    linkEl.setAttribute("href", page.link);
    linkEl.textContent = page.link;

    pageEl.append(headingEl, linkEl);
    appEL.append(pageEl);
});

pages.forEach(el => {
    const { link, title } = el;
    appEL.append(createPageElement({ link, title }));
})

function createPageElement({ link, title }) {
    const pageEl = document.createElement('a');
    pageEl.href = link;
    pageEl.textContent = title;
    pageEl.target = "_blank";
    return pageEl
}*/

const products = [
    {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    },
    {
        "id": 2,
        "title": "Mens Casual Premium Slim Fit T-Shirts ",
        "price": 22.3,
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "rating": {
            "rate": 4.1,
            "count": 259
        }
    },
    {
        "id": 3,
        "title": "Mens Cotton Jacket",
        "price": 55.99,
        "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        "rating": {
            "rate": 4.7,
            "count": 500
        }
    },
    {
        "id": 4,
        "title": "Mens Casual Slim Fit",
        "price": 15.99,
        "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "rating": {
            "rate": 2.1,
            "count": 430
        }
    },
    {
        "id": 5,
        "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        "price": 695,
        "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
            "rate": 4.6,
            "count": 400
        }
    }
];


/*<div class="product">
            <img src="" alt="">
            <h2>title</h2>
            <p>price</p>
            <p>Допусткно к заказу count</p>
        </div>*/

products.forEach((product) => {
    const productEl = document.createElement("div");
    productEl.setAttribute("class", "product");

    const imgEl = document.createElement("img");
    imgEl.setAttribute("src", product.image);
    imgEl.setAttribute("alt", product.title);
    console.log(imgEl);

    const headingEl = document.createElement("h2");
    headingEl.textContent = `Title: ${product.title}`;
    console.log(headingEl);

    const paragEl1 = document.createElement("p");
    paragEl1.textContent = `Price: ${product.price}`;
    console.log(paragEl1);

    const paragEl2 = document.createElement("p");
    paragEl2.textContent = `Available: ${product.rating.count}`;
    console.log(paragEl2);

    const paragEl3 = document.createElement("p");
    paragEl3.textContent = `Category: ${product.category}`;
    console.log(paragEl3);

    const paragEl4 = document.createElement("p");
    paragEl4.textContent = `Description: ${product.description}`;

    productEl.append(imgEl, headingEl, paragEl1, paragEl2, paragEl3, paragEl4);
    appEL.append(productEl);
}
)

