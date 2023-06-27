import { signOut, useSession } from 'next-auth/react'

function MiniProfile() {
  const { data: session } = useSession()

  return (
    <div className="mt-14 ml-10 flex items-center justify-between ">
      <img
        className=" h-16 w-16 rounded-full border p-[2px]"
        src="./DiddyKong.png"
        alt=""
      />

      <div className="mx-4 flex-1">
        <h2 className="font-bold"> {session?.user?.username}</h2>
        <h3 className="text-sm text-gray-400">Welcome to the gram</h3>
      </div>

      <button onClick={signOut} className="font-semiBold text-sm text-blue-400">
        Sign out
      </button>
    </div>
  )
}

export default MiniProfile
