class Shop  {
    constructor(name, location, products){
        this.name = name;
        this.location = location;
        this.products = products
    }
}

let global_shops_list = new Array();

function add_Shop (name, location, products) {

    let shop = new Shop(name, location, products);
    global_shops_list.push(shop);

    return shop;

}

function edit_Shop (name, location, products, new_name, new_location, new_products) {

    let shop = find_Shop(name, location, products);

    if (shop === -1) { return -1; }

    let id = global_shops_list.indexOf(shop);
    
    global_shops_list[id].name = new_name;
    global_shops_list[id].location = new_location;
    global_shops_list[id].products = new_products;

    return 1;

}

function remove_Shop (name, location, products) {

    let shop = find_Shop(name, location, products);

    if (shop === -1) { return -1; }

    let id = global_shops_list.indexOf(shop);
    global_shops_list.splice(id, 1);

    return 1;

}

function find_Shop (name, location, products) {

    for (let id = 0; id < global_shops_list.length; id++) {

        let shop = global_shops_list[id];

        if (name === shop.name &&
            location === shop.location &&
            Array.isArray(products) &&
            products.length === shop.products.length &&
            products.every((val, index) => val === shop.products[index])) { return shop; }

    }

    return -1;

}

exports.find_Shop = find_Shop;
exports.add_Shop = add_Shop;
exports.remove_Shop = remove_Shop;
exports.edit_Shop = edit_Shop;
exports.global_shops_list = global_shops_list;