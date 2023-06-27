import { getProviders, signIn } from 'next-auth/react'
import Header from '../../components/Header'
import Login from '../../components/Login'

function signin({ providers }) {
  return (
    <div>
      <Header />
      <div className="mt-80 flex flex-col items-center justify-center py-2 px-14 ">
        <Login />
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              className="mt-10 rounded-lg bg-blue-500 p-3 text-white"
              onClick={() => signIn(provider.id, { callbackUrl: '/' })}
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </div>
    // </div>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}

export default signin
