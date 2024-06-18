---

# <img src="https://cdn3.emoji.gg/emojis/1893-palestine-flag.png" width="40" height="28" alt="Palestine Flag"> Palestine Support Kit

Palestine Support Kit is a simple and customizable banner component designed to show solidarity with Palestine on your website. The banner provides a message of support and includes a donation link, encouraging visitors to contribute to the cause.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)

## Features

- Display a banner with a message of solidarity with Palestine.
- Include a donation link with a customizable URL.
- Responsive design that works across various screen sizes.
- Close button to allow users to hide the banner.

## Preview Example

![Preview Image](https://i.imgur.com/NafRu3D.png)

## Installation

To install the Palestine Support Kit package, run:

```bash
npm install palestine-support-kit@latest
```

## Usage
# Reactjs:
```jsx
import React from 'react';
import { Banner } from 'palestine-support-kit';
import 'palestine-support-kit/dist/Banner.css';

const App = () => {
  return (
    <div>
      <Banner />
      {/* Your other application content */}
    </div>
  );
};

export default App;

```
# Nextjs:
```jsx
//Layout.jsx

import React from 'react';
import { Banner } from 'palestine-support-kit';
import 'palestine-support-kit/dist/Banner.css';

const Layout = ({ children }) => {
  return (
    <div>
      <Banner />
      <main>{children}</main>
      {/* Additional layout components */}
    </div>
  );
};

export default Layout;

```

## Credits

This package is maintained by [Oba1d Khan](https://github.com/Oba1d-Khan).
