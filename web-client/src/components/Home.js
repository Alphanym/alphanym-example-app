
import React from "react";
import styled from 'styled-components';
import { connect } from "react-redux";
import { isEmpty } from 'lodash';

import { AlphanymField } from './Alphanym';
import { queryName, completeName, resetState } from '../actions'

const Contents = styled.div`
  width: 100%;
  max-width: 600px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: start;
  
  .Title {
    margin-bottom: 1em;
    font-size: 2.2em;
  }
  
  .Summary {
    margin-bottom: 1em;
    text-align: center;
    width: 100%;
  }
  
  .Wrapper {
    margin: 2em auto;
    width: 100%;
    max-width: 30em;
  }
  
  .SubmitButton {
    margin-top: 1em;
    margin: auto;
  }
`;

const Hello = styled.label`
  margin: 3em auto;
  font-weight: normal;
  font-size: 1.25em;
`;

const ResetButton = styled.button`
  align-self: flex-end;
`;

class Home extends React.Component {
  handleQuery(nameText) {
    console.log('query name', nameText);
    this.props.dispatch(queryName(nameText));
  }

  handleComplete(names) {
    this.props.dispatch(completeName(names));
  }

  handleReset() {
    this.props.dispatch(resetState());
  }

  handleFeedback(names) {
    console.log('feedback', names)
  }

  render() {
    // Set the font, to your app's native fonts
    const fontCssValue = "14px 'Open Sans'";

    const names = this.props.names;
    const hasNames = !isEmpty(names);

    return (
      <div>
        <Contents>
          <h1 className='Title'>Alphanym Example</h1>

          <p className='Summary'>This web application demonstrates a full stack integration
                                 with <a href='https://www.alphanym.com'>Alphanym</a>.</p>

          <div className='Wrapper'>
            <AlphanymField
             onQuery={ this.handleQuery.bind(this) }
             onComplete={ this.handleComplete.bind(this) }
             onFeedback={ this.handleFeedback.bind(this) }
             font={ fontCssValue }
             results={ this.props.queryResults }
             loading={ this.props.queryLoading }
             />
          </div>

          <Hello style={ {visibility: hasNames ? 'visible' : 'hidden'} }>Hello { names.betanym }!</Hello>

          <ResetButton onClick={ this.handleReset.bind(this) }>Reset</ResetButton>

        </Contents>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    queryResults: state.home.queryResults,
    queryLoading: state.home.queryLoading,
    names: state.home.names,
  };
}

export default connect(mapStateToProps)(Home);