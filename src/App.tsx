import React, { useState } from 'react';
import { MobileSelectDialog } from './components';
import { COLORS } from './constants';

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <main>
      <button
        onClick={() => setOpen(true)}
        style={{
          paddingBlock: 8,
          paddingInline: 32,
          borderRadius: 8,
          backgroundColor: COLORS.brand.blue,
          color: COLORS.neutral.white,
        }}
      >
        Open
      </button>

      <MobileSelectDialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        country={null}
        onSelect={(country) => {
          alert(JSON.stringify(country, null, 2));
        }}
      />
    </main>
  );
}
