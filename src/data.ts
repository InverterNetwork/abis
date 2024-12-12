export const data = [
  {
    name: 'InverterBeacon_v1',
    description:
      'Manages upgrades and versioning for smart contract implementations, allowing contract administrators to dynamically change contract logic while maintaining the state. Supports emergency shutdown mechanisms to halt operations if needed.',
    moduleType: 'factories',
    deploymentInputs: { configData: [] },
    abi: [
      {
        inputs: [
          { internalType: 'address', name: 'reverter', type: 'address' },
          { internalType: 'address', name: 'owner', type: 'address' },
          { internalType: 'uint256', name: '_majorVersion', type: 'uint256' },
          { internalType: 'address', name: '_implementation', type: 'address' },
          {
            internalType: 'uint256',
            name: '_newMinorVersion',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: '_newPatchVersion',
            type: 'uint256',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
      },
      {
        inputs: [],
        name: 'InverterBeacon__InvalidImplementation',
        type: 'error',
      },
      {
        inputs: [],
        name: 'InverterBeacon__InvalidImplementationMinorOrPatchVersion',
        type: 'error',
      },
      {
        inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
        name: 'OwnableInvalidOwner',
        type: 'error',
      },
      {
        inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
        name: 'OwnableUnauthorizedAccount',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint256',
            name: 'majorVersion',
            type: 'uint256',
            description: 'The majorVersion of the implementation contract.',
          },
        ],
        name: 'Constructed',
        type: 'event',
        outputs: [],
        description: 'The {InverterBeacon_v1} was constructed.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'previousOwner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnershipTransferStarted',
        type: 'event',
        outputs: [],
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'previousOwner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnershipTransferred',
        type: 'event',
        outputs: [],
      },
      {
        anonymous: false,
        inputs: [],
        name: 'ShutdownInitiated',
        type: 'event',
        outputs: [],
        description: 'The {InverterBeacon_v1} shutdown was initiated.',
      },
      {
        anonymous: false,
        inputs: [],
        name: 'ShutdownReversed',
        type: 'event',
        outputs: [],
        description: 'The {InverterBeacon_v1} shutdown was reversed.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'implementation',
            type: 'address',
            description: 'The new implementation address.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'newMinorVersion',
            type: 'uint256',
            description:
              'The new minor version of the implementation contract.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'newPatchVersion',
            type: 'uint256',
            description:
              'The new patch version of the implementation contract.',
          },
        ],
        name: 'Upgraded',
        type: 'event',
        outputs: [],
        description:
          'The {InverterBeacon_v1} was upgraded to a new implementation address.',
      },
      {
        inputs: [],
        name: 'acceptOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'emergencyModeActive',
        outputs: [
          {
            internalType: 'bool',
            name: '_0',
            type: 'bool',
            description: 'emergencyModeActive Is the beacon in emergency mode.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'Returns wether the {InverterBeacon_v1} is in emergency mode or not.',
      },
      {
        inputs: [],
        name: 'getImplementationAddress',
        outputs: [
          {
            internalType: 'address',
            name: '_0',
            type: 'address',
            description:
              'ImplementationAddress The address of the implementation.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'Returns the implementation address of the {InverterBeacon_v1}.',
      },
      {
        inputs: [],
        name: 'getReverterAddress',
        outputs: [
          {
            internalType: 'address',
            name: '_0',
            type: 'address',
            description:
              'ReverterAddress The address of the reverter contract.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'Returns the {InverterReverter_v1} of the {InverterBeacon_v1}.',
      },
      {
        inputs: [],
        name: 'implementation',
        outputs: [{ internalType: 'address', name: '_0', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'owner',
        outputs: [{ internalType: 'address', name: '_0', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'pendingOwner',
        outputs: [{ internalType: 'address', name: '_0', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'restartImplementation',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Restarts the {InverterBeacon_v1} and the system.',
      },
      {
        inputs: [],
        name: 'shutDownImplementation',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Shuts down the {InverterBeacon_v1} and stops the system.',
      },
      {
        inputs: [
          { internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' },
        ],
        name: 'supportsInterface',
        outputs: [{ internalType: 'bool', name: '_0', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'newOwner', type: 'address' },
        ],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newImplementation',
            type: 'address',
            description: 'The new implementation address.',
          },
          {
            internalType: 'uint256',
            name: 'newMinorVersion',
            type: 'uint256',
            description:
              'The new minor version of the implementation contract.',
          },
          {
            internalType: 'uint256',
            name: 'newPatchVersion',
            type: 'uint256',
            description:
              'The new patch version of the implementation contract.',
          },
          {
            internalType: 'bool',
            name: 'overrideShutdown',
            type: 'bool',
            description:
              'Flag to enable upgradeTo function to override the shutdown.',
          },
        ],
        name: 'upgradeTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Upgrades the {InverterBeacon_v1} to a new implementation address.',
      },
      {
        inputs: [],
        name: 'version',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            description: 'Major version.',
          },
          {
            internalType: 'uint256',
            name: '_1',
            type: 'uint256',
            description: 'Minor version.',
          },
          {
            internalType: 'uint256',
            name: '_2',
            type: 'uint256',
            description: 'Patch version.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the version of the linked implementation.',
      },
    ],
  },
  {
    name: 'InverterProxyAdmin_v1',
    description:
      'Acts as the admin of the {InverterTransparentUpgradeableProxy_v1}s and is responsible for upgrading the proxies to the newest version.',
    moduleType: 'factories',
    deploymentInputs: { configData: [] },
    abi: [
      {
        inputs: [
          { internalType: 'address', name: 'initialOwner', type: 'address' },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
      },
      {
        inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
        name: 'OwnableInvalidOwner',
        type: 'error',
      },
      {
        inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
        name: 'OwnableUnauthorizedAccount',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'previousOwner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnershipTransferStarted',
        type: 'event',
        outputs: [],
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'previousOwner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnershipTransferred',
        type: 'event',
        outputs: [],
      },
      {
        inputs: [],
        name: 'acceptOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'owner',
        outputs: [{ internalType: 'address', name: '_0', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'pendingOwner',
        outputs: [{ internalType: 'address', name: '_0', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'newOwner', type: 'address' },
        ],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'contract IInverterTransparentUpgradeableProxy_v1',
            name: 'proxy',
            type: 'address',
            description: 'The proxy to upgrade.',
          },
        ],
        name: 'upgradeToNewestVersion',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Upgrades the corresponding {InverterTransparentUpgradeableProxy_v1} to the newest version of the implementation.',
      },
      {
        inputs: [
          {
            internalType: 'contract IInverterTransparentUpgradeableProxy_v1[]',
            name: 'proxies',
            type: 'address[]',
            description: 'The proxies to upgrade.',
          },
        ],
        name: 'upgradeToNewestVersionBatched',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Upgrades multiple {InverterTransparentUpgradeableProxy_v1}s to the newest version of the implementation.',
      },
    ],
  },
  {
    name: 'Restricted_PIM_Factory_v1',
    description:
      'Used to deploy a PIM workflow with a restricted bonding curve with a mechanism to sponsor the required collateral supply and an opinionated initial configuration.',
    moduleType: 'factories',
    deploymentInputs: {
      configData: [
        {
          name: 'independentUpdates',
          type: 'bool',
          jsType: 'boolean',
          description:
            'Default is false - Whether this workflow’s updates to Orchestrator and Modules shall be self-governed.',
        },
        {
          name: 'independentUpdateAdmin',
          type: 'address',
          jsType: '0xstring',
          description:
            'Should only be set if independentUpdates is true  - The address that will be responsible for updates to Orchestrator and Modules of the workflow.',
        },
        {
          components: [
            {
              name: 'name',
              type: 'string',
              description: 'The name of the issuance token',
            },
            {
              name: 'symbol',
              type: 'string',
              description: 'The symbol of the issuance token',
            },
            {
              name: 'decimals',
              type: 'uint8',
              jsType: 'numberString',
              description:
                'The decimals used within the issuance token ( should be bigger or equal to 7 and bigger or equel to the collateral token decimals )',
            },
            {
              name: 'maxSupply',
              type: 'uint256',
              jsType: 'numberString',
              description: 'The max total supply of the token',
              tags: ['decimals:params:exact:decimals'],
            },
          ],
          name: 'issuanceToken',
          type: 'tuple',
        },
        {
          name: 'beneficiary',
          type: 'address',
          description:
            'Receives the initial issuance supply and minting rights.',
        },
      ],
    },
    abi: [
      {
        inputs: [
          {
            internalType: 'address',
            name: '_orchestratorFactory',
            type: 'address',
          },
          {
            internalType: 'address',
            name: '_trustedForwarder',
            type: 'address',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
      },
      {
        inputs: [{ internalType: 'address', name: 'target', type: 'address' }],
        name: 'AddressEmptyCode',
        type: 'error',
      },
      {
        inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
        name: 'AddressInsufficientBalance',
        type: 'error',
      },
      { inputs: [], name: 'FailedInnerCall', type: 'error' },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'availableFunding',
            type: 'uint256',
          },
        ],
        name: 'InsufficientFunding',
        type: 'error',
      },
      {
        inputs: [{ internalType: 'address', name: 'token', type: 'address' }],
        name: 'SafeERC20FailedOperation',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'sponsor',
            type: 'address',
            description: 'Address that pays funding.',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'actor',
            type: 'address',
            description: 'Address that can use new funding.',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'token',
            type: 'address',
            description: 'Address of token used for funding.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            tags: ['decimals'],
            description: 'Funding amount.',
          },
        ],
        name: 'FundingAdded',
        type: 'event',
        outputs: [],
        description: 'Event emitted when new funding is added.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'sponsor',
            type: 'address',
            description: 'Address that agreed to pay for funding.',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'actor',
            type: 'address',
            description: 'Address that could have used the funding.',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'token',
            type: 'address',
            description:
              'Address of token used that would have been used for funding.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            tags: ['decimals'],
            description: 'Funding amount.',
          },
        ],
        name: 'FundingRemoved',
        type: 'event',
        outputs: [],
        description: 'Event emitted when existing funding is removed.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'orchestrator',
            type: 'address',
            description: 'The address of the orchestrator.',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'issuanceToken',
            type: 'address',
            description: 'The token issued by the bonding curve.',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'beneficiary',
            type: 'address',
            description:
              'The beneficiary receives initial issuance supply and minting rights.',
          },
        ],
        name: 'PIMWorkflowCreated',
        type: 'event',
        outputs: [],
        description: 'Event emitted when a new PIM workflow is created.',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'actor',
            type: 'address',
            description:
              'The address that can use the funding for a new bonding curve deployment.',
          },
          {
            internalType: 'address',
            name: 'token',
            type: 'address',
            description:
              'The token sent to the factory and to be used as collateral token for a bonding curve.',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            tags: ['decimals'],
            description:
              'The amount of `token` to be provided as initialCollateralSupply.',
          },
        ],
        name: 'addFunding',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Adds `amount` of some `token` to factory to be used by some `actor` for a bonding curve deployment.',
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: 'bool',
                name: 'independentUpdates',
                type: 'bool',
              },
              {
                internalType: 'address',
                name: 'independentUpdateAdmin',
                type: 'address',
              },
            ],
            internalType: 'struct IOrchestratorFactory_v1.WorkflowConfig',
            name: 'workflowConfig',
            type: 'tuple',
            description: "The workflow's config data.",
          },
          {
            components: [
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
                  {
                    internalType: 'uint256',
                    name: 'patchVersion',
                    type: 'uint256',
                  },
                  { internalType: 'string', name: 'url', type: 'string' },
                  { internalType: 'string', name: 'title', type: 'string' },
                ],
                internalType: 'struct IModule_v1.Metadata',
                name: 'metadata',
                type: 'tuple',
              },
              { internalType: 'bytes', name: 'configData', type: 'bytes' },
            ],
            internalType: 'struct IOrchestratorFactory_v1.ModuleConfig',
            name: 'fundingManagerConfig',
            type: 'tuple',
            description:
              "The config data for the orchestrator's {IFundingManager_v1} instance.",
          },
          {
            components: [
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
                  {
                    internalType: 'uint256',
                    name: 'patchVersion',
                    type: 'uint256',
                  },
                  { internalType: 'string', name: 'url', type: 'string' },
                  { internalType: 'string', name: 'title', type: 'string' },
                ],
                internalType: 'struct IModule_v1.Metadata',
                name: 'metadata',
                type: 'tuple',
              },
              { internalType: 'bytes', name: 'configData', type: 'bytes' },
            ],
            internalType: 'struct IOrchestratorFactory_v1.ModuleConfig',
            name: 'authorizerConfig',
            type: 'tuple',
            description:
              "The config data for the orchestrator's {IAuthorizer_v1} instance.",
          },
          {
            components: [
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
                  {
                    internalType: 'uint256',
                    name: 'patchVersion',
                    type: 'uint256',
                  },
                  { internalType: 'string', name: 'url', type: 'string' },
                  { internalType: 'string', name: 'title', type: 'string' },
                ],
                internalType: 'struct IModule_v1.Metadata',
                name: 'metadata',
                type: 'tuple',
              },
              { internalType: 'bytes', name: 'configData', type: 'bytes' },
            ],
            internalType: 'struct IOrchestratorFactory_v1.ModuleConfig',
            name: 'paymentProcessorConfig',
            type: 'tuple',
            description:
              "The config data for the orchestrator's {IPaymentProcessor_v1} instance.",
          },
          {
            components: [
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
                  {
                    internalType: 'uint256',
                    name: 'patchVersion',
                    type: 'uint256',
                  },
                  { internalType: 'string', name: 'url', type: 'string' },
                  { internalType: 'string', name: 'title', type: 'string' },
                ],
                internalType: 'struct IModule_v1.Metadata',
                name: 'metadata',
                type: 'tuple',
              },
              { internalType: 'bytes', name: 'configData', type: 'bytes' },
            ],
            internalType: 'struct IOrchestratorFactory_v1.ModuleConfig[]',
            name: 'moduleConfigs',
            type: 'tuple[]',
            description:
              "Variable length set of optional module's config data.",
          },
          {
            components: [
              { internalType: 'string', name: 'name', type: 'string' },
              { internalType: 'string', name: 'symbol', type: 'string' },
              { internalType: 'uint8', name: 'decimals', type: 'uint8' },
              { internalType: 'uint256', name: 'maxSupply', type: 'uint256' },
            ],
            internalType: 'struct IBondingCurveBase_v1.IssuanceToken',
            name: 'issuanceTokenParams',
            type: 'tuple',
            description:
              "The issuance token's parameters (name, symbol, decimals, maxSupply).",
          },
          {
            internalType: 'address',
            name: 'beneficiary',
            type: 'address',
            description:
              'The beneficiary of the PIM receives initial supply & holds minting rights).',
          },
        ],
        name: 'createPIMWorkflow',
        outputs: [
          {
            internalType: 'contract IOrchestrator_v1',
            name: 'orchestrator',
            type: 'address',
            description:
              'CreatedOrchestrator Returns the created orchestrator instance.',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Deploys a new issuance token and uses that to deploy a workflow with restricted bonding curve.',
      },
      {
        inputs: [
          { internalType: 'address', name: 'sponsor', type: 'address' },
          { internalType: 'address', name: 'actor', type: 'address' },
          { internalType: 'address', name: 'token', type: 'address' },
        ],
        name: 'fundings',
        outputs: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            tags: ['decimals'],
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'Returns the amount of funding for a given sponsor, actor and token.',
      },
      {
        inputs: [
          { internalType: 'address', name: 'forwarder', type: 'address' },
        ],
        name: 'isTrustedForwarder',
        outputs: [{ internalType: 'bool', name: '_0', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'orchestratorFactory',
        outputs: [{ internalType: 'address', name: '_0', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'trustedForwarder',
        outputs: [{ internalType: 'address', name: '_0', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'actor',
            type: 'address',
            description:
              'The address could have used the funding for a new bonding curve deployment.',
          },
          {
            internalType: 'address',
            name: 'token',
            type: 'address',
            description:
              'The token that was sent to the factory to be used as collateral token for a bonding curve.',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            tags: ['decimals'],
            description: 'The amount of `token` that was provided.',
          },
        ],
        name: 'withdrawFunding',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Withdraws an existing funding from the factory.',
      },
    ],
  },
  {
    name: 'OrchestratorFactory_v1',
    description:
      '{OrchestratorFactory_v1} facilitates the deployment of {Orchestrator_v1}s and their associated modules for the Inverter Network, ensuring seamless creation and configuration of various components in a single transaction.',
    moduleType: 'factories',
    deploymentInputs: {
      configData: [
        {
          name: 'independentUpdates',
          type: 'bool',
          jsType: 'boolean',
          description:
            'Default is false - Whether this workflow’s updates to Orchestrator and Modules shall be self-governed.',
        },
        {
          name: 'independentUpdateAdmin',
          type: 'address',
          jsType: '0xstring',
          description:
            'Should only be set if independentUpdates is true  - The address that will be responsible for updates to Orchestrator and Modules of the workflow.',
        },
      ],
    },
    abi: [
      {
        inputs: [
          {
            internalType: 'address',
            name: '_trustedForwarder',
            type: 'address',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
      },
      { inputs: [], name: 'InvalidInitialization', type: 'error' },
      { inputs: [], name: 'NotInitializing', type: 'error' },
      { inputs: [], name: 'OrchestratorFactory__InvalidBeacon', type: 'error' },
      { inputs: [], name: 'OrchestratorFactory__InvalidId', type: 'error' },
      {
        inputs: [],
        name: 'OrchestratorFactory__ModuleDataLengthMismatch',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OrchestratorFactory__OrchestratorAdminIsInvalid',
        type: 'error',
      },
      {
        inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
        name: 'OwnableInvalidOwner',
        type: 'error',
      },
      {
        inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
        name: 'OwnableUnauthorizedAccount',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint64',
            name: 'version',
            type: 'uint64',
          },
        ],
        name: 'Initialized',
        type: 'event',
        outputs: [],
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint256',
            name: 'orchestratorId',
            type: 'uint256',
            description: 'The id of the {Orchestrator_v1}.',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'orchestratorAddress',
            type: 'address',
            description: 'The address of the {Orchestrator.',
          },
        ],
        name: 'OrchestratorCreated',
        type: 'event',
        outputs: [],
        description: 'Event emitted when a new {Orchestrator_v1} is created.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'beacon',
            type: 'address',
            description:
              'The address of the {IInverterBeacon_v1} associated with the factory.',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'moduleFactory',
            type: 'address',
            description: 'The address of the {ModuleFactory_v1}.',
          },
        ],
        name: 'OrchestratorFactoryInitialized',
        type: 'event',
        outputs: [],
        description:
          'Event emitted when a new {OrchestratorFactory_v1} is initialized.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'previousOwner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnershipTransferStarted',
        type: 'event',
        outputs: [],
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'previousOwner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnershipTransferred',
        type: 'event',
        outputs: [],
      },
      {
        inputs: [],
        name: 'acceptOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'beacon',
        outputs: [
          {
            internalType: 'contract IInverterBeacon_v1',
            name: '_0',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'Returns the {IOrchestrator_v1} {IInverterBeacon_v1} address.',
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: 'bool',
                name: 'independentUpdates',
                type: 'bool',
              },
              {
                internalType: 'address',
                name: 'independentUpdateAdmin',
                type: 'address',
              },
            ],
            internalType: 'struct IOrchestratorFactory_v1.WorkflowConfig',
            name: 'workflowConfig',
            type: 'tuple',
            description: "The workflow's config data.",
          },
          {
            components: [
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
                  {
                    internalType: 'uint256',
                    name: 'patchVersion',
                    type: 'uint256',
                  },
                  { internalType: 'string', name: 'url', type: 'string' },
                  { internalType: 'string', name: 'title', type: 'string' },
                ],
                internalType: 'struct IModule_v1.Metadata',
                name: 'metadata',
                type: 'tuple',
              },
              { internalType: 'bytes', name: 'configData', type: 'bytes' },
            ],
            internalType: 'struct IOrchestratorFactory_v1.ModuleConfig',
            name: 'fundingManagerConfig',
            type: 'tuple',
            description:
              "The config data for the orchestrator's {IFundingManager_v1} instance.",
          },
          {
            components: [
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
                  {
                    internalType: 'uint256',
                    name: 'patchVersion',
                    type: 'uint256',
                  },
                  { internalType: 'string', name: 'url', type: 'string' },
                  { internalType: 'string', name: 'title', type: 'string' },
                ],
                internalType: 'struct IModule_v1.Metadata',
                name: 'metadata',
                type: 'tuple',
              },
              { internalType: 'bytes', name: 'configData', type: 'bytes' },
            ],
            internalType: 'struct IOrchestratorFactory_v1.ModuleConfig',
            name: 'authorizerConfig',
            type: 'tuple',
            description:
              "The config data for the {Orchestrator_v1}'s {IAuthorizer_v1} instance.",
          },
          {
            components: [
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
                  {
                    internalType: 'uint256',
                    name: 'patchVersion',
                    type: 'uint256',
                  },
                  { internalType: 'string', name: 'url', type: 'string' },
                  { internalType: 'string', name: 'title', type: 'string' },
                ],
                internalType: 'struct IModule_v1.Metadata',
                name: 'metadata',
                type: 'tuple',
              },
              { internalType: 'bytes', name: 'configData', type: 'bytes' },
            ],
            internalType: 'struct IOrchestratorFactory_v1.ModuleConfig',
            name: 'paymentProcessorConfig',
            type: 'tuple',
            description:
              "The config data for the orchestrator's {IPaymentProcessor_v1} instance.",
          },
          {
            components: [
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
                  {
                    internalType: 'uint256',
                    name: 'patchVersion',
                    type: 'uint256',
                  },
                  { internalType: 'string', name: 'url', type: 'string' },
                  { internalType: 'string', name: 'title', type: 'string' },
                ],
                internalType: 'struct IModule_v1.Metadata',
                name: 'metadata',
                type: 'tuple',
              },
              { internalType: 'bytes', name: 'configData', type: 'bytes' },
            ],
            internalType: 'struct IOrchestratorFactory_v1.ModuleConfig[]',
            name: 'moduleConfigs',
            type: 'tuple[]',
            description:
              "Variable length set of optional module's config data.",
          },
        ],
        name: 'createOrchestrator',
        outputs: [
          {
            internalType: 'contract IOrchestrator_v1',
            name: '_0',
            type: 'address',
            description:
              'CreatedOrchestrator Returns the created orchestrator instance',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Creates a new {Orchestrator_v1}.',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
            description: "The requested orchestrator's id.",
          },
        ],
        name: 'getOrchestratorByID',
        outputs: [
          {
            internalType: 'address',
            name: '_0',
            type: 'address',
            description:
              'orchestratorAddress The address of the corresponding {Orchestrator_v1}.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'Returns the {IOrchestrator_v1} address that corresponds to the given id.',
      },
      {
        inputs: [],
        name: 'getOrchestratorIDCounter',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            description: 'id The id of the next created {Orchestrator_v1}.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the counter of the current {Orchestrator_v1} id.',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'governor_',
            type: 'address',
            description: 'The address of the {Governor_v1} contract.',
          },
          {
            internalType: 'contract IInverterBeacon_v1',
            name: 'beacon_',
            type: 'address',
            description:
              'The address of the {IInverterBeacon_v1} containing the {Orchestrator_v1} implementation.',
          },
          {
            internalType: 'address',
            name: 'moduleFactory_',
            type: 'address',
            description: 'The address of the {ModuleFactory_v1} contract.',
          },
        ],
        name: 'init',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'The factories initializer function.',
      },
      {
        inputs: [
          { internalType: 'address', name: 'forwarder', type: 'address' },
        ],
        name: 'isTrustedForwarder',
        outputs: [{ internalType: 'bool', name: '_0', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'moduleFactory',
        outputs: [{ internalType: 'address', name: '_0', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the {IModuleFactory_v1} implementation address.',
      },
      {
        inputs: [],
        name: 'owner',
        outputs: [{ internalType: 'address', name: '_0', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'pendingOwner',
        outputs: [{ internalType: 'address', name: '_0', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' },
        ],
        name: 'supportsInterface',
        outputs: [{ internalType: 'bool', name: '_0', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'newOwner', type: 'address' },
        ],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'trustedForwarder',
        outputs: [{ internalType: 'address', name: '_0', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
    ],
  },
  {
    name: 'Immutable_PIM_Factory_v1',
    description:
      'Used to deploy a PIM workflow with an unrestricted bonding curve and a mechanism to ensure immutability of the workflow while still enabling the claiming of fees.',
    moduleType: 'factories',
    deploymentInputs: {
      configData: [
        {
          name: 'independentUpdates',
          type: 'bool',
          jsType: 'boolean',
          description:
            'Default is false - Whether this workflow’s updates to Orchestrator and Modules shall be self-governed.',
        },
        {
          name: 'independentUpdateAdmin',
          type: 'address',
          jsType: '0xstring',
          description:
            'Should only be set if independentUpdates is true  - The address that will be responsible for updates to Orchestrator and Modules of the workflow.',
        },
        {
          components: [
            {
              name: 'name',
              type: 'string',
              description: 'The name of the issuance token',
            },
            {
              name: 'symbol',
              type: 'string',
              description: 'The symbol of the issuance token',
            },
            {
              name: 'decimals',
              type: 'uint8',
              jsType: 'numberString',
              description:
                'The decimals used within the issuance token ( should be bigger or equal to 7 and bigger or equel to the collateral token decimals )',
            },
            {
              name: 'maxSupply',
              type: 'uint256',
              jsType: 'numberString',
              description: 'The max total supply of the token',
              tags: ['decimals:params:exact:decimals'],
            },
          ],
          name: 'issuanceToken',
          type: 'tuple',
        },
        {
          name: 'initialPurchaseAmount',
          type: 'uint256',
          jsType: 'numberString',
          description: 'The amount of issuance tokens to purchase initially',
          tags: ['decimals:params:exact:issuanceToken.decimals'],
        },
      ],
    },
    abi: [
      {
        inputs: [
          {
            internalType: 'address',
            name: '_orchestratorFactory',
            type: 'address',
          },
          {
            internalType: 'address',
            name: '_trustedForwarder',
            type: 'address',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
      },
      {
        inputs: [],
        name: 'PIM_WorkflowFactory__InvalidZeroAddress',
        type: 'error',
      },
      {
        inputs: [],
        name: 'PIM_WorkflowFactory__OnlyPimFeeRecipient',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'orchestrator',
            type: 'address',
            description: 'The address of the funding manager.',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'issuanceToken',
            type: 'address',
            description: 'The address of the issuance token.',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'deployer',
            type: 'address',
            description: 'The address of the deployer.',
          },
        ],
        name: 'PIMWorkflowCreated',
        type: 'event',
        outputs: [],
        description: 'Event emitted when a new PIM workflow is created.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'fundingManager',
            type: 'address',
            description: 'The address of the funding manager.',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'claimer',
            type: 'address',
            description: 'The address of the one that is claiming.',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'to',
            type: 'address',
            description: 'The address of that is receiving the fee.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            description: 'The amount claimed.',
          },
        ],
        name: 'PimFeeClaimed',
        type: 'event',
        outputs: [],
        description: 'Event emitted when PIM fee (buy/sell fees) is claimed.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'fundingManager',
            type: 'address',
            description: 'The address of the funding manager.',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'oldRecipient',
            type: 'address',
            description: 'The previous pim fee recipient.',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'newRecipient',
            type: 'address',
            description: 'The new pim fee recipient.',
          },
        ],
        name: 'PimFeeRecipientUpdated',
        type: 'event',
        outputs: [],
        description: 'Event emitted when factory owner sets new fee.',
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: 'bool',
                name: 'independentUpdates',
                type: 'bool',
              },
              {
                internalType: 'address',
                name: 'independentUpdateAdmin',
                type: 'address',
              },
            ],
            internalType: 'struct IOrchestratorFactory_v1.WorkflowConfig',
            name: 'workflowConfig',
            type: 'tuple',
            description: "The workflow's config data.",
          },
          {
            components: [
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
                  {
                    internalType: 'uint256',
                    name: 'patchVersion',
                    type: 'uint256',
                  },
                  { internalType: 'string', name: 'url', type: 'string' },
                  { internalType: 'string', name: 'title', type: 'string' },
                ],
                internalType: 'struct IModule_v1.Metadata',
                name: 'metadata',
                type: 'tuple',
              },
              { internalType: 'bytes', name: 'configData', type: 'bytes' },
            ],
            internalType: 'struct IOrchestratorFactory_v1.ModuleConfig',
            name: 'fundingManagerConfig',
            type: 'tuple',
            description:
              "The config data for the orchestrator's {IFundingManager_v1} instance.",
          },
          {
            components: [
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
                  {
                    internalType: 'uint256',
                    name: 'patchVersion',
                    type: 'uint256',
                  },
                  { internalType: 'string', name: 'url', type: 'string' },
                  { internalType: 'string', name: 'title', type: 'string' },
                ],
                internalType: 'struct IModule_v1.Metadata',
                name: 'metadata',
                type: 'tuple',
              },
              { internalType: 'bytes', name: 'configData', type: 'bytes' },
            ],
            internalType: 'struct IOrchestratorFactory_v1.ModuleConfig',
            name: 'authorizerConfig',
            type: 'tuple',
            description:
              "The config data for the orchestrator's {IAuthorizer_v1} instance.",
          },
          {
            components: [
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
                  {
                    internalType: 'uint256',
                    name: 'patchVersion',
                    type: 'uint256',
                  },
                  { internalType: 'string', name: 'url', type: 'string' },
                  { internalType: 'string', name: 'title', type: 'string' },
                ],
                internalType: 'struct IModule_v1.Metadata',
                name: 'metadata',
                type: 'tuple',
              },
              { internalType: 'bytes', name: 'configData', type: 'bytes' },
            ],
            internalType: 'struct IOrchestratorFactory_v1.ModuleConfig',
            name: 'paymentProcessorConfig',
            type: 'tuple',
            description:
              "The config data for the orchestrator's {IPaymentProcessor_v1} instance.",
          },
          {
            components: [
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
                  {
                    internalType: 'uint256',
                    name: 'patchVersion',
                    type: 'uint256',
                  },
                  { internalType: 'string', name: 'url', type: 'string' },
                  { internalType: 'string', name: 'title', type: 'string' },
                ],
                internalType: 'struct IModule_v1.Metadata',
                name: 'metadata',
                type: 'tuple',
              },
              { internalType: 'bytes', name: 'configData', type: 'bytes' },
            ],
            internalType: 'struct IOrchestratorFactory_v1.ModuleConfig[]',
            name: 'moduleConfigs',
            type: 'tuple[]',
            description:
              "Variable length set of optional module's config data.",
          },
          {
            components: [
              { internalType: 'string', name: 'name', type: 'string' },
              { internalType: 'string', name: 'symbol', type: 'string' },
              { internalType: 'uint8', name: 'decimals', type: 'uint8' },
              { internalType: 'uint256', name: 'maxSupply', type: 'uint256' },
            ],
            internalType: 'struct IBondingCurveBase_v1.IssuanceToken',
            name: 'issuanceTokenParams',
            type: 'tuple',
            description:
              "The issuance token's parameters (name, symbol, decimals, maxSupply).",
          },
          {
            internalType: 'uint256',
            name: 'initialPurchaseAmount',
            type: 'uint256',
            description:
              'The volume of the first purchase in terms of collateral token.',
          },
        ],
        name: 'createPIMWorkflow',
        outputs: [
          {
            internalType: 'contract IOrchestrator_v1',
            name: 'orchestrator',
            type: 'address',
            description: 'Returns an instance of the created orchestrator.',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Deploys a new issuance with workflow that includes open yet immutable bonding curve.',
      },
      {
        inputs: [
          { internalType: 'address', name: 'forwarder', type: 'address' },
        ],
        name: 'isTrustedForwarder',
        outputs: [{ internalType: 'bool', name: '_0', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'orchestratorFactory',
        outputs: [{ internalType: 'address', name: '_0', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'fundingManager',
            type: 'address',
            description: 'The address of the funding manager.',
          },
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
            description:
              'The address to transfer the fee recipient eligibility to.',
          },
        ],
        name: 'transferPimFeeEligibility',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Transfers the fee recipient eligibility of a bonding curve to another address.',
      },
      {
        inputs: [],
        name: 'trustedForwarder',
        outputs: [{ internalType: 'address', name: '_0', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'fundingManager',
            type: 'address',
            description: 'The address of the funding manager.',
          },
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
            description: 'The address to send the fees to.',
          },
        ],
        name: 'withdrawPimFee',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Withdraws buy/sell fees accumulated by a bonding curve.',
      },
    ],
  },
  {
    name: 'ModuleFactory_v1',
    description:
      'Enables the creation and registration of Inverter Modules, facilitating the deployment of module instances linked to specific beacons. Allows for configuration of modules starting state via provided deployment data.',
    moduleType: 'factories',
    deploymentInputs: { configData: [] },
    abi: [
      {
        inputs: [
          { internalType: 'address', name: '_reverter', type: 'address' },
          {
            internalType: 'address',
            name: '_trustedForwarder',
            type: 'address',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
      },
      { inputs: [], name: 'InvalidInitialization', type: 'error' },
      {
        inputs: [],
        name: 'ModuleFactory__InvalidInitialRegistrationData',
        type: 'error',
      },
      {
        inputs: [],
        name: 'ModuleFactory__InvalidInverterBeacon',
        type: 'error',
      },
      { inputs: [], name: 'ModuleFactory__InvalidMetadata', type: 'error' },
      {
        inputs: [],
        name: 'ModuleFactory__MetadataAlreadyRegistered',
        type: 'error',
      },
      { inputs: [], name: 'ModuleFactory__ModuleIsSunset', type: 'error' },
      {
        inputs: [],
        name: 'ModuleFactory__UnregisteredMetadata',
        type: 'error',
      },
      { inputs: [], name: 'NotInitializing', type: 'error' },
      {
        inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
        name: 'OwnableInvalidOwner',
        type: 'error',
      },
      {
        inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
        name: 'OwnableUnauthorizedAccount',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'governor',
            type: 'address',
            description: 'The address of the {Governor_v1}.',
          },
        ],
        name: 'GovernorSet',
        type: 'event',
        outputs: [],
        description: 'Event emitted when {Governor_v1} is set.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint64',
            name: 'version',
            type: 'uint64',
          },
        ],
        name: 'Initialized',
        type: 'event',
        outputs: [],
      },
      {
        anonymous: false,
        inputs: [
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
              {
                internalType: 'uint256',
                name: 'patchVersion',
                type: 'uint256',
              },
              { internalType: 'string', name: 'url', type: 'string' },
              { internalType: 'string', name: 'title', type: 'string' },
            ],
            indexed: false,
            internalType: 'struct IModule_v1.Metadata',
            name: 'metadata',
            type: 'tuple',
            description: 'The registered Metadata.',
          },
          {
            indexed: true,
            internalType: 'contract IInverterBeacon_v1',
            name: 'beacon',
            type: 'address',
            description: 'The registered Beacon.',
          },
        ],
        name: 'MetadataRegistered',
        type: 'event',
        outputs: [],
        description: 'Event emitted when new beacon registered for metadata.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'orchestrator',
            type: 'address',
            description: 'The corresponding {Orchestrator_v1}.',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'module',
            type: 'address',
            description: 'The created module instance.',
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
              {
                internalType: 'uint256',
                name: 'patchVersion',
                type: 'uint256',
              },
              { internalType: 'string', name: 'url', type: 'string' },
              { internalType: 'string', name: 'title', type: 'string' },
            ],
            indexed: false,
            internalType: 'struct IModule_v1.Metadata',
            name: 'metadata',
            type: 'tuple',
            description: 'The registered metadata.',
          },
        ],
        name: 'ModuleCreated',
        type: 'event',
        outputs: [],
        description:
          'Event emitted when new module created for an {Orchestrator_v1}.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'previousOwner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnershipTransferStarted',
        type: 'event',
        outputs: [],
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'previousOwner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnershipTransferred',
        type: 'event',
        outputs: [],
      },
      {
        inputs: [],
        name: 'acceptOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
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
              {
                internalType: 'uint256',
                name: 'patchVersion',
                type: 'uint256',
              },
              { internalType: 'string', name: 'url', type: 'string' },
              { internalType: 'string', name: 'title', type: 'string' },
            ],
            internalType: 'struct IModule_v1.Metadata',
            name: 'metadata',
            type: 'tuple',
            description: "The module's `metadata`.",
          },
          {
            internalType: 'contract IOrchestrator_v1',
            name: 'orchestrator',
            type: 'address',
            description: 'The {Orchestrator_v1} instance of the module.',
          },
          {
            internalType: 'bytes',
            name: 'configData',
            type: 'bytes',
            description: 'The configData of the module.',
          },
          {
            components: [
              {
                internalType: 'bool',
                name: 'independentUpdates',
                type: 'bool',
              },
              {
                internalType: 'address',
                name: 'independentUpdateAdmin',
                type: 'address',
              },
            ],
            internalType: 'struct IOrchestratorFactory_v1.WorkflowConfig',
            name: 'workflowConfig',
            type: 'tuple',
            description: 'The configData of the workflow.',
          },
        ],
        name: 'createAndInitModule',
        outputs: [
          {
            internalType: 'address',
            name: '_0',
            type: 'address',
            description:
              'moduleProxyAddress Returns the address of the created module proxy.',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Creates a module instance identified by given `metadata` and initiates it.',
      },
      {
        inputs: [
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
              {
                internalType: 'uint256',
                name: 'patchVersion',
                type: 'uint256',
              },
              { internalType: 'string', name: 'url', type: 'string' },
              { internalType: 'string', name: 'title', type: 'string' },
            ],
            internalType: 'struct IModule_v1.Metadata',
            name: 'metadata',
            type: 'tuple',
            description: "The module's metadata.",
          },
          {
            internalType: 'contract IOrchestrator_v1',
            name: 'orchestrator',
            type: 'address',
            description: 'The {Orchestrator_v1} instance of the module.',
          },
          {
            components: [
              {
                internalType: 'bool',
                name: 'independentUpdates',
                type: 'bool',
              },
              {
                internalType: 'address',
                name: 'independentUpdateAdmin',
                type: 'address',
              },
            ],
            internalType: 'struct IOrchestratorFactory_v1.WorkflowConfig',
            name: 'workflowConfig',
            type: 'tuple',
            description: 'The configData of the workflow.',
          },
        ],
        name: 'createModuleProxy',
        outputs: [
          {
            internalType: 'address',
            name: '_0',
            type: 'address',
            description: 'Returns the address of the created module proxy.',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Creates a module proxy instance identified by given `metadata`.',
      },
      {
        inputs: [
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
              {
                internalType: 'uint256',
                name: 'patchVersion',
                type: 'uint256',
              },
              { internalType: 'string', name: 'url', type: 'string' },
              { internalType: 'string', name: 'title', type: 'string' },
            ],
            internalType: 'struct IModule_v1.Metadata',
            name: 'metadata',
            type: 'tuple',
            description: "The module's metadata.",
          },
        ],
        name: 'getBeaconAndId',
        outputs: [
          {
            internalType: 'contract IInverterBeacon_v1',
            name: '_0',
            type: 'address',
            description:
              "beacon The module's {IInverterBeacon_v1} instance registered.",
          },
          {
            internalType: 'bytes32',
            name: '_1',
            type: 'bytes32',
            description: "id The metadata's id.",
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'Returns the {IInverterBeacon_v1} instance registered and the `id` for given `metadata`.',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'proxy',
            type: 'address',
            description: 'The beacon proxy address.',
          },
        ],
        name: 'getOrchestratorOfProxy',
        outputs: [
          {
            internalType: 'address',
            name: '_0',
            type: 'address',
            description:
              'orchestratorAddress The corresponding {Orchestrator_v1} address for the provided proxy.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the {Orchestrator_v1} address of a beacon proxy.',
      },
      {
        inputs: [],
        name: 'governor',
        outputs: [{ internalType: 'address', name: '_0', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the {Governor_v1} contract address.',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '_governor',
            type: 'address',
            description: 'The address of the {Governor_v1} contract.',
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
              {
                internalType: 'uint256',
                name: 'patchVersion',
                type: 'uint256',
              },
              { internalType: 'string', name: 'url', type: 'string' },
              { internalType: 'string', name: 'title', type: 'string' },
            ],
            internalType: 'struct IModule_v1.Metadata[]',
            name: 'initialMetadataRegistration',
            type: 'tuple[]',
            description:
              'List of {IInverterBeacon_v1}s addresses that will be registered during the initialization.',
          },
          {
            internalType: 'contract IInverterBeacon_v1[]',
            name: 'initialBeaconRegistration',
            type: 'address[]',
          },
        ],
        name: 'init',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'The factories initializer function.',
      },
      {
        inputs: [
          { internalType: 'address', name: 'forwarder', type: 'address' },
        ],
        name: 'isTrustedForwarder',
        outputs: [{ internalType: 'bool', name: '_0', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'owner',
        outputs: [{ internalType: 'address', name: '_0', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'pendingOwner',
        outputs: [{ internalType: 'address', name: '_0', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
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
              {
                internalType: 'uint256',
                name: 'patchVersion',
                type: 'uint256',
              },
              { internalType: 'string', name: 'url', type: 'string' },
              { internalType: 'string', name: 'title', type: 'string' },
            ],
            internalType: 'struct IModule_v1.Metadata',
            name: 'metadata',
            type: 'tuple',
            description: "The module's metadata.",
          },
          {
            internalType: 'contract IInverterBeacon_v1',
            name: 'beacon',
            type: 'address',
            description: "The module's {IInverterBeacon_v1} instance.",
          },
        ],
        name: 'registerMetadata',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Registers metadata `metadata` with {IInverterBeacon_v1} implementation `beacon`.',
      },
      {
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'reverter',
        outputs: [{ internalType: 'address', name: '_0', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
        description:
          'Returns the address of the {InverterReverter_v1} contract.',
      },
      {
        inputs: [
          { internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' },
        ],
        name: 'supportsInterface',
        outputs: [{ internalType: 'bool', name: '_0', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'newOwner', type: 'address' },
        ],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'trustedForwarder',
        outputs: [{ internalType: 'address', name: '_0', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
    ],
  },
  {
    name: 'ERC20Issuance_v1',
    description:
      'This contract creates an {ERC20} token with a supply cap and a whitelist-gated functionality to mint and burn tokens.',
    moduleType: 'external',
    deploymentInputs: {
      bytecode:
        '0x60c06040523480156200001157600080fd5b5060405162000ffd38038062000ffd833981016040819052620000349162000254565b80828686600362000046838262000395565b50600462000055828262000395565b50505080600003620000825760405163392e1e2760e01b8152600060048201526024015b60405180910390fd5b6080526001600160a01b038116620000b157604051631e4fbdf760e01b81526000600482015260240162000079565b620000bc81620000db565b50620000ca8160016200012d565b505060ff1660a05250620004619050565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b038216600081815260066020908152604091829020805460ff191685151590811790915591519182527f583b0aa0e528532caf4b907c11d7a8158a122fe2a6fb80cd9b09776ebea8d92d910160405180910390a25050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001b457600080fd5b81516001600160401b0380821115620001d157620001d16200018c565b604051601f8301601f19908116603f01168101908282118183101715620001fc57620001fc6200018c565b81604052838152602092508660208588010111156200021a57600080fd5b600091505b838210156200023e57858201830151818301840152908201906200021f565b6000602085830101528094505050505092915050565b600080600080600060a086880312156200026d57600080fd5b85516001600160401b03808211156200028557600080fd5b6200029389838a01620001a2565b96506020880151915080821115620002aa57600080fd5b50620002b988828901620001a2565b945050604086015160ff81168114620002d157600080fd5b6060870151608088015191945092506001600160a01b0381168114620002f657600080fd5b809150509295509295909350565b600181811c908216806200031957607f821691505b6020821081036200033a57634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111562000390576000816000526020600020601f850160051c810160208610156200036b5750805b601f850160051c820191505b818110156200038c5782815560010162000377565b5050505b505050565b81516001600160401b03811115620003b157620003b16200018c565b620003c981620003c2845462000304565b8462000340565b602080601f831160018114620004015760008415620003e85750858301515b600019600386901b1c1916600185901b1785556200038c565b600085815260208120601f198616915b82811015620004325788860151825594840194600190910190840162000411565b5085821015620004515787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60805160a051610b6f6200048e600039600061018d0152600081816101b901526108000152610b6f6000f3fe608060405234801561001057600080fd5b506004361061011b5760003560e01c806370a08231116100b25780639dc29fac11610081578063cf456ae711610066578063cf456ae71461028f578063dd62ed3e146102a2578063f2fde38b146102db57600080fd5b80639dc29fac14610269578063a9059cbb1461027c57600080fd5b806370a0823114610215578063715018a61461023e5780638da5cb5b1461024657806395d89b411461026157600080fd5b8063313ce567116100ee578063313ce56714610186578063355274ea146101b757806340c10f19146101dd578063423afa66146101f257600080fd5b806306fdde0314610120578063095ea7b31461013e57806318160ddd1461016157806323b872dd14610173575b600080fd5b6101286102ee565b604051610135919061097c565b60405180910390f35b61015161014c3660046109e7565b610380565b6040519015158152602001610135565b6002545b604051908152602001610135565b610151610181366004610a11565b61039a565b60405160ff7f0000000000000000000000000000000000000000000000000000000000000000168152602001610135565b7f0000000000000000000000000000000000000000000000000000000000000000610165565b6101f06101eb3660046109e7565b6103be565b005b610151610200366004610a4d565b60066020526000908152604090205460ff1681565b610165610223366004610a4d565b6001600160a01b031660009081526020819052604090205490565b6101f06103fc565b6005546040516001600160a01b039091168152602001610135565b610128610410565b6101f06102773660046109e7565b61041f565b61015161028a3660046109e7565b610459565b6101f061029d366004610a6f565b610467565b6101656102b0366004610aab565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6101f06102e9366004610a4d565b610479565b6060600380546102fd90610ade565b80601f016020809104026020016040519081016040528092919081815260200182805461032990610ade565b80156103765780601f1061034b57610100808354040283529160200191610376565b820191906000526020600020905b81548152906001019060200180831161035957829003601f168201915b5050505050905090565b60003361038e8185856104bc565b60019150505b92915050565b6000336103a88582856104ce565b6103b385858561054c565b506001949350505050565b3360009081526006602052604090205460ff166103ee57604051634199e25360e11b815260040160405180910390fd5b6103f882826105ab565b5050565b6104046105e1565b61040e600061060e565b565b6060600480546102fd90610ade565b3360009081526006602052604090205460ff1661044f57604051634199e25360e11b815260040160405180910390fd5b6103f88282610678565b60003361038e81858561054c565b61046f6105e1565b6103f882826106ae565b6104816105e1565b6001600160a01b0381166104b057604051631e4fbdf760e01b8152600060048201526024015b60405180910390fd5b6104b98161060e565b50565b6104c9838383600161070d565b505050565b6001600160a01b038381166000908152600160209081526040808320938616835292905220546000198114610546578181101561053757604051637dc7a0d960e11b81526001600160a01b038416600482015260248101829052604481018390526064016104a7565b6105468484848403600061070d565b50505050565b6001600160a01b03831661057657604051634b637e8f60e11b8152600060048201526024016104a7565b6001600160a01b0382166105a05760405163ec442f0560e01b8152600060048201526024016104a7565b6104c98383836107e2565b6001600160a01b0382166105d55760405163ec442f0560e01b8152600060048201526024016104a7565b6103f8600083836107e2565b6005546001600160a01b0316331461040e5760405163118cdaa760e01b81523360048201526024016104a7565b600580546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b0382166106a257604051634b637e8f60e11b8152600060048201526024016104a7565b6103f8826000836107e2565b6001600160a01b038216600081815260066020908152604091829020805460ff191685151590811790915591519182527f583b0aa0e528532caf4b907c11d7a8158a122fe2a6fb80cd9b09776ebea8d92d910160405180910390a25050565b6001600160a01b0384166107375760405163e602df0560e01b8152600060048201526024016104a7565b6001600160a01b03831661076157604051634a1406b160e11b8152600060048201526024016104a7565b6001600160a01b038085166000908152600160209081526040808320938716835292905220829055801561054657826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516107d491815260200190565b60405180910390a350505050565b6107ed838383610852565b6001600160a01b0383166104c9576002547f0000000000000000000000000000000000000000000000000000000000000000908181111561084b5760405163279e7e1560e21b815260048101829052602481018390526044016104a7565b5050505050565b6001600160a01b03831661087d5780600260008282546108729190610b18565b909155506108ef9050565b6001600160a01b038316600090815260208190526040902054818110156108d05760405163391434e360e21b81526001600160a01b038516600482015260248101829052604481018390526064016104a7565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b03821661090b5760028054829003905561092a565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161096f91815260200190565b60405180910390a3505050565b60006020808352835180602085015260005b818110156109aa5785810183015185820160400152820161098e565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b03811681146109e257600080fd5b919050565b600080604083850312156109fa57600080fd5b610a03836109cb565b946020939093013593505050565b600080600060608486031215610a2657600080fd5b610a2f846109cb565b9250610a3d602085016109cb565b9150604084013590509250925092565b600060208284031215610a5f57600080fd5b610a68826109cb565b9392505050565b60008060408385031215610a8257600080fd5b610a8b836109cb565b915060208301358015158114610aa057600080fd5b809150509250929050565b60008060408385031215610abe57600080fd5b610ac7836109cb565b9150610ad5602084016109cb565b90509250929050565b600181811c90821680610af257607f821691505b602082108103610b1257634e487b7160e01b600052602260045260246000fd5b50919050565b8082018082111561039457634e487b7160e01b600052601160045260246000fdfea2646970667358221220a9bfb5c5c20706a86afab827653f8ff975327b66b0754c3a10cb4f785a9afa8f64736f6c63430008170033',
      configData: [
        {
          name: 'name',
          type: 'string',
          description: 'The name of the issuance token',
        },
        {
          name: 'symbol',
          type: 'string',
          description: 'The symbol of the issuance token',
        },
        {
          name: 'decimals',
          type: 'uint8',
          description: 'The number of decimals of the issuance token',
        },
        {
          name: 'maxSupply',
          type: 'uint256',
          description: 'The maximum supply of the issuance token',
          tags: ['decimals:params:exact:decimals'],
        },
        {
          name: 'initialAdmin',
          type: 'address',
          description: 'The initial admin of the issuance token',
        },
      ],
    },
    abi: [
      {
        inputs: [
          { internalType: 'string', name: 'name_', type: 'string' },
          { internalType: 'string', name: 'symbol_', type: 'string' },
          { internalType: 'uint8', name: 'decimals_', type: 'uint8' },
          { internalType: 'uint256', name: 'maxSupply_', type: 'uint256' },
          { internalType: 'address', name: 'initialAdmin_', type: 'address' },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'increasedSupply', type: 'uint256' },
          { internalType: 'uint256', name: 'cap', type: 'uint256' },
        ],
        name: 'ERC20ExceededCap',
        type: 'error',
      },
      {
        inputs: [
          { internalType: 'address', name: 'spender', type: 'address' },
          { internalType: 'uint256', name: 'allowance', type: 'uint256' },
          { internalType: 'uint256', name: 'needed', type: 'uint256' },
        ],
        name: 'ERC20InsufficientAllowance',
        type: 'error',
      },
      {
        inputs: [
          { internalType: 'address', name: 'sender', type: 'address' },
          { internalType: 'uint256', name: 'balance', type: 'uint256' },
          { internalType: 'uint256', name: 'needed', type: 'uint256' },
        ],
        name: 'ERC20InsufficientBalance',
        type: 'error',
      },
      {
        inputs: [
          { internalType: 'address', name: 'approver', type: 'address' },
        ],
        name: 'ERC20InvalidApprover',
        type: 'error',
      },
      {
        inputs: [{ internalType: 'uint256', name: 'cap', type: 'uint256' }],
        name: 'ERC20InvalidCap',
        type: 'error',
      },
      {
        inputs: [
          { internalType: 'address', name: 'receiver', type: 'address' },
        ],
        name: 'ERC20InvalidReceiver',
        type: 'error',
      },
      {
        inputs: [{ internalType: 'address', name: 'sender', type: 'address' }],
        name: 'ERC20InvalidSender',
        type: 'error',
      },
      {
        inputs: [{ internalType: 'address', name: 'spender', type: 'address' }],
        name: 'ERC20InvalidSpender',
        type: 'error',
      },
      { inputs: [], name: 'IERC20Issuance__CallerIsNotMinter', type: 'error' },
      {
        inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
        name: 'OwnableInvalidOwner',
        type: 'error',
      },
      {
        inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
        name: 'OwnableUnauthorizedAccount',
        type: 'error',
      },
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
            tags: ['decimals'],
          },
        ],
        name: 'Approval',
        type: 'event',
        outputs: [],
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'minter',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'bool',
            name: 'allowed',
            type: 'bool',
            tags: ['decimals'],
          },
        ],
        name: 'MinterSet',
        type: 'event',
        outputs: [],
        description: 'Emitted when the minter is set.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'previousOwner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnershipTransferred',
        type: 'event',
        outputs: [],
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
            tags: ['decimals'],
          },
        ],
        name: 'Transfer',
        type: 'event',
        outputs: [],
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
            name: '_0',
            type: 'uint256',
            tags: ['decimals'],
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: '', type: 'address' }],
        name: 'allowedMinters',
        outputs: [{ internalType: 'bool', name: '_0', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'spender', type: 'address' },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
            tags: ['decimals'],
          },
        ],
        name: 'approve',
        outputs: [{ internalType: 'bool', name: '_0', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
        name: 'balanceOf',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            tags: ['decimals'],
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '_from',
            type: 'address',
            description: 'The address of the owner or approved address.',
          },
          {
            internalType: 'uint256',
            name: '_amount',
            type: 'uint256',
            tags: ['decimals'],
            description: 'The amount of tokens to burn.',
          },
        ],
        name: 'burn',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Burns tokens.',
      },
      {
        inputs: [],
        name: 'cap',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            tags: ['decimals'],
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'decimals',
        outputs: [{ internalType: 'uint8', name: '_0', type: 'uint8' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '_to',
            type: 'address',
            description: 'The address of the recipient.',
          },
          {
            internalType: 'uint256',
            name: '_amount',
            type: 'uint256',
            tags: ['decimals'],
            description: 'The amount of tokens to mint.',
          },
        ],
        name: 'mint',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Mints new tokens.',
      },
      {
        inputs: [],
        name: 'name',
        outputs: [{ internalType: 'string', name: '_0', type: 'string' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'owner',
        outputs: [{ internalType: 'address', name: '_0', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '_minter',
            type: 'address',
            description: 'The address of the minter.',
          },
          {
            internalType: 'bool',
            name: '_allowed',
            type: 'bool',
            description: 'If the address is allowed to mint or not.',
          },
        ],
        name: 'setMinter',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Sets the minting rights of an address.',
      },
      {
        inputs: [],
        name: 'symbol',
        outputs: [{ internalType: 'string', name: '_0', type: 'string' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'totalSupply',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            tags: ['decimals'],
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'to', type: 'address' },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
            tags: ['decimals'],
          },
        ],
        name: 'transfer',
        outputs: [{ internalType: 'bool', name: '_0', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'from', type: 'address' },
          { internalType: 'address', name: 'to', type: 'address' },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
            tags: ['decimals'],
          },
        ],
        name: 'transferFrom',
        outputs: [{ internalType: 'bool', name: '_0', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'newOwner', type: 'address' },
        ],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
  },
  {
    name: 'TransactionForwarder_v1',
    description:
      'This contract enables users to interact with smart contracts indirectly through a trusted forwarder. It supports meta transactions, allowing transactions to be sent by one party but signed and paid for by another. It also handles batch transactions (multi-call), facilitating complex, multi-step interactions within a single transaction.',
    moduleType: 'external',
    deploymentInputs: { configData: [] },
    abi: [
      { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
      {
        inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
        name: 'AddressInsufficientBalance',
        type: 'error',
      },
      {
        inputs: [
          {
            components: [
              { internalType: 'address', name: 'target', type: 'address' },
              { internalType: 'bool', name: 'allowFailure', type: 'bool' },
              { internalType: 'bytes', name: 'callData', type: 'bytes' },
            ],
            internalType: 'struct ITransactionForwarder_v1.SingleCall',
            name: 'call',
            type: 'tuple',
          },
        ],
        name: 'CallFailed',
        type: 'error',
      },
      {
        inputs: [{ internalType: 'uint48', name: 'deadline', type: 'uint48' }],
        name: 'ERC2771ForwarderExpiredRequest',
        type: 'error',
      },
      {
        inputs: [
          { internalType: 'address', name: 'signer', type: 'address' },
          { internalType: 'address', name: 'from', type: 'address' },
        ],
        name: 'ERC2771ForwarderInvalidSigner',
        type: 'error',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'requestedValue', type: 'uint256' },
          { internalType: 'uint256', name: 'msgValue', type: 'uint256' },
        ],
        name: 'ERC2771ForwarderMismatchedValue',
        type: 'error',
      },
      {
        inputs: [
          { internalType: 'address', name: 'target', type: 'address' },
          { internalType: 'address', name: 'forwarder', type: 'address' },
        ],
        name: 'ERC2771UntrustfulTarget',
        type: 'error',
      },
      { inputs: [], name: 'FailedInnerCall', type: 'error' },
      {
        inputs: [
          { internalType: 'address', name: 'account', type: 'address' },
          { internalType: 'uint256', name: 'currentNonce', type: 'uint256' },
        ],
        name: 'InvalidAccountNonce',
        type: 'error',
      },
      { inputs: [], name: 'InvalidShortString', type: 'error' },
      {
        inputs: [{ internalType: 'string', name: 'str', type: 'string' }],
        name: 'StringTooLong',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [],
        name: 'EIP712DomainChanged',
        type: 'event',
        outputs: [],
        description:
          'MAY be emitted to signal that the domain could have changed.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'signer',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'nonce',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'bool',
            name: 'success',
            type: 'bool',
          },
        ],
        name: 'ExecutedForwardRequest',
        type: 'event',
        outputs: [],
        description:
          'Emitted when a `ForwardRequest` is executed. NOTE: An unsuccessful forward request could be due to an invalid signature, an expired deadline, or simply a revert in the requested call. The contract guarantees that the relayer is not able to force the requested call to run out of gas.',
      },
      {
        inputs: [
          {
            components: [
              { internalType: 'address', name: 'from', type: 'address' },
              { internalType: 'address', name: 'to', type: 'address' },
              { internalType: 'uint256', name: 'value', type: 'uint256' },
              { internalType: 'uint256', name: 'gas', type: 'uint256' },
              { internalType: 'uint48', name: 'deadline', type: 'uint48' },
              { internalType: 'bytes', name: 'data', type: 'bytes' },
              { internalType: 'bytes', name: 'signature', type: 'bytes' },
            ],
            internalType: 'struct ERC2771Forwarder.ForwardRequestData',
            name: 'req',
            type: 'tuple',
            description: 'The ForwardRequest you want to get the digest from.',
          },
        ],
        name: 'createDigest',
        outputs: [
          {
            internalType: 'bytes32',
            name: 'digest',
            type: 'bytes32',
            description:
              'The digest needed to create a signature for the request.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Creates a digest for the given `ForwardRequestData`.',
      },
      {
        inputs: [],
        name: 'eip712Domain',
        outputs: [
          { internalType: 'bytes1', name: 'fields', type: 'bytes1' },
          { internalType: 'string', name: 'name', type: 'string' },
          { internalType: 'string', name: 'version', type: 'string' },
          { internalType: 'uint256', name: 'chainId', type: 'uint256' },
          {
            internalType: 'address',
            name: 'verifyingContract',
            type: 'address',
          },
          { internalType: 'bytes32', name: 'salt', type: 'bytes32' },
          { internalType: 'uint256[]', name: 'extensions', type: 'uint256[]' },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            components: [
              { internalType: 'address', name: 'from', type: 'address' },
              { internalType: 'address', name: 'to', type: 'address' },
              { internalType: 'uint256', name: 'value', type: 'uint256' },
              { internalType: 'uint256', name: 'gas', type: 'uint256' },
              { internalType: 'uint48', name: 'deadline', type: 'uint48' },
              { internalType: 'bytes', name: 'data', type: 'bytes' },
              { internalType: 'bytes', name: 'signature', type: 'bytes' },
            ],
            internalType: 'struct ERC2771Forwarder.ForwardRequestData',
            name: 'request',
            type: 'tuple',
          },
        ],
        name: 'execute',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [
          {
            components: [
              { internalType: 'address', name: 'from', type: 'address' },
              { internalType: 'address', name: 'to', type: 'address' },
              { internalType: 'uint256', name: 'value', type: 'uint256' },
              { internalType: 'uint256', name: 'gas', type: 'uint256' },
              { internalType: 'uint48', name: 'deadline', type: 'uint48' },
              { internalType: 'bytes', name: 'data', type: 'bytes' },
              { internalType: 'bytes', name: 'signature', type: 'bytes' },
            ],
            internalType: 'struct ERC2771Forwarder.ForwardRequestData[]',
            name: 'requests',
            type: 'tuple[]',
          },
          {
            internalType: 'address payable',
            name: 'refundReceiver',
            type: 'address',
          },
        ],
        name: 'executeBatch',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [
          {
            components: [
              { internalType: 'address', name: 'target', type: 'address' },
              { internalType: 'bool', name: 'allowFailure', type: 'bool' },
              { internalType: 'bytes', name: 'callData', type: 'bytes' },
            ],
            internalType: 'struct ITransactionForwarder_v1.SingleCall[]',
            name: 'calls',
            type: 'tuple[]',
            description:
              'Array of call structs that should be executed in the multicall.',
          },
        ],
        name: 'executeMulticall',
        outputs: [
          {
            components: [
              { internalType: 'bool', name: 'success', type: 'bool' },
              { internalType: 'bytes', name: 'returnData', type: 'bytes' },
            ],
            internalType: 'struct ITransactionForwarder_v1.Result[]',
            name: 'results',
            type: 'tuple[]',
            description: 'The return data of the calls that were executed.',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Enables the execution of multiple calls in a single transaction.',
      },
      {
        inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
        name: 'nonces',
        outputs: [{ internalType: 'uint256', name: '_0', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            components: [
              { internalType: 'address', name: 'from', type: 'address' },
              { internalType: 'address', name: 'to', type: 'address' },
              { internalType: 'uint256', name: 'value', type: 'uint256' },
              { internalType: 'uint256', name: 'gas', type: 'uint256' },
              { internalType: 'uint48', name: 'deadline', type: 'uint48' },
              { internalType: 'bytes', name: 'data', type: 'bytes' },
              { internalType: 'bytes', name: 'signature', type: 'bytes' },
            ],
            internalType: 'struct ERC2771Forwarder.ForwardRequestData',
            name: 'request',
            type: 'tuple',
          },
        ],
        name: 'verify',
        outputs: [{ internalType: 'bool', name: '_0', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
      },
    ],
  },
  {
    name: 'ERC20Issuance_Blacklist_v1',
    description:
      'An ERC20 token implementation that extends ERC20Issuance_v1 with blacklisting capabilities. This allows the owner to restrict specific addresses from participating in token operations.',
    moduleType: 'external',
    deploymentInputs: {
      bytecode:
        '0x60c06040523480156200001157600080fd5b50604051620017343803806200173483398101604081905262000034916200030b565b85858585858082868660036200004b83826200044e565b5060046200005a82826200044e565b50505080600003620000875760405163392e1e2760e01b8152600060048201526024015b60405180910390fd5b6080526001600160a01b038116620000b657604051631e4fbdf760e01b8152600060048201526024016200007e565b620000c181620000f3565b50620000cf81600162000145565b505060ff1660a05250620000e79050816001620001a5565b5050505050506200051a565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b038216600081815260066020908152604091829020805460ff191685151590811790915591519182527f583b0aa0e528532caf4b907c11d7a8158a122fe2a6fb80cd9b09776ebea8d92d91015b60405180910390a25050565b6001600160a01b038216620001cd576040516362c6e65560e01b815260040160405180910390fd5b6001600160a01b038216600081815260086020908152604091829020805460ff191685151590811790915591519182527f45c726725db69800dfdea06b168ff321aa8b770b249eaa27ae3d9a06c4a29259910162000199565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200024e57600080fd5b81516001600160401b03808211156200026b576200026b62000226565b604051601f8301601f19908116603f0116810190828211818310171562000296576200029662000226565b8160405283815260209250866020858801011115620002b457600080fd5b600091505b83821015620002d85785820183015181830184015290820190620002b9565b6000602085830101528094505050505092915050565b80516001600160a01b03811681146200030657600080fd5b919050565b60008060008060008060c087890312156200032557600080fd5b86516001600160401b03808211156200033d57600080fd5b6200034b8a838b016200023c565b975060208901519150808211156200036257600080fd5b506200037189828a016200023c565b955050604087015160ff811681146200038957600080fd5b60608801519094509250620003a160808801620002ee565b9150620003b160a08801620002ee565b90509295509295509295565b600181811c90821680620003d257607f821691505b602082108103620003f357634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111562000449576000816000526020600020601f850160051c81016020861015620004245750805b601f850160051c820191505b81811015620004455782815560010162000430565b5050505b505050565b81516001600160401b038111156200046a576200046a62000226565b62000482816200047b8454620003bd565b84620003f9565b602080601f831160018114620004ba5760008415620004a15750858301515b600019600386901b1c1916600185901b17855562000445565b600085815260208120601f198616915b82811015620004eb57888601518255948401946001909101908401620004ca565b50858210156200050a5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60805160a0516111ed62000547600039600061022a0152600081816102560152610d1801526111ed6000f3fe608060405234801561001057600080fd5b50600436106101a35760003560e01c8063537df3b6116100ee57806395d89b4111610097578063cf456ae711610071578063cf456ae7146103aa578063dd62ed3e146103bd578063f2fde38b146103f6578063fe575a871461040957600080fd5b806395d89b411461037c5780639dc29fac14610384578063a9059cbb1461039757600080fd5b8063715018a6116100c8578063715018a6146103515780638da5cb5b146103595780639559c0bd1461037457600080fd5b8063537df3b61461030257806369aa43e31461031557806370a082311461032857600080fd5b8063355274ea11610150578063423afa661161012a578063423afa66146102b957806344337ea1146102dc5780634fc6f4f7146102ef57600080fd5b8063355274ea1461025457806339c5fe5b1461027a57806340c10f19146102a657600080fd5b806323b872dd1161018157806323b872dd146101fb5780632659e5da1461020e578063313ce5671461022357600080fd5b806306fdde03146101a8578063095ea7b3146101c657806318160ddd146101e9575b600080fd5b6101b0610435565b6040516101bd9190610e94565b60405180910390f35b6101d96101d4366004610eff565b6104c7565b60405190151581526020016101bd565b6002545b6040519081526020016101bd565b6101d9610209366004610f29565b6104e1565b61022161021c366004610f65565b610505565b005b60405160ff7f00000000000000000000000000000000000000000000000000000000000000001681526020016101bd565b7f00000000000000000000000000000000000000000000000000000000000000006101ed565b6101d9610288366004610fda565b6001600160a01b031660009081526008602052604090205460ff1690565b6102216102b4366004610eff565b6105aa565b6101d96102c7366004610fda565b60066020526000908152604090205460ff1681565b6102216102ea366004610fda565b6105e8565b6102216102fd366004610ffc565b6106ac565b610221610310366004610fda565b6106be565b61022161032336600461104e565b61077f565b6101ed610336366004610fda565b6001600160a01b031660009081526020819052604090205490565b610221610817565b6005546040516001600160a01b0390911681526020016101bd565b6101ed60c881565b6101b061082b565b610221610392366004610eff565b61083a565b6101d96103a5366004610eff565b610874565b6102216103b8366004610ffc565b610882565b6101ed6103cb366004611113565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b610221610404366004610fda565b610894565b6101d9610417366004610fda565b6001600160a01b031660009081526007602052604090205460ff1690565b60606003805461044490611146565b80601f016020809104026020016040519081016040528092919081815260200182805461047090611146565b80156104bd5780601f10610492576101008083540402835291602001916104bd565b820191906000526020600020905b8154815290600101906020018083116104a057829003601f168201915b5050505050905090565b6000336104d58185856108cf565b60019150505b92915050565b6000336104ef8582856108dc565b6104fa858585610954565b506001949350505050565b3360009081526008602052604090205460ff1661053557604051634a2ece7160e01b815260040160405180910390fd5b8060c8811115610567576040516358451eed60e11b81526004810182905260c860248201526044015b60405180910390fd5b60005b818110156105a45761059c84848381811061058757610587611180565b90506020020160208101906103109190610fda565b60010161056a565b50505050565b3360009081526006602052604090205460ff166105da57604051634199e25360e11b815260040160405180910390fd5b6105e482826109b3565b5050565b3360009081526008602052604090205460ff1661061857604051634a2ece7160e01b815260040160405180910390fd5b6001600160a01b03811661063f576040516362c6e65560e01b815260040160405180910390fd5b6001600160a01b03811660009081526007602052604090205460ff166106a9576001600160a01b038116600081815260076020526040808220805460ff19166001179055517ff9b68063b051b82957fa193585681240904fed808db8b30fc5a2d2202c6ed6279190a25b50565b6106b46109e9565b6105e48282610a16565b3360009081526008602052604090205460ff166106ee57604051634a2ece7160e01b815260040160405180910390fd5b6001600160a01b038116610715576040516362c6e65560e01b815260040160405180910390fd5b6001600160a01b03811660009081526007602052604090205460ff16156106a9576001600160a01b038116600081815260076020526040808220805460ff19169055517f2b6bf71b58b3583add364b3d9060ebf8019650f65f5be35f5464b9cb3e4ba2d49190a250565b3360009081526008602052604090205460ff166107af57604051634a2ece7160e01b815260040160405180910390fd5b805160c88111156107dd576040516358451eed60e11b81526004810182905260c8602482015260440161055e565b60005b818110156108125761080a8382815181106107fd576107fd611180565b60200260200101516105e8565b6001016107e0565b505050565b61081f6109e9565b6108296000610a9d565b565b60606004805461044490611146565b3360009081526006602052604090205460ff1661086a57604051634199e25360e11b815260040160405180910390fd5b6105e48282610b07565b6000336104d5818585610954565b61088a6109e9565b6105e48282610b3d565b61089c6109e9565b6001600160a01b0381166108c657604051631e4fbdf760e01b81526000600482015260240161055e565b6106a981610a9d565b6108128383836001610b95565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146105a4578181101561094557604051637dc7a0d960e11b81526001600160a01b0384166004820152602481018290526044810183905260640161055e565b6105a484848484036000610b95565b6001600160a01b03831661097e57604051634b637e8f60e11b81526000600482015260240161055e565b6001600160a01b0382166109a85760405163ec442f0560e01b81526000600482015260240161055e565b610812838383610c6a565b6001600160a01b0382166109dd5760405163ec442f0560e01b81526000600482015260240161055e565b6105e460008383610c6a565b6005546001600160a01b031633146108295760405163118cdaa760e01b815233600482015260240161055e565b6001600160a01b038216610a3d576040516362c6e65560e01b815260040160405180910390fd5b6001600160a01b038216600081815260086020908152604091829020805460ff191685151590811790915591519182527f45c726725db69800dfdea06b168ff321aa8b770b249eaa27ae3d9a06c4a2925991015b60405180910390a25050565b600580546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b038216610b3157604051634b637e8f60e11b81526000600482015260240161055e565b6105e482600083610c6a565b6001600160a01b038216600081815260066020908152604091829020805460ff191685151590811790915591519182527f583b0aa0e528532caf4b907c11d7a8158a122fe2a6fb80cd9b09776ebea8d92d9101610a91565b6001600160a01b038416610bbf5760405163e602df0560e01b81526000600482015260240161055e565b6001600160a01b038316610be957604051634a1406b160e11b81526000600482015260240161055e565b6001600160a01b03808516600090815260016020908152604080832093871683529290522082905580156105a457826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610c5c91815260200190565b60405180910390a350505050565b6001600160a01b03831660009081526007602052604090205460ff1615610caf5760405163022a56f160e21b81526001600160a01b038416600482015260240161055e565b6001600160a01b03821660009081526007602052604090205460ff1615610cf45760405163022a56f160e21b81526001600160a01b038316600482015260240161055e565b610812838383610d05838383610d6a565b6001600160a01b038316610812576002547f00000000000000000000000000000000000000000000000000000000000000009081811115610d635760405163279e7e1560e21b8152600481018290526024810183905260440161055e565b5050505050565b6001600160a01b038316610d95578060026000828254610d8a9190611196565b90915550610e079050565b6001600160a01b03831660009081526020819052604090205481811015610de85760405163391434e360e21b81526001600160a01b0385166004820152602481018290526044810183905260640161055e565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b038216610e2357600280548290039055610e42565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610e8791815260200190565b60405180910390a3505050565b60006020808352835180602085015260005b81811015610ec257858101830151858201604001528201610ea6565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b0381168114610efa57600080fd5b919050565b60008060408385031215610f1257600080fd5b610f1b83610ee3565b946020939093013593505050565b600080600060608486031215610f3e57600080fd5b610f4784610ee3565b9250610f5560208501610ee3565b9150604084013590509250925092565b60008060208385031215610f7857600080fd5b823567ffffffffffffffff80821115610f9057600080fd5b818501915085601f830112610fa457600080fd5b813581811115610fb357600080fd5b8660208260051b8501011115610fc857600080fd5b60209290920196919550909350505050565b600060208284031215610fec57600080fd5b610ff582610ee3565b9392505050565b6000806040838503121561100f57600080fd5b61101883610ee3565b91506020830135801515811461102d57600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b6000602080838503121561106157600080fd5b823567ffffffffffffffff8082111561107957600080fd5b818501915085601f83011261108d57600080fd5b81358181111561109f5761109f611038565b8060051b604051601f19603f830116810181811085821117156110c4576110c4611038565b6040529182528482019250838101850191888311156110e257600080fd5b938501935b82851015611107576110f885610ee3565b845293850193928501926110e7565b98975050505050505050565b6000806040838503121561112657600080fd5b61112f83610ee3565b915061113d60208401610ee3565b90509250929050565b600181811c9082168061115a57607f821691505b60208210810361117a57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b808201808211156104db57634e487b7160e01b600052601160045260246000fdfea2646970667358221220f53dd979bbffdfb60d6e2f01449a3a151b97ffa75c00a4418d4d81dbebbbac9f64736f6c63430008170033',
      configData: [],
    },
    abi: [
      {
        inputs: [
          { internalType: 'string', name: 'name_', type: 'string' },
          { internalType: 'string', name: 'symbol_', type: 'string' },
          { internalType: 'uint8', name: 'decimals_', type: 'uint8' },
          { internalType: 'uint256', name: 'initialSupply_', type: 'uint256' },
          { internalType: 'address', name: 'initialAdmin_', type: 'address' },
          {
            internalType: 'address',
            name: 'initialBlacklistManager_',
            type: 'address',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'increasedSupply', type: 'uint256' },
          { internalType: 'uint256', name: 'cap', type: 'uint256' },
        ],
        name: 'ERC20ExceededCap',
        type: 'error',
      },
      {
        inputs: [
          { internalType: 'address', name: 'spender', type: 'address' },
          { internalType: 'uint256', name: 'allowance', type: 'uint256' },
          { internalType: 'uint256', name: 'needed', type: 'uint256' },
        ],
        name: 'ERC20InsufficientAllowance',
        type: 'error',
      },
      {
        inputs: [
          { internalType: 'address', name: 'sender', type: 'address' },
          { internalType: 'uint256', name: 'balance', type: 'uint256' },
          { internalType: 'uint256', name: 'needed', type: 'uint256' },
        ],
        name: 'ERC20InsufficientBalance',
        type: 'error',
      },
      {
        inputs: [
          { internalType: 'address', name: 'approver', type: 'address' },
        ],
        name: 'ERC20InvalidApprover',
        type: 'error',
      },
      {
        inputs: [{ internalType: 'uint256', name: 'cap', type: 'uint256' }],
        name: 'ERC20InvalidCap',
        type: 'error',
      },
      {
        inputs: [
          { internalType: 'address', name: 'receiver', type: 'address' },
        ],
        name: 'ERC20InvalidReceiver',
        type: 'error',
      },
      {
        inputs: [{ internalType: 'address', name: 'sender', type: 'address' }],
        name: 'ERC20InvalidSender',
        type: 'error',
      },
      {
        inputs: [{ internalType: 'address', name: 'spender', type: 'address' }],
        name: 'ERC20InvalidSpender',
        type: 'error',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'provided', type: 'uint256' },
          { internalType: 'uint256', name: 'limit', type: 'uint256' },
        ],
        name: 'ERC20Issuance_Blacklist_BatchLimitExceeded',
        type: 'error',
      },
      {
        inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
        name: 'ERC20Issuance_Blacklist_BlacklistedAddress',
        type: 'error',
      },
      {
        inputs: [],
        name: 'ERC20Issuance_Blacklist_NotBlacklistManager',
        type: 'error',
      },
      {
        inputs: [],
        name: 'ERC20Issuance_Blacklist_ZeroAddress',
        type: 'error',
      },
      { inputs: [], name: 'IERC20Issuance__CallerIsNotMinter', type: 'error' },
      {
        inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
        name: 'OwnableInvalidOwner',
        type: 'error',
      },
      {
        inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
        name: 'OwnableUnauthorizedAccount',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'account_',
            type: 'address',
            description: 'The address that was blacklisted',
          },
        ],
        name: 'AddedToBlacklist',
        type: 'event',
        outputs: [],
        description: 'Emitted when an address is added to the blacklist',
      },
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
            tags: ['decimals'],
          },
        ],
        name: 'Approval',
        type: 'event',
        outputs: [],
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'account_',
            type: 'address',
            description: 'The address that was granted or revoked the role',
          },
          {
            indexed: false,
            internalType: 'bool',
            name: 'allowed_',
            type: 'bool',
            description:
              'Whether the role was granted (true) or revoked (false)',
          },
        ],
        name: 'BlacklistManagerUpdated',
        type: 'event',
        outputs: [],
        description:
          'Emitted when a blacklist manager role is granted or revoked',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'minter',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'bool',
            name: 'allowed',
            type: 'bool',
          },
        ],
        name: 'MinterSet',
        type: 'event',
        outputs: [],
        description: 'Emitted when the minter is set.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'previousOwner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnershipTransferred',
        type: 'event',
        outputs: [],
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'account_',
            type: 'address',
            description: 'The address that was removed from blacklist',
          },
        ],
        name: 'RemovedFromBlacklist',
        type: 'event',
        outputs: [],
        description: 'Emitted when an address is removed from the blacklist',
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
            tags: ['decimals'],
          },
        ],
        name: 'Transfer',
        type: 'event',
        outputs: [],
      },
      {
        inputs: [],
        name: 'BATCH_LIMIT',
        outputs: [{ internalType: 'uint256', name: '_0', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
        description:
          'Maximum number of addresses that can be blacklisted in a batch',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'account_',
            type: 'address',
            description: 'The address to blacklist',
          },
        ],
        name: 'addToBlacklist',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Adds an address to blacklist',
      },
      {
        inputs: [
          {
            internalType: 'address[]',
            name: 'accounts_',
            type: 'address[]',
            description: 'Array of addresses to blacklist',
          },
        ],
        name: 'addToBlacklistBatchAddresses',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Adds multiple addresses to blacklist',
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
            name: '_0',
            type: 'uint256',
            tags: ['decimals'],
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: '', type: 'address' }],
        name: 'allowedMinters',
        outputs: [{ internalType: 'bool', name: '_0', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'spender', type: 'address' },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
            tags: ['decimals'],
          },
        ],
        name: 'approve',
        outputs: [{ internalType: 'bool', name: '_0', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
        name: 'balanceOf',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            tags: ['decimals'],
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '_from',
            type: 'address',
            description: 'The address of the owner or approved address.',
          },
          {
            internalType: 'uint256',
            name: '_amount',
            type: 'uint256',
            tags: ['decimals'],
            description: 'The amount of tokens to burn.',
          },
        ],
        name: 'burn',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Burns tokens.',
      },
      {
        inputs: [],
        name: 'cap',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            tags: ['decimals'],
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'decimals',
        outputs: [{ internalType: 'uint8', name: '_0', type: 'uint8' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'account_',
            type: 'address',
            description: 'The account to check',
          },
        ],
        name: 'isBlacklistManager',
        outputs: [
          {
            internalType: 'bool',
            name: '_0',
            type: 'bool',
            description: 'True if the account is a blacklist manager',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Checks if an address is a blacklist manager',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'account_',
            type: 'address',
            description: 'The account to check',
          },
        ],
        name: 'isBlacklisted',
        outputs: [
          {
            internalType: 'bool',
            name: '_0',
            type: 'bool',
            description: 'True if the account is blacklisted',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Checks if an address is blacklisted',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '_to',
            type: 'address',
            description: 'The address of the recipient.',
          },
          {
            internalType: 'uint256',
            name: '_amount',
            type: 'uint256',
            tags: ['decimals'],
            description: 'The amount of tokens to mint.',
          },
        ],
        name: 'mint',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Mints new tokens.',
      },
      {
        inputs: [],
        name: 'name',
        outputs: [{ internalType: 'string', name: '_0', type: 'string' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'owner',
        outputs: [{ internalType: 'address', name: '_0', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'account_',
            type: 'address',
            description: 'The address to remove',
          },
        ],
        name: 'removeFromBlacklist',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Removes an address from blacklist',
      },
      {
        inputs: [
          {
            internalType: 'address[]',
            name: 'accounts_',
            type: 'address[]',
            description: 'Array of addresses to remove',
          },
        ],
        name: 'removeFromBlacklistBatchAddresses',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Removes multiple addresses from blacklist',
      },
      {
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'manager_',
            type: 'address',
            description: 'The address to grant or revoke the role from',
          },
          {
            internalType: 'bool',
            name: 'allowed_',
            type: 'bool',
            description: 'Whether to grant (true) or revoke (false) the role',
          },
        ],
        name: 'setBlacklistManager',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Sets or revokes blacklist manager role for an address',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '_minter',
            type: 'address',
            description: 'The address of the minter.',
          },
          {
            internalType: 'bool',
            name: '_allowed',
            type: 'bool',
            description: 'If the address is allowed to mint or not.',
          },
        ],
        name: 'setMinter',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Sets the minting rights of an address.',
      },
      {
        inputs: [],
        name: 'symbol',
        outputs: [{ internalType: 'string', name: '_0', type: 'string' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'totalSupply',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            tags: ['decimals'],
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'to', type: 'address' },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
            tags: ['decimals'],
          },
        ],
        name: 'transfer',
        outputs: [{ internalType: 'bool', name: '_0', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'from', type: 'address' },
          { internalType: 'address', name: 'to', type: 'address' },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
            tags: ['decimals'],
          },
        ],
        name: 'transferFrom',
        outputs: [{ internalType: 'bool', name: '_0', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'newOwner', type: 'address' },
        ],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
  },
  {
    name: 'ERC20',
    description: '',
    moduleType: 'external',
    deploymentInputs: { configData: [] },
    abi: [
      {
        inputs: [
          { internalType: 'address', name: 'spender', type: 'address' },
          { internalType: 'uint256', name: 'allowance', type: 'uint256' },
          { internalType: 'uint256', name: 'needed', type: 'uint256' },
        ],
        name: 'ERC20InsufficientAllowance',
        type: 'error',
      },
      {
        inputs: [
          { internalType: 'address', name: 'sender', type: 'address' },
          { internalType: 'uint256', name: 'balance', type: 'uint256' },
          { internalType: 'uint256', name: 'needed', type: 'uint256' },
        ],
        name: 'ERC20InsufficientBalance',
        type: 'error',
      },
      {
        inputs: [
          { internalType: 'address', name: 'approver', type: 'address' },
        ],
        name: 'ERC20InvalidApprover',
        type: 'error',
      },
      {
        inputs: [
          { internalType: 'address', name: 'receiver', type: 'address' },
        ],
        name: 'ERC20InvalidReceiver',
        type: 'error',
      },
      {
        inputs: [{ internalType: 'address', name: 'sender', type: 'address' }],
        name: 'ERC20InvalidSender',
        type: 'error',
      },
      {
        inputs: [{ internalType: 'address', name: 'spender', type: 'address' }],
        name: 'ERC20InvalidSpender',
        type: 'error',
      },
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
            tags: ['decimals'],
          },
        ],
        name: 'Approval',
        type: 'event',
        outputs: [],
        description:
          'Emitted when the allowance of a `spender` for an `owner` is set by a call to {approve}. `value` is the new allowance.',
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
            tags: ['decimals'],
          },
        ],
        name: 'Transfer',
        type: 'event',
        outputs: [],
        description:
          'Emitted when `value` tokens are moved from one account (`from`) to another (`to`). Note that `value` may be zero.',
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
            name: '_0',
            type: 'uint256',
            tags: ['decimals'],
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'spender', type: 'address' },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
            tags: ['decimals'],
          },
        ],
        name: 'approve',
        outputs: [{ internalType: 'bool', name: '_0', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
        name: 'balanceOf',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            tags: ['decimals'],
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'decimals',
        outputs: [{ internalType: 'uint8', name: '_0', type: 'uint8' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'name',
        outputs: [{ internalType: 'string', name: '_0', type: 'string' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'symbol',
        outputs: [{ internalType: 'string', name: '_0', type: 'string' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'totalSupply',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            tags: ['decimals'],
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'to', type: 'address' },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
            tags: ['decimals'],
          },
        ],
        name: 'transfer',
        outputs: [{ internalType: 'bool', name: '_0', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'from', type: 'address' },
          { internalType: 'address', name: 'to', type: 'address' },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
            tags: ['decimals'],
          },
        ],
        name: 'transferFrom',
        outputs: [{ internalType: 'bool', name: '_0', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
  },
  {
    name: 'FM_BC_Restricted_Bancor_Redeeming_VirtualSupply_v1',
    description:
      "This contract enables the issuance and redeeming of tokens on a bonding curve, using a virtual supply for both the issuance and the collateral as input. It integrates Aragon's Bancor Formula to manage the calculations for token issuance and redemption rates based on specified reserve ratios.",
    moduleType: 'fundingManager',
    deploymentInputs: {
      configData: [
        {
          name: 'issuanceToken',
          type: 'address',
          description: 'The address of the token that will be issued',
        },
        {
          components: [
            {
              name: 'formula',
              type: 'address',
              description:
                'The formula contract used to calculate the issucance and redemption rate',
            },
            {
              name: 'reserveRatioForBuying',
              type: 'uint32',
              description:
                'The reserve ratio, expressed in PPM, used for issuance on the bonding curve',
            },
            {
              name: 'reserveRatioForSelling',
              type: 'uint32',
              description:
                'The reserve ratio, expressed in PPM, used for redeeming on the bonding curve',
            },
            {
              name: 'buyFee',
              type: 'uint256',
              description: 'The buy fee expressed in base points',
            },
            {
              name: 'sellFee',
              type: 'uint256',
              description: 'The sell fee expressed in base points',
            },
            {
              name: 'buyIsOpen',
              type: 'bool',
              description:
                'The indicator used for enabling/disabling the buying functionalities on deployment',
            },
            {
              name: 'sellIsOpen',
              type: 'bool',
              description:
                'The indicator used for enabling/disabling the selling functionalties on deployment',
            },
            {
              name: 'initialIssuanceSupply',
              type: 'uint256',
              description: 'The initial virtual issuance token supply',
              tags: ['decimals:params:indirect:issuanceToken'],
            },
            {
              name: 'initialCollateralSupply',
              type: 'uint256',
              description: 'The initial virtual collateral token supply',
              tags: ['decimals:params:indirect:collateralToken'],
            },
          ],
          name: 'bondingCurveParams',
          type: 'tuple',
        },
        {
          name: 'collateralToken',
          type: 'address',
          description:
            'The address of the token that will be deposited to the funding manager',
        },
      ],
    },
    abi: [
      {
        inputs: [{ internalType: 'address', name: 'target', type: 'address' }],
        name: 'AddressEmptyCode',
        type: 'error',
      },
      {
        inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
        name: 'AddressInsufficientBalance',
        type: 'error',
      },
      { inputs: [], name: 'FailedInnerCall', type: 'error' },
      { inputs: [], name: 'InvalidInitialization', type: 'error' },
      {
        inputs: [{ internalType: 'string', name: 'funcSig', type: 'string' }],
        name: 'Module_OrchestratorCallbackFailed',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__BondingCurveBase__BuyingFunctionaltiesClosed',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__BondingCurveBase__FeeAmountToHigh',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__BondingCurveBase__InsufficientOutputAmount',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__BondingCurveBase__InvalidDepositAmount',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__BondingCurveBase__InvalidFeePercentage',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__BondingCurveBase__InvalidMinAmountOut',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__BondingCurveBase__InvalidRecipient',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__BondingCurveBase__InvalidWithdrawAmount',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__BondingCurveBase__TradeAmountTooLow',
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
      {
        inputs: [],
        name: 'Module__FM_BC_Bancor_Redeeming_VirtualSupply__CurveInteractionsMustBeClosed',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__FM_BC_Bancor_Redeeming_VirtualSupply__InvalidBancorFormula',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__FM_BC_Bancor_Redeeming_VirtualSupply__InvalidOrchestratorTokenWithdrawAmount',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__FM_BC_Bancor_Redeeming_VirtualSupply__InvalidReserveRatio',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__FM_BC_Bancor_Redeeming_VirtualSupply__InvalidTokenDecimal',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__FM_BC_Restricted_Bancor_Redeeming_VirtualSupply__FeatureDeactivated',
        type: 'error',
      },
      { inputs: [], name: 'Module__InvalidAddress', type: 'error' },
      { inputs: [], name: 'Module__InvalidMetadata', type: 'error' },
      { inputs: [], name: 'Module__InvalidOrchestratorAddress', type: 'error' },
      { inputs: [], name: 'Module__OnlyCallableByOrchestrator', type: 'error' },
      {
        inputs: [],
        name: 'Module__OnlyCallableByPaymentClient',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__RedeemingBondingCurveBase__InsufficientCollateralForRedemption',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__RedeemingBondingCurveBase__SellingFunctionaltiesClosed',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__VirtualCollateralSupplyBase__AddResultsInOverflow',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__VirtualCollateralSupplyBase__SubtractResultsInUnderflow',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__VirtualCollateralSupplyBase__VirtualSupplyCannotBeZero',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__VirtualIssuanceSupplyBase__AddResultsInOverflow',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__VirtualIssuanceSupplyBase__SubtractResultsInUnderflow',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__VirtualIssuanceSupplyBase__VirtualSupplyCannotBeZero',
        type: 'error',
      },
      { inputs: [], name: 'NotInitializing', type: 'error' },
      {
        inputs: [{ internalType: 'address', name: 'token', type: 'address' }],
        name: 'SafeERC20FailedOperation',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint256',
            name: 'newBuyFee',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'oldBuyFee',
            type: 'uint256',
          },
        ],
        name: 'BuyFeeUpdated',
        type: 'event',
        outputs: [],
        description: 'Event emitted when buy fee is updated.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint32',
            name: 'newBuyReserveRatio',
            type: 'uint32',
            description: 'The new reserve ratio for buying.',
          },
          {
            indexed: false,
            internalType: 'uint32',
            name: 'oldBuyReserveRatio',
            type: 'uint32',
            description: 'The old reserve ratio for buying.',
          },
        ],
        name: 'BuyReserveRatioSet',
        type: 'event',
        outputs: [],
        description:
          'Event emitted when the reserve ratio for buying is updated.',
      },
      {
        anonymous: false,
        inputs: [],
        name: 'BuyingDisabled',
        type: 'event',
        outputs: [],
        description: 'Event emitted when buying is closed.',
      },
      {
        anonymous: false,
        inputs: [],
        name: 'BuyingEnabled',
        type: 'event',
        outputs: [],
        description: 'Event emitted when buying is opened.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint64',
            name: 'version',
            type: 'uint64',
          },
        ],
        name: 'Initialized',
        type: 'event',
        outputs: [],
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'issuanceToken',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint8',
            name: 'decimals',
            type: 'uint8',
          },
        ],
        name: 'IssuanceTokenSet',
        type: 'event',
        outputs: [],
        description: 'Event emitted when the issuance token is updated.',
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
              'The address of the {Orchestrator_v1} the module is linked to.',
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
              {
                internalType: 'uint256',
                name: 'patchVersion',
                type: 'uint256',
              },
              { internalType: 'string', name: 'url', type: 'string' },
              { internalType: 'string', name: 'title', type: 'string' },
            ],
            indexed: false,
            internalType: 'struct IModule_v1.Metadata',
            name: 'metadata',
            type: 'tuple',
            description: 'The metadata of the module.',
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
            name: 'token',
            type: 'address',
            description:
              "The token that serves as collateral token making up the curve's reserve.",
          },
          {
            indexed: false,
            internalType: 'uint8',
            name: 'decimals',
            type: 'uint8',
          },
        ],
        name: 'OrchestratorTokenSet',
        type: 'event',
        outputs: [],
        description: 'Event emitted when collateral token has been set.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: 'receiver',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            tags: ['decimals'],
          },
        ],
        name: 'ProjectCollateralFeeWithdrawn',
        type: 'event',
        outputs: [],
        description: 'Event emitted when project collateral fee is withdrawn.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'token',
            type: 'address',
            description: 'The token minted as protocol fee.',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'treasury',
            type: 'address',
            description:
              'The protocol treasury address receiving the token fee amount.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'feeAmount',
            type: 'uint256',
            tags: ['decimals'],
            description: 'The fee amount minted to the treasury.',
          },
        ],
        name: 'ProtocolFeeMinted',
        type: 'event',
        outputs: [],
        description:
          'Event emitted when protocol fee has been minted to the treasury.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'token',
            type: 'address',
            description: 'The token received as protocol fee.',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'treasury',
            type: 'address',
            description:
              'The protocol treasury address receiving the token fee amount.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'feeAmount',
            type: 'uint256',
            tags: ['decimals'],
            description: 'The fee amount transferred to the treasury.',
          },
        ],
        name: 'ProtocolFeeTransferred',
        type: 'event',
        outputs: [],
        description:
          'Event emitted when protocol fee has been transferred to the treasury.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint256',
            name: 'newSellFee',
            type: 'uint256',
            description: 'The new sell fee.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'oldSellFee',
            type: 'uint256',
            description: 'The old sell fee.',
          },
        ],
        name: 'SellFeeUpdated',
        type: 'event',
        outputs: [],
        description: 'Event emitted when sell fee is updated.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint32',
            name: 'newSellReserveRatio',
            type: 'uint32',
            description: 'The new reserve ratio for selling.',
          },
          {
            indexed: false,
            internalType: 'uint32',
            name: 'oldSellReserveRatio',
            type: 'uint32',
            description: 'The old reserve ratio for selling.',
          },
        ],
        name: 'SellReserveRatioSet',
        type: 'event',
        outputs: [],
        description:
          'Event emitted when the reserve ratio for selling is updated.',
      },
      {
        anonymous: false,
        inputs: [],
        name: 'SellingDisabled',
        type: 'event',
        outputs: [],
        description: 'Event emitted when selling is closed.',
      },
      {
        anonymous: false,
        inputs: [],
        name: 'SellingEnabled',
        type: 'event',
        outputs: [],
        description: 'Event emitted when selling is opened.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint8',
            name: 'oldDecimals',
            type: 'uint8',
            description: 'The old decimals of the issuance token.',
          },
          {
            indexed: false,
            internalType: 'uint8',
            name: 'newDecimals',
            type: 'uint8',
            description: 'The new decimals of the issuance token.',
          },
        ],
        name: 'TokenDecimalsUpdated',
        type: 'event',
        outputs: [],
        description:
          'Event emitted when the decimals of the issuance token are updated.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'receiver',
            type: 'address',
            description: 'The address that will receive the issued tokens.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'depositAmount',
            type: 'uint256',
            tags: ['decimals'],
            description: 'The amount of collateral token deposited.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'receivedAmount',
            type: 'uint256',
            tags: ['decimals'],
            description: 'The amount of issued token received.',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'buyer',
            type: 'address',
            description: 'The address that initiated the buy order.',
          },
        ],
        name: 'TokensBought',
        type: 'event',
        outputs: [],
        description: 'Event emitted when tokens have been succesfully issued.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'receiver',
            type: 'address',
            description: 'The address that will receive the redeemed tokens.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'depositAmount',
            type: 'uint256',
            tags: ['decimals'],
            description: 'The amount of issued token deposited.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'receivedAmount',
            type: 'uint256',
            tags: ['decimals'],
            description: 'The amount of collateral token received.',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'seller',
            type: 'address',
            description: 'The address that initiated the sell order.',
          },
        ],
        name: 'TokensSold',
        type: 'event',
        outputs: [],
        description:
          'Event emitted when tokens have been succesfully redeemed.',
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
            indexed: false,
            internalType: 'uint256',
            name: '_amount',
            type: 'uint256',
            tags: ['decimals'],
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
            indexed: false,
            internalType: 'uint256',
            name: 'amountAdded',
            type: 'uint256',
            tags: ['decimals'],
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'newSupply',
            type: 'uint256',
            tags: ['decimals'],
          },
        ],
        name: 'VirtualCollateralAmountAdded',
        type: 'event',
        outputs: [],
        description:
          'Event emitted when virtual collateral amount has been added.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amountSubtracted',
            type: 'uint256',
            tags: ['decimals'],
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'newSupply',
            type: 'uint256',
            tags: ['decimals'],
          },
        ],
        name: 'VirtualCollateralAmountSubtracted',
        type: 'event',
        outputs: [],
        description:
          'Event emitted when virtual collateral amount has been subtracted.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint256',
            name: 'newSupply',
            type: 'uint256',
            tags: ['decimals'],
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'oldSupply',
            type: 'uint256',
            tags: ['decimals'],
          },
        ],
        name: 'VirtualCollateralSupplySet',
        type: 'event',
        outputs: [],
        description:
          'Event emitted when virtual collateral supply has been set.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amountAdded',
            type: 'uint256',
            tags: ['decimals'],
            description: 'The amount added to the virtual issuance supply.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'newSupply',
            type: 'uint256',
            tags: ['decimals'],
            description: 'The new virtual issuance supply.',
          },
        ],
        name: 'VirtualIssuanceAmountAdded',
        type: 'event',
        outputs: [],
        description:
          'Event emitted when virtual issuance amount has been added.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amountSubtracted',
            type: 'uint256',
            tags: ['decimals'],
            description:
              'The amount subtracted from the virtual issuance supply.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'newSupply',
            type: 'uint256',
            tags: ['decimals'],
            description: 'The new virtual issuance supply.',
          },
        ],
        name: 'VirtualIssuanceAmountSubtracted',
        type: 'event',
        outputs: [],
        description:
          'Event emitted when virtual issuance amount has ben subtracted.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint256',
            name: 'newSupply',
            type: 'uint256',
            tags: ['decimals'],
            description: 'The new virtual issuance supply.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'oldSupply',
            type: 'uint256',
            tags: ['decimals'],
            description: 'The old virtual issuance supply.',
          },
        ],
        name: 'VirtualIssuanceSupplySet',
        type: 'event',
        outputs: [],
        description: 'Event emitted when virtual issuance supply has been set.',
      },
      {
        inputs: [],
        name: 'CURVE_INTERACTION_ROLE',
        outputs: [{ internalType: 'bytes32', name: '_0', type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_depositAmount',
            type: 'uint256',
            tags: ['decimals', 'approval'],
            description: 'The amount of collateral token depoisited.',
          },
          {
            internalType: 'uint256',
            name: '_minAmountOut',
            type: 'uint256',
            tags: ['decimals:contract:indirect:getIssuanceToken'],
            description:
              'The minimum acceptable amount the user expects to receive from the transaction.',
          },
        ],
        name: 'buy',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          "Buy tokens for the sender's address. This function is subject to a transactional limit, determined by the deposit token's decimal precision and the underlying bonding curve algorithm.",
      },
      {
        inputs: [],
        name: 'buyFee',
        outputs: [{ internalType: 'uint256', name: '_0', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '_receiver',
            type: 'address',
            description: 'The address that will receive the bought tokens.',
          },
          {
            internalType: 'uint256',
            name: '_depositAmount',
            type: 'uint256',
            tags: ['decimals', 'approval'],
            description: 'The amount of collateral token depoisited.',
          },
          {
            internalType: 'uint256',
            name: '_minAmountOut',
            type: 'uint256',
            tags: ['decimals:contract:indirect:getIssuanceToken'],
            description:
              'The minimum acceptable amount the user expects to receive from the transaction.',
          },
        ],
        name: 'buyFor',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          "Buy tokens on behalf of a specified receiver address. This function is subject to a transactional limit, determined by the deposit token's decimal precision and the underlying bonding curve algorithm.",
      },
      {
        inputs: [],
        name: 'buyIsOpen',
        outputs: [{ internalType: 'bool', name: '_0', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_depositAmount',
            type: 'uint256',
            tags: ['decimals'],
            description: 'The amount of tokens deposited by the user.',
          },
        ],
        name: 'calculatePurchaseReturn',
        outputs: [
          {
            internalType: 'uint256',
            name: 'mintAmount',
            type: 'uint256',
            tags: ['decimals:contract:indirect:getIssuanceToken'],
            description:
              'The amount of new tokens that will be minted as a result of the deposit.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'Calculates the amount of tokens to be minted based on a given deposit amount.',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_depositAmount',
            type: 'uint256',
            tags: ['decimals:contract:indirect:getIssuanceToken'],
            description: 'The amount of tokens deposited by the user.',
          },
        ],
        name: 'calculateSaleReturn',
        outputs: [
          {
            internalType: 'uint256',
            name: 'redeemAmount',
            type: 'uint256',
            tags: ['decimals'],
            description:
              'The amount of collateral that will be redeemed as a result of the deposit.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'Calculates the amount of tokens to be redeemed based on a given deposit amount.',
      },
      {
        inputs: [],
        name: 'closeBuy',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Closes the buying functionality for the token.',
      },
      {
        inputs: [],
        name: 'closeSell',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Closes the selling functionality for the collateral.',
      },
      {
        inputs: [],
        name: 'formula',
        outputs: [
          {
            internalType: 'contract IBancorFormula',
            name: '_0',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getIssuanceToken',
        outputs: [{ internalType: 'address', name: '_0', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the address of the issuance token.',
      },
      {
        inputs: [],
        name: 'getReserveRatioForBuying',
        outputs: [
          {
            internalType: 'uint32',
            name: '_0',
            type: 'uint32',
            description: 'Reserve Ratio for buying.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'Returns reserve ratio set for buying, used in the {BancorFormula} contract.',
      },
      {
        inputs: [],
        name: 'getReserveRatioForSelling',
        outputs: [
          {
            internalType: 'uint32',
            name: '_0',
            type: 'uint32',
            description: 'Reserve Ratio for selling.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'Returns reserve ratio set for selling, used in the {BancorFormula} contract.',
      },
      {
        inputs: [],
        name: 'getStaticPriceForBuying',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            description: 'uint The static price for buying the issuance token.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'Calculates and returns the static price for buying the issuance token. The return value is formatted in PPM.',
      },
      {
        inputs: [],
        name: 'getStaticPriceForSelling',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            description:
              'uint The static price for selling the issuance token.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'Calculates and returns the static price for selling the issuance token. The return value is formatted in PPM.',
      },
      {
        inputs: [],
        name: 'getVirtualCollateralSupply',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            tags: ['decimals'],
            description: 'The current virtual collateral supply as a uint.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the current virtual collateral supply.',
      },
      {
        inputs: [],
        name: 'getVirtualIssuanceSupply',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            tags: ['decimals:contract:indirect:getIssuanceToken'],
            description: 'The current virtual issuance supply as a uint.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the current virtual issuance supply.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to grant.',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
            description: 'The target address to grant the role to.',
          },
        ],
        name: 'grantModuleRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Grants a module role to a target address.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to grant.',
          },
          {
            internalType: 'address[]',
            name: 'targets',
            type: 'address[]',
            description: 'The target addresses to grant the role to.',
          },
        ],
        name: 'grantModuleRoleBatched',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Grants a module role to multiple target addresses.',
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
            internalType: 'contract IOrchestrator_v1',
            name: 'orchestrator_',
            type: 'address',
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
              {
                internalType: 'uint256',
                name: 'patchVersion',
                type: 'uint256',
              },
              { internalType: 'string', name: 'url', type: 'string' },
              { internalType: 'string', name: 'title', type: 'string' },
            ],
            internalType: 'struct IModule_v1.Metadata',
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
            description: 'bool Is the given address the trusted forwarder.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Checks if the provided address is the trusted forwarder.',
      },
      {
        inputs: [],
        name: 'openBuy',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Opens the buying functionality for the token.',
      },
      {
        inputs: [],
        name: 'openSell',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Opens the selling functionality for the collateral.',
      },
      {
        inputs: [],
        name: 'orchestrator',
        outputs: [
          {
            internalType: 'contract IOrchestrator_v1',
            name: '_0',
            type: 'address',
            description: "The module's {Orchestrator_1}.",
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          "Returns the module's {Orchestrator_v1} interface, {IOrchestrator_v1}.",
      },
      {
        inputs: [],
        name: 'projectCollateralFeeCollected',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            tags: ['decimals'],
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'Accumulated project trading fees collected from deposits made by users when engaging with the bonding curve-based funding manager. Collected in collateral.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to revoke.',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
            description: 'The target address to revoke the role from.',
          },
        ],
        name: 'revokeModuleRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Revokes a module role from a target address.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to revoke.',
          },
          {
            internalType: 'address[]',
            name: 'targets',
            type: 'address[]',
            description: 'The target addresses to revoke the role from.',
          },
        ],
        name: 'revokeModuleRoleBatched',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Revokes a module role from multiple target addresses.',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_depositAmount',
            type: 'uint256',
            tags: ['decimals:contract:indirect:getIssuanceToken', 'approval'],
            description: 'The amount of issued token depoisited.',
          },
          {
            internalType: 'uint256',
            name: '_minAmountOut',
            type: 'uint256',
            tags: ['decimals'],
            description:
              'The minimum acceptable amount the user expects to receive from the transaction.',
          },
        ],
        name: 'sell',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          "Redeem collateral for the sender's address. This function is subject to a transactional limit, determined by the issuing token's decimal precision and the underlying bonding curve algorithm.",
      },
      {
        inputs: [],
        name: 'sellFee',
        outputs: [{ internalType: 'uint256', name: '_0', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'sellIsOpen',
        outputs: [{ internalType: 'bool', name: '_0', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '_receiver',
            type: 'address',
            description: 'The address that will receive the redeemed tokens.',
          },
          {
            internalType: 'uint256',
            name: '_depositAmount',
            type: 'uint256',
            description: 'The amount of issued token to deposited.',
          },
          {
            internalType: 'uint256',
            name: '_minAmountOut',
            type: 'uint256',
            description:
              'The minimum acceptable amount the user expects to receive from the transaction.',
          },
        ],
        name: 'sellTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          "Redeem tokens and direct the proceeds to a specified receiver address. This function is subject to a transactional limit, determined by the issuing token's decimal precision and the underlying bonding curve algorithm.",
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_fee',
            type: 'uint256',
            description: 'The fee in basis points.',
          },
        ],
        name: 'setBuyFee',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Sets the fee percentage for buying tokens, payed in collateral.',
      },
      {
        inputs: [
          {
            internalType: 'uint32',
            name: '_reserveRatio',
            type: 'uint32',
            description: 'The new reserve ratio for buying, expressed in PPM.',
          },
        ],
        name: 'setReserveRatioForBuying',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Set the reserve ratio used for issuing tokens on a bonding curve.',
      },
      {
        inputs: [
          {
            internalType: 'uint32',
            name: '_reserveRatio',
            type: 'uint32',
            description: 'The new reserve ratio for selling, expressed in PPM.',
          },
        ],
        name: 'setReserveRatioForSelling',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Set the reserve ratio used for redeeming tokens on a bonding curve.',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_fee',
            type: 'uint256',
            description: 'The fee in basis points.',
          },
        ],
        name: 'setSellFee',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Sets the fee percentage for selling collateral, payed in collateral.',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_virtualSupply',
            type: 'uint256',
            description:
              'The new value to set for the virtual collateral supply.',
          },
        ],
        name: 'setVirtualCollateralSupply',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Sets the virtual collateral supply to a new value.',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_virtualSupply',
            type: 'uint256',
            description:
              'The new value to set for the virtual issuance supply.',
          },
        ],
        name: 'setVirtualIssuanceSupply',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Sets the virtual issuance supply to a new value.',
      },
      {
        inputs: [
          { internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' },
        ],
        name: 'supportsInterface',
        outputs: [{ internalType: 'bool', name: '_0', type: 'bool' }],
        stateMutability: 'view',
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
        inputs: [],
        name: 'token',
        outputs: [
          {
            internalType: 'contract IERC20',
            name: '_0',
            type: 'address',
            description: 'The token.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the token.',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
            description: 'The address that will receive the tokens.',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            tags: ['decimals'],
            description: 'The amount of tokens to be transfered.',
          },
        ],
        name: 'transferOrchestratorToken',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Transfer a specified amount of Tokens to a designated receiver address.',
      },
      {
        inputs: [],
        name: 'trustedForwarder',
        outputs: [
          {
            internalType: 'address',
            name: '_0',
            type: 'address',
            description: 'address The trusted forwarder.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the trusted forwarder.',
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
          {
            internalType: 'uint256',
            name: '_2',
            type: 'uint256',
            description: "The module's patch version.",
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: "Returns the module's version.",
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '_receiver',
            type: 'address',
            description: 'The address that will receive the fee.',
          },
          {
            internalType: 'uint256',
            name: '_amount',
            type: 'uint256',
            tags: ['decimals'],
            description: 'The amount of fee to withdraw.',
          },
        ],
        name: 'withdrawProjectCollateralFee',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Withdraw project collateral fee to the receiver address.',
      },
    ],
  },
  {
    name: 'FM_PC_ExternalPrice_Redeeming_v1',
    description:
      'A funding manager implementation that uses external oracle price feeds for token operations. It integrates payment client functionality and supports token redemption through a bonding curve mechanism.',
    moduleType: 'fundingManager',
    deploymentInputs: {
      configData: [
        {
          name: 'oracleAddress_',
          type: 'address',
          description: 'The address of the oracle contract',
        },
        {
          name: 'projectTreasury_',
          type: 'address',
          description: 'The address of the project treasury',
        },
        {
          name: 'issuanceToken_',
          type: 'address',
          description: 'The token that will be issued',
        },
        {
          name: 'acceptedToken_',
          type: 'address',
          description: 'The token that will be accepted for purchases',
        },
        {
          name: 'buyFee_',
          type: 'uint256',
          description: 'The fee charged on buy operations in PPM',
        },
        {
          name: 'sellFee_',
          type: 'uint256',
          description: 'The fee charged on sell operations in PPM',
        },
        {
          name: 'maxSellFee_',
          type: 'uint256',
          description: 'The maximum allowed sell fee in PPM',
        },
        {
          name: 'maxBuyFee_',
          type: 'uint256',
          description: 'The maximum allowed buy fee in PPM',
        },
        {
          name: 'isDirectOperationsOnly_',
          type: 'bool',
          description: 'Whether only direct operations are allowed',
        },
      ],
    },
    abi: [
      {
        inputs: [{ internalType: 'address', name: 'target', type: 'address' }],
        name: 'AddressEmptyCode',
        type: 'error',
      },
      {
        inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
        name: 'AddressInsufficientBalance',
        type: 'error',
      },
      { inputs: [], name: 'FailedInnerCall', type: 'error' },
      { inputs: [], name: 'InvalidInitialization', type: 'error' },
      {
        inputs: [{ internalType: 'string', name: 'funcSig', type: 'string' }],
        name: 'Module_OrchestratorCallbackFailed',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__BondingCurveBase__BuyingFunctionaltiesClosed',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__BondingCurveBase__FeeAmountToHigh',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__BondingCurveBase__InsufficientOutputAmount',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__BondingCurveBase__InvalidDepositAmount',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__BondingCurveBase__InvalidFeePercentage',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__BondingCurveBase__InvalidMinAmountOut',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__BondingCurveBase__InvalidRecipient',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__BondingCurveBase__InvalidWithdrawAmount',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__BondingCurveBase__TradeAmountTooLow',
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
      {
        inputs: [],
        name: 'Module__ERC20PaymentClientBase__ArrayLengthMismatch',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__ERC20PaymentClientBase__CallerNotAuthorized',
        type: 'error',
      },
      {
        inputs: [{ internalType: 'address', name: 'token', type: 'address' }],
        name: 'Module__ERC20PaymentClientBase__InsufficientFunds',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__ERC20PaymentClientBase__InvalidAmount',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__ERC20PaymentClientBase__InvalidPaymentOrder',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__ERC20PaymentClientBase__InvalidRecipient',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__ERC20PaymentClientBase__InvalidToken',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__ERC20PaymentClientBase__Invalidend',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__ERC20PaymentClientBase__TokenTransferFailed',
        type: 'error',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'fee', type: 'uint256' },
          { internalType: 'uint256', name: 'maxFee', type: 'uint256' },
        ],
        name: 'Module__FM_PC_ExternalPrice_Redeeming_FeeExceedsMaximum',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__FM_PC_ExternalPrice_Redeeming_InvalidAmount',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__FM_PC_ExternalPrice_Redeeming_InvalidOracleInterface',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__FM_PC_ExternalPrice_Redeeming_InvalidProjectTreasury',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__FM_PC_ExternalPrice_Redeeming_QueueExecutionFailed',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__FM_PC_ExternalPrice_Redeeming_ThirdPartyOperationsDisabled',
        type: 'error',
      },
      { inputs: [], name: 'Module__InvalidAddress', type: 'error' },
      { inputs: [], name: 'Module__InvalidMetadata', type: 'error' },
      { inputs: [], name: 'Module__InvalidOrchestratorAddress', type: 'error' },
      { inputs: [], name: 'Module__OnlyCallableByOrchestrator', type: 'error' },
      {
        inputs: [],
        name: 'Module__OnlyCallableByPaymentClient',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__RedeemingBondingCurveBase__InsufficientCollateralForRedemption',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__RedeemingBondingCurveBase__SellingFunctionaltiesClosed',
        type: 'error',
      },
      { inputs: [], name: 'NotInitializing', type: 'error' },
      {
        inputs: [{ internalType: 'address', name: 'token', type: 'address' }],
        name: 'SafeERC20FailedOperation',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint256',
            name: 'newBuyFee',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'oldBuyFee',
            type: 'uint256',
          },
        ],
        name: 'BuyFeeUpdated',
        type: 'event',
        outputs: [],
        description: 'Event emitted when buy fee is updated.',
      },
      {
        anonymous: false,
        inputs: [],
        name: 'BuyingDisabled',
        type: 'event',
        outputs: [],
        description: 'Event emitted when buying is closed.',
      },
      {
        anonymous: false,
        inputs: [],
        name: 'BuyingEnabled',
        type: 'event',
        outputs: [],
        description: 'Event emitted when buying is opened.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint64',
            name: 'version',
            type: 'uint64',
          },
        ],
        name: 'Initialized',
        type: 'event',
        outputs: [],
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'issuanceToken',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint8',
            name: 'decimals',
            type: 'uint8',
          },
        ],
        name: 'IssuanceTokenSet',
        type: 'event',
        outputs: [],
        description: 'Event emitted when the issuance token is updated.',
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
              'The address of the {Orchestrator_v1} the module is linked to.',
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
              {
                internalType: 'uint256',
                name: 'patchVersion',
                type: 'uint256',
              },
              { internalType: 'string', name: 'url', type: 'string' },
              { internalType: 'string', name: 'title', type: 'string' },
            ],
            indexed: false,
            internalType: 'struct IModule_v1.Metadata',
            name: 'metadata',
            type: 'tuple',
            description: 'The metadata of the module.',
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
            name: 'token',
            type: 'address',
            description:
              "The token that serves as collateral token making up the curve's reserve.",
          },
          {
            indexed: false,
            internalType: 'uint8',
            name: 'decimals',
            type: 'uint8',
          },
        ],
        name: 'OrchestratorTokenSet',
        type: 'event',
        outputs: [],
        description: 'Event emitted when collateral token has been set.',
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
            description: 'The token in which to pay.',
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
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'ProjectCollateralFeeAdded',
        type: 'event',
        outputs: [],
        description: 'Event emitted when project collateral fee is added.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: 'receiver',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'ProjectCollateralFeeWithdrawn',
        type: 'event',
        outputs: [],
        description: 'Event emitted when project collateral fee is withdrawn.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'token',
            type: 'address',
            description: 'The token minted as protocol fee.',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'treasury',
            type: 'address',
            description:
              'The protocol treasury address receiving the token fee amount.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'feeAmount',
            type: 'uint256',
            description: 'The fee amount minted to the treasury.',
          },
        ],
        name: 'ProtocolFeeMinted',
        type: 'event',
        outputs: [],
        description:
          'Event emitted when protocol fee has been minted to the treasury.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'token',
            type: 'address',
            description: 'The token received as protocol fee.',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'treasury',
            type: 'address',
            description:
              'The protocol treasury address receiving the token fee amount.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'feeAmount',
            type: 'uint256',
            description: 'The fee amount transferred to the treasury.',
          },
        ],
        name: 'ProtocolFeeTransferred',
        type: 'event',
        outputs: [],
        description:
          'Event emitted when protocol fee has been transferred to the treasury.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint256',
            name: 'orderId',
            type: 'uint256',
            description: 'Order identifier',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'seller',
            type: 'address',
            description: 'Address selling tokens',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'receiver',
            type: 'address',
            description: 'Address who receives the redeemed tokens',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'sellAmount',
            type: 'uint256',
            description: 'Amount of tokens to sell',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'exchangeRate',
            type: 'uint256',
            description: 'Current exchange rate',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'collateralAmount',
            type: 'uint256',
            description: 'Amount of collateral',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'feePercentage',
            type: 'uint256',
            description: 'Fee percentage applied',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'feeAmount',
            type: 'uint256',
            description: 'Fee amount calculated',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'redemptionAmount',
            type: 'uint256',
            description: 'Final redemption amount',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'collateralToken',
            type: 'address',
            description: 'Address of collateral token',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'redemptionTime',
            type: 'uint256',
            description: 'Time of redemption',
          },
          {
            indexed: false,
            internalType:
              'enum IFM_PC_ExternalPrice_Redeeming_v1.RedemptionState',
            name: 'state',
            type: 'uint8',
            description: 'Initial state of the order',
          },
        ],
        name: 'RedemptionOrderCreated',
        type: 'event',
        outputs: [],
        description: 'Emitted when a new redemption order is created',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'depositor',
            type: 'address',
            description: 'The address depositing tokens',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            description: 'The amount deposited',
          },
        ],
        name: 'ReserveDeposited',
        type: 'event',
        outputs: [],
        description: 'Emitted when reserve tokens are deposited',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint256',
            name: 'newSellFee',
            type: 'uint256',
            description: 'The new sell fee.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'oldSellFee',
            type: 'uint256',
            description: 'The old sell fee.',
          },
        ],
        name: 'SellFeeUpdated',
        type: 'event',
        outputs: [],
        description: 'Event emitted when sell fee is updated.',
      },
      {
        anonymous: false,
        inputs: [],
        name: 'SellingDisabled',
        type: 'event',
        outputs: [],
        description: 'Event emitted when selling is closed.',
      },
      {
        anonymous: false,
        inputs: [],
        name: 'SellingEnabled',
        type: 'event',
        outputs: [],
        description: 'Event emitted when selling is opened.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint8',
            name: 'oldDecimals',
            type: 'uint8',
            description: 'The old decimals of the issuance token.',
          },
          {
            indexed: false,
            internalType: 'uint8',
            name: 'newDecimals',
            type: 'uint8',
            description: 'The new decimals of the issuance token.',
          },
        ],
        name: 'TokenDecimalsUpdated',
        type: 'event',
        outputs: [],
        description:
          'Event emitted when the decimals of the issuance token are updated.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'receiver',
            type: 'address',
            description: 'The address that will receive the issued tokens.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'depositAmount',
            type: 'uint256',
            description: 'The amount of collateral token deposited.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'receivedAmount',
            type: 'uint256',
            description: 'The amount of issued token received.',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'buyer',
            type: 'address',
            description: 'The address that initiated the buy order.',
          },
        ],
        name: 'TokensBought',
        type: 'event',
        outputs: [],
        description: 'Event emitted when tokens have been succesfully issued.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'receiver',
            type: 'address',
            description: 'The address that will receive the redeemed tokens.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'depositAmount',
            type: 'uint256',
            description: 'The amount of issued token deposited.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'receivedAmount',
            type: 'uint256',
            description: 'The amount of collateral token received.',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'seller',
            type: 'address',
            description: 'The address that initiated the sell order.',
          },
        ],
        name: 'TokensSold',
        type: 'event',
        outputs: [],
        description:
          'Event emitted when tokens have been succesfully redeemed.',
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
            indexed: false,
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
        inputs: [],
        name: 'QUEUE_MANAGER_ROLE',
        outputs: [{ internalType: 'bytes32', name: '_0', type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
        description: 'Role for payment queue.',
      },
      {
        inputs: [],
        name: 'WHITELIST_ROLE',
        outputs: [{ internalType: 'bytes32', name: '_0', type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
        description: 'Role for whitelisted addresses.',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'token',
            type: 'address',
            description: 'The token in which the payment was made.',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            tags: ['decimals'],
            description: 'amount of tokens that have been paid out.',
          },
        ],
        name: 'amountPaid',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Notifies the PaymentClient, that tokens have been paid out accordingly.',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'collateralAmount_',
            type: 'uint256',
            tags: ['decimals'],
            description: 'The amount of collateral to spend.',
          },
          {
            internalType: 'uint256',
            name: 'minAmountOut_',
            type: 'uint256',
            tags: ['decimals:extras:issuanceToken'],
          },
        ],
        name: 'buy',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: "Buy tokens for the sender's address.",
      },
      {
        inputs: [],
        name: 'buyFee',
        outputs: [{ internalType: 'uint256', name: '_0', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'receiver_',
            type: 'address',
            description: 'Address to receive tokens.',
          },
          {
            internalType: 'uint256',
            name: 'depositAmount_',
            type: 'uint256',
            tags: ['decimals'],
            description: 'The amount of collateral to spend.',
          },
          {
            internalType: 'uint256',
            name: 'minAmountOut_',
            type: 'uint256',
            tags: ['decimals:extras:issuanceToken'],
            description: 'The minimum amount of tokens to receive.',
          },
        ],
        name: 'buyFor',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Buy tokens on behalf of a specified receiver address.',
      },
      {
        inputs: [],
        name: 'buyIsOpen',
        outputs: [{ internalType: 'bool', name: '_0', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_depositAmount',
            type: 'uint256',
            tags: ['decimals'],
            description: 'The amount of tokens deposited by the user.',
          },
        ],
        name: 'calculatePurchaseReturn',
        outputs: [
          {
            internalType: 'uint256',
            name: 'mintAmount',
            type: 'uint256',
            tags: ['decimals:extras:issuanceToken'],
            description:
              'The amount of new tokens that will be minted as a result of the deposit.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'Calculates the amount of tokens to be minted based on a given deposit amount.',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_depositAmount',
            type: 'uint256',
            tags: ['decimals:extras:issuanceToken'],
            description: 'The amount of tokens deposited by the user.',
          },
        ],
        name: 'calculateSaleReturn',
        outputs: [
          {
            internalType: 'uint256',
            name: 'redeemAmount',
            type: 'uint256',
            tags: ['decimals'],
            description:
              'The amount of collateral that will be redeemed as a result of the deposit.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'Calculates the amount of tokens to be redeemed based on a given deposit amount.',
      },
      {
        inputs: [],
        name: 'closeBuy',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Closes the buying functionality for the token.',
      },
      {
        inputs: [],
        name: 'closeSell',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Closes the selling functionality for the collateral.',
      },
      {
        inputs: [],
        name: 'collectPaymentOrders',
        outputs: [
          {
            components: [
              { internalType: 'address', name: 'recipient', type: 'address' },
              {
                internalType: 'address',
                name: 'paymentToken',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
                tags: ['decimals'],
              },
              { internalType: 'uint256', name: 'start', type: 'uint256' },
              { internalType: 'uint256', name: 'cliff', type: 'uint256' },
              { internalType: 'uint256', name: 'end', type: 'uint256' },
            ],
            internalType: 'struct IERC20PaymentClientBase_v1.PaymentOrder[]',
            name: '_0',
            type: 'tuple[]',
            description: 'list of payment orders.',
          },
          {
            internalType: 'address[]',
            name: '_1',
            type: 'address[]',
            description: 'list of token addresses.',
          },
          {
            internalType: 'uint256[]',
            name: '_2',
            type: 'uint256[]',
            description: 'list of amounts.',
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
            name: 'amount_',
            type: 'uint256',
            tags: ['decimals'],
            description: 'The amount of collateral to deposit',
          },
        ],
        name: 'depositReserve',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Allows depositing collateral to provide reserves for redemptions',
      },
      {
        inputs: [],
        name: 'executeRedemptionQueue',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Executes the redemption queue',
      },
      {
        inputs: [],
        name: 'getBuyFee',
        outputs: [
          {
            internalType: 'uint256',
            name: 'buyFee_',
            type: 'uint256',
            description: 'The current buy fee.',
          },
        ],
        stateMutability: 'pure',
        type: 'function',
        description: 'Gets current buy fee.',
      },
      {
        inputs: [],
        name: 'getIssuanceToken',
        outputs: [{ internalType: 'address', name: '_0', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the address of the issuance token.',
      },
      {
        inputs: [],
        name: 'getMaxBuyFee',
        outputs: [
          {
            internalType: 'uint256',
            name: 'maxBuyFee_',
            type: 'uint256',
            description: 'The maximum fee percentage.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'Gets the maximum fee that can be charged for buy operations.',
      },
      {
        inputs: [],
        name: 'getMaxSellFee',
        outputs: [
          {
            internalType: 'uint256',
            name: 'maxSellFee_',
            type: 'uint256',
            description: 'The maximum fee percentage.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'Gets the maximum fee that can be charged for sell operations.',
      },
      {
        inputs: [],
        name: 'getNextOrderId',
        outputs: [
          {
            internalType: 'uint256',
            name: 'orderId_',
            type: 'uint256',
            description: 'The next order ID',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Gets the next available order ID',
      },
      {
        inputs: [],
        name: 'getOpenRedemptionAmount',
        outputs: [
          {
            internalType: 'uint256',
            name: 'amount_',
            type: 'uint256',
            tags: ['decimals'],
            description: 'The total amount of open redemptions',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Gets the current open collateral redemption amount',
      },
      {
        inputs: [],
        name: 'getOrderId',
        outputs: [
          {
            internalType: 'uint256',
            name: 'orderId_',
            type: 'uint256',
            description: 'The current order ID',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Gets the current order ID',
      },
      {
        inputs: [],
        name: 'getProjectTreasury',
        outputs: [
          {
            internalType: 'address',
            name: '_0',
            type: 'address',
            description: 'address_ The address of the project treasury',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Gets the project treasury address',
      },
      {
        inputs: [],
        name: 'getSellFee',
        outputs: [
          {
            internalType: 'uint256',
            name: 'sellFee_',
            type: 'uint256',
            description: 'The current sell fee.',
          },
        ],
        stateMutability: 'pure',
        type: 'function',
        description: 'Gets current sell fee.',
      },
      {
        inputs: [],
        name: 'getStaticPriceForBuying',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            tags: ['decimals:extras:issuanceToken'],
            description: 'uint The static price for buying the issuance token.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'Calculates and returns the static price for buying the issuance token.',
      },
      {
        inputs: [],
        name: 'getStaticPriceForSelling',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            tags: ['decimals'],
            description:
              'uint The static price for selling the issuance token.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'Calculates and returns the static price for selling the issuance token.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to grant.',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
            description: 'The target address to grant the role to.',
          },
        ],
        name: 'grantModuleRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Grants a module role to a target address.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to grant.',
          },
          {
            internalType: 'address[]',
            name: 'targets',
            type: 'address[]',
            description: 'The target addresses to grant the role to.',
          },
        ],
        name: 'grantModuleRoleBatched',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Grants a module role to multiple target addresses.',
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
            internalType: 'contract IOrchestrator_v1',
            name: 'orchestrator_',
            type: 'address',
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
              {
                internalType: 'uint256',
                name: 'patchVersion',
                type: 'uint256',
              },
              { internalType: 'string', name: 'url', type: 'string' },
              { internalType: 'string', name: 'title', type: 'string' },
            ],
            internalType: 'struct IModule_v1.Metadata',
            name: 'metadata_',
            type: 'tuple',
          },
          { internalType: 'bytes', name: 'configData_', type: 'bytes' },
        ],
        name: 'init',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: "The module's initializer function.",
      },
      {
        inputs: [],
        name: 'isDirectOperationsOnly',
        outputs: [
          {
            internalType: 'bool',
            name: '_0',
            type: 'bool',
            description:
              'isDirectOperationsOnly_ The current value of the flag.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Gets the direct operations only flag.',
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
            description: 'bool Is the given address the trusted forwarder.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Checks if the provided address is the trusted forwarder.',
      },
      {
        inputs: [],
        name: 'openBuy',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Opens the buying functionality for the token.',
      },
      {
        inputs: [],
        name: 'openSell',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Opens the selling functionality for the collateral.',
      },
      {
        inputs: [],
        name: 'orchestrator',
        outputs: [
          {
            internalType: 'contract IOrchestrator_v1',
            name: '_0',
            type: 'address',
            description: "The module's {Orchestrator_1}.",
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          "Returns the module's {Orchestrator_v1} interface, {IOrchestrator_v1}.",
      },
      {
        inputs: [{ internalType: 'address', name: '_token', type: 'address' }],
        name: 'outstandingTokenAmount',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            tags: ['decimals'],
            description: 'total amount of token to pay.',
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
                internalType: 'address',
                name: 'paymentToken',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
                tags: ['decimals'],
              },
              { internalType: 'uint256', name: 'start', type: 'uint256' },
              { internalType: 'uint256', name: 'cliff', type: 'uint256' },
              { internalType: 'uint256', name: 'end', type: 'uint256' },
            ],
            internalType: 'struct IERC20PaymentClientBase_v1.PaymentOrder[]',
            name: '_0',
            type: 'tuple[]',
            description: 'list of payment orders.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the list of outstanding payment orders.',
      },
      {
        inputs: [],
        name: 'projectCollateralFeeCollected',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            tags: ['decimals'],
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'Accumulated project trading fees collected from deposits made by users when engaging with the bonding curve-based funding manager. Collected in collateral.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to revoke.',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
            description: 'The target address to revoke the role from.',
          },
        ],
        name: 'revokeModuleRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Revokes a module role from a target address.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to revoke.',
          },
          {
            internalType: 'address[]',
            name: 'targets',
            type: 'address[]',
            description: 'The target addresses to revoke the role from.',
          },
        ],
        name: 'revokeModuleRoleBatched',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Revokes a module role from multiple target addresses.',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'depositAmount_',
            type: 'uint256',
            tags: ['decimals:extras:issuanceToken'],
            description: 'Amount of tokens to sell.',
          },
          {
            internalType: 'uint256',
            name: 'minAmountOut_',
            type: 'uint256',
            tags: ['decimals'],
            description: 'Minimum collateral to receive.',
          },
        ],
        name: 'sell',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: "Redeem collateral for the sender's address.",
      },
      {
        inputs: [],
        name: 'sellFee',
        outputs: [{ internalType: 'uint256', name: '_0', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'sellIsOpen',
        outputs: [{ internalType: 'bool', name: '_0', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'receiver_',
            type: 'address',
            description: 'Address to receive tokens.',
          },
          {
            internalType: 'uint256',
            name: 'depositAmount_',
            type: 'uint256',
            tags: ['decimals:extras:issuanceToken'],
            description: 'Amount of tokens to sell.',
          },
          {
            internalType: 'uint256',
            name: 'minAmountOut_',
            type: 'uint256',
            tags: ['decimals'],
            description: 'Minimum collateral to receive.',
          },
        ],
        name: 'sellTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Redeem tokens and directs the proceeds to a specified receiver address.',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'fee_',
            type: 'uint256',
            description: 'New fee amount.',
          },
        ],
        name: 'setBuyFee',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Sets fee for buy operations.',
      },
      {
        inputs: [
          {
            internalType: 'bool',
            name: 'isDirectOperationsOnly_',
            type: 'bool',
            description: 'The new value for the flag.',
          },
        ],
        name: 'setIsDirectOperationsOnly',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Sets the direct operations only flag.',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'projectTreasury_',
            type: 'address',
          },
        ],
        name: 'setProjectTreasury',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Sets the project treasury address',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'fee_',
            type: 'uint256',
            description: 'New fee amount.',
          },
        ],
        name: 'setSellFee',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Sets fee for sell operations.',
      },
      {
        inputs: [
          {
            internalType: 'bytes4',
            name: 'interfaceId_',
            type: 'bytes4',
            description: 'The interface identifier to check support for.',
          },
        ],
        name: 'supportsInterface',
        outputs: [
          {
            internalType: 'bool',
            name: '_0',
            type: 'bool',
            description: 'True if the interface is supported.',
          },
        ],
        stateMutability: 'view',
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
        inputs: [],
        name: 'token',
        outputs: [
          {
            internalType: 'contract IERC20',
            name: '_0',
            type: 'address',
            description: 'token_ The token address.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the token.',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'to_',
            type: 'address',
            description: 'The recipient address.',
          },
          {
            internalType: 'uint256',
            name: 'amount_',
            type: 'uint256',
            tags: ['decimals'],
            description: 'The amount to transfer.',
          },
        ],
        name: 'transferOrchestratorToken',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Transfer a specified amount of Tokens to a designated receiver address.',
      },
      {
        inputs: [],
        name: 'trustedForwarder',
        outputs: [
          {
            internalType: 'address',
            name: '_0',
            type: 'address',
            description: 'address The trusted forwarder.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the trusted forwarder.',
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
          {
            internalType: 'uint256',
            name: '_2',
            type: 'uint256',
            description: "The module's patch version.",
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: "Returns the module's version.",
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '_receiver',
            type: 'address',
            description: 'The address that will receive the fee.',
          },
          {
            internalType: 'uint256',
            name: '_amount',
            type: 'uint256',
            tags: ['decimals'],
            description: 'The amount of fee to withdraw.',
          },
        ],
        name: 'withdrawProjectCollateralFee',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Withdraw project collateral fee to the receiver address.',
      },
    ],
  },
  {
    name: 'FM_DepositVault_v1',
    description:
      'This contract allows users to deposit tokens to fund the workflow.',
    moduleType: 'fundingManager',
    deploymentInputs: {
      configData: [
        {
          name: 'orchestratorTokenAddress',
          type: 'address',
          description: 'The distribution token of the funding manager',
        },
      ],
    },
    abi: [
      {
        inputs: [{ internalType: 'address', name: 'target', type: 'address' }],
        name: 'AddressEmptyCode',
        type: 'error',
      },
      {
        inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
        name: 'AddressInsufficientBalance',
        type: 'error',
      },
      { inputs: [], name: 'FailedInnerCall', type: 'error' },
      { inputs: [], name: 'InvalidInitialization', type: 'error' },
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
      { inputs: [], name: 'Module__InvalidAddress', type: 'error' },
      { inputs: [], name: 'Module__InvalidMetadata', type: 'error' },
      { inputs: [], name: 'Module__InvalidOrchestratorAddress', type: 'error' },
      { inputs: [], name: 'Module__OnlyCallableByOrchestrator', type: 'error' },
      {
        inputs: [],
        name: 'Module__OnlyCallableByPaymentClient',
        type: 'error',
      },
      { inputs: [], name: 'NotInitializing', type: 'error' },
      {
        inputs: [{ internalType: 'address', name: 'token', type: 'address' }],
        name: 'SafeERC20FailedOperation',
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
            description: 'The address depositing tokens.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: '_amount',
            type: 'uint256',
            tags: ['decimals'],
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
            indexed: false,
            internalType: 'uint64',
            name: 'version',
            type: 'uint64',
          },
        ],
        name: 'Initialized',
        type: 'event',
        outputs: [],
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
              'The address of the {Orchestrator_v1} the module is linked to.',
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
              {
                internalType: 'uint256',
                name: 'patchVersion',
                type: 'uint256',
              },
              { internalType: 'string', name: 'url', type: 'string' },
              { internalType: 'string', name: 'title', type: 'string' },
            ],
            indexed: false,
            internalType: 'struct IModule_v1.Metadata',
            name: 'metadata',
            type: 'tuple',
            description: 'The metadata of the module.',
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
            name: 'token',
            type: 'address',
            description:
              "The token that serves as collateral token making up the curve's reserve.",
          },
          {
            indexed: false,
            internalType: 'uint8',
            name: 'decimals',
            type: 'uint8',
          },
        ],
        name: 'OrchestratorTokenSet',
        type: 'event',
        outputs: [],
        description: 'Event emitted when collateral token has been set.',
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
            indexed: false,
            internalType: 'uint256',
            name: '_amount',
            type: 'uint256',
            tags: ['decimals'],
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
        inputs: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            tags: ['decimals', 'approval'],
            description: 'The number of tokens to deposit.',
          },
        ],
        name: 'deposit',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          "Deposits a specified amount of tokens into the contract from the sender's account.",
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to grant.',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
            description: 'The target address to grant the role to.',
          },
        ],
        name: 'grantModuleRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Grants a module role to a target address.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to grant.',
          },
          {
            internalType: 'address[]',
            name: 'targets',
            type: 'address[]',
            description: 'The target addresses to grant the role to.',
          },
        ],
        name: 'grantModuleRoleBatched',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Grants a module role to multiple target addresses.',
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
            internalType: 'contract IOrchestrator_v1',
            name: 'orchestrator_',
            type: 'address',
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
              {
                internalType: 'uint256',
                name: 'patchVersion',
                type: 'uint256',
              },
              { internalType: 'string', name: 'url', type: 'string' },
              { internalType: 'string', name: 'title', type: 'string' },
            ],
            internalType: 'struct IModule_v1.Metadata',
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
            description: 'bool Is the given address the trusted forwarder.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Checks if the provided address is the trusted forwarder.',
      },
      {
        inputs: [],
        name: 'orchestrator',
        outputs: [
          {
            internalType: 'contract IOrchestrator_v1',
            name: '_0',
            type: 'address',
            description: "The module's {Orchestrator_1}.",
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          "Returns the module's {Orchestrator_v1} interface, {IOrchestrator_v1}.",
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to revoke.',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
            description: 'The target address to revoke the role from.',
          },
        ],
        name: 'revokeModuleRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Revokes a module role from a target address.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to revoke.',
          },
          {
            internalType: 'address[]',
            name: 'targets',
            type: 'address[]',
            description: 'The target addresses to revoke the role from.',
          },
        ],
        name: 'revokeModuleRoleBatched',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Revokes a module role from multiple target addresses.',
      },
      {
        inputs: [
          { internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' },
        ],
        name: 'supportsInterface',
        outputs: [{ internalType: 'bool', name: '_0', type: 'bool' }],
        stateMutability: 'view',
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
        inputs: [],
        name: 'token',
        outputs: [
          {
            internalType: 'contract IERC20',
            name: '_0',
            type: 'address',
            description: 'The token.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the token.',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
            description: 'The address that will receive the tokens.',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            tags: ['decimals'],
            description: 'The amount of tokens to be transfered.',
          },
        ],
        name: 'transferOrchestratorToken',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Transfer a specified amount of Tokens to a designated receiver address.',
      },
      {
        inputs: [],
        name: 'trustedForwarder',
        outputs: [
          {
            internalType: 'address',
            name: '_0',
            type: 'address',
            description: 'address The trusted forwarder.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the trusted forwarder.',
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
          {
            internalType: 'uint256',
            name: '_2',
            type: 'uint256',
            description: "The module's patch version.",
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: "Returns the module's version.",
      },
    ],
  },
  {
    name: 'FM_BC_Bancor_Redeeming_VirtualSupply_v1',
    description:
      "This contract enables the issuance and redeeming of tokens on a bonding curve, using a virtual supply for both the issuance and the collateral as input. It integrates Aragon's {BancorFormula} to manage the calculations for token issuance and redemption rates based on specified reserve ratios.",
    moduleType: 'fundingManager',
    deploymentInputs: {
      configData: [
        {
          name: 'issuanceToken',
          type: 'address',
          description: 'The address of the token that will be issued',
        },
        {
          components: [
            {
              name: 'formula',
              type: 'address',
              description:
                'The formula contract used to calculate the issucance and redemption rate',
            },
            {
              name: 'reserveRatioForBuying',
              type: 'uint32',
              description:
                'The reserve ratio, expressed in PPM, used for issuance on the bonding curve',
            },
            {
              name: 'reserveRatioForSelling',
              type: 'uint32',
              description:
                'The reserve ratio, expressed in PPM, used for redeeming on the bonding curve',
            },
            {
              name: 'buyFee',
              type: 'uint256',
              description: 'The buy fee expressed in base points',
            },
            {
              name: 'sellFee',
              type: 'uint256',
              description: 'The sell fee expressed in base points',
            },
            {
              name: 'buyIsOpen',
              type: 'bool',
              description:
                'The indicator used for enabling/disabling the buying functionalities on deployment',
            },
            {
              name: 'sellIsOpen',
              type: 'bool',
              description:
                'The indicator used for enabling/disabling the selling functionalties on deployment',
            },
            {
              name: 'initialIssuanceSupply',
              type: 'uint256',
              description: 'The initial virtual issuance token supply',
              tags: ['decimals:params:indirect:issuanceToken'],
            },
            {
              name: 'initialCollateralSupply',
              type: 'uint256',
              description: 'The initial virtual collateral token supply',
              tags: ['decimals:params:indirect:collateralToken'],
            },
          ],
          name: 'bondingCurveParams',
          type: 'tuple',
        },
        {
          name: 'collateralToken',
          type: 'address',
          description:
            'The address of the token that will be deposited to the funding manager',
        },
      ],
    },
    abi: [
      {
        inputs: [{ internalType: 'address', name: 'target', type: 'address' }],
        name: 'AddressEmptyCode',
        type: 'error',
      },
      {
        inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
        name: 'AddressInsufficientBalance',
        type: 'error',
      },
      { inputs: [], name: 'FailedInnerCall', type: 'error' },
      { inputs: [], name: 'InvalidInitialization', type: 'error' },
      {
        inputs: [{ internalType: 'string', name: 'funcSig', type: 'string' }],
        name: 'Module_OrchestratorCallbackFailed',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__BondingCurveBase__BuyingFunctionaltiesClosed',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__BondingCurveBase__FeeAmountToHigh',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__BondingCurveBase__InsufficientOutputAmount',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__BondingCurveBase__InvalidDepositAmount',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__BondingCurveBase__InvalidFeePercentage',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__BondingCurveBase__InvalidMinAmountOut',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__BondingCurveBase__InvalidRecipient',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__BondingCurveBase__InvalidWithdrawAmount',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__BondingCurveBase__TradeAmountTooLow',
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
      {
        inputs: [],
        name: 'Module__FM_BC_Bancor_Redeeming_VirtualSupply__CurveInteractionsMustBeClosed',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__FM_BC_Bancor_Redeeming_VirtualSupply__InvalidBancorFormula',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__FM_BC_Bancor_Redeeming_VirtualSupply__InvalidOrchestratorTokenWithdrawAmount',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__FM_BC_Bancor_Redeeming_VirtualSupply__InvalidReserveRatio',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__FM_BC_Bancor_Redeeming_VirtualSupply__InvalidTokenDecimal',
        type: 'error',
      },
      { inputs: [], name: 'Module__InvalidAddress', type: 'error' },
      { inputs: [], name: 'Module__InvalidMetadata', type: 'error' },
      { inputs: [], name: 'Module__InvalidOrchestratorAddress', type: 'error' },
      { inputs: [], name: 'Module__OnlyCallableByOrchestrator', type: 'error' },
      {
        inputs: [],
        name: 'Module__OnlyCallableByPaymentClient',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__RedeemingBondingCurveBase__InsufficientCollateralForRedemption',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__RedeemingBondingCurveBase__SellingFunctionaltiesClosed',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__VirtualCollateralSupplyBase__AddResultsInOverflow',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__VirtualCollateralSupplyBase__SubtractResultsInUnderflow',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__VirtualCollateralSupplyBase__VirtualSupplyCannotBeZero',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__VirtualIssuanceSupplyBase__AddResultsInOverflow',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__VirtualIssuanceSupplyBase__SubtractResultsInUnderflow',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__VirtualIssuanceSupplyBase__VirtualSupplyCannotBeZero',
        type: 'error',
      },
      { inputs: [], name: 'NotInitializing', type: 'error' },
      {
        inputs: [{ internalType: 'address', name: 'token', type: 'address' }],
        name: 'SafeERC20FailedOperation',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint256',
            name: 'newBuyFee',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'oldBuyFee',
            type: 'uint256',
          },
        ],
        name: 'BuyFeeUpdated',
        type: 'event',
        outputs: [],
        description: 'Event emitted when buy fee is updated.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint32',
            name: 'newBuyReserveRatio',
            type: 'uint32',
            description: 'The new reserve ratio for buying.',
          },
          {
            indexed: false,
            internalType: 'uint32',
            name: 'oldBuyReserveRatio',
            type: 'uint32',
            description: 'The old reserve ratio for buying.',
          },
        ],
        name: 'BuyReserveRatioSet',
        type: 'event',
        outputs: [],
        description:
          'Event emitted when the reserve ratio for buying is updated.',
      },
      {
        anonymous: false,
        inputs: [],
        name: 'BuyingDisabled',
        type: 'event',
        outputs: [],
        description: 'Event emitted when buying is closed.',
      },
      {
        anonymous: false,
        inputs: [],
        name: 'BuyingEnabled',
        type: 'event',
        outputs: [],
        description: 'Event emitted when buying is opened.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint64',
            name: 'version',
            type: 'uint64',
          },
        ],
        name: 'Initialized',
        type: 'event',
        outputs: [],
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'issuanceToken',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint8',
            name: 'decimals',
            type: 'uint8',
          },
        ],
        name: 'IssuanceTokenSet',
        type: 'event',
        outputs: [],
        description: 'Event emitted when the issuance token is updated.',
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
              'The address of the {Orchestrator_v1} the module is linked to.',
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
              {
                internalType: 'uint256',
                name: 'patchVersion',
                type: 'uint256',
              },
              { internalType: 'string', name: 'url', type: 'string' },
              { internalType: 'string', name: 'title', type: 'string' },
            ],
            indexed: false,
            internalType: 'struct IModule_v1.Metadata',
            name: 'metadata',
            type: 'tuple',
            description: 'The metadata of the module.',
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
            name: 'token',
            type: 'address',
            description:
              "The token that serves as collateral token making up the curve's reserve.",
          },
          {
            indexed: false,
            internalType: 'uint8',
            name: 'decimals',
            type: 'uint8',
          },
        ],
        name: 'OrchestratorTokenSet',
        type: 'event',
        outputs: [],
        description: 'Event emitted when collateral token has been set.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: 'receiver',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            tags: ['decimals'],
          },
        ],
        name: 'ProjectCollateralFeeWithdrawn',
        type: 'event',
        outputs: [],
        description: 'Event emitted when project collateral fee is withdrawn.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'token',
            type: 'address',
            description: 'The token minted as protocol fee.',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'treasury',
            type: 'address',
            description:
              'The protocol treasury address receiving the token fee amount.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'feeAmount',
            type: 'uint256',
            tags: ['decimals'],
            description: 'The fee amount minted to the treasury.',
          },
        ],
        name: 'ProtocolFeeMinted',
        type: 'event',
        outputs: [],
        description:
          'Event emitted when protocol fee has been minted to the treasury.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'token',
            type: 'address',
            description: 'The token received as protocol fee.',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'treasury',
            type: 'address',
            description:
              'The protocol treasury address receiving the token fee amount.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'feeAmount',
            type: 'uint256',
            tags: ['decimals'],
            description: 'The fee amount transferred to the treasury.',
          },
        ],
        name: 'ProtocolFeeTransferred',
        type: 'event',
        outputs: [],
        description:
          'Event emitted when protocol fee has been transferred to the treasury.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint256',
            name: 'newSellFee',
            type: 'uint256',
            description: 'The new sell fee.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'oldSellFee',
            type: 'uint256',
            description: 'The old sell fee.',
          },
        ],
        name: 'SellFeeUpdated',
        type: 'event',
        outputs: [],
        description: 'Event emitted when sell fee is updated.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint32',
            name: 'newSellReserveRatio',
            type: 'uint32',
            description: 'The new reserve ratio for selling.',
          },
          {
            indexed: false,
            internalType: 'uint32',
            name: 'oldSellReserveRatio',
            type: 'uint32',
            description: 'The old reserve ratio for selling.',
          },
        ],
        name: 'SellReserveRatioSet',
        type: 'event',
        outputs: [],
        description:
          'Event emitted when the reserve ratio for selling is updated.',
      },
      {
        anonymous: false,
        inputs: [],
        name: 'SellingDisabled',
        type: 'event',
        outputs: [],
        description: 'Event emitted when selling is closed.',
      },
      {
        anonymous: false,
        inputs: [],
        name: 'SellingEnabled',
        type: 'event',
        outputs: [],
        description: 'Event emitted when selling is opened.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint8',
            name: 'oldDecimals',
            type: 'uint8',
            description: 'The old decimals of the issuance token.',
          },
          {
            indexed: false,
            internalType: 'uint8',
            name: 'newDecimals',
            type: 'uint8',
            description: 'The new decimals of the issuance token.',
          },
        ],
        name: 'TokenDecimalsUpdated',
        type: 'event',
        outputs: [],
        description:
          'Event emitted when the decimals of the issuance token are updated.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'receiver',
            type: 'address',
            description: 'The address that will receive the issued tokens.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'depositAmount',
            type: 'uint256',
            tags: ['decimals'],
            description: 'The amount of collateral token deposited.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'receivedAmount',
            type: 'uint256',
            tags: ['decimals'],
            description: 'The amount of issued token received.',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'buyer',
            type: 'address',
            description: 'The address that initiated the buy order.',
          },
        ],
        name: 'TokensBought',
        type: 'event',
        outputs: [],
        description: 'Event emitted when tokens have been succesfully issued.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'receiver',
            type: 'address',
            description: 'The address that will receive the redeemed tokens.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'depositAmount',
            type: 'uint256',
            tags: ['decimals'],
            description: 'The amount of issued token deposited.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'receivedAmount',
            type: 'uint256',
            tags: ['decimals'],
            description: 'The amount of collateral token received.',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'seller',
            type: 'address',
            description: 'The address that initiated the sell order.',
          },
        ],
        name: 'TokensSold',
        type: 'event',
        outputs: [],
        description:
          'Event emitted when tokens have been succesfully redeemed.',
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
            indexed: false,
            internalType: 'uint256',
            name: '_amount',
            type: 'uint256',
            tags: ['decimals'],
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
            indexed: false,
            internalType: 'uint256',
            name: 'amountAdded',
            type: 'uint256',
            tags: ['decimals'],
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'newSupply',
            type: 'uint256',
            tags: ['decimals'],
          },
        ],
        name: 'VirtualCollateralAmountAdded',
        type: 'event',
        outputs: [],
        description:
          'Event emitted when virtual collateral amount has been added.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amountSubtracted',
            type: 'uint256',
            tags: ['decimals'],
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'newSupply',
            type: 'uint256',
            tags: ['decimals'],
          },
        ],
        name: 'VirtualCollateralAmountSubtracted',
        type: 'event',
        outputs: [],
        description:
          'Event emitted when virtual collateral amount has been subtracted.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint256',
            name: 'newSupply',
            type: 'uint256',
            tags: ['decimals'],
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'oldSupply',
            type: 'uint256',
            tags: ['decimals'],
          },
        ],
        name: 'VirtualCollateralSupplySet',
        type: 'event',
        outputs: [],
        description:
          'Event emitted when virtual collateral supply has been set.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amountAdded',
            type: 'uint256',
            tags: ['decimals'],
            description: 'The amount added to the virtual issuance supply.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'newSupply',
            type: 'uint256',
            tags: ['decimals'],
            description: 'The new virtual issuance supply.',
          },
        ],
        name: 'VirtualIssuanceAmountAdded',
        type: 'event',
        outputs: [],
        description:
          'Event emitted when virtual issuance amount has been added.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amountSubtracted',
            type: 'uint256',
            tags: ['decimals'],
            description:
              'The amount subtracted from the virtual issuance supply.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'newSupply',
            type: 'uint256',
            tags: ['decimals'],
            description: 'The new virtual issuance supply.',
          },
        ],
        name: 'VirtualIssuanceAmountSubtracted',
        type: 'event',
        outputs: [],
        description:
          'Event emitted when virtual issuance amount has ben subtracted.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint256',
            name: 'newSupply',
            type: 'uint256',
            tags: ['decimals'],
            description: 'The new virtual issuance supply.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'oldSupply',
            type: 'uint256',
            tags: ['decimals'],
            description: 'The old virtual issuance supply.',
          },
        ],
        name: 'VirtualIssuanceSupplySet',
        type: 'event',
        outputs: [],
        description: 'Event emitted when virtual issuance supply has been set.',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_depositAmount',
            type: 'uint256',
            tags: ['decimals', 'approval'],
            description: 'The amount of collateral token depoisited.',
          },
          {
            internalType: 'uint256',
            name: '_minAmountOut',
            type: 'uint256',
            tags: ['decimals:contract:indirect:getIssuanceToken'],
            description:
              'The minimum acceptable amount the user expects to receive from the transaction.',
          },
        ],
        name: 'buy',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          "Buy tokens for the sender's address. This function is subject to a transactional limit, determined by the deposit token's decimal precision and the underlying bonding curve algorithm.",
      },
      {
        inputs: [],
        name: 'buyFee',
        outputs: [{ internalType: 'uint256', name: '_0', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '_receiver',
            type: 'address',
            description: 'The address that will receive the bought tokens.',
          },
          {
            internalType: 'uint256',
            name: '_depositAmount',
            type: 'uint256',
            tags: ['decimals', 'approval'],
            description: 'The amount of collateral token depoisited.',
          },
          {
            internalType: 'uint256',
            name: '_minAmountOut',
            type: 'uint256',
            tags: ['decimals:contract:indirect:getIssuanceToken'],
            description:
              'The minimum acceptable amount the user expects to receive from the transaction.',
          },
        ],
        name: 'buyFor',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          "Buy tokens on behalf of a specified receiver address. This function is subject to a transactional limit, determined by the deposit token's decimal precision and the underlying bonding curve algorithm.",
      },
      {
        inputs: [],
        name: 'buyIsOpen',
        outputs: [{ internalType: 'bool', name: '_0', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_depositAmount',
            type: 'uint256',
            tags: ['decimals'],
            description: 'The amount of tokens deposited by the user.',
          },
        ],
        name: 'calculatePurchaseReturn',
        outputs: [
          {
            internalType: 'uint256',
            name: 'mintAmount',
            type: 'uint256',
            tags: ['decimals:contract:indirect:getIssuanceToken'],
            description:
              'The amount of new tokens that will be minted as a result of the deposit.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'Calculates the amount of tokens to be minted based on a given deposit amount.',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_depositAmount',
            type: 'uint256',
            tags: ['decimals:contract:indirect:getIssuanceToken'],
            description: 'The amount of tokens deposited by the user.',
          },
        ],
        name: 'calculateSaleReturn',
        outputs: [
          {
            internalType: 'uint256',
            name: 'redeemAmount',
            type: 'uint256',
            tags: ['decimals'],
            description:
              'The amount of collateral that will be redeemed as a result of the deposit.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'Calculates the amount of tokens to be redeemed based on a given deposit amount.',
      },
      {
        inputs: [],
        name: 'closeBuy',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Closes the buying functionality for the token.',
      },
      {
        inputs: [],
        name: 'closeSell',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Closes the selling functionality for the collateral.',
      },
      {
        inputs: [],
        name: 'formula',
        outputs: [
          {
            internalType: 'contract IBancorFormula',
            name: '_0',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getIssuanceToken',
        outputs: [{ internalType: 'address', name: '_0', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the address of the issuance token.',
      },
      {
        inputs: [],
        name: 'getReserveRatioForBuying',
        outputs: [
          {
            internalType: 'uint32',
            name: '_0',
            type: 'uint32',
            description: 'Reserve Ratio for buying.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'Returns reserve ratio set for buying, used in the {BancorFormula} contract.',
      },
      {
        inputs: [],
        name: 'getReserveRatioForSelling',
        outputs: [
          {
            internalType: 'uint32',
            name: '_0',
            type: 'uint32',
            description: 'Reserve Ratio for selling.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'Returns reserve ratio set for selling, used in the {BancorFormula} contract.',
      },
      {
        inputs: [],
        name: 'getStaticPriceForBuying',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            description: 'uint The static price for buying the issuance token.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'Calculates and returns the static price for buying the issuance token. The return value is formatted in PPM.',
      },
      {
        inputs: [],
        name: 'getStaticPriceForSelling',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            description:
              'uint The static price for selling the issuance token.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'Calculates and returns the static price for selling the issuance token. The return value is formatted in PPM.',
      },
      {
        inputs: [],
        name: 'getVirtualCollateralSupply',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            tags: ['decimals'],
            description: 'The current virtual collateral supply as a uint.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the current virtual collateral supply.',
      },
      {
        inputs: [],
        name: 'getVirtualIssuanceSupply',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            tags: ['decimals:contract:indirect:getIssuanceToken'],
            description: 'The current virtual issuance supply as a uint.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the current virtual issuance supply.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to grant.',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
            description: 'The target address to grant the role to.',
          },
        ],
        name: 'grantModuleRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Grants a module role to a target address.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to grant.',
          },
          {
            internalType: 'address[]',
            name: 'targets',
            type: 'address[]',
            description: 'The target addresses to grant the role to.',
          },
        ],
        name: 'grantModuleRoleBatched',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Grants a module role to multiple target addresses.',
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
            internalType: 'contract IOrchestrator_v1',
            name: 'orchestrator_',
            type: 'address',
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
              {
                internalType: 'uint256',
                name: 'patchVersion',
                type: 'uint256',
              },
              { internalType: 'string', name: 'url', type: 'string' },
              { internalType: 'string', name: 'title', type: 'string' },
            ],
            internalType: 'struct IModule_v1.Metadata',
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
            description: 'bool Is the given address the trusted forwarder.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Checks if the provided address is the trusted forwarder.',
      },
      {
        inputs: [],
        name: 'openBuy',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Opens the buying functionality for the token.',
      },
      {
        inputs: [],
        name: 'openSell',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Opens the selling functionality for the collateral.',
      },
      {
        inputs: [],
        name: 'orchestrator',
        outputs: [
          {
            internalType: 'contract IOrchestrator_v1',
            name: '_0',
            type: 'address',
            description: "The module's {Orchestrator_1}.",
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          "Returns the module's {Orchestrator_v1} interface, {IOrchestrator_v1}.",
      },
      {
        inputs: [],
        name: 'projectCollateralFeeCollected',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            tags: ['decimals'],
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'Accumulated project trading fees collected from deposits made by users when engaging with the bonding curve-based funding manager. Collected in collateral.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to revoke.',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
            description: 'The target address to revoke the role from.',
          },
        ],
        name: 'revokeModuleRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Revokes a module role from a target address.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to revoke.',
          },
          {
            internalType: 'address[]',
            name: 'targets',
            type: 'address[]',
            description: 'The target addresses to revoke the role from.',
          },
        ],
        name: 'revokeModuleRoleBatched',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Revokes a module role from multiple target addresses.',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_depositAmount',
            type: 'uint256',
            tags: ['decimals:contract:indirect:getIssuanceToken', 'approval'],
            description: 'The amount of issued token depoisited.',
          },
          {
            internalType: 'uint256',
            name: '_minAmountOut',
            type: 'uint256',
            tags: ['decimals'],
            description:
              'The minimum acceptable amount the user expects to receive from the transaction.',
          },
        ],
        name: 'sell',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          "Redeem collateral for the sender's address. This function is subject to a transactional limit, determined by the issuing token's decimal precision and the underlying bonding curve algorithm.",
      },
      {
        inputs: [],
        name: 'sellFee',
        outputs: [{ internalType: 'uint256', name: '_0', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'sellIsOpen',
        outputs: [{ internalType: 'bool', name: '_0', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '_receiver',
            type: 'address',
            description: 'The address that will receive the redeemed tokens.',
          },
          {
            internalType: 'uint256',
            name: '_depositAmount',
            type: 'uint256',
            description: 'The amount of issued token to deposited.',
          },
          {
            internalType: 'uint256',
            name: '_minAmountOut',
            type: 'uint256',
            description:
              'The minimum acceptable amount the user expects to receive from the transaction.',
          },
        ],
        name: 'sellTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          "Redeem tokens and direct the proceeds to a specified receiver address. This function is subject to a transactional limit, determined by the issuing token's decimal precision and the underlying bonding curve algorithm.",
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_fee',
            type: 'uint256',
            description: 'The fee in basis points.',
          },
        ],
        name: 'setBuyFee',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Sets the fee percentage for buying tokens, payed in collateral.',
      },
      {
        inputs: [
          {
            internalType: 'uint32',
            name: '_reserveRatio',
            type: 'uint32',
            description: 'The new reserve ratio for buying, expressed in PPM.',
          },
        ],
        name: 'setReserveRatioForBuying',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Set the reserve ratio used for issuing tokens on a bonding curve.',
      },
      {
        inputs: [
          {
            internalType: 'uint32',
            name: '_reserveRatio',
            type: 'uint32',
            description: 'The new reserve ratio for selling, expressed in PPM.',
          },
        ],
        name: 'setReserveRatioForSelling',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Set the reserve ratio used for redeeming tokens on a bonding curve.',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_fee',
            type: 'uint256',
            description: 'The fee in basis points.',
          },
        ],
        name: 'setSellFee',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Sets the fee percentage for selling collateral, payed in collateral.',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_virtualSupply',
            type: 'uint256',
            description:
              'The new value to set for the virtual collateral supply.',
          },
        ],
        name: 'setVirtualCollateralSupply',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Sets the virtual collateral supply to a new value.',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_virtualSupply',
            type: 'uint256',
            description:
              'The new value to set for the virtual issuance supply.',
          },
        ],
        name: 'setVirtualIssuanceSupply',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Sets the virtual issuance supply to a new value.',
      },
      {
        inputs: [
          { internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' },
        ],
        name: 'supportsInterface',
        outputs: [{ internalType: 'bool', name: '_0', type: 'bool' }],
        stateMutability: 'view',
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
        inputs: [],
        name: 'token',
        outputs: [
          {
            internalType: 'contract IERC20',
            name: '_0',
            type: 'address',
            description: 'The token.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the token.',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
            description: 'The address that will receive the tokens.',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            tags: ['decimals'],
            description: 'The amount of tokens to be transfered.',
          },
        ],
        name: 'transferOrchestratorToken',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Transfer a specified amount of Tokens to a designated receiver address.',
      },
      {
        inputs: [],
        name: 'trustedForwarder',
        outputs: [
          {
            internalType: 'address',
            name: '_0',
            type: 'address',
            description: 'address The trusted forwarder.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the trusted forwarder.',
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
          {
            internalType: 'uint256',
            name: '_2',
            type: 'uint256',
            description: "The module's patch version.",
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: "Returns the module's version.",
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '_receiver',
            type: 'address',
            description: 'The address that will receive the fee.',
          },
          {
            internalType: 'uint256',
            name: '_amount',
            type: 'uint256',
            tags: ['decimals'],
            description: 'The amount of fee to withdraw.',
          },
        ],
        name: 'withdrawProjectCollateralFee',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Withdraw project collateral fee to the receiver address.',
      },
    ],
  },
  {
    name: 'PP_Streaming_v1',
    description:
      'Manages continuous and linear streaming payment streams within the Inverter Network, allowing multiple concurrent streams per recipient. Provides tools to claim streamed amounts and manage payment schedules dynamically.',
    moduleType: 'paymentProcessor',
    deploymentInputs: { configData: [] },
    abi: [
      {
        inputs: [{ internalType: 'address', name: 'target', type: 'address' }],
        name: 'AddressEmptyCode',
        type: 'error',
      },
      {
        inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
        name: 'AddressInsufficientBalance',
        type: 'error',
      },
      { inputs: [], name: 'FailedInnerCall', type: 'error' },
      { inputs: [], name: 'InvalidInitialization', type: 'error' },
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
      { inputs: [], name: 'Module__InvalidAddress', type: 'error' },
      { inputs: [], name: 'Module__InvalidMetadata', type: 'error' },
      { inputs: [], name: 'Module__InvalidOrchestratorAddress', type: 'error' },
      { inputs: [], name: 'Module__OnlyCallableByOrchestrator', type: 'error' },
      {
        inputs: [],
        name: 'Module__OnlyCallableByPaymentClient',
        type: 'error',
      },
      {
        inputs: [
          { internalType: 'address', name: 'paymentClient', type: 'address' },
          { internalType: 'address', name: 'paymentReceiver', type: 'address' },
        ],
        name: 'Module__PP_Streaming__In_validPaymentReceiver',
        type: 'error',
      },
      {
        inputs: [
          { internalType: 'address', name: 'paymentClient', type: 'address' },
          { internalType: 'address', name: 'paymentReceiver', type: 'address' },
          { internalType: 'uint256', name: 'streamId', type: 'uint256' },
        ],
        name: 'Module__PP_Streaming__InactiveStream',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__PP_Streaming__InsufficientTokenBalanceInClient',
        type: 'error',
      },
      {
        inputs: [
          { internalType: 'address', name: 'paymentClient', type: 'address' },
          { internalType: 'address', name: 'paymentReceiver', type: 'address' },
          { internalType: 'uint256', name: 'streamId', type: 'uint256' },
        ],
        name: 'Module__PP_Streaming__InvalidStream',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__PaymentProcessor__CannotCallOnOtherClientsOrders',
        type: 'error',
      },
      {
        inputs: [
          { internalType: 'address', name: 'paymentClient', type: 'address' },
          { internalType: 'address', name: 'paymentReceiver', type: 'address' },
        ],
        name: 'Module__PaymentProcessor__NothingToClaim',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__PaymentProcessor__OnlyCallableByModule',
        type: 'error',
      },
      { inputs: [], name: 'NotInitializing', type: 'error' },
      {
        inputs: [{ internalType: 'address', name: 'token', type: 'address' }],
        name: 'SafeERC20FailedOperation',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint64',
            name: 'version',
            type: 'uint64',
          },
        ],
        name: 'Initialized',
        type: 'event',
        outputs: [],
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
            name: 'paymentToken',
            type: 'address',
            description:
              'The address of the token that will be used for the payment.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            tags: ['decimals'],
            description: 'The amount of tokens the payment consists of.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'start',
            type: 'uint256',
            description: 'The start date of the streaming period.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'cliff',
            type: 'uint256',
            description: 'The duration of the cliff period.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'end',
            type: 'uint256',
            description: 'The ending of the streaming period.',
          },
        ],
        name: 'InvalidStreamingOrderDiscarded',
        type: 'event',
        outputs: [],
        description: 'Emitted when a running stream schedule gets updated.',
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
              'The address of the {Orchestrator_v1} the module is linked to.',
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
              {
                internalType: 'uint256',
                name: 'patchVersion',
                type: 'uint256',
              },
              { internalType: 'string', name: 'url', type: 'string' },
              { internalType: 'string', name: 'title', type: 'string' },
            ],
            indexed: false,
            internalType: 'struct IModule_v1.Metadata',
            name: 'metadata',
            type: 'tuple',
            description: 'The metadata of the module.',
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
            indexed: true,
            internalType: 'address',
            name: 'paymentToken',
            type: 'address',
            description:
              'The address of the token that will be used for the payment.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            tags: ['decimals'],
            description: 'The amount of tokens the payment consists of.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'start',
            type: 'uint256',
            description: 'The start date of the streaming period.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'cliff',
            type: 'uint256',
            description: 'The duration of the cliff period.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'end',
            type: 'uint256',
            description: 'The ending of the streaming period.',
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
            indexed: true,
            internalType: 'address',
            name: 'paymentToken',
            type: 'address',
            description:
              'The address of the token that will be used for the payment.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'streamId',
            type: 'uint256',
            description:
              'ID of the streaming payment order that was processed.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            tags: ['decimals'],
            description: 'The amount of tokens the payment consists of.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'start',
            type: 'uint256',
            description: 'The start date of the streaming period.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'cliff',
            type: 'uint256',
            description: 'The duration of the cliff period.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'end',
            type: 'uint256',
            description: 'The ending of the streaming period.',
          },
        ],
        name: 'PaymentOrderProcessed',
        type: 'event',
        description: 'Emitted when a payment gets processed for execution.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'paymentClient',
            type: 'address',
            description: 'The address of the payment client.',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'paymentReceiver',
            type: 'address',
            description: 'The address of the recipient that is removed.',
          },
        ],
        name: 'PaymentReceiverRemoved',
        type: 'event',
        outputs: [],
        description:
          'Emitted when an address is removed from the list of active payment receiver, eg because all payments have been fulfilled by a client.',
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
            indexed: true,
            internalType: 'address',
            name: 'paymentToken',
            type: 'address',
            description:
              'The address of the token that is being used for the payment.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'streamId',
            type: 'uint256',
            description: 'ID of the streaming payment order that was added.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            tags: ['decimals'],
            description: 'The amount of tokens the payment consists of.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'start',
            type: 'uint256',
            description: 'The start date of the streaming period.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'cliff',
            type: 'uint256',
            description: 'The duration of the cliff period.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'end',
            type: 'uint256',
            description: 'The ending of the streaming period.',
          },
        ],
        name: 'StreamingPaymentAdded',
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
            name: 'paymentClient',
            type: 'address',
            description: 'The payment client that originated the order.',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'recipient',
            type: 'address',
            description: 'The address that will stop receiving payment.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'streamId',
            type: 'uint256',
            description: 'ID of the streaming payment order that was removed.',
          },
        ],
        name: 'StreamingPaymentRemoved',
        type: 'event',
        outputs: [],
        description: 'Emitted when the stream to an address is removed.',
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
            description:
              'The token address in which the payment should have happened.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            tags: ['decimals'],
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
            name: 'token',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'recipient',
            type: 'address',
            description: 'The address that wshould have received the payment.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            tags: ['decimals'],
            description: 'The amount of tokens that were unclaimable.',
          },
        ],
        name: 'UnclaimableAmountAdded',
        type: 'event',
        outputs: [],
        description:
          'Emitted when a payment was unclaimable due to a token error.',
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
            indexed: false,
            internalType: 'address',
            name: 'recipient',
            type: 'address',
            description: 'The address that wshould have received the payment.',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'paymentToken',
            type: 'address',
            description:
              'The address of the token that will be used for the payment.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'streamId',
            type: 'uint256',
            description:
              'ID of the streaming payment order that was processed.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            tags: ['decimals'],
            description: 'The amount of tokens that were unclaimable.',
          },
        ],
        name: 'UnclaimableAmountAdded',
        type: 'event',
        description:
          'Emitted when a payment was unclaimable due to a token error.',
      },
      {
        inputs: [
          {
            internalType: 'contract IERC20PaymentClientBase_v1',
            name: 'client',
            type: 'address',
            description:
              'The {IERC20PaymentClientBase_v1} instance to process its to payments.',
          },
        ],
        name: 'cancelRunningPayments',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Cancels all unfinished payments from an {IERC20PaymentClientBase_v1} instance.',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'client',
            type: 'address',
            description:
              'The {IERC20PaymentClientBase_v1} instance address that processes all claims from `_msgSender`.',
          },
        ],
        name: 'claimAll',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'claim everything that the paymentClient owes to the `_msgSender` till the current timestamp.',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'client',
            type: 'address',
            description:
              'The {IERC20PaymentClientBase_v1} instance address that processes the `streamId` claim from `_msgSender`.',
          },
          {
            internalType: 'uint256',
            name: 'streamId',
            type: 'uint256',
            description:
              'The ID of the streaming payment order for which claim is being made.',
          },
        ],
        name: 'claimForSpecificStream',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'claim the total amount up til block.timestamp from the client for a payment order with id = streamId by _msgSender.',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'client',
            type: 'address',
            description:
              'The IERC20PaymentClientBase_v1 instance address that processes all claims from _msgSender.',
          },
          {
            internalType: 'address',
            name: 'token',
            type: 'address',
            description: 'address of the payment token.',
          },
          {
            internalType: 'address',
            name: 'receiver',
            type: 'address',
            description:
              'The address that will receive the previously unclaimable amount.',
          },
        ],
        name: 'claimPreviouslyUnclaimable',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'claim every unclaimable amount that the paymentClient owes to the _msgSender and send it to a specified receiver.',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'client',
            type: 'address',
            description: 'address of the payment client.',
          },
          {
            internalType: 'address',
            name: 'paymentReceiver',
            type: 'address',
            description: "PaymentReceiver's address.",
          },
          {
            internalType: 'uint256',
            name: 'streamId',
            type: 'uint256',
            description: 'Id of the wallet for which cliff is fetched.',
          },
        ],
        name: 'cliffForSpecificStream',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            description: 'cliff duration of the payment order.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'Getter for the cliff duration of a particular payment order with id = streamId associated with a particular paymentReceiver.',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'client',
            type: 'address',
            description: 'address of the payment client.',
          },
          {
            internalType: 'address',
            name: 'paymentReceiver',
            type: 'address',
            description: "PaymentReceiver's address.",
          },
          {
            internalType: 'uint256',
            name: 'streamId',
            type: 'uint256',
            description: 'Id of the wallet for which end is fetched.',
          },
        ],
        name: 'endForSpecificStream',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            description: 'end timestamp of the payment order.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'Getter for the stream end timestamp of a particular payment order with id = streamId associated with a particular paymentReceiver.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to grant.',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
            description: 'The target address to grant the role to.',
          },
        ],
        name: 'grantModuleRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Grants a module role to a target address.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to grant.',
          },
          {
            internalType: 'address[]',
            name: 'targets',
            type: 'address[]',
            description: 'The target addresses to grant the role to.',
          },
        ],
        name: 'grantModuleRoleBatched',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Grants a module role to multiple target addresses.',
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
            internalType: 'contract IOrchestrator_v1',
            name: 'orchestrator_',
            type: 'address',
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
              {
                internalType: 'uint256',
                name: 'patchVersion',
                type: 'uint256',
              },
              { internalType: 'string', name: 'url', type: 'string' },
              { internalType: 'string', name: 'title', type: 'string' },
            ],
            internalType: 'struct IModule_v1.Metadata',
            name: 'metadata',
            type: 'tuple',
            description: "The module's metadata.",
          },
          { internalType: 'bytes', name: '', type: 'bytes' },
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
            internalType: 'address',
            name: 'client',
            type: 'address',
            description: 'Address of the payment client.',
          },
          {
            internalType: 'address',
            name: 'paymentReceiver',
            type: 'address',
            description: 'Address of the paymentReceiver.',
          },
        ],
        name: 'isActivePaymentReceiver',
        outputs: [
          {
            internalType: 'bool',
            name: '_0',
            type: 'bool',
            description:
              'true if the paymentReceiver is active for the payment client.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'Tells whether a `paymentReceiver` has any pending payments for a particular client.',
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
            description: 'bool Is the given address the trusted forwarder.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Checks if the provided address is the trusted forwarder.',
      },
      {
        inputs: [
          { internalType: 'address', name: '', type: 'address' },
          { internalType: 'address', name: '', type: 'address' },
        ],
        name: 'numStreams',
        outputs: [{ internalType: 'uint256', name: '_0', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'orchestrator',
        outputs: [
          {
            internalType: 'contract IOrchestrator_v1',
            name: '_0',
            type: 'address',
            description: "The module's {Orchestrator_1}.",
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          "Returns the module's {Orchestrator_v1} interface, {IOrchestrator_v1}.",
      },
      {
        inputs: [
          {
            internalType: 'contract IERC20PaymentClientBase_v1',
            name: 'client',
            type: 'address',
            description:
              'The {IERC20PaymentClientBase_v1} instance to process its to payments.',
          },
        ],
        name: 'processPayments',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Processes all payments from an {IERC20PaymentClientBase_v1} instance. Please note: this function does not support callbacks on transfer of tokens.',
      },
      {
        inputs: [
          { internalType: 'address', name: 'client', type: 'address' },
          {
            internalType: 'address',
            name: 'paymentReceiver',
            type: 'address',
            description: "PaymentReceiver's address.",
          },
          {
            internalType: 'uint256',
            name: 'streamId',
            type: 'uint256',
            description:
              'Id of the wallet for which the releasable amount is fetched.',
          },
        ],
        name: 'releasableForSpecificStream',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            description: 'releasable amount of the stream with id = streamId.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'Getter for the amount of releasable tokens for a particular payment order with id = streamId associated with a particular paymentReceiver.',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'client',
            type: 'address',
            description: 'address of the payment client.',
          },
          {
            internalType: 'address',
            name: 'paymentReceiver',
            type: 'address',
            description: "PaymentReceiver's address.",
          },
          {
            internalType: 'uint256',
            name: 'streamId',
            type: 'uint256',
            description: 'Id of the wallet for which released is fetched.',
          },
        ],
        name: 'releasedForSpecificStream',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            description: 'released amount of the payment order.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'Getter for the amount of tokens already released for a particular payment order with id = streamId associated with a particular paymentReceiver.',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'client',
            type: 'address',
            description:
              'The {IERC20PaymentClientBase_v1} instance address from which we will remove the payments.',
          },
          {
            internalType: 'address',
            name: 'paymentReceiver',
            type: 'address',
            description: "PaymentReceiver's address.",
          },
        ],
        name: 'removeAllPaymentReceiverPayments',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Deletes all payments related to a paymentReceiver & leaves currently streaming tokens in the {IERC20PaymentClientBase_v1}.',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'client',
            type: 'address',
            description:
              'The {IERC20PaymentClientBase_v1} instance address from which we will remove the payment.',
          },
          {
            internalType: 'address',
            name: 'paymentReceiver',
            type: 'address',
            description:
              'Address of the paymentReceiver whose payment order is to be removed.',
          },
          {
            internalType: 'uint256',
            name: 'streamId',
            type: 'uint256',
            description:
              "The ID of the paymentReceiver's payment order which is to be removed.",
          },
        ],
        name: 'removePaymentForSpecificStream',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Deletes a specific payment with id = streamId for a paymentReceiver & leaves currently streaming tokens in the {IERC20PaymentClientBase_v1}.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to revoke.',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
            description: 'The target address to revoke the role from.',
          },
        ],
        name: 'revokeModuleRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Revokes a module role from a target address.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to revoke.',
          },
          {
            internalType: 'address[]',
            name: 'targets',
            type: 'address[]',
            description: 'The target addresses to revoke the role from.',
          },
        ],
        name: 'revokeModuleRoleBatched',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Revokes a module role from multiple target addresses.',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'client',
            type: 'address',
            description: 'address of the payment client.',
          },
          {
            internalType: 'address',
            name: 'paymentReceiver',
            type: 'address',
            description: "PaymentReceiver's address.",
          },
          {
            internalType: 'uint256',
            name: 'streamId',
            type: 'uint256',
            description: 'Id of the wallet for which start is fetched.',
          },
        ],
        name: 'startForSpecificStream',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            description: 'start timestamp of the payment order.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'Getter for the start timestamp of a particular payment order with id = streamId associated with a particular paymentReceiver.',
      },
      {
        inputs: [
          { internalType: 'address', name: 'client', type: 'address' },
          {
            internalType: 'address',
            name: 'paymentReceiver',
            type: 'address',
            description: "PaymentReceiver's address.",
          },
          {
            internalType: 'uint256',
            name: 'streamId',
            type: 'uint256',
            description:
              'Id of the wallet for which the streamed amount is fetched.',
          },
          {
            internalType: 'uint256',
            name: 'timestamp',
            type: 'uint256',
            description: 'the time upto which we want the streamed amount.',
          },
        ],
        name: 'streamedAmountForSpecificStream',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            description: 'streamed amount of the stream with id = streamId.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'Calculates the amount of tokens that has already streamed for a particular payment order with id = streamId associated with a particular paymentReceiver.',
      },
      {
        inputs: [
          { internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' },
        ],
        name: 'supportsInterface',
        outputs: [{ internalType: 'bool', name: '_0', type: 'bool' }],
        stateMutability: 'view',
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
        inputs: [],
        name: 'trustedForwarder',
        outputs: [
          {
            internalType: 'address',
            name: '_0',
            type: 'address',
            description: 'address The trusted forwarder.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the trusted forwarder.',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'client',
            type: 'address',
            description: 'address of the payment client.',
          },
          {
            internalType: 'address',
            name: 'token',
            type: 'address',
            description: 'address of the payment token.',
          },
          {
            internalType: 'address',
            name: 'paymentReceiver',
            type: 'address',
            description: "PaymentReceiver's address.",
          },
        ],
        name: 'unclaimable',
        outputs: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            tags: ['decimals'],
            description: 'Amount of tokens that could not be claimed.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'Getter for the amount of tokens that could not be claimed.',
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
            components: [
              { internalType: 'address', name: 'recipient', type: 'address' },
              {
                internalType: 'address',
                name: 'paymentToken',
                type: 'address',
              },
              { internalType: 'uint256', name: 'amount', type: 'uint256' },
              { internalType: 'uint256', name: 'start', type: 'uint256' },
              { internalType: 'uint256', name: 'cliff', type: 'uint256' },
              { internalType: 'uint256', name: 'end', type: 'uint256' },
            ],
            internalType: 'struct IERC20PaymentClientBase_v1.PaymentOrder',
            name: 'order',
            type: 'tuple',
            description:
              'The IERC20PaymentClientBase_v1 Order that needs to be checked.',
          },
        ],
        name: 'validPaymentOrder',
        outputs: [
          {
            internalType: 'bool',
            name: '_0',
            type: 'bool',
            description: 'valid Bool if the Payment Order is valid.',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Function that checks if the given PaymentOrder was valid.',
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
          {
            internalType: 'uint256',
            name: '_2',
            type: 'uint256',
            description: "The module's patch version.",
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: "Returns the module's version.",
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'client',
            type: 'address',
            description: 'Address of the payment client.',
          },
          {
            internalType: 'address',
            name: 'paymentReceiver',
            type: 'address',
            description: 'Address of the paymentReceiver.',
          },
        ],
        name: 'viewAllPaymentOrders',
        outputs: [
          {
            components: [
              {
                internalType: 'address',
                name: '_paymentToken',
                type: 'address',
              },
              { internalType: 'uint256', name: '_streamId', type: 'uint256' },
              { internalType: 'uint256', name: '_total', type: 'uint256' },
              { internalType: 'uint256', name: '_released', type: 'uint256' },
              { internalType: 'uint256', name: '_start', type: 'uint256' },
              { internalType: 'uint256', name: '_cliff', type: 'uint256' },
              { internalType: 'uint256', name: '_end', type: 'uint256' },
            ],
            internalType: 'struct IPP_Streaming_v1.Stream[]',
            name: '_0',
            type: 'tuple[]',
            description:
              'all streams for a particular payment client and payment receiver.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'See all active payment orders for a paymentClient associated with a particular paymentReceiver.',
      },
    ],
  },
  {
    name: 'PP_Simple_v1',
    description: '',
    moduleType: 'paymentProcessor',
    deploymentInputs: { configData: [] },
    abi: [
      { inputs: [], name: 'ERC1167FailedCreateClone', type: 'error' },
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
            indexed: true,
            internalType: 'address',
            name: 'paymentToken',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            tags: ['decimals'],
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'start',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'cliff',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'end',
            type: 'uint256',
          },
        ],
        name: 'PaymentOrderProcessed',
        type: 'event',
        outputs: [],
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
            tags: ['decimals'],
          },
        ],
        name: 'TokensReleased',
        type: 'event',
        outputs: [],
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
            name: 'token',
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
        ],
        name: 'UnclaimableAmountAdded',
        type: 'event',
        outputs: [],
      },
      {
        anonymous: false,
        inputs: [
          { indexed: false, internalType: 'string', name: '', type: 'string' },
        ],
        name: 'log',
        type: 'event',
        outputs: [],
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        name: 'log_address',
        type: 'event',
        outputs: [],
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint256[]',
            name: 'val',
            type: 'uint256[]',
          },
        ],
        name: 'log_array',
        type: 'event',
        outputs: [],
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'int256[]',
            name: 'val',
            type: 'int256[]',
          },
        ],
        name: 'log_array',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address[]',
            name: 'val',
            type: 'address[]',
          },
        ],
        name: 'log_array',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          { indexed: false, internalType: 'bytes', name: '', type: 'bytes' },
        ],
        name: 'log_bytes',
        type: 'event',
        outputs: [],
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'bytes32',
            name: '',
            type: 'bytes32',
          },
        ],
        name: 'log_bytes32',
        type: 'event',
        outputs: [],
      },
      {
        anonymous: false,
        inputs: [
          { indexed: false, internalType: 'int256', name: '', type: 'int256' },
        ],
        name: 'log_int',
        type: 'event',
        outputs: [],
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'string',
            name: 'key',
            type: 'string',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'val',
            type: 'address',
          },
        ],
        name: 'log_named_address',
        type: 'event',
        outputs: [],
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'string',
            name: 'key',
            type: 'string',
          },
          {
            indexed: false,
            internalType: 'uint256[]',
            name: 'val',
            type: 'uint256[]',
          },
        ],
        name: 'log_named_array',
        type: 'event',
        outputs: [],
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'string',
            name: 'key',
            type: 'string',
          },
          {
            indexed: false,
            internalType: 'int256[]',
            name: 'val',
            type: 'int256[]',
          },
        ],
        name: 'log_named_array',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'string',
            name: 'key',
            type: 'string',
          },
          {
            indexed: false,
            internalType: 'address[]',
            name: 'val',
            type: 'address[]',
          },
        ],
        name: 'log_named_array',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'string',
            name: 'key',
            type: 'string',
          },
          { indexed: false, internalType: 'bytes', name: 'val', type: 'bytes' },
        ],
        name: 'log_named_bytes',
        type: 'event',
        outputs: [],
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'string',
            name: 'key',
            type: 'string',
          },
          {
            indexed: false,
            internalType: 'bytes32',
            name: 'val',
            type: 'bytes32',
          },
        ],
        name: 'log_named_bytes32',
        type: 'event',
        outputs: [],
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'string',
            name: 'key',
            type: 'string',
          },
          {
            indexed: false,
            internalType: 'int256',
            name: 'val',
            type: 'int256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'decimals',
            type: 'uint256',
          },
        ],
        name: 'log_named_decimal_int',
        type: 'event',
        outputs: [],
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'string',
            name: 'key',
            type: 'string',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'val',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'decimals',
            type: 'uint256',
          },
        ],
        name: 'log_named_decimal_uint',
        type: 'event',
        outputs: [],
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'string',
            name: 'key',
            type: 'string',
          },
          {
            indexed: false,
            internalType: 'int256',
            name: 'val',
            type: 'int256',
          },
        ],
        name: 'log_named_int',
        type: 'event',
        outputs: [],
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'string',
            name: 'key',
            type: 'string',
          },
          {
            indexed: false,
            internalType: 'string',
            name: 'val',
            type: 'string',
          },
        ],
        name: 'log_named_string',
        type: 'event',
        outputs: [],
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'string',
            name: 'key',
            type: 'string',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'val',
            type: 'uint256',
          },
        ],
        name: 'log_named_uint',
        type: 'event',
        outputs: [],
      },
      {
        anonymous: false,
        inputs: [
          { indexed: false, internalType: 'string', name: '', type: 'string' },
        ],
        name: 'log_string',
        type: 'event',
        outputs: [],
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        name: 'log_uint',
        type: 'event',
        outputs: [],
      },
      {
        anonymous: false,
        inputs: [
          { indexed: false, internalType: 'bytes', name: '', type: 'bytes' },
        ],
        name: 'logs',
        type: 'event',
        outputs: [],
      },
      {
        inputs: [],
        name: 'IS_TEST',
        outputs: [{ internalType: 'bool', name: '_0', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'excludeArtifacts',
        outputs: [
          {
            internalType: 'string[]',
            name: 'excludedArtifacts_',
            type: 'string[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'excludeContracts',
        outputs: [
          {
            internalType: 'address[]',
            name: 'excludedContracts_',
            type: 'address[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'excludeSenders',
        outputs: [
          {
            internalType: 'address[]',
            name: 'excludedSenders_',
            type: 'address[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'failed',
        outputs: [{ internalType: 'bool', name: '_0', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'setUp',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'targetArtifactSelectors',
        outputs: [
          {
            components: [
              { internalType: 'address', name: 'addr', type: 'address' },
              { internalType: 'bytes4[]', name: 'selectors', type: 'bytes4[]' },
            ],
            internalType: 'struct StdInvariant.FuzzSelector[]',
            name: 'targetedArtifactSelectors_',
            type: 'tuple[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'targetArtifacts',
        outputs: [
          {
            internalType: 'string[]',
            name: 'targetedArtifacts_',
            type: 'string[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'targetContracts',
        outputs: [
          {
            internalType: 'address[]',
            name: 'targetedContracts_',
            type: 'address[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'targetSelectors',
        outputs: [
          {
            components: [
              { internalType: 'address', name: 'addr', type: 'address' },
              { internalType: 'bytes4[]', name: 'selectors', type: 'bytes4[]' },
            ],
            internalType: 'struct StdInvariant.FuzzSelector[]',
            name: 'targetedSelectors_',
            type: 'tuple[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'targetSenders',
        outputs: [
          {
            internalType: 'address[]',
            name: 'targetedSenders_',
            type: 'address[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'nonModule', type: 'address' },
        ],
        name: 'testCancelPaymentsFailsWhenCalledByNonModule',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'nonModule', type: 'address' },
        ],
        name: 'testCancelPaymentsFailsWhenCalledOnOtherClient',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address[]', name: 'recipients', type: 'address[]' },
        ],
        name: 'testClaimPreviouslyUnclaimable',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'testClaimPreviouslyUnclaimableFailsIfNothingToClaim',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'testInit',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'recipient', type: 'address' },
          { internalType: 'uint256', name: 'amount', type: 'uint256' },
          { internalType: 'bool', name: 'paymentsFail', type: 'bool' },
        ],
        name: 'testProcessPayments',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'nonModule', type: 'address' },
        ],
        name: 'testProcessPaymentsFailsWhenCalledByNonModule',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'nonModule', type: 'address' },
        ],
        name: 'testProcessPaymentsFailsWhenCalledOnOtherClient',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'testReinitFails',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'testSupportsInterface',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            components: [
              { internalType: 'address', name: 'recipient', type: 'address' },
              {
                internalType: 'address',
                name: 'paymentToken',
                type: 'address',
              },
              { internalType: 'uint256', name: 'amount', type: 'uint256' },
              { internalType: 'uint256', name: 'start', type: 'uint256' },
              { internalType: 'uint256', name: 'cliff', type: 'uint256' },
              { internalType: 'uint256', name: 'end', type: 'uint256' },
            ],
            internalType: 'struct IERC20PaymentClientBase_v1.PaymentOrder',
            name: 'order',
            type: 'tuple',
          },
          { internalType: 'address', name: 'sender', type: 'address' },
        ],
        name: 'test_ValidPaymentOrder',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'addr', type: 'address' },
          { internalType: 'address', name: 'sender', type: 'address' },
        ],
        name: 'test__validPaymentReceiver',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'randomToken', type: 'address' },
          { internalType: 'address', name: 'sender', type: 'address' },
        ],
        name: 'test__validPaymentToken',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'uint256', name: '_total', type: 'uint256' }],
        name: 'test__validTotal',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
  },
  {
    name: 'AUT_TokenGated_Roles_v1',
    description:
      "Extends the Inverter's role-based access control to include token gating, enabling roles to be conditionally assigned based on token ownership. This mechanism allows for dynamic permissioning tied to specific token holdings.",
    moduleType: 'authorizer',
    deploymentInputs: {
      configData: [
        {
          name: 'initialAdmin',
          type: 'address',
          description: 'The initial admin of the workflow',
        },
      ],
    },
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
      { inputs: [], name: 'InvalidInitialization', type: 'error' },
      {
        inputs: [{ internalType: 'string', name: 'funcSig', type: 'string' }],
        name: 'Module_OrchestratorCallbackFailed',
        type: 'error',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'threshold', type: 'uint256' },
        ],
        name: 'Module__AUT_TokenGated_Roles__InvalidThreshold',
        type: 'error',
      },
      {
        inputs: [{ internalType: 'address', name: 'token', type: 'address' }],
        name: 'Module__AUT_TokenGated_Roles__InvalidToken',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__AUT_TokenGated_Roles__RoleNotEmpty',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__AUT_TokenGated_Roles__RoleNotTokenGated',
        type: 'error',
      },
      {
        inputs: [
          { internalType: 'bytes32', name: 'role', type: 'bytes32' },
          { internalType: 'address', name: 'token', type: 'address' },
        ],
        name: 'Module__AUT_TokenGated_Roles__TokenRoleMustHaveThreshold',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__Authorizer__AdminRoleCannotBeEmpty',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__Authorizer__InvalidInitialAdmin',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__Authorizer__ModuleNotSelfManaged',
        type: 'error',
      },
      {
        inputs: [{ internalType: 'address', name: 'module', type: 'address' }],
        name: 'Module__Authorizer__NotActiveModule',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__Authorizer__OrchestratorCannotHaveAdminRole',
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
      { inputs: [], name: 'Module__InvalidAddress', type: 'error' },
      { inputs: [], name: 'Module__InvalidMetadata', type: 'error' },
      { inputs: [], name: 'Module__InvalidOrchestratorAddress', type: 'error' },
      { inputs: [], name: 'Module__OnlyCallableByOrchestrator', type: 'error' },
      {
        inputs: [],
        name: 'Module__OnlyCallableByPaymentClient',
        type: 'error',
      },
      { inputs: [], name: 'NotInitializing', type: 'error' },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role that was modified.',
          },
          {
            indexed: false,
            internalType: 'bool',
            name: 'newValue',
            type: 'bool',
            description: 'The new value of the role.',
          },
        ],
        name: 'ChangedTokenGating',
        type: 'event',
        outputs: [],
        description: 'Event emitted when the token-gating of a role changes.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role that was modified.',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'token',
            type: 'address',
            description: 'The token for which the threshold was modified.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'newValue',
            type: 'uint256',
            description: 'The new value of the threshold.',
          },
        ],
        name: 'ChangedTokenThreshold',
        type: 'event',
        outputs: [],
        description:
          'Event emitted when the threshold of a token-gated role changes.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint64',
            name: 'version',
            type: 'uint64',
          },
        ],
        name: 'Initialized',
        type: 'event',
        outputs: [],
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
              'The address of the {Orchestrator_v1} the module is linked to.',
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
              {
                internalType: 'uint256',
                name: 'patchVersion',
                type: 'uint256',
              },
              { internalType: 'string', name: 'url', type: 'string' },
              { internalType: 'string', name: 'title', type: 'string' },
            ],
            indexed: false,
            internalType: 'struct IModule_v1.Metadata',
            name: 'metadata',
            type: 'tuple',
            description: 'The metadata of the module.',
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
      },
      {
        inputs: [],
        name: 'BURN_ADMIN_ROLE',
        outputs: [{ internalType: 'bytes32', name: '_0', type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
        description:
          'The role that is used as a placeholder for a burned admin role.',
      },
      {
        inputs: [],
        name: 'DEFAULT_ADMIN_ROLE',
        outputs: [{ internalType: 'bytes32', name: '_0', type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to remove admin access from.',
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
        name: 'checkForRole',
        outputs: [
          {
            internalType: 'bool',
            name: '_0',
            type: 'bool',
            description: 'bool Returns if the address holds the role',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'In case the role is token gated, it will check if {who} holds a balance above the threshold for at least one of the required tokens.',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'module',
            type: 'address',
            description: 'The address of the module to generate the hash for.',
          },
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The ID number of the role to generate the hash for.',
          },
        ],
        name: 'generateRoleId',
        outputs: [
          {
            internalType: 'bytes32',
            name: '_0',
            type: 'bytes32',
            description: 'bytes32 Returns the generated role hash.',
          },
        ],
        stateMutability: 'pure',
        type: 'function',
        description:
          'Helper function to generate a bytes32 role hash for a module role.',
      },
      {
        inputs: [],
        name: 'getAdminRole',
        outputs: [
          {
            internalType: 'bytes32',
            name: '_0',
            type: 'bytes32',
            description: 'The role ID.',
          },
        ],
        stateMutability: 'pure',
        type: 'function',
        description: 'Returns the role ID of the admin role.',
      },
      {
        inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }],
        name: 'getRoleAdmin',
        outputs: [{ internalType: 'bytes32', name: '_0', type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'bytes32', name: 'role', type: 'bytes32' },
          { internalType: 'uint256', name: 'index', type: 'uint256' },
        ],
        name: 'getRoleMember',
        outputs: [{ internalType: 'address', name: '_0', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }],
        name: 'getRoleMemberCount',
        outputs: [{ internalType: 'uint256', name: '_0', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'roleId',
            type: 'bytes32',
            description: 'The role to be checked on.',
          },
          {
            internalType: 'address',
            name: 'token',
            type: 'address',
            tags: ['decimals:params:indirect:token'],
            description: 'The token to check the threshold for.',
          },
        ],
        name: 'getThresholdValue',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            description:
              'The threshold amount necessary to qualify for a given token role.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          "Returns the threshold balance for a given token necessary to qualify for a specific role. If the value is 0, the supplied token is not part of the. role's token gating.",
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to grant.',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
            description: 'The address to grant the role to.',
          },
        ],
        name: 'grantGlobalRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Grants a global role to a target.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to grant.',
          },
          {
            internalType: 'address[]',
            name: 'targets',
            type: 'address[]',
            description: 'The addresses to grant the role to.',
          },
        ],
        name: 'grantGlobalRoleBatched',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Grants a global role to a set of targets.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to grant.',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
            description: 'The target address to grant the role to.',
          },
        ],
        name: 'grantModuleRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Grants a module role to a target address.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to grant.',
          },
          {
            internalType: 'address[]',
            name: 'targets',
            type: 'address[]',
            description: 'The target addresses to grant the role to.',
          },
        ],
        name: 'grantModuleRoleBatched',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Grants a module role to multiple target addresses.',
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
            description: 'The identifier of the role to grant.',
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
            description: 'The identifier of the role to grant.',
          },
          {
            internalType: 'address[]',
            name: 'targets',
            type: 'address[]',
            description: 'The addresses to which to grant the role.',
          },
        ],
        name: 'grantRoleFromModuleBatched',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Used by a Module to grant a role to a set of users.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to be made token-gated.',
          },
          {
            internalType: 'address',
            name: 'token',
            type: 'address',
            description: 'The token for which the threshold will be set.',
          },
          {
            internalType: 'uint256',
            name: 'threshold',
            type: 'uint256',
            tags: ['decimals:params:indirect:token'],
            description:
              'The minimum balance of the token required to qualify for the role.',
          },
        ],
        name: 'grantTokenRoleFromModule',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'One-step setup for Modules to create a token-gated role and set its threshold. Please be aware that using tokens that are transferable and have active markets could make the token-gated authorization vulnerable to flash loans, potentially bypassing. the authorization mechanism.',
      },
      {
        inputs: [
          { internalType: 'bytes32', name: 'role', type: 'bytes32' },
          { internalType: 'address', name: 'account', type: 'address' },
        ],
        name: 'hasRole',
        outputs: [{ internalType: 'bool', name: '_0', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to be checked.',
          },
          {
            internalType: 'address',
            name: 'who',
            type: 'address',
            description: 'The account to be checked.',
          },
        ],
        name: 'hasTokenRole',
        outputs: [
          {
            internalType: 'bool',
            name: '_0',
            type: 'bool',
            description: 'True if the account qualifies for the role.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Checks if an account qualifies for a token-gated role.',
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
            internalType: 'contract IOrchestrator_v1',
            name: 'orchestrator_',
            type: 'address',
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
              {
                internalType: 'uint256',
                name: 'patchVersion',
                type: 'uint256',
              },
              { internalType: 'string', name: 'url', type: 'string' },
              { internalType: 'string', name: 'title', type: 'string' },
            ],
            internalType: 'struct IModule_v1.Metadata',
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
        inputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
        name: 'isTokenGated',
        outputs: [{ internalType: 'bool', name: '_0', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
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
            description: 'bool Is the given address the trusted forwarder.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Checks if the provided address is the trusted forwarder.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to be made token-gated.',
          },
        ],
        name: 'makeRoleTokenGatedFromModule',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Sets up a token-gated empty role.',
      },
      {
        inputs: [],
        name: 'orchestrator',
        outputs: [
          {
            internalType: 'contract IOrchestrator_v1',
            name: '_0',
            type: 'address',
            description: "The module's {Orchestrator_1}.",
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          "Returns the module's {Orchestrator_v1} interface, {IOrchestrator_v1}.",
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
            description: 'The role to grant.',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
            description: 'The address to grant the role to.',
          },
        ],
        name: 'revokeGlobalRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Revokes a global role from a target.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to grant.',
          },
          {
            internalType: 'address[]',
            name: 'targets',
            type: 'address[]',
            description: 'The addresses to grant the role to.',
          },
        ],
        name: 'revokeGlobalRoleBatched',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Revokes a global role from a set of targets.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to revoke.',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
            description: 'The target address to revoke the role from.',
          },
        ],
        name: 'revokeModuleRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Revokes a module role from a target address.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to revoke.',
          },
          {
            internalType: 'address[]',
            name: 'targets',
            type: 'address[]',
            description: 'The target addresses to revoke the role from.',
          },
        ],
        name: 'revokeModuleRoleBatched',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Revokes a module role from multiple target addresses.',
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
            description: 'The identifier of the role to revoke.',
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
            name: 'role',
            type: 'bytes32',
            description: 'The identifier of the role to revoke.',
          },
          {
            internalType: 'address[]',
            name: 'targets',
            type: 'address[]',
            description: 'The address to revoke the role from.',
          },
        ],
        name: 'revokeRoleFromModuleBatched',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Used by a Module to revoke a role from a set of users.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'roleId',
            type: 'bytes32',
            description: 'The ID of the role to be modified.',
          },
          {
            internalType: 'address',
            name: 'token',
            type: 'address',
            description: 'The token for which to the threshold.',
          },
          {
            internalType: 'uint256',
            name: 'threshold',
            type: 'uint256',
            tags: ['decimals:params:indirect:token'],
            description:
              'The user will need to have at least this number to qualify for the role.',
          },
        ],
        name: 'setThreshold',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Sets the minimum threshold for a token-gated role.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The token-gated role.',
          },
          {
            internalType: 'address',
            name: 'token',
            type: 'address',
            description: 'The token for which the threshold will be set.',
          },
          {
            internalType: 'uint256',
            name: 'threshold',
            type: 'uint256',
            tags: ['decimals:params:indirect:token'],
            description:
              'The new minimum balance of the token required to qualify for the role.',
          },
        ],
        name: 'setThresholdFromModule',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          "Allows a Module to set the threshold of one of it's roles.",
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The ID of the role to be modified.',
          },
          {
            internalType: 'bool',
            name: 'to',
            type: 'bool',
            description: 'The new value to be set.',
          },
        ],
        name: 'setTokenGated',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Sets if a role is token-gated or not.',
      },
      {
        inputs: [
          { internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' },
        ],
        name: 'supportsInterface',
        outputs: [{ internalType: 'bool', name: '_0', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
        name: 'thresholdMap',
        outputs: [{ internalType: 'uint256', name: '_0', type: 'uint256' }],
        stateMutability: 'view',
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
            internalType: 'bytes32',
            name: 'roleId',
            type: 'bytes32',
            description: 'The role on which to peform the admin transfer.',
          },
          {
            internalType: 'bytes32',
            name: 'newAdmin',
            type: 'bytes32',
            description: 'The new role to which to transfer admin access to.',
          },
        ],
        name: 'transferAdminRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Transfer the admin rights to a given role.',
      },
      {
        inputs: [],
        name: 'trustedForwarder',
        outputs: [
          {
            internalType: 'address',
            name: '_0',
            type: 'address',
            description: 'address The trusted forwarder.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the trusted forwarder.',
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
          {
            internalType: 'uint256',
            name: '_2',
            type: 'uint256',
            description: "The module's patch version.",
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: "Returns the module's version.",
      },
    ],
  },
  {
    name: 'AUT_Roles_v1',
    description:
      'Provides a robust access control mechanism for managing roles and permissions across different modules within the Inverter Network, ensuring secure and controlled access to critical functionalities.',
    moduleType: 'authorizer',
    deploymentInputs: {
      configData: [
        {
          name: 'initialAdmin',
          type: 'address',
          description: 'The initial admin of the workflow',
        },
      ],
    },
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
      { inputs: [], name: 'InvalidInitialization', type: 'error' },
      {
        inputs: [{ internalType: 'string', name: 'funcSig', type: 'string' }],
        name: 'Module_OrchestratorCallbackFailed',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__Authorizer__AdminRoleCannotBeEmpty',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__Authorizer__InvalidInitialAdmin',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__Authorizer__ModuleNotSelfManaged',
        type: 'error',
      },
      {
        inputs: [{ internalType: 'address', name: 'module', type: 'address' }],
        name: 'Module__Authorizer__NotActiveModule',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__Authorizer__OrchestratorCannotHaveAdminRole',
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
      { inputs: [], name: 'Module__InvalidAddress', type: 'error' },
      { inputs: [], name: 'Module__InvalidMetadata', type: 'error' },
      { inputs: [], name: 'Module__InvalidOrchestratorAddress', type: 'error' },
      { inputs: [], name: 'Module__OnlyCallableByOrchestrator', type: 'error' },
      {
        inputs: [],
        name: 'Module__OnlyCallableByPaymentClient',
        type: 'error',
      },
      { inputs: [], name: 'NotInitializing', type: 'error' },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint64',
            name: 'version',
            type: 'uint64',
          },
        ],
        name: 'Initialized',
        type: 'event',
        outputs: [],
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
              'The address of the {Orchestrator_v1} the module is linked to.',
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
              {
                internalType: 'uint256',
                name: 'patchVersion',
                type: 'uint256',
              },
              { internalType: 'string', name: 'url', type: 'string' },
              { internalType: 'string', name: 'title', type: 'string' },
            ],
            indexed: false,
            internalType: 'struct IModule_v1.Metadata',
            name: 'metadata',
            type: 'tuple',
            description: 'The metadata of the module.',
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
      },
      {
        inputs: [],
        name: 'BURN_ADMIN_ROLE',
        outputs: [{ internalType: 'bytes32', name: '_0', type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
        description:
          'The role that is used as a placeholder for a burned admin role.',
      },
      {
        inputs: [],
        name: 'DEFAULT_ADMIN_ROLE',
        outputs: [{ internalType: 'bytes32', name: '_0', type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to remove admin access from.',
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
        name: 'checkForRole',
        outputs: [
          {
            internalType: 'bool',
            name: '_0',
            type: 'bool',
            description: 'bool Returns if the address holds the role',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'Checks whether an address holds the required role to execute the current transaction.',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'module',
            type: 'address',
            description: 'The address of the module to generate the hash for.',
          },
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The ID number of the role to generate the hash for.',
          },
        ],
        name: 'generateRoleId',
        outputs: [
          {
            internalType: 'bytes32',
            name: '_0',
            type: 'bytes32',
            description: 'bytes32 Returns the generated role hash.',
          },
        ],
        stateMutability: 'pure',
        type: 'function',
        description:
          'Helper function to generate a bytes32 role hash for a module role.',
      },
      {
        inputs: [],
        name: 'getAdminRole',
        outputs: [
          {
            internalType: 'bytes32',
            name: '_0',
            type: 'bytes32',
            description: 'The role ID.',
          },
        ],
        stateMutability: 'pure',
        type: 'function',
        description: 'Returns the role ID of the admin role.',
      },
      {
        inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }],
        name: 'getRoleAdmin',
        outputs: [{ internalType: 'bytes32', name: '_0', type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'bytes32', name: 'role', type: 'bytes32' },
          { internalType: 'uint256', name: 'index', type: 'uint256' },
        ],
        name: 'getRoleMember',
        outputs: [{ internalType: 'address', name: '_0', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }],
        name: 'getRoleMemberCount',
        outputs: [{ internalType: 'uint256', name: '_0', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to grant.',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
            description: 'The address to grant the role to.',
          },
        ],
        name: 'grantGlobalRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Grants a global role to a target.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to grant.',
          },
          {
            internalType: 'address[]',
            name: 'targets',
            type: 'address[]',
            description: 'The addresses to grant the role to.',
          },
        ],
        name: 'grantGlobalRoleBatched',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Grants a global role to a set of targets.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to grant.',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
            description: 'The target address to grant the role to.',
          },
        ],
        name: 'grantModuleRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Grants a module role to a target address.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to grant.',
          },
          {
            internalType: 'address[]',
            name: 'targets',
            type: 'address[]',
            description: 'The target addresses to grant the role to.',
          },
        ],
        name: 'grantModuleRoleBatched',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Grants a module role to multiple target addresses.',
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
            description: 'The identifier of the role to grant.',
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
            description: 'The identifier of the role to grant.',
          },
          {
            internalType: 'address[]',
            name: 'targets',
            type: 'address[]',
            description: 'The addresses to which to grant the role.',
          },
        ],
        name: 'grantRoleFromModuleBatched',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Used by a Module to grant a role to a set of users.',
      },
      {
        inputs: [
          { internalType: 'bytes32', name: 'role', type: 'bytes32' },
          { internalType: 'address', name: 'account', type: 'address' },
        ],
        name: 'hasRole',
        outputs: [{ internalType: 'bool', name: '_0', type: 'bool' }],
        stateMutability: 'view',
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
            internalType: 'contract IOrchestrator_v1',
            name: 'orchestrator_',
            type: 'address',
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
              {
                internalType: 'uint256',
                name: 'patchVersion',
                type: 'uint256',
              },
              { internalType: 'string', name: 'url', type: 'string' },
              { internalType: 'string', name: 'title', type: 'string' },
            ],
            internalType: 'struct IModule_v1.Metadata',
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
            description: 'bool Is the given address the trusted forwarder.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Checks if the provided address is the trusted forwarder.',
      },
      {
        inputs: [],
        name: 'orchestrator',
        outputs: [
          {
            internalType: 'contract IOrchestrator_v1',
            name: '_0',
            type: 'address',
            description: "The module's {Orchestrator_1}.",
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          "Returns the module's {Orchestrator_v1} interface, {IOrchestrator_v1}.",
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
            description: 'The role to grant.',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
            description: 'The address to grant the role to.',
          },
        ],
        name: 'revokeGlobalRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Revokes a global role from a target.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to grant.',
          },
          {
            internalType: 'address[]',
            name: 'targets',
            type: 'address[]',
            description: 'The addresses to grant the role to.',
          },
        ],
        name: 'revokeGlobalRoleBatched',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Revokes a global role from a set of targets.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to revoke.',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
            description: 'The target address to revoke the role from.',
          },
        ],
        name: 'revokeModuleRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Revokes a module role from a target address.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to revoke.',
          },
          {
            internalType: 'address[]',
            name: 'targets',
            type: 'address[]',
            description: 'The target addresses to revoke the role from.',
          },
        ],
        name: 'revokeModuleRoleBatched',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Revokes a module role from multiple target addresses.',
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
            description: 'The identifier of the role to revoke.',
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
            name: 'role',
            type: 'bytes32',
            description: 'The identifier of the role to revoke.',
          },
          {
            internalType: 'address[]',
            name: 'targets',
            type: 'address[]',
            description: 'The address to revoke the role from.',
          },
        ],
        name: 'revokeRoleFromModuleBatched',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Used by a Module to revoke a role from a set of users.',
      },
      {
        inputs: [
          { internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' },
        ],
        name: 'supportsInterface',
        outputs: [{ internalType: 'bool', name: '_0', type: 'bool' }],
        stateMutability: 'view',
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
            internalType: 'bytes32',
            name: 'roleId',
            type: 'bytes32',
            description: 'The role on which to peform the admin transfer.',
          },
          {
            internalType: 'bytes32',
            name: 'newAdmin',
            type: 'bytes32',
            description: 'The new role to which to transfer admin access to.',
          },
        ],
        name: 'transferAdminRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Transfer the admin rights to a given role.',
      },
      {
        inputs: [],
        name: 'trustedForwarder',
        outputs: [
          {
            internalType: 'address',
            name: '_0',
            type: 'address',
            description: 'address The trusted forwarder.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the trusted forwarder.',
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
          {
            internalType: 'uint256',
            name: '_2',
            type: 'uint256',
            description: "The module's patch version.",
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: "Returns the module's version.",
      },
    ],
  },
  {
    name: 'LM_PC_Bounties_v1',
    description:
      'Provides functionality to manage bounties and process claims, allowing participants to propose, update, and claim bounties securely and transparently.',
    moduleType: 'optionalModule',
    deploymentInputs: { configData: [] },
    abi: [
      {
        inputs: [{ internalType: 'address', name: 'target', type: 'address' }],
        name: 'AddressEmptyCode',
        type: 'error',
      },
      {
        inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
        name: 'AddressInsufficientBalance',
        type: 'error',
      },
      { inputs: [], name: 'FailedInnerCall', type: 'error' },
      { inputs: [], name: 'InvalidInitialization', type: 'error' },
      {
        inputs: [],
        name: 'Library__LinkedIdList__InvalidNewId',
        type: 'error',
      },
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
      {
        inputs: [],
        name: 'Module__ERC20PaymentClientBase__ArrayLengthMismatch',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__ERC20PaymentClientBase__CallerNotAuthorized',
        type: 'error',
      },
      {
        inputs: [{ internalType: 'address', name: 'token', type: 'address' }],
        name: 'Module__ERC20PaymentClientBase__InsufficientFunds',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__ERC20PaymentClientBase__InvalidAmount',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__ERC20PaymentClientBase__InvalidPaymentOrder',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__ERC20PaymentClientBase__InvalidRecipient',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__ERC20PaymentClientBase__InvalidToken',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__ERC20PaymentClientBase__Invalidend',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__ERC20PaymentClientBase__TokenTransferFailed',
        type: 'error',
      },
      { inputs: [], name: 'Module__InvalidAddress', type: 'error' },
      { inputs: [], name: 'Module__InvalidMetadata', type: 'error' },
      { inputs: [], name: 'Module__InvalidOrchestratorAddress', type: 'error' },
      {
        inputs: [],
        name: 'Module__LM_PC_Bounty__AlreadyClaimed',
        type: 'error',
      },
      { inputs: [], name: 'Module__LM_PC_Bounty__BountyLocked', type: 'error' },
      {
        inputs: [],
        name: 'Module__LM_PC_Bounty__ClaimExceedsGivenPayoutAmounts',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__LM_PC_Bounty__ContributorsChanged',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__LM_PC_Bounty__InvalidArrayLengths',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__LM_PC_Bounty__InvalidBountyId',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__LM_PC_Bounty__InvalidClaimId',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__LM_PC_Bounty__InvalidContributorAddress',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__LM_PC_Bounty__InvalidContributorAmount',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__LM_PC_Bounty__InvalidContributorsLength',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__LM_PC_Bounty__InvalidPayoutAmounts',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__LM_PC_Bounty__OnlyClaimContributor',
        type: 'error',
      },
      { inputs: [], name: 'Module__OnlyCallableByOrchestrator', type: 'error' },
      {
        inputs: [],
        name: 'Module__OnlyCallableByPaymentClient',
        type: 'error',
      },
      { inputs: [], name: 'NotInitializing', type: 'error' },
      {
        inputs: [{ internalType: 'address', name: 'token', type: 'address' }],
        name: 'SafeERC20FailedOperation',
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
            description: 'The id of the newly added Bounty.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'minimumPayoutAmount',
            type: 'uint256',
            tags: ['decimals'],
            description:
              'The minimum amount of tokens the Bounty will pay out upon being claimed.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'maximumPayoutAmount',
            type: 'uint256',
            tags: ['decimals'],
            description:
              'The maximum amount of tokens the Bounty will pay out upon being claimed.',
          },
          {
            indexed: false,
            internalType: 'bytes',
            name: 'details',
            type: 'bytes',
            tags: ['any'],
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
            indexed: false,
            internalType: 'bytes',
            name: 'details',
            type: 'bytes',
            tags: ['any'],
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
              {
                internalType: 'uint256',
                name: 'claimAmount',
                type: 'uint256',
                tags: ['decimals'],
              },
            ],
            indexed: false,
            internalType: 'struct ILM_PC_Bounties_v1.Contributor[]',
            name: 'contributors',
            type: 'tuple[]',
            description: 'The contributor information for the Claim.',
          },
          {
            indexed: false,
            internalType: 'bytes',
            name: 'details',
            type: 'bytes',
            tags: ['any'],
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
              {
                internalType: 'uint256',
                name: 'claimAmount',
                type: 'uint256',
                tags: ['decimals'],
              },
            ],
            indexed: false,
            internalType: 'struct ILM_PC_Bounties_v1.Contributor[]',
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
            tags: ['any'],
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
            indexed: false,
            internalType: 'uint64',
            name: 'version',
            type: 'uint64',
          },
        ],
        name: 'Initialized',
        type: 'event',
        outputs: [],
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
              'The address of the {Orchestrator_v1} the module is linked to.',
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
              {
                internalType: 'uint256',
                name: 'patchVersion',
                type: 'uint256',
              },
              { internalType: 'string', name: 'url', type: 'string' },
              { internalType: 'string', name: 'title', type: 'string' },
            ],
            indexed: false,
            internalType: 'struct IModule_v1.Metadata',
            name: 'metadata',
            type: 'tuple',
            description: 'The metadata of the module.',
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
            indexed: true,
            internalType: 'address',
            name: 'token',
            type: 'address',
            description: 'The token in which to pay.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            tags: ['decimals'],
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
        outputs: [{ internalType: 'bytes32', name: '_0', type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'CLAIMANT_ROLE',
        outputs: [{ internalType: 'bytes32', name: '_0', type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'VERIFIER_ROLE',
        outputs: [{ internalType: 'bytes32', name: '_0', type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'minimumPayoutAmount',
            type: 'uint256',
            tags: ['decimals'],
            description:
              'The minimum amount of tokens the Bounty will pay out upon being claimed.',
          },
          {
            internalType: 'uint256',
            name: 'maximumPayoutAmount',
            type: 'uint256',
            tags: ['decimals'],
            description:
              'The maximum amount of tokens the Bounty will pay out upon being claimed.',
          },
          {
            internalType: 'bytes',
            name: 'details',
            type: 'bytes',
            tags: ['any'],
            description: "The Bounty's details.",
          },
        ],
        name: 'addBounty',
        outputs: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
            description: 'The newly added Bounty id.',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Adds a new Bounty.',
      },
      {
        inputs: [
          {
            internalType: 'uint256[]',
            name: 'minimumPayoutAmounts',
            type: 'uint256[]',
            description:
              'The array of minimum amount of tokens the Bounty will pay out upon being claimed',
          },
          {
            internalType: 'uint256[]',
            name: 'maximumPayoutAmounts',
            type: 'uint256[]',
            description:
              'The array of maximum amount of tokens the Bounty will pay out upon being claimed',
          },
          {
            internalType: 'bytes[]',
            name: 'detailArray',
            type: 'bytes[]',
            description: "The array of Bounty's details.",
          },
        ],
        name: 'addBountyBatch',
        outputs: [
          {
            internalType: 'uint256[]',
            name: 'ids',
            type: 'uint256[]',
            description: 'The newly added array of Bounty ids.',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Adds a new array of Bounties.',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'bountyId',
            type: 'uint256',
            description: 'The id of the bounty this claim belongs to.',
          },
          {
            components: [
              { internalType: 'address', name: 'addr', type: 'address' },
              {
                internalType: 'uint256',
                name: 'claimAmount',
                type: 'uint256',
                tags: ['decimals'],
              },
            ],
            internalType: 'struct ILM_PC_Bounties_v1.Contributor[]',
            name: 'contributors',
            type: 'tuple[]',
            description: 'The contributor information for the Claim.',
          },
          {
            internalType: 'bytes',
            name: 'details',
            type: 'bytes',
            tags: ['any'],
            description: "The Claim's details.",
          },
        ],
        name: 'addClaim',
        outputs: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
            description: "The newly added Claim's id.",
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Adds a new Claim.',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'token',
            type: 'address',
            description: 'The token in which the payment was made.',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            tags: ['decimals'],
            description: 'amount of tokens that have been paid out.',
          },
        ],
        name: 'amountPaid',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Notifies the PaymentClient, that tokens have been paid out accordingly.',
      },
      {
        inputs: [],
        name: 'collectPaymentOrders',
        outputs: [
          {
            components: [
              { internalType: 'address', name: 'recipient', type: 'address' },
              {
                internalType: 'address',
                name: 'paymentToken',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
                tags: ['decimals'],
              },
              { internalType: 'uint256', name: 'start', type: 'uint256' },
              { internalType: 'uint256', name: 'cliff', type: 'uint256' },
              { internalType: 'uint256', name: 'end', type: 'uint256' },
            ],
            internalType: 'struct IERC20PaymentClientBase_v1.PaymentOrder[]',
            name: '_0',
            type: 'tuple[]',
            description: 'list of payment orders.',
          },
          {
            internalType: 'address[]',
            name: '_1',
            type: 'address[]',
            description: 'list of token addresses.',
          },
          {
            internalType: 'uint256[]',
            name: '_2',
            type: 'uint256[]',
            description: 'list of amounts.',
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
                tags: ['decimals'],
              },
              {
                internalType: 'uint256',
                name: 'maximumPayoutAmount',
                type: 'uint256',
                tags: ['decimals'],
              },
              {
                internalType: 'bytes',
                name: 'details',
                type: 'bytes',
                tags: ['any'],
              },
              { internalType: 'bool', name: 'locked', type: 'bool' },
            ],
            internalType: 'struct ILM_PC_Bounties_v1.Bounty',
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
                    tags: ['decimals'],
                  },
                ],
                internalType: 'struct ILM_PC_Bounties_v1.Contributor[]',
                name: 'contributors',
                type: 'tuple[]',
              },
              {
                internalType: 'bytes',
                name: 'details',
                type: 'bytes',
                tags: ['any'],
              },
              { internalType: 'bool', name: 'claimed', type: 'bool' },
            ],
            internalType: 'struct ILM_PC_Bounties_v1.Claim',
            name: '_0',
            type: 'tuple',
            description: 'Claim with id `id`.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the Claim instance with id `id`.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to grant.',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
            description: 'The target address to grant the role to.',
          },
        ],
        name: 'grantModuleRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Grants a module role to a target address.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to grant.',
          },
          {
            internalType: 'address[]',
            name: 'targets',
            type: 'address[]',
            description: 'The target addresses to grant the role to.',
          },
        ],
        name: 'grantModuleRoleBatched',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Grants a module role to multiple target addresses.',
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
            internalType: 'contract IOrchestrator_v1',
            name: 'orchestrator_',
            type: 'address',
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
              {
                internalType: 'uint256',
                name: 'patchVersion',
                type: 'uint256',
              },
              { internalType: 'string', name: 'url', type: 'string' },
              { internalType: 'string', name: 'title', type: 'string' },
            ],
            internalType: 'struct IModule_v1.Metadata',
            name: 'metadata',
            type: 'tuple',
            description: "The module's metadata.",
          },
          { internalType: 'bytes', name: '', type: 'bytes' },
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
            description: 'True if Claim with id `id` exists, false otherwise.',
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
            description: 'True if Claim with id `id` exists, false otherwise.',
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
            description: 'bool Is the given address the trusted forwarder.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Checks if the provided address is the trusted forwarder.',
      },
      {
        inputs: [],
        name: 'listBountyIds',
        outputs: [
          {
            internalType: 'uint256[]',
            name: '_0',
            type: 'uint256[]',
            description: 'List of Bounty ids.',
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
            description: 'List of Claim ids.',
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
            description: 'claim ids are filtered by the contributor address.',
          },
        ],
        name: 'listClaimIdsForContributorAddress',
        outputs: [
          {
            internalType: 'uint256[]',
            name: '_0',
            type: 'uint256[]',
            description: 'List of Claim ids.',
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
            internalType: 'contract IOrchestrator_v1',
            name: '_0',
            type: 'address',
            description: "The module's {Orchestrator_1}.",
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          "Returns the module's {Orchestrator_v1} interface, {IOrchestrator_v1}.",
      },
      {
        inputs: [{ internalType: 'address', name: '_token', type: 'address' }],
        name: 'outstandingTokenAmount',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            tags: ['decimals'],
            description: 'total amount of token to pay.',
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
                internalType: 'address',
                name: 'paymentToken',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
                tags: ['decimals'],
              },
              { internalType: 'uint256', name: 'start', type: 'uint256' },
              { internalType: 'uint256', name: 'cliff', type: 'uint256' },
              { internalType: 'uint256', name: 'end', type: 'uint256' },
            ],
            internalType: 'struct IERC20PaymentClientBase_v1.PaymentOrder[]',
            name: '_0',
            type: 'tuple[]',
            description: 'list of payment orders.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the list of outstanding payment orders.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to revoke.',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
            description: 'The target address to revoke the role from.',
          },
        ],
        name: 'revokeModuleRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Revokes a module role from a target address.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to revoke.',
          },
          {
            internalType: 'address[]',
            name: 'targets',
            type: 'address[]',
            description: 'The target addresses to revoke the role from.',
          },
        ],
        name: 'revokeModuleRoleBatched',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Revokes a module role from multiple target addresses.',
      },
      {
        inputs: [
          { internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' },
        ],
        name: 'supportsInterface',
        outputs: [{ internalType: 'bool', name: '_0', type: 'bool' }],
        stateMutability: 'view',
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
        inputs: [],
        name: 'trustedForwarder',
        outputs: [
          {
            internalType: 'address',
            name: '_0',
            type: 'address',
            description: 'address The trusted forwarder.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the trusted forwarder.',
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
            tags: ['any'],
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
              {
                internalType: 'uint256',
                name: 'claimAmount',
                type: 'uint256',
                tags: ['decimals'],
              },
            ],
            internalType: 'struct ILM_PC_Bounties_v1.Contributor[]',
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
            tags: ['any'],
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
              {
                internalType: 'uint256',
                name: 'claimAmount',
                type: 'uint256',
                tags: ['decimals'],
              },
            ],
            internalType: 'struct ILM_PC_Bounties_v1.Contributor[]',
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
          {
            internalType: 'uint256',
            name: '_2',
            type: 'uint256',
            description: "The module's patch version.",
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: "Returns the module's version.",
      },
    ],
  },
  {
    name: 'LM_ManualExternalPriceSetter_v1',
    description:
      'This contract provides a manual price feed mechanism for token operations, allowing authorized users to set and update prices for both issuance (buying) and redemption (selling) operations.',
    moduleType: 'optionalModule',
    deploymentInputs: {
      configData: [
        {
          name: 'collateralToken_',
          type: 'address',
          description: 'The address of the collateral token',
        },
        {
          name: 'issuanceToken_',
          type: 'address',
          description: 'The address of the issuance token',
        },
      ],
    },
    abi: [
      { inputs: [], name: 'InvalidInitialization', type: 'error' },
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
      { inputs: [], name: 'Module__InvalidAddress', type: 'error' },
      { inputs: [], name: 'Module__InvalidMetadata', type: 'error' },
      { inputs: [], name: 'Module__InvalidOrchestratorAddress', type: 'error' },
      {
        inputs: [],
        name: 'Module__LM_ExternalPriceSetter__InvalidPrice',
        type: 'error',
      },
      { inputs: [], name: 'Module__OnlyCallableByOrchestrator', type: 'error' },
      {
        inputs: [],
        name: 'Module__OnlyCallableByPaymentClient',
        type: 'error',
      },
      { inputs: [], name: 'NotInitializing', type: 'error' },
      { inputs: [], name: 'OraclePrice__ZeroPrice', type: 'error' },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint64',
            name: 'version',
            type: 'uint64',
          },
        ],
        name: 'Initialized',
        type: 'event',
        outputs: [],
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint256',
            name: 'price',
            type: 'uint256',
            description: 'The price that was set',
          },
          {
            indexed: true,
            internalType: 'uint256',
            name: 'timestamp',
            type: 'uint256',
            description: 'The timestamp when the price was updated',
          },
        ],
        name: 'IssuancePriceSet',
        type: 'event',
        outputs: [],
        description: 'Emitted when an issuance price is set',
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
              'The address of the {Orchestrator_v1} the module is linked to.',
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
              {
                internalType: 'uint256',
                name: 'patchVersion',
                type: 'uint256',
              },
              { internalType: 'string', name: 'url', type: 'string' },
              { internalType: 'string', name: 'title', type: 'string' },
            ],
            indexed: false,
            internalType: 'struct IModule_v1.Metadata',
            name: 'metadata',
            type: 'tuple',
            description: 'The metadata of the module.',
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
            name: 'token',
            type: 'address',
            description: 'The token received as protocol fee.',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'treasury',
            type: 'address',
            description:
              'The protocol treasury address receiving the token fee amount.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'feeAmount',
            type: 'uint256',
            description: 'The fee amount transferred to the treasury.',
          },
        ],
        name: 'ProtocolFeeTransferred',
        type: 'event',
        outputs: [],
        description:
          'Event emitted when protocol fee has been transferred to the treasury.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint256',
            name: 'price',
            type: 'uint256',
            description: 'The price that was set',
          },
          {
            indexed: true,
            internalType: 'uint256',
            name: 'timestamp',
            type: 'uint256',
            description: 'The timestamp when the price was updated',
          },
        ],
        name: 'RedemptionPriceSet',
        type: 'event',
        outputs: [],
        description: 'Emitted when a redemption price is set',
      },
      {
        inputs: [],
        name: 'PRICE_SETTER_ROLE',
        outputs: [{ internalType: 'bytes32', name: '_0', type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
        description: 'Role identifier for accounts authorized to set prices',
      },
      {
        inputs: [],
        name: 'getPriceForIssuance',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            tags: ['decimals'],
            description:
              'price_ Current price in 18 decimals (collateral tokens per 1 issuance token)',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Gets current price for token issuance (buying tokens)',
      },
      {
        inputs: [],
        name: 'getPriceForRedemption',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            tags: ['decimals:extras:issuanceToken'],
            description:
              'price_ Current price in 18 decimals (collateral tokens per 1 issuance token)',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Gets current price for token redemption (selling tokens)',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to grant.',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
            description: 'The target address to grant the role to.',
          },
        ],
        name: 'grantModuleRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Grants a module role to a target address.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to grant.',
          },
          {
            internalType: 'address[]',
            name: 'targets',
            type: 'address[]',
            description: 'The target addresses to grant the role to.',
          },
        ],
        name: 'grantModuleRoleBatched',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Grants a module role to multiple target addresses.',
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
            internalType: 'contract IOrchestrator_v1',
            name: 'orchestrator_',
            type: 'address',
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
              {
                internalType: 'uint256',
                name: 'patchVersion',
                type: 'uint256',
              },
              { internalType: 'string', name: 'url', type: 'string' },
              { internalType: 'string', name: 'title', type: 'string' },
            ],
            internalType: 'struct IModule_v1.Metadata',
            name: 'metadata_',
            type: 'tuple',
          },
          { internalType: 'bytes', name: 'configData_', type: 'bytes' },
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
            description: 'bool Is the given address the trusted forwarder.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Checks if the provided address is the trusted forwarder.',
      },
      {
        inputs: [],
        name: 'orchestrator',
        outputs: [
          {
            internalType: 'contract IOrchestrator_v1',
            name: '_0',
            type: 'address',
            description: "The module's {Orchestrator_1}.",
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          "Returns the module's {Orchestrator_v1} interface, {IOrchestrator_v1}.",
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to revoke.',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
            description: 'The target address to revoke the role from.',
          },
        ],
        name: 'revokeModuleRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Revokes a module role from a target address.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to revoke.',
          },
          {
            internalType: 'address[]',
            name: 'targets',
            type: 'address[]',
            description: 'The target addresses to revoke the role from.',
          },
        ],
        name: 'revokeModuleRoleBatched',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Revokes a module role from multiple target addresses.',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'price_',
            type: 'uint256',
            tags: ['decimals'],
            description: 'The price to set',
          },
        ],
        name: 'setIssuancePrice',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Sets the issuance price',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'price_',
            type: 'uint256',
            tags: ['decimals:extras:issuanceToken'],
            description: 'The price to set',
          },
        ],
        name: 'setRedemptionPrice',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Sets the redemption price',
      },
      {
        inputs: [
          { internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' },
        ],
        name: 'supportsInterface',
        outputs: [{ internalType: 'bool', name: '_0', type: 'bool' }],
        stateMutability: 'view',
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
        inputs: [],
        name: 'trustedForwarder',
        outputs: [
          {
            internalType: 'address',
            name: '_0',
            type: 'address',
            description: 'address The trusted forwarder.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the trusted forwarder.',
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
          {
            internalType: 'uint256',
            name: '_2',
            type: 'uint256',
            description: "The module's patch version.",
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: "Returns the module's version.",
      },
    ],
  },
  {
    name: 'LM_PC_KPIRewarder_v1',
    description:
      'Provides a mechanism for distributing rewards to stakers based on Key Performance Indicators (KPIs).',
    moduleType: 'optionalModule',
    deploymentInputs: {
      configData: [
        {
          name: 'stakingTokenAddr',
          type: 'address',
          description: 'The token users stake to earn rewards.',
        },
        {
          name: 'currencyAddr',
          type: 'address',
          description:
            'The token the Optimistic Oracle will charge its fee in.',
        },
        {
          name: 'defaultBond',
          type: 'uint256',
          description: 'The default bond amount for assertions.',
        },
        {
          name: 'ooAddr',
          type: 'address',
          description: 'The address of the optimisitic oracle.',
        },
        {
          name: 'liveness',
          type: 'uint64',
          description:
            'How long (in seconds) a query to the oracle will be open for dispute.',
        },
      ],
    },
    abi: [
      {
        inputs: [{ internalType: 'address', name: 'target', type: 'address' }],
        name: 'AddressEmptyCode',
        type: 'error',
      },
      {
        inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
        name: 'AddressInsufficientBalance',
        type: 'error',
      },
      { inputs: [], name: 'FailedInnerCall', type: 'error' },
      { inputs: [], name: 'InvalidInitialization', type: 'error' },
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
      {
        inputs: [],
        name: 'Module__ERC20PaymentClientBase__ArrayLengthMismatch',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__ERC20PaymentClientBase__CallerNotAuthorized',
        type: 'error',
      },
      {
        inputs: [{ internalType: 'address', name: 'token', type: 'address' }],
        name: 'Module__ERC20PaymentClientBase__InsufficientFunds',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__ERC20PaymentClientBase__InvalidAmount',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__ERC20PaymentClientBase__InvalidPaymentOrder',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__ERC20PaymentClientBase__InvalidRecipient',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__ERC20PaymentClientBase__InvalidToken',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__ERC20PaymentClientBase__Invalidend',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__ERC20PaymentClientBase__TokenTransferFailed',
        type: 'error',
      },
      { inputs: [], name: 'Module__InvalidAddress', type: 'error' },
      { inputs: [], name: 'Module__InvalidMetadata', type: 'error' },
      { inputs: [], name: 'Module__InvalidOrchestratorAddress', type: 'error' },
      {
        inputs: [
          { internalType: 'bytes32', name: 'assertionId', type: 'bytes32' },
        ],
        name: 'Module__LM_PC_KPIRewarder_v1__AssertionNotStuck',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__LM_PC_KPIRewarder_v1__CannotStakeWhenAssertionPending',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__LM_PC_KPIRewarder_v1__InvalidKPINumber',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__LM_PC_KPIRewarder_v1__InvalidKPITrancheValues',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__LM_PC_KPIRewarder_v1__InvalidKPIValueLengths',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__LM_PC_KPIRewarder_v1__InvalidTrancheNumber',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__LM_PC_KPIRewarder_v1__ModuleCannotUseStakingTokenAsBond',
        type: 'error',
      },
      {
        inputs: [
          { internalType: 'bytes32', name: 'assertionId', type: 'bytes32' },
        ],
        name: 'Module__LM_PC_KPIRewarder_v1__NonExistentAssertionId',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__LM_PC_KPIRewarder_v1__UnresolvedAssertionExists',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__LM_PC_Staking_v1__InvalidDuration',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__LM_PC_Staking_v1__InvalidRewardRate',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__LM_PC_Staking_v1__InvalidStakingToken',
        type: 'error',
      },
      { inputs: [], name: 'Module__OnlyCallableByOrchestrator', type: 'error' },
      {
        inputs: [],
        name: 'Module__OnlyCallableByPaymentClient',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__OptimisticOracleIntegrator_InsufficientFundsToPayForBond',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__OptimisticOracleIntegrator__CallerNotOO',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__OptimisticOracleIntegrator__CurrencyBondTooLow',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__OptimisticOracleIntegrator__InvalidDefaultCurrency',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__OptimisticOracleIntegrator__InvalidDefaultLiveness',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__OptimisticOracleIntegrator__InvalidOOInstance',
        type: 'error',
      },
      { inputs: [], name: 'NotInitializing', type: 'error' },
      { inputs: [], name: 'ReentrancyGuardReentrantCall', type: 'error' },
      {
        inputs: [{ internalType: 'address', name: 'token', type: 'address' }],
        name: 'SafeERC20FailedOperation',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'dataId',
            type: 'bytes32',
            description: 'The dataId that was asserted.',
          },
          {
            indexed: false,
            internalType: 'bytes32',
            name: 'data',
            type: 'bytes32',
            description: 'The data that was asserted.',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'asserter',
            type: 'address',
            description: 'The address of the asserter.',
          },
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'assertionId',
            type: 'bytes32',
            description: 'The assertionId that was asserted.',
          },
        ],
        name: 'DataAsserted',
        type: 'event',
        outputs: [],
        description: 'Event emitted when data is asserted.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'bool',
            name: 'assertedTruthfully',
            type: 'bool',
            description: 'Whether the assertion was resolved as true or false.',
          },
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'dataId',
            type: 'bytes32',
            description: 'The dataId that was asserted.',
          },
          {
            indexed: false,
            internalType: 'bytes32',
            name: 'data',
            type: 'bytes32',
            description: 'The data that was asserted.',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'asserter',
            type: 'address',
            description: 'The address of the asserter.',
          },
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'assertionId',
            type: 'bytes32',
            description: 'The assertionId that was asserted.',
          },
        ],
        name: 'DataAssertionResolved',
        type: 'event',
        outputs: [],
        description: 'Event emitted when dataAssetiong is resolved.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'assertionId',
            type: 'bytes32',
          },
        ],
        name: 'DeletedStuckAssertion',
        type: 'event',
        outputs: [],
        description: 'Event emitted when a stuck assertion gets deleted.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'token',
            type: 'address',
            description: 'The token used for the deposit.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            description: 'The amount deposited.',
          },
        ],
        name: 'FeeFundsDeposited',
        type: 'event',
        outputs: [],
        description:
          'Event emitted when funds for paying the bonding fee are deposited into the contract.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint64',
            name: 'version',
            type: 'uint64',
          },
        ],
        name: 'Initialized',
        type: 'event',
        outputs: [],
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint256',
            name: 'KPI_Id',
            type: 'uint256',
            description: 'The id of the KPI.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'numOfTranches',
            type: 'uint256',
            description: 'The number of tranches in the KPI.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'totalKPIRewards',
            type: 'uint256',
            description: 'The total rewards for the KPI.',
          },
          {
            indexed: false,
            internalType: 'bool',
            name: 'continuous',
            type: 'bool',
            description: 'Whether the KPI is continuous or not.',
          },
          {
            indexed: false,
            internalType: 'uint256[]',
            name: 'trancheValues',
            type: 'uint256[]',
            description: 'The values at which each tranche ends.',
          },
          {
            indexed: false,
            internalType: 'uint256[]',
            name: 'trancheRewards',
            type: 'uint256[]',
            description:
              'The rewards to be distributed at completion of each tranche.',
          },
        ],
        name: 'KPICreated',
        type: 'event',
        outputs: [],
        description: 'Event emitted when a KPI is created.',
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
              'The address of the {Orchestrator_v1} the module is linked to.',
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
              {
                internalType: 'uint256',
                name: 'patchVersion',
                type: 'uint256',
              },
              { internalType: 'string', name: 'url', type: 'string' },
              { internalType: 'string', name: 'title', type: 'string' },
            ],
            indexed: false,
            internalType: 'struct IModule_v1.Metadata',
            name: 'metadata',
            type: 'tuple',
            description: 'The metadata of the module.',
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
            indexed: true,
            internalType: 'address',
            name: 'token',
            type: 'address',
            description: 'The token in which to pay.',
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
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'assertionId',
            type: 'bytes32',
            description: 'The id of the assertion.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'creationTime',
            type: 'uint256',
            description: 'The timestamp the assertion was created.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'assertedValue',
            type: 'uint256',
            description: 'The value that was asserted.',
          },
          {
            indexed: true,
            internalType: 'uint256',
            name: 'KpiToUse',
            type: 'uint256',
            description:
              'The KPI to be used for distribution once the assertion confirms.',
          },
        ],
        name: 'RewardRoundConfigured',
        type: 'event',
        outputs: [],
        description: 'Event emitted when a reward round is configured.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint256',
            name: 'rewardAmount',
            type: 'uint256',
            description: 'The amount of tokens to distribute.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'duration',
            type: 'uint256',
            description: 'The duration of the reward period.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'newRewardRate',
            type: 'uint256',
            description: 'The new reward rate.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'newRewardsEnd',
            type: 'uint256',
            description: 'The new timestamp of when the rewards will end.',
          },
        ],
        name: 'RewardSet',
        type: 'event',
        outputs: [],
        description: 'Event emitted when a reward is added.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'user',
            type: 'address',
            description: 'The address of the user.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            description: 'The amount of tokens earned.',
          },
        ],
        name: 'RewardsDistributed',
        type: 'event',
        outputs: [],
        description: 'Event emitted when a user receives Rewards.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'user',
            type: 'address',
            description: 'The address of the user.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            description: 'The amount of tokens staked.',
          },
        ],
        name: 'Staked',
        type: 'event',
        outputs: [],
        description: 'Event emitted when a user stakes an amount.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'token',
            type: 'address',
            description: 'Address of token that can be staked.',
          },
        ],
        name: 'StakingTokenSet',
        type: 'event',
        outputs: [],
        description: 'Event emitted when staking token is set.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'user',
            type: 'address',
            description: 'The address of the user.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            description: 'The amount of tokens unstaked.',
          },
        ],
        name: 'Unstaked',
        type: 'event',
        outputs: [],
        description: 'Event emitted when a user unstakes an amount.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'triggerAddress',
            type: 'address',
            description:
              'Address of user if state change was triggered by a staking action. Else can be zero.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'rewardValue',
            type: 'uint256',
            description:
              'Variable necessary to calculate how much rewards a staker is eligible for.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'lastUpdate',
            type: 'uint256',
            description: 'Timestamp of last state change.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'earnedRewards',
            type: 'uint256',
            description: 'How much a user earned up to point of state change.',
          },
        ],
        name: 'Updated',
        type: 'event',
        outputs: [],
        description: 'Event emitted for each major change of state.',
      },
      {
        inputs: [],
        name: 'ASSERTER_ROLE',
        outputs: [{ internalType: 'bytes32', name: '_0', type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'KPICounter',
        outputs: [{ internalType: 'uint256', name: '_0', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'token',
            type: 'address',
            description: 'The token in which the payment was made.',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            tags: ['decimals:params:indirect:token'],
            description: 'amount of tokens that have been paid out.',
          },
        ],
        name: 'amountPaid',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Notifies the PaymentClient, that tokens have been paid out accordingly.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'dataId',
            type: 'bytes32',
            description: 'The id of the data to assert.',
          },
          { internalType: 'bytes32', name: 'data_', type: 'bytes32' },
          {
            internalType: 'address',
            name: 'asserter',
            type: 'address',
            description:
              'The address doing the asserter. If zero defaults to _msgSender().',
          },
        ],
        name: 'assertDataFor',
        outputs: [
          {
            internalType: 'bytes32',
            name: 'assertionId',
            type: 'bytes32',
            description: 'The id of the generated Assertion.',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Asserts data for a specific dataId on behalf of an asserter address.',
      },
      {
        inputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
        name: 'assertionConfig',
        outputs: [
          { internalType: 'uint256', name: 'creationTime', type: 'uint256' },
          { internalType: 'uint256', name: 'assertedValue', type: 'uint256' },
          { internalType: 'uint256', name: 'KpiToUse', type: 'uint256' },
          { internalType: 'bool', name: 'distributed', type: 'bool' },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
        name: 'assertionData',
        outputs: [
          { internalType: 'bytes32', name: 'dataId', type: 'bytes32' },
          { internalType: 'bytes32', name: 'data', type: 'bytes32' },
          { internalType: 'address', name: 'asserter', type: 'address' },
          { internalType: 'bool', name: 'resolved', type: 'bool' },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'assertionId',
            type: 'bytes32',
            description: 'The identifier of the assertion that was disputed.',
          },
        ],
        name: 'assertionDisputedCallback',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Callback function that is called by Optimistic Oracle V3 when an assertion is disputed.',
      },
      {
        inputs: [],
        name: 'assertionLiveness',
        outputs: [{ internalType: 'uint64', name: '_0', type: 'uint64' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'assertionPending',
        outputs: [{ internalType: 'bool', name: '_0', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'assertionId',
            type: 'bytes32',
            description: 'The identifier of the assertion that was resolved.',
          },
          {
            internalType: 'bool',
            name: 'assertedTruthfully',
            type: 'bool',
            description:
              'Whether the assertion was resolved as truthful or not.',
          },
        ],
        name: 'assertionResolvedCallback',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Callback function that is called by Optimistic Oracle V3 when an assertion is resolved.',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'user',
            type: 'address',
            description: 'The address of a user that staked.',
          },
        ],
        name: 'balanceOf',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            tags: ['decimals:contract:indirect:stakingToken'],
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'Returns the amount of tokens a user staked in this contract.',
      },
      {
        inputs: [],
        name: 'claimRewards',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Collects the rewards that are earned up until now.',
      },
      {
        inputs: [],
        name: 'collectPaymentOrders',
        outputs: [
          {
            components: [
              { internalType: 'address', name: 'recipient', type: 'address' },
              {
                internalType: 'address',
                name: 'paymentToken',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
                tags: ['decimals:params:indirect:paymentToken'],
              },
              { internalType: 'uint256', name: 'start', type: 'uint256' },
              { internalType: 'uint256', name: 'cliff', type: 'uint256' },
              { internalType: 'uint256', name: 'end', type: 'uint256' },
            ],
            internalType: 'struct IERC20PaymentClientBase_v1.PaymentOrder[]',
            name: '_0',
            type: 'tuple[]',
            description: 'list of payment orders.',
          },
          {
            internalType: 'address[]',
            name: '_1',
            type: 'address[]',
            description: 'list of token addresses.',
          },
          {
            internalType: 'uint256[]',
            name: '_2',
            type: 'uint256[]',
            description: 'list of amounts.',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Collects outstanding payment orders.',
      },
      {
        inputs: [
          {
            internalType: 'bool',
            name: '_continuous',
            type: 'bool',
            description:
              'Should the tranche rewards be distributed continuously or in steps.',
          },
          {
            internalType: 'uint256[]',
            name: '_trancheValues',
            type: 'uint256[]',
            description: 'The value at which the tranches end.',
          },
          {
            internalType: 'uint256[]',
            name: '_trancheRewards',
            type: 'uint256[]',
            description:
              'The rewards to be distributed at completion of each tranche.',
          },
        ],
        name: 'createKPI',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            description: 'The KPI id.',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Creates a KPI for the Rewarder.',
      },
      {
        inputs: [],
        name: 'defaultBond',
        outputs: [{ internalType: 'uint256', name: '_0', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'defaultCurrency',
        outputs: [
          { internalType: 'contract IERC20', name: '_0', type: 'address' },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'defaultIdentifier',
        outputs: [{ internalType: 'bytes32', name: '_0', type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'assertionId',
            type: 'bytes32',
            description: 'The id of the assertion to delete.',
          },
        ],
        name: 'deleteStuckAssertion',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Deletes a stuck assertion.',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            tags: ['decimals:contract:indirect:defaultCurrency', 'approval'],
            description: 'The amount to deposit.',
          },
        ],
        name: 'depositFeeFunds',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Deposits funds into the contract so it can pay for the oracle bond and fee itself.',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'user',
            type: 'address',
            description: 'The address of a user that staked.',
          },
        ],
        name: 'earned',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            tags: ['decimals'],
            description: 'The amount of tokens earned.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'Returns the amount of tokens earned up until now by the current stake of a user.',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            description: 'How much token are staked.',
          },
          {
            internalType: 'uint256',
            name: 'duration',
            type: 'uint256',
            tags: ['decimals'],
            description: 'How long the tokens will be staked.',
          },
        ],
        name: 'estimateReward',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            description: 'The estimated amount of tokens earned.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'Returns a estimation of how much rewards will be earned with the current state of the staking contract.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'assertionId',
            type: 'bytes32',
            description: 'The id of the Assertion to return.',
          },
        ],
        name: 'getAssertion',
        outputs: [
          {
            components: [
              { internalType: 'bytes32', name: 'dataId', type: 'bytes32' },
              { internalType: 'bytes32', name: 'data', type: 'bytes32' },
              { internalType: 'address', name: 'asserter', type: 'address' },
              { internalType: 'bool', name: 'resolved', type: 'bool' },
            ],
            internalType: 'struct IOptimisticOracleIntegrator.DataAssertion',
            name: '_0',
            type: 'tuple',
            description: 'DataAssertion The Assertion.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'For a given assertionId, returns the assserion itself.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'assertionId',
            type: 'bytes32',
            description: 'The id of the Assertion to return.',
          },
        ],
        name: 'getAssertionConfig',
        outputs: [
          {
            components: [
              {
                internalType: 'uint256',
                name: 'creationTime',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'assertedValue',
                type: 'uint256',
              },
              { internalType: 'uint256', name: 'KpiToUse', type: 'uint256' },
              { internalType: 'bool', name: 'distributed', type: 'bool' },
            ],
            internalType:
              'struct ILM_PC_KPIRewarder_v1.RewardRoundConfiguration',
            name: '_0',
            type: 'tuple',
            description: 'The Assertion Configuration.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'Returns the Assertion Configuration for a given assertionId.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'assertionId',
            type: 'bytes32',
            description: 'The id of the Assertion to return.',
          },
        ],
        name: 'getData',
        outputs: [
          {
            internalType: 'bool',
            name: '_0',
            type: 'bool',
            description: 'bool Wether the assertion is resolved.',
          },
          {
            internalType: 'bytes32',
            name: '_1',
            type: 'bytes32',
            description: 'bytes32 The Assertion Data.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'For a given assertionId, returns a boolean indicating whether the data is accessible and the data itself.',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'KPInum',
            type: 'uint256',
            description: 'The number of the KPI to return.',
          },
        ],
        name: 'getKPI',
        outputs: [
          {
            components: [
              {
                internalType: 'uint256',
                name: 'numOfTranches',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'totalRewards',
                type: 'uint256',
                tags: ['decimals'],
              },
              { internalType: 'bool', name: 'continuous', type: 'bool' },
              {
                internalType: 'uint256[]',
                name: 'trancheValues',
                type: 'uint256[]',
              },
              {
                internalType: 'uint256[]',
                name: 'trancheRewards',
                type: 'uint256[]',
              },
            ],
            internalType: 'struct ILM_PC_KPIRewarder_v1.KPI',
            name: '_0',
            type: 'tuple',
            description: 'The KPI.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the KPI with the given number.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to grant.',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
            description: 'The target address to grant the role to.',
          },
        ],
        name: 'grantModuleRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Grants a module role to a target address.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to grant.',
          },
          {
            internalType: 'address[]',
            name: 'targets',
            type: 'address[]',
            description: 'The target addresses to grant the role to.',
          },
        ],
        name: 'grantModuleRoleBatched',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Grants a module role to multiple target addresses.',
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
            internalType: 'contract IOrchestrator_v1',
            name: 'orchestrator_',
            type: 'address',
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
              {
                internalType: 'uint256',
                name: 'patchVersion',
                type: 'uint256',
              },
              { internalType: 'string', name: 'url', type: 'string' },
              { internalType: 'string', name: 'title', type: 'string' },
            ],
            internalType: 'struct IModule_v1.Metadata',
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
            description: 'bool Is the given address the trusted forwarder.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Checks if the provided address is the trusted forwarder.',
      },
      {
        inputs: [],
        name: 'oo',
        outputs: [
          {
            internalType: 'contract OptimisticOracleV3Interface',
            name: '_0',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'orchestrator',
        outputs: [
          {
            internalType: 'contract IOrchestrator_v1',
            name: '_0',
            type: 'address',
            description: "The module's {Orchestrator_1}.",
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          "Returns the module's {Orchestrator_v1} interface, {IOrchestrator_v1}.",
      },
      {
        inputs: [{ internalType: 'address', name: '_token', type: 'address' }],
        name: 'outstandingTokenAmount',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            description: 'total amount of token to pay.',
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
                internalType: 'address',
                name: 'paymentToken',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
                tags: ['decimals:params:indirect:paymentToken'],
              },
              { internalType: 'uint256', name: 'start', type: 'uint256' },
              { internalType: 'uint256', name: 'cliff', type: 'uint256' },
              { internalType: 'uint256', name: 'end', type: 'uint256' },
            ],
            internalType: 'struct IERC20PaymentClientBase_v1.PaymentOrder[]',
            name: '_0',
            type: 'tuple[]',
            description: 'list of payment orders.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the list of outstanding payment orders.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'dataId',
            type: 'bytes32',
            description: 'The dataId to be posted.',
          },
          {
            internalType: 'uint256',
            name: 'assertedValue',
            type: 'uint256',
            description:
              'The target value that will be asserted and posted as data to the oracle.',
          },
          {
            internalType: 'address',
            name: 'asserter',
            type: 'address',
            description: 'The address of the asserter.',
          },
          {
            internalType: 'uint256',
            name: 'targetKPI',
            type: 'uint256',
            description:
              'The KPI to be used for distribution once the assertion confirms.',
          },
        ],
        name: 'postAssertion',
        outputs: [
          {
            internalType: 'bytes32',
            name: 'assertionId',
            type: 'bytes32',
            description: 'The assertionId received for the posted assertion.',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Posts an assertion to the Optimistic Oracle, specifying the KPI to use and the asserted value.',
      },
      {
        inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        name: 'registryOfKPIs',
        outputs: [
          { internalType: 'uint256', name: 'numOfTranches', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'totalRewards',
            type: 'uint256',
            tags: ['decimals'],
          },
          { internalType: 'bool', name: 'continuous', type: 'bool' },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to revoke.',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
            description: 'The target address to revoke the role from.',
          },
        ],
        name: 'revokeModuleRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Revokes a module role from a target address.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to revoke.',
          },
          {
            internalType: 'address[]',
            name: 'targets',
            type: 'address[]',
            description: 'The target addresses to revoke the role from.',
          },
        ],
        name: 'revokeModuleRoleBatched',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Revokes a module role from multiple target addresses.',
      },
      {
        inputs: [],
        name: 'rewardRate',
        outputs: [{ internalType: 'uint256', name: '_0', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'rewardsEnd',
        outputs: [{ internalType: 'uint256', name: '_0', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint64',
            name: '_newLiveness',
            type: 'uint64',
            description: 'The new liveness in seconds.',
          },
        ],
        name: 'setDefaultAssertionLiveness',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Sets the default time assertions will be open for dispute.',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '_newCurrency',
            type: 'address',
            description: 'The address of the new default currency.',
          },
          {
            internalType: 'uint256',
            name: '_newBond',
            type: 'uint256',
            description: 'The new bond amount.',
          },
        ],
        name: 'setDefaultCurrencyAndBond',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Sets the default currency and amount for the bond.',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '_newOO',
            type: 'address',
            description: 'The address of the new OptimisticOracleV3 instance.',
          },
        ],
        name: 'setOptimisticOracle',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Sets the OptimisticOracleV3 instance where assertions will be published to.',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            tags: ['decimals'],
            description: 'How much token should be distributed.',
          },
          {
            internalType: 'uint256',
            name: 'duration',
            type: 'uint256',
            description: 'How much time it will take to distribute the token.',
          },
        ],
        name: 'setRewards',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Sets the rewards that are to be distributed.',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            tags: ['decimals:contract:indirect:stakingToken', 'approval'],
            description: 'How much token should be staked.',
          },
        ],
        name: 'stake',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Stake a specified amount of tokens to earn rewards.',
      },
      {
        inputs: [],
        name: 'stakingToken',
        outputs: [{ internalType: 'address', name: '_0', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' },
        ],
        name: 'supportsInterface',
        outputs: [{ internalType: 'bool', name: '_0', type: 'bool' }],
        stateMutability: 'view',
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
        inputs: [],
        name: 'totalSupply',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            tags: ['decimals:contract:indirect:stakingToken'],
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'trustedForwarder',
        outputs: [
          {
            internalType: 'address',
            name: '_0',
            type: 'address',
            description: 'address The trusted forwarder.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the trusted forwarder.',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            tags: ['decimals:contract:indirect:stakingToken'],
            description: 'How much token should be unstaked.',
          },
        ],
        name: 'unstake',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Unstake a specified amount of tokens and collect rewards.',
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
          {
            internalType: 'uint256',
            name: '_2',
            type: 'uint256',
            description: "The module's patch version.",
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: "Returns the module's version.",
      },
    ],
  },
  {
    name: 'AUT_EXT_VotingRoles_v1',
    description:
      'Facilitates voting and motion management within the Inverter Network, allowing designated voters to participate in governance through proposals, voting, and execution of decisions.',
    moduleType: 'optionalModule',
    deploymentInputs: {
      configData: [
        {
          name: 'voters',
          type: 'address[]',
          description: 'An array of addresses which are the eligible voters.',
        },
        {
          name: 'threshold',
          type: 'uint256',
          description:
            'The amount of voters that are needed for a vote to pass.',
        },
        {
          name: 'voteDuration',
          type: 'uint256',
          description:
            'The duration of a vote. Needs to be more than 1 day but less than 2 weeks.',
        },
      ],
    },
    abi: [
      { inputs: [], name: 'InvalidInitialization', type: 'error' },
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
      { inputs: [], name: 'Module__InvalidAddress', type: 'error' },
      { inputs: [], name: 'Module__InvalidMetadata', type: 'error' },
      { inputs: [], name: 'Module__InvalidOrchestratorAddress', type: 'error' },
      { inputs: [], name: 'Module__OnlyCallableByOrchestrator', type: 'error' },
      {
        inputs: [],
        name: 'Module__OnlyCallableByPaymentClient',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__VotingRoleManager__AttemptedDoubleVote',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__VotingRoleManager__CallerNotVoter',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__VotingRoleManager__EmptyVoters',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__VotingRoleManager__InvalidMotionId',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__VotingRoleManager__InvalidSupport',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__VotingRoleManager__InvalidThreshold',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__VotingRoleManager__InvalidVoterAddress',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__VotingRoleManager__InvalidVotingDuration',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__VotingRoleManager__IsAlreadyVoter',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__VotingRoleManager__MotionAlreadyExecuted',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__VotingRoleManager__MotionInVotingPhase',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__VotingRoleManager__MotionVotingPhaseClosed',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__VotingRoleManager__ThresholdNotReached',
        type: 'error',
      },
      { inputs: [], name: 'NotInitializing', type: 'error' },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint64',
            name: 'version',
            type: 'uint64',
          },
        ],
        name: 'Initialized',
        type: 'event',
        outputs: [],
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
              'The address of the {Orchestrator_v1} the module is linked to.',
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
              {
                internalType: 'uint256',
                name: 'patchVersion',
                type: 'uint256',
              },
              { internalType: 'string', name: 'url', type: 'string' },
              { internalType: 'string', name: 'title', type: 'string' },
            ],
            indexed: false,
            internalType: 'struct IModule_v1.Metadata',
            name: 'metadata',
            type: 'tuple',
            description: 'The metadata of the module.',
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
            internalType: 'bytes32',
            name: 'motionId',
            type: 'bytes32',
            description: 'The motion ID.',
          },
        ],
        name: 'MotionCreated',
        type: 'event',
        outputs: [],
        description: 'Event emitted when a motion is created.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'motionId',
            type: 'bytes32',
            description: 'The motion ID.',
          },
        ],
        name: 'MotionExecuted',
        type: 'event',
        outputs: [],
        description: 'Event emitted when a motion is executed.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint256',
            name: 'oldThreshold',
            type: 'uint256',
            description: 'The old threshold.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'newThreshold',
            type: 'uint256',
            description: 'The new threshold.',
          },
        ],
        name: 'ThresholdUpdated',
        type: 'event',
        outputs: [],
        description: 'Event emitted when the required threshold changes.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'motionId',
            type: 'bytes32',
            description:
              'Value that indicates how the voter supports the motion.',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'voter',
            type: 'address',
            description: 'The address of a voter.',
          },
          {
            indexed: true,
            internalType: 'uint8',
            name: 'support',
            type: 'uint8',
          },
        ],
        name: 'VoteCast',
        type: 'event',
        outputs: [],
        description: 'Event emitted when a vote is cast for a motion.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint256',
            name: 'oldVotingDuration',
            type: 'uint256',
            description: 'The old voting duration.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'newVotingDuration',
            type: 'uint256',
            description: 'The new voting duration.',
          },
        ],
        name: 'VoteDurationUpdated',
        type: 'event',
        outputs: [],
        description: 'Event emitted when the voting duration changes.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'who',
            type: 'address',
            description: 'The added address.',
          },
        ],
        name: 'VoterAdded',
        type: 'event',
        outputs: [],
        description: 'Event emitted when a new voter address gets added.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'who',
            type: 'address',
            description: 'The removed address.',
          },
        ],
        name: 'VoterRemoved',
        type: 'event',
        outputs: [],
        description: 'Event emitted when a voter address gets removed.',
      },
      {
        inputs: [],
        name: 'MAX_VOTING_DURATION',
        outputs: [{ internalType: 'uint256', name: '_0', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
        description: 'The maximum voting duration.',
      },
      {
        inputs: [],
        name: 'MIN_VOTING_DURATION',
        outputs: [{ internalType: 'uint256', name: '_0', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
        description: 'The minimum voting duration.',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'who',
            type: 'address',
            description: 'The address to add.',
          },
        ],
        name: 'addVoter',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Adds a voter.',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'who',
            type: 'address',
            description: 'The address to add.',
          },
          {
            internalType: 'uint256',
            name: 'newThreshold',
            type: 'uint256',
            description: 'The new threshold.',
          },
        ],
        name: 'addVoterAndUpdateThreshold',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Adds a voter and updates the threshold.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'motionId',
            type: 'bytes32',
            description: 'The ID of the motion.',
          },
          {
            internalType: 'uint8',
            name: 'support',
            type: 'uint8',
            description:
              'The value that indicates wether the voter supports the motion.',
          },
        ],
        name: 'castVote',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Casts a vote for a motion.',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
            description:
              'The address of the contract to execute the action on.',
          },
          {
            internalType: 'bytes',
            name: 'action',
            type: 'bytes',
            description: 'The action data to execute on the target contract.',
          },
        ],
        name: 'createMotion',
        outputs: [
          {
            internalType: 'bytes32',
            name: '_0',
            type: 'bytes32',
            description: 'The ID of the created motion.',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Creates a motion.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'motionId',
            type: 'bytes32',
            description: 'The ID of the motion.',
          },
        ],
        name: 'executeMotion',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Executes a motion.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: '_ID',
            type: 'bytes32',
            description: 'The ID of the motion.',
          },
          {
            internalType: 'address',
            name: 'voter',
            type: 'address',
            description: 'The address of the voter.',
          },
        ],
        name: 'getReceipt',
        outputs: [
          {
            components: [
              { internalType: 'bool', name: 'hasVoted', type: 'bool' },
              { internalType: 'uint8', name: 'support', type: 'uint8' },
            ],
            internalType: 'struct IAUT_EXT_VotingRoles_v1.Receipt',
            name: '_0',
            type: 'tuple',
            description: 'The receipt of the voter.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Gets the receipt of a voter for a motion.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to grant.',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
            description: 'The target address to grant the role to.',
          },
        ],
        name: 'grantModuleRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Grants a module role to a target address.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to grant.',
          },
          {
            internalType: 'address[]',
            name: 'targets',
            type: 'address[]',
            description: 'The target addresses to grant the role to.',
          },
        ],
        name: 'grantModuleRoleBatched',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Grants a module role to multiple target addresses.',
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
            internalType: 'contract IOrchestrator_v1',
            name: 'orchestrator_',
            type: 'address',
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
              {
                internalType: 'uint256',
                name: 'patchVersion',
                type: 'uint256',
              },
              { internalType: 'string', name: 'url', type: 'string' },
              { internalType: 'string', name: 'title', type: 'string' },
            ],
            internalType: 'struct IModule_v1.Metadata',
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
            description: 'bool Is the given address the trusted forwarder.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Checks if the provided address is the trusted forwarder.',
      },
      {
        inputs: [{ internalType: 'address', name: '', type: 'address' }],
        name: 'isVoter',
        outputs: [{ internalType: 'bool', name: '_0', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
        description: 'Checks whether an address is a voter.',
      },
      {
        inputs: [],
        name: 'motionCount',
        outputs: [{ internalType: 'uint256', name: '_0', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
        description: 'Gets the number of motions.',
      },
      {
        inputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
        name: 'motions',
        outputs: [
          { internalType: 'address', name: 'target', type: 'address' },
          { internalType: 'bytes', name: 'action', type: 'bytes' },
          { internalType: 'uint256', name: 'startTimestamp', type: 'uint256' },
          { internalType: 'uint256', name: 'endTimestamp', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'requiredThreshold',
            type: 'uint256',
          },
          { internalType: 'uint256', name: 'forVotes', type: 'uint256' },
          { internalType: 'uint256', name: 'againstVotes', type: 'uint256' },
          { internalType: 'uint256', name: 'abstainVotes', type: 'uint256' },
          { internalType: 'uint256', name: 'executedAt', type: 'uint256' },
          { internalType: 'bool', name: 'executionResult', type: 'bool' },
          { internalType: 'bytes', name: 'executionReturnData', type: 'bytes' },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Gets the motion data.',
      },
      {
        inputs: [],
        name: 'orchestrator',
        outputs: [
          {
            internalType: 'contract IOrchestrator_v1',
            name: '_0',
            type: 'address',
            description: "The module's {Orchestrator_1}.",
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          "Returns the module's {Orchestrator_v1} interface, {IOrchestrator_v1}.",
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'who',
            type: 'address',
            description: 'The address to remove.',
          },
        ],
        name: 'removeVoter',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Removes a voter.',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'who',
            type: 'address',
            description: 'The address to remove.',
          },
          {
            internalType: 'uint256',
            name: 'newThreshold',
            type: 'uint256',
            description: 'The new threshold.',
          },
        ],
        name: 'removeVoterAndUpdateThreshold',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Removes a voter and updates the threshold.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to revoke.',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
            description: 'The target address to revoke the role from.',
          },
        ],
        name: 'revokeModuleRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Revokes a module role from a target address.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to revoke.',
          },
          {
            internalType: 'address[]',
            name: 'targets',
            type: 'address[]',
            description: 'The target addresses to revoke the role from.',
          },
        ],
        name: 'revokeModuleRoleBatched',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Revokes a module role from multiple target addresses.',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'newThreshold',
            type: 'uint256',
            description: 'The new threshold.',
          },
        ],
        name: 'setThreshold',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Sets the threshold.',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'newVoteDuration',
            type: 'uint256',
            description: 'The new voting duration.',
          },
        ],
        name: 'setVotingDuration',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Sets the voting duration.',
      },
      {
        inputs: [
          { internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' },
        ],
        name: 'supportsInterface',
        outputs: [{ internalType: 'bool', name: '_0', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'threshold',
        outputs: [{ internalType: 'uint256', name: '_0', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
        description: 'Gets the threshold.',
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
        name: 'trustedForwarder',
        outputs: [
          {
            internalType: 'address',
            name: '_0',
            type: 'address',
            description: 'address The trusted forwarder.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the trusted forwarder.',
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
          {
            internalType: 'uint256',
            name: '_2',
            type: 'uint256',
            description: "The module's patch version.",
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: "Returns the module's version.",
      },
      {
        inputs: [],
        name: 'voteDuration',
        outputs: [{ internalType: 'uint256', name: '_0', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
        description: 'Gets the voting duration.',
      },
      {
        inputs: [],
        name: 'voterCount',
        outputs: [{ internalType: 'uint256', name: '_0', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
        description: 'Gets the number of voters.',
      },
    ],
  },
  {
    name: 'LM_PC_RecurringPayments_v1',
    description:
      'Facilitates the creation, management, and execution of scheduled recurring payments within the Inverter Network, allowing for systematic and timed financial commitments or subscriptions.',
    moduleType: 'optionalModule',
    deploymentInputs: {
      configData: [
        {
          name: 'epochLength',
          type: 'uint256',
          description:
            'The length of an epoch in seconds. This will be the common denominator for all payments, as these are specified in epochs (i.e. if an epoch is 1 week, vestings can be done for 1 week, 2 week, 3 week, etc.). Epoch needs to be greater than 1 week and smaller than 52 weeks',
        },
      ],
    },
    abi: [
      {
        inputs: [{ internalType: 'address', name: 'target', type: 'address' }],
        name: 'AddressEmptyCode',
        type: 'error',
      },
      {
        inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
        name: 'AddressInsufficientBalance',
        type: 'error',
      },
      { inputs: [], name: 'FailedInnerCall', type: 'error' },
      { inputs: [], name: 'InvalidInitialization', type: 'error' },
      {
        inputs: [],
        name: 'Library__LinkedIdList__IdNotConsecutive',
        type: 'error',
      },
      { inputs: [], name: 'Library__LinkedIdList__InvalidId', type: 'error' },
      {
        inputs: [],
        name: 'Library__LinkedIdList__InvalidNewId',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Library__LinkedIdList__InvalidPosition',
        type: 'error',
      },
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
      {
        inputs: [],
        name: 'Module__ERC20PaymentClientBase__ArrayLengthMismatch',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__ERC20PaymentClientBase__CallerNotAuthorized',
        type: 'error',
      },
      {
        inputs: [{ internalType: 'address', name: 'token', type: 'address' }],
        name: 'Module__ERC20PaymentClientBase__InsufficientFunds',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__ERC20PaymentClientBase__InvalidAmount',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__ERC20PaymentClientBase__InvalidPaymentOrder',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__ERC20PaymentClientBase__InvalidRecipient',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__ERC20PaymentClientBase__InvalidToken',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__ERC20PaymentClientBase__Invalidend',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__ERC20PaymentClientBase__TokenTransferFailed',
        type: 'error',
      },
      { inputs: [], name: 'Module__InvalidAddress', type: 'error' },
      { inputs: [], name: 'Module__InvalidMetadata', type: 'error' },
      { inputs: [], name: 'Module__InvalidOrchestratorAddress', type: 'error' },
      {
        inputs: [],
        name: 'Module__LM_PC_RecurringPayments__InvalidEpochLength',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__LM_PC_RecurringPayments__InvalidRecurringPaymentId',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__LM_PC_RecurringPayments__InvalidStartEpoch',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__LM_PC_RecurringPayments__StartIdNotBeforeEndId',
        type: 'error',
      },
      { inputs: [], name: 'Module__OnlyCallableByOrchestrator', type: 'error' },
      {
        inputs: [],
        name: 'Module__OnlyCallableByPaymentClient',
        type: 'error',
      },
      { inputs: [], name: 'NotInitializing', type: 'error' },
      {
        inputs: [{ internalType: 'address', name: 'token', type: 'address' }],
        name: 'SafeERC20FailedOperation',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint256',
            name: 'epochLength',
            type: 'uint256',
            description: 'The epoch length.',
          },
        ],
        name: 'EpochLengthSet',
        type: 'event',
        outputs: [],
        description: 'Event emitted when the epoch length is set.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint64',
            name: 'version',
            type: 'uint64',
          },
        ],
        name: 'Initialized',
        type: 'event',
        outputs: [],
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
              'The address of the {Orchestrator_v1} the module is linked to.',
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
              {
                internalType: 'uint256',
                name: 'patchVersion',
                type: 'uint256',
              },
              { internalType: 'string', name: 'url', type: 'string' },
              { internalType: 'string', name: 'title', type: 'string' },
            ],
            indexed: false,
            internalType: 'struct IModule_v1.Metadata',
            name: 'metadata',
            type: 'tuple',
            description: 'The metadata of the module.',
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
            indexed: true,
            internalType: 'address',
            name: 'token',
            type: 'address',
            description: 'The token in which to pay.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            tags: ['decimals'],
            description: 'The amount of tokens the payment consists of.',
          },
        ],
        name: 'PaymentOrderAdded',
        type: 'event',
        outputs: [],
        description: 'Added a payment order.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint256',
            name: 'recurringPaymentId',
            type: 'uint256',
            description: 'The id of the RecurringPayment.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            tags: ['decimals'],
            description:
              'The amount of tokens that should be sent to the recipient address.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'startEpoch',
            type: 'uint256',
            description: 'The epoch in which the payment starts.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'lastTriggeredEpoch',
            type: 'uint256',
            description: 'The epoch in which the payment was last triggered.',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'recipient',
            type: 'address',
            description: 'The recipient address that should receive tokens.',
          },
        ],
        name: 'RecurringPaymentAdded',
        type: 'event',
        outputs: [],
        description: 'Event emitted when a new recurring payment added.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint256',
            name: 'recurringPaymentId',
            type: 'uint256',
            description: 'The id of the RecurringPayment.',
          },
        ],
        name: 'RecurringPaymentRemoved',
        type: 'event',
        outputs: [],
        description: 'Event emitted when a recurring payment was removed.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint256',
            name: 'currentEpoch',
            type: 'uint256',
            description: 'The current epoch.',
          },
        ],
        name: 'RecurringPaymentsTriggered',
        type: 'event',
        outputs: [],
        description: 'Event emitted when a recurring payment was triggered.',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            tags: ['decimals'],
            description: 'Amount of tokens send to the recipient address.',
          },
          {
            internalType: 'uint256',
            name: 'startEpoch',
            type: 'uint256',
            description:
              'Epoch in which the payment starts. Use getEpochFromTimestamp() or getCurrentEpoch() to get the appropriate epoch.',
          },
          {
            internalType: 'address',
            name: 'recipient',
            type: 'address',
            description: 'Recipient address that should receive tokens.',
          },
        ],
        name: 'addRecurringPayment',
        outputs: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
            description: 'Id of the newly created recurring payment.',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Adds a recurring payment to the manager.',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'token',
            type: 'address',
            description: 'The token in which the payment was made.',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            tags: ['decimals'],
            description: 'amount of tokens that have been paid out.',
          },
        ],
        name: 'amountPaid',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Notifies the PaymentClient, that tokens have been paid out accordingly.',
      },
      {
        inputs: [],
        name: 'collectPaymentOrders',
        outputs: [
          {
            components: [
              { internalType: 'address', name: 'recipient', type: 'address' },
              {
                internalType: 'address',
                name: 'paymentToken',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
                tags: ['decimals'],
              },
              { internalType: 'uint256', name: 'start', type: 'uint256' },
              { internalType: 'uint256', name: 'cliff', type: 'uint256' },
              { internalType: 'uint256', name: 'end', type: 'uint256' },
            ],
            internalType: 'struct IERC20PaymentClientBase_v1.PaymentOrder[]',
            name: '_0',
            type: 'tuple[]',
            description: 'list of payment orders.',
          },
          {
            internalType: 'address[]',
            name: '_1',
            type: 'address[]',
            description: 'list of token addresses.',
          },
          {
            internalType: 'uint256[]',
            name: '_2',
            type: 'uint256[]',
            description: 'list of amounts.',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Collects outstanding payment orders.',
      },
      {
        inputs: [],
        name: 'getCurrentEpoch',
        outputs: [
          {
            internalType: 'uint256',
            name: 'epoch',
            type: 'uint256',
            description:
              'Epoch in which current timestamp (block.timestamp) belongs to.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Calculates the current epoch.',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'timestamp',
            type: 'uint256',
            description: 'A timestamp in a uint format.',
          },
        ],
        name: 'getEpochFromTimestamp',
        outputs: [
          {
            internalType: 'uint256',
            name: 'epoch',
            type: 'uint256',
            description: 'Epoch in which timestamp belongs to.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Calculates the epoch from a given uint timestamp.',
      },
      {
        inputs: [],
        name: 'getEpochLength',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            description: 'Length of an epoch in a uint timestamp.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the length of an epoch.',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'xEpochsInTheFuture',
            type: 'uint256',
            description: 'How many epochs from the current epoch.',
          },
        ],
        name: 'getFutureEpoch',
        outputs: [
          {
            internalType: 'uint256',
            name: 'futureEpoch',
            type: 'uint256',
            description: 'Epoch in the future.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Calculates a future epoch x epochs from now.',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
            description: 'The id of the RecurringPayment to return.',
          },
        ],
        name: 'getPreviousPaymentId',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            description: 'The id of previous RecurringPayment.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the id of previous RecurringPayment.',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
            description: 'The id of the RecurringPayment to return.',
          },
        ],
        name: 'getRecurringPaymentInformation',
        outputs: [
          {
            components: [
              {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
                tags: ['decimals'],
              },
              { internalType: 'uint256', name: 'startEpoch', type: 'uint256' },
              {
                internalType: 'uint256',
                name: 'lastTriggeredEpoch',
                type: 'uint256',
              },
              { internalType: 'address', name: 'recipient', type: 'address' },
            ],
            internalType: 'struct ILM_PC_RecurringPayments_v1.RecurringPayment',
            name: '_0',
            type: 'tuple',
            description: 'RecurringPayment with id `id`.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the RecurringPayment instance with id `id`.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to grant.',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
            description: 'The target address to grant the role to.',
          },
        ],
        name: 'grantModuleRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Grants a module role to a target address.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to grant.',
          },
          {
            internalType: 'address[]',
            name: 'targets',
            type: 'address[]',
            description: 'The target addresses to grant the role to.',
          },
        ],
        name: 'grantModuleRoleBatched',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Grants a module role to multiple target addresses.',
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
            internalType: 'contract IOrchestrator_v1',
            name: 'orchestrator_',
            type: 'address',
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
              {
                internalType: 'uint256',
                name: 'patchVersion',
                type: 'uint256',
              },
              { internalType: 'string', name: 'url', type: 'string' },
              { internalType: 'string', name: 'title', type: 'string' },
            ],
            internalType: 'struct IModule_v1.Metadata',
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
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
            description: 'The id of the RecurringPayment to test.',
          },
        ],
        name: 'isExistingRecurringPaymentId',
        outputs: [
          {
            internalType: 'bool',
            name: '_0',
            type: 'bool',
            description:
              'True if RecurringPayment with id `id` exists, false otherwise.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns whether RecurringPayment with id `id` exists.',
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
            description: 'bool Is the given address the trusted forwarder.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Checks if the provided address is the trusted forwarder.',
      },
      {
        inputs: [],
        name: 'listRecurringPaymentIds',
        outputs: [
          {
            internalType: 'uint256[]',
            name: '_0',
            type: 'uint256[]',
            description: 'List of RecurringPayment ids.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns total list of RecurringPayment ids.',
      },
      {
        inputs: [],
        name: 'orchestrator',
        outputs: [
          {
            internalType: 'contract IOrchestrator_v1',
            name: '_0',
            type: 'address',
            description: "The module's {Orchestrator_1}.",
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          "Returns the module's {Orchestrator_v1} interface, {IOrchestrator_v1}.",
      },
      {
        inputs: [{ internalType: 'address', name: '_token', type: 'address' }],
        name: 'outstandingTokenAmount',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            tags: ['decimals'],
            description: 'total amount of token to pay.',
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
                internalType: 'address',
                name: 'paymentToken',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
                tags: ['decimals'],
              },
              { internalType: 'uint256', name: 'start', type: 'uint256' },
              { internalType: 'uint256', name: 'cliff', type: 'uint256' },
              { internalType: 'uint256', name: 'end', type: 'uint256' },
            ],
            internalType: 'struct IERC20PaymentClientBase_v1.PaymentOrder[]',
            name: '_0',
            type: 'tuple[]',
            description: 'list of payment orders.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the list of outstanding payment orders.',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'prevId',
            type: 'uint256',
            description:
              'Id of the previous recurring payment in the payment list.',
          },
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
            description: 'Id of the recurring payment that is to be removed.',
          },
        ],
        name: 'removeRecurringPayment',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Removes a recurring Payment.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to revoke.',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
            description: 'The target address to revoke the role from.',
          },
        ],
        name: 'revokeModuleRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Revokes a module role from a target address.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to revoke.',
          },
          {
            internalType: 'address[]',
            name: 'targets',
            type: 'address[]',
            description: 'The target addresses to revoke the role from.',
          },
        ],
        name: 'revokeModuleRoleBatched',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Revokes a module role from multiple target addresses.',
      },
      {
        inputs: [
          { internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' },
        ],
        name: 'supportsInterface',
        outputs: [{ internalType: 'bool', name: '_0', type: 'bool' }],
        stateMutability: 'view',
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
        inputs: [],
        name: 'trigger',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Triggers the start of the due payments for all recurring payment orders.',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'startId',
            type: 'uint256',
            description:
              ': id of start position of the recurring payments that should be triggered.',
          },
          {
            internalType: 'uint256',
            name: 'endId',
            type: 'uint256',
            description:
              ': id of end position of the recurring payments that should be triggered.',
          },
        ],
        name: 'triggerFor',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'See trigger() but enables you to determine which ids you want to trigger payment ordes for.',
      },
      {
        inputs: [],
        name: 'trustedForwarder',
        outputs: [
          {
            internalType: 'address',
            name: '_0',
            type: 'address',
            description: 'address The trusted forwarder.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the trusted forwarder.',
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
          {
            internalType: 'uint256',
            name: '_2',
            type: 'uint256',
            description: "The module's patch version.",
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: "Returns the module's version.",
      },
    ],
  },
  {
    name: 'LM_PC_PaymentRouter_v1',
    description:
      'This module enables pushing payments directly to the Payment Processor.',
    moduleType: 'optionalModule',
    deploymentInputs: { configData: [] },
    abi: [
      {
        inputs: [{ internalType: 'address', name: 'target', type: 'address' }],
        name: 'AddressEmptyCode',
        type: 'error',
      },
      {
        inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
        name: 'AddressInsufficientBalance',
        type: 'error',
      },
      { inputs: [], name: 'FailedInnerCall', type: 'error' },
      { inputs: [], name: 'InvalidInitialization', type: 'error' },
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
      {
        inputs: [],
        name: 'Module__ERC20PaymentClientBase__ArrayLengthMismatch',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__ERC20PaymentClientBase__CallerNotAuthorized',
        type: 'error',
      },
      {
        inputs: [{ internalType: 'address', name: 'token', type: 'address' }],
        name: 'Module__ERC20PaymentClientBase__InsufficientFunds',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__ERC20PaymentClientBase__InvalidAmount',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__ERC20PaymentClientBase__InvalidPaymentOrder',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__ERC20PaymentClientBase__InvalidRecipient',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__ERC20PaymentClientBase__InvalidToken',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__ERC20PaymentClientBase__Invalidend',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__ERC20PaymentClientBase__TokenTransferFailed',
        type: 'error',
      },
      { inputs: [], name: 'Module__InvalidAddress', type: 'error' },
      { inputs: [], name: 'Module__InvalidMetadata', type: 'error' },
      { inputs: [], name: 'Module__InvalidOrchestratorAddress', type: 'error' },
      { inputs: [], name: 'Module__OnlyCallableByOrchestrator', type: 'error' },
      {
        inputs: [],
        name: 'Module__OnlyCallableByPaymentClient',
        type: 'error',
      },
      { inputs: [], name: 'NotInitializing', type: 'error' },
      {
        inputs: [{ internalType: 'address', name: 'token', type: 'address' }],
        name: 'SafeERC20FailedOperation',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint64',
            name: 'version',
            type: 'uint64',
          },
        ],
        name: 'Initialized',
        type: 'event',
        outputs: [],
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
              'The address of the {Orchestrator_v1} the module is linked to.',
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
              {
                internalType: 'uint256',
                name: 'patchVersion',
                type: 'uint256',
              },
              { internalType: 'string', name: 'url', type: 'string' },
              { internalType: 'string', name: 'title', type: 'string' },
            ],
            indexed: false,
            internalType: 'struct IModule_v1.Metadata',
            name: 'metadata',
            type: 'tuple',
            description: 'The metadata of the module.',
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
            indexed: true,
            internalType: 'address',
            name: 'token',
            type: 'address',
            description: 'The token in which to pay.',
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
        name: 'PAYMENT_PUSHER_ROLE',
        outputs: [{ internalType: 'bytes32', name: '_0', type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'token',
            type: 'address',
            description: 'The token in which the payment was made.',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            description: 'amount of tokens that have been paid out.',
          },
        ],
        name: 'amountPaid',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Notifies the PaymentClient, that tokens have been paid out accordingly.',
      },
      {
        inputs: [],
        name: 'collectPaymentOrders',
        outputs: [
          {
            components: [
              { internalType: 'address', name: 'recipient', type: 'address' },
              {
                internalType: 'address',
                name: 'paymentToken',
                type: 'address',
              },
              { internalType: 'uint256', name: 'amount', type: 'uint256' },
              { internalType: 'uint256', name: 'start', type: 'uint256' },
              { internalType: 'uint256', name: 'cliff', type: 'uint256' },
              { internalType: 'uint256', name: 'end', type: 'uint256' },
            ],
            internalType: 'struct IERC20PaymentClientBase_v1.PaymentOrder[]',
            name: '_0',
            type: 'tuple[]',
            description: 'list of payment orders.',
          },
          {
            internalType: 'address[]',
            name: '_1',
            type: 'address[]',
            description: 'list of token addresses.',
          },
          {
            internalType: 'uint256[]',
            name: '_2',
            type: 'uint256[]',
            description: 'list of amounts.',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Collects outstanding payment orders.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to grant.',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
            description: 'The target address to grant the role to.',
          },
        ],
        name: 'grantModuleRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Grants a module role to a target address.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to grant.',
          },
          {
            internalType: 'address[]',
            name: 'targets',
            type: 'address[]',
            description: 'The target addresses to grant the role to.',
          },
        ],
        name: 'grantModuleRoleBatched',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Grants a module role to multiple target addresses.',
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
            internalType: 'contract IOrchestrator_v1',
            name: 'orchestrator_',
            type: 'address',
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
              {
                internalType: 'uint256',
                name: 'patchVersion',
                type: 'uint256',
              },
              { internalType: 'string', name: 'url', type: 'string' },
              { internalType: 'string', name: 'title', type: 'string' },
            ],
            internalType: 'struct IModule_v1.Metadata',
            name: 'metadata',
            type: 'tuple',
            description: "The module's metadata.",
          },
          { internalType: 'bytes', name: '', type: 'bytes' },
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
            description: 'bool Is the given address the trusted forwarder.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Checks if the provided address is the trusted forwarder.',
      },
      {
        inputs: [],
        name: 'orchestrator',
        outputs: [
          {
            internalType: 'contract IOrchestrator_v1',
            name: '_0',
            type: 'address',
            description: "The module's {Orchestrator_1}.",
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          "Returns the module's {Orchestrator_v1} interface, {IOrchestrator_v1}.",
      },
      {
        inputs: [{ internalType: 'address', name: '_token', type: 'address' }],
        name: 'outstandingTokenAmount',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            description: 'total amount of token to pay.',
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
                internalType: 'address',
                name: 'paymentToken',
                type: 'address',
              },
              { internalType: 'uint256', name: 'amount', type: 'uint256' },
              { internalType: 'uint256', name: 'start', type: 'uint256' },
              { internalType: 'uint256', name: 'cliff', type: 'uint256' },
              { internalType: 'uint256', name: 'end', type: 'uint256' },
            ],
            internalType: 'struct IERC20PaymentClientBase_v1.PaymentOrder[]',
            name: '_0',
            type: 'tuple[]',
            description: 'list of payment orders.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the list of outstanding payment orders.',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'recipient',
            type: 'address',
            description: 'The address that will receive the payment.',
          },
          {
            internalType: 'address',
            name: 'paymentToken',
            type: 'address',
            description: 'The token in which to pay.',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            description: 'The amount of tokens the payment consists of.',
          },
          {
            internalType: 'uint256',
            name: 'start',
            type: 'uint256',
            description:
              'The timestamp at which the payment SHOULD be fulfilled.',
          },
          {
            internalType: 'uint256',
            name: 'cliff',
            type: 'uint256',
            description: 'The duration of the payment cliff.',
          },
          {
            internalType: 'uint256',
            name: 'end',
            type: 'uint256',
            description:
              'The timestamp at which the payment SHOULD be fulfilled.',
          },
        ],
        name: 'pushPayment',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Adds a new Payment Order.',
      },
      {
        inputs: [
          {
            internalType: 'uint8',
            name: 'numOfOrders',
            type: 'uint8',
            description: 'The number of orders to add.',
          },
          {
            internalType: 'address[]',
            name: 'recipients',
            type: 'address[]',
            description: 'The addresses that will receive the payments.',
          },
          {
            internalType: 'address[]',
            name: 'paymentTokens',
            type: 'address[]',
            description: 'The tokens in which to pay.',
          },
          {
            internalType: 'uint256[]',
            name: 'amounts',
            type: 'uint256[]',
            description: 'The amounts of tokens the payments consist of.',
          },
          {
            internalType: 'uint256',
            name: 'start',
            type: 'uint256',
            description: 'The timestamp at which the payments should start.',
          },
          {
            internalType: 'uint256',
            name: 'cliff',
            type: 'uint256',
            description: 'The duration of the payment cliff.',
          },
          {
            internalType: 'uint256',
            name: 'end',
            type: 'uint256',
            description:
              'The timestamps at which the payments SHOULD be fulfilled.',
          },
        ],
        name: 'pushPaymentBatched',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Adds multiple Payment Orders in one batch. These PaymentOrders will share start, cliff and end timestamps.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to revoke.',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
            description: 'The target address to revoke the role from.',
          },
        ],
        name: 'revokeModuleRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Revokes a module role from a target address.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to revoke.',
          },
          {
            internalType: 'address[]',
            name: 'targets',
            type: 'address[]',
            description: 'The target addresses to revoke the role from.',
          },
        ],
        name: 'revokeModuleRoleBatched',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Revokes a module role from multiple target addresses.',
      },
      {
        inputs: [
          { internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' },
        ],
        name: 'supportsInterface',
        outputs: [{ internalType: 'bool', name: '_0', type: 'bool' }],
        stateMutability: 'view',
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
        inputs: [],
        name: 'trustedForwarder',
        outputs: [
          {
            internalType: 'address',
            name: '_0',
            type: 'address',
            description: 'address The trusted forwarder.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the trusted forwarder.',
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
          {
            internalType: 'uint256',
            name: '_2',
            type: 'uint256',
            description: "The module's patch version.",
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: "Returns the module's version.",
      },
    ],
  },
  {
    name: 'LM_PC_Staking_v1',
    description:
      'Provides a mechanism for users to stake tokens and earn rewards.',
    moduleType: 'optionalModule',
    deploymentInputs: {
      configData: [
        {
          name: 'stakingToken',
          type: 'address',
          description: 'The token users stake to earn rewards.',
        },
      ],
    },
    abi: [
      {
        inputs: [{ internalType: 'address', name: 'target', type: 'address' }],
        name: 'AddressEmptyCode',
        type: 'error',
      },
      {
        inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
        name: 'AddressInsufficientBalance',
        type: 'error',
      },
      { inputs: [], name: 'FailedInnerCall', type: 'error' },
      { inputs: [], name: 'InvalidInitialization', type: 'error' },
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
      {
        inputs: [],
        name: 'Module__ERC20PaymentClientBase__ArrayLengthMismatch',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__ERC20PaymentClientBase__CallerNotAuthorized',
        type: 'error',
      },
      {
        inputs: [{ internalType: 'address', name: 'token', type: 'address' }],
        name: 'Module__ERC20PaymentClientBase__InsufficientFunds',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__ERC20PaymentClientBase__InvalidAmount',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__ERC20PaymentClientBase__InvalidPaymentOrder',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__ERC20PaymentClientBase__InvalidRecipient',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__ERC20PaymentClientBase__InvalidToken',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__ERC20PaymentClientBase__Invalidend',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__ERC20PaymentClientBase__TokenTransferFailed',
        type: 'error',
      },
      { inputs: [], name: 'Module__InvalidAddress', type: 'error' },
      { inputs: [], name: 'Module__InvalidMetadata', type: 'error' },
      { inputs: [], name: 'Module__InvalidOrchestratorAddress', type: 'error' },
      {
        inputs: [],
        name: 'Module__LM_PC_Staking_v1__InvalidDuration',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__LM_PC_Staking_v1__InvalidRewardRate',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__LM_PC_Staking_v1__InvalidStakingToken',
        type: 'error',
      },
      { inputs: [], name: 'Module__OnlyCallableByOrchestrator', type: 'error' },
      {
        inputs: [],
        name: 'Module__OnlyCallableByPaymentClient',
        type: 'error',
      },
      { inputs: [], name: 'NotInitializing', type: 'error' },
      { inputs: [], name: 'ReentrancyGuardReentrantCall', type: 'error' },
      {
        inputs: [{ internalType: 'address', name: 'token', type: 'address' }],
        name: 'SafeERC20FailedOperation',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint64',
            name: 'version',
            type: 'uint64',
          },
        ],
        name: 'Initialized',
        type: 'event',
        outputs: [],
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
              'The address of the {Orchestrator_v1} the module is linked to.',
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
              {
                internalType: 'uint256',
                name: 'patchVersion',
                type: 'uint256',
              },
              { internalType: 'string', name: 'url', type: 'string' },
              { internalType: 'string', name: 'title', type: 'string' },
            ],
            indexed: false,
            internalType: 'struct IModule_v1.Metadata',
            name: 'metadata',
            type: 'tuple',
            description: 'The metadata of the module.',
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
            indexed: true,
            internalType: 'address',
            name: 'token',
            type: 'address',
            description: 'The token in which to pay.',
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
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint256',
            name: 'rewardAmount',
            type: 'uint256',
            description: 'The amount of tokens to distribute.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'duration',
            type: 'uint256',
            description: 'The duration of the reward period.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'newRewardRate',
            type: 'uint256',
            description: 'The new reward rate.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'newRewardsEnd',
            type: 'uint256',
            description: 'The new timestamp of when the rewards will end.',
          },
        ],
        name: 'RewardSet',
        type: 'event',
        outputs: [],
        description: 'Event emitted when a reward is added.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'user',
            type: 'address',
            description: 'The address of the user.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            description: 'The amount of tokens earned.',
          },
        ],
        name: 'RewardsDistributed',
        type: 'event',
        outputs: [],
        description: 'Event emitted when a user receives Rewards.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'user',
            type: 'address',
            description: 'The address of the user.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            description: 'The amount of tokens staked.',
          },
        ],
        name: 'Staked',
        type: 'event',
        outputs: [],
        description: 'Event emitted when a user stakes an amount.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'token',
            type: 'address',
            description: 'Address of token that can be staked.',
          },
        ],
        name: 'StakingTokenSet',
        type: 'event',
        outputs: [],
        description: 'Event emitted when staking token is set.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'user',
            type: 'address',
            description: 'The address of the user.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            description: 'The amount of tokens unstaked.',
          },
        ],
        name: 'Unstaked',
        type: 'event',
        outputs: [],
        description: 'Event emitted when a user unstakes an amount.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'triggerAddress',
            type: 'address',
            description:
              'Address of user if state change was triggered by a staking action. Else can be zero.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'rewardValue',
            type: 'uint256',
            description:
              'Variable necessary to calculate how much rewards a staker is eligible for.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'lastUpdate',
            type: 'uint256',
            description: 'Timestamp of last state change.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'earnedRewards',
            type: 'uint256',
            description: 'How much a user earned up to point of state change.',
          },
        ],
        name: 'Updated',
        type: 'event',
        outputs: [],
        description: 'Event emitted for each major change of state.',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'token',
            type: 'address',
            description: 'The token in which the payment was made.',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            tags: ['decimals:params:indirect:token'],
            description: 'amount of tokens that have been paid out.',
          },
        ],
        name: 'amountPaid',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Notifies the PaymentClient, that tokens have been paid out accordingly.',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'user',
            type: 'address',
            description: 'The address of a user that staked.',
          },
        ],
        name: 'balanceOf',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            tags: ['decimals:contract:indirect:stakingToken'],
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'Returns the amount of tokens a user staked in this contract.',
      },
      {
        inputs: [],
        name: 'claimRewards',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Collects the rewards that are earned up until now.',
      },
      {
        inputs: [],
        name: 'collectPaymentOrders',
        outputs: [
          {
            components: [
              { internalType: 'address', name: 'recipient', type: 'address' },
              {
                internalType: 'address',
                name: 'paymentToken',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
                tags: ['decimals:params:indirect:paymentToken'],
              },
              { internalType: 'uint256', name: 'start', type: 'uint256' },
              { internalType: 'uint256', name: 'cliff', type: 'uint256' },
              { internalType: 'uint256', name: 'end', type: 'uint256' },
            ],
            internalType: 'struct IERC20PaymentClientBase_v1.PaymentOrder[]',
            name: '_0',
            type: 'tuple[]',
            description: 'list of payment orders.',
          },
          {
            internalType: 'address[]',
            name: '_1',
            type: 'address[]',
            description: 'list of token addresses.',
          },
          {
            internalType: 'uint256[]',
            name: '_2',
            type: 'uint256[]',
            description: 'list of amounts.',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Collects outstanding payment orders.',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'user',
            type: 'address',
            description: 'The address of a user that staked.',
          },
        ],
        name: 'earned',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            tags: ['decimals'],
            description: 'The amount of tokens earned.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'Returns the amount of tokens earned up until now by the current stake of a user.',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            tags: ['decimals'],
            description: 'How much token are staked.',
          },
          {
            internalType: 'uint256',
            name: 'duration',
            type: 'uint256',
            description: 'How long the tokens will be staked.',
          },
        ],
        name: 'estimateReward',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            tags: ['decimals'],
            description: 'The estimated amount of tokens earned.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'Returns a estimation of how much rewards will be earned with the current state of the staking contract.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to grant.',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
            description: 'The target address to grant the role to.',
          },
        ],
        name: 'grantModuleRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Grants a module role to a target address.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to grant.',
          },
          {
            internalType: 'address[]',
            name: 'targets',
            type: 'address[]',
            description: 'The target addresses to grant the role to.',
          },
        ],
        name: 'grantModuleRoleBatched',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Grants a module role to multiple target addresses.',
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
            internalType: 'contract IOrchestrator_v1',
            name: 'orchestrator_',
            type: 'address',
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
              {
                internalType: 'uint256',
                name: 'patchVersion',
                type: 'uint256',
              },
              { internalType: 'string', name: 'url', type: 'string' },
              { internalType: 'string', name: 'title', type: 'string' },
            ],
            internalType: 'struct IModule_v1.Metadata',
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
            description: 'bool Is the given address the trusted forwarder.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Checks if the provided address is the trusted forwarder.',
      },
      {
        inputs: [],
        name: 'orchestrator',
        outputs: [
          {
            internalType: 'contract IOrchestrator_v1',
            name: '_0',
            type: 'address',
            description: "The module's {Orchestrator_1}.",
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          "Returns the module's {Orchestrator_v1} interface, {IOrchestrator_v1}.",
      },
      {
        inputs: [{ internalType: 'address', name: '_token', type: 'address' }],
        name: 'outstandingTokenAmount',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            tags: ['decimals:params:indirect:_token'],
            description: 'total amount of token to pay.',
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
                internalType: 'address',
                name: 'paymentToken',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
                tags: ['decimals:params:indirect:paymentToken'],
              },
              { internalType: 'uint256', name: 'start', type: 'uint256' },
              { internalType: 'uint256', name: 'cliff', type: 'uint256' },
              { internalType: 'uint256', name: 'end', type: 'uint256' },
            ],
            internalType: 'struct IERC20PaymentClientBase_v1.PaymentOrder[]',
            name: '_0',
            type: 'tuple[]',
            description: 'list of payment orders.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the list of outstanding payment orders.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to revoke.',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
            description: 'The target address to revoke the role from.',
          },
        ],
        name: 'revokeModuleRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Revokes a module role from a target address.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to revoke.',
          },
          {
            internalType: 'address[]',
            name: 'targets',
            type: 'address[]',
            description: 'The target addresses to revoke the role from.',
          },
        ],
        name: 'revokeModuleRoleBatched',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Revokes a module role from multiple target addresses.',
      },
      {
        inputs: [],
        name: 'rewardRate',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            tags: ['decimals'],
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'rewardsEnd',
        outputs: [{ internalType: 'uint256', name: '_0', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            tags: ['decimals'],
            description: 'How much token should be distributed.',
          },
          {
            internalType: 'uint256',
            name: 'duration',
            type: 'uint256',
            description: 'How much time it will take to distribute the token.',
          },
        ],
        name: 'setRewards',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Sets the rewards that are to be distributed.',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            tags: ['decimals:contract:indirect:stakingToken', 'approval'],
            description: 'How much token should be staked.',
          },
        ],
        name: 'stake',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Stake a specified amount of tokens to earn rewards.',
      },
      {
        inputs: [],
        name: 'stakingToken',
        outputs: [{ internalType: 'address', name: '_0', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' },
        ],
        name: 'supportsInterface',
        outputs: [{ internalType: 'bool', name: '_0', type: 'bool' }],
        stateMutability: 'view',
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
        inputs: [],
        name: 'totalSupply',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            tags: ['decimals:contract:indirect:stakingToken'],
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'trustedForwarder',
        outputs: [
          {
            internalType: 'address',
            name: '_0',
            type: 'address',
            description: 'address The trusted forwarder.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the trusted forwarder.',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            tags: ['decimals:contract:indirect:stakingToken'],
            description: 'How much token should be unstaked.',
          },
        ],
        name: 'unstake',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Unstake a specified amount of tokens and collect rewards.',
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
          {
            internalType: 'uint256',
            name: '_2',
            type: 'uint256',
            description: "The module's patch version.",
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: "Returns the module's version.",
      },
    ],
  },
  {
    name: 'Module_v1',
    description: '',
    moduleType: 'base',
    deploymentInputs: { configData: [] },
    abi: [
      { inputs: [], name: 'InvalidInitialization', type: 'error' },
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
      { inputs: [], name: 'Module__InvalidAddress', type: 'error' },
      { inputs: [], name: 'Module__InvalidMetadata', type: 'error' },
      { inputs: [], name: 'Module__InvalidOrchestratorAddress', type: 'error' },
      { inputs: [], name: 'Module__OnlyCallableByOrchestrator', type: 'error' },
      {
        inputs: [],
        name: 'Module__OnlyCallableByPaymentClient',
        type: 'error',
      },
      { inputs: [], name: 'NotInitializing', type: 'error' },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint64',
            name: 'version',
            type: 'uint64',
          },
        ],
        name: 'Initialized',
        type: 'event',
        outputs: [],
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
              'The address of the {Orchestrator_v1} the module is linked to.',
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
              {
                internalType: 'uint256',
                name: 'patchVersion',
                type: 'uint256',
              },
              { internalType: 'string', name: 'url', type: 'string' },
              { internalType: 'string', name: 'title', type: 'string' },
            ],
            indexed: false,
            internalType: 'struct IModule_v1.Metadata',
            name: 'metadata',
            type: 'tuple',
            description: 'The metadata of the module.',
          },
        ],
        name: 'ModuleInitialized',
        type: 'event',
        outputs: [],
        description: 'Module has been initialized.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to grant.',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
            description: 'The target address to grant the role to.',
          },
        ],
        name: 'grantModuleRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Grants a module role to a target address.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to grant.',
          },
          {
            internalType: 'address[]',
            name: 'targets',
            type: 'address[]',
            description: 'The target addresses to grant the role to.',
          },
        ],
        name: 'grantModuleRoleBatched',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Grants a module role to multiple target addresses.',
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
            internalType: 'contract IOrchestrator_v1',
            name: 'orchestrator_',
            type: 'address',
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
              {
                internalType: 'uint256',
                name: 'patchVersion',
                type: 'uint256',
              },
              { internalType: 'string', name: 'url', type: 'string' },
              { internalType: 'string', name: 'title', type: 'string' },
            ],
            internalType: 'struct IModule_v1.Metadata',
            name: 'metadata',
            type: 'tuple',
            description: "The module's metadata.",
          },
          { internalType: 'bytes', name: '', type: 'bytes' },
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
            description: 'bool Is the given address the trusted forwarder.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Checks if the provided address is the trusted forwarder.',
      },
      {
        inputs: [],
        name: 'orchestrator',
        outputs: [
          {
            internalType: 'contract IOrchestrator_v1',
            name: '_0',
            type: 'address',
            description: "The module's {Orchestrator_1}.",
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          "Returns the module's {Orchestrator_v1} interface, {IOrchestrator_v1}.",
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to revoke.',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
            description: 'The target address to revoke the role from.',
          },
        ],
        name: 'revokeModuleRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Revokes a module role from a target address.',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to revoke.',
          },
          {
            internalType: 'address[]',
            name: 'targets',
            type: 'address[]',
            description: 'The target addresses to revoke the role from.',
          },
        ],
        name: 'revokeModuleRoleBatched',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Revokes a module role from multiple target addresses.',
      },
      {
        inputs: [
          { internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' },
        ],
        name: 'supportsInterface',
        outputs: [{ internalType: 'bool', name: '_0', type: 'bool' }],
        stateMutability: 'view',
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
        inputs: [],
        name: 'trustedForwarder',
        outputs: [
          {
            internalType: 'address',
            name: '_0',
            type: 'address',
            description: 'address The trusted forwarder.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the trusted forwarder.',
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
          {
            internalType: 'uint256',
            name: '_2',
            type: 'uint256',
            description: "The module's patch version.",
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: "Returns the module's version.",
      },
    ],
  },
  {
    name: 'Orchestrator_v1',
    description: '',
    moduleType: 'orchestrator',
    deploymentInputs: { configData: [] },
    abi: [
      {
        inputs: [
          {
            internalType: 'address',
            name: '_trustedForwarder',
            type: 'address',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
      },
      { inputs: [], name: 'InvalidInitialization', type: 'error' },
      {
        inputs: [],
        name: 'ModuleManagerBase__CallerNotAuthorized',
        type: 'error',
      },
      {
        inputs: [],
        name: 'ModuleManagerBase__InvalidModuleAddress',
        type: 'error',
      },
      { inputs: [], name: 'ModuleManagerBase__IsModule', type: 'error' },
      { inputs: [], name: 'ModuleManagerBase__IsNotModule', type: 'error' },
      {
        inputs: [],
        name: 'ModuleManagerBase__ModuleAmountOverLimits',
        type: 'error',
      },
      {
        inputs: [],
        name: 'ModuleManagerBase__ModuleFactoryInvalid',
        type: 'error',
      },
      {
        inputs: [],
        name: 'ModuleManagerBase__ModuleNotRegistered',
        type: 'error',
      },
      {
        inputs: [],
        name: 'ModuleManagerBase__ModuleUpdateAlreadyStarted',
        type: 'error',
      },
      {
        inputs: [
          { internalType: 'address', name: '_module', type: 'address' },
          { internalType: 'uint256', name: '_timelockUntil', type: 'uint256' },
        ],
        name: 'ModuleManagerBase__ModuleUpdateTimelockStillActive',
        type: 'error',
      },
      {
        inputs: [],
        name: 'ModuleManagerBase__OnlyCallableByModule',
        type: 'error',
      },
      { inputs: [], name: 'NotInitializing', type: 'error' },
      {
        inputs: [
          { internalType: 'bytes32', name: 'role', type: 'bytes32' },
          { internalType: 'address', name: 'caller', type: 'address' },
        ],
        name: 'Orchestrator__CallerNotAuthorized',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Orchestrator__DependencyInjection__ModuleNotUsedInOrchestrator',
        type: 'error',
      },
      {
        inputs: [{ internalType: 'address', name: 'module', type: 'address' }],
        name: 'Orchestrator__InvalidModuleType',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Orchestrator__InvalidRemovalOfAuthorizer',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Orchestrator__InvalidRemovalOfFundingManager',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Orchestrator__InvalidRemovalOfPaymentProcessor',
        type: 'error',
      },
      {
        inputs: [
          { internalType: 'address', name: 'currentToken', type: 'address' },
          { internalType: 'address', name: 'newToken', type: 'address' },
        ],
        name: 'Orchestrator__MismatchedTokenForFundingManager',
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
            indexed: false,
            internalType: 'uint64',
            name: 'version',
            type: 'uint64',
          },
        ],
        name: 'Initialized',
        type: 'event',
        outputs: [],
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
            indexed: false,
            internalType: 'address',
            name: 'module',
            type: 'address',
            description: "The module's address.",
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'timelockUntil',
            type: 'uint256',
            description: 'The unix timestamp until the timelock is active.',
          },
        ],
        name: 'ModuleTimelockStarted',
        type: 'event',
        outputs: [],
        description:
          'Event emitted when updating a module is initiated, and the timelock starts;.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: 'module',
            type: 'address',
            description: "The module's address.",
          },
        ],
        name: 'ModuleUpdateCanceled',
        type: 'event',
        outputs: [],
        description: 'Event emitted when a module update is canceled.',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint256',
            name: 'orchestratorId_',
            type: 'uint256',
            description: 'The id of the {Orchestrator_v1}.',
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
              'The addresses of the other modules used in the {Orchestrator_v1}.',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'governor',
            type: 'address',
            description:
              'The address of the {Governor_v1} contract used to reference protocol level interactions.',
          },
        ],
        name: 'OrchestratorInitialized',
        type: 'event',
        outputs: [],
        description:
          '{Orchestrator_v1} has been initialized with the corresponding modules.',
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
        inputs: [],
        name: 'MODULE_UPDATE_TIMELOCK',
        outputs: [{ internalType: 'uint256', name: '_0', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'authorizer',
        outputs: [
          {
            internalType: 'contract IAuthorizer_v1',
            name: '_0',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'The {IAuthorizer_v1} implementation used to authorize addresses.',
      },
      {
        inputs: [
          {
            internalType: 'contract IAuthorizer_v1',
            name: 'authorizer_',
            type: 'address',
            description:
              'The address of the new authorizer module, for which the update is canceled.',
          },
        ],
        name: 'cancelAuthorizerUpdate',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Cancels the replacement of the current authorizer with `authorizer_`.',
      },
      {
        inputs: [
          {
            internalType: 'contract IFundingManager_v1',
            name: 'fundingManager_',
            type: 'address',
            description:
              'The address of the new funding manager module, for which the update is canceled.',
          },
        ],
        name: 'cancelFundingManagerUpdate',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Cancels the replacement of the current funding manager with `fundingManager_`.',
      },
      {
        inputs: [{ internalType: 'address', name: 'module_', type: 'address' }],
        name: 'cancelModuleUpdate',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Cancels an initiated update for a module. Can be adding or removing a module from the {Orchestrator_v1}.',
      },
      {
        inputs: [
          {
            internalType: 'contract IPaymentProcessor_v1',
            name: 'paymentProcessor_',
            type: 'address',
            description:
              'The address of the new payment processro module, for which the update is canceled.',
          },
        ],
        name: 'cancelPaymentProcessorUpdate',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Cancels the replacement of the current payment processor with `paymentProcessor_`.',
      },
      {
        inputs: [{ internalType: 'address', name: 'module_', type: 'address' }],
        name: 'executeAddModule',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Adds address `module` as module.',
      },
      {
        inputs: [{ internalType: 'address', name: 'module_', type: 'address' }],
        name: 'executeRemoveModule',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Removes address `module` as module.',
      },
      {
        inputs: [
          {
            internalType: 'contract IAuthorizer_v1',
            name: 'newAuthorizer',
            type: 'address',
          },
        ],
        name: 'executeSetAuthorizer',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Executes replacing the current authorizer with `_authorizer`.!!! IMPORTANT !!! When changing the Authorizer the current set of assigned addresses to Roles are lost. Make sure initial owners are set properly.',
      },
      {
        inputs: [
          {
            internalType: 'contract IFundingManager_v1',
            name: 'newFundingManager',
            type: 'address',
          },
        ],
        name: 'executeSetFundingManager',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Executes replaces the current funding manager with `fundingManager_`.!!! IMPORTANT !!! When changing the FundingManager the current funds still contained in the module might not be retrievable. Make sure to clean the FundingManager properly beforehand.',
      },
      {
        inputs: [
          {
            internalType: 'contract IPaymentProcessor_v1',
            name: 'newPaymentProcessor',
            type: 'address',
          },
        ],
        name: 'executeSetPaymentProcessor',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Executes replaces the current payment processor with `paymentProcessor_`.!!! IMPORTANT !!! When changing the PaymentProcessor the current ongoing payment orders are lost. Make sure to resolve those payments properly beforehand.',
      },
      {
        inputs: [],
        name: 'fundingManager',
        outputs: [
          {
            internalType: 'contract IFundingManager_v1',
            name: '_0',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'The {IFundingManager_v1} implementation used to hold and distribute Funds.',
      },
      {
        inputs: [],
        name: 'governor',
        outputs: [
          {
            internalType: 'contract IGovernor_v1',
            name: '_0',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'The {IGovernor_v1} implementation used for protocol level interactions.',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'orchestratorId_', type: 'uint256' },
          {
            internalType: 'address',
            name: 'moduleFactory_',
            type: 'address',
            description: 'The address of the module factory.',
          },
          {
            internalType: 'address[]',
            name: 'modules',
            type: 'address[]',
            description:
              'The addresses of the modules used in the {Orchestrator_v1}.',
          },
          {
            internalType: 'contract IFundingManager_v1',
            name: 'fundingManager_',
            type: 'address',
          },
          {
            internalType: 'contract IAuthorizer_v1',
            name: 'authorizer_',
            type: 'address',
          },
          {
            internalType: 'contract IPaymentProcessor_v1',
            name: 'paymentProcessor_',
            type: 'address',
          },
          {
            internalType: 'contract IGovernor_v1',
            name: 'governor_',
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
        inputs: [{ internalType: 'address', name: 'module_', type: 'address' }],
        name: 'initiateAddModuleWithTimelock',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Initiates the adding of a module to the {Orchestrator_v1} on a timelock.',
      },
      {
        inputs: [{ internalType: 'address', name: 'module_', type: 'address' }],
        name: 'initiateRemoveModuleWithTimelock',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Initiate the removal of a module from the {Orchestrator_v1} on a timelock.',
      },
      {
        inputs: [
          {
            internalType: 'contract IAuthorizer_v1',
            name: 'newAuthorizer',
            type: 'address',
          },
        ],
        name: 'initiateSetAuthorizerWithTimelock',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Initiates replacing the current authorizer with `_authorizer` on a timelock.',
      },
      {
        inputs: [
          {
            internalType: 'contract IFundingManager_v1',
            name: 'newFundingManager',
            type: 'address',
          },
        ],
        name: 'initiateSetFundingManagerWithTimelock',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Initiates replaces the current funding manager with `fundingManager_` on a timelock.',
      },
      {
        inputs: [
          {
            internalType: 'contract IPaymentProcessor_v1',
            name: 'newPaymentProcessor',
            type: 'address',
          },
        ],
        name: 'initiateSetPaymentProcessorWithTimelock',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Initiates replaces the current payment processor with `paymentProcessor_` on a timelock.',
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
        stateMutability: 'view',
        type: 'function',
        description: 'Returns whether the address `module` is added as module.',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'forwarder',
            type: 'address',
            description: 'The address to check.',
          },
        ],
        name: 'isTrustedForwarder',
        outputs: [
          {
            internalType: 'bool',
            name: '_0',
            type: 'bool',
            description:
              'True if the address is the trusted forwarder, false otherwise.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'Returns wether the given address is the trusted forwarder or not.',
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
        inputs: [{ internalType: 'address', name: 'module', type: 'address' }],
        name: 'moduleAddressToTimelock',
        outputs: [
          { internalType: 'bool', name: 'timelockActive', type: 'bool' },
          { internalType: 'uint256', name: 'timelockUntil', type: 'uint256' },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'moduleFactory',
        outputs: [{ internalType: 'address', name: '_0', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'modulesSize',
        outputs: [
          {
            internalType: 'uint8',
            name: '_0',
            type: 'uint8',
            description: 'The number of modules.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the number of modules.',
      },
      {
        inputs: [],
        name: 'orchestratorId',
        outputs: [{ internalType: 'uint256', name: '_0', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
        description: "Returns the {Orchestrator_v1}'s id.",
      },
      {
        inputs: [],
        name: 'paymentProcessor',
        outputs: [
          {
            internalType: 'contract IPaymentProcessor_v1',
            name: '_0',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'The {IPaymentProcessor_v1} implementation used to process module payments.',
      },
      {
        inputs: [
          { internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' },
        ],
        name: 'supportsInterface',
        outputs: [{ internalType: 'bool', name: '_0', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'trustedForwarder',
        outputs: [
          {
            internalType: 'address',
            name: '_0',
            type: 'address',
            description: 'The trusted forwarder address.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the trusted forwarder for metatransactions.',
      },
    ],
  },
] as const
