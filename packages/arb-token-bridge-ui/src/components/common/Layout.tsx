import localFont from 'next/font/local'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import Image from 'next/image'
import EclipseBottom from '@/images/eclipse_bottom.png'
import {
  ArbQueryParamProvider,
  useArbQueryParams
} from '../../hooks/useArbQueryParams'
import { Sidebar } from '../Sidebar'
import { Toast } from './atoms/Toast'
import { SiteBanner } from './SiteBanner'
import ResponsiveAppBar from './navbar'
import 'react-toastify/dist/ReactToastify.css'
 
// import { AppContextProvider } from '../App/AppContext'
// import {
//   darkTheme,
//   lightTheme,
//   RainbowKitProvider,
//   Theme,
//   useConnectModal
// } from '@rainbow-me/rainbowkit'
// import merge from 'lodash-es/merge'
// import { getProps } from '../../util/wagmi/setup'

// import { useAccount, useNetwork, WagmiConfig } from 'wagmi'
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
 
// const targetChainKey =  "holesky"

// const { wagmiConfigProps, rainbowKitProviderProps } = getProps(targetChainKey)
// const rainbowkitTheme = merge(darkTheme(), {
//   colors: {
   
 
   
//     accentColor: '#1377BB',
//   },
//   fonts: {
//     body: 'Roboto, sans-serif'
//   }
// } as Theme)

  return (
    <div className={twMerge('relative flex-col  ')}>
 
      <div className="relative flex flex-col sm:min-h-screen  bg-[var(--background)]">
      {/* <ArbQueryParamProvider>
        <WagmiConfig {...wagmiConfigProps}>
          <RainbowKitProvider
            theme={rainbowkitTheme}
            {...rainbowKitProviderProps}
          >
 
          <ResponsiveAppBar/>
        
          </RainbowKitProvider>
        </WagmiConfig>
      </ArbQueryParamProvider> */}
      
        <div className="flex flex-row">
          {/* <Sidebar /> */}

          <main className="grow">
            {props.children}
          </main>

          <Toast />
        </div>

        
      </div>
    </div>
  )
}
