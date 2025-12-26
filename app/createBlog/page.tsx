"use client"
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import axios from 'axios'
import React, { useState } from 'react'

const CreateBlog = () => {
  const [name, setName] = useState("")
  const [category, setCategory] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [blogDes, setBlog] = useState("")
  const [avatar, setAvatar] = useState<File | null>(null)
  const [image, setImage] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)

  const getBase64 = (file: File) =>
    new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (err) => reject(err);
    });

  const handleClick = async () => {
    try {
      setLoading(true);

      // Upload blog image
      let imageUrl = '';
      if (image) {
        const imageBase64 = await getBase64(image);
        const res = await axios.post('/api/blog/upload', { imageBase64 });
        imageUrl = res.data.url;
      }

      // Upload avatar
      let avatarUrl = '';
      if (avatar) {
        const avatarBase64 = await getBase64(avatar);
        const res = await axios.post('/api/blog/upload', { imageBase64: avatarBase64 });
        avatarUrl = res.data.url;
      }

      // Save blog to MongoDB
      const res = await axios.post('/api/blog', {
        name,
        category,
        title,
        description,
        blogDes,
        image: imageUrl,
        avatar: avatarUrl,
      });

      alert("Blog created successfully 🎉");
      console.log(res.data);

      // Reset form
      setName(""); setCategory(""); setTitle(""); setDescription(""); setBlog("");
      setImage(null); setAvatar(null);

    } catch (error: any) {
      console.error(error);
      alert(error?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='bg-[#F9F5FF] min-h-screen py-10'>
      <div className="p-6 max-w-3xl mx-auto space-y-8">
        <h2 className='text-3xl md:text-6xl text-purple-950 font-bold text-center'>
          Create your Own Blog
        </h2>

        <Card className='py-10 px-6 space-y-4'>
          <div className="space-y-3">
            <h2 className='text-[12px] text-gray-500'>NAME*</h2>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="space-y-3">
            <h2 className='text-[12px] text-gray-500'>TITLE OF YOUR BLOG*</h2>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>

          <div className="flex justify-between gap-6">
            <div className="space-y-3 w-full">
              <h2 className='text-[12px] text-gray-500'>CATEGORY*</h2>
              <Input value={category} onChange={(e) => setCategory(e.target.value)} />
            </div>

            <div className="space-y-3 w-full">
              <h2 className='text-[12px] text-gray-500'>YOUR PHONE NUMBER*</h2>
              <Input />
            </div>
          </div>

          <div className="space-y-3">
            <h2 className='text-[12px] text-gray-500'>BRIEF DESCRIPTION*</h2>
            <Input value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>

          <div className="space-y-3">
            <h2 className='text-[12px] text-gray-500'>BLOG DESCRIPTION*</h2>
            <Textarea value={blogDes} onChange={(e) => setBlog(e.target.value)} />
          </div>

          <div className="space-y-3">
            <h2 className='text-[12px] text-gray-500'>BLOG IMAGE*</h2>
            <Input type='file' onChange={(e) => setImage(e.target.files![0])} />
          </div>

          <div className="space-y-3">
            <h2 className='text-[12px] text-gray-500'>YOUR PICTURE*</h2>
            <Input type='file' onChange={(e) => setAvatar(e.target.files![0])} />
          </div>

          <Button
            onClick={handleClick}
            variant='secondary'
            className='border border-purple-500 bg-purple-900 hover:text-purple-900 text-white w-full py-6'
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit your Blog!'}
          </Button>
        </Card>
      </div>
    </div>
  )
}

export default CreateBlog
