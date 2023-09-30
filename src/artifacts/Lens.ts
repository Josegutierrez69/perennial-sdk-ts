export const LensArtifact = {
  _format: "hh-sol-artifact-1",
  contractName: "Lens",
  sourceName: "contracts/Lens.sol",
  abi: [
    {
      inputs: [
        {
          internalType: "contract IPythOracle",
          name: "pyth",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "index",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "version",
          type: "uint256",
        },
        {
          internalType: "bytes",
          name: "updateData",
          type: "bytes",
        },
      ],
      name: "commit",
      outputs: [
        {
          internalType: "bytes",
          name: "",
          type: "bytes",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "contract IPythOracle",
              name: "pyth",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "index",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "version",
              type: "uint256",
            },
            {
              internalType: "bytes",
              name: "updateData",
              type: "bytes",
            },
          ],
          internalType: "struct PriceCommitData[]",
          name: "commits",
          type: "tuple[]",
        },
        {
          internalType: "contract IMarket[]",
          name: "markets",
          type: "address[]",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "snapshot",
      outputs: [
        {
          components: [
            {
              internalType: "bytes[]",
              name: "commitmentStatus",
              type: "bytes[]",
            },
            {
              internalType: "bytes[]",
              name: "updateStatus",
              type: "bytes[]",
            },
            {
              components: [
                {
                  components: [
                    {
                      internalType: "contract IMarket",
                      name: "market",
                      type: "address",
                    },
                    {
                      components: [
                        {
                          internalType: "UFixed6",
                          name: "fundingFee",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "interestFee",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "positionFee",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "oracleFee",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "riskFee",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "maxPendingGlobal",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "maxPendingLocal",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "makerRewardRate",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "longRewardRate",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "shortRewardRate",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "settlementFee",
                          type: "uint256",
                        },
                        {
                          internalType: "bool",
                          name: "takerCloseAlways",
                          type: "bool",
                        },
                        {
                          internalType: "bool",
                          name: "makerCloseAlways",
                          type: "bool",
                        },
                        {
                          internalType: "bool",
                          name: "closed",
                          type: "bool",
                        },
                      ],
                      internalType: "struct MarketParameter",
                      name: "parameter",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "UFixed6",
                          name: "margin",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "maintenance",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "takerFee",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "takerSkewFee",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "takerImpactFee",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "makerFee",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "makerImpactFee",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "makerLimit",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "efficiencyLimit",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "liquidationFee",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "minLiquidationFee",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "maxLiquidationFee",
                          type: "uint256",
                        },
                        {
                          components: [
                            {
                              internalType: "UFixed6",
                              name: "minRate",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "maxRate",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "targetRate",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "targetUtilization",
                              type: "uint256",
                            },
                          ],
                          internalType: "struct UJumpRateUtilizationCurve6",
                          name: "utilizationCurve",
                          type: "tuple",
                        },
                        {
                          components: [
                            {
                              internalType: "UFixed6",
                              name: "k",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "max",
                              type: "uint256",
                            },
                          ],
                          internalType: "struct PController6",
                          name: "pController",
                          type: "tuple",
                        },
                        {
                          internalType: "UFixed6",
                          name: "minMargin",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "minMaintenance",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "virtualTaker",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "staleAfter",
                          type: "uint256",
                        },
                        {
                          internalType: "bool",
                          name: "makerReceiveOnly",
                          type: "bool",
                        },
                      ],
                      internalType: "struct RiskParameter",
                      name: "riskParameter",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "uint256",
                          name: "currentId",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "latestId",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "protocolFee",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "oracleFee",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "riskFee",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "donation",
                          type: "uint256",
                        },
                        {
                          components: [
                            {
                              internalType: "Fixed6",
                              name: "_value",
                              type: "int256",
                            },
                            {
                              internalType: "Fixed6",
                              name: "_skew",
                              type: "int256",
                            },
                          ],
                          internalType: "struct PAccumulator6",
                          name: "pAccumulator",
                          type: "tuple",
                        },
                        {
                          internalType: "Fixed6",
                          name: "latestPrice",
                          type: "int256",
                        },
                      ],
                      internalType: "struct Global",
                      name: "global",
                      type: "tuple",
                    },
                    {
                      internalType: "address",
                      name: "oracle",
                      type: "address",
                    },
                    {
                      components: [
                        {
                          internalType: "uint256",
                          name: "timestamp",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "maker",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "long",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "short",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "fee",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "keeper",
                          type: "uint256",
                        },
                        {
                          internalType: "Fixed6",
                          name: "collateral",
                          type: "int256",
                        },
                        {
                          internalType: "Fixed6",
                          name: "delta",
                          type: "int256",
                        },
                        {
                          components: [
                            {
                              internalType: "Fixed6",
                              name: "maker",
                              type: "int256",
                            },
                            {
                              internalType: "Fixed6",
                              name: "long",
                              type: "int256",
                            },
                            {
                              internalType: "Fixed6",
                              name: "short",
                              type: "int256",
                            },
                          ],
                          internalType: "struct Invalidation",
                          name: "invalidation",
                          type: "tuple",
                        },
                      ],
                      internalType: "struct Position",
                      name: "position",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "uint256",
                          name: "timestamp",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "maker",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "long",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "short",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "fee",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "keeper",
                          type: "uint256",
                        },
                        {
                          internalType: "Fixed6",
                          name: "collateral",
                          type: "int256",
                        },
                        {
                          internalType: "Fixed6",
                          name: "delta",
                          type: "int256",
                        },
                        {
                          components: [
                            {
                              internalType: "Fixed6",
                              name: "maker",
                              type: "int256",
                            },
                            {
                              internalType: "Fixed6",
                              name: "long",
                              type: "int256",
                            },
                            {
                              internalType: "Fixed6",
                              name: "short",
                              type: "int256",
                            },
                          ],
                          internalType: "struct Invalidation",
                          name: "invalidation",
                          type: "tuple",
                        },
                      ],
                      internalType: "struct Position",
                      name: "nextPosition",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "uint256",
                          name: "timestamp",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "maker",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "long",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "short",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "fee",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "keeper",
                          type: "uint256",
                        },
                        {
                          internalType: "Fixed6",
                          name: "collateral",
                          type: "int256",
                        },
                        {
                          internalType: "Fixed6",
                          name: "delta",
                          type: "int256",
                        },
                        {
                          components: [
                            {
                              internalType: "Fixed6",
                              name: "maker",
                              type: "int256",
                            },
                            {
                              internalType: "Fixed6",
                              name: "long",
                              type: "int256",
                            },
                            {
                              internalType: "Fixed6",
                              name: "short",
                              type: "int256",
                            },
                          ],
                          internalType: "struct Invalidation",
                          name: "invalidation",
                          type: "tuple",
                        },
                      ],
                      internalType: "struct Position[]",
                      name: "pendingPositions",
                      type: "tuple[]",
                    },
                    {
                      components: [
                        {
                          internalType: "bool",
                          name: "valid",
                          type: "bool",
                        },
                        {
                          components: [
                            {
                              internalType: "Fixed6",
                              name: "_value",
                              type: "int256",
                            },
                          ],
                          internalType: "struct Accumulator6",
                          name: "makerValue",
                          type: "tuple",
                        },
                        {
                          components: [
                            {
                              internalType: "Fixed6",
                              name: "_value",
                              type: "int256",
                            },
                          ],
                          internalType: "struct Accumulator6",
                          name: "longValue",
                          type: "tuple",
                        },
                        {
                          components: [
                            {
                              internalType: "Fixed6",
                              name: "_value",
                              type: "int256",
                            },
                          ],
                          internalType: "struct Accumulator6",
                          name: "shortValue",
                          type: "tuple",
                        },
                        {
                          components: [
                            {
                              internalType: "UFixed6",
                              name: "_value",
                              type: "uint256",
                            },
                          ],
                          internalType: "struct UAccumulator6",
                          name: "makerReward",
                          type: "tuple",
                        },
                        {
                          components: [
                            {
                              internalType: "UFixed6",
                              name: "_value",
                              type: "uint256",
                            },
                          ],
                          internalType: "struct UAccumulator6",
                          name: "longReward",
                          type: "tuple",
                        },
                        {
                          components: [
                            {
                              internalType: "UFixed6",
                              name: "_value",
                              type: "uint256",
                            },
                          ],
                          internalType: "struct UAccumulator6",
                          name: "shortReward",
                          type: "tuple",
                        },
                      ],
                      internalType: "struct Version[]",
                      name: "versions",
                      type: "tuple[]",
                    },
                    {
                      components: [
                        {
                          internalType: "uint256",
                          name: "timestamp",
                          type: "uint256",
                        },
                        {
                          internalType: "Fixed6",
                          name: "price",
                          type: "int256",
                        },
                        {
                          internalType: "bool",
                          name: "valid",
                          type: "bool",
                        },
                      ],
                      internalType: "struct OracleVersion",
                      name: "latestOracleVersion",
                      type: "tuple",
                    },
                    {
                      internalType: "uint256",
                      name: "currentOracleVersion",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct Lens.MarketSnapshot[]",
                  name: "marketSnapshots",
                  type: "tuple[]",
                },
                {
                  components: [
                    {
                      internalType: "contract IMarket",
                      name: "market",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "account",
                      type: "address",
                    },
                    {
                      components: [
                        {
                          internalType: "uint256",
                          name: "currentId",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "latestId",
                          type: "uint256",
                        },
                        {
                          internalType: "Fixed6",
                          name: "collateral",
                          type: "int256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "reward",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "protection",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct Local",
                      name: "local",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "uint256",
                          name: "timestamp",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "maker",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "long",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "short",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "fee",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "keeper",
                          type: "uint256",
                        },
                        {
                          internalType: "Fixed6",
                          name: "collateral",
                          type: "int256",
                        },
                        {
                          internalType: "Fixed6",
                          name: "delta",
                          type: "int256",
                        },
                        {
                          components: [
                            {
                              internalType: "Fixed6",
                              name: "maker",
                              type: "int256",
                            },
                            {
                              internalType: "Fixed6",
                              name: "long",
                              type: "int256",
                            },
                            {
                              internalType: "Fixed6",
                              name: "short",
                              type: "int256",
                            },
                          ],
                          internalType: "struct Invalidation",
                          name: "invalidation",
                          type: "tuple",
                        },
                      ],
                      internalType: "struct Position",
                      name: "position",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "uint256",
                          name: "timestamp",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "maker",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "long",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "short",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "fee",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "keeper",
                          type: "uint256",
                        },
                        {
                          internalType: "Fixed6",
                          name: "collateral",
                          type: "int256",
                        },
                        {
                          internalType: "Fixed6",
                          name: "delta",
                          type: "int256",
                        },
                        {
                          components: [
                            {
                              internalType: "Fixed6",
                              name: "maker",
                              type: "int256",
                            },
                            {
                              internalType: "Fixed6",
                              name: "long",
                              type: "int256",
                            },
                            {
                              internalType: "Fixed6",
                              name: "short",
                              type: "int256",
                            },
                          ],
                          internalType: "struct Invalidation",
                          name: "invalidation",
                          type: "tuple",
                        },
                      ],
                      internalType: "struct Position",
                      name: "nextPosition",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "uint256",
                          name: "timestamp",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "maker",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "long",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "short",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "fee",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "keeper",
                          type: "uint256",
                        },
                        {
                          internalType: "Fixed6",
                          name: "collateral",
                          type: "int256",
                        },
                        {
                          internalType: "Fixed6",
                          name: "delta",
                          type: "int256",
                        },
                        {
                          components: [
                            {
                              internalType: "Fixed6",
                              name: "maker",
                              type: "int256",
                            },
                            {
                              internalType: "Fixed6",
                              name: "long",
                              type: "int256",
                            },
                            {
                              internalType: "Fixed6",
                              name: "short",
                              type: "int256",
                            },
                          ],
                          internalType: "struct Invalidation",
                          name: "invalidation",
                          type: "tuple",
                        },
                      ],
                      internalType: "struct Position[]",
                      name: "pendingPositions",
                      type: "tuple[]",
                    },
                    {
                      components: [
                        {
                          internalType: "bool",
                          name: "valid",
                          type: "bool",
                        },
                        {
                          components: [
                            {
                              internalType: "Fixed6",
                              name: "_value",
                              type: "int256",
                            },
                          ],
                          internalType: "struct Accumulator6",
                          name: "makerValue",
                          type: "tuple",
                        },
                        {
                          components: [
                            {
                              internalType: "Fixed6",
                              name: "_value",
                              type: "int256",
                            },
                          ],
                          internalType: "struct Accumulator6",
                          name: "longValue",
                          type: "tuple",
                        },
                        {
                          components: [
                            {
                              internalType: "Fixed6",
                              name: "_value",
                              type: "int256",
                            },
                          ],
                          internalType: "struct Accumulator6",
                          name: "shortValue",
                          type: "tuple",
                        },
                        {
                          components: [
                            {
                              internalType: "UFixed6",
                              name: "_value",
                              type: "uint256",
                            },
                          ],
                          internalType: "struct UAccumulator6",
                          name: "makerReward",
                          type: "tuple",
                        },
                        {
                          components: [
                            {
                              internalType: "UFixed6",
                              name: "_value",
                              type: "uint256",
                            },
                          ],
                          internalType: "struct UAccumulator6",
                          name: "longReward",
                          type: "tuple",
                        },
                        {
                          components: [
                            {
                              internalType: "UFixed6",
                              name: "_value",
                              type: "uint256",
                            },
                          ],
                          internalType: "struct UAccumulator6",
                          name: "shortReward",
                          type: "tuple",
                        },
                      ],
                      internalType: "struct Version[]",
                      name: "versions",
                      type: "tuple[]",
                    },
                    {
                      internalType: "Fixed6[]",
                      name: "prices",
                      type: "int256[]",
                    },
                  ],
                  internalType: "struct Lens.MarketAccountSnapshot[]",
                  name: "marketAccountSnapshots",
                  type: "tuple[]",
                },
              ],
              internalType: "struct Lens.SnapshotResult",
              name: "preUpdate",
              type: "tuple",
            },
            {
              components: [
                {
                  components: [
                    {
                      internalType: "contract IMarket",
                      name: "market",
                      type: "address",
                    },
                    {
                      components: [
                        {
                          internalType: "UFixed6",
                          name: "fundingFee",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "interestFee",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "positionFee",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "oracleFee",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "riskFee",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "maxPendingGlobal",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "maxPendingLocal",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "makerRewardRate",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "longRewardRate",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "shortRewardRate",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "settlementFee",
                          type: "uint256",
                        },
                        {
                          internalType: "bool",
                          name: "takerCloseAlways",
                          type: "bool",
                        },
                        {
                          internalType: "bool",
                          name: "makerCloseAlways",
                          type: "bool",
                        },
                        {
                          internalType: "bool",
                          name: "closed",
                          type: "bool",
                        },
                      ],
                      internalType: "struct MarketParameter",
                      name: "parameter",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "UFixed6",
                          name: "margin",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "maintenance",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "takerFee",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "takerSkewFee",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "takerImpactFee",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "makerFee",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "makerImpactFee",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "makerLimit",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "efficiencyLimit",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "liquidationFee",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "minLiquidationFee",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "maxLiquidationFee",
                          type: "uint256",
                        },
                        {
                          components: [
                            {
                              internalType: "UFixed6",
                              name: "minRate",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "maxRate",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "targetRate",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "targetUtilization",
                              type: "uint256",
                            },
                          ],
                          internalType: "struct UJumpRateUtilizationCurve6",
                          name: "utilizationCurve",
                          type: "tuple",
                        },
                        {
                          components: [
                            {
                              internalType: "UFixed6",
                              name: "k",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "max",
                              type: "uint256",
                            },
                          ],
                          internalType: "struct PController6",
                          name: "pController",
                          type: "tuple",
                        },
                        {
                          internalType: "UFixed6",
                          name: "minMargin",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "minMaintenance",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "virtualTaker",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "staleAfter",
                          type: "uint256",
                        },
                        {
                          internalType: "bool",
                          name: "makerReceiveOnly",
                          type: "bool",
                        },
                      ],
                      internalType: "struct RiskParameter",
                      name: "riskParameter",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "uint256",
                          name: "currentId",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "latestId",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "protocolFee",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "oracleFee",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "riskFee",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "donation",
                          type: "uint256",
                        },
                        {
                          components: [
                            {
                              internalType: "Fixed6",
                              name: "_value",
                              type: "int256",
                            },
                            {
                              internalType: "Fixed6",
                              name: "_skew",
                              type: "int256",
                            },
                          ],
                          internalType: "struct PAccumulator6",
                          name: "pAccumulator",
                          type: "tuple",
                        },
                        {
                          internalType: "Fixed6",
                          name: "latestPrice",
                          type: "int256",
                        },
                      ],
                      internalType: "struct Global",
                      name: "global",
                      type: "tuple",
                    },
                    {
                      internalType: "address",
                      name: "oracle",
                      type: "address",
                    },
                    {
                      components: [
                        {
                          internalType: "uint256",
                          name: "timestamp",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "maker",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "long",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "short",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "fee",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "keeper",
                          type: "uint256",
                        },
                        {
                          internalType: "Fixed6",
                          name: "collateral",
                          type: "int256",
                        },
                        {
                          internalType: "Fixed6",
                          name: "delta",
                          type: "int256",
                        },
                        {
                          components: [
                            {
                              internalType: "Fixed6",
                              name: "maker",
                              type: "int256",
                            },
                            {
                              internalType: "Fixed6",
                              name: "long",
                              type: "int256",
                            },
                            {
                              internalType: "Fixed6",
                              name: "short",
                              type: "int256",
                            },
                          ],
                          internalType: "struct Invalidation",
                          name: "invalidation",
                          type: "tuple",
                        },
                      ],
                      internalType: "struct Position",
                      name: "position",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "uint256",
                          name: "timestamp",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "maker",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "long",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "short",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "fee",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "keeper",
                          type: "uint256",
                        },
                        {
                          internalType: "Fixed6",
                          name: "collateral",
                          type: "int256",
                        },
                        {
                          internalType: "Fixed6",
                          name: "delta",
                          type: "int256",
                        },
                        {
                          components: [
                            {
                              internalType: "Fixed6",
                              name: "maker",
                              type: "int256",
                            },
                            {
                              internalType: "Fixed6",
                              name: "long",
                              type: "int256",
                            },
                            {
                              internalType: "Fixed6",
                              name: "short",
                              type: "int256",
                            },
                          ],
                          internalType: "struct Invalidation",
                          name: "invalidation",
                          type: "tuple",
                        },
                      ],
                      internalType: "struct Position",
                      name: "nextPosition",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "uint256",
                          name: "timestamp",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "maker",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "long",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "short",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "fee",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "keeper",
                          type: "uint256",
                        },
                        {
                          internalType: "Fixed6",
                          name: "collateral",
                          type: "int256",
                        },
                        {
                          internalType: "Fixed6",
                          name: "delta",
                          type: "int256",
                        },
                        {
                          components: [
                            {
                              internalType: "Fixed6",
                              name: "maker",
                              type: "int256",
                            },
                            {
                              internalType: "Fixed6",
                              name: "long",
                              type: "int256",
                            },
                            {
                              internalType: "Fixed6",
                              name: "short",
                              type: "int256",
                            },
                          ],
                          internalType: "struct Invalidation",
                          name: "invalidation",
                          type: "tuple",
                        },
                      ],
                      internalType: "struct Position[]",
                      name: "pendingPositions",
                      type: "tuple[]",
                    },
                    {
                      components: [
                        {
                          internalType: "bool",
                          name: "valid",
                          type: "bool",
                        },
                        {
                          components: [
                            {
                              internalType: "Fixed6",
                              name: "_value",
                              type: "int256",
                            },
                          ],
                          internalType: "struct Accumulator6",
                          name: "makerValue",
                          type: "tuple",
                        },
                        {
                          components: [
                            {
                              internalType: "Fixed6",
                              name: "_value",
                              type: "int256",
                            },
                          ],
                          internalType: "struct Accumulator6",
                          name: "longValue",
                          type: "tuple",
                        },
                        {
                          components: [
                            {
                              internalType: "Fixed6",
                              name: "_value",
                              type: "int256",
                            },
                          ],
                          internalType: "struct Accumulator6",
                          name: "shortValue",
                          type: "tuple",
                        },
                        {
                          components: [
                            {
                              internalType: "UFixed6",
                              name: "_value",
                              type: "uint256",
                            },
                          ],
                          internalType: "struct UAccumulator6",
                          name: "makerReward",
                          type: "tuple",
                        },
                        {
                          components: [
                            {
                              internalType: "UFixed6",
                              name: "_value",
                              type: "uint256",
                            },
                          ],
                          internalType: "struct UAccumulator6",
                          name: "longReward",
                          type: "tuple",
                        },
                        {
                          components: [
                            {
                              internalType: "UFixed6",
                              name: "_value",
                              type: "uint256",
                            },
                          ],
                          internalType: "struct UAccumulator6",
                          name: "shortReward",
                          type: "tuple",
                        },
                      ],
                      internalType: "struct Version[]",
                      name: "versions",
                      type: "tuple[]",
                    },
                    {
                      components: [
                        {
                          internalType: "uint256",
                          name: "timestamp",
                          type: "uint256",
                        },
                        {
                          internalType: "Fixed6",
                          name: "price",
                          type: "int256",
                        },
                        {
                          internalType: "bool",
                          name: "valid",
                          type: "bool",
                        },
                      ],
                      internalType: "struct OracleVersion",
                      name: "latestOracleVersion",
                      type: "tuple",
                    },
                    {
                      internalType: "uint256",
                      name: "currentOracleVersion",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct Lens.MarketSnapshot[]",
                  name: "marketSnapshots",
                  type: "tuple[]",
                },
                {
                  components: [
                    {
                      internalType: "contract IMarket",
                      name: "market",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "account",
                      type: "address",
                    },
                    {
                      components: [
                        {
                          internalType: "uint256",
                          name: "currentId",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "latestId",
                          type: "uint256",
                        },
                        {
                          internalType: "Fixed6",
                          name: "collateral",
                          type: "int256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "reward",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "protection",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct Local",
                      name: "local",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "uint256",
                          name: "timestamp",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "maker",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "long",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "short",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "fee",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "keeper",
                          type: "uint256",
                        },
                        {
                          internalType: "Fixed6",
                          name: "collateral",
                          type: "int256",
                        },
                        {
                          internalType: "Fixed6",
                          name: "delta",
                          type: "int256",
                        },
                        {
                          components: [
                            {
                              internalType: "Fixed6",
                              name: "maker",
                              type: "int256",
                            },
                            {
                              internalType: "Fixed6",
                              name: "long",
                              type: "int256",
                            },
                            {
                              internalType: "Fixed6",
                              name: "short",
                              type: "int256",
                            },
                          ],
                          internalType: "struct Invalidation",
                          name: "invalidation",
                          type: "tuple",
                        },
                      ],
                      internalType: "struct Position",
                      name: "position",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "uint256",
                          name: "timestamp",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "maker",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "long",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "short",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "fee",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "keeper",
                          type: "uint256",
                        },
                        {
                          internalType: "Fixed6",
                          name: "collateral",
                          type: "int256",
                        },
                        {
                          internalType: "Fixed6",
                          name: "delta",
                          type: "int256",
                        },
                        {
                          components: [
                            {
                              internalType: "Fixed6",
                              name: "maker",
                              type: "int256",
                            },
                            {
                              internalType: "Fixed6",
                              name: "long",
                              type: "int256",
                            },
                            {
                              internalType: "Fixed6",
                              name: "short",
                              type: "int256",
                            },
                          ],
                          internalType: "struct Invalidation",
                          name: "invalidation",
                          type: "tuple",
                        },
                      ],
                      internalType: "struct Position",
                      name: "nextPosition",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "uint256",
                          name: "timestamp",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "maker",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "long",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "short",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "fee",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "keeper",
                          type: "uint256",
                        },
                        {
                          internalType: "Fixed6",
                          name: "collateral",
                          type: "int256",
                        },
                        {
                          internalType: "Fixed6",
                          name: "delta",
                          type: "int256",
                        },
                        {
                          components: [
                            {
                              internalType: "Fixed6",
                              name: "maker",
                              type: "int256",
                            },
                            {
                              internalType: "Fixed6",
                              name: "long",
                              type: "int256",
                            },
                            {
                              internalType: "Fixed6",
                              name: "short",
                              type: "int256",
                            },
                          ],
                          internalType: "struct Invalidation",
                          name: "invalidation",
                          type: "tuple",
                        },
                      ],
                      internalType: "struct Position[]",
                      name: "pendingPositions",
                      type: "tuple[]",
                    },
                    {
                      components: [
                        {
                          internalType: "bool",
                          name: "valid",
                          type: "bool",
                        },
                        {
                          components: [
                            {
                              internalType: "Fixed6",
                              name: "_value",
                              type: "int256",
                            },
                          ],
                          internalType: "struct Accumulator6",
                          name: "makerValue",
                          type: "tuple",
                        },
                        {
                          components: [
                            {
                              internalType: "Fixed6",
                              name: "_value",
                              type: "int256",
                            },
                          ],
                          internalType: "struct Accumulator6",
                          name: "longValue",
                          type: "tuple",
                        },
                        {
                          components: [
                            {
                              internalType: "Fixed6",
                              name: "_value",
                              type: "int256",
                            },
                          ],
                          internalType: "struct Accumulator6",
                          name: "shortValue",
                          type: "tuple",
                        },
                        {
                          components: [
                            {
                              internalType: "UFixed6",
                              name: "_value",
                              type: "uint256",
                            },
                          ],
                          internalType: "struct UAccumulator6",
                          name: "makerReward",
                          type: "tuple",
                        },
                        {
                          components: [
                            {
                              internalType: "UFixed6",
                              name: "_value",
                              type: "uint256",
                            },
                          ],
                          internalType: "struct UAccumulator6",
                          name: "longReward",
                          type: "tuple",
                        },
                        {
                          components: [
                            {
                              internalType: "UFixed6",
                              name: "_value",
                              type: "uint256",
                            },
                          ],
                          internalType: "struct UAccumulator6",
                          name: "shortReward",
                          type: "tuple",
                        },
                      ],
                      internalType: "struct Version[]",
                      name: "versions",
                      type: "tuple[]",
                    },
                    {
                      internalType: "Fixed6[]",
                      name: "prices",
                      type: "int256[]",
                    },
                  ],
                  internalType: "struct Lens.MarketAccountSnapshot[]",
                  name: "marketAccountSnapshots",
                  type: "tuple[]",
                },
              ],
              internalType: "struct Lens.SnapshotResult",
              name: "postUpdate",
              type: "tuple",
            },
          ],
          internalType: "struct Lens.SnapshotReturnValue",
          name: "result",
          type: "tuple",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "contract IMarket",
          name: "market",
          type: "address",
        },
      ],
      name: "snapshotMarket",
      outputs: [
        {
          components: [
            {
              internalType: "contract IMarket",
              name: "market",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "UFixed6",
                  name: "fundingFee",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "interestFee",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "positionFee",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "oracleFee",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "riskFee",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "maxPendingGlobal",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "maxPendingLocal",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "makerRewardRate",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "longRewardRate",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "shortRewardRate",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "settlementFee",
                  type: "uint256",
                },
                {
                  internalType: "bool",
                  name: "takerCloseAlways",
                  type: "bool",
                },
                {
                  internalType: "bool",
                  name: "makerCloseAlways",
                  type: "bool",
                },
                {
                  internalType: "bool",
                  name: "closed",
                  type: "bool",
                },
              ],
              internalType: "struct MarketParameter",
              name: "parameter",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "UFixed6",
                  name: "margin",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "maintenance",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "takerFee",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "takerSkewFee",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "takerImpactFee",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "makerFee",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "makerImpactFee",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "makerLimit",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "efficiencyLimit",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "liquidationFee",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "minLiquidationFee",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "maxLiquidationFee",
                  type: "uint256",
                },
                {
                  components: [
                    {
                      internalType: "UFixed6",
                      name: "minRate",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "maxRate",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "targetRate",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "targetUtilization",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct UJumpRateUtilizationCurve6",
                  name: "utilizationCurve",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "UFixed6",
                      name: "k",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "max",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct PController6",
                  name: "pController",
                  type: "tuple",
                },
                {
                  internalType: "UFixed6",
                  name: "minMargin",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "minMaintenance",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "virtualTaker",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "staleAfter",
                  type: "uint256",
                },
                {
                  internalType: "bool",
                  name: "makerReceiveOnly",
                  type: "bool",
                },
              ],
              internalType: "struct RiskParameter",
              name: "riskParameter",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "currentId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "latestId",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "protocolFee",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "oracleFee",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "riskFee",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "donation",
                  type: "uint256",
                },
                {
                  components: [
                    {
                      internalType: "Fixed6",
                      name: "_value",
                      type: "int256",
                    },
                    {
                      internalType: "Fixed6",
                      name: "_skew",
                      type: "int256",
                    },
                  ],
                  internalType: "struct PAccumulator6",
                  name: "pAccumulator",
                  type: "tuple",
                },
                {
                  internalType: "Fixed6",
                  name: "latestPrice",
                  type: "int256",
                },
              ],
              internalType: "struct Global",
              name: "global",
              type: "tuple",
            },
            {
              internalType: "address",
              name: "oracle",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "timestamp",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "maker",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "long",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "short",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "fee",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "keeper",
                  type: "uint256",
                },
                {
                  internalType: "Fixed6",
                  name: "collateral",
                  type: "int256",
                },
                {
                  internalType: "Fixed6",
                  name: "delta",
                  type: "int256",
                },
                {
                  components: [
                    {
                      internalType: "Fixed6",
                      name: "maker",
                      type: "int256",
                    },
                    {
                      internalType: "Fixed6",
                      name: "long",
                      type: "int256",
                    },
                    {
                      internalType: "Fixed6",
                      name: "short",
                      type: "int256",
                    },
                  ],
                  internalType: "struct Invalidation",
                  name: "invalidation",
                  type: "tuple",
                },
              ],
              internalType: "struct Position",
              name: "position",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "timestamp",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "maker",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "long",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "short",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "fee",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "keeper",
                  type: "uint256",
                },
                {
                  internalType: "Fixed6",
                  name: "collateral",
                  type: "int256",
                },
                {
                  internalType: "Fixed6",
                  name: "delta",
                  type: "int256",
                },
                {
                  components: [
                    {
                      internalType: "Fixed6",
                      name: "maker",
                      type: "int256",
                    },
                    {
                      internalType: "Fixed6",
                      name: "long",
                      type: "int256",
                    },
                    {
                      internalType: "Fixed6",
                      name: "short",
                      type: "int256",
                    },
                  ],
                  internalType: "struct Invalidation",
                  name: "invalidation",
                  type: "tuple",
                },
              ],
              internalType: "struct Position",
              name: "nextPosition",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "timestamp",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "maker",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "long",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "short",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "fee",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "keeper",
                  type: "uint256",
                },
                {
                  internalType: "Fixed6",
                  name: "collateral",
                  type: "int256",
                },
                {
                  internalType: "Fixed6",
                  name: "delta",
                  type: "int256",
                },
                {
                  components: [
                    {
                      internalType: "Fixed6",
                      name: "maker",
                      type: "int256",
                    },
                    {
                      internalType: "Fixed6",
                      name: "long",
                      type: "int256",
                    },
                    {
                      internalType: "Fixed6",
                      name: "short",
                      type: "int256",
                    },
                  ],
                  internalType: "struct Invalidation",
                  name: "invalidation",
                  type: "tuple",
                },
              ],
              internalType: "struct Position[]",
              name: "pendingPositions",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "bool",
                  name: "valid",
                  type: "bool",
                },
                {
                  components: [
                    {
                      internalType: "Fixed6",
                      name: "_value",
                      type: "int256",
                    },
                  ],
                  internalType: "struct Accumulator6",
                  name: "makerValue",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "Fixed6",
                      name: "_value",
                      type: "int256",
                    },
                  ],
                  internalType: "struct Accumulator6",
                  name: "longValue",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "Fixed6",
                      name: "_value",
                      type: "int256",
                    },
                  ],
                  internalType: "struct Accumulator6",
                  name: "shortValue",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "UFixed6",
                      name: "_value",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct UAccumulator6",
                  name: "makerReward",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "UFixed6",
                      name: "_value",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct UAccumulator6",
                  name: "longReward",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "UFixed6",
                      name: "_value",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct UAccumulator6",
                  name: "shortReward",
                  type: "tuple",
                },
              ],
              internalType: "struct Version[]",
              name: "versions",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "timestamp",
                  type: "uint256",
                },
                {
                  internalType: "Fixed6",
                  name: "price",
                  type: "int256",
                },
                {
                  internalType: "bool",
                  name: "valid",
                  type: "bool",
                },
              ],
              internalType: "struct OracleVersion",
              name: "latestOracleVersion",
              type: "tuple",
            },
            {
              internalType: "uint256",
              name: "currentOracleVersion",
              type: "uint256",
            },
          ],
          internalType: "struct Lens.MarketSnapshot",
          name: "marketSnapshot",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "contract IMarket",
          name: "market",
          type: "address",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "snapshotMarketAccount",
      outputs: [
        {
          components: [
            {
              internalType: "contract IMarket",
              name: "market",
              type: "address",
            },
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "currentId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "latestId",
                  type: "uint256",
                },
                {
                  internalType: "Fixed6",
                  name: "collateral",
                  type: "int256",
                },
                {
                  internalType: "UFixed6",
                  name: "reward",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "protection",
                  type: "uint256",
                },
              ],
              internalType: "struct Local",
              name: "local",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "timestamp",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "maker",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "long",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "short",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "fee",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "keeper",
                  type: "uint256",
                },
                {
                  internalType: "Fixed6",
                  name: "collateral",
                  type: "int256",
                },
                {
                  internalType: "Fixed6",
                  name: "delta",
                  type: "int256",
                },
                {
                  components: [
                    {
                      internalType: "Fixed6",
                      name: "maker",
                      type: "int256",
                    },
                    {
                      internalType: "Fixed6",
                      name: "long",
                      type: "int256",
                    },
                    {
                      internalType: "Fixed6",
                      name: "short",
                      type: "int256",
                    },
                  ],
                  internalType: "struct Invalidation",
                  name: "invalidation",
                  type: "tuple",
                },
              ],
              internalType: "struct Position",
              name: "position",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "timestamp",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "maker",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "long",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "short",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "fee",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "keeper",
                  type: "uint256",
                },
                {
                  internalType: "Fixed6",
                  name: "collateral",
                  type: "int256",
                },
                {
                  internalType: "Fixed6",
                  name: "delta",
                  type: "int256",
                },
                {
                  components: [
                    {
                      internalType: "Fixed6",
                      name: "maker",
                      type: "int256",
                    },
                    {
                      internalType: "Fixed6",
                      name: "long",
                      type: "int256",
                    },
                    {
                      internalType: "Fixed6",
                      name: "short",
                      type: "int256",
                    },
                  ],
                  internalType: "struct Invalidation",
                  name: "invalidation",
                  type: "tuple",
                },
              ],
              internalType: "struct Position",
              name: "nextPosition",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "timestamp",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "maker",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "long",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "short",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "fee",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "keeper",
                  type: "uint256",
                },
                {
                  internalType: "Fixed6",
                  name: "collateral",
                  type: "int256",
                },
                {
                  internalType: "Fixed6",
                  name: "delta",
                  type: "int256",
                },
                {
                  components: [
                    {
                      internalType: "Fixed6",
                      name: "maker",
                      type: "int256",
                    },
                    {
                      internalType: "Fixed6",
                      name: "long",
                      type: "int256",
                    },
                    {
                      internalType: "Fixed6",
                      name: "short",
                      type: "int256",
                    },
                  ],
                  internalType: "struct Invalidation",
                  name: "invalidation",
                  type: "tuple",
                },
              ],
              internalType: "struct Position[]",
              name: "pendingPositions",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "bool",
                  name: "valid",
                  type: "bool",
                },
                {
                  components: [
                    {
                      internalType: "Fixed6",
                      name: "_value",
                      type: "int256",
                    },
                  ],
                  internalType: "struct Accumulator6",
                  name: "makerValue",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "Fixed6",
                      name: "_value",
                      type: "int256",
                    },
                  ],
                  internalType: "struct Accumulator6",
                  name: "longValue",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "Fixed6",
                      name: "_value",
                      type: "int256",
                    },
                  ],
                  internalType: "struct Accumulator6",
                  name: "shortValue",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "UFixed6",
                      name: "_value",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct UAccumulator6",
                  name: "makerReward",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "UFixed6",
                      name: "_value",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct UAccumulator6",
                  name: "longReward",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "UFixed6",
                      name: "_value",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct UAccumulator6",
                  name: "shortReward",
                  type: "tuple",
                },
              ],
              internalType: "struct Version[]",
              name: "versions",
              type: "tuple[]",
            },
            {
              internalType: "Fixed6[]",
              name: "prices",
              type: "int256[]",
            },
          ],
          internalType: "struct Lens.MarketAccountSnapshot",
          name: "marketAccountSnapshot",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "contract IMarket",
          name: "market",
          type: "address",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "updateNoop",
      outputs: [
        {
          internalType: "bytes",
          name: "",
          type: "bytes",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
  bytecode:
    "0x608060405234801561001057600080fd5b5061420e806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806323e46fea1461005c578063558484641461008c5780636eb79f6a146100bc5780637987bd7f146100ec5780637e8306ad1461011c575b600080fd5b6100766004803603810190610071919061201d565b61014c565b6040516100839190612f61565b60405180910390f35b6100a660048036038101906100a19190612f83565b610636565b6040516100b3919061300d565b60405180910390f35b6100d660048036038101906100d1919061302f565b61073f565b6040516100e39190613158565b60405180910390f35b61010660048036038101906101019190612f83565b610e87565b604051610113919061323c565b60405180910390f35b6101366004803603810190610131919061325e565b611598565b604051610143919061300d565b60405180910390f35b6101546116d3565b6000835167ffffffffffffffff81111561017157610170611b82565b5b6040519080825280602002602001820160405280156101aa57816020015b610197611707565b81526020019060019003908161018f5790505b5090506000845167ffffffffffffffff8111156101ca576101c9611b82565b5b60405190808252806020026020018201604052801561020357816020015b6101f06117b1565b8152602001906001900390816101e85790505b50905060005b85518110156102a857610235868281518110610228576102276132f5565b5b602002602001015161073f565b838281518110610248576102476132f5565b5b6020026020010181905250610277868281518110610269576102686132f5565b5b602002602001015186610e87565b82828151811061028a576102896132f5565b5b602002602001018190525080806102a090613353565b915050610209565b508183604001516000018190525080836040015160200181905250855167ffffffffffffffff8111156102de576102dd611b82565b5b60405190808252806020026020018201604052801561031157816020015b60608152602001906001900390816102fc5790505b50836000018190525060005b86518110156103fe576103c987828151811061033c5761033b6132f5565b5b60200260200101516000015188838151811061035b5761035a6132f5565b5b60200260200101516020015189848151811061037a576103796132f5565b5b6020026020010151604001518a8581518110610399576103986132f5565b5b6020026020010151606001518b86815181106103b8576103b76132f5565b5b602002602001015160800151611598565b846000015182815181106103e0576103df6132f5565b5b602002602001018190525080806103f690613353565b91505061031d565b50845167ffffffffffffffff81111561041a57610419611b82565b5b60405190808252806020026020018201604052801561044d57816020015b60608152602001906001900390816104385790505b50836020018190525060005b85518110156104bb57610486868281518110610478576104776132f5565b5b602002602001015186610636565b8460200151828151811061049d5761049c6132f5565b5b602002602001018190525080806104b390613353565b915050610459565b506000855167ffffffffffffffff8111156104d9576104d8611b82565b5b60405190808252806020026020018201604052801561051257816020015b6104ff611707565b8152602001906001900390816104f75790505b5090506000865167ffffffffffffffff81111561053257610531611b82565b5b60405190808252806020026020018201604052801561056b57816020015b6105586117b1565b8152602001906001900390816105505790505b50905060005b87518110156106105761059d8882815181106105905761058f6132f5565b5b602002602001015161073f565b8382815181106105b0576105af6132f5565b5b60200260200101819052506105df8882815181106105d1576105d06132f5565b5b602002602001015188610e87565b8282815181106105f2576105f16132f5565b5b6020026020010181905250808061060890613353565b915050610571565b508185606001516000018190525080856060015160200181905250505050509392505050565b60608273ffffffffffffffffffffffffffffffffffffffff166391eece28837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6000806040518763ffffffff1660e01b81526004016106bc969594939291906133d7565b600060405180830381600087803b1580156106d657600080fd5b505af19250505080156106e7575060015b610726573d8060008114610717576040519150601f19603f3d011682016040523d82523d6000602084013e61071c565b606091505b5080915050610739565b6040518060200160405280600081525090505b92915050565b610747611707565b81816000019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508173ffffffffffffffffffffffffffffffffffffffff1663ad4d4e296040518163ffffffff1660e01b81526004016101c060405180830381865afa1580156107cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ef91906135f3565b81602001819052508173ffffffffffffffffffffffffffffffffffffffff16634549a6296040518163ffffffff1660e01b81526004016102e060405180830381865afa158015610843573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061086791906138a5565b81604001819052508173ffffffffffffffffffffffffffffffffffffffff1663a05f99066040518163ffffffff1660e01b815260040161012060405180830381865afa1580156108bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108df9190613a1a565b81606001819052508173ffffffffffffffffffffffffffffffffffffffff166309218e916040518163ffffffff1660e01b815260040161016060405180830381865afa158015610933573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109579190613b8c565b8160a00181905250600181606001516020015182606001516000015161097d9190613bba565b6109879190613bee565b67ffffffffffffffff8111156109a05761099f611b82565b5b6040519080825280602002602001820160405280156109d957816020015b6109c6611834565b8152602001906001900390816109be5790505b508160e001819052508060e001515167ffffffffffffffff811115610a0157610a00611b82565b5b604051908082528060200260200182016040528015610a3a57816020015b610a27611886565b815260200190600190039081610a1f5790505b508161010001819052508173ffffffffffffffffffffffffffffffffffffffff16637dc0d1d06040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a8f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ab39190613c60565b816080019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505060005b8160e0015151811015610c7c578273ffffffffffffffffffffffffffffffffffffffff1663a1d0a11382846060015160200151610b2a9190613bee565b6040518263ffffffff1660e01b8152600401610b469190613c9c565b61016060405180830381865afa158015610b64573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b889190613b8c565b8260e001518281518110610b9f57610b9e6132f5565b5b60200260200101819052508273ffffffffffffffffffffffffffffffffffffffff166387aee00e8360e001518381518110610bdd57610bdc6132f5565b5b6020026020010151600001516040518263ffffffff1660e01b8152600401610c059190613c9c565b60e060405180830381865afa158015610c22573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c469190613de3565b8261010001518281518110610c5e57610c5d6132f5565b5b60200260200101819052508080610c7490613353565b915050610aed565b508060e0015160018260e0015151610c949190613bba565b81518110610ca557610ca46132f5565b5b60200260200101518160c001819052508173ffffffffffffffffffffffffffffffffffffffff16637dc0d1d06040518163ffffffff1660e01b8152600401602060405180830381865afa158015610d00573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d249190613c60565b73ffffffffffffffffffffffffffffffffffffffff166352bfe7896040518163ffffffff1660e01b8152600401606060405180830381865afa158015610d6e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d929190613e74565b8161012001819052508173ffffffffffffffffffffffffffffffffffffffff16637dc0d1d06040518163ffffffff1660e01b8152600401602060405180830381865afa158015610de6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e0a9190613c60565b73ffffffffffffffffffffffffffffffffffffffff16639fa6a6e36040518163ffffffff1660e01b8152600401602060405180830381865afa158015610e54573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e789190613ea1565b81610140018181525050919050565b610e8f6117b1565b82816000019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505081816020019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508273ffffffffffffffffffffffffffffffffffffffff16635b4b9695836040518263ffffffff1660e01b8152600401610f389190613ece565b60a060405180830381865afa158015610f55573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f799190613f75565b81604001819052508273ffffffffffffffffffffffffffffffffffffffff166355f57510836040518263ffffffff1660e01b8152600401610fba9190613ece565b61016060405180830381865afa158015610fd8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ffc9190613b8c565b816060018190525060018160400151602001518260400151600001516110229190613bba565b61102c9190613bee565b67ffffffffffffffff81111561104557611044611b82565b5b60405190808252806020026020018201604052801561107e57816020015b61106b611834565b8152602001906001900390816110635790505b508160a001819052508060a001515167ffffffffffffffff8111156110a6576110a5611b82565b5b6040519080825280602002602001820160405280156110df57816020015b6110cc611886565b8152602001906001900390816110c45790505b508160c001819052508060a001515167ffffffffffffffff81111561110757611106611b82565b5b6040519080825280602002602001820160405280156111355781602001602082028036833780820191505090505b508160e0018190525060008373ffffffffffffffffffffffffffffffffffffffff16637dc0d1d06040518163ffffffff1660e01b8152600401602060405180830381865afa15801561118b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111af9190613c60565b905060008473ffffffffffffffffffffffffffffffffffffffff166395fcd8366040518163ffffffff1660e01b8152600401602060405180830381865afa1580156111fe573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112229190613fe0565b905060005b8360a0015151811015611557578573ffffffffffffffffffffffffffffffffffffffff1663ce813aed86838760400151602001516112659190613bee565b6040518363ffffffff1660e01b815260040161128292919061400d565b61016060405180830381865afa1580156112a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112c49190613b8c565b8460a0015182815181106112db576112da6132f5565b5b60200260200101819052508573ffffffffffffffffffffffffffffffffffffffff166387aee00e8560a001518381518110611319576113186132f5565b5b6020026020010151600001516040518263ffffffff1660e01b81526004016113419190613c9c565b60e060405180830381865afa15801561135e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113829190613de3565b8460c001518281518110611399576113986132f5565b5b602002602001018190525060008373ffffffffffffffffffffffffffffffffffffffff1663e0886f908660a0015184815181106113d9576113d86132f5565b5b6020026020010151600001516040518263ffffffff1660e01b81526004016114019190613c9c565b606060405180830381865afa15801561141e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114429190613e74565b602001519050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036114a557808560e001518381518110611494576114936132f5565b5b602002602001018181525050611543565b8273ffffffffffffffffffffffffffffffffffffffff1663d7c7a935826040518263ffffffff1660e01b81526004016114de9190614036565b602060405180830381865afa1580156114fb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061151f9190614051565b8560e001518381518110611536576115356132f5565b5b6020026020010181815250505b50808061154f90613353565b915050611227565b508260a0015160018460a001515161156f9190613bba565b815181106115805761157f6132f5565b5b60200260200101518360800181905250505092915050565b60608573ffffffffffffffffffffffffffffffffffffffff1663b1d50a48868686866040518563ffffffff1660e01b81526004016115d89392919061407e565b6000604051808303818588803b1580156115f157600080fd5b505af193505050508015611603575060015b6116b75761160f6140c9565b806308c379a00361163757506116236140eb565b8061162e575061167c565b809150506116ca565b634e487b710361167c5761164961417b565b90611654575061167c565b8060405160200161166591906141bd565b6040516020818303038152906040529150506116ca565b3d80600081146116a8576040519150601f19603f3d011682016040523d82523d6000602084013e6116ad565b606091505b50809150506116ca565b6040518060200160405280600081525090505b95945050505050565b604051806080016040528060608152602001606081526020016116f46118e9565b81526020016117016118e9565b81525090565b604051806101600160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001611738611903565b8152602001611745611978565b8152602001611752611a18565b8152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200161177c611834565b8152602001611789611834565b815260200160608152602001606081526020016117a4611a63565b8152602001600081525090565b604051806101000160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016117ff611a86565b815260200161180c611834565b8152602001611819611834565b81526020016060815260200160608152602001606081525090565b6040518061012001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001611880611ab5565b81525090565b6040518060e001604052806000151581526020016118a2611ad6565b81526020016118af611ad6565b81526020016118bc611ad6565b81526020016118c9611ae9565b81526020016118d6611ae9565b81526020016118e3611ae9565b81525090565b604051806040016040528060608152602001606081525090565b604051806101c0016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000151581526020016000151581526020016000151581525090565b6040518061026001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016119e0611afc565b81526020016119ed611b24565b8152602001600081526020016000815260200160008152602001600081526020016000151581525090565b604051806101000160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001611a56611b3e565b8152602001600081525090565b604051806060016040528060008152602001600081526020016000151581525090565b6040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b60405180606001604052806000815260200160008152602001600081525090565b6040518060200160405280600081525090565b6040518060200160405280600081525090565b6040518060800160405280600081526020016000815260200160008152602001600081525090565b604051806040016040528060008152602001600081525090565b604051806040016040528060008152602001600081525090565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611bba82611b71565b810181811067ffffffffffffffff82111715611bd957611bd8611b82565b5b80604052505050565b6000611bec611b58565b9050611bf88282611bb1565b919050565b600067ffffffffffffffff821115611c1857611c17611b82565b5b602082029050602081019050919050565b600080fd5b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611c6382611c38565b9050919050565b6000611c7582611c58565b9050919050565b611c8581611c6a565b8114611c9057600080fd5b50565b600081359050611ca281611c7c565b92915050565b6000819050919050565b611cbb81611ca8565b8114611cc657600080fd5b50565b600081359050611cd881611cb2565b92915050565b600080fd5b600067ffffffffffffffff821115611cfe57611cfd611b82565b5b611d0782611b71565b9050602081019050919050565b82818337600083830152505050565b6000611d36611d3184611ce3565b611be2565b905082815260208101848484011115611d5257611d51611cde565b5b611d5d848285611d14565b509392505050565b600082601f830112611d7a57611d79611b6c565b5b8135611d8a848260208601611d23565b91505092915050565b600060a08284031215611da957611da8611c2e565b5b611db360a0611be2565b90506000611dc384828501611c93565b6000830152506020611dd784828501611cc9565b6020830152506040611deb84828501611cc9565b6040830152506060611dff84828501611cc9565b606083015250608082013567ffffffffffffffff811115611e2357611e22611c33565b5b611e2f84828501611d65565b60808301525092915050565b6000611e4e611e4984611bfd565b611be2565b90508083825260208201905060208402830185811115611e7157611e70611c29565b5b835b81811015611eb857803567ffffffffffffffff811115611e9657611e95611b6c565b5b808601611ea38982611d93565b85526020850194505050602081019050611e73565b5050509392505050565b600082601f830112611ed757611ed6611b6c565b5b8135611ee7848260208601611e3b565b91505092915050565b600067ffffffffffffffff821115611f0b57611f0a611b82565b5b602082029050602081019050919050565b6000611f2782611c58565b9050919050565b611f3781611f1c565b8114611f4257600080fd5b50565b600081359050611f5481611f2e565b92915050565b6000611f6d611f6884611ef0565b611be2565b90508083825260208201905060208402830185811115611f9057611f8f611c29565b5b835b81811015611fb95780611fa58882611f45565b845260208401935050602081019050611f92565b5050509392505050565b600082601f830112611fd857611fd7611b6c565b5b8135611fe8848260208601611f5a565b91505092915050565b611ffa81611c58565b811461200557600080fd5b50565b60008135905061201781611ff1565b92915050565b60008060006060848603121561203657612035611b62565b5b600084013567ffffffffffffffff81111561205457612053611b67565b5b61206086828701611ec2565b935050602084013567ffffffffffffffff81111561208157612080611b67565b5b61208d86828701611fc3565b925050604061209e86828701612008565b9150509250925092565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561210e5780820151818401526020810190506120f3565b60008484015250505050565b6000612125826120d4565b61212f81856120df565b935061213f8185602086016120f0565b61214881611b71565b840191505092915050565b600061215f838361211a565b905092915050565b6000602082019050919050565b600061217f826120a8565b61218981856120b3565b93508360208202850161219b856120c4565b8060005b858110156121d757848403895281516121b88582612153565b94506121c383612167565b925060208a0199505060018101905061219f565b50829750879550505050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000819050919050565b600061223a61223561223084611c38565b612215565b611c38565b9050919050565b600061224c8261221f565b9050919050565b600061225e82612241565b9050919050565b61226e81612253565b82525050565b600061228f61228a61228584611ca8565b612215565b611ca8565b9050919050565b61229f81612274565b82525050565b6122ae81611ca8565b82525050565b60008115159050919050565b6122c9816122b4565b82525050565b6101c0820160008201516122e66000850182612296565b5060208201516122f96020850182612296565b50604082015161230c6040850182612296565b50606082015161231f6060850182612296565b5060808201516123326080850182612296565b5060a082015161234560a08501826122a5565b5060c082015161235860c08501826122a5565b5060e082015161236b60e0850182612296565b50610100820151612380610100850182612296565b50610120820151612395610120850182612296565b506101408201516123aa610140850182612296565b506101608201516123bf6101608501826122c0565b506101808201516123d46101808501826122c0565b506101a08201516123e96101a08501826122c0565b50505050565b6080820160008201516124056000850182612296565b5060208201516124186020850182612296565b50604082015161242b6040850182612296565b50606082015161243e6060850182612296565b50505050565b60408201600082015161245a6000850182612296565b50602082015161246d6020850182612296565b50505050565b6102e08201600082015161248a6000850182612296565b50602082015161249d6020850182612296565b5060408201516124b06040850182612296565b5060608201516124c36060850182612296565b5060808201516124d66080850182612296565b5060a08201516124e960a0850182612296565b5060c08201516124fc60c0850182612296565b5060e082015161250f60e0850182612296565b50610100820151612524610100850182612296565b50610120820151612539610120850182612296565b5061014082015161254e610140850182612296565b50610160820151612563610160850182612296565b506101808201516125786101808501826123ef565b506101a082015161258d610200850182612444565b506101c08201516125a2610240850182612296565b506101e08201516125b7610260850182612296565b506102008201516125cc610280850182612296565b506102208201516125e16102a08501826122a5565b506102408201516125f66102c08501826122c0565b50505050565b6000819050919050565b600061262161261c612617846125fc565b612215565b6125fc565b9050919050565b61263181612606565b82525050565b60408201600082015161264d6000850182612628565b5060208201516126606020850182612628565b50505050565b6101208201600082015161267d60008501826122a5565b50602082015161269060208501826122a5565b5060408201516126a36040850182612296565b5060608201516126b66060850182612296565b5060808201516126c96080850182612296565b5060a08201516126dc60a0850182612296565b5060c08201516126ef60c0850182612637565b5060e0820151612703610100850182612628565b50505050565b61271281611c58565b82525050565b60608201600082015161272e6000850182612628565b5060208201516127416020850182612628565b5060408201516127546040850182612628565b50505050565b6101608201600082015161277160008501826122a5565b5060208201516127846020850182612296565b5060408201516127976040850182612296565b5060608201516127aa6060850182612296565b5060808201516127bd6080850182612296565b5060a08201516127d060a0850182612296565b5060c08201516127e360c0850182612628565b5060e08201516127f660e0850182612628565b5061010082015161280b610100850182612718565b50505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000612849838361275a565b6101608301905092915050565b6000602082019050919050565b600061286e82612811565b612878818561281c565b93506128838361282d565b8060005b838110156128b457815161289b888261283d565b97506128a683612856565b925050600181019050612887565b5085935050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6020820160008201516129036000850182612628565b50505050565b60208201600082015161291f6000850182612296565b50505050565b60e08201600082015161293b60008501826122c0565b50602082015161294e60208501826128ed565b50604082015161296160408501826128ed565b50606082015161297460608501826128ed565b5060808201516129876080850182612909565b5060a082015161299a60a0850182612909565b5060c08201516129ad60c0850182612909565b50505050565b60006129bf8383612925565b60e08301905092915050565b6000602082019050919050565b60006129e3826128c1565b6129ed81856128cc565b93506129f8836128dd565b8060005b83811015612a29578151612a1088826129b3565b9750612a1b836129cb565b9250506001810190506129fc565b5085935050505092915050565b606082016000820151612a4c60008501826122a5565b506020820151612a5f6020850182612628565b506040820151612a7260408501826122c0565b50505050565b600061098083016000830151612a916000860182612265565b506020830151612aa460208601826122cf565b506040830151612ab86101e0860182612473565b506060830151612acc6104c0860182612666565b506080830151612ae06105e0860182612709565b5060a0830151612af461060086018261275a565b5060c0830151612b0861076086018261275a565b5060e08301518482036108c0860152612b218282612863565b9150506101008301518482036108e0860152612b3d82826129d8565b915050610120830151612b54610900860182612a36565b50610140830151612b696109608601826122a5565b508091505092915050565b6000612b808383612a78565b905092915050565b6000602082019050919050565b6000612ba0826121e9565b612baa81856121f4565b935083602082028501612bbc85612205565b8060005b85811015612bf85784840389528151612bd98582612b74565b9450612be483612b88565b925060208a01995050600181019050612bc0565b50829750879550505050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60a082016000820151612c4c60008501826122a5565b506020820151612c5f60208501826122a5565b506040820151612c726040850182612628565b506060820151612c856060850182612296565b506080820151612c9860808501826122a5565b50505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000612cd68383612628565b60208301905092915050565b6000602082019050919050565b6000612cfa82612c9e565b612d048185612ca9565b9350612d0f83612cba565b8060005b83811015612d40578151612d278882612cca565b9750612d3283612ce2565b925050600181019050612d13565b5085935050505092915050565b600061040083016000830151612d666000860182612265565b506020830151612d796020860182612709565b506040830151612d8c6040860182612c36565b506060830151612d9f60e086018261275a565b506080830151612db361024086018261275a565b5060a08301518482036103a0860152612dcc8282612863565b91505060c08301518482036103c0860152612de782826129d8565b91505060e08301518482036103e0860152612e028282612cef565b9150508091505092915050565b6000612e1b8383612d4d565b905092915050565b6000602082019050919050565b6000612e3b82612c0a565b612e458185612c15565b935083602082028501612e5785612c26565b8060005b85811015612e935784840389528151612e748582612e0f565b9450612e7f83612e23565b925060208a01995050600181019050612e5b565b50829750879550505050505092915050565b60006040830160008301518482036000860152612ec28282612b95565b91505060208301518482036020860152612edc8282612e30565b9150508091505092915050565b60006080830160008301518482036000860152612f068282612174565b91505060208301518482036020860152612f208282612174565b91505060408301518482036040860152612f3a8282612ea5565b91505060608301518482036060860152612f548282612ea5565b9150508091505092915050565b60006020820190508181036000830152612f7b8184612ee9565b905092915050565b60008060408385031215612f9a57612f99611b62565b5b6000612fa885828601611f45565b9250506020612fb985828601612008565b9150509250929050565b600082825260208201905092915050565b6000612fdf826120d4565b612fe98185612fc3565b9350612ff98185602086016120f0565b61300281611b71565b840191505092915050565b600060208201905081810360008301526130278184612fd4565b905092915050565b60006020828403121561304557613044611b62565b5b600061305384828501611f45565b91505092915050565b6000610980830160008301516130756000860182612265565b50602083015161308860208601826122cf565b50604083015161309c6101e0860182612473565b5060608301516130b06104c0860182612666565b5060808301516130c46105e0860182612709565b5060a08301516130d861060086018261275a565b5060c08301516130ec61076086018261275a565b5060e08301518482036108c08601526131058282612863565b9150506101008301518482036108e086015261312182826129d8565b915050610120830151613138610900860182612a36565b5061014083015161314d6109608601826122a5565b508091505092915050565b60006020820190508181036000830152613172818461305c565b905092915050565b6000610400830160008301516131936000860182612265565b5060208301516131a66020860182612709565b5060408301516131b96040860182612c36565b5060608301516131cc60e086018261275a565b5060808301516131e061024086018261275a565b5060a08301518482036103a08601526131f98282612863565b91505060c08301518482036103c086015261321482826129d8565b91505060e08301518482036103e086015261322f8282612cef565b9150508091505092915050565b60006020820190508181036000830152613256818461317a565b905092915050565b600080600080600060a0868803121561327a57613279611b62565b5b600061328888828901611c93565b955050602061329988828901611cc9565b94505060406132aa88828901611cc9565b93505060606132bb88828901611cc9565b925050608086013567ffffffffffffffff8111156132dc576132db611b67565b5b6132e888828901611d65565b9150509295509295909350565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061335e82611ca8565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036133905761338f613324565b5b600182019050919050565b6133a481611c58565b82525050565b6133b381612274565b82525050565b6133c281612606565b82525050565b6133d1816122b4565b82525050565b600060c0820190506133ec600083018961339b565b6133f960208301886133aa565b61340660408301876133aa565b61341360608301866133aa565b61342060808301856133b9565b61342d60a08301846133c8565b979650505050505050565b61344181611ca8565b811461344c57600080fd5b50565b60008151905061345e81613438565b92915050565b60008151905061347381611cb2565b92915050565b613482816122b4565b811461348d57600080fd5b50565b60008151905061349f81613479565b92915050565b60006101c082840312156134bc576134bb611c2e565b5b6134c76101c0611be2565b905060006134d78482850161344f565b60008301525060206134eb8482850161344f565b60208301525060406134ff8482850161344f565b60408301525060606135138482850161344f565b60608301525060806135278482850161344f565b60808301525060a061353b84828501613464565b60a08301525060c061354f84828501613464565b60c08301525060e06135638482850161344f565b60e0830152506101006135788482850161344f565b6101008301525061012061358e8482850161344f565b610120830152506101406135a48482850161344f565b610140830152506101606135ba84828501613490565b610160830152506101806135d084828501613490565b610180830152506101a06135e684828501613490565b6101a08301525092915050565b60006101c0828403121561360a57613609611b62565b5b6000613618848285016134a5565b91505092915050565b60006080828403121561363757613636611c2e565b5b6136416080611be2565b905060006136518482850161344f565b60008301525060206136658482850161344f565b60208301525060406136798482850161344f565b604083015250606061368d8482850161344f565b60608301525092915050565b6000604082840312156136af576136ae611c2e565b5b6136b96040611be2565b905060006136c98482850161344f565b60008301525060206136dd8482850161344f565b60208301525092915050565b60006102e08284031215613700576136ff611c2e565b5b61370b610260611be2565b9050600061371b8482850161344f565b600083015250602061372f8482850161344f565b60208301525060406137438482850161344f565b60408301525060606137578482850161344f565b606083015250608061376b8482850161344f565b60808301525060a061377f8482850161344f565b60a08301525060c06137938482850161344f565b60c08301525060e06137a78482850161344f565b60e0830152506101006137bc8482850161344f565b610100830152506101206137d28482850161344f565b610120830152506101406137e88482850161344f565b610140830152506101606137fe8482850161344f565b6101608301525061018061381484828501613621565b6101808301525061020061382a84828501613699565b6101a0830152506102406138408482850161344f565b6101c0830152506102606138568482850161344f565b6101e08301525061028061386c8482850161344f565b610200830152506102a061388284828501613464565b610220830152506102c061389884828501613490565b6102408301525092915050565b60006102e082840312156138bc576138bb611b62565b5b60006138ca848285016136e9565b91505092915050565b6138dc816125fc565b81146138e757600080fd5b50565b6000815190506138f9816138d3565b92915050565b60006040828403121561391557613914611c2e565b5b61391f6040611be2565b9050600061392f848285016138ea565b6000830152506020613943848285016138ea565b60208301525092915050565b6000610120828403121561396657613965611c2e565b5b613971610100611be2565b9050600061398184828501613464565b600083015250602061399584828501613464565b60208301525060406139a98482850161344f565b60408301525060606139bd8482850161344f565b60608301525060806139d18482850161344f565b60808301525060a06139e58482850161344f565b60a08301525060c06139f9848285016138ff565b60c083015250610100613a0e848285016138ea565b60e08301525092915050565b60006101208284031215613a3157613a30611b62565b5b6000613a3f8482850161394f565b91505092915050565b600060608284031215613a5e57613a5d611c2e565b5b613a686060611be2565b90506000613a78848285016138ea565b6000830152506020613a8c848285016138ea565b6020830152506040613aa0848285016138ea565b60408301525092915050565b60006101608284031215613ac357613ac2611c2e565b5b613ace610120611be2565b90506000613ade84828501613464565b6000830152506020613af28482850161344f565b6020830152506040613b068482850161344f565b6040830152506060613b1a8482850161344f565b6060830152506080613b2e8482850161344f565b60808301525060a0613b428482850161344f565b60a08301525060c0613b56848285016138ea565b60c08301525060e0613b6a848285016138ea565b60e083015250610100613b7f84828501613a48565b6101008301525092915050565b60006101608284031215613ba357613ba2611b62565b5b6000613bb184828501613aac565b91505092915050565b6000613bc582611ca8565b9150613bd083611ca8565b9250828203905081811115613be857613be7613324565b5b92915050565b6000613bf982611ca8565b9150613c0483611ca8565b9250828201905080821115613c1c57613c1b613324565b5b92915050565b6000613c2d82611c58565b9050919050565b613c3d81613c22565b8114613c4857600080fd5b50565b600081519050613c5a81613c34565b92915050565b600060208284031215613c7657613c75611b62565b5b6000613c8484828501613c4b565b91505092915050565b613c9681611ca8565b82525050565b6000602082019050613cb16000830184613c8d565b92915050565b600060208284031215613ccd57613ccc611c2e565b5b613cd76020611be2565b90506000613ce7848285016138ea565b60008301525092915050565b600060208284031215613d0957613d08611c2e565b5b613d136020611be2565b90506000613d238482850161344f565b60008301525092915050565b600060e08284031215613d4557613d44611c2e565b5b613d4f60e0611be2565b90506000613d5f84828501613490565b6000830152506020613d7384828501613cb7565b6020830152506040613d8784828501613cb7565b6040830152506060613d9b84828501613cb7565b6060830152506080613daf84828501613cf3565b60808301525060a0613dc384828501613cf3565b60a08301525060c0613dd784828501613cf3565b60c08301525092915050565b600060e08284031215613df957613df8611b62565b5b6000613e0784828501613d2f565b91505092915050565b600060608284031215613e2657613e25611c2e565b5b613e306060611be2565b90506000613e4084828501613464565b6000830152506020613e54848285016138ea565b6020830152506040613e6884828501613490565b60408301525092915050565b600060608284031215613e8a57613e89611b62565b5b6000613e9884828501613e10565b91505092915050565b600060208284031215613eb757613eb6611b62565b5b6000613ec584828501613464565b91505092915050565b6000602082019050613ee3600083018461339b565b92915050565b600060a08284031215613eff57613efe611c2e565b5b613f0960a0611be2565b90506000613f1984828501613464565b6000830152506020613f2d84828501613464565b6020830152506040613f41848285016138ea565b6040830152506060613f558482850161344f565b6060830152506080613f6984828501613464565b60808301525092915050565b600060a08284031215613f8b57613f8a611b62565b5b6000613f9984828501613ee9565b91505092915050565b6000613fad82611c58565b9050919050565b613fbd81613fa2565b8114613fc857600080fd5b50565b600081519050613fda81613fb4565b92915050565b600060208284031215613ff657613ff5611b62565b5b600061400484828501613fcb565b91505092915050565b6000604082019050614022600083018561339b565b61402f6020830184613c8d565b9392505050565b600060208201905061404b60008301846133b9565b92915050565b60006020828403121561406757614066611b62565b5b6000614075848285016138ea565b91505092915050565b60006060820190506140936000830186613c8d565b6140a06020830185613c8d565b81810360408301526140b28184612fd4565b9050949350505050565b60008160e01c9050919050565b600060033d11156140e85760046000803e6140e56000516140bc565b90505b90565b600060443d10614178576140fd611b58565b60043d036004823e80513d602482011167ffffffffffffffff82111715614125575050614178565b808201805167ffffffffffffffff8111156141435750505050614178565b80602083010160043d038501811115614160575050505050614178565b61416f82602001850186611bb1565b82955050505050505b90565b60008060233d1115614198576020600460003e6001915060005190505b9091565b6000819050919050565b6141b76141b282611ca8565b61419c565b82525050565b60006141c982846141a6565b6020820191508190509291505056fea264697066735822122081b79129a5eea71b62bbbc3a8b2aac90e949f7e2dd815c12433b48d674408f9364736f6c63430008130033",
  deployedBytecode:
    "0x608060405234801561001057600080fd5b50600436106100575760003560e01c806323e46fea1461005c578063558484641461008c5780636eb79f6a146100bc5780637987bd7f146100ec5780637e8306ad1461011c575b600080fd5b6100766004803603810190610071919061201d565b61014c565b6040516100839190612f61565b60405180910390f35b6100a660048036038101906100a19190612f83565b610636565b6040516100b3919061300d565b60405180910390f35b6100d660048036038101906100d1919061302f565b61073f565b6040516100e39190613158565b60405180910390f35b61010660048036038101906101019190612f83565b610e87565b604051610113919061323c565b60405180910390f35b6101366004803603810190610131919061325e565b611598565b604051610143919061300d565b60405180910390f35b6101546116d3565b6000835167ffffffffffffffff81111561017157610170611b82565b5b6040519080825280602002602001820160405280156101aa57816020015b610197611707565b81526020019060019003908161018f5790505b5090506000845167ffffffffffffffff8111156101ca576101c9611b82565b5b60405190808252806020026020018201604052801561020357816020015b6101f06117b1565b8152602001906001900390816101e85790505b50905060005b85518110156102a857610235868281518110610228576102276132f5565b5b602002602001015161073f565b838281518110610248576102476132f5565b5b6020026020010181905250610277868281518110610269576102686132f5565b5b602002602001015186610e87565b82828151811061028a576102896132f5565b5b602002602001018190525080806102a090613353565b915050610209565b508183604001516000018190525080836040015160200181905250855167ffffffffffffffff8111156102de576102dd611b82565b5b60405190808252806020026020018201604052801561031157816020015b60608152602001906001900390816102fc5790505b50836000018190525060005b86518110156103fe576103c987828151811061033c5761033b6132f5565b5b60200260200101516000015188838151811061035b5761035a6132f5565b5b60200260200101516020015189848151811061037a576103796132f5565b5b6020026020010151604001518a8581518110610399576103986132f5565b5b6020026020010151606001518b86815181106103b8576103b76132f5565b5b602002602001015160800151611598565b846000015182815181106103e0576103df6132f5565b5b602002602001018190525080806103f690613353565b91505061031d565b50845167ffffffffffffffff81111561041a57610419611b82565b5b60405190808252806020026020018201604052801561044d57816020015b60608152602001906001900390816104385790505b50836020018190525060005b85518110156104bb57610486868281518110610478576104776132f5565b5b602002602001015186610636565b8460200151828151811061049d5761049c6132f5565b5b602002602001018190525080806104b390613353565b915050610459565b506000855167ffffffffffffffff8111156104d9576104d8611b82565b5b60405190808252806020026020018201604052801561051257816020015b6104ff611707565b8152602001906001900390816104f75790505b5090506000865167ffffffffffffffff81111561053257610531611b82565b5b60405190808252806020026020018201604052801561056b57816020015b6105586117b1565b8152602001906001900390816105505790505b50905060005b87518110156106105761059d8882815181106105905761058f6132f5565b5b602002602001015161073f565b8382815181106105b0576105af6132f5565b5b60200260200101819052506105df8882815181106105d1576105d06132f5565b5b602002602001015188610e87565b8282815181106105f2576105f16132f5565b5b6020026020010181905250808061060890613353565b915050610571565b508185606001516000018190525080856060015160200181905250505050509392505050565b60608273ffffffffffffffffffffffffffffffffffffffff166391eece28837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6000806040518763ffffffff1660e01b81526004016106bc969594939291906133d7565b600060405180830381600087803b1580156106d657600080fd5b505af19250505080156106e7575060015b610726573d8060008114610717576040519150601f19603f3d011682016040523d82523d6000602084013e61071c565b606091505b5080915050610739565b6040518060200160405280600081525090505b92915050565b610747611707565b81816000019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508173ffffffffffffffffffffffffffffffffffffffff1663ad4d4e296040518163ffffffff1660e01b81526004016101c060405180830381865afa1580156107cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ef91906135f3565b81602001819052508173ffffffffffffffffffffffffffffffffffffffff16634549a6296040518163ffffffff1660e01b81526004016102e060405180830381865afa158015610843573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061086791906138a5565b81604001819052508173ffffffffffffffffffffffffffffffffffffffff1663a05f99066040518163ffffffff1660e01b815260040161012060405180830381865afa1580156108bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108df9190613a1a565b81606001819052508173ffffffffffffffffffffffffffffffffffffffff166309218e916040518163ffffffff1660e01b815260040161016060405180830381865afa158015610933573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109579190613b8c565b8160a00181905250600181606001516020015182606001516000015161097d9190613bba565b6109879190613bee565b67ffffffffffffffff8111156109a05761099f611b82565b5b6040519080825280602002602001820160405280156109d957816020015b6109c6611834565b8152602001906001900390816109be5790505b508160e001819052508060e001515167ffffffffffffffff811115610a0157610a00611b82565b5b604051908082528060200260200182016040528015610a3a57816020015b610a27611886565b815260200190600190039081610a1f5790505b508161010001819052508173ffffffffffffffffffffffffffffffffffffffff16637dc0d1d06040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a8f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ab39190613c60565b816080019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505060005b8160e0015151811015610c7c578273ffffffffffffffffffffffffffffffffffffffff1663a1d0a11382846060015160200151610b2a9190613bee565b6040518263ffffffff1660e01b8152600401610b469190613c9c565b61016060405180830381865afa158015610b64573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b889190613b8c565b8260e001518281518110610b9f57610b9e6132f5565b5b60200260200101819052508273ffffffffffffffffffffffffffffffffffffffff166387aee00e8360e001518381518110610bdd57610bdc6132f5565b5b6020026020010151600001516040518263ffffffff1660e01b8152600401610c059190613c9c565b60e060405180830381865afa158015610c22573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c469190613de3565b8261010001518281518110610c5e57610c5d6132f5565b5b60200260200101819052508080610c7490613353565b915050610aed565b508060e0015160018260e0015151610c949190613bba565b81518110610ca557610ca46132f5565b5b60200260200101518160c001819052508173ffffffffffffffffffffffffffffffffffffffff16637dc0d1d06040518163ffffffff1660e01b8152600401602060405180830381865afa158015610d00573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d249190613c60565b73ffffffffffffffffffffffffffffffffffffffff166352bfe7896040518163ffffffff1660e01b8152600401606060405180830381865afa158015610d6e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d929190613e74565b8161012001819052508173ffffffffffffffffffffffffffffffffffffffff16637dc0d1d06040518163ffffffff1660e01b8152600401602060405180830381865afa158015610de6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e0a9190613c60565b73ffffffffffffffffffffffffffffffffffffffff16639fa6a6e36040518163ffffffff1660e01b8152600401602060405180830381865afa158015610e54573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e789190613ea1565b81610140018181525050919050565b610e8f6117b1565b82816000019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505081816020019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508273ffffffffffffffffffffffffffffffffffffffff16635b4b9695836040518263ffffffff1660e01b8152600401610f389190613ece565b60a060405180830381865afa158015610f55573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f799190613f75565b81604001819052508273ffffffffffffffffffffffffffffffffffffffff166355f57510836040518263ffffffff1660e01b8152600401610fba9190613ece565b61016060405180830381865afa158015610fd8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ffc9190613b8c565b816060018190525060018160400151602001518260400151600001516110229190613bba565b61102c9190613bee565b67ffffffffffffffff81111561104557611044611b82565b5b60405190808252806020026020018201604052801561107e57816020015b61106b611834565b8152602001906001900390816110635790505b508160a001819052508060a001515167ffffffffffffffff8111156110a6576110a5611b82565b5b6040519080825280602002602001820160405280156110df57816020015b6110cc611886565b8152602001906001900390816110c45790505b508160c001819052508060a001515167ffffffffffffffff81111561110757611106611b82565b5b6040519080825280602002602001820160405280156111355781602001602082028036833780820191505090505b508160e0018190525060008373ffffffffffffffffffffffffffffffffffffffff16637dc0d1d06040518163ffffffff1660e01b8152600401602060405180830381865afa15801561118b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111af9190613c60565b905060008473ffffffffffffffffffffffffffffffffffffffff166395fcd8366040518163ffffffff1660e01b8152600401602060405180830381865afa1580156111fe573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112229190613fe0565b905060005b8360a0015151811015611557578573ffffffffffffffffffffffffffffffffffffffff1663ce813aed86838760400151602001516112659190613bee565b6040518363ffffffff1660e01b815260040161128292919061400d565b61016060405180830381865afa1580156112a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112c49190613b8c565b8460a0015182815181106112db576112da6132f5565b5b60200260200101819052508573ffffffffffffffffffffffffffffffffffffffff166387aee00e8560a001518381518110611319576113186132f5565b5b6020026020010151600001516040518263ffffffff1660e01b81526004016113419190613c9c565b60e060405180830381865afa15801561135e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113829190613de3565b8460c001518281518110611399576113986132f5565b5b602002602001018190525060008373ffffffffffffffffffffffffffffffffffffffff1663e0886f908660a0015184815181106113d9576113d86132f5565b5b6020026020010151600001516040518263ffffffff1660e01b81526004016114019190613c9c565b606060405180830381865afa15801561141e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114429190613e74565b602001519050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036114a557808560e001518381518110611494576114936132f5565b5b602002602001018181525050611543565b8273ffffffffffffffffffffffffffffffffffffffff1663d7c7a935826040518263ffffffff1660e01b81526004016114de9190614036565b602060405180830381865afa1580156114fb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061151f9190614051565b8560e001518381518110611536576115356132f5565b5b6020026020010181815250505b50808061154f90613353565b915050611227565b508260a0015160018460a001515161156f9190613bba565b815181106115805761157f6132f5565b5b60200260200101518360800181905250505092915050565b60608573ffffffffffffffffffffffffffffffffffffffff1663b1d50a48868686866040518563ffffffff1660e01b81526004016115d89392919061407e565b6000604051808303818588803b1580156115f157600080fd5b505af193505050508015611603575060015b6116b75761160f6140c9565b806308c379a00361163757506116236140eb565b8061162e575061167c565b809150506116ca565b634e487b710361167c5761164961417b565b90611654575061167c565b8060405160200161166591906141bd565b6040516020818303038152906040529150506116ca565b3d80600081146116a8576040519150601f19603f3d011682016040523d82523d6000602084013e6116ad565b606091505b50809150506116ca565b6040518060200160405280600081525090505b95945050505050565b604051806080016040528060608152602001606081526020016116f46118e9565b81526020016117016118e9565b81525090565b604051806101600160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001611738611903565b8152602001611745611978565b8152602001611752611a18565b8152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200161177c611834565b8152602001611789611834565b815260200160608152602001606081526020016117a4611a63565b8152602001600081525090565b604051806101000160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016117ff611a86565b815260200161180c611834565b8152602001611819611834565b81526020016060815260200160608152602001606081525090565b6040518061012001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001611880611ab5565b81525090565b6040518060e001604052806000151581526020016118a2611ad6565b81526020016118af611ad6565b81526020016118bc611ad6565b81526020016118c9611ae9565b81526020016118d6611ae9565b81526020016118e3611ae9565b81525090565b604051806040016040528060608152602001606081525090565b604051806101c0016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000151581526020016000151581526020016000151581525090565b6040518061026001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016119e0611afc565b81526020016119ed611b24565b8152602001600081526020016000815260200160008152602001600081526020016000151581525090565b604051806101000160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001611a56611b3e565b8152602001600081525090565b604051806060016040528060008152602001600081526020016000151581525090565b6040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b60405180606001604052806000815260200160008152602001600081525090565b6040518060200160405280600081525090565b6040518060200160405280600081525090565b6040518060800160405280600081526020016000815260200160008152602001600081525090565b604051806040016040528060008152602001600081525090565b604051806040016040528060008152602001600081525090565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611bba82611b71565b810181811067ffffffffffffffff82111715611bd957611bd8611b82565b5b80604052505050565b6000611bec611b58565b9050611bf88282611bb1565b919050565b600067ffffffffffffffff821115611c1857611c17611b82565b5b602082029050602081019050919050565b600080fd5b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611c6382611c38565b9050919050565b6000611c7582611c58565b9050919050565b611c8581611c6a565b8114611c9057600080fd5b50565b600081359050611ca281611c7c565b92915050565b6000819050919050565b611cbb81611ca8565b8114611cc657600080fd5b50565b600081359050611cd881611cb2565b92915050565b600080fd5b600067ffffffffffffffff821115611cfe57611cfd611b82565b5b611d0782611b71565b9050602081019050919050565b82818337600083830152505050565b6000611d36611d3184611ce3565b611be2565b905082815260208101848484011115611d5257611d51611cde565b5b611d5d848285611d14565b509392505050565b600082601f830112611d7a57611d79611b6c565b5b8135611d8a848260208601611d23565b91505092915050565b600060a08284031215611da957611da8611c2e565b5b611db360a0611be2565b90506000611dc384828501611c93565b6000830152506020611dd784828501611cc9565b6020830152506040611deb84828501611cc9565b6040830152506060611dff84828501611cc9565b606083015250608082013567ffffffffffffffff811115611e2357611e22611c33565b5b611e2f84828501611d65565b60808301525092915050565b6000611e4e611e4984611bfd565b611be2565b90508083825260208201905060208402830185811115611e7157611e70611c29565b5b835b81811015611eb857803567ffffffffffffffff811115611e9657611e95611b6c565b5b808601611ea38982611d93565b85526020850194505050602081019050611e73565b5050509392505050565b600082601f830112611ed757611ed6611b6c565b5b8135611ee7848260208601611e3b565b91505092915050565b600067ffffffffffffffff821115611f0b57611f0a611b82565b5b602082029050602081019050919050565b6000611f2782611c58565b9050919050565b611f3781611f1c565b8114611f4257600080fd5b50565b600081359050611f5481611f2e565b92915050565b6000611f6d611f6884611ef0565b611be2565b90508083825260208201905060208402830185811115611f9057611f8f611c29565b5b835b81811015611fb95780611fa58882611f45565b845260208401935050602081019050611f92565b5050509392505050565b600082601f830112611fd857611fd7611b6c565b5b8135611fe8848260208601611f5a565b91505092915050565b611ffa81611c58565b811461200557600080fd5b50565b60008135905061201781611ff1565b92915050565b60008060006060848603121561203657612035611b62565b5b600084013567ffffffffffffffff81111561205457612053611b67565b5b61206086828701611ec2565b935050602084013567ffffffffffffffff81111561208157612080611b67565b5b61208d86828701611fc3565b925050604061209e86828701612008565b9150509250925092565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561210e5780820151818401526020810190506120f3565b60008484015250505050565b6000612125826120d4565b61212f81856120df565b935061213f8185602086016120f0565b61214881611b71565b840191505092915050565b600061215f838361211a565b905092915050565b6000602082019050919050565b600061217f826120a8565b61218981856120b3565b93508360208202850161219b856120c4565b8060005b858110156121d757848403895281516121b88582612153565b94506121c383612167565b925060208a0199505060018101905061219f565b50829750879550505050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000819050919050565b600061223a61223561223084611c38565b612215565b611c38565b9050919050565b600061224c8261221f565b9050919050565b600061225e82612241565b9050919050565b61226e81612253565b82525050565b600061228f61228a61228584611ca8565b612215565b611ca8565b9050919050565b61229f81612274565b82525050565b6122ae81611ca8565b82525050565b60008115159050919050565b6122c9816122b4565b82525050565b6101c0820160008201516122e66000850182612296565b5060208201516122f96020850182612296565b50604082015161230c6040850182612296565b50606082015161231f6060850182612296565b5060808201516123326080850182612296565b5060a082015161234560a08501826122a5565b5060c082015161235860c08501826122a5565b5060e082015161236b60e0850182612296565b50610100820151612380610100850182612296565b50610120820151612395610120850182612296565b506101408201516123aa610140850182612296565b506101608201516123bf6101608501826122c0565b506101808201516123d46101808501826122c0565b506101a08201516123e96101a08501826122c0565b50505050565b6080820160008201516124056000850182612296565b5060208201516124186020850182612296565b50604082015161242b6040850182612296565b50606082015161243e6060850182612296565b50505050565b60408201600082015161245a6000850182612296565b50602082015161246d6020850182612296565b50505050565b6102e08201600082015161248a6000850182612296565b50602082015161249d6020850182612296565b5060408201516124b06040850182612296565b5060608201516124c36060850182612296565b5060808201516124d66080850182612296565b5060a08201516124e960a0850182612296565b5060c08201516124fc60c0850182612296565b5060e082015161250f60e0850182612296565b50610100820151612524610100850182612296565b50610120820151612539610120850182612296565b5061014082015161254e610140850182612296565b50610160820151612563610160850182612296565b506101808201516125786101808501826123ef565b506101a082015161258d610200850182612444565b506101c08201516125a2610240850182612296565b506101e08201516125b7610260850182612296565b506102008201516125cc610280850182612296565b506102208201516125e16102a08501826122a5565b506102408201516125f66102c08501826122c0565b50505050565b6000819050919050565b600061262161261c612617846125fc565b612215565b6125fc565b9050919050565b61263181612606565b82525050565b60408201600082015161264d6000850182612628565b5060208201516126606020850182612628565b50505050565b6101208201600082015161267d60008501826122a5565b50602082015161269060208501826122a5565b5060408201516126a36040850182612296565b5060608201516126b66060850182612296565b5060808201516126c96080850182612296565b5060a08201516126dc60a0850182612296565b5060c08201516126ef60c0850182612637565b5060e0820151612703610100850182612628565b50505050565b61271281611c58565b82525050565b60608201600082015161272e6000850182612628565b5060208201516127416020850182612628565b5060408201516127546040850182612628565b50505050565b6101608201600082015161277160008501826122a5565b5060208201516127846020850182612296565b5060408201516127976040850182612296565b5060608201516127aa6060850182612296565b5060808201516127bd6080850182612296565b5060a08201516127d060a0850182612296565b5060c08201516127e360c0850182612628565b5060e08201516127f660e0850182612628565b5061010082015161280b610100850182612718565b50505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000612849838361275a565b6101608301905092915050565b6000602082019050919050565b600061286e82612811565b612878818561281c565b93506128838361282d565b8060005b838110156128b457815161289b888261283d565b97506128a683612856565b925050600181019050612887565b5085935050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6020820160008201516129036000850182612628565b50505050565b60208201600082015161291f6000850182612296565b50505050565b60e08201600082015161293b60008501826122c0565b50602082015161294e60208501826128ed565b50604082015161296160408501826128ed565b50606082015161297460608501826128ed565b5060808201516129876080850182612909565b5060a082015161299a60a0850182612909565b5060c08201516129ad60c0850182612909565b50505050565b60006129bf8383612925565b60e08301905092915050565b6000602082019050919050565b60006129e3826128c1565b6129ed81856128cc565b93506129f8836128dd565b8060005b83811015612a29578151612a1088826129b3565b9750612a1b836129cb565b9250506001810190506129fc565b5085935050505092915050565b606082016000820151612a4c60008501826122a5565b506020820151612a5f6020850182612628565b506040820151612a7260408501826122c0565b50505050565b600061098083016000830151612a916000860182612265565b506020830151612aa460208601826122cf565b506040830151612ab86101e0860182612473565b506060830151612acc6104c0860182612666565b506080830151612ae06105e0860182612709565b5060a0830151612af461060086018261275a565b5060c0830151612b0861076086018261275a565b5060e08301518482036108c0860152612b218282612863565b9150506101008301518482036108e0860152612b3d82826129d8565b915050610120830151612b54610900860182612a36565b50610140830151612b696109608601826122a5565b508091505092915050565b6000612b808383612a78565b905092915050565b6000602082019050919050565b6000612ba0826121e9565b612baa81856121f4565b935083602082028501612bbc85612205565b8060005b85811015612bf85784840389528151612bd98582612b74565b9450612be483612b88565b925060208a01995050600181019050612bc0565b50829750879550505050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60a082016000820151612c4c60008501826122a5565b506020820151612c5f60208501826122a5565b506040820151612c726040850182612628565b506060820151612c856060850182612296565b506080820151612c9860808501826122a5565b50505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000612cd68383612628565b60208301905092915050565b6000602082019050919050565b6000612cfa82612c9e565b612d048185612ca9565b9350612d0f83612cba565b8060005b83811015612d40578151612d278882612cca565b9750612d3283612ce2565b925050600181019050612d13565b5085935050505092915050565b600061040083016000830151612d666000860182612265565b506020830151612d796020860182612709565b506040830151612d8c6040860182612c36565b506060830151612d9f60e086018261275a565b506080830151612db361024086018261275a565b5060a08301518482036103a0860152612dcc8282612863565b91505060c08301518482036103c0860152612de782826129d8565b91505060e08301518482036103e0860152612e028282612cef565b9150508091505092915050565b6000612e1b8383612d4d565b905092915050565b6000602082019050919050565b6000612e3b82612c0a565b612e458185612c15565b935083602082028501612e5785612c26565b8060005b85811015612e935784840389528151612e748582612e0f565b9450612e7f83612e23565b925060208a01995050600181019050612e5b565b50829750879550505050505092915050565b60006040830160008301518482036000860152612ec28282612b95565b91505060208301518482036020860152612edc8282612e30565b9150508091505092915050565b60006080830160008301518482036000860152612f068282612174565b91505060208301518482036020860152612f208282612174565b91505060408301518482036040860152612f3a8282612ea5565b91505060608301518482036060860152612f548282612ea5565b9150508091505092915050565b60006020820190508181036000830152612f7b8184612ee9565b905092915050565b60008060408385031215612f9a57612f99611b62565b5b6000612fa885828601611f45565b9250506020612fb985828601612008565b9150509250929050565b600082825260208201905092915050565b6000612fdf826120d4565b612fe98185612fc3565b9350612ff98185602086016120f0565b61300281611b71565b840191505092915050565b600060208201905081810360008301526130278184612fd4565b905092915050565b60006020828403121561304557613044611b62565b5b600061305384828501611f45565b91505092915050565b6000610980830160008301516130756000860182612265565b50602083015161308860208601826122cf565b50604083015161309c6101e0860182612473565b5060608301516130b06104c0860182612666565b5060808301516130c46105e0860182612709565b5060a08301516130d861060086018261275a565b5060c08301516130ec61076086018261275a565b5060e08301518482036108c08601526131058282612863565b9150506101008301518482036108e086015261312182826129d8565b915050610120830151613138610900860182612a36565b5061014083015161314d6109608601826122a5565b508091505092915050565b60006020820190508181036000830152613172818461305c565b905092915050565b6000610400830160008301516131936000860182612265565b5060208301516131a66020860182612709565b5060408301516131b96040860182612c36565b5060608301516131cc60e086018261275a565b5060808301516131e061024086018261275a565b5060a08301518482036103a08601526131f98282612863565b91505060c08301518482036103c086015261321482826129d8565b91505060e08301518482036103e086015261322f8282612cef565b9150508091505092915050565b60006020820190508181036000830152613256818461317a565b905092915050565b600080600080600060a0868803121561327a57613279611b62565b5b600061328888828901611c93565b955050602061329988828901611cc9565b94505060406132aa88828901611cc9565b93505060606132bb88828901611cc9565b925050608086013567ffffffffffffffff8111156132dc576132db611b67565b5b6132e888828901611d65565b9150509295509295909350565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061335e82611ca8565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036133905761338f613324565b5b600182019050919050565b6133a481611c58565b82525050565b6133b381612274565b82525050565b6133c281612606565b82525050565b6133d1816122b4565b82525050565b600060c0820190506133ec600083018961339b565b6133f960208301886133aa565b61340660408301876133aa565b61341360608301866133aa565b61342060808301856133b9565b61342d60a08301846133c8565b979650505050505050565b61344181611ca8565b811461344c57600080fd5b50565b60008151905061345e81613438565b92915050565b60008151905061347381611cb2565b92915050565b613482816122b4565b811461348d57600080fd5b50565b60008151905061349f81613479565b92915050565b60006101c082840312156134bc576134bb611c2e565b5b6134c76101c0611be2565b905060006134d78482850161344f565b60008301525060206134eb8482850161344f565b60208301525060406134ff8482850161344f565b60408301525060606135138482850161344f565b60608301525060806135278482850161344f565b60808301525060a061353b84828501613464565b60a08301525060c061354f84828501613464565b60c08301525060e06135638482850161344f565b60e0830152506101006135788482850161344f565b6101008301525061012061358e8482850161344f565b610120830152506101406135a48482850161344f565b610140830152506101606135ba84828501613490565b610160830152506101806135d084828501613490565b610180830152506101a06135e684828501613490565b6101a08301525092915050565b60006101c0828403121561360a57613609611b62565b5b6000613618848285016134a5565b91505092915050565b60006080828403121561363757613636611c2e565b5b6136416080611be2565b905060006136518482850161344f565b60008301525060206136658482850161344f565b60208301525060406136798482850161344f565b604083015250606061368d8482850161344f565b60608301525092915050565b6000604082840312156136af576136ae611c2e565b5b6136b96040611be2565b905060006136c98482850161344f565b60008301525060206136dd8482850161344f565b60208301525092915050565b60006102e08284031215613700576136ff611c2e565b5b61370b610260611be2565b9050600061371b8482850161344f565b600083015250602061372f8482850161344f565b60208301525060406137438482850161344f565b60408301525060606137578482850161344f565b606083015250608061376b8482850161344f565b60808301525060a061377f8482850161344f565b60a08301525060c06137938482850161344f565b60c08301525060e06137a78482850161344f565b60e0830152506101006137bc8482850161344f565b610100830152506101206137d28482850161344f565b610120830152506101406137e88482850161344f565b610140830152506101606137fe8482850161344f565b6101608301525061018061381484828501613621565b6101808301525061020061382a84828501613699565b6101a0830152506102406138408482850161344f565b6101c0830152506102606138568482850161344f565b6101e08301525061028061386c8482850161344f565b610200830152506102a061388284828501613464565b610220830152506102c061389884828501613490565b6102408301525092915050565b60006102e082840312156138bc576138bb611b62565b5b60006138ca848285016136e9565b91505092915050565b6138dc816125fc565b81146138e757600080fd5b50565b6000815190506138f9816138d3565b92915050565b60006040828403121561391557613914611c2e565b5b61391f6040611be2565b9050600061392f848285016138ea565b6000830152506020613943848285016138ea565b60208301525092915050565b6000610120828403121561396657613965611c2e565b5b613971610100611be2565b9050600061398184828501613464565b600083015250602061399584828501613464565b60208301525060406139a98482850161344f565b60408301525060606139bd8482850161344f565b60608301525060806139d18482850161344f565b60808301525060a06139e58482850161344f565b60a08301525060c06139f9848285016138ff565b60c083015250610100613a0e848285016138ea565b60e08301525092915050565b60006101208284031215613a3157613a30611b62565b5b6000613a3f8482850161394f565b91505092915050565b600060608284031215613a5e57613a5d611c2e565b5b613a686060611be2565b90506000613a78848285016138ea565b6000830152506020613a8c848285016138ea565b6020830152506040613aa0848285016138ea565b60408301525092915050565b60006101608284031215613ac357613ac2611c2e565b5b613ace610120611be2565b90506000613ade84828501613464565b6000830152506020613af28482850161344f565b6020830152506040613b068482850161344f565b6040830152506060613b1a8482850161344f565b6060830152506080613b2e8482850161344f565b60808301525060a0613b428482850161344f565b60a08301525060c0613b56848285016138ea565b60c08301525060e0613b6a848285016138ea565b60e083015250610100613b7f84828501613a48565b6101008301525092915050565b60006101608284031215613ba357613ba2611b62565b5b6000613bb184828501613aac565b91505092915050565b6000613bc582611ca8565b9150613bd083611ca8565b9250828203905081811115613be857613be7613324565b5b92915050565b6000613bf982611ca8565b9150613c0483611ca8565b9250828201905080821115613c1c57613c1b613324565b5b92915050565b6000613c2d82611c58565b9050919050565b613c3d81613c22565b8114613c4857600080fd5b50565b600081519050613c5a81613c34565b92915050565b600060208284031215613c7657613c75611b62565b5b6000613c8484828501613c4b565b91505092915050565b613c9681611ca8565b82525050565b6000602082019050613cb16000830184613c8d565b92915050565b600060208284031215613ccd57613ccc611c2e565b5b613cd76020611be2565b90506000613ce7848285016138ea565b60008301525092915050565b600060208284031215613d0957613d08611c2e565b5b613d136020611be2565b90506000613d238482850161344f565b60008301525092915050565b600060e08284031215613d4557613d44611c2e565b5b613d4f60e0611be2565b90506000613d5f84828501613490565b6000830152506020613d7384828501613cb7565b6020830152506040613d8784828501613cb7565b6040830152506060613d9b84828501613cb7565b6060830152506080613daf84828501613cf3565b60808301525060a0613dc384828501613cf3565b60a08301525060c0613dd784828501613cf3565b60c08301525092915050565b600060e08284031215613df957613df8611b62565b5b6000613e0784828501613d2f565b91505092915050565b600060608284031215613e2657613e25611c2e565b5b613e306060611be2565b90506000613e4084828501613464565b6000830152506020613e54848285016138ea565b6020830152506040613e6884828501613490565b60408301525092915050565b600060608284031215613e8a57613e89611b62565b5b6000613e9884828501613e10565b91505092915050565b600060208284031215613eb757613eb6611b62565b5b6000613ec584828501613464565b91505092915050565b6000602082019050613ee3600083018461339b565b92915050565b600060a08284031215613eff57613efe611c2e565b5b613f0960a0611be2565b90506000613f1984828501613464565b6000830152506020613f2d84828501613464565b6020830152506040613f41848285016138ea565b6040830152506060613f558482850161344f565b6060830152506080613f6984828501613464565b60808301525092915050565b600060a08284031215613f8b57613f8a611b62565b5b6000613f9984828501613ee9565b91505092915050565b6000613fad82611c58565b9050919050565b613fbd81613fa2565b8114613fc857600080fd5b50565b600081519050613fda81613fb4565b92915050565b600060208284031215613ff657613ff5611b62565b5b600061400484828501613fcb565b91505092915050565b6000604082019050614022600083018561339b565b61402f6020830184613c8d565b9392505050565b600060208201905061404b60008301846133b9565b92915050565b60006020828403121561406757614066611b62565b5b6000614075848285016138ea565b91505092915050565b60006060820190506140936000830186613c8d565b6140a06020830185613c8d565b81810360408301526140b28184612fd4565b9050949350505050565b60008160e01c9050919050565b600060033d11156140e85760046000803e6140e56000516140bc565b90505b90565b600060443d10614178576140fd611b58565b60043d036004823e80513d602482011167ffffffffffffffff82111715614125575050614178565b808201805167ffffffffffffffff8111156141435750505050614178565b80602083010160043d038501811115614160575050505050614178565b61416f82602001850186611bb1565b82955050505050505b90565b60008060233d1115614198576020600460003e6001915060005190505b9091565b6000819050919050565b6141b76141b282611ca8565b61419c565b82525050565b60006141c982846141a6565b6020820191508190509291505056fea264697066735822122081b79129a5eea71b62bbbc3a8b2aac90e949f7e2dd815c12433b48d674408f9364736f6c63430008130033",
  linkReferences: {},
  deployedLinkReferences: {},
};
