export const ERC20 = {
  'v1.0': {
    name: 'ERC20',
    description: 'Interface of the ERC-20 standard as defined in the ERC.',
    version: 'v1.0',
    moduleType: 'external',
    deploymentArgs: { configData: [], dependencyData: [] },
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
            tag: 'decimals',
          },
        ],
        name: 'Approval',
        type: 'event',
        outputs: [],
        description:
          'Emitted when the allowance of a `spender` for an `owner` is set by a call to {approve}. `amount` is the new allowance.',
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
        outputs: [],
        description:
          'Emitted when `amount` tokens are moved from one account (`from`) to another (`to`). Note that `amount` may be zero.',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
            description: 'The owner of the tokens',
          },
          {
            internalType: 'address',
            name: 'spender',
            type: 'address',
            description: 'The spender of the token allowance',
          },
        ],
        name: 'allowance',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            description:
              'allowance The current allowance amout approved by the owner for the spender',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'Returns the remaining number of tokens that `spender` will be allowed to spend on behalf of `owner` through {transferFrom}. This is zero by default.',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'spender',
            type: 'address',
            description: 'The spender of the token allowance',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            description:
              'The amount that may be spent on behalf of the `spender`',
          },
        ],
        name: 'approve',
        outputs: [
          {
            internalType: 'bool',
            name: '_0',
            type: 'bool',
            description:
              'success A boolean value indicating whether the operation succeeded.',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          "Sets a `amount` amount of tokens as the allowance of `spender` over the caller's tokens.",
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'account',
            type: 'address',
            description: 'The account whose balance is to be checked',
          },
        ],
        name: 'balanceOf',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            description:
              'balance Returns the amount of tokens owned by the account.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the amount of tokens owned by `account`.',
      },
      {
        inputs: [],
        name: 'decimals',
        outputs: [
          {
            internalType: 'uint8',
            name: '_0',
            type: 'uint8',
            description: 'decimals The decimals of the token.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the decimals of the token.',
      },
      {
        inputs: [],
        name: 'name',
        outputs: [
          {
            internalType: 'string',
            name: '_0',
            type: 'string',
            description: 'name The name of the token.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the name of the token.',
      },
      {
        inputs: [],
        name: 'symbol',
        outputs: [
          {
            internalType: 'string',
            name: '_0',
            type: 'string',
            description: 'symbol The symbol of the token.',
          },
        ],
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
            name: '_0',
            type: 'uint256',
            description: 'totalSupply The total amount of tokens.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the amount of tokens in existence.',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
            description: 'The target of the transfer',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            description: 'The amount of tokens to be transferred',
          },
        ],
        name: 'transfer',
        outputs: [
          {
            internalType: 'bool',
            name: '_0',
            type: 'bool',
            description:
              'success Returns a boolean value indicating whether the operation succeeded.',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          "Transfers a `amount` amount of tokens from the caller's account to `to`.",
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
            description: 'The source of the transfer',
          },
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
            description: 'The target of the transfer',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            description: 'The amount of tokens to be transferred',
          },
        ],
        name: 'transferFrom',
        outputs: [
          {
            internalType: 'bool',
            name: '_0',
            type: 'bool',
            description:
              'success Returns a boolean value indicating whether the operation succeeded.',
          },
        ],
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
    deploymentArgs: { configData: [], dependencyData: [] },
    abi: [
      {
        inputs: [{ internalType: 'string', name: 'funcSig', type: 'string' }],
        name: 'Module_OrchestratorCallbackFailed',
        type: 'error',
      },
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
        inputs: [
          { internalType: 'bytes32', name: 'role', type: 'bytes32' },
          { internalType: 'address', name: 'caller', type: 'address' },
        ],
        name: 'Module__CallerNotAuthorized',
        type: 'error',
      },
      { inputs: [], name: 'Module__CannotCallInit2Again', type: 'error' },
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
      { inputs: [], name: 'Module__InvalidMetadata', type: 'error' },
      { inputs: [], name: 'Module__InvalidOrchestratorAddress', type: 'error' },
      {
        inputs: [],
        name: 'Module__NoDependencyOrMalformedDependencyData',
        type: 'error',
      },
      { inputs: [], name: 'Module__OnlyCallableByOrchestrator', type: 'error' },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint256',
            name: 'bountyId',
            type: 'uint256',
            description: 'The id of the newly added Bounty.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'minimumPayoutAmount',
            type: 'uint256',
            description:
              'The minimum amount of tokens the Bounty will pay out upon being claimed',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'maximumPayoutAmount',
            type: 'uint256',
            description:
              'The maximum amount of tokens the Bounty will pay out upon being claimed',
          },
          {
            indexed: false,
            internalType: 'bytes',
            name: 'details',
            type: 'bytes',
            description: "The Bounty's details.",
          },
        ],
        name: 'BountyAdded',
        type: 'event',
        outputs: [],
        description: 'Event emitted when a new Bounty is added.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint256',
            name: 'bountyId',
            type: 'uint256',
            description: 'The id of the locked Bounty.',
          },
        ],
        name: 'BountyLocked',
        type: 'event',
        outputs: [],
        description: 'Event emitted when a Bounty gets locked.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint256',
            name: 'bountyId',
            type: 'uint256',
            description: 'The id of the updated Bounty.',
          },
          {
            indexed: true,
            internalType: 'bytes',
            name: 'details',
            type: 'bytes',
            description: "The Bounty's details.",
          },
        ],
        name: 'BountyUpdated',
        type: 'event',
        outputs: [],
        description: 'Event emitted when a Bounty got updated.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint256',
            name: 'claimId',
            type: 'uint256',
            description: 'The id of the newly added Claim.',
          },
          {
            indexed: true,
            internalType: 'uint256',
            name: 'bountyId',
            type: 'uint256',
            description: 'The id of the Bounty that got claimed.',
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
            description: 'The contributor information for the Claim.',
          },
          {
            indexed: false,
            internalType: 'bytes',
            name: 'details',
            type: 'bytes',
            description: "The Claim's details.",
          },
        ],
        name: 'ClaimAdded',
        type: 'event',
        outputs: [],
        description: 'Event emitted when a new Claim is added.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint256',
            name: 'claimId',
            type: 'uint256',
            description: 'The id of the Claim that got updated.',
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
            description: 'The contributor information for the Claim.',
          },
        ],
        name: 'ClaimContributorsUpdated',
        type: 'event',
        outputs: [],
        description: 'Event emitted when Claim Contributors got updated.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint256',
            name: 'claimId',
            type: 'uint256',
            description: 'The id of the Claim that got updated.',
          },
          {
            indexed: false,
            internalType: 'bytes',
            name: 'details',
            type: 'bytes',
            description: "The Claim's details.",
          },
        ],
        name: 'ClaimDetailsUpdated',
        type: 'event',
        outputs: [],
        description: 'Event emitted when Claim Details got updated.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint256',
            name: 'claimId',
            type: 'uint256',
            description: 'The id of the Claim that got verified.',
          },
        ],
        name: 'ClaimVerified',
        type: 'event',
        outputs: [],
        description: 'Event emitted when a Claim is verified.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'parentOrchestrator',
            type: 'address',
            description:
              'The address of the orchestrator the module is linked to.',
          },
          {
            indexed: true,
            internalType: 'string',
            name: 'moduleTitle',
            type: 'string',
            description: 'The title of the module.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'majorVersion',
            type: 'uint256',
            description: 'The major version of the module.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'minorVersion',
            type: 'uint256',
            description: 'The minor version of the module.',
          },
        ],
        name: 'ModuleInitialized',
        type: 'event',
        outputs: [],
        description: 'Module has been initialized.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'recipient',
            type: 'address',
            description: 'The address that will receive the payment.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            description: 'The amount of tokens the payment consists of.',
          },
        ],
        name: 'PaymentOrderAdded',
        type: 'event',
        outputs: [],
        description: 'Added a payment order.',
      },
      {
        inputs: [],
        name: 'BOUNTY_ISSUER_ROLE',
        outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'CLAIMANT_ROLE',
        outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'VERIFIER_ROLE',
        outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'minimumPayoutAmount',
            type: 'uint256',
            description:
              'The minimum amount of tokens the Bounty will pay out upon being claimed',
          },
          {
            internalType: 'uint256',
            name: 'maximumPayoutAmount',
            type: 'uint256',
            description:
              'The maximum amount of tokens the Bounty will pay out upon being claimed',
          },
          {
            internalType: 'bytes',
            name: 'details',
            type: 'bytes',
            description: "The Bounty's details.",
          },
        ],
        name: 'addBounty',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            description: "bountyId The newly added Bounty's id.",
          },
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
              { internalType: 'uint256', name: 'claimAmount', type: 'uint256' },
            ],
            internalType: 'struct IBountyManager.Contributor[]',
            name: 'contributors',
            type: 'tuple[]',
            description: 'The contributor information for the Claim',
          },
          {
            internalType: 'bytes',
            name: 'details',
            type: 'bytes',
            description: "The Claim's details.",
          },
        ],
        name: 'addClaim',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            description: "claimId The newly added Claim's id.",
          },
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
            description: 'amount of tokens that have been paid out',
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
              { internalType: 'uint256', name: 'amount', type: 'uint256' },
              { internalType: 'uint256', name: 'createdAt', type: 'uint256' },
              { internalType: 'uint256', name: 'dueTo', type: 'uint256' },
            ],
            internalType: 'struct IERC20PaymentClient.PaymentOrder[]',
            name: '_0',
            type: 'tuple[]',
            description: 'paymentOrders list of payment orders',
          },
          {
            internalType: 'uint256',
            name: '_1',
            type: 'uint256',
            description: 'outstandingTokenAmount total amount of token to pay',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Collects outstanding payment orders.',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'bountyId',
            type: 'uint256',
            description: 'The id of the Bounty to return.',
          },
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
            name: '_0',
            type: 'tuple',
            description: 'Bounty with id `id`.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the Bounty instance with id `id`.',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'claimId',
            type: 'uint256',
            description: 'The id of the Claim to return.',
          },
        ],
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
            name: '_0',
            type: 'tuple',
            description: 'claim Claim with id `id`.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the Claim instance with id `id`.',
      },
      {
        inputs: [
          { internalType: 'bytes32', name: 'role', type: 'bytes32' },
          { internalType: 'address', name: 'addr', type: 'address' },
        ],
        name: 'grantModuleRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'identifier',
        outputs: [
          {
            internalType: 'bytes32',
            name: '_0',
            type: 'bytes32',
            description: "The module's identifier.",
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: "Returns the module's identifier.",
      },
      {
        inputs: [
          {
            internalType: 'contract IOrchestrator',
            name: 'orchestrator',
            type: 'address',
            description: "The module's orchestrator instance.",
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'majorVersion',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'minorVersion',
                type: 'uint256',
              },
              { internalType: 'string', name: 'url', type: 'string' },
              { internalType: 'string', name: 'title', type: 'string' },
            ],
            internalType: 'struct IModule.Metadata',
            name: 'metadata',
            type: 'tuple',
            description: "The module's metadata.",
          },
          {
            internalType: 'bytes',
            name: 'configData',
            type: 'bytes',
            description:
              'Variable config data for specific module implementations.',
          },
        ],
        name: 'init',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: "The module's initializer function.",
      },
      {
        inputs: [
          {
            internalType: 'contract IOrchestrator',
            name: 'orchestrator',
            type: 'address',
            description: "The module's orchestrator instance.",
          },
          {
            internalType: 'bytes',
            name: 'configData',
            type: 'bytes',
            description:
              'Variable config data for specific module implementations.',
          },
        ],
        name: 'init2',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Second initialization function of the module to take care of dependencies.',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'bountyId',
            type: 'uint256',
            description: 'The id of the Bounty to test.',
          },
        ],
        name: 'isExistingBountyId',
        outputs: [
          {
            internalType: 'bool',
            name: '_0',
            type: 'bool',
            description:
              'isExistingBountyId True if Claim with id `id` exists, false otherwise.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns whether Bounty with id `id` exists.',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'claimId',
            type: 'uint256',
            description: 'The id of the Bounty to test.',
          },
        ],
        name: 'isExistingClaimId',
        outputs: [
          {
            internalType: 'bool',
            name: '_0',
            type: 'bool',
            description:
              'isExistingBountyId True if Claim with id `id` exists, false otherwise.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns whether Claim with id `id` exists.',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'forwarder',
            type: 'address',
            description: 'The contract address to be verified.',
          },
        ],
        name: 'isTrustedForwarder',
        outputs: [
          {
            internalType: 'bool',
            name: '_0',
            type: 'bool',
            description: 'bool Is the given address the trusted forwarder',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Checks if the provided address is the trusted forwarder',
      },
      {
        inputs: [],
        name: 'listBountyIds',
        outputs: [
          {
            internalType: 'uint256[]',
            name: '_0',
            type: 'uint256[]',
            description: 'bountyIds List of Bounty ids.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns total list of Bounty ids.',
      },
      {
        inputs: [],
        name: 'listClaimIds',
        outputs: [
          {
            internalType: 'uint256[]',
            name: '_0',
            type: 'uint256[]',
            description: 'claimIds List of Claim ids.',
          },
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
            description: 'claim ids are filtered by the contributor address',
          },
        ],
        name: 'listClaimIdsForContributorAddress',
        outputs: [
          {
            internalType: 'uint256[]',
            name: '_0',
            type: 'uint256[]',
            description: 'claimIds List of Claim ids.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'Returns a list of Claim ids in which contributor Address is used.',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'bountyId',
            type: 'uint256',
            description: 'The id of the Bounty that will be locked.',
          },
        ],
        name: 'lockBounty',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Locks the Bounty so it cant be claimed.',
      },
      {
        inputs: [],
        name: 'orchestrator',
        outputs: [
          {
            internalType: 'contract IOrchestrator',
            name: '_0',
            type: 'address',
            description: "The module's orchestrator.",
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          "Returns the module's {IOrchestrator} orchestrator instance.",
      },
      {
        inputs: [],
        name: 'outstandingTokenAmount',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            description:
              'outstandingTokenAmount Total outstanding token payment amount.',
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
              { internalType: 'uint256', name: 'amount', type: 'uint256' },
              { internalType: 'uint256', name: 'createdAt', type: 'uint256' },
              { internalType: 'uint256', name: 'dueTo', type: 'uint256' },
            ],
            internalType: 'struct IERC20PaymentClient.PaymentOrder[]',
            name: '_0',
            type: 'tuple[]',
            description: 'paymentOrders List of outstanding payment orders.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the list of outstanding payment orders.',
      },
      {
        inputs: [
          { internalType: 'bytes32', name: 'role', type: 'bytes32' },
          { internalType: 'address', name: 'addr', type: 'address' },
        ],
        name: 'revokeModuleRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'title',
        outputs: [
          {
            internalType: 'string',
            name: '_0',
            type: 'string',
            description: "The module's title.",
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: "Returns the module's title.",
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'bountyId',
            type: 'uint256',
            description: 'The id of the Bounty that will be updated.',
          },
          {
            internalType: 'bytes',
            name: 'details',
            type: 'bytes',
            description: "The Bounty's details.",
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
          {
            internalType: 'uint256',
            name: 'claimId',
            type: 'uint256',
            description: 'The id of the Claim that will be updated.',
          },
          {
            components: [
              { internalType: 'address', name: 'addr', type: 'address' },
              { internalType: 'uint256', name: 'claimAmount', type: 'uint256' },
            ],
            internalType: 'struct IBountyManager.Contributor[]',
            name: 'contributors',
            type: 'tuple[]',
            description: 'The contributor information for the Claim.',
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
          {
            internalType: 'uint256',
            name: 'claimId',
            type: 'uint256',
            description: 'The id of the Claim that will be updated.',
          },
          {
            internalType: 'bytes',
            name: 'details',
            type: 'bytes',
            description: "The Claim's details.",
          },
        ],
        name: 'updateClaimDetails',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Updates a Claim Details.',
      },
      {
        inputs: [],
        name: 'url',
        outputs: [
          {
            internalType: 'string',
            name: '_0',
            type: 'string',
            description: "The module's URL.",
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: "Returns the module's URL.",
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'claimId',
            type: 'uint256',
            description: 'The id of the Claim that wants to claim the Bounty.',
          },
          {
            components: [
              { internalType: 'address', name: 'addr', type: 'address' },
              { internalType: 'uint256', name: 'claimAmount', type: 'uint256' },
            ],
            internalType: 'struct IBountyManager.Contributor[]',
            name: 'contributors',
            type: 'tuple[]',
            description: 'The contributor information for the Claim.',
          },
        ],
        name: 'verifyClaim',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Completes a Bounty by verifying a claim.',
      },
      {
        inputs: [],
        name: 'version',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            description: "The module's major version.",
          },
          {
            internalType: 'uint256',
            name: '_1',
            type: 'uint256',
            description: "The module's minor version.",
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: "Returns the module's version.",
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
    deploymentArgs: { configData: [], dependencyData: [] },
    abi: [
      { inputs: [], name: 'InvalidAmount', type: 'error' },
      { inputs: [], name: 'InvalidRecipient', type: 'error' },
      { inputs: [], name: 'MaxSupplyReached', type: 'error' },
      {
        inputs: [{ internalType: 'string', name: 'funcSig', type: 'string' }],
        name: 'Module_OrchestratorCallbackFailed',
        type: 'error',
      },
      {
        inputs: [
          { internalType: 'bytes32', name: 'role', type: 'bytes32' },
          { internalType: 'address', name: 'caller', type: 'address' },
        ],
        name: 'Module__CallerNotAuthorized',
        type: 'error',
      },
      { inputs: [], name: 'Module__CannotCallInit2Again', type: 'error' },
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
      { inputs: [], name: 'Module__InvalidMetadata', type: 'error' },
      { inputs: [], name: 'Module__InvalidOrchestratorAddress', type: 'error' },
      {
        inputs: [],
        name: 'Module__NoDependencyOrMalformedDependencyData',
        type: 'error',
      },
      { inputs: [], name: 'Module__OnlyCallableByOrchestrator', type: 'error' },
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
            name: 'value',
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
            name: '_from',
            type: 'address',
            description: 'The address depositing tokens.',
          },
          {
            indexed: true,
            internalType: 'address',
            name: '_for',
            type: 'address',
            description: 'The address that will receive the receipt tokens.',
          },
          {
            indexed: true,
            internalType: 'uint256',
            name: '_amount',
            type: 'uint256',
            description: 'The amount of tokens deposited.',
          },
        ],
        name: 'Deposit',
        type: 'event',
        outputs: [],
        description: 'Event emitted when a deposit takes place.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'parentOrchestrator',
            type: 'address',
            description:
              'The address of the orchestrator the module is linked to.',
          },
          {
            indexed: true,
            internalType: 'string',
            name: 'moduleTitle',
            type: 'string',
            description: 'The title of the module.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'majorVersion',
            type: 'uint256',
            description: 'The major version of the module.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'minorVersion',
            type: 'uint256',
            description: 'The minor version of the module.',
          },
        ],
        name: 'ModuleInitialized',
        type: 'event',
        outputs: [],
        description: 'Module has been initialized.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint256',
            name: 'epoch',
            type: 'uint256',
            description: 'The number of rebases since inception.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'newScalar',
            type: 'uint256',
            description: 'The new scalar.',
          },
        ],
        name: 'Rebase',
        type: 'event',
        outputs: [],
        description: 'Event emitted when the balance scalar is updated.',
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
            name: 'value',
            type: 'uint256',
          },
        ],
        name: 'Transfer',
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
            description: 'The address that will receive the underlying tokens.',
          },
          {
            indexed: true,
            internalType: 'uint256',
            name: '_amount',
            type: 'uint256',
            description: 'The amount of underlying tokens transfered.',
          },
        ],
        name: 'TransferOrchestratorToken',
        type: 'event',
        outputs: [],
        description:
          'Event emitted when a transferal of orchestrator tokens takes place.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: '_from',
            type: 'address',
            description: 'The address supplying the receipt tokens.',
          },
          {
            indexed: true,
            internalType: 'address',
            name: '_for',
            type: 'address',
            description: 'The address that will receive the underlying tokens.',
          },
          {
            indexed: true,
            internalType: 'uint256',
            name: '_amount',
            type: 'uint256',
            description: 'The amount of underlying tokens withdrawn.',
          },
        ],
        name: 'Withdrawal',
        type: 'event',
        outputs: [],
        description: 'Event emitted when a withdrawal takes place.',
      },
      {
        inputs: [],
        name: 'DOMAIN_SEPARATOR',
        outputs: [
          {
            internalType: 'bytes32',
            name: '_0',
            type: 'bytes32',
            description: 'domainSeparator The EIP-712 domain separator hash.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the EIP-712 domain separator hash.',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
            description: 'The owner of the tokens',
          },
          {
            internalType: 'address',
            name: 'spender',
            type: 'address',
            description: 'The spender of the token allowance',
          },
        ],
        name: 'allowance',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            description:
              'allowance The current allowance amout approved by the owner for the spender',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'Returns the remaining number of tokens that `spender` will be allowed to spend on behalf of `owner` through {transferFrom}. This is zero by default.',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'spender',
            type: 'address',
            description: 'The spender of the token allowance',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            description:
              'The amount that may be spent on behalf of the `spender`',
          },
        ],
        name: 'approve',
        outputs: [
          {
            internalType: 'bool',
            name: '_0',
            type: 'bool',
            description:
              'success A boolean value indicating whether the operation succeeded.',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          "Sets a `amount` amount of tokens as the allowance of `spender` over the caller's tokens.",
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'account',
            type: 'address',
            description: 'The account whose balance is to be checked',
          },
        ],
        name: 'balanceOf',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            description:
              'balance Returns the amount of tokens owned by the account.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the amount of tokens owned by `account`.',
      },
      {
        inputs: [],
        name: 'decimals',
        outputs: [
          {
            internalType: 'uint8',
            name: '_0',
            type: 'uint8',
            description: 'decimals The decimals of the token.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the decimals of the token.',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'spender',
            type: 'address',
            description: 'The address of the spender.',
          },
          {
            internalType: 'uint256',
            name: 'tokens',
            type: 'uint256',
            description: 'The amount of tokens to decrease allowance by.',
          },
        ],
        name: 'decreaseAllowance',
        outputs: [
          {
            internalType: 'bool',
            name: '_0',
            type: 'bool',
            description: 'success True if successful.',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Decreases the amount of tokens that msg.sender has allowed to spender.',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            description: 'The amount that is being deposited.',
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
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
            description: 'The address that this deposit is credit towards.',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            description: 'The amount that is being deposited.',
          },
        ],
        name: 'depositFor',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Deposits an amount of the token for an adddress.',
      },
      {
        inputs: [
          { internalType: 'bytes32', name: 'role', type: 'bytes32' },
          { internalType: 'address', name: 'addr', type: 'address' },
        ],
        name: 'grantModuleRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'identifier',
        outputs: [
          {
            internalType: 'bytes32',
            name: '_0',
            type: 'bytes32',
            description: "The module's identifier.",
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: "Returns the module's identifier.",
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'spender',
            type: 'address',
            description: 'The address of the spender.',
          },
          {
            internalType: 'uint256',
            name: 'tokens',
            type: 'uint256',
            description: 'The amount of tokens to increase allowance by.',
          },
        ],
        name: 'increaseAllowance',
        outputs: [
          {
            internalType: 'bool',
            name: '_0',
            type: 'bool',
            description: 'success True if successful.',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Increases the amount of tokens that msg.sender has allowed to spender.',
      },
      {
        inputs: [
          {
            internalType: 'contract IOrchestrator',
            name: 'orchestrator',
            type: 'address',
            description: "The module's orchestrator instance.",
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'majorVersion',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'minorVersion',
                type: 'uint256',
              },
              { internalType: 'string', name: 'url', type: 'string' },
              { internalType: 'string', name: 'title', type: 'string' },
            ],
            internalType: 'struct IModule.Metadata',
            name: 'metadata',
            type: 'tuple',
            description: "The module's metadata.",
          },
          {
            internalType: 'bytes',
            name: 'configData',
            type: 'bytes',
            description:
              'Variable config data for specific module implementations.',
          },
        ],
        name: 'init',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: "The module's initializer function.",
      },
      {
        inputs: [
          {
            internalType: 'contract IOrchestrator',
            name: 'orchestrator',
            type: 'address',
            description: "The module's orchestrator instance.",
          },
          {
            internalType: 'bytes',
            name: 'configData',
            type: 'bytes',
            description:
              'Variable config data for specific module implementations.',
          },
        ],
        name: 'init2',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Second initialization function of the module to take care of dependencies.',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'forwarder',
            type: 'address',
            description: 'The contract address to be verified.',
          },
        ],
        name: 'isTrustedForwarder',
        outputs: [
          {
            internalType: 'bool',
            name: '_0',
            type: 'bool',
            description: 'bool Is the given address the trusted forwarder',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Checks if the provided address is the trusted forwarder',
      },
      {
        inputs: [],
        name: 'name',
        outputs: [
          {
            internalType: 'string',
            name: '_0',
            type: 'string',
            description: 'name The name of the token.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the name of the token.',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'who',
            type: 'address',
            description: 'The address to check the number of permits for.',
          },
        ],
        name: 'nonces',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            description: 'nonces The number of successful permits.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the number of successful permits for an address.',
      },
      {
        inputs: [],
        name: 'orchestrator',
        outputs: [
          {
            internalType: 'contract IOrchestrator',
            name: '_0',
            type: 'address',
            description: "The module's orchestrator.",
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          "Returns the module's {IOrchestrator} orchestrator instance.",
      },
      {
        inputs: [
          { internalType: 'address', name: 'owner', type: 'address' },
          { internalType: 'address', name: 'spender', type: 'address' },
          { internalType: 'uint256', name: 'value', type: 'uint256' },
          { internalType: 'uint256', name: 'deadline', type: 'uint256' },
          { internalType: 'uint8', name: 'v', type: 'uint8' },
          { internalType: 'bytes32', name: 'r', type: 'bytes32' },
          { internalType: 'bytes32', name: 's', type: 'bytes32' },
        ],
        name: 'permit',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Sets the amount of tokens that owner has allowed to spender.',
      },
      {
        inputs: [],
        name: 'rebase',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Triggers the next rebase, if applicable.',
      },
      {
        inputs: [
          { internalType: 'bytes32', name: 'role', type: 'bytes32' },
          { internalType: 'address', name: 'addr', type: 'address' },
        ],
        name: 'revokeModuleRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'who',
            type: 'address',
            description: 'The address to query.',
          },
        ],
        name: 'scaledBalanceOf',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            description:
              'scaledBalance The fixed balance of the specified address.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the fixed balance of the specified address.',
      },
      {
        inputs: [],
        name: 'scaledTotalSupply',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            description: 'scaledTotalSupply The total fixed supply.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the total fixed supply.',
      },
      {
        inputs: [],
        name: 'symbol',
        outputs: [
          {
            internalType: 'string',
            name: '_0',
            type: 'string',
            description: 'symbol The symbol of the token.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the symbol of the token.',
      },
      {
        inputs: [],
        name: 'title',
        outputs: [
          {
            internalType: 'string',
            name: '_0',
            type: 'string',
            description: "The module's title.",
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: "Returns the module's title.",
      },
      {
        inputs: [],
        name: 'token',
        outputs: [],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the IERC20 token of the funding manager.',
      },
      {
        inputs: [],
        name: 'totalSupply',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            description: 'totalSupply The total amount of tokens.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the amount of tokens in existence.',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
            description: 'The target of the transfer',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            description: 'The amount of tokens to be transferred',
          },
        ],
        name: 'transfer',
        outputs: [
          {
            internalType: 'bool',
            name: '_0',
            type: 'bool',
            description:
              'success Returns a boolean value indicating whether the operation succeeded.',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          "Transfers a `amount` amount of tokens from the caller's account to `to`.",
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
            description: 'The address to transfer to.',
          },
        ],
        name: 'transferAll',
        outputs: [
          {
            internalType: 'bool',
            name: '_0',
            type: 'bool',
            description: 'success True on success, false otherwise.',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          "Transfer all of the sender's balance to a specified address.",
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
            description: 'The address to send tokens from.',
          },
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
            description: 'The address to transfer to.',
          },
        ],
        name: 'transferAllFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Transfer all balance tokens from one address to another.',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
            description: 'The source of the transfer',
          },
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
            description: 'The target of the transfer',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            description: 'The amount of tokens to be transferred',
          },
        ],
        name: 'transferFrom',
        outputs: [
          {
            internalType: 'bool',
            name: '_0',
            type: 'bool',
            description:
              'success Returns a boolean value indicating whether the operation succeeded.',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          "Moves a `amount` amount of tokens from `from` to `to` using the allowance mechanism. `amount` is then deducted from the caller's allowance.",
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
            description: 'The destination address of the transfer.',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            description: 'The amount that is being sent.',
          },
        ],
        name: 'transferOrchestratorToken',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Transfers the orchestrator token to a specific address.',
      },
      {
        inputs: [],
        name: 'url',
        outputs: [
          {
            internalType: 'string',
            name: '_0',
            type: 'string',
            description: "The module's URL.",
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: "Returns the module's URL.",
      },
      {
        inputs: [],
        name: 'version',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            description: "The module's major version.",
          },
          {
            internalType: 'uint256',
            name: '_1',
            type: 'uint256',
            description: "The module's minor version.",
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: "Returns the module's version.",
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            description: 'The amount that is being withdrawn.',
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
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
            description:
              'The address that the withdrawn tokens should be sent to.',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            description: 'The amount that is being withdrawn.',
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
    deploymentArgs: { configData: [], dependencyData: [] },
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
            description: 'The payment client that originated the order.',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'recipient',
            type: 'address',
            description: 'The address that will receive the payment.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            description: 'The amount of tokens the payment consists of.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'createdAt',
            type: 'uint256',
            description: 'Timestamp at which the order was created.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'dueTo',
            type: 'uint256',
            description:
              'Timestamp at which the full amount should be payed out/claimable.',
          },
        ],
        name: 'PaymentOrderProcessed',
        type: 'event',
        outputs: [],
        description: 'Emitted when a payment gets processed for execution.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'recipient',
            type: 'address',
            description: 'The address that will receive the payment.',
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
            description: 'The amount of tokens the payment consists of.',
          },
        ],
        name: 'TokensReleased',
        type: 'event',
        outputs: [],
        description:
          'Emitted when an amount of ERC20 tokens gets sent out of the contract.',
      },
      {
        inputs: [
          {
            internalType: 'contract IERC20PaymentClient',
            name: 'client',
            type: 'address',
            description:
              'The {IERC20PaymentClient} instance to process its to payments.',
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
            description:
              'The {IERC20PaymentClient} instance to process its to payments.',
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
        outputs: [],
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
    deploymentArgs: { configData: [], dependencyData: [] },
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
        outputs: [],
        description:
          "Emitted when `newAdminRole` is set as ``role``'s admin role, replacing `previousAdminRole` `DEFAULT_ADMIN_ROLE` is the starting admin for all roles, despite {RoleAdminChanged} not being emitted signaling this.",
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
        outputs: [],
        description:
          'Emitted when `account` is granted `role`. `sender` is the account that originated the contract call, an admin role bearer except when using {AccessControl-_setupRole}.',
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
        outputs: [],
        description:
          'Emitted when `account` is revoked `role`. `sender` is the account that originated the contract call: - if using `revokeRole`, it is the admin role bearer - if using `renounceRole`, it is the role bearer (i.e. `account`)',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to remove admin access from',
          },
        ],
        name: 'burnAdminFromModuleRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Irreversibly burns the admin of a given role.',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'module',
            type: 'address',
            description: 'The address of the module to generate the hash for',
          },
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The ID number of the role to generate the hash for',
          },
        ],
        name: 'generateRoleId',
        outputs: [
          {
            internalType: 'bytes32',
            name: '_0',
            type: 'bytes32',
            description: 'roleId The ID of the role for a module.',
          },
        ],
        stateMutability: 'pure',
        type: 'function',
        description:
          'Helper function to generate a bytes32 role hash for a module role',
      },
      {
        inputs: [],
        name: 'getManagerRole',
        outputs: [
          {
            internalType: 'bytes32',
            name: '_0',
            type: 'bytes32',
            description: 'managerRoleId The manager role ID',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the role ID of the manager role',
      },
      {
        inputs: [],
        name: 'getOwnerRole',
        outputs: [
          {
            internalType: 'bytes32',
            name: '_0',
            type: 'bytes32',
            description: 'ownerRoleId The owner role ID',
          },
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
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to grant',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
            description: 'The address to grant the role to',
          },
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
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The identifier of the role to grant',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
            description: 'The address to which to grant the role.',
          },
        ],
        name: 'grantRoleFromModule',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Used by a Module to grant a role to a user.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The identifier of the role we want to check',
          },
          {
            internalType: 'address',
            name: 'who',
            type: 'address',
            description: 'The address on which to perform the check.',
          },
        ],
        name: 'hasModuleRole',
        outputs: [
          {
            internalType: 'bool',
            name: '_0',
            type: 'bool',
            description:
              'hasModuleRole Bool indicating whether the address holds the role',
          },
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
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to grant',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
            description: 'The address to grant the role to',
          },
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
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The identifier of the role to revoke',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
            description: 'The address to revoke the role from.',
          },
        ],
        name: 'revokeRoleFromModule',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Used by a Module to revoke a role from a user.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'roleId',
            type: 'bytes32',
            description: 'The role on which to peform the admin transfer',
          },
          {
            internalType: 'bytes32',
            name: 'newAdmin',
            type: 'bytes32',
            description: 'The new role to which to transfer admin access to',
          },
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
    deploymentArgs: { configData: [], dependencyData: [] },
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
            description: 'The new address.',
          },
        ],
        name: 'AuthorizerUpdated',
        type: 'event',
        outputs: [],
        description: 'Authorizer updated to new address.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: '_address',
            type: 'address',
            description: 'The new address.',
          },
        ],
        name: 'FundingManagerUpdated',
        type: 'event',
        outputs: [],
        description: 'FundingManager updated to new address.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'module',
            type: 'address',
            description: "The module's address.",
          },
        ],
        name: 'ModuleAdded',
        type: 'event',
        outputs: [],
        description: 'Event emitted when module added.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'module',
            type: 'address',
            description: "The module's address.",
          },
        ],
        name: 'ModuleRemoved',
        type: 'event',
        outputs: [],
        description: 'Event emitted when module removed.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint256',
            name: 'orchestratorId_',
            type: 'uint256',
            description: 'The id of the orchestrator.',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'fundingManager',
            type: 'address',
            description: 'The address of the funding manager module.',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'authorizer',
            type: 'address',
            description: 'The address of the authorizer module.',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'paymentProcessor',
            type: 'address',
            description: 'The address of the payment processor module.',
          },
          {
            indexed: false,
            internalType: 'address[]',
            name: 'modules',
            type: 'address[]',
            description:
              'The addresses of the other modules used in the orchestrator.',
          },
        ],
        name: 'OrchestratorInitialized',
        type: 'event',
        outputs: [],
        description:
          'Orchestrator has been initialized with the corresponding modules',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: '_address',
            type: 'address',
            description: 'The new address.',
          },
        ],
        name: 'PaymentProcessorUpdated',
        type: 'event',
        outputs: [],
        description: 'PaymentProcessor updated to new address.',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'module',
            type: 'address',
            description: 'The module address to add.',
          },
        ],
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
            name: '_0',
            type: 'address',
            description: 'authorizer The attached authorizer.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'The {IAuthorizer} implementation used to authorize addresses.',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
            description: 'The address to call.',
          },
          {
            internalType: 'bytes',
            name: 'data',
            type: 'bytes',
            description: 'The call data.',
          },
        ],
        name: 'executeTx',
        outputs: [
          {
            internalType: 'bytes',
            name: '_0',
            type: 'bytes',
            description: 'returnData The return data of the call.',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Executes a call on target `target` with call data `data`.',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
            description: 'The address to call.',
          },
          {
            internalType: 'bytes',
            name: 'data',
            type: 'bytes',
            description: 'The call data.',
          },
        ],
        name: 'executeTxFromModule',
        outputs: [
          {
            internalType: 'bool',
            name: '_0',
            type: 'bool',
            description: 'Whether the call succeeded.',
          },
          {
            internalType: 'bytes',
            name: '_1',
            type: 'bytes',
            description: 'The return data of the call.',
          },
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
          {
            internalType: 'address',
            name: '_0',
            type: 'address',
            description:
              'moduleAddress The address of the module with the given name.',
          },
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
            name: '_0',
            type: 'address',
            description: 'fundingManager The attached funding manager.',
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
        inputs: [
          {
            internalType: 'address',
            name: 'module',
            type: 'address',
            description: 'The module to check.',
          },
        ],
        name: 'isModule',
        outputs: [
          {
            internalType: 'bool',
            name: '_0',
            type: 'bool',
            description: 'True if module added, false otherwise.',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Returns whether the address `module` is added as module.',
      },
      {
        inputs: [
          { internalType: 'address', name: 'forwarder', type: 'address' },
        ],
        name: 'isTrustedForwarder',
        outputs: [],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the trusted forwarder for the EIP2771 Standard',
      },
      {
        inputs: [],
        name: 'listModules',
        outputs: [
          {
            internalType: 'address[]',
            name: '_0',
            type: 'address[]',
            description: 'List of all modules.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the list of all modules.',
      },
      {
        inputs: [],
        name: 'modulesSize',
        outputs: [],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the number of modules.',
      },
      {
        inputs: [],
        name: 'orchestratorId',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            description: 'orchestratorId The id of the orchestrator.',
          },
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
            name: '_0',
            type: 'address',
            description: 'paymentProcessor The attached payment processor.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'The {IPaymentProcessor} implementation used to process module payments.',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'module',
            type: 'address',
            description: 'The module address to remove.',
          },
        ],
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
            description: 'The address of the new authorizer module.',
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
            description: 'The address of the new funding manager module.',
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
            description: 'The address of the new payment processor module.',
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
        outputs: [
          {
            internalType: 'string',
            name: '_0',
            type: 'string',
            description: 'version The version string of the orchestrator',
          },
        ],
        stateMutability: 'pure',
        type: 'function',
        description: 'The version of the orchestrator instance.',
      },
    ],
  },
} as const
