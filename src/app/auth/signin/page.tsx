import { signIn } from 'next-auth/react'

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Anmelden
          </h2>
        </div>
        <div className="mt-8 space-y-6">
          <button
            onClick={() => signIn('github', { callbackUrl: '/' })}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            Mit GitHub anmelden
          </button>
        </div>
      </div>
    </div>
  )
}
