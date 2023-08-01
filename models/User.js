const {Schema, model } = require("mongoose");

const usersSchema = new Schema(
    {
       username: {
        type: String,
        required: true,
        unique: true,
        trim: true
       },
       email: {
        type: String,
        required: true,
        unique: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Nice try! but Invalid."]
       }, 
       thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Thought"
        }
       ],
       friends: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
       ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
)

usersSchema.virtual("friendCount").get(function () {
    return this.friends.length;
})

const User = model("User", usersSchema);

module.exports = User;