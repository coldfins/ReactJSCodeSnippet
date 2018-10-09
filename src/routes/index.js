import { connect } from 'react-redux';
import {
  showCTA,
  showQuestionnaire,
  showQuestionnaireIntro,
} from '../store/actions/pain';
import Routes from './Routes';

const mapStateToProps = state => ({
  questionnaireId: state.pain.questionnaireId,
  showCTA: state.pain.showCTA,
  showQuestionnaire: state.pain.showQuestionnaire,
  showQuestionnaireIntro: state.pain.showQuestionnaireIntro,
  visitedCTA: state.pain.visitedCTA,
});

const mapDispatchToProps = dispatch => ({
  showCTAAction: (toggle, visitedCTA) => dispatch(showCTA(toggle, visitedCTA)),
  showQuestionnaireAction: (id, toggle) => dispatch(showQuestionnaire(id, toggle)),
  showQuestionnaireIntroAction: toggle => dispatch(showQuestionnaireIntro(toggle)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
