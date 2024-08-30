export const categories = ["america", "europa"];

export const items = [
    {
        id: '1',
        name: 'Camiseta Argentina',
        price: 60,
        category: ["america", "todas"],
        img: 'https://i.ibb.co/1v1BPq8/camiseta-arg.png',
        stock: 3,
        description: 'Camiseta de la Seleccion Argentina'
    },
    {
        id: '2',
        name: 'Camiseta España',
        price: 45,
        category: ["europa", "todas"],
        img: 'https://i.ibb.co/Ybd5p2Z/camiseta-esp.jpg',
        stock: 9,
        description: 'Camiseta de España'
    },
    {
        id: '3',
        name: 'Camiseta Alemania',
        price: 25,
        category: ["europa", "todas"],
        img: 'https://i.ibb.co/zm49yGd/camiseta-ale.jpg',
        stock: 8,
        description: 'Camiseta de Alemania'
    },
    {
        id: '4',
        name: 'Camiseta Francia',
        price: 20,
        category: ["europa", "todas"],
        img: 'https://i.ibb.co/VgZsKKk/camiseta-francia.jpg',
        stock: 9,
        description: 'Camiseta de Francia'
    },
    {
        id: '5',
        name: 'Camiseta Brasil',
        price: 50,
        category: ["america", "todas"],
        img: ('https://i.ibb.co/sJ5qxLS/camiseta-brasil.jpg'),
        stock: 5,
        description: 'Camiseta de Brasil'
    },
    {
        id: '6',
        name: 'Camiseta Inglaterra',
        price: 35,
        category: ["europa", "todas"],
        img: 'https://i.ibb.co/r2H50F5/camiseta-inglaterra.jpg',
        stock: 7,
        description: 'Camiseta de Inglaterra'
    }
]

// export const getProducts = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(products)
//         }, 500)
//     })
// }

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(items.find(prod => prod.id === productId))
        }, 500)
    })
}

// export const getProductsByCategory = (categoryId) => {
//     return new Promise((resolve) => {
//         setTimeout(() =>{
//             resolve(products.find(prod => prod.category === categoryId))
//         }, 500)
//     })
// }