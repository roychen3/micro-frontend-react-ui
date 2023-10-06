import {
  StyleProvider as MFUIStyleProvider,
  Button as MFUIButton,
} from 'micro-frontend-react-ui';
// import {
//   StyleProvider as MFUIStyleProvider,
//   Button as MFUIButton,
// } from 'micro-frontend-react-ui/es';
// import MFUIStyleProvider from 'micro-frontend-react-ui/es/StyleProvider';
// import MFUIButton from 'micro-frontend-react-ui/es/Button';
import type { StyleProviderProps } from 'micro-frontend-react-ui/es/StyleProvider';
import type { ButtonProps } from 'micro-frontend-react-ui/es/Button';
import { defaultTheme } from 'micro-frontend-react-ui/es/useTheme';
console.log('defaultTheme', defaultTheme)
export function StyleProvider(props: StyleProviderProps) {
  return <MFUIStyleProvider {...props} />;
}

export function Button(props: ButtonProps) {
  return <MFUIButton {...props} />;
}
