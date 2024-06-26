import { Chain } from '@wagmi/core/chains';
import { InjectedConnectorOptions, InjectedConnector } from './injected.js';
import { E as Ethereum } from './types-82d07ee0.js';
import '@wagmi/core';
import 'ethers';
import './base-84a689bb.js';
import 'eventemitter3';
import 'abitype';

type MetaMaskConnectorOptions = Pick<InjectedConnectorOptions, 'shimDisconnect'> & {
    /**
     * While "disconnected" with `shimDisconnect`, allows user to select a different MetaMask account (than the currently connected account) when trying to connect.
     */
    UNSTABLE_shimOnConnectSelectAccount?: boolean;
};
declare class MetaMaskConnector extends InjectedConnector {
    #private;
    readonly id = "metaMask";
    protected shimDisconnectKey: string;
    constructor({ chains, options: options_, }?: {
        chains?: Chain[];
        options?: MetaMaskConnectorOptions;
    });
    connect({ chainId }?: {
        chainId?: number;
    }): Promise<{
        account: `0x${string}`;
        chain: {
            id: number;
            unsupported: boolean;
        };
        provider: Ethereum;
    }>;
}

export { MetaMaskConnector, MetaMaskConnectorOptions };
