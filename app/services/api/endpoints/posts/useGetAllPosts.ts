// import { getData } from '@/services/_api';
import { getData } from '@/app/services/api';
import { useQuery } from '@tanstack/react-query';

export const E_Posts = 'posts';

export interface AllPostsData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const getAllPosts = (): Promise<AllPostsData[]> => {
  const url = `/${E_Posts}`;
  return getData<AllPostsData[]>(url);
};

export const useGetAllPosts = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: [E_Posts],
    queryFn: getAllPosts,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
  return { data, isLoading, error };
};
