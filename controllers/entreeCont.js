const entrees = [
    { name: `Carne Asada`,
     price: 17.14,
     url: `goes here`,
     vegan: false },
    { name: `Huevos Mexicanos`,
     price: 11.68,
     url: ``,
     vegan: true },
    { name: `Carnitas`,
    price: 16.27,
    url: ``,
    vegan: false },
    { name: `Chile Colorado`,
    price: 14.02,
    url: ``,
    vegan: false }
]

const getEntrees = (req,res) => {
    res.send(entrees)
}

const getEntree = (req,res) => {
    res.send(entrees[req.params.id])
}

module.exports = {
    getEntrees,
    getEntree
}