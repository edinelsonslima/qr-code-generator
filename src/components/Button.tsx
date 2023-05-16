import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface ButtonProps
  extends Omit<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    'type'
  > {
  htmlType?: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >['type'];
  type?: 'default' | 'primary' | 'secondary' | 'tertiary';
  icon?: JSX.Element;
}

export default function Button({
  children,
  className,
  type = 'default',
  htmlType = 'button',
  icon,
  ...props
}: ButtonProps) {
  const defaultStyleButton = `transition-all text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed ${
    type === 'tertiary' ? 'fill-primary' : 'fill-white'
  }`;

  const styleButton = {
    primary: `bg-primary hover:bg-primary/80 active:bg-primary ${defaultStyleButton}`,
    secondary: `bg-secondary hover:bg-secondary/80 active:bg-secondary ${defaultStyleButton}`,
    tertiary: `bg-transparent border border-primary !text-primary hover:bg-secondary/10 active:bg-secondary/40 ${defaultStyleButton}`,
    default: `bg-secondary/70 p-2 hover:bg-primary active:bg-secondary ${defaultStyleButton}`,
  };

  return (
    <button
      type={htmlType}
      {...props}
      className={`flex justify-center items-center gap-2 ${styleButton[type]} ${className}`}
    >
      {children}

      {icon && React.cloneElement(icon, { className: 'h-4' })}
    </button>
  );
}
