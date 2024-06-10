import localFont from 'next/font/local'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import Image from 'next/image'
import EclipseBottom from '@/images/eclipse_bottom.png'

import { Sidebar } from '../Sidebar'
import { Toast } from './atoms/Toast'
import { SiteBanner } from './SiteBanner'

import 'react-toastify/dist/ReactToastify.css'

const unica = localFont({
  src: [
    {
      path: '../../font/Unica77LLWeb-Light.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../../font/Unica77LLWeb-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../font/Unica77LLWeb-Medium.woff2',
      weight: '500',
      style: 'normal'
    }
  ],
  variable: '--font-unica77',
  fallback: ['Roboto', 'sans-serif']
})

export type LayoutProps = {
  children: React.ReactNode
}

export function Layout(props: LayoutProps) {
  return (
    <div className={twMerge('relative flex-col bg-white ')}>
 
      <div className="relative flex flex-col sm:min-h-screen ">
        <div className="flex flex-row">
          <Sidebar />

          <main className="grow">
            <SiteBanner expiryDate="2024-04-07 12:00">
              The Arbitrum Bridge has a new look!
            </SiteBanner>
            {props.children}
          </main>

          <Toast />
        </div>
      </div>
    </div>
  )
}
