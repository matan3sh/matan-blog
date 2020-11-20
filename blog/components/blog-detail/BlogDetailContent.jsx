import BlockContent from '@sanity/block-content-to-react';
import HighlightCode from 'components/blog-detail/BlogDetailHighlightCode';

const serializers = {
  types: {
    code: ({ node: { language, code, filename } }) => (
      <HighlightCode language={language}>
        {code}
        <div className='code-filename'>{filename}</div>
      </HighlightCode>
    ),
  },
};

const BlogDetailContent = ({ content }) => (
  <BlockContent
    imageOptions={{ w: 320, h: 240, fit: 'max' }}
    serializers={serializers}
    blocks={content}
  />
);

export default BlogDetailContent;
