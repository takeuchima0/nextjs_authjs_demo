// import BlogImage from '@/features/blog/components/BlogImage/BlogImage';
// import BlogList from '@/features/blog/components/BlogList/BlogList';
// import BlogCard from '@/features/blog/components/BlogCard/BlogCard';

// 名前空間import/exportで別途定義したindex.tsを参照
import * as Blog from '@/features/blog/components/index';

import React from 'react';

const BlogPage = () => {
  return (
    <div>
      <Blog.BlogImage />
      <Blog.BlogList />
      <Blog.BlogCard />
    </div>
  );
};

export default BlogPage;
