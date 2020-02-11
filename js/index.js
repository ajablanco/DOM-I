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
  element.style.color = "green"; 
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
ctaButton.style.backgroundColor = "rgb(24,137,217)";
ctaButton.style.color = "white";
ctaButton.style.borderRadius = "4px";
ctaButton.style.fontSize = "1.2rem";


const ctaImg = document.querySelector('#cta-img');
ctaImg.src = "img/header-img.png";
console.log(ctaImg);

const textContent = document.querySelectorAll('.text-content');
textContent.forEach(item => item.style.width = "50%")

const features = document.querySelector('.text-content h4');
features.textContent = "Features";
features.style.width = "100%";
features.style.textAlign = "left";

const featuresText = document.querySelector('.text-content p');
featuresText.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const about = document.querySelector('.text-content:last-child h4');
about.textContent = "About";
about.style.width = "100%";
about.style.textAlign = "left";

const aboutText = document.querySelector('.text-content:last-child p');
aboutText.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const middleImg = document.querySelector('.middle-img');
middleImg.src = "img/mid-page-accent.jpg";

const services = document.querySelector('.bottom-content h4');
services.textContent = "Services";

const servicesText = document.querySelector('.bottom-content p');
servicesText.textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const product = document.querySelector('.bottom-content .text-content:nth-child(2) h4')
product.textContent = "Product";

const productText = document.querySelector('.bottom-content .text-content:nth-child(2) p')
productText.textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const vision = document.querySelector('.bottom-content .text-content:nth-child(3) h4')
vision.textContent = "Vision";

const visionText = document.querySelector('.bottom-content .text-content:nth-child(3) p')
visionText.textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const contact = document.querySelector('.contact h4');
contact.textContent = "contact";

const address = document.querySelector('.contact p');
address.textContent = "123 Way 456 Street Somewhere, USA";
address.style.width = "20%";

const phone = document.querySelector('.contact p:nth-child(3)');
phone.textContent = "1 (888) 888-8888";
phone.style.width = "20%";

const email = document.querySelector('.contact p:nth-child(4)');
email.textContent = "sales@greatidea.io";
email.style.width = "20%";

const footer = document.querySelector('footer p');
footer.textContent = "Copyright Great Idea! 2018";

const navigation = document.querySelector("nav");
const node = document.createElement("a");
  const textnode = document.createTextNode("Home");
  node.appendChild(textnode);
  navigation.prepend(node);
  node.style.color = "green";

  const node2 = document.createElement("a");
  const textnode2 = document.createTextNode("Blog");
  node2.appendChild(textnode2);
  navigation.append(node2);
  node2.style.color = "green";