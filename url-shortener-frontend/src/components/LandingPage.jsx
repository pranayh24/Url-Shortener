import React from 'react'

const LandingPage = () => {

  let desc = "Linklytics simplifies URL shortening for efficient sharing. Easily generate, manage, and track your shortened links. Linklytics simplifies URL shortening for efficient sharing. Easily generate, manage, and track your shortened links. Linklytics simplifies URL shortening for efficient sharing. Easily generate, manage, and track your shortened links. Linklytics simplifies URL shortening for efficient sharing. Easily generate, manage, and track your shortened links."

  return (
      <div className="min-h-[calc(100vh-64px)]  lg:px-14 sm:px-8 px-4">
        <div className="lg:flex-row flex-col    lg:py-5   pt-16   lg:gap-10 gap-8 flex justify-between items-center">
          <div className="flex-1">
            <h1 className='font-bold text-3xl text-slate-800 italic mb-3'>
              Linklytics simplifies URL shortening for efficient sharing.
            </h1>
            <p className='text-slate-700 text-sm my-5'>
              Easily generate, manage, and track your shortened links.
            </p>

            <div className="flex items-center gap-3">
              <button
                  className="bg-custom-gradient w-40 text-white rounded-md py-2 px-4 hover:bg-custom-gradient-2">
                Manage Links
              </button>
              <button className="border-btnColor-border w-40 rounded-md py-2 px-4 hover:bg-btnColor">
                Create Short Link
              </button>
            </div>
          </div>

          <div className="flex-1 flex justify-center w-full">
            <img
                className="sm:w-[480] w-[480px] object-cover rounded-md"
                src="/images/image1.jpg"
                alt=""
            />
          </div>
        </div>
      </div>
  )
}

export default LandingPage