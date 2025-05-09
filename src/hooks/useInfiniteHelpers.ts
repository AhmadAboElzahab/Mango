import { RefObject, useEffect, useRef } from 'react';

export const useAutoFetchIfShort = (
  dataLength: number,
  totalCount: number,
  fetchNextPage: () => void,
  hasNextPage: boolean,
  isFetching: boolean,
) => {
  const triggeredRef = useRef(false);

  useEffect(() => {
    if (triggeredRef.current || !hasNextPage || isFetching) return;

    const container = document.getElementById('data-container-scroll');
    if (!container) return;

    const isShort = container.scrollHeight <= container.clientHeight && dataLength < totalCount;

    if (isShort) {
      fetchNextPage();
      triggeredRef.current = true;
    }
  }, [dataLength, totalCount, fetchNextPage, hasNextPage, isFetching]);
};

export const useInfiniteScrollObserver = (
  sentinelRef: RefObject<HTMLDivElement | null>,
  fetchNextPage: () => void,
  isFetching: boolean,
  hasNextPage: boolean,
) => {
  useEffect(() => {
    const sentinel = sentinelRef.current;
    const container = document.getElementById('data-container-scroll');
    if (!sentinel || !container || !hasNextPage) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isFetching && hasNextPage) {
          fetchNextPage();
        }
      },
      {
        root: container,
        rootMargin: '300px',
      },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [sentinelRef, fetchNextPage, isFetching, hasNextPage]);
};
