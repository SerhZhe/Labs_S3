const { global_shops_list } = require("./shop");

class ProductsInStorage {
    constructor(storage, products){
        this.storage = storage;
        this.products = products;
    }
}

global_productsinstorage_list = new Array();

function add_Products_To_Storage(storage, products){
    for(let i = 0; i < global_productsinstorage_list.length; i++){
        if(global_productsinstorage_list[i].storage === storage){
            global_productsinstorage_list[i].products.join(products);
            return 1;
        }
    }
    productsinstorage = new ProductsInStorage(storage, products);
    global_productsinstorage_list.push(productsinstorage);
}

function remove_Products_From_Storage(storage, products){
    global_productsinstorage_list.forEach(element => {
        if(element.storage === storage){
            element.products = element.products.filter( ( e ) => !products.includes( e ) );
        }
    });
}

function from_Storage_To_Storage(from_storage, to_storage, products){
    remove_Products_From_Storage(from_storage, products);
    add_Products_To_Storage(to_storage, products);
}

function from_Storage_To_Shop(storage, shop, products){
    remove_Products_From_Storage(storage, products);
    global_shops_list[global_shops_list.indexOf(shop)].products.join(products)
    return 1;
}

exports.remove_Products_From_Storage = remove_Products_From_Storage;
exports.from_Storage_To_Shop = from_Storage_To_Shop;
exports.from_Storage_To_Storage = from_Storage_To_Storage;
exports.add_Products_To_Storage = add_Products_To_Storage;
exports.global_productsinstorage_list = global_productsinstorage_list;