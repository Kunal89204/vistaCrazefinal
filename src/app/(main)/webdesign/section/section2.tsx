import React from 'react'
import UXUI from "../../../../../public/team.png"
import UXUI2 from "../../../../../public/team2.png"
import Image from 'next/image'

type Props = {}

const section2 = (props: Props) => {
  return (
      <div className='bg-slate-950 h-auto flex flex-col items-center pt-20 justify-center'>
          <div className=' flex flex-col gap-10 items-center justify-center'>
              <span className='bg-gray-800/80 p-1 px-4 rounded-full w-fit text-white'>UX/UI</span>
              <h1 className='sm:text-7xl font-semibold'>The Interplay of UI and UX</h1>
              <p className=' text-center sm:w-[1000px]'>While UI focuses on the tangible elements, UX addresses the overall feel and effectiveness of the experience. Think of UI as the tools a user needs for their journey—elegant, precise, and pleasing. UX is the path itself—the ease of navigation, the anticipation of their needs, and the satisfaction of reaching their destination effortlessly. Together, they create a harmonious digital environment that not only looks exceptional but also feels right.</p>
              <div className='flex gap-5'>
                  <Image src={UXUI} alt='Vistacraze' width={900} height={400}/>
                  <Image src={UXUI2} alt='vistacraze' width={300}/>
              </div>
          </div>
    </div>
  )
}

export default section2
