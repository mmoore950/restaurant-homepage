import biscoffCake from "./images/biscoff-cake.jpeg";
import lemonCake from "./images/lemon-cake.jpg";

export function loadhome() {
    const content = document.getElementById('content');

    // Create and append the welcome header
    const welcomeHeader = document.createElement('h1');
    welcomeHeader.id = 'welcome';
    welcomeHeader.textContent = "Welcome to Michael's";
    content.appendChild(welcomeHeader);

    // Create and append the about section
    const aboutContainer = document.createElement('div');
    aboutContainer.className = 'about-container';

    const aboutHeader = document.createElement('h1');
    aboutHeader.id = 'about-header';
    aboutHeader.textContent = 'ABOUT';
    aboutContainer.appendChild(aboutHeader);

    const aboutText = document.createElement('p');
    aboutText.id = 'about';
    aboutText.textContent = "At Michael's, we believe that every bite should be a moment of pure indulgence. Nestled in the heart of the city, Michael's is a high-end bakery renowned for its exquisite pastries, artisanal breads, and decadent desserts. Our master bakers, trained in the finest traditions, craft each item with meticulous care and attention to detail, using only the highest quality ingredients. From the delicate layers of our buttery croissants to the rich, velvety texture of our signature cakes, every creation at Michael's is a testament to our commitment to excellence. Whether you're celebrating a special occasion or simply treating yourself, Michael's offers an unforgettable culinary experience that delights the senses and elevates the art of baking to new heights.";
    aboutContainer.appendChild(aboutText);

    content.appendChild(aboutContainer);

    // Create and append the second container with hours and location
    const secondContainer = document.createElement('div');
    secondContainer.className = 'second-container';

    // Hours container
    const hoursContainer = document.createElement('div');
    hoursContainer.className = 'hours-container';

    const hoursHeader = document.createElement('h1');
    hoursHeader.id = 'hours';
    hoursHeader.textContent = 'HOURS';
    hoursContainer.appendChild(hoursHeader);

    const hoursList = document.createElement('ul');
    const hours = [
        "Monday: 11:00 AM - 10:00 PM",
        "Tuesday: 11:00 AM - 10:00 PM",
        "Wednesday: 11:00 AM - 10:00 PM",
        "Thursday: 11:00 AM - 10:00 PM",
        "Friday: 11:00 AM - 11:00 PM",
        "Saturday: 11:00 AM - 11:00 PM",
        "Sunday: 11:00 AM - 09:00 PM"
    ];

    hours.forEach(hour => {
        const li = document.createElement('li');
        li.textContent = hour;
        hoursList.appendChild(li);
    });

    hoursContainer.appendChild(hoursList);
    secondContainer.appendChild(hoursContainer);

    // Location container
    const locationContainer = document.createElement('div');
    locationContainer.className = 'location-container';

    const locationHeader = document.createElement('h1');
    locationHeader.className = 'location';
    locationHeader.textContent = 'LOCATION';
    locationContainer.appendChild(locationHeader);

    const locationText = document.createElement('p');
    locationText.textContent = "123 Maple Avenue, Suite 400, Springfield, IL 62704, USA";
    locationContainer.appendChild(locationText);

    secondContainer.appendChild(locationContainer);

    content.appendChild(secondContainer);

    const bottomContainer = document.createElement('div')
    bottomContainer.className = 'bottom-container'
    content.appendChild(bottomContainer)


    const lemonDiv = document.createElement('div');
    lemonDiv.className = 'lemon-container'
    bottomContainer.appendChild(lemonDiv)

    const lemon = document.createElement('img');
    lemon.src = lemonCake
    lemon.id = 'lemon'
    lemonDiv.appendChild(lemon)

    const lemonAbout = document.createElement('div')
    lemonAbout.className = 'lemon-about'
    lemonDiv.appendChild(lemonAbout)

    const lemonHeader = document.createElement('h1')
    lemonHeader.className = 'lemon-header'
    lemonHeader.textContent = 'Lovely Lemon Loaf'
    const lemonText = document.createElement('p')
    lemonText.className = "lemon-text"
    lemonText.textContent = "A moist, zesty cake bursting with citrus sweetness—perfectly balanced and light."
    lemonAbout.appendChild(lemonHeader)
    lemonAbout.appendChild(lemonText)


    const biscoffDiv = document.createElement('div')
    biscoffDiv.className = 'biscoff-container'
    bottomContainer.appendChild(biscoffDiv)

    const biscoffAbout = document.createElement('div')
    biscoffDiv.appendChild(biscoffAbout)


    const biscoffHeader = document.createElement('h1')
    biscoffHeader.className = 'biscoff-header'
    biscoffHeader.textContent = "Butter Biscoff Bliss"
    const biscoffText = document.createElement('p')
    biscoffText.className = 'biscoff-text'
    biscoffText.textContent = "A rich, buttery cake with spiced caramel flavors from irresistible Biscoff."
    biscoffAbout.appendChild(biscoffHeader)
    biscoffAbout.appendChild(biscoffText)

    const biscoff = document.createElement('img');
    biscoff.src = biscoffCake
    biscoff.id = 'biscoff'
    biscoffDiv.appendChild(biscoff)
}
