const mongoose = require('mongoose')


// DB Setup (connect mongoose and instance of mongodb)
const connectDB = async()=>{
	try{
		const conn = mongoose.connect(process.env.DATABASE,{
			useUnifiedTopology:true,
			useNewUrlParser:true,
			useCreateIndex:true,
			
		})
		console.log(`DB is connected`)
	}
	catch(error){
		console.log(error)
		process.exit(1)
	}
}

module.exports = connectDB