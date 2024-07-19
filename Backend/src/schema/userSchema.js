const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    mobileNumber:{
        type: Number,
        required: true,

    },
    email:{
        type: String,
        required: true,
    }
},{timestamps: true})

export const User = mongoose.model("User", userSchema)