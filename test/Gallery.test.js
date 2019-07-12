import ReactDOM from 'react-dom';
import Gallery from '../client/src/components/Gallery.jsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Gallery />, div);
  ReactDOM.unmountComponentAtNode(div);
});
