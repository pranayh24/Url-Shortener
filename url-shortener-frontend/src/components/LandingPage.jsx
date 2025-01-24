import React from 'react'
import Card from './Card'
import {motion} from 'framer-motion'

const LandingPage = () => {

  let desc = "Linklytics simplifies URL shortening for efficient sharing. Easily generate, manage, and track your shortened links. Linklytics simplifies URL shortening for efficient sharing. Easily generate, manage, and track your shortened links. Linklytics simplifies URL shortening for efficient sharing. Easily generate, manage, and track your shortened links. Linklytics simplifies URL shortening for efficient sharing. Easily generate, manage, and track your shortened links."

  return (
      <div className="min-h-[calc(100vh-64px)]  lg:px-14 sm:px-8 px-4">
        <div className="lg:flex-row flex-col    lg:py-5   pt-16   lg:gap-10 gap-8 flex justify-between items-center">
          <div className="flex-1">
            <motion.h1 
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{once: true}}
              transition={{duration: 0.8}}
              className='font-bold text-3xl text-slate-800 italic mb-3'>
              Linklytics simplifies URL shortening for efficient sharing.
            </motion.h1>
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
                className="sm:w-[320px] w-[240px] object-cover rounded-md"
                src="src\images\image1.jpg"
                alt="Linklytics illustration"
              />
          </div>
        </div>
        <div className="sm:pt-12 pt-7">
          <p className="text-slate-800 font-itatic font-bold lg:w-[60%] md:w-[80%] mx-auto">Why Linklytics?
            Trusted by individulas and businesses worldwide
          </p>
          <div className="pt-4 pb-7 grid lg:gap-7 gap-4 xl:grid-cols-4  lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-4">
          <Card
            title="Simple URL Shortening"
            desc="Experience the ease of creating short, memorable URLs in just a few clicks. Our intuitive interface and quick setup process ensure you can start shortening URLs without any hassle."
          />
          <Card
            title="Powerful Analytics"
            desc="Gain insights into your link performance with our comprehensive analytics dashboard. Track clicks, geographical data, and referral sources to optimize your marketing strategies."
          />
          <Card
            title="Enhanced Security"
            desc="Rest assured with our robust security measures. All shortened URLs are protected with advanced encryption, ensuring your data remains safe and secure."
          />
          <Card
            title="Fast and Reliable"
            desc="Enjoy lightning-fast redirects and high uptime with our reliable infrastructure. Your shortened URLs will always be available and responsive, ensuring a seamless experience for your users." 
          />
        </div>

        </div>
      </div>
  )
}

export default LandingPage