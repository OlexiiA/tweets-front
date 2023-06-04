import { useEffect, useState } from 'react'
import axios from '../utills/axios'
import { TweetsItem } from '../components/TweetsItem'

const AllTweetsPage = () => {
  const [tweets, setTweets] = useState([])

  const fetchMyTweets = async () => {
    try {
      const { data } = await axios.get('/tweets/user/me')
      setTweets(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchMyTweets()
  }, [])

  return (
    <div className="w-1/2 py-10 flex flex-col gap-10 max-w-full p-4">
      {tweets?.map((tweet, idx) => <TweetsItem key={idx} tweets={tweet} />)}
    </div>
  );
}


export default AllTweetsPage