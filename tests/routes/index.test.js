import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Routes from '../../src/routes/Routes';
import '../mocks/localStorage';

configure({ adapter: new Adapter() });

describe('<Routes />', () => {
  it('renders without crashing', () => {
    const tree = shallow(
      <Routes
        history={{}}
        location={{ pathname: '' }}
        match={{}}
        store={{
          getState: () => {},
        }}
        showCTA={false}
        showCTAAction={() => {}}
        showQuestionnaire={false}
        showQuestionnaireAction={() => {}}
        showQuestionnaireIntro={false}
        showQuestionnaireIntroAction={() => {}}
      />,
    );
    expect(tree).toMatchSnapshot();
  });
});
