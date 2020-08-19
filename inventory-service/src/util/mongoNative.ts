import { MongoClient, Collection } from 'mongodb'
import logger from './logger'

let mongoDb
let productsCol: Collection<any>

const mongoNativeConnect = (pid: number, onConnect: () => void ) => {
  const { MONGODB_USER, MONGODB_PASSWORD, MONGODB_HOST, MONGODB_PORT, MONGODB_DATABASE } = process.env
  const mongoURI = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_HOST}`;
  MongoClient.connect(mongoURI, { useUnifiedTopology: true }, (err: any, client: any) => {
    if (err) {
      logger.error('Connection to native mongo failed ' + err);
      if (client) return client.close()
      return
    }
    logger.info(`MongoDB connected to ${MONGODB_HOST}/${MONGODB_DATABASE} on PID ${pid}`);
    
    mongoDb = client.db(MONGODB_DATABASE)

    productsCol = mongoDb.collection('products')
    onConnect()
  })
}

export {
  mongoDb,

  productsCol,

  mongoNativeConnect
}