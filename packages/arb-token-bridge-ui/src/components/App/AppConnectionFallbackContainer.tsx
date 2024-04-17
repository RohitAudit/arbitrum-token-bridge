import { InformationCircleIcon } from '@heroicons/react/24/outline'

import { GET_HELP_LINK } from '../../constants'
import { ExternalLink } from '../common/ExternalLink'
import metamaskLogo from '@/icons/MetamaskLogo.svg'
import Image from 'next/image'

// function WalletConnectWarning() {
//   return (
//     <div className="mx-4 flex max-w-md flex-col gap-1 self-end rounded bg-cyan px-3 py-2 text-sm text-cyan-dark sm:mx-6">
//       <div className="flex items-center gap-1">
//         <InformationCircleIcon className="h-3 w-3 stroke-2" />
//         <span className="font-normal">
//           Connection issues with WalletConnect
//         </span>
//       </div>
//       <div>
//         Users connecting to the site using WalletConnect may experience errors
//         due to their upgrade to v2. Please{' '}
//         <ExternalLink
//           className="underline hover:no-underline"
//           href={GET_HELP_LINK}
//         >
//           contact support
//         </ExternalLink>{' '}
//         if you have any issues.
//       </div>
//     </div>
//   )
// }

function WalletConnectWarning() {
  return (
    <>
      <div className="mt-8  flex w-full flex-col items-center justify-center">
        <h1 className="text-[2.5rem] font-black  ">Get Started</h1>

        <div>
          <Image
            src={metamaskLogo}
            width={200}
            height={200}
            alt="metamask logo"
            className=" "
          />
        </div>
        <h1 className="mt-4 text-lg font-light ">
          connect your wallet to get started{' '}
        </h1>
      </div>
    </>
  )
}
export function AppConnectionFallbackContainer({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col pt-4">
      <WalletConnectWarning />
    </div>
  )
}
