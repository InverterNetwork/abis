export const BountyManager = {
  'v1.0': {
    name: 'BountyManager',
    description: 'A module for managing bounties',
    version: 'v1.0',
    moduleType: 'logicModule',
    itterable: [
      {
        type: 'read',
        name: 'getBountyInformation',
        description: 'Returns the Bounty instance with id `id`.',
        inputs: [{ name: 'bountyId', type: 'uint256' }],
        outputs: [
          {
            name: 'Bounty',
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
        outputs: [{ name: 'isExistingBountyId', type: 'bool' }],
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
        outputs: [{ name: 'claimIds', type: 'uint256[]' }],
      },
      {
        type: 'read',
        name: 'outstandingTokenAmount',
        description: 'Returns the total outstanding token payment amount.',
        inputs: [],
        outputs: [
          { name: 'outstandingTokenAmount', type: 'uint256', tag: 'decimal' },
        ],
      },
      {
        type: 'read',
        name: 'paymentOrders',
        description: 'Returns the list of outstanding payment orders.',
        inputs: [],
        outputs: [
          {
            name: 'paymentOrders',
            type: 'tuple[]',
            components: [
              { name: 'recipient', type: 'address' },
              { name: 'amount', type: 'uint256', tag: 'decimal' },
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
        inputs: [{ name: 'amount', type: 'uint256', tag: 'decimal' }],
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
              { name: 'amount', type: 'uint256', tag: 'decimal' },
              { name: 'createdAt', type: 'uint256' },
              { name: 'dueTo', type: 'uint256' },
            ],
          },
          { name: 'outstandingTokenAmount', type: 'uint256', tag: 'decimal' },
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
            name: 'outstandingTokenAmount',
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
            name: 'Bounty',
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
          { internalType: 'bool', name: 'isExistingBountyId', type: 'bool' },
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
          { internalType: 'uint256[]', name: 'claimIds', type: 'uint256[]' },
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
        outputs: [
          {
            internalType: 'uint256',
            name: 'outstandingTokenAmount',
            type: 'uint256',
          },
        ],
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
            name: 'paymentOrders',
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
export const RebasingFundingManager = {
  'v1.0': {
    name: 'RebasingFundingManager',
    description: 'A rebasing funding manager module',
    version: 'v1.0',
    moduleType: 'fundingManager',
    itterable: [
      {
        type: 'read',
        name: 'token',
        description: 'Returns the IERC20 token of the funding manager.',
        inputs: [],
        outputs: [{ name: '', type: 'address' }],
      },
      {
        type: 'write',
        name: 'deposit',
        description: 'Deposits an amount of the token.',
        inputs: [{ name: 'amount', type: 'uint256', tag: 'decimal' }],
        outputs: [],
      },
      {
        type: 'write',
        name: 'depositFor',
        description: 'Deposits an amount of the token for an adddress.',
        inputs: [
          { name: 'to', type: 'address' },
          { name: 'amount', type: 'uint256', tag: 'decimal' },
        ],
        outputs: [],
      },
      {
        type: 'write',
        name: 'transferOrchestratorToken',
        description: 'Transfers the orchestrator token to a specific address.',
        inputs: [
          { name: 'to', type: 'address' },
          { name: 'amount', type: 'uint256', tag: 'decimal' },
        ],
        outputs: [],
      },
      {
        type: 'write',
        name: 'withdraw',
        description: 'Withdraws an amount of the token.',
        inputs: [{ name: 'amount', type: 'uint256', tag: 'decimal' }],
        outputs: [],
      },
      {
        type: 'write',
        name: 'withdrawTo',
        description: 'Withdraws an amount of the token to an address.',
        inputs: [
          { name: 'to', type: 'address' },
          { name: 'amount', type: 'uint256', tag: 'decimal' },
        ],
        outputs: [],
      },
    ],
    abi: [
      {
        inputs: [],
        name: 'Module__FundingManager__CannotSelfDeposit',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__FundingManager__DepositCapReached',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__FundingManager__InvalidAddress',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: '_from',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: '_for',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'uint256',
            name: '_amount',
            type: 'uint256',
          },
        ],
        name: 'Deposit',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: '_to',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'uint256',
            name: '_amount',
            type: 'uint256',
          },
        ],
        name: 'TransferOrchestratorToken',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: '_from',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: '_for',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'uint256',
            name: '_amount',
            type: 'uint256',
          },
        ],
        name: 'Withdrawal',
        type: 'event',
      },
      {
        inputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }],
        name: 'deposit',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'amount', type: 'uint256' },
        ],
        name: 'depositFor',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'token',
        outputs: [
          { internalType: 'contract IERC20', name: '', type: 'address' },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'amount', type: 'uint256' },
        ],
        name: 'transferOrchestratorToken',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }],
        name: 'withdraw',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'amount', type: 'uint256' },
        ],
        name: 'withdrawTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
  },
} as const
export const SimplePaymentProcessor = {
  'v1.0': {
    name: 'SimplePaymentProcessor',
    version: 'v1.0',
    moduleType: 'paymentProcessor',
    itterable: [
      {
        type: 'read',
        name: 'token',
        description:
          'Returns the IERC20 token the payment processor can process.',
        inputs: [],
        outputs: [{ name: '', type: 'address' }],
      },
      {
        type: 'write',
        name: 'cancelRunningPayments',
        description:
          'Cancels all unfinished payments from an {IERC20PaymentClient} instance.',
        inputs: [{ name: 'client', type: 'address' }],
        outputs: [],
      },
      {
        type: 'write',
        name: 'processPayments',
        description:
          'Processes all payments from an {IERC20PaymentClient} instance.',
        inputs: [{ name: 'client', type: 'address' }],
        outputs: [],
      },
    ],
    abi: [
      {
        inputs: [],
        name: 'Module__PaymentManager__CannotCallOnOtherClientsOrders',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__PaymentManager__OnlyCallableByModule',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'paymentClient',
            type: 'address',
          },
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
          {
            indexed: false,
            internalType: 'uint256',
            name: 'createdAt',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'dueTo',
            type: 'uint256',
          },
        ],
        name: 'PaymentOrderProcessed',
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
            indexed: true,
            internalType: 'address',
            name: 'token',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'TokensReleased',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'contract IERC20PaymentClient',
            name: 'client',
            type: 'address',
          },
        ],
        name: 'cancelRunningPayments',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'contract IERC20PaymentClient',
            name: 'client',
            type: 'address',
          },
        ],
        name: 'processPayments',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'token',
        outputs: [
          { internalType: 'contract IERC20', name: '', type: 'address' },
        ],
        stateMutability: 'view',
        type: 'function',
      },
    ],
  },
} as const
export const RoleAuthorizer = {
  'v1.0': {
    name: 'RoleAuthorizer',
    version: 'v1.0',
    moduleType: 'authorizer',
    itterable: [
      {
        type: 'read',
        name: 'getManagerRole',
        description: 'Returns the role ID of the manager role',
        inputs: [],
        outputs: [{ name: 'managerRoleId', type: 'bytes32' }],
      },
      {
        type: 'read',
        name: 'getOwnerRole',
        description: 'Returns the role ID of the owner role',
        inputs: [],
        outputs: [{ name: 'ownerRoleId', type: 'bytes32' }],
      },
      {
        type: 'read',
        name: 'getRoleAdmin',
        inputs: [{ name: 'role', type: 'bytes32' }],
        outputs: [{ name: '', type: 'bytes32' }],
      },
      {
        type: 'read',
        name: 'getRoleMember',
        inputs: [
          { name: 'role', type: 'bytes32' },
          { name: 'index', type: 'uint256' },
        ],
        outputs: [{ name: '', type: 'address' }],
      },
      {
        type: 'read',
        name: 'getRoleMemberCount',
        inputs: [{ name: 'role', type: 'bytes32' }],
        outputs: [{ name: '', type: 'uint256' }],
      },
      {
        type: 'read',
        name: 'hasModuleRole',
        description:
          'Asks whether an address holds the required module role to execute the current transaction.',
        inputs: [
          { name: 'role', type: 'bytes32' },
          { name: 'who', type: 'address' },
        ],
        outputs: [{ name: 'hasModuleRole', type: 'bool' }],
      },
      {
        type: 'read',
        name: 'hasRole',
        inputs: [
          { name: 'role', type: 'bytes32' },
          { name: 'account', type: 'address' },
        ],
        outputs: [{ name: '', type: 'bool' }],
      },
      {
        type: 'write',
        name: 'burnAdminFromModuleRole',
        description: 'Irreversibly burns the admin of a given role.',
        inputs: [{ name: 'role', type: 'bytes32' }],
        outputs: [],
      },
      {
        type: 'write',
        name: 'generateRoleId',
        description:
          'Helper function to generate a bytes32 role hash for a module role',
        inputs: [
          { name: 'module', type: 'address' },
          { name: 'role', type: 'bytes32' },
        ],
        outputs: [{ name: 'roleId', type: 'bytes32' }],
      },
      {
        type: 'write',
        name: 'grantGlobalRole',
        description: 'Grants a global role to a target',
        inputs: [
          { name: 'role', type: 'bytes32' },
          { name: 'target', type: 'address' },
        ],
        outputs: [],
      },
      {
        type: 'write',
        name: 'grantRole',
        inputs: [
          { name: 'role', type: 'bytes32' },
          { name: 'account', type: 'address' },
        ],
        outputs: [],
      },
      {
        type: 'write',
        name: 'grantRoleFromModule',
        description: 'Used by a Module to grant a role to a user.',
        inputs: [
          { name: 'role', type: 'bytes32' },
          { name: 'target', type: 'address' },
        ],
        outputs: [],
      },
      {
        type: 'write',
        name: 'renounceRole',
        inputs: [
          { name: 'role', type: 'bytes32' },
          { name: 'callerConfirmation', type: 'address' },
        ],
        outputs: [],
      },
      {
        type: 'write',
        name: 'revokeGlobalRole',
        description: 'Revokes a global role from a target',
        inputs: [
          { name: 'role', type: 'bytes32' },
          { name: 'target', type: 'address' },
        ],
        outputs: [],
      },
      {
        type: 'write',
        name: 'revokeRole',
        inputs: [
          { name: 'role', type: 'bytes32' },
          { name: 'account', type: 'address' },
        ],
        outputs: [],
      },
      {
        type: 'write',
        name: 'revokeRoleFromModule',
        description: 'Used by a Module to revoke a role from a user.',
        inputs: [
          { name: 'role', type: 'bytes32' },
          { name: 'target', type: 'address' },
        ],
        outputs: [],
      },
      {
        type: 'write',
        name: 'transferAdminRole',
        description: 'Transfer the admin rights to a given role.',
        inputs: [
          { name: 'roleId', type: 'bytes32' },
          { name: 'newAdmin', type: 'bytes32' },
        ],
        outputs: [],
      },
    ],
    abi: [
      { inputs: [], name: 'AccessControlBadConfirmation', type: 'error' },
      {
        inputs: [
          { internalType: 'address', name: 'account', type: 'address' },
          { internalType: 'bytes32', name: 'neededRole', type: 'bytes32' },
        ],
        name: 'AccessControlUnauthorizedAccount',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__RoleAuthorizer__ModuleNotSelfManaged',
        type: 'error',
      },
      {
        inputs: [{ internalType: 'address', name: 'module', type: 'address' }],
        name: 'Module__RoleAuthorizer__NotActiveModule',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__RoleAuthorizer__OwnerRoleCannotBeEmpty',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
          },
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'previousAdminRole',
            type: 'bytes32',
          },
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'newAdminRole',
            type: 'bytes32',
          },
        ],
        name: 'RoleAdminChanged',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'account',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
        ],
        name: 'RoleGranted',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'account',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
        ],
        name: 'RoleRevoked',
        type: 'event',
      },
      {
        inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }],
        name: 'burnAdminFromModuleRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'module', type: 'address' },
          { internalType: 'bytes32', name: 'role', type: 'bytes32' },
        ],
        name: 'generateRoleId',
        outputs: [{ internalType: 'bytes32', name: 'roleId', type: 'bytes32' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getManagerRole',
        outputs: [
          { internalType: 'bytes32', name: 'managerRoleId', type: 'bytes32' },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getOwnerRole',
        outputs: [
          { internalType: 'bytes32', name: 'ownerRoleId', type: 'bytes32' },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }],
        name: 'getRoleAdmin',
        outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'bytes32', name: 'role', type: 'bytes32' },
          { internalType: 'uint256', name: 'index', type: 'uint256' },
        ],
        name: 'getRoleMember',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }],
        name: 'getRoleMemberCount',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'bytes32', name: 'role', type: 'bytes32' },
          { internalType: 'address', name: 'target', type: 'address' },
        ],
        name: 'grantGlobalRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'bytes32', name: 'role', type: 'bytes32' },
          { internalType: 'address', name: 'account', type: 'address' },
        ],
        name: 'grantRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'bytes32', name: 'role', type: 'bytes32' },
          { internalType: 'address', name: 'target', type: 'address' },
        ],
        name: 'grantRoleFromModule',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'bytes32', name: 'role', type: 'bytes32' },
          { internalType: 'address', name: 'who', type: 'address' },
        ],
        name: 'hasModuleRole',
        outputs: [
          { internalType: 'bool', name: 'hasModuleRole', type: 'bool' },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'bytes32', name: 'role', type: 'bytes32' },
          { internalType: 'address', name: 'account', type: 'address' },
        ],
        name: 'hasRole',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'bytes32', name: 'role', type: 'bytes32' },
          {
            internalType: 'address',
            name: 'callerConfirmation',
            type: 'address',
          },
        ],
        name: 'renounceRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'bytes32', name: 'role', type: 'bytes32' },
          { internalType: 'address', name: 'target', type: 'address' },
        ],
        name: 'revokeGlobalRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'bytes32', name: 'role', type: 'bytes32' },
          { internalType: 'address', name: 'account', type: 'address' },
        ],
        name: 'revokeRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'bytes32', name: 'role', type: 'bytes32' },
          { internalType: 'address', name: 'target', type: 'address' },
        ],
        name: 'revokeRoleFromModule',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'bytes32', name: 'roleId', type: 'bytes32' },
          { internalType: 'bytes32', name: 'newAdmin', type: 'bytes32' },
        ],
        name: 'transferAdminRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
  },
} as const
export const Orchestrator = {
  'v1.0': {
    name: 'Orchestrator',
    version: 'v1.0',
    moduleType: 'orchestrator',
    itterable: [
      {
        type: 'read',
        name: 'authorizer',
        description:
          'The {IAuthorizer} implementation used to authorize addresses.',
        inputs: [],
        outputs: [{ name: 'authorizer', type: 'address' }],
      },
      {
        type: 'read',
        name: 'findModuleAddressInOrchestrator',
        description:
          "find the address of a given module using it's name in a orchestrator",
        inputs: [{ name: 'moduleName', type: 'string' }],
        outputs: [{ name: 'moduleAddress', type: 'address' }],
      },
      {
        type: 'read',
        name: 'fundingManager',
        description:
          'The {IFundingManager} implementation used to hold and distribute Funds.',
        inputs: [],
        outputs: [{ name: 'fundingManager', type: 'address' }],
      },
      {
        type: 'read',
        name: 'isTrustedForwarder',
        description: 'Returns the trusted forwarder for the EIP2771 Standard',
        inputs: [{ name: 'forwarder', type: 'address' }],
        outputs: [{ name: '', type: 'bool' }],
      },
      {
        type: 'read',
        name: 'listModules',
        description: 'Returns the list of all modules.',
        inputs: [],
        outputs: [{ name: 'List', type: 'address[]' }],
      },
      {
        type: 'read',
        name: 'modulesSize',
        description: 'Returns the number of modules.',
        inputs: [],
        outputs: [{ name: '', type: 'uint8' }],
      },
      {
        type: 'read',
        name: 'orchestratorId',
        description: "Returns the orchestrator's id.",
        inputs: [],
        outputs: [{ name: 'orchestratorId', type: 'uint256' }],
      },
      {
        type: 'read',
        name: 'paymentProcessor',
        description:
          'The {IPaymentProcessor} implementation used to process module payments.',
        inputs: [],
        outputs: [{ name: 'paymentProcessor', type: 'address' }],
      },
      {
        type: 'read',
        name: 'version',
        description: 'The version of the orchestrator instance.',
        inputs: [],
        outputs: [{ name: 'version', type: 'string' }],
      },
      {
        type: 'write',
        name: 'addModule',
        description: 'Adds address `module` as module.',
        inputs: [{ name: 'module', type: 'address' }],
        outputs: [],
      },
      {
        type: 'write',
        name: 'executeTx',
        description:
          'Executes a call on target `target` with call data `data`.',
        inputs: [
          { name: 'target', type: 'address' },
          { name: 'data', type: 'bytes' },
        ],
        outputs: [{ name: 'returnData', type: 'bytes' }],
      },
      {
        type: 'write',
        name: 'executeTxFromModule',
        description:
          'Executes a call to `to` with call data `data` either via call',
        inputs: [
          { name: 'to', type: 'address' },
          { name: 'data', type: 'bytes' },
        ],
        outputs: [
          { name: 'Whether', type: 'bool' },
          { name: 'The', type: 'bytes' },
        ],
      },
      {
        type: 'write',
        name: 'init',
        description: 'Initialization function.',
        inputs: [
          { name: 'orchestratorId', type: 'uint256' },
          { name: 'modules', type: 'address[]' },
          { name: 'fundingManager', type: 'address' },
          { name: 'authorizer', type: 'address' },
          { name: 'paymentProcessor', type: 'address' },
        ],
        outputs: [],
      },
      {
        type: 'write',
        name: 'isModule',
        description: 'Returns whether the address `module` is added as module.',
        inputs: [{ name: 'module', type: 'address' }],
        outputs: [{ name: 'True', type: 'bool' }],
      },
      {
        type: 'write',
        name: 'removeModule',
        description: 'Removes address `module` as module.',
        inputs: [{ name: 'module', type: 'address' }],
        outputs: [],
      },
      {
        type: 'write',
        name: 'setAuthorizer',
        description: 'Replaces the current authorizer with `_authorizer`',
        inputs: [{ name: 'authorizer_', type: 'address' }],
        outputs: [],
      },
      {
        type: 'write',
        name: 'setFundingManager',
        description:
          'Replaces the current funding manager with `fundingManager_`',
        inputs: [{ name: 'fundingManager_', type: 'address' }],
        outputs: [],
      },
      {
        type: 'write',
        name: 'setPaymentProcessor',
        description:
          'Replaces the current payment processor with `paymentProcessor_`',
        inputs: [{ name: 'paymentProcessor_', type: 'address' }],
        outputs: [],
      },
    ],
    abi: [
      {
        inputs: [],
        name: 'DependencyInjection__ModuleNotUsedInOrchestrator',
        type: 'error',
      },
      {
        inputs: [
          { internalType: 'bytes32', name: 'role', type: 'bytes32' },
          { internalType: 'address', name: 'caller', type: 'address' },
        ],
        name: 'Orchestrator__CallerNotAuthorized',
        type: 'error',
      },
      { inputs: [], name: 'Orchestrator__ExecuteTxFailed', type: 'error' },
      {
        inputs: [{ internalType: 'address', name: 'module', type: 'address' }],
        name: 'Orchestrator__InvalidModuleType',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Orchestrator__ModuleManager__CallerNotAuthorized',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Orchestrator__ModuleManager__InvalidModuleAddress',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Orchestrator__ModuleManager__IsModule',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Orchestrator__ModuleManager__IsNotModule',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Orchestrator__ModuleManager__ModuleAmountOverLimits',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Orchestrator__ModuleManager__ModulesNotConsecutive',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Orchestrator__ModuleManager__OnlyCallableByModule',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: '_address',
            type: 'address',
          },
        ],
        name: 'AuthorizerUpdated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: '_address',
            type: 'address',
          },
        ],
        name: 'FundingManagerUpdated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'module',
            type: 'address',
          },
        ],
        name: 'ModuleAdded',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'module',
            type: 'address',
          },
        ],
        name: 'ModuleRemoved',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint256',
            name: 'orchestratorId_',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'fundingManager',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'authorizer',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'paymentProcessor',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address[]',
            name: 'modules',
            type: 'address[]',
          },
        ],
        name: 'OrchestratorInitialized',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: '_address',
            type: 'address',
          },
        ],
        name: 'PaymentProcessorUpdated',
        type: 'event',
      },
      {
        inputs: [{ internalType: 'address', name: 'module', type: 'address' }],
        name: 'addModule',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'authorizer',
        outputs: [
          {
            internalType: 'contract IAuthorizer',
            name: 'authorizer',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'target', type: 'address' },
          { internalType: 'bytes', name: 'data', type: 'bytes' },
        ],
        name: 'executeTx',
        outputs: [{ internalType: 'bytes', name: 'returnData', type: 'bytes' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'bytes', name: 'data', type: 'bytes' },
        ],
        name: 'executeTxFromModule',
        outputs: [
          { internalType: 'bool', name: 'Whether', type: 'bool' },
          { internalType: 'bytes', name: 'The', type: 'bytes' },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'string', name: 'moduleName', type: 'string' },
        ],
        name: 'findModuleAddressInOrchestrator',
        outputs: [
          { internalType: 'address', name: 'moduleAddress', type: 'address' },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'fundingManager',
        outputs: [
          {
            internalType: 'contract IFundingManager',
            name: 'fundingManager',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'orchestratorId', type: 'uint256' },
          { internalType: 'address[]', name: 'modules', type: 'address[]' },
          {
            internalType: 'contract IFundingManager',
            name: 'fundingManager',
            type: 'address',
          },
          {
            internalType: 'contract IAuthorizer',
            name: 'authorizer',
            type: 'address',
          },
          {
            internalType: 'contract IPaymentProcessor',
            name: 'paymentProcessor',
            type: 'address',
          },
        ],
        name: 'init',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: 'module', type: 'address' }],
        name: 'isModule',
        outputs: [{ internalType: 'bool', name: 'True', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'forwarder', type: 'address' },
        ],
        name: 'isTrustedForwarder',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'listModules',
        outputs: [
          { internalType: 'address[]', name: 'List', type: 'address[]' },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'modulesSize',
        outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'orchestratorId',
        outputs: [
          { internalType: 'uint256', name: 'orchestratorId', type: 'uint256' },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'paymentProcessor',
        outputs: [
          {
            internalType: 'contract IPaymentProcessor',
            name: 'paymentProcessor',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: 'module', type: 'address' }],
        name: 'removeModule',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'contract IAuthorizer',
            name: 'authorizer_',
            type: 'address',
          },
        ],
        name: 'setAuthorizer',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'contract IFundingManager',
            name: 'fundingManager_',
            type: 'address',
          },
        ],
        name: 'setFundingManager',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'contract IPaymentProcessor',
            name: 'paymentProcessor_',
            type: 'address',
          },
        ],
        name: 'setPaymentProcessor',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'version',
        outputs: [{ internalType: 'string', name: 'version', type: 'string' }],
        stateMutability: 'pure',
        type: 'function',
      },
    ],
  },
} as const
