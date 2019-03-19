import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getTitlesFromAPI } from '../Actions/titles';
import { voteToApi } from '../Actions/posts';
import Vote from '../Components/Vote';
import bgimg from '../Pics/blogbg.jpg';
import PropTypes from 'prop-types';

const StyledTitleList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
`;

const StyledTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  border: 1px solid lightgray;
  border-radius: 5px;
  box-shadow: 0px 2px 18px gray;
  box-sizing: border-box;
  padding: 20px;
  margin: 20px;

  background: url(${bgimg});
  background-size: cover;
  background-attachment: fixed;
  background-color: rgba(255, 255, 255, 0.7);
  background-blend-mode: lighten;
`;

const StyledTitleCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-bottom: 1px solid lightgray;
  height: 75px;
  width: 20vw;
  font-size: 1.15em;
`;

class TitleList extends Component {
  // if titles is empty in redux, obtain from API
  async componentDidMount() {
    if (Object.keys(this.props.titles).length === 0) {
      await this.props.getTitlesFromAPI();
    }
  }

  render() {
    // sorts title ids by largest amount of votes
    const titleIdsSorteByVotes = Object.keys(this.props.titles).sort(
      (prevId, nextId) => {
        return (
          this.props.titles[nextId].votes - this.props.titles[prevId].votes
        );
      }
    );

    return (
      <StyledTitleList>
        {titleIdsSorteByVotes.map(id => {
          const { title, description, votes } = this.props.titles[id];
          return (
            <StyledTitleContainer key={id}>
              <StyledTitleCard>
                <Link to={`/${id}`}>
                  <div>{title}</div>
                </Link>
                <div>{description}</div>
              </StyledTitleCard>
              <Vote
                id={id}
                votes={votes}
                voteAction={dir => this.props.voteToApi(dir, id)}
              />
            </StyledTitleContainer>
          );
        })}
      </StyledTitleList>
    );
  }
}

TitleList.propTypes = {
  titles: PropTypes.object,
  getTitlesFromAPI: PropTypes.func,
  voteToApi: PropTypes.func
};

function mapStateToProps(state) {
  return {
    titles: state.titles
  };
}

const connectedComponent = connect(
  mapStateToProps,
  { getTitlesFromAPI, voteToApi }
);

export default connectedComponent(TitleList);
