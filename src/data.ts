export const TransactionForwarder = {
  'v1.0': {
    name: 'TransactionForwarder',
    description: '',
    version: 'v1.0',
    moduleType: 'external',
    deploymentArgs: { configData: [], dependencyData: [] },
    abi: [
      {
        inputs: [{ internalType: 'string', name: 'name', type: 'string' }],
        stateMutability: 'nonpayable',
        type: 'constructor',
      },
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
            internalType: 'struct ITransactionForwarder.SingleCall',
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
            description: 'The ForwardRequest you want to get the digest from',
          },
        ],
        name: 'createDigest',
        outputs: [
          {
            internalType: 'bytes32',
            name: 'digest',
            type: 'bytes32',
            description:
              'The digest needed to create a signature for the request',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Creates a digest for the given ForwardRequestData',
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
            internalType: 'struct ITransactionForwarder.SingleCall[]',
            name: 'calls',
            type: 'tuple[]',
            description:
              'Array of call structs that should be executed in the multicall',
          },
        ],
        name: 'executeMulticall',
        outputs: [
          {
            components: [
              { internalType: 'bool', name: 'success', type: 'bool' },
              { internalType: 'bytes', name: 'returnData', type: 'bytes' },
            ],
            internalType: 'struct ITransactionForwarder.Result[]',
            name: 'results',
            type: 'tuple[]',
            description: 'The return data of the calls that were executed',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Enables the execution of multiple calls in a single transaction',
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
} as const
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
            tag: 'decimals',
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
            name: 'amount',
            type: 'uint256',
            tag: 'decimals',
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
            tag: 'decimals',
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
            name: 'amount',
            type: 'uint256',
            tag: 'decimals',
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
            name: 'amount',
            type: 'uint256',
            tag: 'decimals',
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
            tag: 'decimals',
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
            tag: 'decimals',
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
export const OrchestratorFactory = {
  'v1.0': {
    name: 'OrchestratorFactory',
    description: '',
    version: 'v1.0',
    moduleType: 'factories',
    deploymentArgs: { configData: [], dependencyData: [] },
    abi: [
      {
        inputs: [
          { internalType: 'address', name: 'target_', type: 'address' },
          { internalType: 'address', name: 'moduleFactory_', type: 'address' },
          {
            internalType: 'address',
            name: '_trustedForwarder',
            type: 'address',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
      },
      { inputs: [], name: 'ERC1167FailedCreateClone', type: 'error' },
      { inputs: [], name: 'OrchestratorFactory__InvalidId', type: 'error' },
      {
        inputs: [],
        name: 'OrchestratorFactory__ModuleDataLengthMismatch',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OrchestratorFactory__OrchestratorOwnerIsInvalid',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint256',
            name: 'orchestratorId',
            type: 'uint256',
            description: 'The id of the orchestrator.',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'orchestratorAddress',
            type: 'address',
            description: 'The address of the orchestrator.',
          },
        ],
        name: 'OrchestratorCreated',
        type: 'event',
        outputs: [],
        description: 'Event emitted when a new orchestrator is created.',
      },
      {
        inputs: [
          {
            components: [
              { internalType: 'address', name: 'owner', type: 'address' },
              {
                internalType: 'contract IERC20',
                name: 'token',
                type: 'address',
              },
            ],
            internalType: 'struct IOrchestratorFactory.OrchestratorConfig',
            name: 'orchestratorConfig',
            type: 'tuple',
            description: "The orchestrator's config data.",
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
                  { internalType: 'string', name: 'url', type: 'string' },
                  { internalType: 'string', name: 'title', type: 'string' },
                ],
                internalType: 'struct IModule.Metadata',
                name: 'metadata',
                type: 'tuple',
              },
              { internalType: 'bytes', name: 'configData', type: 'bytes' },
              { internalType: 'bytes', name: 'dependencyData', type: 'bytes' },
            ],
            internalType: 'struct IOrchestratorFactory.ModuleConfig',
            name: 'fundingManagerConfig',
            type: 'tuple',
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
                  { internalType: 'string', name: 'url', type: 'string' },
                  { internalType: 'string', name: 'title', type: 'string' },
                ],
                internalType: 'struct IModule.Metadata',
                name: 'metadata',
                type: 'tuple',
              },
              { internalType: 'bytes', name: 'configData', type: 'bytes' },
              { internalType: 'bytes', name: 'dependencyData', type: 'bytes' },
            ],
            internalType: 'struct IOrchestratorFactory.ModuleConfig',
            name: 'authorizerConfig',
            type: 'tuple',
            description:
              "The config data for the orchestrator's {IAuthorizer} instance.",
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
                  { internalType: 'string', name: 'url', type: 'string' },
                  { internalType: 'string', name: 'title', type: 'string' },
                ],
                internalType: 'struct IModule.Metadata',
                name: 'metadata',
                type: 'tuple',
              },
              { internalType: 'bytes', name: 'configData', type: 'bytes' },
              { internalType: 'bytes', name: 'dependencyData', type: 'bytes' },
            ],
            internalType: 'struct IOrchestratorFactory.ModuleConfig',
            name: 'paymentProcessorConfig',
            type: 'tuple',
            description:
              "The config data for the orchestrator's {IPaymentProcessor} instance.",
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
                  { internalType: 'string', name: 'url', type: 'string' },
                  { internalType: 'string', name: 'title', type: 'string' },
                ],
                internalType: 'struct IModule.Metadata',
                name: 'metadata',
                type: 'tuple',
              },
              { internalType: 'bytes', name: 'configData', type: 'bytes' },
              { internalType: 'bytes', name: 'dependencyData', type: 'bytes' },
            ],
            internalType: 'struct IOrchestratorFactory.ModuleConfig[]',
            name: 'moduleConfigs',
            type: 'tuple[]',
            description:
              "Variable length set of optional module's config data.",
          },
        ],
        name: 'createOrchestrator',
        outputs: [
          {
            internalType: 'contract IOrchestrator',
            name: '_0',
            type: 'address',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          "Creates a new orchestrator with caller being the orchestrator's owner.",
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
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
            description: "The requested orchestrator's id.",
          },
        ],
        name: 'getOrchestratorByID',
        outputs: [{ internalType: 'address', name: '_0', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
        description:
          'Returns the {IOrchestrator} address that corresponds to the given id.',
      },
      {
        inputs: [],
        name: 'getOrchestratorIDCounter',
        outputs: [{ internalType: 'uint256', name: '_0', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the counter of the current orchestrator id',
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
        description: 'Returns the {IModuleFactory} implementation address.',
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
        name: 'target',
        outputs: [{ internalType: 'address', name: '_0', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
        description:
          'Returns the {IOrchestrator} target implementation address.',
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
} as const
export const ModuleFactory = {
  'v1.0': {
    name: 'ModuleFactory',
    description: '',
    version: 'v1.0',
    moduleType: 'factories',
    deploymentArgs: { configData: [], dependencyData: [] },
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
      {
        inputs: [],
        name: 'ModuleFactory__UnregisteredMetadata',
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
            indexed: true,
            internalType: 'struct IModule.Metadata',
            name: 'metadata',
            type: 'tuple',
            description: 'The registered Metadata',
          },
          {
            indexed: true,
            internalType: 'contract IInverterBeacon',
            name: 'beacon',
            type: 'address',
            description: 'The registered Beacon',
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
            description: 'The corresponding orchestrator.',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'module',
            type: 'address',
            description: 'The created module instance.',
          },
          {
            indexed: false,
            internalType: 'bytes32',
            name: 'identifier',
            type: 'bytes32',
            description: "The module's identifier.",
          },
        ],
        name: 'ModuleCreated',
        type: 'event',
        outputs: [],
        description:
          'Event emitted when new module created for a orchestrator.',
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
              { internalType: 'string', name: 'url', type: 'string' },
              { internalType: 'string', name: 'title', type: 'string' },
            ],
            internalType: 'struct IModule.Metadata',
            name: 'metadata',
            type: 'tuple',
            description: "The module's metadata.",
          },
          {
            internalType: 'contract IOrchestrator',
            name: 'orchestrator',
            type: 'address',
            description: "The orchestrator's instance of the module.",
          },
          {
            internalType: 'bytes',
            name: 'configData',
            type: 'bytes',
            description: 'The configData of the module',
          },
        ],
        name: 'createModule',
        outputs: [{ internalType: 'address', name: '_0', type: 'address' }],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Creates a module instance identified by given metadata.',
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
              { internalType: 'string', name: 'url', type: 'string' },
              { internalType: 'string', name: 'title', type: 'string' },
            ],
            internalType: 'struct IModule.Metadata',
            name: 'metadata',
            type: 'tuple',
            description: "The module's metadata.",
          },
        ],
        name: 'getBeaconAndId',
        outputs: [
          {
            internalType: 'contract IInverterBeacon',
            name: '_0',
            type: 'address',
            description: "The module's {IInverterBeacon} instance registered.",
          },
          {
            internalType: 'bytes32',
            name: '_1',
            type: 'bytes32',
            description: "The metadata's id.",
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'Returns the {IInverterBeacon} instance registered and the id for given metadata.',
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
              { internalType: 'string', name: 'url', type: 'string' },
              { internalType: 'string', name: 'title', type: 'string' },
            ],
            internalType: 'struct IModule.Metadata',
            name: 'metadata',
            type: 'tuple',
            description: "The module's metadata.",
          },
          {
            internalType: 'contract IInverterBeacon',
            name: 'beacon',
            type: 'address',
            description: "The module's {IInverterBeacon} instance.",
          },
        ],
        name: 'registerMetadata',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Registers metadata `metadata` with {IInverterBeacon} implementation `beacon`.',
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
} as const
export const InverterBeacon = {
  'v1.0': {
    name: 'InverterBeacon',
    description: '',
    version: 'v1.0',
    moduleType: 'factories',
    deploymentArgs: { configData: [], dependencyData: [] },
    abi: [
      {
        inputs: [
          { internalType: 'uint256', name: '_majorVersion', type: 'uint256' },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
      },
      { inputs: [], name: 'Beacon__InvalidImplementation', type: 'error' },
      {
        inputs: [],
        name: 'Beacon__InvalidImplementationMinorVersion',
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
            description: 'The majorVersion of the implementation contract',
          },
        ],
        name: 'Constructed',
        type: 'event',
        outputs: [],
        description: 'The Beacon was constructed.',
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
        description: 'The Beacon shutdown was initiated.',
      },
      {
        anonymous: false,
        inputs: [],
        name: 'ShutdownReversed',
        type: 'event',
        outputs: [],
        description: 'The Beacon shutdown was reversed.',
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
        ],
        name: 'Upgraded',
        type: 'event',
        outputs: [],
        description: 'The Beacon was upgraded to a new implementation address.',
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
            description: 'Is the beacon in emergency mode.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns wether the beacon is in emergency mode or not.',
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
        description: 'Restarts the beacon and the system',
      },
      {
        inputs: [],
        name: 'shutDownImplementation',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Shuts down the beacon and stops the system',
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
          { internalType: 'uint256', name: 'newMinorVersion', type: 'uint256' },
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
        description: 'Upgrades the beacon to a new implementation address.',
      },
      {
        inputs: [],
        name: 'version',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            description: 'The major version.',
          },
          {
            internalType: 'uint256',
            name: '_1',
            type: 'uint256',
            description: 'The minor version.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the version of the linked implementation.',
      },
    ],
  },
} as const
export const RecurringPaymentManager = {
  'v1.0': {
    name: 'RecurringPaymentManager',
    description: '',
    version: 'v1.0',
    moduleType: 'logicModule',
    deploymentArgs: {
      configData: [
        {
          name: 'epochLength',
          type: 'uint256',
          description:
            'The length of an epoch in seconds. This will be the common denominator for all payments, as these are specified in epochs (i.e. if an epoch is 1 week, vestings can be done for 1 week, 2 week, 3 week, etc.). Epoch needs to be greater than 1 week and smaller than 52 weeks',
        },
      ],
      dependencyData: [],
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
        inputs: [],
        name: 'Module__RecurringPaymentManager__InvalidEpochLength',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__RecurringPaymentManager__InvalidRecurringPaymentId',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__RecurringPaymentManager__InvalidStartEpoch',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__RecurringPaymentManager__StartIdNotBeforeEndId',
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
        description: 'Event emitted when a new milestone added.',
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
        description: 'Event emitted when a new milestone added.',
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
        description: 'Event emitted when a new milestone added.',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            description: ': amount of tokens send to the recipient address',
          },
          {
            internalType: 'uint256',
            name: 'startEpoch',
            type: 'uint256',
            description:
              ': epoch in which the payment starts. Use getEpochFromTimestamp() or getCurrentEpoch() to get the appropriate epoch',
          },
          {
            internalType: 'address',
            name: 'recipient',
            type: 'address',
            description: ': recipient address that should receive tokens',
          },
        ],
        name: 'addRecurringPayment',
        outputs: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
            description: ': id of the newly created recurring payment',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Adds a recurring payment to the manager',
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
            description: 'list of payment orders',
          },
          {
            internalType: 'uint256',
            name: '_1',
            type: 'uint256',
            description: 'total amount of token to pay',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Collects outstanding payment orders.',
      },
      {
        inputs: [{ internalType: 'bytes', name: 'data', type: 'bytes' }],
        name: 'decoder',
        outputs: [{ internalType: 'bool', name: 'requirement', type: 'bool' }],
        stateMutability: 'pure',
        type: 'function',
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
              ': epoch in which current timestamp (block.timestamp) belongs to',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Calculates the current epoch',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'timestamp',
            type: 'uint256',
            description: ': a timestamp in a uint format',
          },
        ],
        name: 'getEpochFromTimestamp',
        outputs: [
          {
            internalType: 'uint256',
            name: 'epoch',
            type: 'uint256',
            description: ': epoch in which timestamp belongs to',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Calculates the epoch from a given uint timestamp',
      },
      {
        inputs: [],
        name: 'getEpochLength',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            description: 'Length of an epoch in a uint timestamp',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the length of an epoch',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'xEpochsInTheFuture',
            type: 'uint256',
            description: ': how many epochs from the current epoch',
          },
        ],
        name: 'getFutureEpoch',
        outputs: [
          {
            internalType: 'uint256',
            name: 'futureEpoch',
            type: 'uint256',
            description: ': epoch in the future',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Calculates a future epoch x epochs from now',
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
              { internalType: 'uint256', name: 'amount', type: 'uint256' },
              { internalType: 'uint256', name: 'startEpoch', type: 'uint256' },
              {
                internalType: 'uint256',
                name: 'lastTriggeredEpoch',
                type: 'uint256',
              },
              { internalType: 'address', name: 'recipient', type: 'address' },
            ],
            internalType: 'struct IRecurringPaymentManager.RecurringPayment',
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
        inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }],
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
            description: 'bool Is the given address the trusted forwarder',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Checks if the provided address is the trusted forwarder',
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
        outputs: [{ internalType: 'uint256', name: '_0', type: 'uint256' }],
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
              ': id of the previous recurring payment in the payment list',
          },
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
            description: ': id of the recurring payment that is to be removed',
          },
        ],
        name: 'removeRecurringPayment',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Removes a recurring Payment',
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
          'Triggers the start of the due payments for all recurring payment orders',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'startId',
            type: 'uint256',
            description:
              ': id of start position of the recurring payments that should be triggered',
          },
          {
            internalType: 'uint256',
            name: 'endId',
            type: 'uint256',
            description:
              ': id of end position of the recurring payments that should be triggered',
          },
        ],
        name: 'triggerFor',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'See trigger() but enables you to determine which ids you want to trigger payment ordes for',
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
    ],
  },
} as const
export const BountyManager = {
  'v1.0': {
    name: 'BountyManager',
    description: '',
    version: 'v1.0',
    moduleType: 'logicModule',
    deploymentArgs: { configData: [], dependencyData: [] },
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
            tag: 'decimals',
            description:
              'The minimum amount of tokens the Bounty will pay out upon being claimed',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'maximumPayoutAmount',
            type: 'uint256',
            tag: 'decimals',
            description:
              'The maximum amount of tokens the Bounty will pay out upon being claimed',
          },
          {
            indexed: false,
            internalType: 'bytes',
            name: 'details',
            type: 'bytes',
            tag: 'any',
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
            tag: 'any',
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
                tag: 'decimals',
              },
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
            tag: 'any',
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
                tag: 'decimals',
              },
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
            tag: 'any',
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
            tag: 'decimals',
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
            tag: 'decimals',
            description:
              'The minimum amount of tokens the Bounty will pay out upon being claimed',
          },
          {
            internalType: 'uint256',
            name: 'maximumPayoutAmount',
            type: 'uint256',
            tag: 'decimals',
            description:
              'The maximum amount of tokens the Bounty will pay out upon being claimed',
          },
          {
            internalType: 'bytes',
            name: 'details',
            type: 'bytes',
            tag: 'any',
            description: "The Bounty's details.",
          },
        ],
        name: 'addBounty',
        outputs: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
            description: "The newly added Bounty's id.",
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
              {
                internalType: 'uint256',
                name: 'claimAmount',
                type: 'uint256',
                tag: 'decimals',
              },
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
            tag: 'any',
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
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            tag: 'decimals',
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
              {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
                tag: 'decimals',
              },
              { internalType: 'uint256', name: 'createdAt', type: 'uint256' },
              { internalType: 'uint256', name: 'dueTo', type: 'uint256' },
            ],
            internalType: 'struct IERC20PaymentClient.PaymentOrder[]',
            name: '_0',
            type: 'tuple[]',
            description: 'list of payment orders',
          },
          {
            internalType: 'uint256',
            name: '_1',
            type: 'uint256',
            description: 'total amount of token to pay',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Collects outstanding payment orders.',
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
                tag: 'decimals',
              },
              {
                internalType: 'uint256',
                name: 'maximumPayoutAmount',
                type: 'uint256',
                tag: 'decimals',
              },
              {
                internalType: 'bytes',
                name: 'details',
                type: 'bytes',
                tag: 'any',
              },
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
                    tag: 'decimals',
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
                tag: 'any',
              },
              { internalType: 'bool', name: 'claimed', type: 'bool' },
            ],
            internalType: 'struct IBountyManager.Claim',
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
              { internalType: 'string', name: 'url', type: 'string' },
              { internalType: 'string', name: 'title', type: 'string' },
            ],
            internalType: 'struct IModule.Metadata',
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
          { internalType: 'contract IOrchestrator', name: '', type: 'address' },
          { internalType: 'bytes', name: '', type: 'bytes' },
        ],
        name: 'init2',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
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
            description: 'claim ids are filtered by the contributor address',
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
            name: 'amount',
            type: 'uint256',
            tag: 'decimals',
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
                tag: 'decimals',
              },
              { internalType: 'uint256', name: 'createdAt', type: 'uint256' },
              { internalType: 'uint256', name: 'dueTo', type: 'uint256' },
            ],
            internalType: 'struct IERC20PaymentClient.PaymentOrder[]',
            name: '_0',
            type: 'tuple[]',
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
            internalType: 'uint256',
            name: 'bountyId',
            type: 'uint256',
            description: 'The id of the Bounty that will be updated.',
          },
          {
            internalType: 'bytes',
            name: 'details',
            type: 'bytes',
            tag: 'any',
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
                tag: 'decimals',
              },
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
            tag: 'any',
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
                tag: 'decimals',
              },
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
export const Module = {
  'v1.0': {
    name: 'Module',
    description: '',
    version: 'v1.0',
    moduleType: 'base',
    deploymentArgs: { configData: [], dependencyData: [] },
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
      { inputs: [], name: 'Module__CannotCallInit2Again', type: 'error' },
      { inputs: [], name: 'Module__InvalidMetadata', type: 'error' },
      { inputs: [], name: 'Module__InvalidOrchestratorAddress', type: 'error' },
      {
        inputs: [],
        name: 'Module__NoDependencyOrMalformedDependencyData',
        type: 'error',
      },
      { inputs: [], name: 'Module__OnlyCallableByOrchestrator', type: 'error' },
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
        inputs: [{ internalType: 'bytes', name: 'data', type: 'bytes' }],
        name: 'decoder',
        outputs: [{ internalType: 'bool', name: 'requirement', type: 'bool' }],
        stateMutability: 'pure',
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
              { internalType: 'string', name: 'url', type: 'string' },
              { internalType: 'string', name: 'title', type: 'string' },
            ],
            internalType: 'struct IModule.Metadata',
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
    ],
  },
} as const
export const RebasingFundingManager = {
  'v1.0': {
    name: 'RebasingFundingManager',
    description: '',
    version: 'v1.0',
    moduleType: 'fundingManager',
    deploymentArgs: {
      configData: [
        {
          name: 'orchestratorTokenAddress',
          description:
            'The address of the token that will be deposited to the funding manager',
          type: 'address',
        },
      ],
      dependencyData: [],
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
      { inputs: [], name: 'InvalidAmount', type: 'error' },
      { inputs: [], name: 'InvalidInitialization', type: 'error' },
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
            tag: 'decimals',
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
            tag: 'decimals',
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
            tag: 'decimals',
          },
        ],
        name: 'Transfer',
        type: 'event',
        outputs: [],
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
            tag: 'decimals',
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
            tag: 'decimals',
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
            description: 'The EIP-712 domain separator hash.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the EIP-712 domain separator hash.',
      },
      {
        inputs: [],
        name: 'EIP712_DOMAIN',
        outputs: [{ internalType: 'bytes32', name: '_0', type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
        description: 'The EIP-712 domain hash.',
      },
      {
        inputs: [],
        name: 'EIP712_REVISION',
        outputs: [{ internalType: 'string', name: '_0', type: 'string' }],
        stateMutability: 'view',
        type: 'function',
        description: 'The EIP-712 version.',
      },
      {
        inputs: [],
        name: 'PERMIT_TYPEHASH',
        outputs: [{ internalType: 'bytes32', name: '_0', type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
        description: 'The EIP-2612 permit hash.',
      },
      {
        inputs: [
          { internalType: 'address', name: 'owner_', type: 'address' },
          { internalType: 'address', name: 'spender', type: 'address' },
        ],
        name: 'allowance',
        outputs: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            tag: 'decimals',
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
            name: 'tokens',
            type: 'uint256',
            tag: 'decimals',
          },
        ],
        name: 'approve',
        outputs: [{ internalType: 'bool', name: '_0', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: 'who', type: 'address' }],
        name: 'balanceOf',
        outputs: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            tag: 'decimals',
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
        inputs: [{ internalType: 'bytes', name: 'data', type: 'bytes' }],
        name: 'decoder',
        outputs: [{ internalType: 'bool', name: 'requirement', type: 'bool' }],
        stateMutability: 'pure',
        type: 'function',
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
            tag: 'decimals',
            description: 'The amount of tokens to decrease allowance by.',
          },
        ],
        name: 'decreaseAllowance',
        outputs: [
          {
            internalType: 'bool',
            name: '_0',
            type: 'bool',
            description: 'True if successful.',
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
            tag: 'decimals',
          },
        ],
        name: 'deposit',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'to', type: 'address' },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            tag: 'decimals',
          },
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
            tag: 'decimals',
            description: 'The amount of tokens to increase allowance by.',
          },
        ],
        name: 'increaseAllowance',
        outputs: [
          {
            internalType: 'bool',
            name: '_0',
            type: 'bool',
            description: 'True if successful.',
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
        outputs: [{ internalType: 'string', name: '_0', type: 'string' }],
        stateMutability: 'view',
        type: 'function',
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
            description: 'The number of successful permits.',
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
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
            tag: 'decimals',
          },
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
            name: 'amount',
            type: 'uint256',
            tag: 'decimals',
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
            name: 'amount',
            type: 'uint256',
            tag: 'decimals',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the total fixed supply.',
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
        name: 'symbol',
        outputs: [{ internalType: 'string', name: '_0', type: 'string' }],
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
          { internalType: 'contract IERC20', name: '_0', type: 'address' },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'totalSupply',
        outputs: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            tag: 'decimals',
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
            name: 'tokens',
            type: 'uint256',
            tag: 'decimals',
          },
        ],
        name: 'transfer',
        outputs: [{ internalType: 'bool', name: '_0', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
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
            description: 'True on success, false otherwise.',
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
        outputs: [{ internalType: 'bool', name: '_0', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Transfer all balance tokens from one address to another.',
      },
      {
        inputs: [
          { internalType: 'address', name: 'from', type: 'address' },
          { internalType: 'address', name: 'to', type: 'address' },
          {
            internalType: 'uint256',
            name: 'tokens',
            type: 'uint256',
            tag: 'decimals',
          },
        ],
        name: 'transferFrom',
        outputs: [{ internalType: 'bool', name: '_0', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'to', type: 'address' },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            tag: 'decimals',
          },
        ],
        name: 'transferOrchestratorToken',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
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
            tag: 'decimals',
          },
        ],
        name: 'withdraw',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'to', type: 'address' },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
            tag: 'decimals',
          },
        ],
        name: 'withdrawTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
  },
} as const
export const BancorVirtualSupplyBondingCurveFundingManager = {
  'v1.0': {
    name: 'BancorVirtualSupplyBondingCurveFundingManager',
    description:
      "This contract enables the issuance and redeeming of tokens on a bonding curve, using a virtual supply for both the token and the collateral as input. The contract makes use of the Aragon's Bancor Formula contract to calculate the issuance and redeeming rates.",
    version: 'v1.0',
    moduleType: 'fundingManager',
    deploymentArgs: {
      configData: [
        {
          name: 'name',
          type: 'bytes32',
          description: 'The name of the issuance token',
        },
        {
          name: 'symbol',
          type: 'bytes32',
          description: 'The symbol of the issuance token',
        },
        {
          name: 'decimals',
          type: 'uint8',
          description: 'The decimals used within the issuance token',
        },
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
          name: 'initialTokenSupply',
          type: 'uint256',
          description: 'The initial virtual issuance token supply',
        },
        {
          name: 'initialCollateralSupply',
          type: 'uint256',
          description: 'The initial virtual collateral token supply',
        },
        {
          name: 'acceptedToken',
          type: 'address',
          description:
            'The address of the token that will be deposited to the funding manager',
        },
      ],
      dependencyData: [],
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
      {
        inputs: [],
        name: 'BancorVirtualSupplyBondingCurveFundingManager__InvalidDepositAmount',
        type: 'error',
      },
      {
        inputs: [],
        name: 'BancorVirtualSupplyBondingCurveFundingManager__InvalidReserveRatio',
        type: 'error',
      },
      {
        inputs: [],
        name: 'BancorVirtualSupplyBondingCurveFundingManager__InvalidTokenDecimal',
        type: 'error',
      },
      {
        inputs: [],
        name: 'BondingCurveFundingManagerBase__InsufficientOutputAmount',
        type: 'error',
      },
      {
        inputs: [],
        name: 'BondingCurveFundingManagerBase__InvalidRecipient',
        type: 'error',
      },
      {
        inputs: [],
        name: 'BondingCurveFundingManager__BuyingAlreadyClosed',
        type: 'error',
      },
      {
        inputs: [],
        name: 'BondingCurveFundingManager__BuyingAlreadyOpen',
        type: 'error',
      },
      {
        inputs: [],
        name: 'BondingCurveFundingManager__BuyingFunctionaltiesClosed',
        type: 'error',
      },
      {
        inputs: [],
        name: 'BondingCurveFundingManager__InvalidDepositAmount',
        type: 'error',
      },
      {
        inputs: [],
        name: 'BondingCurveFundingManager__InvalidFeePercentage',
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
      { inputs: [], name: 'NotInitializing', type: 'error' },
      {
        inputs: [],
        name: 'RedeemingBondingCurveFundingManager__InsufficientCollateralForRedemption',
        type: 'error',
      },
      {
        inputs: [],
        name: 'RedeemingBondingCurveFundingManager__InsufficientOutputAmount',
        type: 'error',
      },
      {
        inputs: [],
        name: 'RedeemingBondingCurveFundingManager__InvalidDepositAmount',
        type: 'error',
      },
      {
        inputs: [],
        name: 'RedeemingBondingCurveFundingManager__InvalidFeePercentage',
        type: 'error',
      },
      {
        inputs: [],
        name: 'RedeemingBondingCurveFundingManager__SellingAlreadyClosed',
        type: 'error',
      },
      {
        inputs: [],
        name: 'RedeemingBondingCurveFundingManager__SellingAlreadyOpen',
        type: 'error',
      },
      {
        inputs: [],
        name: 'RedeemingBondingCurveFundingManager__SellingFunctionaltiesClosed',
        type: 'error',
      },
      {
        inputs: [{ internalType: 'address', name: 'token', type: 'address' }],
        name: 'SafeERC20FailedOperation',
        type: 'error',
      },
      {
        inputs: [],
        name: 'VirtualCollateralSupply_AddResultsInOverflow',
        type: 'error',
      },
      {
        inputs: [],
        name: 'VirtualCollateralSupply__SubtractResultsInUnderflow',
        type: 'error',
      },
      {
        inputs: [],
        name: 'VirtualCollateralSupply__VirtualSupplyCannotBeZero',
        type: 'error',
      },
      {
        inputs: [],
        name: 'VirtualTokenSupply_AddResultsInOverflow',
        type: 'error',
      },
      {
        inputs: [],
        name: 'VirtualTokenSupply__SubtractResultsInUnderflow',
        type: 'error',
      },
      {
        inputs: [],
        name: 'VirtualTokenSupply__VirtualSupplyCannotBeZero',
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
            internalType: 'uint256',
            name: 'newBuyFee',
            type: 'uint256',
          },
          {
            indexed: true,
            internalType: 'uint256',
            name: 'oldBuyFee',
            type: 'uint256',
          },
        ],
        name: 'BuyFeeUpdated',
        type: 'event',
        outputs: [],
        description: 'Event emitted when buy fee is updated',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint32',
            name: 'newBuyReserveRatio',
            type: 'uint32',
            description: 'The new reserve ratio for buying',
          },
          {
            indexed: true,
            internalType: 'uint32',
            name: 'oldBuyReserveRatio',
            type: 'uint32',
            description: 'The old reserve ratio for buying',
          },
        ],
        name: 'BuyReserveRatioSet',
        type: 'event',
        outputs: [],
        description:
          'Event emitted when the reserve ratio for buying is updated',
      },
      {
        anonymous: false,
        inputs: [],
        name: 'BuyingDisabled',
        type: 'event',
        outputs: [],
        description: 'Event emitted when buying is closed',
      },
      {
        anonymous: false,
        inputs: [],
        name: 'BuyingEnabled',
        type: 'event',
        outputs: [],
        description: 'Event emitted when buying is opened',
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
            name: 'newSellFee',
            type: 'uint256',
            description: 'The new sell fee',
          },
          {
            indexed: true,
            internalType: 'uint256',
            name: 'oldSellFee',
            type: 'uint256',
            description: 'The old sell fee',
          },
        ],
        name: 'SellFeeUpdated',
        type: 'event',
        outputs: [],
        description: 'Event emitted when sell fee is updated',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint32',
            name: 'newSellReserveRatio',
            type: 'uint32',
            description: 'The new reserve ratio for selling',
          },
          {
            indexed: true,
            internalType: 'uint32',
            name: 'oldSellReserveRatio',
            type: 'uint32',
            description: 'The old reserve ratio for selling',
          },
        ],
        name: 'SellReserveRatioSet',
        type: 'event',
        outputs: [],
        description:
          'Event emitted when the reserve ratio for selling is updated',
      },
      {
        anonymous: false,
        inputs: [],
        name: 'SellingDisabled',
        type: 'event',
        outputs: [],
        description: 'Event emitted when selling is closed',
      },
      {
        anonymous: false,
        inputs: [],
        name: 'SellingEnabled',
        type: 'event',
        outputs: [],
        description: 'Event emitted when selling is opened',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint8',
            name: 'oldDecimals',
            type: 'uint8',
            description: 'The old decimals of the issuance token',
          },
          {
            indexed: true,
            internalType: 'uint8',
            name: 'newDecimals',
            type: 'uint8',
            description: 'The new decimals of the issuance token',
          },
        ],
        name: 'TokenDecimalsUpdated',
        type: 'event',
        outputs: [],
        description:
          'Event emitted when the decimals of the issuance token are updated',
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
            indexed: true,
            internalType: 'uint256',
            name: 'depositAmount',
            type: 'uint256',
            description: 'The amount of collateral token deposited.',
          },
          {
            indexed: true,
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
        description: 'Event emitted when tokens have been succesfully issued',
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
            indexed: true,
            internalType: 'uint256',
            name: 'depositAmount',
            type: 'uint256',
            description: 'The amount of issued token deposited.',
          },
          {
            indexed: true,
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
        description: 'Event emitted when tokens have been succesfully redeemed',
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
        outputs: [],
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
            internalType: 'uint256',
            name: 'amountAdded',
            type: 'uint256',
          },
          {
            indexed: true,
            internalType: 'uint256',
            name: 'newSupply',
            type: 'uint256',
          },
        ],
        name: 'VirtualCollateralAmountAdded',
        type: 'event',
        outputs: [],
        description:
          'Event emitted when virtual collateral amount has been added',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint256',
            name: 'amountSubtracted',
            type: 'uint256',
          },
          {
            indexed: true,
            internalType: 'uint256',
            name: 'newSupply',
            type: 'uint256',
          },
        ],
        name: 'VirtualCollateralAmountSubtracted',
        type: 'event',
        outputs: [],
        description:
          'Event emitted when virtual collateral amount has ben subtracted',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint256',
            name: 'newSupply',
            type: 'uint256',
          },
          {
            indexed: true,
            internalType: 'uint256',
            name: 'oldSupply',
            type: 'uint256',
          },
        ],
        name: 'VirtualCollateralSupplySet',
        type: 'event',
        outputs: [],
        description:
          'Event emitted when virtual collateral supply has been set',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint256',
            name: 'amountAdded',
            type: 'uint256',
            description: 'The amount added to the virtual token supply',
          },
          {
            indexed: true,
            internalType: 'uint256',
            name: 'newSupply',
            type: 'uint256',
            description: 'The new virtual token supply',
          },
        ],
        name: 'VirtualTokenAmountAdded',
        type: 'event',
        outputs: [],
        description: 'Event emitted when virtual token amount has been added',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint256',
            name: 'amountSubtracted',
            type: 'uint256',
            description: 'The amount subtracted from the virtual token supply',
          },
          {
            indexed: true,
            internalType: 'uint256',
            name: 'newSupply',
            type: 'uint256',
            description: 'The new virtual token supply',
          },
        ],
        name: 'VirtualTokenAmountSubtracted',
        type: 'event',
        outputs: [],
        description:
          'Event emitted when virtual token amount has ben subtracted',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint256',
            name: 'newSupply',
            type: 'uint256',
            description: 'The new virtual token supply',
          },
          {
            indexed: true,
            internalType: 'uint256',
            name: 'oldSupply',
            type: 'uint256',
            description: 'The old virtual token supply',
          },
        ],
        name: 'VirtualTokenSupplySet',
        type: 'event',
        outputs: [],
        description: 'Event emitted when virtual token supply has been set',
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
        inputs: [
          { internalType: 'address', name: 'owner', type: 'address' },
          { internalType: 'address', name: 'spender', type: 'address' },
        ],
        name: 'allowance',
        outputs: [{ internalType: 'uint256', name: '_0', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'spender', type: 'address' },
          { internalType: 'uint256', name: 'value', type: 'uint256' },
        ],
        name: 'approve',
        outputs: [{ internalType: 'bool', name: '_0', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ internalType: 'uint256', name: '_0', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_depositAmount',
            type: 'uint256',
            description: 'The amount of collateral token depoisited.',
          },
          {
            internalType: 'uint256',
            name: '_minAmountOut',
            type: 'uint256',
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
            description: 'The amount of collateral token depoisited.',
          },
          {
            internalType: 'uint256',
            name: '_minAmountOut',
            type: 'uint256',
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
            description: 'The amount of tokens deposited by the user.',
          },
        ],
        name: 'calculatePurchaseReturn',
        outputs: [
          {
            internalType: 'uint256',
            name: 'mintAmount',
            type: 'uint256',
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
            description: 'The amount of tokens deposited by the user.',
          },
        ],
        name: 'calculateSaleReturn',
        outputs: [
          {
            internalType: 'uint256',
            name: 'redeemAmount',
            type: 'uint256',
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
        name: 'decimals',
        outputs: [{ internalType: 'uint8', name: '_0', type: 'uint8' }],
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
        name: 'getReserveRatioForBuying',
        outputs: [
          {
            internalType: 'uint32',
            name: '_0',
            type: 'uint32',
            description: 'Reserve Ratio for buying',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'Returns reserve ratio set for buying, used in the Bancor Formula contract',
      },
      {
        inputs: [],
        name: 'getReserveRatioForSelling',
        outputs: [
          {
            internalType: 'uint32',
            name: '_0',
            type: 'uint32',
            description: 'Reserve Ratio for selling',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'Returns reserve ratio set for selling, used in the Bancor Formula contract',
      },
      {
        inputs: [],
        name: 'getStaticPriceForBuying',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            description: 'uint The static price for buying the issuance token',
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
            description: 'uint The static price for selling the issuance token',
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
            description: 'The current virtual collateral supply as a uint.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the current virtual collateral supply.',
      },
      {
        inputs: [],
        name: 'getVirtualTokenSupply',
        outputs: [
          {
            internalType: 'uint256',
            name: '_0',
            type: 'uint256',
            description: 'The current virtual token supply as a uint.',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Returns the current virtual token supply.',
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
        inputs: [
          {
            internalType: 'address',
            name: '_receiver',
            type: 'address',
            description:
              'The address that will receive the newly minted tokens.',
          },
          {
            internalType: 'uint256',
            name: '_amount',
            type: 'uint256',
            description: 'The amount of tokens to be minted.',
          },
        ],
        name: 'mintIssuanceTokenTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Mints a specified amount of Issuance Tokens to a designated receiver address.',
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
            internalType: 'uint256',
            name: '_depositAmount',
            type: 'uint256',
            description: 'The amount of issued token depoisited.',
          },
          {
            internalType: 'uint256',
            name: '_minAmountOut',
            type: 'uint256',
            description:
              'The minimum acceptable amount the user expects to receive from the transaction.',
          },
        ],
        name: 'sell',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          "Sell collateral for the sender's address. This function is subject to a transactional limit, determined by the issuing token's decimal precision and the underlying bonding curve algorithm.",
      },
      {
        inputs: [],
        name: 'sellFee',
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
        name: 'sellFor',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          "Redeem tokens on behalf of a specified receiver address. This function is subject to a transactional limit, determined by the issuing token's decimal precision and the underlying bonding curve algorithm.",
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
          'Sets the fee percentage for buying tokens, payed in collateral',
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
          'Sets the fee percentage for selling collateral, payed in collateral',
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
            description: 'The new value to set for the virtual token supply.',
          },
        ],
        name: 'setVirtualTokenSupply',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description: 'Sets the virtual token supply to a new value.',
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
        name: 'symbol',
        outputs: [{ internalType: 'string', name: '_0', type: 'string' }],
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
          { internalType: 'contract IERC20', name: '_0', type: 'address' },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'totalSupply',
        outputs: [{ internalType: 'uint256', name: '_0', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'value', type: 'uint256' },
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
          { internalType: 'uint256', name: 'value', type: 'uint256' },
        ],
        name: 'transferFrom',
        outputs: [{ internalType: 'bool', name: '_0', type: 'bool' }],
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
      { inputs: [], name: 'Module__CannotCallInit2Again', type: 'error' },
      { inputs: [], name: 'Module__InvalidMetadata', type: 'error' },
      { inputs: [], name: 'Module__InvalidOrchestratorAddress', type: 'error' },
      {
        inputs: [],
        name: 'Module__NoDependencyOrMalformedDependencyData',
        type: 'error',
      },
      { inputs: [], name: 'Module__OnlyCallableByOrchestrator', type: 'error' },
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
            tag: 'decimals',
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
            tag: 'decimals',
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
        inputs: [{ internalType: 'bytes', name: 'data', type: 'bytes' }],
        name: 'decoder',
        outputs: [{ internalType: 'bool', name: 'requirement', type: 'bool' }],
        stateMutability: 'pure',
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
              { internalType: 'string', name: 'url', type: 'string' },
              { internalType: 'string', name: 'title', type: 'string' },
            ],
            internalType: 'struct IModule.Metadata',
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
          { internalType: 'contract IERC20', name: '_0', type: 'address' },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'Returns the IERC20 token the payment processor can process.',
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
    ],
  },
} as const
export const StreamingPaymentProcessor = {
  'v1.0': {
    name: 'StreamingPaymentProcessor',
    description: '',
    version: 'v1.0',
    moduleType: 'paymentProcessor',
    deploymentArgs: { configData: [], dependencyData: [] },
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
      { inputs: [], name: 'Module__CannotCallInit2Again', type: 'error' },
      { inputs: [], name: 'Module__InvalidMetadata', type: 'error' },
      { inputs: [], name: 'Module__InvalidOrchestratorAddress', type: 'error' },
      {
        inputs: [],
        name: 'Module__NoDependencyOrMalformedDependencyData',
        type: 'error',
      },
      { inputs: [], name: 'Module__OnlyCallableByOrchestrator', type: 'error' },
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
        inputs: [
          { internalType: 'address', name: 'paymentClient', type: 'address' },
          { internalType: 'address', name: 'paymentReceiver', type: 'address' },
          { internalType: 'uint256', name: 'walletId', type: 'uint256' },
        ],
        name: 'Module__PaymentProcessor__InactiveWallet',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__PaymentProcessor__InsufficientTokenBalanceInClient',
        type: 'error',
      },
      {
        inputs: [
          { internalType: 'address', name: 'paymentClient', type: 'address' },
          { internalType: 'address', name: 'paymentReceiver', type: 'address' },
        ],
        name: 'Module__PaymentProcessor__InvalidPaymentReceiver',
        type: 'error',
      },
      {
        inputs: [
          { internalType: 'address', name: 'paymentClient', type: 'address' },
          { internalType: 'address', name: 'paymentReceiver', type: 'address' },
          { internalType: 'uint256', name: 'walletId', type: 'uint256' },
        ],
        name: 'Module__PaymentProcessor__InvalidWallet',
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
            name: 'start',
            type: 'uint256',
            description: 'Timestamp at which the vesting starts.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'dueTo',
            type: 'uint256',
            description:
              'Timestamp at which the full amount should be claimable.',
          },
        ],
        name: 'InvalidStreamingOrderDiscarded',
        type: 'event',
        outputs: [],
        description: 'Emitted when a running vesting schedule gets updated.',
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
          {
            indexed: false,
            internalType: 'uint256',
            name: 'walletId',
            type: 'uint256',
            description: 'ID of the payment order that was processed',
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
            name: 'start',
            type: 'uint256',
            description: 'Timestamp at which the vesting starts.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'dueTo',
            type: 'uint256',
            description:
              'Timestamp at which the full amount should be claimable.',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'walletId',
            type: 'uint256',
            description: 'ID of the payment order that was added',
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
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'recipient',
            type: 'address',
            description: 'The address that will stop receiving payment.',
          },
          {
            indexed: true,
            internalType: 'uint256',
            name: 'walletId',
            type: 'uint256',
            description: 'ID of the payment order removed',
          },
        ],
        name: 'StreamingPaymentRemoved',
        type: 'event',
        outputs: [],
        description: 'Emitted when the vesting to an address is removed.',
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
            internalType: 'address',
            name: 'client',
            type: 'address',
            description:
              'The IERC20PaymentClient instance address that processes all claims from _msgSender',
          },
        ],
        name: 'claimAll',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'claim everything that the paymentClient owes to the _msgSender till the current timestamp',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'client',
            type: 'address',
            description:
              'The {IERC20PaymentClient} instance address that processes the walletId claim from _msgSender',
          },
          {
            internalType: 'uint256',
            name: 'walletId',
            type: 'uint256',
            description:
              'The ID of the payment order for which claim is being made',
          },
          {
            internalType: 'bool',
            name: 'retryForUnclaimableAmounts',
            type: 'bool',
            description:
              'boolean which determines if the function will try to pay the unclaimable amounts from earlier along with the vested salary from the payment order with id = walletId',
          },
        ],
        name: 'claimForSpecificWalletId',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'claim the salary uptil block.timestamp from the client for a payment order with id = walletId by _msgSender',
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
          {
            internalType: 'address',
            name: 'client',
            type: 'address',
            description: 'address of the payment client',
          },
          {
            internalType: 'address',
            name: 'paymentReceiver',
            type: 'address',
            description: "PaymentReceiver's address.",
          },
          {
            internalType: 'uint256',
            name: 'walletId',
            type: 'uint256',
            description: 'Id of the wallet for which dueTo is fetched',
          },
        ],
        name: 'dueToForSpecificWalletId',
        outputs: [{ internalType: 'uint256', name: '_0', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
        description:
          'Getter for the vesting dueTo timestamp of a particular payment order with id = walletId associated with a particular paymentReceiver',
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
              { internalType: 'string', name: 'url', type: 'string' },
              { internalType: 'string', name: 'title', type: 'string' },
            ],
            internalType: 'struct IModule.Metadata',
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
        inputs: [
          {
            internalType: 'address',
            name: 'client',
            type: 'address',
            description: 'Address of the payment client',
          },
          {
            internalType: 'address',
            name: 'paymentReceiver',
            type: 'address',
            description: 'Address of the paymentReceiver',
          },
        ],
        name: 'isActivePaymentReceiver',
        outputs: [{ internalType: 'bool', name: '_0', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
        description:
          'tells whether a paymentReceiver has any pending payments for a particular client',
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
        inputs: [
          { internalType: 'address', name: '', type: 'address' },
          { internalType: 'address', name: '', type: 'address' },
        ],
        name: 'numVestingWallets',
        outputs: [{ internalType: 'uint256', name: '_0', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
        description:
          'provides a unique id for new payment orders added for a specific client & paymentReceiver combo',
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
        inputs: [
          {
            internalType: 'address',
            name: 'client',
            type: 'address',
            description: 'address of the payment client',
          },
          {
            internalType: 'address',
            name: 'paymentReceiver',
            type: 'address',
            description: "PaymentReceiver's address.",
          },
          {
            internalType: 'uint256',
            name: 'walletId',
            type: 'uint256',
            description:
              'Id of the wallet for which the releasable amount is fetched',
          },
        ],
        name: 'releasableForSpecificWalletId',
        outputs: [{ internalType: 'uint256', name: '_0', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
        description:
          'Getter for the amount of releasable tokens for a particular payment order with id = walletId associated with a particular paymentReceiver.',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'client',
            type: 'address',
            description: 'address of the payment client',
          },
          {
            internalType: 'address',
            name: 'paymentReceiver',
            type: 'address',
            description: "PaymentReceiver's address.",
          },
          {
            internalType: 'uint256',
            name: 'walletId',
            type: 'uint256',
            description: 'Id of the wallet for which released is fetched',
          },
        ],
        name: 'releasedForSpecificWalletId',
        outputs: [{ internalType: 'uint256', name: '_0', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
        description:
          'Getter for the amount of tokens already released for a particular payment order with id = walletId associated with a particular paymentReceiver',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'client',
            type: 'address',
            description:
              'The {IERC20PaymentClient} instance address from which we will remove the payments',
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
          'Deletes all payments related to a paymentReceiver & leaves unvested tokens in the ERC20PaymentClient.',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'client',
            type: 'address',
            description:
              'The {IERC20PaymentClient} instance address from which we will remove the payment',
          },
          {
            internalType: 'address',
            name: 'paymentReceiver',
            type: 'address',
            description:
              'address of the paymentReceiver whose payment order is to be removed',
          },
          {
            internalType: 'uint256',
            name: 'walletId',
            type: 'uint256',
            description:
              "The ID of the paymentReceiver's payment order which is to be removed",
          },
          {
            internalType: 'bool',
            name: 'retryForUnclaimableAmounts',
            type: 'bool',
            description:
              'boolean that determines whether the function would try to return the unclaimableAmounts along with the vested amounts from the payment order with id = walletId to the paymentReceiver',
          },
        ],
        name: 'removePaymentForSpecificWalletId',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'Deletes a specific payment with id = walletId for a paymentReceiver & leaves unvested tokens in the ERC20PaymentClient.',
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
            name: 'client',
            type: 'address',
            description: 'address of the payment client',
          },
          {
            internalType: 'address',
            name: 'paymentReceiver',
            type: 'address',
            description: "PaymentReceiver's address.",
          },
          {
            internalType: 'uint256',
            name: 'walletId',
            type: 'uint256',
            description: 'Id of the wallet for which start is fetched',
          },
        ],
        name: 'startForSpecificWalletId',
        outputs: [{ internalType: 'uint256', name: '_0', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
        description:
          'Getter for the start timestamp of a particular payment order with id = walletId associated with a particular paymentReceiver',
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
          { internalType: 'contract IERC20', name: '_0', type: 'address' },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'Returns the IERC20 token the payment processor can process.',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'client',
            type: 'address',
            description: 'address of the payment client',
          },
          {
            internalType: 'address',
            name: 'paymentReceiver',
            type: 'address',
            description: "PaymentReceiver's address.",
          },
        ],
        name: 'unclaimable',
        outputs: [{ internalType: 'uint256', name: '_0', type: 'uint256' }],
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
            internalType: 'address',
            name: 'client',
            type: 'address',
            description: 'address of the payment client',
          },
          {
            internalType: 'address',
            name: 'paymentReceiver',
            type: 'address',
            description: "PaymentReceiver's address.",
          },
          {
            internalType: 'uint256',
            name: 'timestamp',
            type: 'uint256',
            description: 'the time upto which we want the vested amount',
          },
          {
            internalType: 'uint256',
            name: 'walletId',
            type: 'uint256',
            description:
              'Id of the wallet for which the vested amount is fetched',
          },
        ],
        name: 'vestedAmountForSpecificWalletId',
        outputs: [{ internalType: 'uint256', name: '_0', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
        description:
          'Calculates the amount of tokens that has already vested for a particular payment order with id = walletId associated with a particular paymentReceiver.',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'client',
            type: 'address',
            description: 'Address of the payment client',
          },
          {
            internalType: 'address',
            name: 'paymentReceiver',
            type: 'address',
            description: 'Address of the paymentReceiver',
          },
        ],
        name: 'viewAllPaymentOrders',
        outputs: [
          {
            components: [
              { internalType: 'uint256', name: '_salary', type: 'uint256' },
              { internalType: 'uint256', name: '_released', type: 'uint256' },
              { internalType: 'uint256', name: '_start', type: 'uint256' },
              { internalType: 'uint256', name: '_dueTo', type: 'uint256' },
              {
                internalType: 'uint256',
                name: '_vestingWalletID',
                type: 'uint256',
              },
            ],
            internalType: 'struct IStreamingPaymentProcessor.VestingWallet[]',
            name: '_0',
            type: 'tuple[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'see all active payment orders for a paymentClient associated with a particular paymentReceiver',
      },
    ],
  },
} as const
export const MetadataManager = {
  'v1.0': {
    name: 'MetadataManager',
    description: '',
    version: 'v1.0',
    moduleType: 'utils',
    deploymentArgs: {
      configData: [
        {
          name: 'name',
          type: 'string',
          description: 'The (user-) name of the manager',
        },
        {
          name: 'account',
          type: 'address',
          description: 'The address of the manager',
        },
        {
          name: 'twitterHandle',
          type: 'string',
          description: 'The twitter handle of the manager',
        },
        {
          name: 'title',
          type: 'string',
          description: 'The name of the workflow/orchestrator',
        },
        {
          name: 'descriptionShort',
          type: 'string',
          description: 'The short description of the workflow/orchestrator',
        },
        {
          name: 'descriptionLong',
          type: 'string',
          description: 'The long description of the workflow/orchestrator',
        },
        {
          name: 'externalMedias',
          type: 'string[]',
          description: 'An array of links to external medias',
        },
        {
          name: 'categories',
          type: 'string[]',
          description: 'An array of categories of the workflow/orchestator',
        },
        {
          name: 'name',
          type: 'string',
          description: 'The (user-) name of the member',
        },
        {
          name: 'account',
          type: 'address',
          description: 'The address of the member',
        },
        { name: 'url', type: 'string', description: 'A url of the member' },
      ],
      dependencyData: [],
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
      { inputs: [], name: 'Module__CannotCallInit2Again', type: 'error' },
      { inputs: [], name: 'Module__InvalidMetadata', type: 'error' },
      { inputs: [], name: 'Module__InvalidOrchestratorAddress', type: 'error' },
      {
        inputs: [],
        name: 'Module__NoDependencyOrMalformedDependencyData',
        type: 'error',
      },
      { inputs: [], name: 'Module__OnlyCallableByOrchestrator', type: 'error' },
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
            indexed: false,
            internalType: 'string',
            name: 'name',
            type: 'string',
            description: 'The name of the owner.',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'account',
            type: 'address',
            description: 'The account of the owner.',
          },
          {
            indexed: false,
            internalType: 'string',
            name: 'twitterHandle',
            type: 'string',
            description: 'The twitter handle of the owner.',
          },
        ],
        name: 'ManagerMetadataUpdated',
        type: 'event',
        outputs: [],
        description: 'Event emitted when the owner metadata changed.',
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
            indexed: false,
            internalType: 'string',
            name: 'title',
            type: 'string',
            description: 'The title of the orchestrator.',
          },
          {
            indexed: false,
            internalType: 'string',
            name: 'descriptionShort',
            type: 'string',
            description: 'The short description of the orchestrator.',
          },
          {
            indexed: false,
            internalType: 'string',
            name: 'descriptionLong',
            type: 'string',
            description: 'The long description of the orchestrator.',
          },
          {
            indexed: false,
            internalType: 'string[]',
            name: 'externalMedias',
            type: 'string[]',
            description: 'The external medias of the orchestrator.',
          },
          {
            indexed: false,
            internalType: 'string[]',
            name: 'categories',
            type: 'string[]',
            description: 'The categories of the orchestrator.',
          },
        ],
        name: 'OrchestratorMetadataUpdated',
        type: 'event',
        outputs: [],
        description: 'Event emitted when the orchestrator metadata changed.',
      },
      {
        anonymous: false,
        inputs: [
          {
            components: [
              { internalType: 'string', name: 'name', type: 'string' },
              { internalType: 'address', name: 'account', type: 'address' },
              { internalType: 'string', name: 'url', type: 'string' },
            ],
            indexed: false,
            internalType: 'struct IMetadataManager.MemberMetadata[]',
            name: 'members',
            type: 'tuple[]',
            description: 'The members of the team.',
          },
        ],
        name: 'TeamMetadataUpdated',
        type: 'event',
        outputs: [],
        description: 'Event emitted when the team metadata changed.',
      },
      {
        inputs: [{ internalType: 'bytes', name: 'data', type: 'bytes' }],
        name: 'decoder',
        outputs: [{ internalType: 'bool', name: 'requirement', type: 'bool' }],
        stateMutability: 'pure',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getManagerMetadata',
        outputs: [
          {
            components: [
              { internalType: 'string', name: 'name', type: 'string' },
              { internalType: 'address', name: 'account', type: 'address' },
              { internalType: 'string', name: 'twitterHandle', type: 'string' },
            ],
            internalType: 'struct IMetadataManager.ManagerMetadata',
            name: '_0',
            type: 'tuple',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getOrchestratorMetadata',
        outputs: [
          {
            components: [
              { internalType: 'string', name: 'title', type: 'string' },
              {
                internalType: 'string',
                name: 'descriptionShort',
                type: 'string',
              },
              {
                internalType: 'string',
                name: 'descriptionLong',
                type: 'string',
              },
              {
                internalType: 'string[]',
                name: 'externalMedias',
                type: 'string[]',
              },
              {
                internalType: 'string[]',
                name: 'categories',
                type: 'string[]',
              },
            ],
            internalType: 'struct IMetadataManager.OrchestratorMetadata',
            name: '_0',
            type: 'tuple',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getTeamMetadata',
        outputs: [
          {
            components: [
              { internalType: 'string', name: 'name', type: 'string' },
              { internalType: 'address', name: 'account', type: 'address' },
              { internalType: 'string', name: 'url', type: 'string' },
            ],
            internalType: 'struct IMetadataManager.MemberMetadata[]',
            name: '_0',
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
            components: [
              { internalType: 'string', name: 'name', type: 'string' },
              { internalType: 'address', name: 'account', type: 'address' },
              { internalType: 'string', name: 'twitterHandle', type: 'string' },
            ],
            internalType: 'struct IMetadataManager.ManagerMetadata',
            name: 'managerMetadata_',
            type: 'tuple',
          },
        ],
        name: 'setManagerMetadata',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            components: [
              { internalType: 'string', name: 'title', type: 'string' },
              {
                internalType: 'string',
                name: 'descriptionShort',
                type: 'string',
              },
              {
                internalType: 'string',
                name: 'descriptionLong',
                type: 'string',
              },
              {
                internalType: 'string[]',
                name: 'externalMedias',
                type: 'string[]',
              },
              {
                internalType: 'string[]',
                name: 'categories',
                type: 'string[]',
              },
            ],
            internalType: 'struct IMetadataManager.OrchestratorMetadata',
            name: 'orchestratorMetadata_',
            type: 'tuple',
          },
        ],
        name: 'setOrchestratorMetadata',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            components: [
              { internalType: 'string', name: 'name', type: 'string' },
              { internalType: 'address', name: 'account', type: 'address' },
              { internalType: 'string', name: 'url', type: 'string' },
            ],
            internalType: 'struct IMetadataManager.MemberMetadata[]',
            name: 'teamMetadata_',
            type: 'tuple[]',
          },
        ],
        name: 'setTeamMetadata',
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
    ],
  },
} as const
export const SingleVoteGovernor = {
  'v1.0': {
    name: 'SingleVoteGovernor',
    description: '',
    version: 'v1.0',
    moduleType: 'utils',
    deploymentArgs: {
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
      dependencyData: [],
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
      { inputs: [], name: 'Module__CannotCallInit2Again', type: 'error' },
      { inputs: [], name: 'Module__InvalidMetadata', type: 'error' },
      { inputs: [], name: 'Module__InvalidOrchestratorAddress', type: 'error' },
      {
        inputs: [],
        name: 'Module__NoDependencyOrMalformedDependencyData',
        type: 'error',
      },
      { inputs: [], name: 'Module__OnlyCallableByOrchestrator', type: 'error' },
      {
        inputs: [],
        name: 'Module__SingleVoteGovernor__AttemptedDoubleVote',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__SingleVoteGovernor__CallerNotVoter',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__SingleVoteGovernor__EmptyVoters',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__SingleVoteGovernor__InvalidMotionId',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__SingleVoteGovernor__InvalidSupport',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__SingleVoteGovernor__InvalidVoterAddress',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__SingleVoteGovernor__InvalidVotingDuration',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__SingleVoteGovernor__IsAlreadyVoter',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__SingleVoteGovernor__MotionAlreadyExecuted',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__SingleVoteGovernor__MotionInVotingPhase',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__SingleVoteGovernor__MotionVotingPhaseClosed',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__SingleVoteGovernor__ThresholdNotReached',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__SingleVoteGovernor__UnreachableThreshold',
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
            name: 'motionId',
            type: 'uint256',
            description: 'The motion ID.',
          },
        ],
        name: 'MotionCreated',
        type: 'event',
        outputs: [],
        description: 'Event emitted when a motion is created',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint256',
            name: 'motionId',
            type: 'uint256',
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
      },
      {
        inputs: [],
        name: 'MIN_VOTING_DURATION',
        outputs: [{ internalType: 'uint256', name: '_0', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: 'who', type: 'address' }],
        name: 'addVoter',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'motionId', type: 'uint256' },
          { internalType: 'uint8', name: 'support', type: 'uint8' },
        ],
        name: 'castVote',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'target', type: 'address' },
          { internalType: 'bytes', name: 'action', type: 'bytes' },
        ],
        name: 'createMotion',
        outputs: [{ internalType: 'uint256', name: '_0', type: 'uint256' }],
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
        inputs: [
          { internalType: 'uint256', name: 'motionId', type: 'uint256' },
        ],
        name: 'executeMotion',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: '_ID', type: 'uint256' },
          { internalType: 'address', name: 'voter', type: 'address' },
        ],
        name: 'getReceipt',
        outputs: [
          {
            components: [
              { internalType: 'bool', name: 'hasVoted', type: 'bool' },
              { internalType: 'uint8', name: 'support', type: 'uint8' },
            ],
            internalType: 'struct ISingleVoteGovernor.Receipt',
            name: '_0',
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
        inputs: [{ internalType: 'address', name: '', type: 'address' }],
        name: 'isVoter',
        outputs: [{ internalType: 'bool', name: '_0', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'motionCount',
        outputs: [{ internalType: 'uint256', name: '_0', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
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
        inputs: [{ internalType: 'address', name: 'who', type: 'address' }],
        name: 'removeVoter',
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
        inputs: [
          { internalType: 'uint256', name: 'newThreshold', type: 'uint256' },
        ],
        name: 'setThreshold',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'newVoteDuration', type: 'uint256' },
        ],
        name: 'setVotingDuration',
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
        inputs: [],
        name: 'threshold',
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
        inputs: [],
        name: 'voteDuration',
        outputs: [{ internalType: 'uint256', name: '_0', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'voterCount',
        outputs: [{ internalType: 'uint256', name: '_0', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
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
    deploymentArgs: {
      configData: [
        {
          name: 'initialOwner',
          type: 'address',
          description: 'The initial owner of the workflow',
        },
        {
          name: 'initialManager',
          type: 'address',
          description: 'The initial manager of the workflow',
        },
      ],
      dependencyData: [],
    },
    abi: [
      { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
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
          { internalType: 'bytes32', name: 'role', type: 'bytes32' },
          { internalType: 'address', name: 'caller', type: 'address' },
        ],
        name: 'Module__CallerNotAuthorized',
        type: 'error',
      },
      { inputs: [], name: 'Module__CannotCallInit2Again', type: 'error' },
      { inputs: [], name: 'Module__InvalidMetadata', type: 'error' },
      { inputs: [], name: 'Module__InvalidOrchestratorAddress', type: 'error' },
      {
        inputs: [],
        name: 'Module__NoDependencyOrMalformedDependencyData',
        type: 'error',
      },
      { inputs: [], name: 'Module__OnlyCallableByOrchestrator', type: 'error' },
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
      },
      {
        inputs: [],
        name: 'DEFAULT_ADMIN_ROLE',
        outputs: [{ internalType: 'bytes32', name: '_0', type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'ORCHESTRATOR_MANAGER_ROLE',
        outputs: [{ internalType: 'bytes32', name: '_0', type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'ORCHESTRATOR_OWNER_ROLE',
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
        inputs: [{ internalType: 'bytes', name: 'data', type: 'bytes' }],
        name: 'decoder',
        outputs: [{ internalType: 'bool', name: 'requirement', type: 'bool' }],
        stateMutability: 'pure',
        type: 'function',
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
        outputs: [{ internalType: 'bytes32', name: '_0', type: 'bytes32' }],
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
            description: 'The role ID',
          },
        ],
        stateMutability: 'pure',
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
            description: 'The role ID',
          },
        ],
        stateMutability: 'pure',
        type: 'function',
        description: 'Returns the role ID of the owner role',
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
          { internalType: 'address', name: 'addr', type: 'address' },
        ],
        name: 'grantModuleRole',
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
        outputs: [{ internalType: 'bool', name: '_0', type: 'bool' }],
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
            internalType: 'contract IOrchestrator',
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
          { internalType: 'address', name: 'addr', type: 'address' },
        ],
        name: 'revokeModuleRole',
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
    ],
  },
} as const
export const TokenGatedRoleAuthorizer = {
  'v1.0': {
    name: 'TokenGatedRoleAuthorizer',
    description: '',
    version: 'v1.0',
    moduleType: 'authorizer',
    deploymentArgs: {
      configData: [
        {
          name: 'initialOwner',
          type: 'address',
          description: 'The initial owner of the workflow',
        },
        {
          name: 'initialManager',
          type: 'address',
          description: 'The initial manager of the workflow',
        },
      ],
      dependencyData: [],
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
          { internalType: 'bytes32', name: 'role', type: 'bytes32' },
          { internalType: 'address', name: 'caller', type: 'address' },
        ],
        name: 'Module__CallerNotAuthorized',
        type: 'error',
      },
      { inputs: [], name: 'Module__CannotCallInit2Again', type: 'error' },
      { inputs: [], name: 'Module__InvalidMetadata', type: 'error' },
      { inputs: [], name: 'Module__InvalidOrchestratorAddress', type: 'error' },
      {
        inputs: [],
        name: 'Module__NoDependencyOrMalformedDependencyData',
        type: 'error',
      },
      { inputs: [], name: 'Module__OnlyCallableByOrchestrator', type: 'error' },
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
        inputs: [
          { internalType: 'uint256', name: 'threshold', type: 'uint256' },
        ],
        name: 'Module__TokenGatedRoleAuthorizer__InvalidThreshold',
        type: 'error',
      },
      {
        inputs: [{ internalType: 'address', name: 'token', type: 'address' }],
        name: 'Module__TokenGatedRoleAuthorizer__InvalidToken',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__TokenGatedRoleAuthorizer__RoleNotEmpty',
        type: 'error',
      },
      {
        inputs: [],
        name: 'Module__TokenGatedRoleAuthorizer__RoleNotTokenGated',
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
      },
      {
        inputs: [],
        name: 'DEFAULT_ADMIN_ROLE',
        outputs: [{ internalType: 'bytes32', name: '_0', type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'ORCHESTRATOR_MANAGER_ROLE',
        outputs: [{ internalType: 'bytes32', name: '_0', type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'ORCHESTRATOR_OWNER_ROLE',
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
        inputs: [{ internalType: 'bytes', name: 'data', type: 'bytes' }],
        name: 'decoder',
        outputs: [{ internalType: 'bool', name: 'requirement', type: 'bool' }],
        stateMutability: 'pure',
        type: 'function',
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
        outputs: [{ internalType: 'bytes32', name: '_0', type: 'bytes32' }],
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
            description: 'The role ID',
          },
        ],
        stateMutability: 'pure',
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
            description: 'The role ID',
          },
        ],
        stateMutability: 'pure',
        type: 'function',
        description: 'Returns the role ID of the owner role',
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
            description: 'The token to check the threshold for.',
          },
        ],
        name: 'getThresholdValue',
        outputs: [{ internalType: 'uint256', name: '_0', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
        description:
          'Returns the threshold amount necessary to qualify for a given token role',
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
          { internalType: 'address', name: 'addr', type: 'address' },
        ],
        name: 'grantModuleRole',
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
            description: 'The role to be made token-gated',
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
            description:
              'The minimum balance of the token required to qualify for the role.',
          },
        ],
        name: 'grantTokenRoleFromModule',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          'One-step setup for Modules to create a token-gated role and set its threshold.',
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
        outputs: [{ internalType: 'bool', name: '_0', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
        description:
          'Asks whether an address holds the required module role to execute the current transaction.',
      },
      {
        inputs: [
          { internalType: 'bytes32', name: 'roleId', type: 'bytes32' },
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
        outputs: [{ internalType: 'bool', name: '_0', type: 'bool' }],
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
            internalType: 'contract IOrchestrator',
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
            description: 'bool Is the given address the trusted forwarder',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description: 'Checks if the provided address is the trusted forwarder',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The role to be made token-gated',
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
          { internalType: 'address', name: 'addr', type: 'address' },
        ],
        name: 'revokeModuleRole',
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
            description: 'The ID of the role to be modified',
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
            description: 'The token-gated role',
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
            description:
              'The new minimum balance of the token required to qualify for the role.',
          },
        ],
        name: 'setThresholdFromModule',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
        description:
          "Allows a Module to set the Threshold of one of it's roles",
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32',
            description: 'The ID of the role to be modified',
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
      {
        inputs: [],
        name: 'DependencyInjection__ModuleNotUsedInOrchestrator',
        type: 'error',
      },
      { inputs: [], name: 'InvalidInitialization', type: 'error' },
      { inputs: [], name: 'NotInitializing', type: 'error' },
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
          { internalType: 'contract IAuthorizer', name: '_0', type: 'address' },
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
            description: 'The return data of the call.',
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
        outputs: [{ internalType: 'address', name: '_0', type: 'address' }],
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
          },
        ],
        stateMutability: 'view',
        type: 'function',
        description:
          'The {IFundingManager} implementation used to hold and distribute Funds.',
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
        stateMutability: 'view',
        type: 'function',
        description: 'Returns whether the address `module` is added as module.',
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
        outputs: [{ internalType: 'uint8', name: '_0', type: 'uint8' }],
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
        outputs: [{ internalType: 'address', name: '_0', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'version',
        outputs: [{ internalType: 'string', name: '_0', type: 'string' }],
        stateMutability: 'pure',
        type: 'function',
        description: 'The version of the orchestrator instance.',
      },
    ],
  },
} as const
