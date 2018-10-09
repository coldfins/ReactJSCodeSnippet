import { connect } from 'react-redux';
import { fetchProviders } from '../../store/actions/providers';
import { showCTA, showQuestionnaireIntro } from '../../store/actions/pain';
import Home from './Home';

const matchStateToProps = (state, ownProps) => ({
  providers: state.providers.providers,
  questionnaireId: ownProps.match.params.id,
  visitedCTA: state.pain.visitedCTA,
});

const mapDispatchToProps = dispatch => ({
  fetchProviders: options => dispatch(fetchProviders(options)),
  showCTA: (toggle, visitedCTA) => dispatch(showCTA(toggle, visitedCTA)),
  showQuestionnaireIntro: toggle => dispatch(showQuestionnaireIntro(toggle)),
});

export default connect(matchStateToProps, mapDispatchToProps)(Home);
