import { defineCollection, defineConfig } from '@content-collections/core';
import {
  createMetaSchema,
  createDocSchema,
  transformMDX
} from '@fumadocs/content-collections/configuration';
import { remarkImage, rehypeCode } from 'fumadocs-core/mdx-plugins';

const projects = defineCollection({
  name: 'projects',
  directory: 'content/projects',
  include: '**/*.mdx',
  schema: (z) => {
    const docSchema = createDocSchema(z);
    return {
      ...docSchema,
      cover: z.string().optional(),
      website: z.string().optional(),
      github: z.string().optional(),
      tags: z
        .array(
          z.object({
            label: z.string()
          })
        )
        .optional(),
      date: z.string().date().or(z.date()).optional()
    };
  },
  transform: (document, context) =>
    transformMDX(document, context, {
      remarkPlugins: [remarkImage],
      rehypePlugins: [rehypeCode],
    }),
});

const projectMetas = defineCollection({
  name: 'projectMeta',
  directory: 'content/projects',
  include: '**/meta.json',
  parser: 'json',
  schema: createMetaSchema
});

const blog = defineCollection({
  name: 'blog',
  directory: 'content/blog',
  include: '**/*.mdx',
  schema: (z) => {
    const docSchema = createDocSchema(z);
    return {
      ...docSchema,
      cover: z.string().optional(),
      author: z.string(),
      tags: z
        .array(
          z.object({
            label: z.string()
          })
        )
        .optional(),
      date: z.string().date().or(z.date()).optional()
    };
  },
  transform: (document, context) =>
    transformMDX(document, context, {
      remarkPlugins: [remarkImage],
      rehypePlugins: [rehypeCode]
    }),
});

const blogMetas = defineCollection({
  name: 'blogMeta',
  directory: 'content/blog',
  include: '**/meta.json',
  parser: 'json',
  schema: createMetaSchema
});

export default defineConfig({
  collections: [projects, projectMetas, blog, blogMetas]
});
