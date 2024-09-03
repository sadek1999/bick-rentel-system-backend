import { application } from "express"
import { port } from "./app"
import config from "./app/config"
import mongoose from 'mongoose'

async function main() {
  await mongoose.connect(config.db_url as string)
  
  application.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
}
main()


