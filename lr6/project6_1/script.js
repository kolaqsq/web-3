function createList(database, items, list_id) {
    for (let i in items) {
        let index = items[i];
        let list = document.getElementById(list_id);
        let item = document.createElement("li");

        item.appendChild(document.createTextNode(database[index].name));
        item.setAttribute("id", "item_" + database[index].id);
        list.appendChild(item);

        let children = findChild(database, database[index].id);

        if (children !== []) {
            let new_list = document.createElement("ul");

            new_list.setAttribute("id", "list_" + database[index].id);
            item.appendChild(new_list);

            createList(database, children, "list_" + database[index].id);
        }
    }

    return null
}

function findChild(database, parent_id) {
    let children = [];

    for (let i in database) {
        if (database[i].parent_id === parent_id) {
            children.push(i);
        }
    }

    return children;
}

let organization = [{id: 2, name: "Организация", parent_id: null},
    {id: 3, name: "Бухгалтерия", parent_id: 2},
    {id: 6, name: " Отдел охраны", parent_id: 2},
    {id: 7, name: "Караульная служба", parent_id: 6},
    {id: 8, name: "Бюро пропусков", parent_id: 6},
    {id: 12, name: "Патентный отдел", parent_id: 2},
    {id: 13, name: "Лётная служба", parent_id: 2},
    {id: 14, name: "Лётный отряд Боинг 737", parent_id: 13},
    {id: 17, name: "Лётный отряд Боинг 747", parent_id: 13},
    {id: 18, name: "1-ая авиационная эскадрилья Боинг 737", parent_id: 14},
    {id: 19, name: "2-ая авиационная эскадрилья Боинг 737", parent_id: 14},
    {id: 21, name: "Лётно-методический отдел", parent_id: 13}];

let starter = [];

for (let i in organization) {
    if (organization[i].parent_id == null) {
        starter.push(i);
    }
}

createList(organization, starter, 'list');
