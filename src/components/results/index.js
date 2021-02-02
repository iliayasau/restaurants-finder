import React from 'react';
import PropTypes from 'prop-types';
import {
	List, ListItem, ImageContainer, Image, LinkContainer,
	Address, Cuisines, Rating, Link, Divider
} from './styles';

const Results = ({
	restaurants, theme, nameFilter, addressFilter, cuisinesFilter
}) => {
	return (
    <List>
      {restaurants.map((item, index) => {
				const { restaurant } = item;
				const {
					name, location, cuisines,
					user_rating, thumb, id, url
				} = restaurant;
				const { address } = location;
				const { aggregate_rating } = user_rating;

				if (nameFilter && !name.toLowerCase().includes(nameFilter)) {
					return null;
				}
				if (addressFilter && !address.toLowerCase().includes(addressFilter)) {
					return null;
				}
				if (cuisinesFilter && !cuisines.toLowerCase().includes(cuisinesFilter)) {
					return null;
				}
				return (
					<div key={id}>
						<ListItem>
							<ImageContainer>
								<a href={url}>
									<Image
										src={
											thumb ?
											thumb :
											'https://img.icons8.com/bubbles/2x/food.png'
										}
										alt={name}
									/>
								</a>
							</ImageContainer>
							<LinkContainer theme={theme}>
								<div>
									{index + 1}.
								</div>
								<div>
									<Link theme={theme} href={url}>{name}</Link>
									<Address>{address}</Address>
									<Cuisines>{cuisines}</Cuisines>
									<Rating>&#9733; {aggregate_rating}</Rating>
								</div>
							</LinkContainer>
						</ListItem>
						<Divider theme={theme} />
					</div>
				);
      })}
    </List>
  );
}

Results.propTypes = {
	restaurants: PropTypes.array.isRequired,
	theme: PropTypes.string.isRequired,
	nameFilter: PropTypes.string.isRequired,
	addressFilter: PropTypes.string.isRequired,
	cuisinesFilter: PropTypes.string.isRequired
};

export default Results;