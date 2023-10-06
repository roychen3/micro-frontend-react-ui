import {
  StyleProvider as MFUIStyleProvider,
  Button as MFUIButton,
} from 'micro-frontend-react-ui';
import type { StyleProviderProps } from 'micro-frontend-react-ui/dist/StyleProvider';
import type { ButtonProps } from 'micro-frontend-react-ui/dist/Button';

export function StyleProvider(props: StyleProviderProps) {
  return <MFUIStyleProvider {...props} />;
}

export function Button(props: ButtonProps) {
  return <MFUIButton {...props} />;
}
