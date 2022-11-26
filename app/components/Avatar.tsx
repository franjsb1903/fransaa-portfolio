const Avatar = () => (
  <div className="flex mt-10 md:w-[300px] md:h-[300px] w-[250px] h-[250px] rounded-full justify-center items-center bg-gradient-to-r p-[6px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
    <div className="flex md:w-[280px] md:h-[280px] w-[230px] h-[230px] justify-center items-center rounded-full overflow-hidden bg-black">
      <img
        src={'/img/me.PNG'}
        alt="Me Emoji"
        className="rounded-md md:w-[300px] md:h-[280px] w-[250px] h-[230px]"
      />
    </div>
  </div>
)

export default Avatar
