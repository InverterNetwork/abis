export const ERC20 = {
  'v1.0': {
    name: 'ERC20',
    description: 'Interface of the ERC-20 standard as defined in the ERC.',
    version: 'v1.0',
    moduleType: 'external',
    abi: [
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'spender',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'Approval',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'Transfer',
        type: 'event',
      },
      {
        inputs: [
          { internalType: 'address', name: 'owner', type: 'address' },
          { internalType: 'address', name: 'spender', type: 'address' },
        ],
        name: 'allowance',
        outputs: [
          {
            internalType: 'uint256',
            name: 'allowance',
            type: 'uint256',
            tag: 'decimal',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'Returns the remaining number of tokens that `spender` will be allowed to spend on behalf of `owner` through {transferFrom}. This is zero by default.',
      },
      {
        inputs: [
          { internalType: 'address', name: 'spender', type: 'address' },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            tag: 'decimal',
          },
        ],
        name: 'approve',
        outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          "Sets a `amount` amount of tokens as the allowance of `spender` over the caller's tokens.",
      },
      {
        inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
        name: 'balanceOf',
        outputs: [
          {
            internalType: 'uint256',
            name: 'balance',
            type: 'uint256',
            tag: 'decimal',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the amount of tokens owned by `account`.',
      },
      {
        inputs: [],
        name: 'decimals',
        outputs: [{ internalType: 'uint8', name: 'decimals', type: 'uint8' }],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the decimals of the token.',
      },
      {
        inputs: [],
        name: 'name',
        outputs: [{ internalType: 'string', name: 'name', type: 'string' }],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the name of the token.',
      },
      {
        inputs: [],
        name: 'symbol',
        outputs: [{ internalType: 'string', name: 'symbol', type: 'string' }],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the symbol of the token.',
      },
      {
        inputs: [],
        name: 'totalSupply',
        outputs: [
          {
            internalType: 'uint256',
            name: 'totalSupply',
            type: 'uint256',
            tag: 'decimal',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the amount of tokens in existence.',
      },
      {
        inputs: [
          { internalType: 'address', name: 'to', type: 'address' },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            tag: 'decimal',
          },
        ],
        name: 'transfer',
        outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          "Transfers a `amount` amount of tokens from the caller's account to `to`.",
      },
      {
        inputs: [
          { internalType: 'address', name: 'from', type: 'address' },
          { internalType: 'address', name: 'to', type: 'address' },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            tag: 'decimal',
          },
        ],
        name: 'transferFrom',
        outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          "Moves a `amount` amount of tokens from `from` to `to` using the allowance mechanism. `amount` is then deducted from the caller's allowance.",
      },
    ],
  },
} as const
export const BountyManager = {
  'v1.0': {
    name: 'BountyManager',
    description: 'A module for managing bounties',
    version: 'v1.0',
    moduleType: 'logicModule',
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
            tag: 'decimal',
          },
          {
            internalType: 'uint256',
            name: 'maximumPayoutAmount',
            type: 'uint256',
            tag: 'decimal',
          },
          {
            internalType: 'bytes',
            name: 'details',
            type: 'bytes',
            tag: 'any(string)',
          },
        ],
        name: 'addBounty',
        outputs: [
          { internalType: 'uint256', name: 'bountyId', type: 'uint256' },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Adds a new Bounty.',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'bountyId', type: 'uint256' },
          {
            components: [
              { internalType: 'address', name: 'addr', type: 'address' },
              {
                internalType: 'uint256',
                name: 'claimAmount',
                type: 'uint256',
                tag: 'decimal',
              },
            ],
            internalType: 'struct IBountyManager.Contributor[]',
            name: 'contributors',
            type: 'tuple[]',
          },
          {
            internalType: 'bytes',
            name: 'details',
            type: 'bytes',
            tag: 'any(string)',
          },
        ],
        name: 'addClaim',
        outputs: [
          { internalType: 'uint256', name: 'claimId', type: 'uint256' },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Adds a new Claim.',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            tag: 'decimal',
          },
        ],
        name: 'amountPaid',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Notifies the PaymentClient, that tokens have been paid out accordingly',
      },
      {
        inputs: [],
        name: 'collectPaymentOrders',
        outputs: [
          {
            components: [
              { internalType: 'address', name: 'recipient', type: 'address' },
              {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
                tag: 'decimal',
              },
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
            tag: 'decimal',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Collects outstanding payment orders.',
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
                tag: 'decimal',
              },
              {
                internalType: 'uint256',
                name: 'maximumPayoutAmount',
                type: 'uint256',
                tag: 'decimal',
              },
              {
                internalType: 'bytes',
                name: 'details',
                type: 'bytes',
                tag: 'any(string)',
              },
              { internalType: 'bool', name: 'locked', type: 'bool' },
            ],
            internalType: 'struct IBountyManager.Bounty',
            name: 'Bounty',
            type: 'tuple',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the Bounty instance with id `id`.',
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
                    tag: 'decimal',
                  },
                ],
                internalType: 'struct IBountyManager.Contributor[]',
                name: 'contributors',
                type: 'tuple[]',
              },
              {
                internalType: 'bytes',
                name: 'details',
                type: 'bytes',
                tag: 'any(string)',
              },
              { internalType: 'bool', name: 'claimed', type: 'bool' },
            ],
            internalType: 'struct IBountyManager.Claim',
            name: 'claim',
            type: 'tuple',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the Claim instance with id `id`.',
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
        description: 'Returns whether Bounty with id `id` exists.',
      },
      {
        inputs: [{ internalType: 'uint256', name: 'claimId', type: 'uint256' }],
        name: 'isExistingClaimId',
        outputs: [
          { internalType: 'bool', name: 'isExistingBountyId', type: 'bool' },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns whether Claim with id `id` exists.',
      },
      {
        inputs: [],
        name: 'listBountyIds',
        outputs: [
          { internalType: 'uint256[]', name: 'bountyIds', type: 'uint256[]' },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns total list of Bounty ids.',
      },
      {
        inputs: [],
        name: 'listClaimIds',
        outputs: [
          { internalType: 'uint256[]', name: 'claimIds', type: 'uint256[]' },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns total list of Claim ids.',
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
        description:
          'Returns a list of Claim ids in which contributor Address is used.',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'bountyId', type: 'uint256' },
        ],
        name: 'lockBounty',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Locks the Bounty so it cant be claimed.',
      },
      {
        inputs: [],
        name: 'outstandingTokenAmount',
        outputs: [
          {
            internalType: 'uint256',
            name: 'outstandingTokenAmount',
            type: 'uint256',
            tag: 'decimal',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the total outstanding token payment amount.',
      },
      {
        inputs: [],
        name: 'paymentOrders',
        outputs: [
          {
            components: [
              { internalType: 'address', name: 'recipient', type: 'address' },
              {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
                tag: 'decimal',
              },
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
        description: 'Returns the list of outstanding payment orders.',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'bountyId', type: 'uint256' },
          {
            internalType: 'bytes',
            name: 'details',
            type: 'bytes',
            tag: 'any(string)',
          },
        ],
        name: 'updateBounty',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: "Updates a Bounty's informations.",
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'claimId', type: 'uint256' },
          {
            components: [
              { internalType: 'address', name: 'addr', type: 'address' },
              {
                internalType: 'uint256',
                name: 'claimAmount',
                type: 'uint256',
                tag: 'decimal',
              },
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
        description: "Updates a Claim's contributor informations.",
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'claimId', type: 'uint256' },
          {
            internalType: 'bytes',
            name: 'details',
            type: 'bytes',
            tag: 'any(string)',
          },
        ],
        name: 'updateClaimDetails',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Updates a Claim Details.',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'claimId', type: 'uint256' },
          {
            components: [
              { internalType: 'address', name: 'addr', type: 'address' },
              {
                internalType: 'uint256',
                name: 'claimAmount',
                type: 'uint256',
                tag: 'decimal',
              },
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
        description: 'Completes a Bounty by verifying a claim.',
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
        inputs: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            tag: 'decimal',
          },
        ],
        name: 'deposit',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Deposits an amount of the token.',
      },
      {
        inputs: [
          { internalType: 'address', name: 'to', type: 'address' },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            tag: 'decimal',
          },
        ],
        name: 'depositFor',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Deposits an amount of the token for an adddress.',
      },
      {
        inputs: [],
        name: 'token',
        outputs: [
          { internalType: 'contract IERC20', name: '', type: 'address' },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the IERC20 token of the funding manager.',
      },
      {
        inputs: [
          { internalType: 'address', name: 'to', type: 'address' },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            tag: 'decimal',
          },
        ],
        name: 'transferOrchestratorToken',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Transfers the orchestrator token to a specific address.',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            tag: 'decimal',
          },
        ],
        name: 'withdraw',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Withdraws an amount of the token.',
      },
      {
        inputs: [
          { internalType: 'address', name: 'to', type: 'address' },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            tag: 'decimal',
          },
        ],
        name: 'withdrawTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Withdraws an amount of the token to an address.',
      },
    ],
  },
} as const
export const SimplePaymentProcessor = {
  'v1.0': {
    name: 'SimplePaymentProcessor',
    description: '',
    version: 'v1.0',
    moduleType: 'paymentProcessor',
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
        description:
          'Cancels all unfinished payments from an {IERC20PaymentClient} instance.',
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
        description:
          'Processes all payments from an {IERC20PaymentClient} instance.',
      },
      {
        inputs: [],
        name: 'token',
        outputs: [
          { internalType: 'contract IERC20', name: '', type: 'address' },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'Returns the IERC20 token the payment processor can process.',
      },
    ],
  },
} as const
export const RoleAuthorizer = {
  'v1.0': {
    name: 'RoleAuthorizer',
    description: '',
    version: 'v1.0',
    moduleType: 'authorizer',
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
        description: 'Irreversibly burns the admin of a given role.',
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
        description:
          'Helper function to generate a bytes32 role hash for a module role',
      },
      {
        inputs: [],
        name: 'getManagerRole',
        outputs: [
          { internalType: 'bytes32', name: 'managerRoleId', type: 'bytes32' },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the role ID of the manager role',
      },
      {
        inputs: [],
        name: 'getOwnerRole',
        outputs: [
          { internalType: 'bytes32', name: 'ownerRoleId', type: 'bytes32' },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the role ID of the owner role',
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
        description: 'Grants a global role to a target',
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
        description: 'Used by a Module to grant a role to a user.',
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
        description:
          'Asks whether an address holds the required module role to execute the current transaction.',
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
        description: 'Revokes a global role from a target',
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
        description: 'Used by a Module to revoke a role from a user.',
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
        description: 'Transfer the admin rights to a given role.',
      },
    ],
  },
} as const
export const Orchestrator = {
  'v1.0': {
    name: 'Orchestrator',
    description: '',
    version: 'v1.0',
    moduleType: 'orchestrator',
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
        description: 'Adds address `module` as module.',
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
        description:
          'The {IAuthorizer} implementation used to authorize addresses.',
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
        description:
          'Executes a call on target `target` with call data `data`.',
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
        description:
          'Executes a call to `to` with call data `data` either via call',
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
        description:
          "find the address of a given module using it's name in a orchestrator",
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
        description:
          'The {IFundingManager} implementation used to hold and distribute Funds.',
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
        description: 'Initialization function.',
      },
      {
        inputs: [{ internalType: 'address', name: 'module', type: 'address' }],
        name: 'isModule',
        outputs: [{ internalType: 'bool', name: 'True', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Returns whether the address `module` is added as module.',
      },
      {
        inputs: [
          { internalType: 'address', name: 'forwarder', type: 'address' },
        ],
        name: 'isTrustedForwarder',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the trusted forwarder for the EIP2771 Standard',
      },
      {
        inputs: [],
        name: 'listModules',
        outputs: [
          { internalType: 'address[]', name: 'List', type: 'address[]' },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the list of all modules.',
      },
      {
        inputs: [],
        name: 'modulesSize',
        outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the number of modules.',
      },
      {
        inputs: [],
        name: 'orchestratorId',
        outputs: [
          { internalType: 'uint256', name: 'orchestratorId', type: 'uint256' },
        ],
        stateMutability: 'view',
        type: 'function',
        description: "Returns the orchestrator's id.",
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
        description:
          'The {IPaymentProcessor} implementation used to process module payments.',
      },
      {
        inputs: [{ internalType: 'address', name: 'module', type: 'address' }],
        name: 'removeModule',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Removes address `module` as module.',
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
        description: 'Replaces the current authorizer with `_authorizer`',
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
        description:
          'Replaces the current funding manager with `fundingManager_`',
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
        description:
          'Replaces the current payment processor with `paymentProcessor_`',
      },
      {
        inputs: [],
        name: 'version',
        outputs: [{ internalType: 'string', name: 'version', type: 'string' }],
        stateMutability: 'pure',
        type: 'function',
        description: 'The version of the orchestrator instance.',
      },
    ],
  },
} as const
