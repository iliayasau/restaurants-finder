import styled from 'styled-components';

export const Form = styled.form`
  display: block;
  width: 100%;
  padding-bottom: 15px;
  @media (min-width: 992px) {
    width: 33.3333%;
    padding-bottom: 30px;
  }
`;

export const SwitchContainer = styled.div`
  position: relative;
`;

export const Switch = styled.input`
  outline: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: inline-block;
  position: absolute;
  opacity: 0;
  &+label {
    position: relative;
    display: initial;
    font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: initial;
    padding-left: 4rem;
    padding-top: 0.5rem;
    cursor: pointer;
    @media (min-width: 992px) {
      padding-top: 0.4rem;
      font-size: 21px;
    }
  }
  &+label::before {
    position: absolute;
    display: block;
    top: 4px;
    left: 0;
    width: 2.8rem;
    height: 1.4rem;
    border: .1rem solid transparent;
    border-radius: 4px;
    background: #b5b5b5;
    content: '';
  }
  &+label::after {
    display: block;
    position: absolute;
    top: .58rem;
    left: .35rem;
    width: 15px;
    height: 15px;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    border-radius: 3px;
    background: #fff;
    transition: all .25s ease-out;
    content: '';
  }
  &:checked+label::before {
    background: #00d1b2;
  }
  &:checked+label::after {
    left: 1.7rem;
  }
`;

export const Label = styled.label`
  font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1;
  padding-left: 15px;
  color: ${props => (props.theme === 'Light' ? '#424242' : 'white')};
  @media (min-width: 992px) {
    font-size: 21px;
  }
`;