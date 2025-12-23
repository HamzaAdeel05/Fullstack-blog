import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import ImageCard from "./../../public/image/ImageCard.svg"
import Image from "next/image";
import Avatar from "./../../public/image/Avatar.svg"
import bg from "./../../public/image/bg.svg"

import React from "react";

const Cards = () => {
    const Blogs =
        [
            {
                "category": "Design",
                "title": "UX review presentations",
                "description": "How do you create compelling presentations that wow your colleagues and impress your managers?",
                "author": "Olivia Rhye",
                "date": "20 Jan 2022"
            },
            {
                "category": "Product",
                "title": "Migrating to Linear 101",
                "description": "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
                "author": "Phoenix Baker",
                "date": "19 Jan 2022"
            },
            {
                "category": "Software Engineering",
                "title": "Building your API Stack",
                "description": "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
                "author": "Lana Steiner",
                "date": "18 Jan 2022"
            },
            {
                "category": "Management",
                "title": "Bill Walsh leadership lessons",
                "description": "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
                "author": "Alec Whitten",
                "date": "17 Jan 2022"
            },
            {
                "category": "Product",
                "title": "PM mental models",
                "description": "Mental models are simple expressions of complex processes or relationships.",
                "author": "Demi Wilkinson",
                "date": "16 Jan 2022"
            },
            {
                "category": "Design",
                "title": "What is Wireframing?",
                "description": "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
                "author": "Candice Wu",
                "date": "15 Jan 2022"
            },
            {
                "category": "Design",
                "title": "How collaboration makes us better designers",
                "description": "Collaborating with other designers can help you grow and learn new skills.",
                "author": "Natali Craig",
                "date": "14 Jan 2022"
            },
            {
                "category": "Product",
                "title": "Our top 10 Javascript frameworks to use",
                "description": "JavaScript frameworks are essential for building modern web applications.",
                "author": "Drew Cano",
                "date": "13 Jan 2022"
            },
            {
                "category": "Customer Success",
                "title": "Podcast: Creating a better CX Community",
                "description": "Learn how to build a community that supports your customers and your business.",
                "author": "Orlando Diggs",
                "date": "12 Jan 2022"
            }
        ]
    return (
        <div
            className=" bg-no-repeat"
            style={{ backgroundImage: "url('/image/bg.svg')" }}
        >


            <div className=" mx-auto max-w-350 ">
                <div className="grid md:grid-cols-3 gap-8 px-5">
                    {Blogs.map((blog) => (
                        <Card key={blog.date} className="px-5  ">
                            <Image alt="card" src={ImageCard} className="w-full" />
                            <h3 className="text-sm text-purple-700 font-medium">{blog.category}</h3>
                            <div className="flex justify-between">
                                <h2 className="text-2xl font-medium">{blog.title}</h2>
                                <ArrowUpRight />
                            </div>
                            <h2 className="text-gray-500">{blog.description}</h2>
                            <div className="">
                                <div className="flex gap-2 items-center">
                                    <Image src={Avatar} alt="Avatar" />
                                    <div className="text-sm">
                                        <h2 className="font-medium">{blog.author}</h2>
                                        <p className="text-gray-500">{blog.date}</p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Cards;
