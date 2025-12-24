import connect from "@/lib/db"
import Blogs from "@/lib/models/Blog";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        await connect();
        const blogs = await Blogs.find();
        return NextResponse.json(
            blogs, { status: 200 }
        )
    }
    catch (error: any) {
        console.error("Error in fetching Blog:", error);
        return NextResponse.json(
            { message: "Error in fetching Blogs", error: error.message }
            , { status: 500 }
        )
    }

}
export const POST = async (req: Request) => {
    try {
        await connect();
        const body = await req.json();
        const { name, title, description, image, blogDes, category, avatar } = body;
        if (!name || !title || !description || !image || !avatar || !blogDes || !category) {
            return NextResponse.json({
                message: "All fields are required"
            },
                {
                    status: 400
                })
        }
        const blog = await Blogs.create({
            name,
            title,
            description,
            image,
            blogDes,
            avatar,
            category
        }
        )
        return NextResponse.json({
            message: 'Blog created!', blog
        }, {
            status: 200
        });


    } catch (error: any) {
        console.error("Error in Creating Blog:", error);
        return NextResponse.json(
            { message: "Error in Creating Blogs", error: error.message }
            , { status: 500 }
        )
    }
}