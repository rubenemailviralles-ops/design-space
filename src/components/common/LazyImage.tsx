import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/utils/cn';

type Props = {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
  fetchPriority?: 'high' | 'low' | 'auto';
};

const LazyImage: React.FC<Props> = ({ src, alt, className, eager = false, fetchPriority = 'auto' }) => {
  const [visible, setVisible] = useState(eager);
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (eager) {
      setVisible(true);
      return;
    }
    if ('IntersectionObserver' in window && !eager) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisible(true);
              observer.disconnect();
            }
          });
        },
        { rootMargin: '200px' }
      );
      if (containerRef.current) observer.observe(containerRef.current);
      return () => observer.disconnect();
    } else {
      setVisible(true);
    }
  }, []);

  return (
    <div ref={containerRef} className={cn('relative', className)}>
      {!loaded ? (
        <div className="absolute inset-0 bg-ds-beige/30 animate-pulse" />
      ) : null}
      {visible ? (
        <img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          fetchpriority={fetchPriority}
          onLoad={() => setLoaded(true)}
          className={cn(
            'w-full h-full object-cover transition-opacity duration-500',
            loaded ? 'opacity-100' : 'opacity-0'
          )}
        />
      ) : null}
    </div>
  );
};

export default LazyImage;
