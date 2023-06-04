import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const PopularTweets = ({ tweets }) => {
  return (
    <div className="bg-gray-600 my-1">
      <Link to={`${tweets._id}`} className="flex text-xs p-2 text-gray-300 hover:bg-gray-800 hover:text-white">
        {tweets?.title}
      </Link>
    </div>
  );
}

PopularTweets.propTypes = {
  tweets: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string,
  }).isRequired,
};
