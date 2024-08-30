import { items } from "../asyncMock"

export const getProducts = (category) => {

    const filteredItems = items.filter((item) => 
        item.category.includes(category));

    return new Promise((resolve, reject) => {
        if(items.length > 0) {
            setTimeout(() => {
                resolve(filteredItems);
            }, 500);
        } else {
            reject("No hay productos disponibles")
        }
    })
};