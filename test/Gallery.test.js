import ReactDOM from 'react-dom';
import Gallery from '../client/src/components/Gallery.jsx';

describe('Gallery rendering', () => {
  const wrapper = shallow(<Gallery />);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Gallery />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render Grid child component', () => {
    expect(wrapper.find(Grid)).toHaveLength(1);
  });
});

describe('Grid Component', () => {
  beforeEach(() => {
    const photos = ['http://www.google.com',
      'http://www.google.com',
      'http://www.google.com',
      'http://www.google.com',
      'http://www.google.com',
      'http://www.google.com',
      'http://www.google.com',
      'http://www.google.com',
      'http://www.google.com',
    ];
    const wrapper = shallow(<Gallery photos={photos} />);

    expect(wrapper).toMatchSnapshot();
  });
});
