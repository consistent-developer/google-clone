const Avatar = ({ url, className }) => {
  return (
    <div>
      <img loading='lazy' className={`h-8 rounded-full cursor-pointer transition duration-150 transform hover:scale-150 ${className}`} src={url} alt='Profile pic' />
    </div>
  )
}

export default Avatar
