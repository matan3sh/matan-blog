import BlockContent from '@sanity/block-content-to-react';
import HighlightCode from 'components/blog-detail/BlogDetailHighlightCode';
import { urlFor } from 'lib/api';

const serializers = {
  types: {
    code: ({ node: { language, code, filename } }) => (
      <HighlightCode language={language}>
        {code}
        <div className='code-filename'>{filename}</div>
      </HighlightCode>
    ),
    image: ({ node: { asset, alt, position = 'center' } }) => (
      <div className={`blog-image blog-image-${position}`}>
        <img src={urlFor(asset).height(300).fit('max').url()} alt={alt} />
        <div className='image-alt'>{alt}</div>
      </div>
    ),
  },
};

const BlogDetailContent = ({ content }) => (
  <BlockContent serializers={serializers} blocks={content} />
);

export default BlogDetailContent;
