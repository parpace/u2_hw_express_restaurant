const appetizers = [
    { name: `Chips and Salsa`,
     price: 3.00,
     url: `goes here`,
     vegan: true },
    { name: `QUESO FUNDIDO`,
     price: 7.14,
     url: ``,
     vegan: false },
    { name: `CHEESE QUESADILLA`,
    price: 3.82,
    url: ``,
    vegan: false },
    { name: `Guacamole`,
    price: 3.82,
    url: ``,
    vegan: true }
]

const getAppetizers = (req,res) => {
    res.send(appetizers)
}

const getAppetizer = (req,res) => {
    res.send(appetizers[req.params.id])
}

const isAppetizerVegan = (req,res) => {
    const veganAppetizers = appetizers.filter(appetizer => appetizer.vegan === true)
    res.send(veganAppetizers)
}


module.exports = {
    getAppetizers,
    getAppetizer,
    isAppetizerVegan
}