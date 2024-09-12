import biscoffCake from "./images/biscoff-cake.jpeg";
import lemonCake from "./images/lemon-cake.jpg";
import cheeseCake from "./images/cheesecake.jpg";

export function loadmenu() {
    let content;

    if (document.getElementById('menu-content')) {
        content = document.getElementById('menu-content'); // If 'menu-content' exists
    } else {
        content = document.getElementById('content'); // If 'menu-content' doesn't exist
    }
    content.innerHTML = ''
    content.id = 'menu-content'

    const biscoff = document.createElement('img')
    biscoff.src = biscoffCake
    biscoff.id = 'biscoff-img-menu'
    
    const biscoffMenu = document.createElement('div')
    biscoffMenu.id = 'biscoff-menu'

    const biscoffMenuHeader = document.createElement('h1')
    biscoffMenuHeader.textContent = "Biscoff Tres Leches"
    const biscoffMenuText = document.createElement('p')
    biscoffMenuText.textContent = "An indulgent twist on the classic tres leches cake, this dessert is soaked in a rich combination of three creamy milks and topped with a luscious layer of Biscoff spread. The spiced caramel notes of Biscoff perfectly complement the soft, moist texture of the cake, making each bite a heavenly experience."

    const lemon = document.createElement('img')
    lemon.src = lemonCake
    lemon.id = 'lemon-img-menu'

    const lemonMenu = document.createElement('div')
    lemonMenu.id = 'lemon-menu'

    const lemonMenuHeader = document.createElement('h1')
    lemonMenuHeader.textContent = 'Lemon Cake'
    const lemonMenuText = document.createElement('p')
    lemonMenuText.textContent = 'A zesty and refreshing treat bursting with bright citrus flavor. This moist lemon cake is infused with fresh lemon juice and zest, delivering a perfect balance of sweet and tangy with every bite. Finished with a light, sugary glaze, it’s a delightful dessert for any occasion.'

    const cheesecake = document.createElement('img')
    cheesecake.src = cheeseCake
    cheesecake.id = 'cheesecake-img-menu'

    const cheeseMenu = document.createElement('div')
    cheeseMenu.id = 'cheese-menu'

    const cheeseMenuHeader = document.createElement('h1')
    cheeseMenuHeader.textContent = "Cherry Cheesecake"
    const cheeseMenuText = document.createElement('p')
    cheeseMenuText.textContent = "A smooth and creamy cheesecake topped with a vibrant cherry compote. The tangy sweetness of the cherries contrasts beautifully with the rich, velvety cheesecake, all resting on a buttery graham cracker crust. It’s the perfect blend of flavors and textures for a show-stopping dessert."

    content.appendChild(biscoff)
    content.appendChild(biscoffMenu)
    biscoffMenu.appendChild(biscoffMenuHeader)
    biscoffMenu.appendChild(biscoffMenuText)
    content.appendChild(lemon)
    content.appendChild(lemonMenu)
    lemonMenu.appendChild(lemonMenuHeader)
    lemonMenu.appendChild(lemonMenuText)
    content.appendChild(cheesecake)
    content.appendChild(cheeseMenu)
    cheeseMenu.appendChild(cheeseMenuHeader)
    cheeseMenu.appendChild(cheeseMenuText)

    

}