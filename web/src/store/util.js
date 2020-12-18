export const concat = (list, item) => {
    return list.concat(item);
};

export const delById = (list, id) => {
    const idx = list.findIndex(({id: _id}) => _id === id);
    if (idx > -1) {
        list.splice(idx, 1);
    }
    return [...list];
};

export const replaceItemById = (list, item) => {
    const idx = list.findIndex(({id}) => id === item.id);
    if (idx > -1) {
        list[idx] = item;
    }
    return [...list];
};