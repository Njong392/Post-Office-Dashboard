import search from './../../../assets/search.png';

const GoogleSignUp = () => {
  return (
    <div  className="w-full rounded-lg px-5 py-3 text-sm font-medium text-deep-gray flex items-center justify-center gap-2 border cursor-pointer">
        <img src={search} alt="" className='w-4 h-4' />
        <button
        type="submit"
      >
        Sign in with Google
      </button>
    </div>
  )
}

export default GoogleSignUp