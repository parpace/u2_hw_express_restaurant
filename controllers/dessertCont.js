const desserts = [
    { name: `Sopapillas`,
     price: 4.80,
     url: `goes here`,
     vegan: true },
    { name: `Churros with Ice Cream`,
     price: 7.53,
     url: ``,
     vegan: false },
    { name: `Fried Ice Cream`,
    price: 6.33,
    url: ``,
    vegan: false },
    { name: `Flan`,
    price: 4.80,
    url: ``,
    vegan: false }
]

const getDesserts = (req,res) => {
    res.send(desserts)
}

const getDessert = (req,res) => {
    res.send(desserts[req.params.id])
}

module.exports = {
    getDesserts,
    getDessert
}