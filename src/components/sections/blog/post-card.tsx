import React from 'react';
import { CardContent, CardFooter, Card } from '@/components/ui/card';
import { Button, buttonVariants } from '@/components/ui/button';

import Link from 'next/link';
import Image from 'next/image';

import { Project } from '@/types/project';
import { ArrowRight, GithubIcon, GlobeIcon, InfoIcon } from 'lucide-react';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';

import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Post } from '@/types/post';

interface PostCardProps extends Post {
  href: string;
  thumbnail?: string;
  className?: string;
}

function PostCard({
  title,
  description,
  thumbnail,
  tags,
  href,
  className
}: PostCardProps) {
  return (
    <Card
      className={cn(
        'group relative flex flex-row justify-between overflow-hidden rounded-md',
        className
      )}
    >
      <CardContent className="flex p-0 w-1/3 items-center justify-center">
        <Image
          src={thumbnail || '/placeholder.svg'}
          alt={`Image of ${title}`}
          width={1024}
          height={768}
          className="object-cover h-full"
        />
      </CardContent>
      <CardFooter className="flex flex-row w-2/3 items-center gap-4 p-4 md:p-6">
        <div className="flex flex-col w-full">
          <h3 className="text-xl">
            {title}
          </h3>
          <p className="text-sm">
            {description || ''}
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {tags?.map((tag, index) => (
              <Badge key={`project-tag_${index}`}>{tag.label}</Badge>
            ))}
          </div>
        </div>
        <div className="flex items-center w-fit">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  className="z-[2] rounded-md border"
                  asChild
                >
                  <Link href={href}>
                    <ArrowRight />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Read</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardFooter>
      <Link href={href} className="z-1 absolute inset-0 block" />
    </Card>
  );
}

export default PostCard;
