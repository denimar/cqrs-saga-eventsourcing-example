import { mongoNativeConnect } from './util/mongoNative'
import createApolloServer from './util/createApolloServer'
import dotenv from 'dotenv'
dotenv.config()

mongoNativeConnect(process.pid, () => createApolloServer())