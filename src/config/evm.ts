/*******************************************************************************
 *   (c) 2024 dataswap
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
import { DatasetMetadataEvm } from '@dataswapjs/dataswapjs';
import datasetMetaAbi from '@dataswapcore/contracts/abi/v0.8/Datasets.json';
import * as dotenv from 'dotenv';
dotenv.config();

export const datasetMetadataEvm_Calibration = new DatasetMetadataEvm(
  datasetMetaAbi,
  '0x023e4b966b943c830b7d4cae84fe761641b29003',
  process.env.CALIBRATION_LOTUS_PROVIDER_URL,
);

export const datasetMetadataEvm_Main = new DatasetMetadataEvm(
  datasetMetaAbi,
  '0x023e4b966b943c830b7d4cae84fe761641b29003',
  process.env.CALIBRATION_LOTUS_PROVIDER_URL,
);