import React from 'react';
import styled from 'styled-components';

const TopBarStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;

const ContainerStyle = styled.div `
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;

  @media (min-width: 1280px) {
    div {
      width: 1280px;
    }
  }
`;

const ContainerLeftStyle = styled.div `
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;

  span {
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
}
`;

const ContainerCenterStyle = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;

  span {
    cursor: pointer;
    margin-right: 5%;
  }

  span:last-child {
  margin-right: 0;
  }

  span:hover {
  text-decoration: underline;
  }
`;

const ContainerRightStyle = styled.div `
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;

  span {
    cursor: pointer;
  }
`;


const TopBar = () => {
  return (
    <TopBarStyle>
      <ContainerStyle>
        <ContainerLeftStyle>
          <span>TOPICS</span><span>SEARCH</span>
        </ContainerLeftStyle>
        < ContainerCenterStyle >
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </ContainerCenterStyle>
        <ContainerRightStyle>
          <span>LOG IN</span>
        </ContainerRightStyle>
      </ContainerStyle>
    </TopBarStyle>
  )
}

export default TopBar;