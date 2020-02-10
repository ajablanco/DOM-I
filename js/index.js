const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let header = document.querySelector('header');
console.log(header);
header.style.flexDirection = "row";

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let nav = document.querySelector("nav");
nav.style.width = "70%";


const links = document.querySelectorAll('a');
links.forEach( element => {
  element.style.color = "lightgrey"; 
});

console.log(links);

const firstLink = document.querySelector('a:nth-child(1)');
firstLink.textContent = "Services";
console.log(firstLink);

const secondLink = document.querySelector('a:nth-child(2)');
secondLink.textContent = "Product";
console.log(secondLink);

const thirdLink = document.querySelector('a:nth-child(3)');
thirdLink.textContent = "Vision";
console.log(thirdLink);


const fourthLink = document.querySelector('a:nth-child(4)');
fourthLink.textContent = "Features";
console.log(fourthLink);

const fifthLink = document.querySelector('a:nth-child(5)');
fifthLink.textContent = "About";
console.log(fifthLink);

const sixthLink = document.querySelector('a:nth-child(6)');
sixthLink.textContent = "Contact";
console.log(sixthLink);

const cta = document.querySelector('.cta');

const ctaHeader = document.querySelector('.cta-text h1');
ctaHeader.textContent = "DOM";
ctaHeader.style.width = "400px";

const header2 = document.createElement('h1');
ctaHeader.append(header2);
header2.textContent = "is";
header2.style.width = "400px";
header2.style.marginBottom = "0";

const header3 = document.createElement('h1');
ctaHeader.append(header3);
header3.textContent = "Awesome";
header3.style.width = "400px";
header3.style.marginBottom = "0";

const ctaButton = document.querySelector('button');
ctaButton.textContent = "Get Started";

const ctaImg = document.querySelector('#cta-img');
ctaImg.src = "img/header-img.png";
console.log(ctaImg);