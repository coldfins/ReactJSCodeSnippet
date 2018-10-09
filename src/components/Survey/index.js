import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  FlatButton, TextField, IconButton, FontIcon, LinearProgress,
} from 'material-ui';
import { transparent } from 'material-ui/styles/colors';
import MultiSelect from './MultiSelect';
import RadioOptions from './RadioOptions';
import DatePicker from './DatePicker';
import Dropdown from './Dropdown';
import Slider from './Slider';
import Message from './Message';
import Loading from '../Loading';
import icons from './icons';
import {} from '../../services/analytics';
import ConfirmCloseQuestionnaire from './ConfirmCloseQuestionnaire';

class Survey extends Component {
  constructor(props) {
    super(props);

    this.answer = [];
    this.answeredQuestions = new Set();
    this.answers = [];
    this.firstQuestion = {};
    this.state = {
      backable: false,
      confirmVisible: false,
      loading: false,
      nextable: false,
      progress: 0.001,
      question: {},
    };
  }

  componentWillMount() {
    const { fetchQuestionnaire } = this.props;
    fetchQuestionnaire().then(() => {
      const { questionnaire: { questions } } = this.props;
      this.firstQuestion = _.head(questions);
      this.updateStore(this.firstQuestion);
    });
  }

  onBack = () => {
    const previousQuestion = this.getPreviousQuestion();
    this.answer = this.answers.pop().answer;
    this.answeredQuestions.delete(previousQuestion.order);
    this.updateStore(previousQuestion);
  };

  onNext = () => {
    const { question } = this.state;
    this.setState({
      backable: false,
      nextable: false,
    });
    if (this.child) this.child.onSubmit();

    this.upsertAnswer({
      answer: this.answer,
      order: question.order,
    });
    this.answeredQuestions.add(question.order);

    if (window.analytics) {
      window.analytics.track('Questionnaire', {
        answer: this.answer,
        question: question.order,
      });
    }

    const nextQuestion = this.getNextQuestion();
    if (_.isNil(nextQuestion)) return this.submit();

    this.answer = null;
    return this.updateStore(nextQuestion);
  };

  onSelection = (value) => {
    if (_.isDate(value)) {
      this.answer = value;
      this.setState({ nextable: true });
    } else if (_.isNumber(value)) {
      this.answer = value;
      this.setState({ nextable: true });
    } else if (_.isNil(value) || _.isEmpty(value)) {
      this.answer = value;
      this.setState({ nextable: false });
    } else {
      this.answer = value;
      this.setState({ nextable: true });
      if (this.numberInput) {
        this.answer = value.target.value;
      }
    }
  };

  getNextQuestion = () => {
    const { router } = this.props;
    const { question } = this.state;
    const nextQuestion = this.getQuestion(question, this.answer);
    if (!_.isNil(router) && _.isNil(nextQuestion)) return router(this.answers);
    return nextQuestion;
  };

  getPreviousQuestion = () => {
    const { questionnaire } = this.props;
    if (_.isEmpty(this.answeredQuestions)) return null;
    const { questions } = questionnaire;
    const { router } = this.props;
    const answer = _.last(this.answers);
    const previousQuestion = questions.find(q => q.order === _.last([...this.answeredQuestions]));
    const question = this.getQuestion(previousQuestion, answer.answer);
    if (!_.isNil(router) && _.isNil(question)) return router(previousQuestion, false);
    return previousQuestion;
  };

  getQuestion = (question, answer) => {
    const { questionnaire: { questions } } = this.props;
    let nextQuestionOrder = question.order + 1;
    if (question.type === 'option') {
      nextQuestionOrder = question.options.find(option => option.key === answer).jumpsTo;
    } else if (question.type === 'multiselect' && Array.isArray(question.options)) {
      // NOTE: Does not handle complex logic of multistep allowing different routing
      nextQuestionOrder = question.options.find(option => option.key === answer[0]).jumpsTo;
    } else {
      nextQuestionOrder = question.jumpsTo;
    }
    const nextQuestion = questions.find(q => q.order === nextQuestionOrder);
    return nextQuestion;
  };

  getInputLength = (question) => {
    let inputLength;
    if (question.isZipcode) {
      inputLength = 5;
    } else if (question.isTextInput) {
      inputLength = -1;
    } else {
      inputLength = 2;
    }
    return inputLength;
  };

  submit = () => {
    const { advance, patient, submitAnswers } = this.props;
    this.setState({ loading: true }, () => {
      submitAnswers(patient, this.answers).then(() => {
        this.setState({ loading: false }, () => advance());
      }).catch(() => this.setState({ loading: false }));
    });
  };

  upsertAnswer = (answer) => {
    if (_.isNil(this.answers.find(a => a.order === answer.order))) {
      this.answers.push(answer);
    } else {
      this.answers.splice(_.findIndex(this.answers, { order: answer.order }), answer);
    }
  };

  updateStore = (question) => {
    const { questionnaire: { questions } } = this.props;
    const total = questions.length;
    const current = question.order;

    this.setState({
      backable: question.order !== this.firstQuestion.order,
      nextable: question.type === 'message' || this.answer,
      progress: (parseInt(current > 0 ? current : '1', 10) * 100) / parseInt(total, 10),
      question,
    });
  };

  handleEnterPress = (event) => {
    const { nextable } = this.state;
    if (event.key === 'Enter' && nextable) this.onNext();
  };

