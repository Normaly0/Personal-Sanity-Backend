import { defineType, defineField } from 'sanity';


export const artistType = defineType({
    name: 'artist',
    title: 'Artist',
    type: 'document',
    fields: [
        defineField({
            name: 'artist_name',
            type: 'string'
        })
    ]
})