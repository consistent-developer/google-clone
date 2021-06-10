import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid"
import Image from "next/image"
import { useRouter } from "next/router"
import { useRef } from "react"
import Avatar from "./Avatar"
import HeaderOptions from "./HeaderOptions"

const Header = () => {
  const router = useRouter()
  const searchInputRef = useRef(null)
  const search = (e) => {
    e.preventDefault()
    const term = searchInputRef.current.value

    if (!term) return

    router.push(`/search?term=${term}`)
  }
  return (
    <header className='sticky top-0 bg-white'>
      <div className='flex w-full p-6 items-center'>
        <Image src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png' className='cursor-pointer' onClick={() => router.push("/")} width={90} height={30} />

        <form className='flex flex-grow px-6 mx-6 py-1 ml-10 border border-gray-200 rounded-full shadow-md max-w-xl items-center'>
          <input type='text' ref={searchInputRef} className='flex-grow w-full focus:outline-none' />
          <XIcon
            className='h-7 text-gray-500 sm:mr-3 cursor-pointer transition duration-100 transform hover:scale-125'
            onClick={() => {
              searchInputRef.current.value = ""
            }}
          />

          <MicrophoneIcon className='mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300' />
          <SearchIcon className='h-6 text-blue-500 hidden sm:inline-flex' />
          <button hidden type='submit' onClick={search}>
            Search
          </button>
        </form>
        <Avatar className='ml-auto' url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUWvuA2WUI2zNfh1yQOHEMrai1SA3Z2xlrlQ&usqp=CAU' />
      </div>

      <HeaderOptions />
    </header>
  )
}

export default Header
