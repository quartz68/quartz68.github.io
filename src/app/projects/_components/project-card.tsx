import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

import { InfoIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Project } from '@/types/project';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';


import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface ProjectCardProps extends Project {
  href: string;
  thumbnail?: string;
  className?: string;
}

function ProjectCard({
  title,
  description,
  href,
  thumbnail,
  tags,
  className
}: ProjectCardProps) {
  return (
    <Card
      className={cn(
        'relative flex h-full flex-col justify-between',
        className
      )}
    >
      <CardContent className="p-4 md:p-6">
        <div className="grid gap-2">
          <AspectRatio
            ratio={16 / 9}
            className="z-[2] mb-2 inline-block overflow-hidden rounded-md"
          >
            <Image
              src={thumbnail || '/placeholder.svg'}
              alt={`Image of ${title}`}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </AspectRatio>
          <h3 className="text-xl font-bold">
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
      </CardContent>
      <CardFooter className="flex items-center justify-end p-4 md:p-6">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                className="z-[2] rounded-md border"
                asChild
              >
                <Link href={href}>
                  <InfoIcon />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>More Details</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardFooter>
      <Link href={href} className="z-1 absolute inset-0 block" />
    </Card>
  );
}

export default ProjectCard;
