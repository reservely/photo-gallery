import ReactDOM from 'react-dom';
import Gallery from '../client/src/components/Gallery.jsx';

describe('Gallery rendering', () => {
  const wrapper = shallow(<Gallery />);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Gallery />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('calls componentDidMount', () => {
    jest.spyOn(Gallery.prototype, 'componentDidMount')
    const wrapper = shallow(<Gallery />)
    expect(Gallery.prototype.componentDidMount.mock.calls.length).toBe(1)
  })

  it('should render Gallery child component', () => {
    expect(wrapper.find(Gallery)).toHaveLength(1);
  });
});
