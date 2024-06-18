---

# <img src="https://cdn3.emoji.gg/emojis/1893-palestine-flag.png" width="40" height="28" alt="Palestine Flag"> Palestine Support Kit

Palestine Support Kit delievers components designed to show solidarity with Palestine on your website. The banner provides a message of support and includes a donation link, encouraging visitors to contribute to the cause.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## Preview Example

**_Banner component:_**

![Preview Image](https://i.imgur.com/L9XOCil.png)


**_Toast component:_**

![Preview Image](https://i.imgur.com/JUww8ov.png)



## Installation

To install the Palestine Support Kit package, run:

```bash
npm install palestine-support-kit@latest
```

## Usage

# Reactjs:

```jsx
import React from "react";
import { Banner } from 'palestine-support-kit' 
import "palestine-support-kit/dist/index.css";

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

import React from "react";
import { PalestineToast } from "palestine-support-kit";
import "palestine-support-kit/dist/index.css";

const Layout = ({ children }) => {
  return (
    <div>
      <PalestineToast/>  
      <main>{children}</main>
      {/* Additional layout components */}
    </div>
  );
};

export default Layout;
```

## Credits

This package is maintained by [Oba1d Khan](https://github.com/Oba1d-Khan).
