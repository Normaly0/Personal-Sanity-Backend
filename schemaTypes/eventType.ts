import {defineField, defineType} from 'sanity'

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  groups: [
    {name: 'details', title: 'Details'},
    {name: 'editorial', title: 'Editorial'},
  ],
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      group: 'details'
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'name'},
      hidden: ({document}) => !document?.name,
      group: 'details'
    }),
    defineField({
        name: 'eventType',
        type: 'string',
        options: {
          list: ['in-person', 'virtual'],
          layout: 'radio',
        },
    }),  
    defineField({
      name: 'date',
      type: 'datetime',
    }),
    defineField({
      name: 'doorsOpen',
      type: 'number',
      description: 'Number of minutes before the start time for admission',
    }),
    defineField({
      name: 'venue',
      type: 'reference',
      to: [{type: 'venue'}],
    }),
    defineField({
      name: 'headline',
      type: 'reference',
      to: [{type: 'artist'}],
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'details',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'tickets',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "headline.name",
      media: "image",
    },
  },
  
})