import React from 'react';
import ProjectCard from './post-card';

import MotionWrap from '@/components/motion-wrap';

import { blog } from '@/app/source';
import PostCard from './post-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';


function Blog() {
  const posts = [...blog.getPages()].sort(
    (a, b) =>
      new Date(b.data.date ?? b.file.name).getTime() -
      new Date(a.data.date ?? a.file.name).getTime()
  );

  return (
    <section className="w-full py-16" id="posts">
      <div className="space-y-6 px-4 md:px-6">
        <h2 className="text-4xl sm:text-5xl md:text-5xl">
          words
        </h2>
        <div className="mt-6 grid w-full grid-cols-1 md:grid-rows-[repeat(min(3,length),1fr)] gap-4">
          {posts.slice(0,3).map((post, index) => (
            <PostCard
              title={post.data.title}
              href={post.url}
              description={post.data.description}
              key={`post_${index}`}
              tags={post.data.tags}
              thumbnail={post.data.cover}
              date={new Date(post.data.date ?? post.file.name)}
            />
          ))}
        </div>
        <Button asChild>
          <Link href="/blog">more words</Link>
        </Button>
      </div>
    </section>
  );
}

export default Blog;
