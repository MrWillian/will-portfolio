import styled from 'styled-components';

interface ViewerProps {
  image: string;
}

export const Container = styled.div`
  margin: 1rem;
`;

export const Viewer = styled.div<ViewerProps>`
  min-width: 10rem;
  min-height: 12rem;
  background-color: var(--grey1);
  border-radius: 0.3rem;

  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  -webkit-box-shadow: 3px 4px 7px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 3px 4px 7px 0px rgba(0,0,0,0.75);
  box-shadow: 3px 4px 7px 0px rgba(0,0,0,0.75);

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

export const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const CustomLink = styled.a`
  display: flex;
  align-items: center;
  color: var(--accent-color);
  /* text-decoration: underline; */
  font-size: 0.8rem;
  cursor: pointer;
  margin: 0 0.5rem;
`;

export const InfoText = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  font-decoration: underline;
`;

export const LabelText = styled.span`
  font-size: 1.1rem;
  margin-left: 10px;
`;