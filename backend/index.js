import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import carsRoutes from "./routes/cars.routes.js"
import usersRoutes from "./routes/users.routes.js"
import ofertsRoutes from "./routes/oferts.routes.js"
import reviewsRoutes from "./routes/reviews.routes.js"
import connectDataBase from "./database/connectdb.js"
import { addCars } from "./controllers/cars.js"

const app = express()
const port = 4000

app.use(express.json())
app.use(express.text())
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({type:"*/*"}))
app.use(express.urlencoded({extended:true}))

app.use(carsRoutes)
app.use(usersRoutes)
app.use(ofertsRoutes)
app.use(reviewsRoutes)

app.get('/', (req, res) => {
    res.send('Bienvenidos a tu Servidor de Articulos MERN!!!!!!!!')
  })
  
app.listen(port, () => {
    console.log(`El servidor esta funcionando correctamente en el puerto ${port} ✔✔`)
    connectDataBase()
   

  })

  