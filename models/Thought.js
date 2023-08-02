const {Schema, model } = require("mongoose");
const reactionsSchema = require("./Reaction")


const thoughtsSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: time => new Date(time).toLocaleTimeString()
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionsSchema]

    },
   {
    toJSON: {
        getters: true
    }
   }
)

usersSchema.virtual("reactionsCount").get(function () {
    return this.reactions.length;
})

const Thought = model("Thought", thoughtsSchema)

module.exports = Thought