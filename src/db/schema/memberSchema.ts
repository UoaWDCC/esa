const mongoose = require('mongoose');
const { Schema } = mongoose;

const memberSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    }
});

export default mongoose.models.Member || mongoose.model("Member", memberSchema);;