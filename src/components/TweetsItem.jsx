import { AiFillEye, AiOutlineMessage } from 'react-icons/ai';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';

export const TweetsItem = ({ tweets }) => {
    if (!tweets) {
        return (
            <div className="text-xl text-center text-white py-10">
                No tweets
            </div>
        );
    }

    const createdAt = moment(tweets.createdAt).toDate();

    const hashtags = tweets.title
        .split(' ')
        .filter(word => word.startsWith('#'))
        .map(tag => tag.replace('#', ''));

    return (
        <>
            {hashtags.length > 0 && (
                <div className="text-md text-white opacity-50">
                    {hashtags.map((tag, index) => (
                        <span key={index} className="mr-1">
                            #{tag}
                        </span>
                    ))}
                </div>
            )}
            <Link to={`/${tweets._id}`}>
                <div className="flex flex-col basis-1/4 flex-grow border-solid border-4 border-grey-800 rounded-lg p-1">
                    <div className="flex justify-between items-center mb-2">
                        <div className="text-xs text-white opacity-50">
                            {tweets.email}
                        </div>
                        <div className="text-xs text-white opacity-50">
                            {moment(createdAt).format("DD MMM YYYY")}
                        </div>
                    </div>
                    <div className={tweets.imageUrl ? 'flex justify-around' : 'flex-rounded-sm'}>
                        {tweets.imageUrl && (
                            <img
                                src={`https://tweets-api-sztu.onrender.com/${tweets.imageUrl}`}
                                alt='image'
                                className='object-cover flex items-center h-full rounded-sm'
                            />
                        )}
                    </div>
                    <div className="text-white text-xl">
                        {tweets.title}
                    </div>
                    <p className="text-white opacity-60 text-xs pt-4 line-clamp-3">
                        {tweets.text}
                    </p>
                    <div className='flex gap-3 items-center mt-2'>
                        <button className='flex items-center justify-center gap-2 text-xs text-white opacity-50'>
                            <AiFillEye className='animate-pulse' />
                            <span className='animate-pulse'>
                                {tweets.views}
                            </span>
                        </button>
                        <button className='flex items-center justify-center gap-2 text-xs text-white opacity-50'>
                            <AiOutlineMessage />
                            <span>
                                {tweets.comments?.length || 0}
                            </span>
                        </button>
                    </div>
                </div>
            </Link>
        </>
    );
};

TweetsItem.propTypes = {
    tweets: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        email: PropTypes.string,
        createdAt: PropTypes.string.isRequired,
        imageUrl: PropTypes.string,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        views: PropTypes.number.isRequired,
        comments: PropTypes.arrayOf(PropTypes.string),
    })
};
