import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  className,
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none tracking-wide uppercase';
  
  const variants = {
    primary: 'bg-ds-charcoal text-ds-white hover:bg-ds-charcoal/90 hover:shadow-lg',
    secondary: 'bg-ds-beige text-ds-charcoal hover:bg-ds-beige/90 hover:shadow-md',
    outline: 'border border-ds-charcoal text-ds-charcoal hover:bg-ds-charcoal hover:text-ds-white',
    ghost: 'text-ds-charcoal hover:bg-ds-beige/20',
  };

  const sizes = {
    sm: 'h-9 px-4 text-xs',
    md: 'h-11 px-8 text-sm',
    lg: 'h-14 px-10 text-base',
  };

  const classes = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    if (href.startsWith('http')) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
