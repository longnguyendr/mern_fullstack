import config from './../config/config'
import app from './express'
import mongoose from 'mongoose'

app.listen(config.port, (err) => {
    if (err) {
        console.log(err)
    }
    console.info('Server listen on port %s.', config.port)
})

mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri,  
                {useNewUrlParser: true} , 
                (err) => {
                    if(!err) {
                        console.log("connecting sucessfully", config.mongoUri)
                    }
                }
)

mongoose.connection.on('error' , () => {
    throw new Error(`Unable to connect to database: ${config.mongoUri}`)
})