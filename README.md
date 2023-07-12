# darkel-helpers

[![npm version](https://badge.fury.io/js/darkel-helpers.svg)](https://www.npmjs.com/package/darkel-helpers)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/your-username/darkel-helpers/blob/main/LICENSE)

A collection of helpful utilities and components for React Web Development.

## Installation

```bash
npm install darkel-helpers
```

## Usage

```tsx
import React, { useState } from 'react';
import { MobileSelectDialog } from 'darkel-helpers';

const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] =
    (useState < Country) | (null > null);

  function closeHandler() => {
    setOpen(false);
  }

  function selectedHandler(country: Country|null) {
    alert(JSON.stringify(country, null, 2));
  }

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Select Dialog</button>

      <MobileSelectDialog
        open={isOpen}
        onClose={closeHandler}
        country={null}
        onSelect={selectedHandler}
      />
    </div>
  );
};

export default MyComponent;
```

## Preview

![MobileSelectDialog](https://res.cloudinary.com/dvhex1r78/image/upload/v1689189654/country-select-screenshot_zziudh.png)
