const shop = require("./shop");
const storage   = require("./storage");
const product  = require("./product");
const products_in_storage  = require("./products_in_storage");

exports.find_Product = product.find_Product;
exports.add_Product = product.add_Product;
exports.remove_Product = product.remove_Product;
exports.edit_Product = product.edit_Product;
exports.global_products_list = product.global_products_list;

exports.find_Storage = storage.find_Storage;
exports.add_Storage = storage.add_Storage;
exports.remove_Storage = storage.remove_Storage;
exports.edit_Storage = storage.edit_Storage;
exports.global_storages_list = storage.global_storages_list

exports.find_Shop = shop.find_Shop;
exports.add_Shop = shop.add_Shop;
exports.remove_Shop = shop.remove_Shop;
exports.edit_Shop = shop.edit_Shop;
exports.global_shops_list = shop.global_shops_list;

exports.remove_Products_From_Storage = products_in_storage.remove_Products_From_Storage;
exports.from_Storage_To_Shop = products_in_storage.from_Storage_To_Shop;
exports.from_Storage_To_Storage = products_in_storage.from_Storage_To_Storage;
exports.add_Products_To_Storage = products_in_storage.add_Products_To_Storage;
exports.global_productsinstorage_list = products_in_storage.global_productsinstorage_list;
