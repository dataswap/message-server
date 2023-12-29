/*******************************************************************************
 *   (c) 2023 dataswap
 *
 *  Licensed under either the MIT License (the "MIT License") or the Apache License, Version 2.0
 *  (the "Apache License"). You may not use this file except in compliance with one of these
 *  licenses. You may obtain a copy of the MIT License at
 *
 *      https://opensource.org/licenses/MIT
 *
 *  Or the Apache License, Version 2.0 at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the MIT License or the Apache License for the specific language governing permissions and
 *  limitations under the respective licenses.
 ********************************************************************************/

import { Chain } from '@unipackage/filecoin';
import { Context } from '../context';
import { IDecoder, SelectedParams } from '../interface';
// import { Chain } from '@unipackage/filecoin';
import { DataswapMessage } from '@dataswapjs/dataswapjs';
import { selectedMethods } from '../interface/config';

/**
 * Represents a connection to a Filecoin network.
 */
export class Decoder implements IDecoder {
  context: Context;
  /**
   * Creates an instance of ChainNetwork.
   * @param config - The network configuration.
   */
  constructor(context: Context) {
    this.context = context;
  }

  /**
   * Gets pending dataswap messages based on the provided chain information.
   */
  getPendingDataswapMessages(pendingChainInfo: Chain): DataswapMessage[] {
    console.log(pendingChainInfo);
    throw new Error('not implement');
  }

  /**
   * Gets pending selected parameters from a list of dataswap messages.
   */
  getPendingSelectedParams(
    dataswapMessages: DataswapMessage[],
  ): SelectedParams[] {
    try {
      const selectedMsgs = dataswapMessages.filter((msg) =>
        selectedMethods.includes(msg.method),
      );

      const res = selectedMsgs.map((msg) => {
        return {
          method: msg.method,
          params: msg.params,
        } as SelectedParams;
      });

      return res;
    } catch (error) {
      throw new Error(error);
    }
  }
}
