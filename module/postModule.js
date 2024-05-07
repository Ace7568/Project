const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, ref:post,
        ref:"users"
    },
    contant: String,
    likes:[
        {
            types: mongoose.Schema.Types.ObjectId, ref: "users"
        }
    ]
},{timestamps: true})

const userCollection = mongoose.model('post', postSchema);

// module.exports = {
//     userCollection,
//     create: (field)=>{
//         const user = new userCollection(field)
//         return user.save()
//     }
// }