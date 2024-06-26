/*
 * Copyright 2021, Offchain Labs, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* eslint-env node */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetBridger = void 0;
const ethers_1 = require("ethers");
const networks_1 = require("../dataEntities/networks");
const signerOrProvider_1 = require("../dataEntities/signerOrProvider");
/**
 * Base for bridging assets from l1 to l2 and back
 */
class AssetBridger {
    constructor(l2Network) {
        this.l2Network = l2Network;
        this.l1Network = (0, networks_1.getParentForNetwork)(l2Network);
        this.nativeToken = l2Network.nativeToken;
    }
    /**
     * Check the signer/provider matches the l1Network, throws if not
     * @param sop
     */
    async checkL1Network(sop) {
        await signerOrProvider_1.SignerProviderUtils.checkNetworkMatches(sop, this.l1Network.chainID);
    }
    /**
     * Check the signer/provider matches the l2Network, throws if not
     * @param sop
     */
    async checkL2Network(sop) {
        await signerOrProvider_1.SignerProviderUtils.checkNetworkMatches(sop, this.l2Network.chainID);
    }
    /**
     * Whether the chain uses ETH as its native/gas token
     * @returns {boolean}
     */
    get nativeTokenIsEth() {
        return !this.nativeToken || this.nativeToken === ethers_1.constants.AddressZero;
    }
}
exports.AssetBridger = AssetBridger;
