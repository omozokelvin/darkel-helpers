import React from 'react';
export interface IButtonProps
  extends React.DetailedHTMLProps<
    React.HtmlHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  backgroundColor?: string;
  color?: string;
  children?: React.ReactNode;
}

export function Button(props: IButtonProps) {
  const { backgroundColor, color, children, style, ...theRest } = props;

  let _style: React.CSSProperties = style || {};

  /** Override default styles */
  if (backgroundColor) {
    _style.backgroundColor = backgroundColor;
  }

  if (color) {
    _style.color = color;
  }

  return (
    <button style={_style} {...theRest}>
      {children}
    </button>
  );
}
