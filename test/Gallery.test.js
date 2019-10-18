import ReactDOM from 'react-dom';
import Gallery from '../client/src/components/Gallery.jsx';
import Grid from '../client/src/components/Grid.jsx';

describe('Gallery rendering', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Gallery />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // it('calls componentDidMount', () => {
  //   jest.spyOn(Gallery.prototype, 'componentDidMount')
  //   expect(Gallery.prototype.componentDidMount.mock.calls.length).toBe(1);
  // })

  // it('should render 1 Grid child component', () => {
  //   const wrapper = shallow(<Gallery />);
  //   expect(wrapper.find(Grid)).toHaveLength(1);
  // });

  it('simulates click events', () => {
    const mockCallBack = jest.fn();

    const wrapper = shallow(<Grid photos={photos} onClick={mockCallBack} />);
    wrapper.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);

  });
});
