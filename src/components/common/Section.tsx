import React from 'react';
import { cn } from '@/utils/cn';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  background?: 'white' | 'beige' | 'grey' | 'charcoal';
  fullWidth?: boolean;
}

const Section: React.FC<SectionProps> = ({
  id,
  className,
  children,
  background = 'white',
  fullWidth = false,
}) => {
  const bgColors = {
    white: 'bg-ds-white',
    beige: 'bg-ds-beige/30',
    grey: 'bg-ds-grey/10',
    charcoal: 'bg-ds-charcoal text-ds-white',
  };

  return (
    <section
      id={id}
      className={cn(
        'py-20 md:py-32',
        bgColors[background],
        className
      )}
    >
      <div className={cn('mx-auto px-6', fullWidth ? 'w-full' : 'container')}>
        {children}
      </div>
    </section>
  );
};

export default Section;
