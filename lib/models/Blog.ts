import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        title: { type: String, required: true },
        category: { type: String, required: true },
        blogDes: { type: String, required: true },
        avatar: { type: String, },
        description: { type: String, required: true },
        image: { type: String,  },

    },{
        timestamps:true,
    }
);
export default mongoose.models.Blog || mongoose.model("Blog",BlogSchema)