  handleToggleConfirmMessage = (confirmVisible) => {
    this.setState({ confirmVisible });
  };

  renderContent = question => (
    <div
      className={question.type === 'message' ? 'question-container-message' : 'question-container'}
    >
      <div
        key={question.order}
        className="question-text animated fadeIn"
      >
        {question.type === 'message' ? '' : question.label}
      </div>

      <div className="answer-container">
        {this.renderControls(question)}
      </div>
    </div>
  );

  renderControls = (question) => {
    const { options, optionsHintText, router } = this.props;

    switch (question.type) {
      case 'option':
        return (
          <RadioOptions
            key={question.order}
            onSelection={(v) => {
              this.onSelection(v);
              this.onNext();
            }}
            options={question.options}
          />
        );
      case 'input':
        return (
          <div
            className="option-text-field"
            key={question.order}
          >
            <TextField
              ref={(c) => { this.numberInput = c; }}
              hintText="Type your answer here"
              autoCapitalize="words"
              underlineStyle={{ borderColor: transparent }}
              underlineFocusStyle={{ borderColor: transparent }}
              onChange={value => this.onSelection(value)}
              onKeyPress={this.handleEnterPress}
              value={(_.isNil(this.answer)) ? '' : this.answer}
              maxLength={this.getInputLength(question)}
              className="input"
            />
          </div>
        );
      case 'date':
        return (
          <DatePicker
            key={question.order}
            onSelection={(v) => {
              this.onSelection(v);
              this.onNext();
            }}
            date={this.answer}
            maxDate={question.isDob ? moment().toDate() : moment().add(150, 'years').toDate()}
            minDate={question.isDob ? moment().subtract(150, 'years').toDate() : moment().toDate()}
          />
        );
      case 'multiselect': {
        return (
          <MultiSelect
            key={question.order}
            maxSelectedOptions={question.max > 0 ? question.max : null}
            onSelection={v => this.onSelection(v)}
            options={question.options}
            ref={(instance) => { this.child = instance; }}
            selectedOptions={this.answer || []}
          />
        );
      }
      case 'slider':
        return (
          <Slider
            key={question.order}
            icons={question.icons}
            max={question.max}
            min={question.min}
            onChange={v => this.onSelection(v)}
          />
        );
      case 'message':
        return (
          <Message
            key={question.order}
            title={question.title}
            text={question.text}
            subtext={question.subtext}
            Icon={_.isNil(router) ? icons[question.iconType] : null}
          />
        );
      case 'dropdown': {
        return (
          <div>
            <Dropdown
              hintText={optionsHintText}
              key={question.order}
              options={options}
              onChange={v => this.onSelection(v)}
              selectedOption={this.answer}
            />
            {question.child && (
              <div
                role="button"
                className="dropdown-child-container"
                tabIndex={-1}
                onClick={() => {
                  this.answer = 'none';
                  this.onNext();
                }}
                onKeyPress={() => {
                  this.answer = 'none';
                  this.onNext();
                }}
              >
                {question.child}
              </div>
            )}
          </div>
        );
      }
      default:
        return null;
    }
  };

  render() {
    const {
      backable,
      confirmVisible,
      loading,
      nextable,
      progress,
      question,
    } = this.state;
    const {
      loader: LoaderComponent,
      onCloseQuestionnaire,
    } = this.props;

    if (confirmVisible) {
      return (
        <ConfirmCloseQuestionnaire
          open={confirmVisible}
          onRequestClose={this.handleToggleConfirmMessage}
          onRequestCloseAll={onCloseQuestionnaire}
          progress={progress}
        />
      );
    }

    return (
      <div className="component-survey">
        <LoaderComponent loading={loading} />

        <div className="survey-header">
          <div className="progress-container">
            <LinearProgress
              className="questionnaire-progress"
              mode="determinate"
              value={progress}
              color="#3a55e6"
            />
          </div>

          <IconButton
            className="close-button"
            onClick={() => this.handleToggleConfirmMessage(true)}
            tooltip="close"
          >
            <FontIcon className="material-icons">
              close
            </FontIcon>
          </IconButton>
        </div>

        <div className="content">
          {this.renderContent(question)}
        </div>

        <div className="bottom-container">
          <div className="buttons-container">
            <div className="button-back">
              <FlatButton
                primary
                disabled={!backable}
                label="Back"
                onClick={() => this.onBack()}
                className={`back-button ${backable ? 'back-button-enable' : ''}`}
              />
            </div>

            <div className="button-next">
              <FlatButton
                primary
                disabled={question.type === 'message' ? false : !nextable}
                label="Next"
                onClick={() => this.onNext()}
                className={nextable ? 'next-button' : 'back-button'}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Survey.propTypes = {
  advance: PropTypes.func.isRequired,
  fetchQuestionnaire: PropTypes.func.isRequired,
  loader: PropTypes.func,
  onCloseQuestionnaire: PropTypes.func.isRequired,
  options: PropTypes.array,
  optionsHintText: PropTypes.string.isRequired,
  patient: PropTypes.object.isRequired,
  questionnaire: PropTypes.object,
  router: PropTypes.func,
  submitAnswers: PropTypes.func.isRequired,
};

Survey.defaultProps = {
  loader: Loading,
  options: [],
  questionnaire: {
    questions: [],
  },
  router: null,
};

export default Survey;
