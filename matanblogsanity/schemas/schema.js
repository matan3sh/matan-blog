// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    {
      name: 'author',
      type: 'document',
      title: 'Author',
      fields: [
        { name: 'name', type: 'string', title: 'Name' },
        { name: 'avatar', type: 'image', title: 'Avatar' },
      ],
    },
    {
      name: 'blog',
      type: 'document',
      title: 'Blog',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
          validation: (Rule) => Rule.required().min(5),
        },
        { name: 'subtitle', type: 'string', title: 'Subtitle' },
        {
          name: 'coverImage',
          type: 'image',
          options: { hotspot: true },
          title: 'Cover Image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Description',
            },
          ],
        },
        {
          name: 'content',
          type: 'array',
          title: 'Content',
          of: [
            { type: 'block' },
            {
              type: 'image',
              fields: [
                {
                  title: 'Position',
                  name: 'position',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Center', value: 'center' },
                      { title: 'Left', value: 'left' },
                      { title: 'Right', value: 'right' },
                    ],
                    layout: 'radio',
                    isHighlighted: true,
                  },
                },
                {
                  type: 'text',
                  name: 'alt',
                  title: 'Description',
                  options: { isHighlighted: true },
                },
              ],
              options: { hotspot: true },
            },
            { type: 'code', options: { withFilename: true } },
          ],
        },
        {
          name: 'date',
          type: 'datetime',
          title: 'Date',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'author',
          type: 'reference',
          title: 'Author',
          to: [{ type: 'author' }],
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'slug',
          type: 'slug',
          title: 'Slug',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
  ]),
});
