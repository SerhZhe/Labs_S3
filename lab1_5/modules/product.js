class Product {

    constructor (name, price) {
    
        this.name = name;
        this.price = price;    
    }
    
}

global_products_list = new Array();

function add_Product (name, price) {

    let product = new Product(name, price);
    global_products_list.push(product);

    return product;

}

function edit_Product (name, price, new_name, new_price) {

    let product = find_Product(name, price);

    if (product === -1) { return -1; }

    let id = global_products_list.indexOf(product);
    
    global_products_list[id].name = new_name;
    global_products_list[id].price = new_price;

    return 1;

}

function remove_Product (name, price) {

    let product = find_Product(name, price);

    if (product === -1) { return -1; }

    let id = global_products_list.indexOf(product);
    global_products_list.splice(id, 1);

    return 1;

}

function find_Product (name, price) {

    for (let id = 0; id < global_products_list.length; id++) {

        let product = global_products_list[id];

        if (name === product.name &&
            price === product.price) { return product; }

    }

    return -1;

}

exports.find_Product = find_Product;
exports.add_Product = add_Product;
exports.remove_Product = remove_Product;
exports.edit_Product = edit_Product;
exports.global_products_list = global_products_list;