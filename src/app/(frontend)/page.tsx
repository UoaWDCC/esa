import React from 'react'
import Image from 'next/image'
import config from '@/payload.config'
import Footer from 'src/components/navigation/footer'
import Sponsors from './_components/Sponsors'
import WhoAreWe from './_components/WhoAreWe'

export default async function HomePage() {
  const user = null // Replace with actual user fetching logic if needed

  return (
    <>
      <div className="home">
        <div className="content">
          <picture>
            <source srcSet="https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-favicon.svg" />
            <Image
              alt="Payload Logo"
              height={65}
              src="https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-favicon.svg"
              width={65}
            />
          </picture>

          {!user && <h1>Welcome to your new project.</h1>}
          {user && <h1>Welcome back, {user.email}</h1>}

          <div className="links">
            <a
              className="admin"
              href={config.routes.admin}
              rel="noopener noreferrer"
              target="_blank"
            >
              Go to admin panel
            </a>
            <a
              className="docs"
              href="https://payloadcms.com/docs"
              rel="noopener noreferrer"
              target="_blank"
            >
              Documentation
            </a>
          </div>
        </div>

        <div className="text-primary-grey">
          {/* page content */}
          <div className="w-full">
            {/* Replace with actual landing component */}
            place landing component here
          </div>

          <div className="flex flex-col items-center w-full">
            <WhoAreWe />
          </div>

          <div className="w-full">
            {/* Replace with actual second component */}
            place component 2 here
          </div>

          <div className="w-full bg-[#161514]">
            <Sponsors />
          </div>

          <Footer />
        </div>
      </div>
    </>
  )
}
