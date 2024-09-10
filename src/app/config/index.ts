
import dotenv from 'dotenv'
dotenv.config()
export default{
    db_url:process.env.DB_URL,
    port:process.env.PORT,
    node_dev:process.env.NODE_DEV,
    saltRound:process.env.BCRYPT_SALT_ROUND,
    access_secret:process.env.JWT_ACCESS_SECRET,
    refresh_secret:process.env.JWT_REFRESH_SECRET
}
