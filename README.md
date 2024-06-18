---

# <img src="https://cdn3.emoji.gg/emojis/1893-palestine-flag.png" width="40" height="28" alt="Palestine Flag"> Palestine Support Kit

Palestine Support Kit delivers components designed to show solidarity with Palestine on your website. The banner provides a message of support and includes a donation link, encouraging visitors to contribute to the cause.

## Table of Contents

- [ Palestine Support Kit](#-palestine-support-kit)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Banner Component](#banner-component)
    - [ReactJS/NextJS:](#reactjsnextjs)
  - [Banner Variants](#banner-variants)
    - [Example Usage:](#example-usage)
  - [Toast Component](#toast-component)
  - [Credits](#credits)

## Installation

To install the Palestine Support Kit package, run:

```bash
npm install palestine-support-kit@latest
```

## Banner Component

### ReactJS/NextJS:

```jsx
import React from "react";
import { Banner } from 'palestine-support-kit';
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

## Banner Variants

You can customize the appearance of the `Banner` component by using the `variant` prop. There are three variants available:

- **dark**: Dark background (default).
- **light**: Light background.
- **gradient**: Gradient background.

### Example Usage:

```jsx
import React from "react";
import { Banner } from 'palestine-support-kit';
import "palestine-support-kit/dist/index.css";

const App = () => {
  return (
    <div>
      {/* Default variant */}
      <Banner />    {/* it dark by default i.e variant="dark" */}

      {/* Light variant */}
      <Banner variant="light" />

      {/* Gradient variant */}
      <Banner variant="gradient" />

      {/* Your other application content */}
    </div>
  );
};

export default App;
```

**_Banner Preview:_**

![Preview Image](https://i.imgur.com/L9XOCil.png)

## Toast Component

```jsx

import React from "react";
import { PalestineToast } from "palestine-support-kit";
import "palestine-support-kit/dist/index.css";

const page = ({ children }) => {
  return (
    <div>
      <PalestineToast />  
      <main>{children}</main>
      {/* Additional layout components */}
    </div>
  );
};

export default page;
```

**_Toast Preview:_**

![Preview Image](https://i.imgur.com/JUww8ov.png)

## Credits

This package is maintained by [Oba1d Khan](https://github.com/Oba1d-Khan).

Thank you for using Palestine Support Kit. Your support and contributions help us continue to advocate for important causes. If you have any questions or feedback, please don't hesitate to reach out.

---