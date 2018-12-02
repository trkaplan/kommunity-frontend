import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Need to configure the enzyme adapter before running react tests
configure({ adapter: new Adapter() });
