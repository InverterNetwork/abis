export const BountyManager = {
  v1: [
    { inputs: [], name: 'Library__LinkedIdList__InvalidNewId', type: 'error' },
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
    { inputs: [], name: 'Module__BountyManager__BountyLocked', type: 'error' },
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
          indexed: false,
          internalType: 'uint8',
          name: 'version',
          type: 'uint8',
        },
      ],
      name: 'Initialized',
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
        },
        {
          internalType: 'uint256',
          name: 'maximumPayoutAmount',
          type: 'uint256',
        },
        { internalType: 'bytes', name: 'details', type: 'bytes' },
      ],
      name: 'addBounty',
      outputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }],
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
      outputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }],
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
          name: '',
          type: 'tuple[]',
        },
        { internalType: 'uint256', name: '', type: 'uint256' },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'bytes', name: 'data', type: 'bytes' }],
      name: 'decoder',
      outputs: [{ internalType: 'bool', name: 'requirement', type: 'bool' }],
      stateMutability: 'pure',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint256', name: 'bountyId', type: 'uint256' }],
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
          name: '',
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
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
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
      outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'contract IOrchestrator',
          name: 'orchestrator_',
          type: 'address',
        },
        {
          components: [
            { internalType: 'uint256', name: 'majorVersion', type: 'uint256' },
            { internalType: 'uint256', name: 'minorVersion', type: 'uint256' },
            { internalType: 'string', name: 'url', type: 'string' },
            { internalType: 'string', name: 'title', type: 'string' },
          ],
          internalType: 'struct IModule.Metadata',
          name: 'metadata',
          type: 'tuple',
        },
        { internalType: 'bytes', name: '', type: 'bytes' },
      ],
      name: 'init',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'contract IOrchestrator', name: '', type: 'address' },
        { internalType: 'bytes', name: '', type: 'bytes' },
      ],
      name: 'init2',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint256', name: 'bountyId', type: 'uint256' }],
      name: 'isExistingBountyId',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint256', name: 'claimId', type: 'uint256' }],
      name: 'isExistingClaimId',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'listBountyIds',
      outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'listClaimIds',
      outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'contributorAddrs', type: 'address' },
      ],
      name: 'listClaimIdsForContributorAddress',
      outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint256', name: 'bountyId', type: 'uint256' }],
      name: 'lockBounty',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'orchestrator',
      outputs: [
        { internalType: 'contract IOrchestrator', name: '', type: 'address' },
      ],
      stateMutability: 'view',
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
      outputs: [{ internalType: 'string', name: '', type: 'string' }],
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
      inputs: [],
      name: 'url',
      outputs: [{ internalType: 'string', name: '', type: 'string' }],
      stateMutability: 'view',
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
    {
      inputs: [],
      name: 'version',
      outputs: [
        { internalType: 'uint256', name: '', type: 'uint256' },
        { internalType: 'uint256', name: '', type: 'uint256' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ],
} as const
export const Orchestrator = {
  v1: [
    { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
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
          indexed: false,
          internalType: 'uint8',
          name: 'version',
          type: 'uint8',
        },
      ],
      name: 'Initialized',
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
        { internalType: 'contract IAuthorizer', name: '', type: 'address' },
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
      outputs: [{ internalType: 'bytes', name: '', type: 'bytes' }],
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
        { internalType: 'bool', name: '', type: 'bool' },
        { internalType: 'bytes', name: '', type: 'bytes' },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'string', name: 'moduleName', type: 'string' }],
      name: 'findModuleAddressInOrchestrator',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'fundingManager',
      outputs: [
        { internalType: 'contract IFundingManager', name: '', type: 'address' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256', name: 'orchestratorId_', type: 'uint256' },
        { internalType: 'address[]', name: 'modules', type: 'address[]' },
        {
          internalType: 'contract IFundingManager',
          name: 'fundingManager_',
          type: 'address',
        },
        {
          internalType: 'contract IAuthorizer',
          name: 'authorizer_',
          type: 'address',
        },
        {
          internalType: 'contract IPaymentProcessor',
          name: 'paymentProcessor_',
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
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'listModules',
      outputs: [{ internalType: 'address[]', name: '', type: 'address[]' }],
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
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'paymentProcessor',
      outputs: [
        {
          internalType: 'contract IPaymentProcessor',
          name: '',
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
      inputs: [
        { internalType: 'address', name: 'authModule', type: 'address' },
      ],
      name: 'verifyAddressIsAuthorizerModule',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'fundingManagerAddress',
          type: 'address',
        },
      ],
      name: 'verifyAddressIsFundingManager',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'paymentProcessorAddress',
          type: 'address',
        },
      ],
      name: 'verifyAddressIsPaymentProcessor',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'recurringPaymentManager',
          type: 'address',
        },
      ],
      name: 'verifyAddressIsRecurringPaymentManager',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'version',
      outputs: [{ internalType: 'string', name: '', type: 'string' }],
      stateMutability: 'pure',
      type: 'function',
    },
  ],
} as const
export const RebasingFundingManager = {
  v1: [
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
          name: 'from',
          type: 'address',
        },
        { indexed: true, internalType: 'address', name: 'to', type: 'address' },
        {
          indexed: true,
          internalType: 'uint256',
          name: 'amount',
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
          indexed: false,
          internalType: 'uint8',
          name: 'version',
          type: 'uint8',
        },
      ],
      name: 'Initialized',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'uint256',
          name: 'epoch',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newScalar',
          type: 'uint256',
        },
      ],
      name: 'Rebase',
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
        { indexed: true, internalType: 'address', name: 'to', type: 'address' },
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
        { indexed: true, internalType: 'address', name: 'to', type: 'address' },
        {
          indexed: true,
          internalType: 'uint256',
          name: 'amount',
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
          name: 'from',
          type: 'address',
        },
        { indexed: true, internalType: 'address', name: 'to', type: 'address' },
        {
          indexed: true,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'Withdrawal',
      type: 'event',
    },
    {
      inputs: [],
      name: 'DOMAIN_SEPARATOR',
      outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'EIP712_DOMAIN',
      outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'EIP712_REVISION',
      outputs: [{ internalType: 'string', name: '', type: 'string' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'PERMIT_TYPEHASH',
      outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'owner_', type: 'address' },
        { internalType: 'address', name: 'spender', type: 'address' },
      ],
      name: 'allowance',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'spender', type: 'address' },
        { internalType: 'uint256', name: 'tokens', type: 'uint256' },
      ],
      name: 'approve',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: 'who', type: 'address' }],
      name: 'balanceOf',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'decimals',
      outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'bytes', name: 'data', type: 'bytes' }],
      name: 'decoder',
      outputs: [{ internalType: 'bool', name: 'requirement', type: 'bool' }],
      stateMutability: 'pure',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'spender', type: 'address' },
        { internalType: 'uint256', name: 'tokens', type: 'uint256' },
      ],
      name: 'decreaseAllowance',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function',
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
      outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'spender', type: 'address' },
        { internalType: 'uint256', name: 'tokens', type: 'uint256' },
      ],
      name: 'increaseAllowance',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'contract IOrchestrator',
          name: 'orchestrator_',
          type: 'address',
        },
        {
          components: [
            { internalType: 'uint256', name: 'majorVersion', type: 'uint256' },
            { internalType: 'uint256', name: 'minorVersion', type: 'uint256' },
            { internalType: 'string', name: 'url', type: 'string' },
            { internalType: 'string', name: 'title', type: 'string' },
          ],
          internalType: 'struct IModule.Metadata',
          name: 'metadata',
          type: 'tuple',
        },
        { internalType: 'bytes', name: 'configData', type: 'bytes' },
      ],
      name: 'init',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'contract IOrchestrator',
          name: 'orchestrator_',
          type: 'address',
        },
        { internalType: 'bytes', name: 'dependencyData', type: 'bytes' },
      ],
      name: 'init2',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'name',
      outputs: [{ internalType: 'string', name: '', type: 'string' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: 'who', type: 'address' }],
      name: 'nonces',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'orchestrator',
      outputs: [
        { internalType: 'contract IOrchestrator', name: '', type: 'address' },
      ],
      stateMutability: 'view',
      type: 'function',
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
    },
    {
      inputs: [],
      name: 'rebase',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
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
      inputs: [{ internalType: 'address', name: 'who', type: 'address' }],
      name: 'scaledBalanceOf',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'scaledTotalSupply',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'symbol',
      outputs: [{ internalType: 'string', name: '', type: 'string' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'title',
      outputs: [{ internalType: 'string', name: '', type: 'string' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'token',
      outputs: [{ internalType: 'contract IERC20', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'totalSupply',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'to', type: 'address' },
        { internalType: 'uint256', name: 'tokens', type: 'uint256' },
      ],
      name: 'transfer',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: 'to', type: 'address' }],
      name: 'transferAll',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'from', type: 'address' },
        { internalType: 'address', name: 'to', type: 'address' },
      ],
      name: 'transferAllFrom',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'from', type: 'address' },
        { internalType: 'address', name: 'to', type: 'address' },
        { internalType: 'uint256', name: 'tokens', type: 'uint256' },
      ],
      name: 'transferFrom',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'nonpayable',
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
      inputs: [],
      name: 'url',
      outputs: [{ internalType: 'string', name: '', type: 'string' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'version',
      outputs: [
        { internalType: 'uint256', name: '', type: 'uint256' },
        { internalType: 'uint256', name: '', type: 'uint256' },
      ],
      stateMutability: 'view',
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
} as const
