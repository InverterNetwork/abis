export const BountyManager = {
  'v1.0': {
    name: 'BountyManager',
    description: '',
    version: 'v1.0',
    moduleType: 'logicModule',
    abi: [
      {
        type: 'function',
        name: 'BOUNTY_ISSUER_ROLE',
        inputs: [],
        outputs: [{ name: '', type: 'bytes32', internalType: 'bytes32' }],
        stateMutability: 'view',
      },
      {
        type: 'function',
        name: 'CLAIMANT_ROLE',
        inputs: [],
        outputs: [{ name: '', type: 'bytes32', internalType: 'bytes32' }],
        stateMutability: 'view',
      },
      {
        type: 'function',
        name: 'VERIFIER_ROLE',
        inputs: [],
        outputs: [{ name: '', type: 'bytes32', internalType: 'bytes32' }],
        stateMutability: 'view',
      },
      {
        type: 'function',
        name: 'addBounty',
        inputs: [
          {
            name: 'minimumPayoutAmount',
            type: 'uint256',
            internalType: 'uint256',
            tag: 'decimals',
          },
          {
            name: 'maximumPayoutAmount',
            type: 'uint256',
            internalType: 'uint256',
            tag: 'decimals',
          },
          { name: 'details', type: 'bytes', internalType: 'bytes', tag: 'any' },
        ],
        outputs: [
          { name: 'bountyId', type: 'uint256', internalType: 'uint256' },
        ],
        stateMutability: 'nonpayable',
        description: 'Adds a new Bounty.',
      },
      {
        type: 'function',
        name: 'addClaim',
        inputs: [
          { name: 'bountyId', type: 'uint256', internalType: 'uint256' },
          {
            name: 'contributors',
            type: 'tuple[]',
            internalType: 'struct IBountyManager.Contributor[]',
            components: [
              { name: 'addr', type: 'address', internalType: 'address' },
              {
                name: 'claimAmount',
                type: 'uint256',
                internalType: 'uint256',
                tag: 'decimals',
              },
            ],
          },
          { name: 'details', type: 'bytes', internalType: 'bytes', tag: 'any' },
        ],
        outputs: [
          { name: 'claimId', type: 'uint256', internalType: 'uint256' },
        ],
        stateMutability: 'nonpayable',
        description: 'Adds a new Claim.',
      },
      {
        type: 'function',
        name: 'amountPaid',
        inputs: [{ name: 'amount', type: 'uint256', internalType: 'uint256' }],
        outputs: [],
        stateMutability: 'nonpayable',
        description:
          'Notifies the PaymentClient, that tokens have been paid out accordingly',
      },
      {
        type: 'function',
        name: 'collectPaymentOrders',
        inputs: [],
        outputs: [
          {
            name: 'paymentOrders',
            type: 'tuple[]',
            internalType: 'struct IERC20PaymentClient.PaymentOrder[]',
            components: [
              { name: 'recipient', type: 'address', internalType: 'address' },
              { name: 'amount', type: 'uint256', internalType: 'uint256' },
              { name: 'createdAt', type: 'uint256', internalType: 'uint256' },
              { name: 'dueTo', type: 'uint256', internalType: 'uint256' },
            ],
          },
          {
            name: 'outstandingTokenAmount',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        stateMutability: 'nonpayable',
        description: 'Collects outstanding payment orders.',
      },
      {
        type: 'function',
        name: 'decoder',
        inputs: [{ name: 'data', type: 'bytes', internalType: 'bytes' }],
        outputs: [{ name: 'requirement', type: 'bool', internalType: 'bool' }],
        stateMutability: 'pure',
      },
      {
        type: 'function',
        name: 'getBountyInformation',
        inputs: [
          { name: 'bountyId', type: 'uint256', internalType: 'uint256' },
        ],
        outputs: [
          {
            name: 'bounty',
            type: 'tuple',
            internalType: 'struct IBountyManager.Bounty',
            components: [
              {
                name: 'minimumPayoutAmount',
                type: 'uint256',
                internalType: 'uint256',
                tag: 'decimals',
              },
              {
                name: 'maximumPayoutAmount',
                type: 'uint256',
                internalType: 'uint256',
                tag: 'decimals',
              },
              {
                name: 'details',
                type: 'bytes',
                internalType: 'bytes',
                tag: 'any',
              },
              { name: 'locked', type: 'bool', internalType: 'bool' },
            ],
          },
        ],
        stateMutability: 'view',
        description: 'Returns the Bounty instance with id `id`.',
      },
      {
        type: 'function',
        name: 'getClaimInformation',
        inputs: [{ name: 'claimId', type: 'uint256', internalType: 'uint256' }],
        outputs: [
          {
            name: 'claim',
            type: 'tuple',
            internalType: 'struct IBountyManager.Claim',
            components: [
              { name: 'bountyId', type: 'uint256', internalType: 'uint256' },
              {
                name: 'contributors',
                type: 'tuple[]',
                internalType: 'struct IBountyManager.Contributor[]',
                components: [
                  { name: 'addr', type: 'address', internalType: 'address' },
                  {
                    name: 'claimAmount',
                    type: 'uint256',
                    internalType: 'uint256',
                    tag: 'decimals',
                  },
                ],
              },
              {
                name: 'details',
                type: 'bytes',
                internalType: 'bytes',
                tag: 'any',
              },
              { name: 'claimed', type: 'bool', internalType: 'bool' },
            ],
          },
        ],
        stateMutability: 'view',
        description: 'Returns the Claim instance with id `id`.',
      },
      {
        type: 'function',
        name: 'grantModuleRole',
        inputs: [
          { name: 'role', type: 'bytes32', internalType: 'bytes32' },
          { name: 'addr', type: 'address', internalType: 'address' },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
      },
      {
        type: 'function',
        name: 'identifier',
        inputs: [],
        outputs: [{ name: 'The', type: 'bytes32', internalType: 'bytes32' }],
        stateMutability: 'view',
        description: "Returns the module's identifier.",
      },
      {
        type: 'function',
        name: 'init',
        inputs: [
          {
            name: 'orchestrator_',
            type: 'address',
            internalType: 'contract IOrchestrator',
          },
          {
            name: 'metadata',
            type: 'tuple',
            internalType: 'struct IModule.Metadata',
            components: [
              {
                name: 'majorVersion',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'minorVersion',
                type: 'uint256',
                internalType: 'uint256',
              },
              { name: 'url', type: 'string', internalType: 'string' },
              { name: 'title', type: 'string', internalType: 'string' },
            ],
          },
          { name: '', type: 'bytes', internalType: 'bytes' },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
        description: "The module's initializer function.",
      },
      {
        type: 'function',
        name: 'init2',
        inputs: [
          { name: '', type: 'address', internalType: 'contract IOrchestrator' },
          { name: '', type: 'bytes', internalType: 'bytes' },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
      },
      {
        type: 'function',
        name: 'isExistingBountyId',
        inputs: [
          { name: 'bountyId', type: 'uint256', internalType: 'uint256' },
        ],
        outputs: [
          { name: 'isExistingBountyId', type: 'bool', internalType: 'bool' },
        ],
        stateMutability: 'view',
        description: 'Returns whether Bounty with id `id` exists.',
      },
      {
        type: 'function',
        name: 'isExistingClaimId',
        inputs: [{ name: 'claimId', type: 'uint256', internalType: 'uint256' }],
        outputs: [
          { name: 'isExistingBountyId', type: 'bool', internalType: 'bool' },
        ],
        stateMutability: 'view',
        description: 'Returns whether Claim with id `id` exists.',
      },
      {
        type: 'function',
        name: 'isTrustedForwarder',
        inputs: [
          { name: 'forwarder', type: 'address', internalType: 'address' },
        ],
        outputs: [{ name: 'bool', type: 'bool', internalType: 'bool' }],
        stateMutability: 'view',
        description: 'Checks if the provided address is the trusted forwarder',
      },
      {
        type: 'function',
        name: 'listBountyIds',
        inputs: [],
        outputs: [
          { name: 'bountyIds', type: 'uint256[]', internalType: 'uint256[]' },
        ],
        stateMutability: 'view',
        description: 'Returns total list of Bounty ids.',
      },
      {
        type: 'function',
        name: 'listClaimIds',
        inputs: [],
        outputs: [
          { name: 'claimIds', type: 'uint256[]', internalType: 'uint256[]' },
        ],
        stateMutability: 'view',
        description: 'Returns total list of Claim ids.',
      },
      {
        type: 'function',
        name: 'listClaimIdsForContributorAddress',
        inputs: [
          {
            name: 'contributorAddrs',
            type: 'address',
            internalType: 'address',
          },
        ],
        outputs: [
          { name: 'claimIds', type: 'uint256[]', internalType: 'uint256[]' },
        ],
        stateMutability: 'view',
        description:
          'Returns a list of Claim ids in which contributor Address is used.',
      },
      {
        type: 'function',
        name: 'lockBounty',
        inputs: [
          { name: 'bountyId', type: 'uint256', internalType: 'uint256' },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
        description: 'Locks the Bounty so it cant be claimed.',
      },
      {
        type: 'function',
        name: 'orchestrator',
        inputs: [],
        outputs: [
          {
            name: 'The',
            type: 'address',
            internalType: 'contract IOrchestrator',
          },
        ],
        stateMutability: 'view',
        description:
          "Returns the module's {IOrchestrator} orchestrator instance.",
      },
      {
        type: 'function',
        name: 'outstandingTokenAmount',
        inputs: [],
        outputs: [
          {
            name: 'outstandingTokenAmount',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
        stateMutability: 'view',
        description: 'Returns the total outstanding token payment amount.',
      },
      {
        type: 'function',
        name: 'paymentOrders',
        inputs: [],
        outputs: [
          {
            name: 'paymentOrders',
            type: 'tuple[]',
            internalType: 'struct IERC20PaymentClient.PaymentOrder[]',
            components: [
              { name: 'recipient', type: 'address', internalType: 'address' },
              { name: 'amount', type: 'uint256', internalType: 'uint256' },
              { name: 'createdAt', type: 'uint256', internalType: 'uint256' },
              { name: 'dueTo', type: 'uint256', internalType: 'uint256' },
            ],
          },
        ],
        stateMutability: 'view',
        description: 'Returns the list of outstanding payment orders.',
      },
      {
        type: 'function',
        name: 'revokeModuleRole',
        inputs: [
          { name: 'role', type: 'bytes32', internalType: 'bytes32' },
          { name: 'addr', type: 'address', internalType: 'address' },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
      },
      {
        type: 'function',
        name: 'supportsInterface',
        inputs: [
          { name: 'interfaceId', type: 'bytes4', internalType: 'bytes4' },
        ],
        outputs: [],
        stateMutability: 'view',
      },
      {
        type: 'function',
        name: 'title',
        inputs: [],
        outputs: [{ name: 'The', type: 'string', internalType: 'string' }],
        stateMutability: 'view',
        description: "Returns the module's title.",
      },
      {
        type: 'function',
        name: 'updateBounty',
        inputs: [
          { name: 'bountyId', type: 'uint256', internalType: 'uint256' },
          { name: 'details', type: 'bytes', internalType: 'bytes', tag: 'any' },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
        description: "Updates a Bounty's informations.",
      },
      {
        type: 'function',
        name: 'updateClaimContributors',
        inputs: [
          { name: 'claimId', type: 'uint256', internalType: 'uint256' },
          {
            name: 'contributors',
            type: 'tuple[]',
            internalType: 'struct IBountyManager.Contributor[]',
            components: [
              { name: 'addr', type: 'address', internalType: 'address' },
              {
                name: 'claimAmount',
                type: 'uint256',
                internalType: 'uint256',
                tag: 'decimals',
              },
            ],
          },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
        description: "Updates a Claim's contributor informations.",
      },
      {
        type: 'function',
        name: 'updateClaimDetails',
        inputs: [
          { name: 'claimId', type: 'uint256', internalType: 'uint256' },
          { name: 'details', type: 'bytes', internalType: 'bytes', tag: 'any' },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
        description: 'Updates a Claim Details.',
      },
      {
        type: 'function',
        name: 'url',
        inputs: [],
        outputs: [{ name: 'The', type: 'string', internalType: 'string' }],
        stateMutability: 'view',
        description: "Returns the module's URL.",
      },
      {
        type: 'function',
        name: 'verifyClaim',
        inputs: [
          { name: 'claimId', type: 'uint256', internalType: 'uint256' },
          {
            name: 'contributors',
            type: 'tuple[]',
            internalType: 'struct IBountyManager.Contributor[]',
            components: [
              { name: 'addr', type: 'address', internalType: 'address' },
              {
                name: 'claimAmount',
                type: 'uint256',
                internalType: 'uint256',
                tag: 'decimals',
              },
            ],
          },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
        description: 'Completes a Bounty by verifying a claim.',
      },
      {
        type: 'function',
        name: 'version',
        inputs: [],
        outputs: [
          { name: 'The', type: 'uint256', internalType: 'uint256' },
          { name: 'The', type: 'uint256', internalType: 'uint256' },
        ],
        stateMutability: 'view',
        description: "Returns the module's version.",
      },
      {
        type: 'event',
        name: 'BountyAdded',
        inputs: [
          {
            name: 'bountyId',
            type: 'uint256',
            indexed: true,
            internalType: 'uint256',
          },
          {
            name: 'minimumPayoutAmount',
            type: 'uint256',
            indexed: false,
            internalType: 'uint256',
          },
          {
            name: 'maximumPayoutAmount',
            type: 'uint256',
            indexed: false,
            internalType: 'uint256',
          },
          {
            name: 'details',
            type: 'bytes',
            indexed: false,
            internalType: 'bytes',
          },
        ],
        anonymous: false,
      },
      {
        type: 'event',
        name: 'BountyLocked',
        inputs: [
          {
            name: 'bountyId',
            type: 'uint256',
            indexed: true,
            internalType: 'uint256',
          },
        ],
        anonymous: false,
      },
      {
        type: 'event',
        name: 'BountyUpdated',
        inputs: [
          {
            name: 'bountyId',
            type: 'uint256',
            indexed: true,
            internalType: 'uint256',
          },
          {
            name: 'details',
            type: 'bytes',
            indexed: true,
            internalType: 'bytes',
          },
        ],
        anonymous: false,
      },
      {
        type: 'event',
        name: 'ClaimAdded',
        inputs: [
          {
            name: 'claimId',
            type: 'uint256',
            indexed: true,
            internalType: 'uint256',
          },
          {
            name: 'bountyId',
            type: 'uint256',
            indexed: true,
            internalType: 'uint256',
          },
          {
            name: 'contributors',
            type: 'tuple[]',
            indexed: true,
            internalType: 'struct IBountyManager.Contributor[]',
            components: [
              { name: 'addr', type: 'address', internalType: 'address' },
              { name: 'claimAmount', type: 'uint256', internalType: 'uint256' },
            ],
          },
          {
            name: 'details',
            type: 'bytes',
            indexed: false,
            internalType: 'bytes',
          },
        ],
        anonymous: false,
      },
      {
        type: 'event',
        name: 'ClaimContributorsUpdated',
        inputs: [
          {
            name: 'claimId',
            type: 'uint256',
            indexed: true,
            internalType: 'uint256',
          },
          {
            name: 'contributors',
            type: 'tuple[]',
            indexed: true,
            internalType: 'struct IBountyManager.Contributor[]',
            components: [
              { name: 'addr', type: 'address', internalType: 'address' },
              { name: 'claimAmount', type: 'uint256', internalType: 'uint256' },
            ],
          },
        ],
        anonymous: false,
      },
      {
        type: 'event',
        name: 'ClaimDetailsUpdated',
        inputs: [
          {
            name: 'claimId',
            type: 'uint256',
            indexed: true,
            internalType: 'uint256',
          },
          {
            name: 'details',
            type: 'bytes',
            indexed: false,
            internalType: 'bytes',
          },
        ],
        anonymous: false,
      },
      {
        type: 'event',
        name: 'ClaimVerified',
        inputs: [
          {
            name: 'claimId',
            type: 'uint256',
            indexed: true,
            internalType: 'uint256',
          },
        ],
        anonymous: false,
      },
      {
        type: 'event',
        name: 'Initialized',
        inputs: [
          {
            name: 'version',
            type: 'uint64',
            indexed: false,
            internalType: 'uint64',
          },
        ],
        anonymous: false,
      },
      {
        type: 'event',
        name: 'ModuleInitialized',
        inputs: [
          {
            name: 'parentOrchestrator',
            type: 'address',
            indexed: true,
            internalType: 'address',
          },
          {
            name: 'moduleTitle',
            type: 'string',
            indexed: true,
            internalType: 'string',
          },
          {
            name: 'majorVersion',
            type: 'uint256',
            indexed: false,
            internalType: 'uint256',
          },
          {
            name: 'minorVersion',
            type: 'uint256',
            indexed: false,
            internalType: 'uint256',
          },
        ],
        anonymous: false,
      },
      {
        type: 'event',
        name: 'PaymentOrderAdded',
        inputs: [
          {
            name: 'recipient',
            type: 'address',
            indexed: true,
            internalType: 'address',
          },
          {
            name: 'amount',
            type: 'uint256',
            indexed: false,
            internalType: 'uint256',
          },
        ],
        anonymous: false,
      },
      {
        type: 'error',
        name: 'AddressEmptyCode',
        inputs: [{ name: 'target', type: 'address', internalType: 'address' }],
      },
      {
        type: 'error',
        name: 'AddressInsufficientBalance',
        inputs: [{ name: 'account', type: 'address', internalType: 'address' }],
      },
      { type: 'error', name: 'FailedInnerCall', inputs: [] },
      { type: 'error', name: 'InvalidInitialization', inputs: [] },
      {
        type: 'error',
        name: 'Library__LinkedIdList__InvalidNewId',
        inputs: [],
      },
      {
        type: 'error',
        name: 'Module_OrchestratorCallbackFailed',
        inputs: [{ name: 'funcSig', type: 'string', internalType: 'string' }],
      },
      {
        type: 'error',
        name: 'Module__BountyManager__AlreadyClaimed',
        inputs: [],
      },
      {
        type: 'error',
        name: 'Module__BountyManager__BountyLocked',
        inputs: [],
      },
      {
        type: 'error',
        name: 'Module__BountyManager__ClaimExceedsGivenPayoutAmounts',
        inputs: [],
      },
      {
        type: 'error',
        name: 'Module__BountyManager__ContributorsChanged',
        inputs: [],
      },
      {
        type: 'error',
        name: 'Module__BountyManager__InvalidBountyId',
        inputs: [],
      },
      {
        type: 'error',
        name: 'Module__BountyManager__InvalidClaimId',
        inputs: [],
      },
      {
        type: 'error',
        name: 'Module__BountyManager__InvalidContributorAddress',
        inputs: [],
      },
      {
        type: 'error',
        name: 'Module__BountyManager__InvalidContributorAmount',
        inputs: [],
      },
      {
        type: 'error',
        name: 'Module__BountyManager__InvalidContributorsLength',
        inputs: [],
      },
      {
        type: 'error',
        name: 'Module__BountyManager__InvalidPayoutAmounts',
        inputs: [],
      },
      {
        type: 'error',
        name: 'Module__BountyManager__OnlyClaimContributor',
        inputs: [],
      },
      {
        type: 'error',
        name: 'Module__CallerNotAuthorized',
        inputs: [
          { name: 'role', type: 'bytes32', internalType: 'bytes32' },
          { name: 'caller', type: 'address', internalType: 'address' },
        ],
      },
      { type: 'error', name: 'Module__CannotCallInit2Again', inputs: [] },
      {
        type: 'error',
        name: 'Module__ERC20PaymentClient__ArrayLengthMismatch',
        inputs: [],
      },
      {
        type: 'error',
        name: 'Module__ERC20PaymentClient__CallerNotAuthorized',
        inputs: [],
      },
      {
        type: 'error',
        name: 'Module__ERC20PaymentClient__InvalidAmount',
        inputs: [],
      },
      {
        type: 'error',
        name: 'Module__ERC20PaymentClient__InvalidDueTo',
        inputs: [],
      },
      {
        type: 'error',
        name: 'Module__ERC20PaymentClient__InvalidRecipient',
        inputs: [],
      },
      {
        type: 'error',
        name: 'Module__ERC20PaymentClient__TokenTransferFailed',
        inputs: [],
      },
      { type: 'error', name: 'Module__InvalidMetadata', inputs: [] },
      { type: 'error', name: 'Module__InvalidOrchestratorAddress', inputs: [] },
      {
        type: 'error',
        name: 'Module__NoDependencyOrMalformedDependencyData',
        inputs: [],
      },
      { type: 'error', name: 'Module__OnlyCallableByOrchestrator', inputs: [] },
      { type: 'error', name: 'NotInitializing', inputs: [] },
      {
        type: 'error',
        name: 'SafeERC20FailedOperation',
        inputs: [{ name: 'token', type: 'address', internalType: 'address' }],
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
        outputs: [],
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
        outputs: [],
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
