const express = require(`express`)
const cors = require(`cors`)
const appetizers = require(`./controllers/appetizerCont`)
const entrees = require(`./controllers/entreeCont`)
const desserts = require(`./controllers/dessertCont`)
const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(PORT, () => {
    console.log(`listening at port ${PORT}`)
})

app.get(`/appetizers`, appetizers.getAppetizers)
app.get(`/appetizers/:id`, appetizers.getAppetizer)
app.get(`/appetizers/vegan/:true`, appetizers.isAppetizerVegan)

app.get(`/entrees`, entrees.getEntrees)
app.get(`/entrees/:id`, entrees.getEntree)

app.get(`/desserts`, desserts.getDesserts)
app.get(`/desserts/:id`, desserts.getDessert)
