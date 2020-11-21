import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export const useGetBlogs = (initialData) =>
  useSWR(`/api/blogs`, fetcher, { initialData });
