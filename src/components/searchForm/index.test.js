import React from 'react';
import renderConnected from '../../utils/renderConnected';
import SearchForm from './';

describe('renders SearchForm', () => {
  let wrapper, getByText;
  const initialState = {
    loading: false,
    restaurants: []
  };

  beforeEach(() => {
    const utils = renderConnected(<SearchForm />, { initialState });
    wrapper = utils.container;
    getByText = utils.getByText;
  });

  it('renders the component', () => {
    expect(wrapper.querySelector('input')).toBeInTheDocument();
  });
});
