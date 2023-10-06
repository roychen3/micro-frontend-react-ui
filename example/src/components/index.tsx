// import {
//   StyleProvider as MFUIStyleProvider,
//   Button as MFUIButton,
// } from 'micro-frontend-react-ui';
import MFUIStyleProvider from 'micro-frontend-react-ui/dist/es/StyleProvider';
import MFUIButton from 'micro-frontend-react-ui/dist/es/Button';
import type { StyleProviderProps } from 'micro-frontend-react-ui/dist/es/StyleProvider';
import type { ButtonProps } from 'micro-frontend-react-ui/dist/es/Button';
// import { defaultTheme } from 'micro-frontend-react-ui/dist/es/useTheme';
// console.log('defaultTheme', defaultTheme)
export function StyleProvider(props: StyleProviderProps) {
  return <MFUIStyleProvider {...props} />;
}

export function Button(props: ButtonProps) {
  return <MFUIButton {...props} />;
}
