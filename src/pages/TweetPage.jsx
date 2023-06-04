import { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AiFillEye, AiOutlineMessage, AiTwotoneEdit, AiFillDelete } from 'react-icons/ai';

import moment from 'moment';
import axios from '../utills/axios'
import { useSelector, useDispatch } from 'react-redux';
import { removeTweets } from '../redux/tweets/tweetsSlice';
import { createComment, getComments } from '../redux/comment/commentSlice';
import { toast } from 'react-toastify';
import { CommentItem } from '../components/CommentItem';

const TweetPage = () => {

  const [tweets, setTweets] = useState(null);
  const [comment, setComment] = useState('')
  const { user } = useSelector(state => state.auth)
  const { comments } = useSelector(state => state.comment)
  const params = useParams();
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const fetchTweets = useCallback(async () => {
    const { data } = await axios.get(`/tweets/${params.id}`)
    setTweets(data)
  }, [params.id])

  const fetchComment = useCallback(async () => {
    try {
      await dispatch(getComments(params.id));
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, params.id]);

  useEffect(() => {
    fetchTweets();
  }, [fetchTweets]);

  useEffect(() => {
    fetchComment();
  }, [fetchComment]);


  if (!tweets) {
    return (
      <div className='text-xl text-center text-white py-10'>
        No tweets!
      </div>
    );
  }

  const handlerDelete = () => {
    try {
      dispatch(removeTweets(params.id))
      toast('Tweet was delete')
      navigate('/tweets')
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async () => {
    try {
      const tweetId = params.id;
      await dispatch(createComment({ tweetId, comment }));
      setComment('');
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className='max-w-full mx-auto py-10 p-4'>
      <button className="flex justify-center items-center bg-blue-700 text-xs text-white rounded-md py-2 px-4">
        <Link to={'/'}>Back</Link>
      </button>

      <div className="flex gap-10 py-8">
        <div className="w-2/3">
          <div className="flex flex-col basis-1/4 flex-grow">
            <div className={tweets.imageUrl ? 'flex rounded-sm h-80' : 'flex-rounded-sm'}>
              {tweets.imageUrl && (<img src={`https://tweets-api-sztu.onrender.com/${tweets.imageUrl}`}
                alt='image'
                className='object-cover flex items-center h-full rounded-sm' />)}
            </div>
          </div>

          <div className="flex justify-between items-center pt-2">
            <div className="text-xs text-white opacity-50">{tweets.email}</div>
            <div className="text-xs text-white opacity-50">
              {moment(tweets.createdAt).format("YYYY/MM/DD")}
            </div>
          </div>
          <div className="text-white text-xl">{tweets.title}</div>
          <p className="text-white opacity-60 text-xs pt-4">{tweets.text}</p>
          <div className='flex gap-3 items-center justify-between mt-2'>
            <div className='flex gap-3 mt-4'>
              <button className='flex items-center justify-center gap-2 text-xs text-white opacity-50'>
                <AiFillEye className='animate-pulse'/> <span className='animate-pulse'>{tweets.views}</span>
              </button>
              <button className='flex items-center justify-center gap-2 text-xs text-white opacity-50'>
                <AiOutlineMessage /> <span>{tweets.comments?.length || 0}</span>
              </button>
            </div>
            {user?._id === tweets.author && (<div className='flex gap-3 mt-4'>
              <button className='flex items-center justify-center gap-2 text-white opacity-50'>
                <Link to={`/${params.id}/edit`}>
                  <AiTwotoneEdit />
                </Link>
              </button>
              <button onClick={handlerDelete} className='flex items-center justify-center gap-2 text-white opacity-50'>
                <AiFillDelete />
              </button>
            </div>)}
          </div>
        </div>
        <div className="w-1/3 p-8 bg-gray-700 flex flex-col gap-2 rounded-sm">
          <form onSubmit={e => e.preventDefault()} className='flex gap-2'>
            <input
              type='text'
              value={comment}
              onChange={e => setComment(e.target.value)}
              placeholder='Leave your comment'
              className='text-black w-full rounded-sm bg-gray-400 border p-2 text-xs outline-none placeholder:text-gray-700'
            />
            <button onClick={handleSubmit} type='submit' className='flex justify-center items-center bg-gray-600 text-xs text-white rounded-sm py-2 px-4'>
              Send
            </button>
          </form>
          {comments?.map((cmt) => (
            <CommentItem key={cmt._id} cmt={cmt} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TweetPage;


