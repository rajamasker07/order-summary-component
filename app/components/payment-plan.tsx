import React from 'react'
import iconMusic from '@/assets/icon-music.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function PaymentPlan() {
  return (
    <div className='inline-flex place-items-center w-full h-fit rounded-lg p-3 justify-between bg-slate-100'>
      <div className='inline-flex gap-6'>
        <Image src={iconMusic} alt='icon-music' className=""/>
        <div className='text-left'>
          <h1 className='font-bold text-lg'>
            Annual Plan
          </h1>
          <p className='text-sm font-normal'>
            $59.99/year
          </p>
        </div>
      </div>
      <Link href="#" className="underline text-primary-bright-blue">
        change
      </Link>
    </div>
  )
}
