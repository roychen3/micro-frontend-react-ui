// import { StyleProvider, Button } from 'micro-frontend-react-ui';
import { StyleProvider, Button } from './components';

export default function RenderAllComponents() {
  return (
    <div>
      <h3>StyleProvider</h3>
      <StyleProvider theme={{ color: { primary: 'red' } }}>
        <Button
          primary
          onClick={() => {
            console.log('on provider primary click');
          }}
        >
          provider primary
        </Button>
      </StyleProvider>

      <h3>Button</h3>
      <div>
        <Button
          onClick={() => {
            console.log('on normal click');
          }}
        >
          normal
        </Button>
        <Button
          primary
          onClick={() => {
            console.log('on primary click');
          }}
        >
          primary
        </Button>
      </div>
    </div>
  );
}
