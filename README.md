# micro-frontend-react-ui

This react ui lib is for [micro-fronted](https://github.com/roychen3/micro-frontends) app.

## Installation

node v16.15.0

```bash
npm i micro-frontend-react-ui
```

## Usage

### Button

```javascript
import { Button } from 'micro-frontend-react-ui';

function Component() {
  return (
        <Button
          primary  // boolean | undefined;
        >
          Click Me
        </Button>
  );
}
```

### StyleProvider

```javascript
import { StyleProvider, Button } from 'micro-frontend-react-ui';

function Component() {
  return (
        <StyleProvider
          theme          // { colors: { primary: string } } | undefined
          nonce          // string | undefined
          stylisPlugins  // Array<StylisPlugin> | undefined
          namespace      // string | undefined
          container      // Node | undefined
          speedy         // boolean | undefined
          prepend        // boolean | undefined
          insertionPoint // HTMLElement | undefined
          children       // ReactNode | undefined
        >
          <Button>Click Me</Button>
        </StyleProvider>
  );
}
```

## License

[LICENSE](LICENSE)
