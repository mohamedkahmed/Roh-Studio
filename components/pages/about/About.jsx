"use client"
import Image from 'next/image.js'
import ValuesRohStudio from '@/components/ui/valuesRohStudio/ValuesRohStudio.jsx'
import OurTeam from '@/components/ui/ourTeam/OurTeam.jsx'
import { AuthFetchAboutPage } from '@/utils/FetchSeries.js'
import image from "@/public/images/company.svg"
const About = () => {
  const {data , loading} = AuthFetchAboutPage()

  return (
    <div>
      <section className='w-full h-[300px] relative mt-20'>
        <Image
        src={data[0]?.img || image}
        objectFit='cover'
        fill
        alt='company image'
        />
        <div className='relative z-2 w-full flex overflow-hidden items-center flex-col justify-center h-full gap-4 text-white text-center'>
            <h1>{data[0]?.title}</h1>
            <p className='w-full  xl:max-w-[45%] lg:max-w-[45%] leading-7'>{data[0]?.details}</p>
        </div>
      </section>
      {/* roh studio value */}
      <ValuesRohStudio/>
      {/* our team section */}
      <OurTeam/>
    </div>
  )
}

export default About
