export default {
    name: 'pricing',
    title: 'Pricing',
    type: 'document',
    fields: [
    {
        name: 'title',
        title: 'Title',
        type: 'string'
    },
    {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        description: 'Some frontend will require a slug to be set to be able to show the project',
        options: {
        source: 'title',
        maxLength: 96
        }
    }, 
    {
        name: 'publishedAt',
        title: 'Published at',
        description: 'You can use this field to schedule projects where you show them',
        type: 'datetime'
    },
    {
        name: 'price',
        title: 'Price',
        type: 'string'
    },
    {
        name: 'excerpt',
        title: 'Excerpt',
        type: 'blockText'
    },
    {
        name: 'body',
        title: 'Body',
        type: 'blockContent'
    },
    {
        name: 'relatedServices',
        title: 'Related services',
        type: 'array',
        of: [{ type: 'reference', to: { type: 'service' } }]
    },
    {
        name: 'mainImage',
        title: 'Main image',
        type: 'mainImage'
    },
    ],
    preview: {
    select: {
        title: 'title',
        price: 'price',
        excerpt: 'excerpt'
    },
    prepare ({ title = 'No title', publishedAt, image }) {
        return {
        title,
        subtitle: publishedAt
            ? new Date(publishedAt).toLocaleDateString()
            : 'Missing publishing date',
        media: image
        }
    }
    }
    }
