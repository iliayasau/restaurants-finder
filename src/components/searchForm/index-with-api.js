import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GET_RESTAURANTS_REQUESTED } from '../../actions';
import Results from '../results';
import ThemeSwitcher from '../themeSwitcher';
import {
  Wrapper, GoogleFonts, Container, Header, TitleContainer, Row,
  Title, SettingsWrapper, FiltersWrapper, Loading, InputWrapper, Input, Button
} from './styles';

const SearchForm = ({
  loading,
  restaurants,
	getRestaurants
}) => {
  const [query, setQuery] = useState('');
  const [theme, setTheme] = useState('Light');
  const [nameFilter, setNameFilter] = useState('');
  const [addressFilter, setAddressFilter] = useState('');
  const [cuisinesFilter, setCuisinesFilter] = useState('');

  const onChange = e => {
    setQuery(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    setNameFilter('');
    setAddressFilter('');
    setCuisinesFilter('');
    getRestaurants(query);
  };

  const onKeyDown = e => {
    if (e.key === 'Enter') {
      onSubmit(e);
    }
  };

  const filterByName = e => {
    const value = e.target.value.toLowerCase();
    setNameFilter(value);
  }

  const filterByAddress = e => {
    const value = e.target.value.toLowerCase();
    setAddressFilter(value);
  }

  const filterByCuisine = e => {
    const value = e.target.value.toLowerCase();
    setCuisinesFilter(value);
  }

  return (
    <Wrapper theme={theme}>
      <GoogleFonts />
      <Header theme={theme}>
        <TitleContainer>
          <Row>
            <Title theme={theme}>Restaurants Finder</Title>
          </Row>
        </TitleContainer>
      </Header>
      <Container>
        <Row>
          <SettingsWrapper>
            <InputWrapper role="search">
              <label>
                <span>Search</span>
                <Input
                  placeholder="Enter city"
                  id="restaurantSearch"
                  theme={theme}
                  submitInput
                  onChange={e => onChange(e)}
                  onKeyDown={e => onKeyDown(e)}
                />
              </label>
              <Button
                theme={theme}
                aria-label="Submit query"
                onClick={(e) => onSubmit(e)}
              >
                Submit
              </Button>
            </InputWrapper>
            <ThemeSwitcher theme={theme} setTheme={setTheme} />
            {/* <LayoutSwitcher theme={theme} layout={layout} setLayout={setLayout} />
            <OddEvenFilter oddEvenFilter={oddEvenFilter} setOddEvenFilter={setOddEvenFilter} theme={theme} /> */}
          </SettingsWrapper>
          {!loading && restaurants && (
            <FiltersWrapper>
              <label>
                <Input
                  placeholder="Filter by Name"
                  id="nameFilter"
                  theme={theme}
                  onChange={e => filterByName(e)}
                />
              </label>
              <label>
                <Input
                  placeholder="Filter by Address"
                  id="addressFilter"
                  theme={theme}
                  onChange={e => filterByAddress(e)}
                />
              </label>
              <label>
                <Input
                  placeholder="Filter by Cuisine"
                  id="cuisinesFilter"
                  theme={theme}
                  onChange={e => filterByCuisine(e)}
                />
              </label>
            </FiltersWrapper>
          )}
          <div>
            {loading && <Loading theme={theme}>Loading...</Loading>}
            {!loading && restaurants &&
              <Results
                restaurants={restaurants}
                theme={theme}
                nameFilter={nameFilter}
                addressFilter={addressFilter}
                cuisinesFilter={cuisinesFilter}
              />
            }
          </div>
        </Row>
      </Container>
    </Wrapper>
  );
};

SearchForm.propTypes = {
  loading: PropTypes.bool,
	restaurants: PropTypes.array,
	getRestaurants: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  loading: state.loading,
  restaurants: state.restaurants
});

const mapDispatchToProps = (dispatch) => ({
  getRestaurants: (query) => dispatch({ type: GET_RESTAURANTS_REQUESTED, payload: query })
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);