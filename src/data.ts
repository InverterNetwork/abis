export const BountyManager = {
  'v1.0': {
    name: 'BountyManager',
    description: 'A module for managing bounties',
    version: '1.0',
    moduletype: 'logicModule',
    itterable: [
      {
        type: 'read',
        name: 'getBountyInformation',
        description: 'Returns the Bounty instance with id `id`.',
        inputs: [{ name: 'bountyId', type: 'uint256' }],
        outputs: [
          {
            name: 'bounty',
            type: 'tuple',
            components: [
              { name: 'minimumPayoutAmount', type: 'uint256', tag: 'decimal' },
              { name: 'maximumPayoutAmount', type: 'uint256', tag: 'decimal' },
              { name: 'details', type: 'bytes', tag: 'any(string)' },
              { name: 'locked', type: 'bool' },
            ],
          },
        ],
      },
      {
        type: 'read',
        name: 'getClaimInformation',
        description: 'Returns the Claim instance with id `id`.',
        inputs: [{ name: 'claimId', type: 'uint256' }],
        outputs: [
          {
            name: 'claim',
            type: 'tuple',
            components: [
              { name: 'bountyId', type: 'uint256' },
              {
                name: 'contributors',
                type: 'tuple[]',
                components: [
                  { name: 'addr', type: 'address' },
                  { name: 'claimAmount', type: 'uint256', tag: 'decimal' },
                ],
              },
              { name: 'details', type: 'bytes', tag: 'any(string)' },
              { name: 'claimed', type: 'bool' },
            ],
          },
        ],
      },
      {
        type: 'read',
        name: 'isExistingBountyId',
        description: 'Returns whether Bounty with id `id` exists.',
        inputs: [{ name: 'bountyId', type: 'uint256' }],
        outputs: [{ name: 'isExistingBountyId', type: 'bool' }],
      },
      {
        type: 'read',
        name: 'isExistingClaimId',
        description: 'Returns whether Claim with id `id` exists.',
        inputs: [{ name: 'claimId', type: 'uint256' }],
        outputs: [{ name: 'isExistingClaimId', type: 'bool' }],
      },
      {
        type: 'read',
        name: 'listBountyIds',
        description: 'Returns total list of Bounty ids.',
        inputs: [],
        outputs: [{ name: 'bountyIds', type: 'uint256[]' }],
      },
      {
        type: 'read',
        name: 'listClaimIds',
        description: 'Returns total list of Claim ids.',
        inputs: [],
        outputs: [{ name: 'claimIds', type: 'uint256[]' }],
      },
      {
        type: 'read',
        name: 'listClaimIdsForContributorAddress',
        description:
          'Returns a list of Claim ids in which contributor Address is used.',
        inputs: [{ name: 'contributorAddrs', type: 'address' }],
        outputs: [{ name: 'contributorClaimIds', type: 'uint256[]' }],
      },
      {
        type: 'read',
        name: 'outstandingTokenAmount',
        description: 'Returns the total outstanding token payment amount.',
        inputs: [],
        outputs: [{ name: '', type: 'uint256' }],
      },
      {
        type: 'read',
        name: 'paymentOrders',
        description: 'Returns the list of outstanding payment orders.',
        inputs: [],
        outputs: [
          {
            name: '',
            type: 'tuple[]',
            components: [
              { name: 'recipient', type: 'address' },
              { name: 'amount', type: 'uint256' },
              { name: 'createdAt', type: 'uint256' },
              { name: 'dueTo', type: 'uint256' },
            ],
          },
        ],
      },
      {
        type: 'write',
        name: 'addBounty',
        description: 'Adds a new Bounty.',
        inputs: [
          { name: 'minimumPayoutAmount', type: 'uint256', tag: 'decimal' },
          { name: 'maximumPayoutAmount', type: 'uint256', tag: 'decimal' },
          { name: 'details', type: 'bytes', tag: 'any(string)' },
        ],
        outputs: [{ name: 'bountyId', type: 'uint256' }],
      },
      {
        type: 'write',
        name: 'addClaim',
        description: 'Adds a new Claim.',
        inputs: [
          { name: 'bountyId', type: 'uint256' },
          {
            name: 'contributors',
            type: 'tuple[]',
            components: [
              { name: 'addr', type: 'address' },
              { name: 'claimAmount', type: 'uint256', tag: 'decimal' },
            ],
          },
          { name: 'details', type: 'bytes', tag: 'any(string)' },
        ],
        outputs: [{ name: 'claimId', type: 'uint256' }],
      },
      {
        type: 'write',
        name: 'amountPaid',
        description:
          'Notifies the PaymentClient, that tokens have been paid out accordingly',
        inputs: [{ name: 'amount', type: 'uint256' }],
        outputs: [],
      },
      {
        type: 'write',
        name: 'collectPaymentOrders',
        description: 'Collects outstanding payment orders.',
        inputs: [],
        outputs: [
          {
            name: 'paymentOrders',
            type: 'tuple[]',
            components: [
              { name: 'recipient', type: 'address' },
              { name: 'amount', type: 'uint256' },
              { name: 'createdAt', type: 'uint256' },
              { name: 'dueTo', type: 'uint256' },
            ],
          },
          { name: 'totalTokenAmount', type: 'uint256' },
        ],
      },
      {
        type: 'write',
        name: 'lockBounty',
        description: 'Locks the Bounty so it cant be claimed.',
        inputs: [{ name: 'bountyId', type: 'uint256' }],
        outputs: [],
      },
      {
        type: 'write',
        name: 'updateBounty',
        description: "Updates a Bounty's informations.",
        inputs: [
          { name: 'bountyId', type: 'uint256' },
          { name: 'details', type: 'bytes', tag: 'any(string)' },
        ],
        outputs: [],
      },
      {
        type: 'write',
        name: 'updateClaimContributors',
        description: "Updates a Claim's contributor informations.",
        inputs: [
          { name: 'claimId', type: 'uint256' },
          {
            name: 'contributors',
            type: 'tuple[]',
            components: [
              { name: 'addr', type: 'address' },
              { name: 'claimAmount', type: 'uint256', tag: 'decimal' },
            ],
          },
        ],
        outputs: [],
      },
      {
        type: 'write',
        name: 'updateClaimDetails',
        description: 'Updates a Claim Details.',
        inputs: [
          { name: 'claimId', type: 'uint256' },
          { name: 'details', type: 'bytes', tag: 'any(string)' },
        ],
        outputs: [],
      },
      {
        type: 'write',
        name: 'verifyClaim',
        description: 'Completes a Bounty by verifying a claim.',
        inputs: [
          { name: 'claimId', type: 'uint256' },
          {
            name: 'contributors',
            type: 'tuple[]',
            components: [
              { name: 'addr', type: 'address' },
              { name: 'claimAmount', type: 'uint256', tag: 'decimal' },
            ],
          },
        ],
        outputs: [],
      },
    ],
    abi: [
      {
        inputs: [],
        name: 'Module__BountyManager__AlreadyClaimed',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__BountyManager__BountyLocked',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__BountyManager__ClaimExceedsGivenPayoutAmounts',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__BountyManager__ContributorsChanged',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__BountyManager__InvalidBountyId',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__BountyManager__InvalidClaimId',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__BountyManager__InvalidContributorAddress',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__BountyManager__InvalidContributorAmount',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__BountyManager__InvalidContributorsLength',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__BountyManager__InvalidPayoutAmounts',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__BountyManager__OnlyClaimContributor',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__ERC20PaymentClient__ArrayLengthMismatch',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__ERC20PaymentClient__CallerNotAuthorized',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__ERC20PaymentClient__InvalidAmount',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__ERC20PaymentClient__InvalidDueTo',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__ERC20PaymentClient__InvalidRecipient',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__ERC20PaymentClient__TokenTransferFailed',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint256',
            name: 'bountyId',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'minimumPayoutAmount',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'maximumPayoutAmount',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'bytes',
            name: 'details',
            type: 'bytes',
          },
        ],
        name: 'BountyAdded',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint256',
            name: 'bountyId',
            type: 'uint256',
          },
        ],
        name: 'BountyLocked',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint256',
            name: 'bountyId',
            type: 'uint256',
          },
          {
            indexed: true,
            internalType: 'bytes',
            name: 'details',
            type: 'bytes',
          },
        ],
        name: 'BountyUpdated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint256',
            name: 'claimId',
            type: 'uint256',
          },
          {
            indexed: true,
            internalType: 'uint256',
            name: 'bountyId',
            type: 'uint256',
          },
          {
            components: [
              { internalType: 'address', name: 'addr', type: 'address' },
              { internalType: 'uint256', name: 'claimAmount', type: 'uint256' },
            ],
            indexed: true,
            internalType: 'struct IBountyManager.Contributor[]',
            name: 'contributors',
            type: 'tuple[]',
          },
          {
            indexed: false,
            internalType: 'bytes',
            name: 'details',
            type: 'bytes',
          },
        ],
        name: 'ClaimAdded',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint256',
            name: 'claimId',
            type: 'uint256',
          },
          {
            components: [
              { internalType: 'address', name: 'addr', type: 'address' },
              { internalType: 'uint256', name: 'claimAmount', type: 'uint256' },
            ],
            indexed: true,
            internalType: 'struct IBountyManager.Contributor[]',
            name: 'contributors',
            type: 'tuple[]',
          },
        ],
        name: 'ClaimContributorsUpdated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint256',
            name: 'claimId',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'bytes',
            name: 'details',
            type: 'bytes',
          },
        ],
        name: 'ClaimDetailsUpdated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint256',
            name: 'claimId',
            type: 'uint256',
          },
        ],
        name: 'ClaimVerified',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'recipient',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'PaymentOrderAdded',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'minimumPayoutAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'maximumPayoutAmount',
            type: 'uint256',
          },
          { internalType: 'bytes', name: 'details', type: 'bytes' },
        ],
        name: 'addBounty',
        outputs: [
          { internalType: 'uint256', name: 'bountyId', type: 'uint256' },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'bountyId', type: 'uint256' },
          {
            components: [
              { internalType: 'address', name: 'addr', type: 'address' },
              { internalType: 'uint256', name: 'claimAmount', type: 'uint256' },
            ],
            internalType: 'struct IBountyManager.Contributor[]',
            name: 'contributors',
            type: 'tuple[]',
          },
          { internalType: 'bytes', name: 'details', type: 'bytes' },
        ],
        name: 'addClaim',
        outputs: [
          { internalType: 'uint256', name: 'claimId', type: 'uint256' },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }],
        name: 'amountPaid',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'collectPaymentOrders',
        outputs: [
          {
            components: [
              { internalType: 'address', name: 'recipient', type: 'address' },
              { internalType: 'uint256', name: 'amount', type: 'uint256' },
              { internalType: 'uint256', name: 'createdAt', type: 'uint256' },
              { internalType: 'uint256', name: 'dueTo', type: 'uint256' },
            ],
            internalType: 'struct IERC20PaymentClient.PaymentOrder[]',
            name: 'paymentOrders',
            type: 'tuple[]',
          },
          {
            internalType: 'uint256',
            name: 'totalTokenAmount',
            type: 'uint256',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'bountyId', type: 'uint256' },
        ],
        name: 'getBountyInformation',
        outputs: [
          {
            components: [
              {
                internalType: 'uint256',
                name: 'minimumPayoutAmount',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'maximumPayoutAmount',
                type: 'uint256',
              },
              { internalType: 'bytes', name: 'details', type: 'bytes' },
              { internalType: 'bool', name: 'locked', type: 'bool' },
            ],
            internalType: 'struct IBountyManager.Bounty',
            name: 'bounty',
            type: 'tuple',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'uint256', name: 'claimId', type: 'uint256' }],
        name: 'getClaimInformation',
        outputs: [
          {
            components: [
              { internalType: 'uint256', name: 'bountyId', type: 'uint256' },
              {
                components: [
                  { internalType: 'address', name: 'addr', type: 'address' },
                  {
                    internalType: 'uint256',
                    name: 'claimAmount',
                    type: 'uint256',
                  },
                ],
                internalType: 'struct IBountyManager.Contributor[]',
                name: 'contributors',
                type: 'tuple[]',
              },
              { internalType: 'bytes', name: 'details', type: 'bytes' },
              { internalType: 'bool', name: 'claimed', type: 'bool' },
            ],
            internalType: 'struct IBountyManager.Claim',
            name: 'claim',
            type: 'tuple',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'bountyId', type: 'uint256' },
        ],
        name: 'isExistingBountyId',
        outputs: [
          { internalType: 'bool', name: 'isExistingBountyId', type: 'bool' },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'uint256', name: 'claimId', type: 'uint256' }],
        name: 'isExistingClaimId',
        outputs: [
          { internalType: 'bool', name: 'isExistingClaimId', type: 'bool' },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'listBountyIds',
        outputs: [
          { internalType: 'uint256[]', name: 'bountyIds', type: 'uint256[]' },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'listClaimIds',
        outputs: [
          { internalType: 'uint256[]', name: 'claimIds', type: 'uint256[]' },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'contributorAddrs',
            type: 'address',
          },
        ],
        name: 'listClaimIdsForContributorAddress',
        outputs: [
          {
            internalType: 'uint256[]',
            name: 'contributorClaimIds',
            type: 'uint256[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'bountyId', type: 'uint256' },
        ],
        name: 'lockBounty',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'outstandingTokenAmount',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'paymentOrders',
        outputs: [
          {
            components: [
              { internalType: 'address', name: 'recipient', type: 'address' },
              { internalType: 'uint256', name: 'amount', type: 'uint256' },
              { internalType: 'uint256', name: 'createdAt', type: 'uint256' },
              { internalType: 'uint256', name: 'dueTo', type: 'uint256' },
            ],
            internalType: 'struct IERC20PaymentClient.PaymentOrder[]',
            name: '',
            type: 'tuple[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'bountyId', type: 'uint256' },
          { internalType: 'bytes', name: 'details', type: 'bytes' },
        ],
        name: 'updateBounty',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'claimId', type: 'uint256' },
          {
            components: [
              { internalType: 'address', name: 'addr', type: 'address' },
              { internalType: 'uint256', name: 'claimAmount', type: 'uint256' },
            ],
            internalType: 'struct IBountyManager.Contributor[]',
            name: 'contributors',
            type: 'tuple[]',
          },
        ],
        name: 'updateClaimContributors',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'claimId', type: 'uint256' },
          { internalType: 'bytes', name: 'details', type: 'bytes' },
        ],
        name: 'updateClaimDetails',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'claimId', type: 'uint256' },
          {
            components: [
              { internalType: 'address', name: 'addr', type: 'address' },
              { internalType: 'uint256', name: 'claimAmount', type: 'uint256' },
            ],
            internalType: 'struct IBountyManager.Contributor[]',
            name: 'contributors',
            type: 'tuple[]',
          },
        ],
        name: 'verifyClaim',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
  },
} as const
