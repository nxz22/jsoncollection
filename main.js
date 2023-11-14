const restaurants = [
    {
        "type": "Japanese",
        "name": "Tokyo Diner",
        "borough": "Brooklyn",
        "price": "$$",
        "image": "https://d1ralsognjng37.cloudfront.net/60786389-e5f7-4f0d-ac9a-1d87eb2b0174.jpeg"
    },
    {
        "type": "Korean",
        "name": "BCD Tofu House",
        "borough": "Manhattan",
        "price": "$$",
        "image": "https://d1ralsognjng37.cloudfront.net/6440e243-b2ed-40d7-a587-1fe197ff540f"
    },
    {
        "type": "Bakery/Cafe",
        "name": "Bibble & Sip",
        "borough": "Manhattan",
        "price": "$$",
        "image": "https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_1200,q_auto,fl_lossy,dpr_auto,c_fill,f_auto,h_800,g_auto/skpeodl53dip0kafybey"
    },
    {
        "type": "English",
        "name": "Bluebird London NYC",
        "borough": "Manhattan",
        "price": "$$",
        "image": "https://cdn.vox-cdn.com/thumbor/jb57BgS7eG-bn-wcxkVL6C8ZRSU=/0x0:5760x3840/1200x0/filters:focal(0x0:5760x3840):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/13050453/Bluebird_25.jpg"
    },
    {
        "type": "Cambodian",
        "name": "Bo Ky",
        "borough": "Manhattan",
        "price": "$",
        "image": "https://res.cloudinary.com/the-infatuation/image/upload/q_auto,f_auto/images/Bo_Ky-Special_Beef_Flat_Noodle-David_A_Lee_w7qp7x"
    },
    {
        "type": "Steakhouse",
        "name": "Brooklyn Chop House",
        "borough": "Manhattan",
        "price": "$$$",
        "image": "https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_1200,q_auto,fl_lossy,dpr_auto,c_fill,f_auto,h_800,g_auto/udlyyys7e5lqibyx88ao"
    },
    {
        "type": "American",
        "name": "Bubby's",
        "borough": "Manhattan",
        "price": "$$",
        "image": "https://media.timeout.com/images/104704137/750/422/image.jpg"
    },
    {
        "type": "Italian",
        "name": "Capizzi",
        "borough": "Manhattan",
        "price": "$$",
        "image": "https://media-cdn.tripadvisor.com/media/photo-s/16/f7/b1/47/capizzi.jpg"
    },
    {
        "type": "Italian",
        "name": "Carmine's",
        "borough": "Manhattan",
        "price": "$$",
        "image": "https://images.ctfassets.net/1aemqu6a6t65/3OcZNt0Lt7orrCzEWAkBL1/899d71749d7e3128c0ff7ef39a2218b8/rw-to-go_carmines_-_upper_west_side?w=1200&h=800&q=75"
    },
    {
        "type": "Spanish",
        "name": "Casa Mono",
        "borough": "Manhattan",
        "price": "$$$",
        "image": "https://www.biteofthebest.com/wp-content/uploads/IMG_1754-scaled.jpeg"
    },];
    
    //Fuse.js
const fuseOptions = {
    keys: ['name', 'type', 'borough'], 
    includeScore: true 
};
let fuse = new Fuse(restaurants, fuseOptions);

function searchRestaurants(query) {
    return fuse.search(query).map(result => result.item);
}

function displayRestaurants(filteredRestaurants = restaurants) {
    const list = document.getElementById('restaurant-list');
    list.innerHTML = '';

    filteredRestaurants.forEach(restaurant => {
        const item = document.createElement('div');
        item.className = 'restaurant-item';
        item.innerHTML = 
            `<h2>${restaurant.name}</h2>
            <img src="${restaurant.image}" alt="Image of ${restaurant.name}">
            <p>Type: ${restaurant.type}</p>
            <p>Borough: ${restaurant.borough}</p>
            <p>Price: ${restaurant.price}</p>`;
        list.appendChild(item);
    });
}

function updateRestaurants() {
    const query = document.getElementById('search-input').value;
    let filteredRestaurants;
    if (query.trim() === '') {
        filteredRestaurants = restaurants;
    } else {
        filteredRestaurants = fuse.search(query).map(result => result.item);
    }

    displayRestaurants(filteredRestaurants);
}
window.onload = () => {
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', updateRestaurants);

    fuse = new Fuse(restaurants, fuseOptions);
    displayRestaurants();

};