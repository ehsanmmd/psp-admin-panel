'use client';
import Loading from '@/app/loading';
import { useGetAllPosts } from '@/app/services/api/endpoints/posts/useGetAllPosts';

export default function List() {
  const { data, isLoading, error } = useGetAllPosts();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data) {
    return null;
  }

  return (
    <div>
      {data.map((item) => (
        <div key={item.id} className="bg-white m-8 p-4 rounded-md">
          <h2 className="font-bold mb-2">{item.title}</h2>
          {item.body}
        </div>
      ))}
    </div>
  );
}
