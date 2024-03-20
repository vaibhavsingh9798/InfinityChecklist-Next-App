import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    title:{
        type:String
    },
    status:{
        type: Boolean,
        default : false
    }
})

export default mongoose.models.Todo ||  mongoose.model('Todo', todoSchema);