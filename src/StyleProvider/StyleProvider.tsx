import React from 'react';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import type {Options} from '@emotion/cache';

import { defaultTheme }  from '../useTheme'
import type {Theme}  from '../useTheme'

export interface StyleProviderProps extends Omit<Options, 'key'> {
  theme?: Theme;
  namespace?: string;
  children: React.ReactNode;
}
const StyleProvider = ({
  theme = defaultTheme,
  namespace = 'micro-frontend-react-ui',
  children,
  ...props
}: StyleProviderProps) => {
  const myCache = createCache({
    key: namespace,
    ...props,
  });

  return (
    <CacheProvider value={myCache}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CacheProvider>
  );
};

export default StyleProvider;
