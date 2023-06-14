class Storage {

    constructor (name, location, products) {
    
        this.name = name;
        this.location = location;
        
    }
    
}

let global_storages_list = new Array();

function add_Storage (name, location) {

    let storage = new Storage(name, location);
    global_storages_list.push(storage);

    return storage;

}

function edit_Storage (name, location, new_name, new_location) {

    let storage = find_Storage(name, location);

    if (storage === -1) { return -1; }

    let id = global_storages_list.indexOf(storage);
    
    global_storages_list[id].name = new_name;
    global_storages_list[id].location = new_location;

    return 1;

}

function remove_Storage (name, location) {

    let storage = find_Storage(name, location);

    if (storage === -1) { return -1; }

    let id = global_storages_list.indexOf(storage);
    global_storages_list.splice(id, 1);

    return 1;

}

function find_Storage (name, location) {

    for (let id = 0; id < global_storages_list.length; id++) {

        let storage = global_storages_list[id];

        if (name === storage.name &&
            location === storage.location) { return storage; }

    }

    return -1;

}

exports.find_Storage = find_Storage;
exports.add_Storage = add_Storage;
exports.remove_Storage = remove_Storage;
exports.edit_Storage = edit_Storage;
exports.global_storages_list = global_storages_list