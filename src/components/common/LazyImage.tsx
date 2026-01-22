import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/utils/cn';

type Props = {
  src: string;
  alt: string;
  className?: string;
};

const LazyImage: React.FC<Props> = ({ src, alt, className }) => {
  const [visible, setVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if ('IntersectionObserver' in window) {
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
      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    } else {
      setVisible(true);
    }
  }, []);

  return (
    <div className={cn('relative', className)}>
      {!loaded && (
        <div className="absolute inset-0 bg-ds-beige/30 animate-pulse" />
      )}
      {visible && (
        <img
          ref={ref}
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={cn(
            'w-full h-full object-cover transition-opacity duration-500',
            loaded ? 'opacity-100' : 'opacity-0'
          )}
        />
      )}
    </div>
  );
};

export default LazyImage;
