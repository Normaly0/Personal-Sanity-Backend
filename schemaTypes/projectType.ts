import { defineType, defineField } from 'sanity';

export const projectType = defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            validation: rule => rule.required()
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            validation: rule => rule.required(),
            options: {
                source: 'name'
            }
        }),
        defineField({
            name: 'link',
            type: 'url',
        }),
        defineField({
            name: 'type',
            type: 'string',
            options: {
                list: ['client', 'personal'],
                layout: 'radio'
            }
        }),
        defineField({
            name: 'image_teaser',
            type: 'image',
            validation: rule => rule.required()
        }),
        defineField({
            name: 'image',
            type: 'image',
            validation: rule => rule.required()
        }),
        defineField({
            name: 'tags',
            type: 'array',
            of: [{
                type: 'string'
            }]
        }),
        defineField({
            name: 'description',
            type: 'array',
            of: [
                {type: 'block'}
            ]
        }),
        defineField({
            name: 'frontend_tech',
            type: 'array',
            of: [
                {type: 'string'}
            ]
        }),
        defineField({
            name: 'backend_tech',
            type: 'array',
            of: [
                {type: 'string'}
            ]
        }),
        defineField({
            name: 'content',
            type: 'array',
            of: [
                {type: 'block'}
            ]
        })
    ]
})