import React from 'react';

type Props = {
  open: boolean;
  children: React.ReactNode;
  onBackdrop: () => void;
};

export default function Dialog(props: Props) {
  const { open, children, onBackdrop } = props;

  if (!open) {
    return null;
  }

  return (
    <div
      onClick={onBackdrop}
      onKeyDown={onBackdrop}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100vw',
        height: '100vh',
        overflow: 'auto',
        backgroundColor: 'rgba(0,0,0,0.4)',
        zIndex: 50,
      }}
    >
      {children}
    </div>
  );
}
