import React, { CSSProperties, InputHTMLAttributes } from 'react';
import { COLORS } from '../constants';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label?: string;
  error?: string | boolean;
  style?: CSSProperties;
};
export default function Textfield(props: Props) {
  const {
    id,
    label = '',
    placeholder = '',
    className,
    error,
    style,
    ...theRest
  } = props;
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        ...style,
      }}
    >
      <div
        style={{
          position: 'relative',
          zIndex: 0,
        }}
      >
        <input
          id={id}
          placeholder={placeholder}
          style={{
            height: '52px',
            borderBottomWidth: '1.5px',
            borderBottomColor: COLORS.neutral.dark.grey,
            color: COLORS.neutral.black,
            paddingInlineStart: '8px',
            width: '100%',
            fontSize: '0.875rem',
            lineHeight: '20px',
            display: 'block',
            backgroundColor: 'transparent',
          }}
          {...theRest}
        />
      </div>
      {error && <p className="error mb-2">{error}</p>}
    </div>
  );
}
