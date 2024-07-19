const bandSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true,

    },
    price:{
        type: Number,
        required: true,
        default: 0
    },
    image:{
        type:String,
        required:true,
        unique: true,
    }
},{timestamps: true})

export const Band = mongoose.model("Band", bandSchema)
