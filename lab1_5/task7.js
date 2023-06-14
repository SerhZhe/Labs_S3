const mod = require('modules');
const { global_productsinstorage_list } = require('./modules/products_in_storage');
const { global_shops_list } = require('./modules/shop');

console.log("STORAGE");
mod.add_Storage("name_of_storage1", "location_of_storage1");
mod.add_Storage("name_of_storage10", "location_of_storage10");
mod.add_Storage("name_of_storage2", "location_of_storage2");

console.log(mod.global_storages_list);

mod.edit_Storage("name_of_storage1", "location_of_storage1", "name_of_storage3", "location_of_storage3");

console.log(mod.global_storages_list);

console.log(mod.find_Storage("name_of_storage2", "l"));

console.log(mod.remove_Storage("name_of_storage2", "location_of_storage2"));

console.log(mod.global_storages_list);

//product
console.log("PRODUCT");
mod.add_Product("product1", "20");
mod.add_Product("product2", "40");
mod.add_Product("product10", "500");

console.log(mod.global_products_list);

mod.edit_Product("product1", "20", "product1", "100");

console.log(mod.global_products_list);

console.log(mod.remove_Product("product2", "40"));

console.log(mod.find_Product("product1", "100"));

console.log(mod.global_products_list);

//shop
console.log("SHOP");
mod.add_Shop("Shop1", "Location12", mod.global_products_list);
mod.add_Shop("Shop2", "Location21", []);

console.log(global_shops_list);

console.log(mod.edit_Shop("Shop2", "Location21", [],"Shop3","Location21",mod.global_products_list));

console.log(global_shops_list);

console.log(mod.remove_Shop("Shop3", "Location21", mod.global_products_list));

console.log(global_shops_list);

console.log(mod.find_Shop("Shop3", "Location21", mod.global_products_list))
//Products_In_Storage
console.log("PRODUCTS_IN_STORAGE");

console.log("add_Products_To_Storage");
mod.add_Products_To_Storage(mod.global_storages_list[0], mod.global_products_list);
console.log(global_productsinstorage_list);

console.log("from_Storage_To_Storage");
mod.from_Storage_To_Storage(mod.global_storages_list[0], mod.global_storages_list[1], mod.global_products_list)
console.log(global_productsinstorage_list);

console.log("remove_Products_From_Storage");
mod.remove_Products_From_Storage(mod.global_storages_list[1], mod.global_products_list);
console.log(global_productsinstorage_list);

console.log("from_Storage_To_Shop");
mod.add_Products_To_Storage(mod.global_storages_list[0], mod.global_products_list);
mod.from_Storage_To_Shop(mod.global_storages_list[0], global_shops_list[0], mod.global_products_list[0]);

console.log(global_productsinstorage_list);
console.log(global_shops_list);
