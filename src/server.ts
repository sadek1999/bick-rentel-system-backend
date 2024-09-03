import { application } from "express"
import { port } from "./app"



application.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })