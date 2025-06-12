import {DocumentTextIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required().max(200)
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        })
      ]
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'AI Applications', value: 'AI Applications'},
          {title: 'Deep Learning', value: 'Deep Learning'},
          {title: 'Data Science', value: 'Data Science'},
          {title: 'Machine Learning', value: 'Machine Learning'},
          {title: 'Automation', value: 'Automation'},
          {title: 'DevOps', value: 'DevOps'},
          {title: 'Tech Tutorial', value: 'Tech Tutorial'},
        ]
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'readTime',
      title: 'Read Time',
      type: 'string',
      placeholder: 'e.g., 5 min read',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'featured',
      title: 'Featured Post',
      type: 'boolean',
      description: 'Display this post in featured sections',
      initialValue: false
    }),
    defineField({
      name: 'mediumUrl',
      title: 'Medium Article URL',
      type: 'url',
      description: 'The URL to your Medium article for this post',
      validation: Rule => Rule.required().uri({
        scheme: ['http', 'https']
      })
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      description: 'This content is for reference only. Readers will be redirected to Medium.'
    })
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      category: 'category',
      featured: 'featured'
    },
    prepare(selection) {
      const {title, media, category, featured} = selection
      return {
        title: title,
        subtitle: `${category}${featured ? ' • Featured' : ''}`,
        media: media
      }
    }
  },
  orderings: [
    {
      title: 'Created Date, New',
      name: 'createdDateDesc',
      by: [
        {field: '_createdAt', direction: 'desc'}
      ]
    }
  ]
})
