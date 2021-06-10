import { SearchIcon, PlayIcon, NewspaperIcon, MapIcon, DotsVerticalIcon, PhotographIcon } from "@heroicons/react/outline"
import HeaderOption from "./HeaderOption"

const HeaderOptions = () => {
  return (
    <div className='flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-40 border-b'>
      {/* left */}
      <div className='flex space-x-6 text-xs'>
        <HeaderOption Icon={SearchIcon} title='All' selected />
        <HeaderOption Icon={PhotographIcon} title='Images' />
        <HeaderOption Icon={PlayIcon} title='Videos' />
        <HeaderOption Icon={NewspaperIcon} title='News' />
        <HeaderOption Icon={MapIcon} title='Maps' />
        <HeaderOption Icon={DotsVerticalIcon} title='News' />
      </div>

      {/* Right */}
      <div className='flex space-x-4'>
        <p className='link'>Setting</p>
        <p className='link'>tools</p>
      </div>
    </div>
  )
}

export default HeaderOptions
