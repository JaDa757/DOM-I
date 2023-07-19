const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};
const header = document.querySelector('header');
const firstLogo = document.querySelector('#logo-img');
const secondLogo = document.querySelector('#cta-img');
const thirdLogo = document.querySelector('#middle-img');
const navLinks = document.querySelectorAll('nav a');
const topText = document.querySelector('div h1');
const topButton = document.querySelector('button');
const topTitles = document.querySelectorAll('.top-content h4');
const featuresTitlesText = document.querySelector('.text-content p')
const aboutTitleText = document.querySelector('.main-content .text-content:nth-child(2) p')
const bottomTitles = document.querySelectorAll('.bottom-content h4');
const servicesTitlesText = document.querySelector('.bottom-content p')
const productTitleText = document.querySelector('.bottom-content .text-content:nth-child(2) p')
const visionTitleText = document.querySelector('.bottom-content .text-content:nth-child(3) p')
const contactTitle = document.querySelectorAll('.contact h4');
const contactInfo = document.querySelectorAll('.contact p') 
const footerLinks = document.querySelector('footer a');


const navLinkText = ['Services',
'Product',
'Vision',
'Features',
'About',
'Contact'];
header.style.fontStyle = "italic";
navLinks.forEach((link, index) => {
  link.textContent = navLinkText[index]
})



firstLogo.src = "http://localhost:9000/img/logo.png"
secondLogo.src = "http://localhost:9000/img/cta.png"
thirdLogo.src = "http://localhost:9000/img/accent.png"


topText.textContent = 'DOM  iS Awesome'
topButton.textContent = 'Get Started'


topTitles.forEach((title, index) => {
  title.textContent = navLinkText[index + 3]
})
featuresTitlesText.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
aboutTitleText.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
visionTitleText.textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'


bottomTitles.forEach((title, index) => {
  title.textContent = navLinkText[index]
})
servicesTitlesText.textContent = 'services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
productTitleText.textContent = 'product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'


contactTitle.forEach((title, index) => {
  title.textContent = navLinkText[index + 5]
})
// contactInfo.textContent = '123 Way 456 Street Somewhere, USA'
const contactParagraphs = document.querySelectorAll('.contact p')
const textForParagraphs = [
  "123 Way 456 Street Somewhere, USA",
  "1 (888) 888-8888",
  "sales@greatidea.io"
];
contactParagraphs.forEach((paragraph, index) => {
  paragraph.textContent = textForParagraphs[index];
});




footerLinks.textContent = 'Copyright Great Idea! 2021'
footerLinks.style.fontWeight = 'bold'


console.log('project wired!')
