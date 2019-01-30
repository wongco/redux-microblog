import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getTitlesFromAPI } from '../actionCreators';
import Vote from '../Components/Vote';

const StyledTitleList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  margin: 50px;
`;

const StyledTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  border: 1px solid lightgray;
  border-radius: 5px;
`;

const StyledTitleCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-bottom: 1px solid lightgray;
  /* box-shadow: 0px 2px 18px gray; */
  /* border-radius: 5px; */
  /* margin: 20px; */
  padding: 20px;
  height: 75px;
  width: 20vw;
`;

class TitleList extends Component {
  async componentDidMount() {
    if (Object.keys(this.props.titles).length === 0) {
      await this.props.getTitlesFromAPI();
    }
  }

  render() {
    return (
      <StyledTitleList>
        {Object.keys(this.props.titles).map(id => {
          const { title, description, votes } = this.props.titles[id];
          return (
            <StyledTitleContainer>
              <StyledTitleCard key={id}>
                <Link to={`/${id}`}>
                  <div>{title}</div>
                </Link>
                <div>{description}</div>
              </StyledTitleCard>
              <Vote id={id} votes={votes} />
            </StyledTitleContainer>
          );
        })}
      </StyledTitleList>
    );
  }
}

function mapStateToProps(state) {
  return {
    titles: state.titles
  };
}

const connectedComponent = connect(
  mapStateToProps,
  { getTitlesFromAPI }
);

export default connectedComponent(TitleList);
