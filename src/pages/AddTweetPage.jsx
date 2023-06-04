import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { createTweets } from "../redux/tweets/tweetsSlice"

const AddTweetPage = () => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [image, setImage] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handlerSubmit = () => {
    try {
      const data = new FormData()
      data.append('title', title)
      data.append('text', text)
      data.append('image', image)
      dispatch(createTweets(data))
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  const handlerClearForm = () => {
    setTitle('')
    setText('')
  }

  return (
    <form className="w-1/3 mx-auto py-10" onSubmit={(e) => e.preventDefault()}>
      <label className="text-gray-300 py-2 bg-gray-600 text-xs mt-2 flex items-center justify-center border-2 border-dotted cursor-pointer">
        attach image
        <input
          type="file"
          className="hidden"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </label>

      <div className="flex object-cover py-2">
        {image && (<img src={URL.createObjectURL(image)} alt={image.name} />)}
      </div>

      <label className="text-xs text-white opacity-70">
        Title
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="write title"
          className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700"
        />
      </label>

      <label className="text-xs text-white opacity-70">
        Text
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="describe your`s tweet"
          className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none resize-none placeholder:text-gray-700"
        />
      </label>
      <div className="flex gap-8 justify-center items-center mt-4">
        <button onClick={handlerSubmit} className="flex items-center justify-center bg-blue-700 text-xs text-white rounded-md py-2 px-4 hover:bg-green-700" >
          Add
        </button>
        <button onClick={handlerClearForm} className="flex items-center justify-center bg-blue-700 text-xs text-white rounded-md py-2 px-4 hover:bg-red-700">
          Cancel
        </button>
      </div>
    </form>
  );
}

export default AddTweetPage;
