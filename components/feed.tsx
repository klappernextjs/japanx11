"use client"

import { useState } from "react"
import { CreatePost } from "@/components/create-post"
import { PostCard } from "@/components/post-card"
import { dummyPosts } from "@/lib/dummy-data"
import { Post } from "@/lib/types"

export function Feed() {
  const [posts, setPosts] = useState<Post[]>(dummyPosts)

  const handleNewPost = (newPost: Post) => {
    console.log("Attempting to add new post:", newPost)
    setPosts(prevPosts => {
      const newPosts = [newPost, ...prevPosts]
      console.log("Updated posts array:", newPosts)
      return newPosts
    })
  }

  console.log("Current posts in Feed:", posts) // Debug log

  return (
    <div className="space-y-4 w-full max-w-2xl mx-auto">
      <CreatePost onPostCreated={handleNewPost} />
      <div className="space-y-4">
        {posts && posts.length > 0 ? (
          posts.map((post: Post) => {
            console.log("Rendering post:", post) // Debug log
            return (
              <PostCard 
                key={post.id}
                id={post.id}
                author={post.author}
                content={post.content}
                timestamp={post.timestamp}
                stats={post.stats}
                challenge={post.challenge}
                mediaUrls={post.mediaUrls}
              />
            )
          })
        ) : (
          <div className="text-center py-8 text-gray-500">
            No posts yet
          </div>
        )}
      </div>
    </div>
  )
}