import Image from 'next/image'
import React from 'react'
import illustrationHero from '@/assets/illustration-hero.svg'
import PaymentPlan from './payment-plan'

export default function Card() {
  return (
    <div className="
      flex flex-col gap-2 w-[370px] h-fit
      m-0 p-0
      rounded-2xl shadow-xl overflow-hidden bg-white
    ">

      <Image src={illustrationHero} alt='card-image' className=''/>

      <div id='card-content' className='text-center p-6 flex flex-col gap-6'>

        <h1 className='font-[500] text-neutral-dark-blue'>Order Summary</h1>

        <p className='text-[16px] text-neutral-desaturated-blue'>
          You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
        </p>

        <PaymentPlan/>

        <button className='flex w-full h-10 bg-primary-bright-blue rounded-lg shadow-xl p-2 place-content-center place-items-center text-white font-bold'>
          Proceed to Payment
        </button>

        <button className='flex place-items-center place-content-center w-full h-10 bg-none text-neutral-dark-blue font-bold'>
          Cance Order
        </button>

      </div>

    </div>
  )
}
