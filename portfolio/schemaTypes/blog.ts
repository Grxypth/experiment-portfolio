import {defineField, defineType} from 'sanity'
import {defineArrayMember } from 'sanity'

export const blogType = defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title of the article',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug of the blog article',
      options:{
        source:'title'
      }
    }),
    defineField({
      name: 'titleImage',
      type: 'image',
      title: 'Title Image',
    }),
    defineField({
      name: 'smallDescription',
      type: 'text',
      title: 'Small Description',
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [{type: 'block'},
        defineArrayMember({
          type: 'code',
        }),
      ],
    }),
],
})