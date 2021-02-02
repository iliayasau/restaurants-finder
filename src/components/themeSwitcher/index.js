import React from 'react';
import PropTypes from 'prop-types';
import {
	Form, SwitchContainer, Switch, Label
} from './styles';

function ThemeSwitcher({ theme, setTheme }) {
  let newTheme;
  if (theme === 'Light') {
    newTheme = 'Dark';
  } if (theme === 'Dark') {
    newTheme = 'Light';
  }
  return (
    <Form>
      <SwitchContainer>
        <Switch type="checkbox" id="switchTheme" checked={theme === 'Dark'} onChange={() => setTheme(newTheme)} />
        <Label htmlFor="switchTheme" theme={theme}>Selected theme: {theme}</Label>
      </SwitchContainer>
    </Form>
  );
}

ThemeSwitcher.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
};

export default ThemeSwitcher;