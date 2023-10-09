import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Results from '../results';
import ThemeSwitcher from '../themeSwitcher';
import {
  Wrapper, GoogleFonts, Container, Header, TitleContainer, Row,
  Title, SettingsWrapper, FiltersWrapper, Input
} from './styles';

const SearchForm = () => {
  const restaurants = [
    {
      restaurant: {
        id: "1",
        name: "Pizza Hut",
        location: {
          address: "123 Pizza St, Pizza Town"
        },
        cuisines: "Pizza",
        user_rating: {
          aggregate_rating: "4.5"
        },
        thumb: "https://upload.wikimedia.org/wikipedia/sco/thumb/d/d2/Pizza_Hut_logo.svg/2177px-Pizza_Hut_logo.svg.png",
        url: "https://www.pizzahut.ca/"
      }
    },
    {
      restaurant: {
        id: "2",
        name: "Burger King",
        location: {
          address: "456 Burger Rd, Burger City"
        },
        cuisines: "Burgers",
        user_rating: {
          aggregate_rating: "4.2"
        },
        thumb: "https://cdn.freebiesupply.com/logos/large/2x/burger-king-logo-logo-png-transparent.png",
        url: "https://www.burgerking.ca/"
      }
    },
    {
      restaurant: {
        id: "3",
        name: "Taco Bell",
        location: {
          address: "789 Taco Ln, Taco Ville"
        },
        cuisines: "Mexican",
        user_rating: {
          aggregate_rating: "4.0"
        },
        thumb: "https://cdn.freebiesupply.com/images/large/2x/taco-bell-logo-png-transparent.png",
        url: "https://www.tacobell.ca/"
      }
    }
  ];

  const [theme, setTheme] = useState('Light');
  const [nameFilter, setNameFilter] = useState('');
  const [addressFilter, setAddressFilter] = useState('');
  const [cuisinesFilter, setCuisinesFilter] = useState('');

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
            <ThemeSwitcher theme={theme} setTheme={setTheme} />
          </SettingsWrapper>
          {restaurants && (
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
            {restaurants &&
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
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      restaurant: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        location: PropTypes.shape({
          address: PropTypes.string.isRequired
        }).isRequired,
        cuisines: PropTypes.string.isRequired,
        user_rating: PropTypes.shape({
          aggregate_rating: PropTypes.string.isRequired
        }).isRequired,
        thumb: PropTypes.string,
        url: PropTypes.string.isRequired
      }).isRequired
    })
  )
};

export default SearchForm;
