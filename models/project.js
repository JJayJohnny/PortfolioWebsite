import mongoose, {Schema} from "mongoose"

const projectSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    github: {
        type: String
    },
    website: {
        type: String
    }

})

export default mongoose.models.Project || mongoose.model("Project", projectSchema)