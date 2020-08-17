import styled from 'styled-components';

export const Container = styled.div`
  margin: 1rem;
`;

export const Viewer = styled.div`
  min-width: 10rem;
  min-height: 12rem;
  background-color: var(--grey1);
  border-radius: 0.3rem;

  -webkit-box-shadow: 3px 4px 7px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 3px 4px 7px 0px rgba(0,0,0,0.75);
  box-shadow: 3px 4px 7px 0px rgba(0,0,0,0.75);

  > img {
    display: block;
    max-width: 100%;
    height: auto;
    border-radius: 0.3rem;
  }

  &:hover {
    -webkit-box-shadow: 1px 2px 4px 0px var(--accent-color);
    -moz-box-shadow: 1px 2px 4px 0px var(--accent-color);
    box-shadow: 1px 2px 4px 0px var(--accent-color);

    > img {
      opacity: 0.8;
    }
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
`;

export const CustomLink = styled.a`
  display: flex;
  align-items: center;
  color: var(--accent-color);
  /* text-decoration: underline; */
  font-size: 0.8rem;
  cursor: pointer;

`;
