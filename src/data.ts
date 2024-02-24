export const BountyManager = {
  'v1.0': {
    name: 'BountyManager',
    description: 'A module for managing bounties',
    version: '1.0',
    moduletype: 'logicModule',
    methodMetas: [
      {
        name: 'addBounty',
        descriptions: {
          method: 'Adds a new Bounty.',
          details: "The Bounty's details.",
          maximumPayoutAmount:
            'The maximum amount of tokens the Bounty will pay out upon being claimed',
          minimumPayoutAmount:
            'The minimum amount of tokens the Bounty will pay out upon being claimed',
          returns: { bountyId: "The newly added Bounty's id." },
        },
        tags: {
          minimumPayoutAmount: 'decimal',
          maximumPayoutAmount: 'decimal',
          details: 'any(string)',
        },
      },
      {
        name: 'addClaim',
        descriptions: {
          method: 'Adds a new Claim.',
          contributors: 'The contributor information for the Claim',
          details: "The Claim's details.",
          returns: { claimId: "The newly added Claim's id." },
        },
        tags: { claimAmount: 'decimal', details: 'any(string)' },
      },
      {
        name: 'amountPaid',
        descriptions: {
          method:
            'Notifies the PaymentClient, that tokens have been paid out accordingly',
          amount: 'amount of tokens that have been paid out',
        },
        tags: {},
      },
      {
        name: 'collectPaymentOrders',
        descriptions: {
          method: 'Collects outstanding payment orders.',
          returns: {
            paymentOrders: 'list of payment orders',
            totalTokenAmount: 'total amount of token to pay',
          },
        },
        tags: {},
      },
      {
        name: 'getBountyInformation',
        descriptions: {
          method: 'Returns the Bounty instance with id `id`.',
          bountyId: 'The id of the Bounty to return.',
          returns: { bounty: 'Bounty with id `id`.' },
        },
        tags: {
          minimumPayoutAmount: 'decimal',
          maximumPayoutAmount: 'decimal',
          details: 'any(string)',
        },
      },
      {
        name: 'getClaimInformation',
        descriptions: {
          method: 'Returns the Claim instance with id `id`.',
          claimId: 'The id of the Claim to return.',
          returns: { claim: 'Claim with id `id`.' },
        },
        tags: { claimAmount: 'decimal', details: 'any(string)' },
      },
      {
        name: 'isExistingBountyId',
        descriptions: {
          method: 'Returns whether Bounty with id `id` exists.',
          bountyId: 'The id of the Bounty to test.',
          returns: {
            isExistingBountyId:
              'True if Claim with id `id` exists, false otherwise.',
          },
        },
        tags: {},
      },
      {
        name: 'isExistingClaimId',
        descriptions: {
          method: 'Returns whether Claim with id `id` exists.',
          claimId: 'The id of the Bounty to test.',
          returns: {
            isExistingClaimId:
              'True if Claim with id `id` exists, false otherwise.',
          },
        },
        tags: {},
      },
      {
        name: 'listBountyIds',
        descriptions: {
          method: 'Returns total list of Bounty ids.',
          returns: { bountyIds: 'List of Bounty ids.' },
        },
        tags: {},
      },
      {
        name: 'listClaimIds',
        descriptions: {
          method: 'Returns total list of Claim ids.',
          returns: { claimIds: 'List of Claim ids.' },
        },
        tags: {},
      },
      {
        name: 'listClaimIdsForContributorAddress',
        descriptions: {
          method:
            'Returns a list of Claim ids in which contributor Address is used.',
          contributorAddrs: 'claim ids are filtered by the contributor address',
          returns: { contributorClaimIds: 'List of Claim ids.' },
        },
        tags: {},
      },
      {
        name: 'lockBounty',
        descriptions: {
          method: 'Locks the Bounty so it cant be claimed.',
          bountyId: 'The id of the Bounty that will be locked.',
        },
        tags: {},
      },
      {
        name: 'outstandingTokenAmount',
        descriptions: {
          method: 'Returns the total outstanding token payment amount.',
        },
        tags: {},
      },
      {
        name: 'paymentOrders',
        descriptions: {
          method: 'Returns the list of outstanding payment orders.',
        },
        tags: {},
      },
      {
        name: 'updateBounty',
        descriptions: {
          method: "Updates a Bounty's informations.",
          bountyId: 'The id of the Bounty that will be updated.',
          details: "The Bounty's details.",
        },
        tags: { details: 'any(string)' },
      },
      {
        name: 'updateClaimContributors',
        descriptions: {
          method: "Updates a Claim's contributor informations.",
          claimId: 'The id of the Claim that will be updated.',
          contributors: 'The contributor information for the Claim.',
        },
        tags: { claimAmount: 'decimal' },
      },
      {
        name: 'updateClaimDetails',
        descriptions: {
          method: 'Updates a Claim Details.',
          claimId: 'The id of the Claim that will be updated.',
          details: "The Claim's details.",
        },
        tags: { details: 'any(string)' },
      },
      {
        name: 'verifyClaim',
        descriptions: {
          method: 'Completes a Bounty by verifying a claim.',
          claimId: 'The id of the Claim that wants to claim the Bounty.',
          contributors: 'The contributor information for the Claim.',
        },
        tags: { claimAmount: 'decimal' },
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
