//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SimpleStorage
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 *
 */
export const simpleStorageAbi = [
  {
    type: 'constructor',
    inputs: [{ name: '_name', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'data',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_data', internalType: 'string', type: 'string' }],
    name: 'set',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

/**
 *
 */
export const simpleStorageAddress = {
  31337: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
} as const

/**
 *
 */
export const simpleStorageConfig = {
  address: simpleStorageAddress,
  abi: simpleStorageAbi,
} as const
