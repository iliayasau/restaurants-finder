import defaultAxios from 'axios';

const axios = defaultAxios.create({
  baseURL: 'https://developers.zomato.com/api/v2.1',
  headers: {
		'Content-Type': 'application/json',
		'user-key': 'f885b1fde5e51736cf4c1b8af0a536c4'
	}
});

export const getRestaurants = async (payload) => {
	try {
		const location = await axios.get(`locations?query=${payload}`);
		const restaurants = await axios.get(
			`search?entity_id=${location.data.location_suggestions[0].city_id}&entity_type=city`
		);
		return restaurants.data;
	} catch(err) {
		return console.error(err);
	};
};