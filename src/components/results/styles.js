import styled from 'styled-components';

export const List = styled.ul`
  list-style-type: none;
  display: block;
  flex-wrap: wrap;
  padding-left: 0;
`;

export const ListItem = styled.li`
  padding-bottom: 15px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
  @media (min-width: 992px) {
    flex-wrap: nowrap;
    padding-bottom: 30px;
  }
`;

export const Divider = styled.hr`
  width: 100%;
  height: 1px;
  margin-bottom: 15px;
  border: none;
  display: block;
  background: ${props => (props.theme === 'Light' ? '#dddddd' : '#666666')};

  @media (min-width: 992px) {
    margin-bottom: 30px;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  text-align: center;
  padding-bottom: 15px;
  margin-bottom: 0;
  min-height: 200px;
  flex-shrink: 0;
  @media (min-width: 992px) {
    width: 200px;
    text-align: left;
    padding-bottom: 0;
    margin-bottom: 0;
  }
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

export const LinkContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  text-align: left;
  padding-left: 0;
  font-size: 18px;
  font-weight: 400;
  line-height: 1;
  color: ${props => (props.theme === 'Light' ? '#424242' : 'white')};
  font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  > div:first-child {
    padding-right: 15px;
  }
  @media (min-width: 992px) {
    width: unset;
    justify-content: flex-start;
    padding-left: 30px;
    font-size: 32px;
  }
`;

export const Address = styled.div`
  font-size: 16px;
  padding-top: 15px;
`;

export const Cuisines = styled.div`
  font-size: 12px;
  padding-top: 10px;
`;

export const Rating = styled.div`
  font-size: 14px;
  padding-top: 10px;
  font-weight: bold;
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${props => (props.theme === 'Light' ? '#0085a1' : '#00d1b2')};
  &:hover {
    color: ${props => (props.theme === 'Light' ? '#00657b' : '#0a8774')};
  }
`;