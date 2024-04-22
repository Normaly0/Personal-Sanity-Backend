import { defineType, defineField } from 'sanity';

export const projectOverviewType = defineType({
    name: 'project_overview',
    title: 'Project Overview',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            validation: rule => rule.required()
        }),
        defineField({
            name: 'intro_txt',
            type: 'array',
            of: [{type: 'block'}]
        })
    ]
})