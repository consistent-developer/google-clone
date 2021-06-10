import Head from "next/head"
import Image from "next/image"
import Avatar from "../Components/Avatar"
import { ViewGridIcon, MicrophoneIcon } from "@heroicons/react/solid"
import { SearchIcon } from "@heroicons/react/outline"
import Footer from "../Components/Footer"
import { useRef } from "react"
import { useRouter } from "next/router"

export default function Home() {
  const router = useRouter()
  const searchInputRef = useRef(null)
  const search = (e) => {
    e.preventDefault()
    const term = searchInputRef.current.value

    if (!term) return

    router.push(`/search?term=${term}`)
  }
  return (
    <div className='flex flex-col justify-center h-screen'>
      <Head>
        <link href='https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap' rel='stylesheet'></link>
      </Head>
      {/* Header */}

      <header className='flex w-full p-5 justify-between font-sans'>
        {/* Left */}
        <div className='flex space-x-4 items-center '>
          <p className='link'>About</p>
          <p className='link'>Store</p>
        </div>

        {/* Right */}

        <div className='flex space-x-4 items-center'>
          <p className='link'>Gmail</p>
          <p className='link'>Images</p>

          {/* Icons */}
          <ViewGridIcon className='h-10 w-10 p-2 rounded-full hover:bg-gray-300 cursor-pointer' />

          {/* Avatar */}
          {/* <Avatar url='https://coaching.papareact.com/ai9' /> */}
        </div>
      </header>

      {/* Body */}
      <form className='flex flex-col items-center mt-36 flex-grow w-4/5 self-center'>
        <Image src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' width={300} height={100} />

        <div className='flex w-full px-5 py-3 mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 items-center sm:max-w-xl lg:max-w-2xl'>
          <SearchIcon className='h-5 mr-3 text-gray-500' />
          <input ref={searchInputRef} type='text' className='focus:outline-none flex-grow' />
          <MicrophoneIcon className='h-5' />
        </div>

        <div className='flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4'>
          <button onClick={search} className='btn '>
            Google Serch
          </button>
          <button onClick={search} className='btn'>
            I'm Feeling Lucky
          </button>
        </div>
      </form>

      {/* Footer */}
      <Footer />
    </div>
  )
}
