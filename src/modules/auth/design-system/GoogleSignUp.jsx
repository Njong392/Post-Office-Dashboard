import search from './../../../assets/search.png';
import { useAuth } from '../hooks/useAuth';

const GoogleSignUp = () => {
  const { signInWithGoogle } = useAuth()


  return (
    <div  className="w-full rounded-lg px-5 py-3 text-sm font-medium text-deep-gray flex items-center justify-center gap-2 border cursor-pointer" onClick={signInWithGoogle}>
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