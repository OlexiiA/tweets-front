import { TweetsItem } from '../components/TweetsItem'
import { PopularTweets } from '../components/PopularTweets'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllTweets } from '../redux/tweets/tweetsSlice'

const MainPage = () => {

  const dispatch = useDispatch();
  const { tweets, popularTweets } = useSelector((state) => state.tweets)

  useEffect(() => {
    dispatch(getAllTweets())
  }, [dispatch])

  if (!tweets.length) {
    return (
      <div className='text-xl text-center text-white py-10'>
        No tweets
      </div>
    )
  }

  return (
    <>
      <div className="max-w-full mx-auto py-10 p-4">

        <div className="flex justify-between gap-8">
          <div className="flex flex-col gap-10 basis-4/5">
            {tweets.map((tweet, idx) => (
              <TweetsItem key={idx} tweets={tweet} />
            ))}

          </div>
          <div className="basis-1/5">
            <div className="text-xs uppercase text-white">
              Popular tweets
            </div>
            {popularTweets?.map((tweet, idx) => (
              <PopularTweets key={idx} tweets={tweet} />
            ))}
          </div>
        </div>
      </div>
      <footer className="py-3 text-center bg-gray-900">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <h6 className="text-white text-sm">OLEKSII ANDRIUSHCHENKO</h6>
          <p className="text-white text-sm">©️ All CopiRigts Reserved 2023</p>
        </div>
      </footer>



    </>
  );
}

export default MainPage;
