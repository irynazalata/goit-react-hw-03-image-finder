import axios from 'axios';
import PropTypes from 'prop-types';

const fetchImagesWithQuery = (searchQuery, page) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=18931614-e34c06c7127746f74346ed387&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data.hits);
};

fetchImagesWithQuery.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};

export default { fetchImagesWithQuery };
