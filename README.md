---

#  <img src='PNG/PS@2x.png?raw=true' width='21' height='15'>  Palestine Support Kit

This package provides a small set of components and utilities to support and raise awareness for the Palestinian cause.

## Installation

You can install the package via npm:

```bash
npm install palestine-support-kit
```

## Usage

### Banner Component

The `Banner` component displays a banner to show support for Palestine. It includes customizable variants for light and dark themes.

```jsx
import React from "react";
import { Banner } from "palestine-support-kit";

const App = () => {
  return (
    <div>
      <Banner /> {/* Default light variant */}
      <Banner variant="dark" /> {/* Dark variant */}
    </div>
  );
};

export default App;
```

## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development

## Contributing

Contributions are welcome! Feel free to open issues or pull requests.

## Credits

This package is maintained by [Oba1d Khan](https://github.com/Oba1d-Khan).
