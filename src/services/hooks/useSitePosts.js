import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '../../masters/serviceMaster';
import { blogPosts } from '../../data/siteData';

// The reference website is CMS-rendered and did not expose a public JSON posts API.
// Cache the inspected page data with React Query until an approved API endpoint is supplied.
export function useSitePosts() {
  return useQuery({
    queryKey: queryKeys.posts(),
    queryFn: async () => blogPosts,
    staleTime: 5 * 60 * 1000,
  });
}
