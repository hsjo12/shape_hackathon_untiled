// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition
const hre = require("hardhat");

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const GAS_BACK_MAINNET = "0x5d84B43d662CB1787716D4804A6164Efc135FfB6";

const TOKEN_MINTER =
  "0x262c70cb68844873654dc54487b634cb00850c1e13c785cd0d96a2b89b829472";
const DISTRIBUTOR =
  "0x85faced7bde13e1a7dad704b895f006e704f207617d68166b31ba2d79624862d";
const MANAGER =
  "0xaf290d8680820aad922855f39b306097b20e28774d6c1ad35a20325630c3a02c";

const SWORD_ID = 0;
const SHIELD_ID = 1;
const BOOTS_ID = 2;

const SWORD_STATS = [10, 0, -3, 100];
const SHIELD_STATS = [10, 0, -3, 100];
const BOOTS_STATS = [0, 5, 5, 100];
module.exports = buildModule("LockModule", (m) => {
  const deployer = m.getAccount(0);

  const latch = m.contract("Latch", []);
  const tokenMarket = m.contract("TokenMarket", [latch]);

  const teamVault = m.contract("TeamVault", [
    GAS_BACK_MAINNET,
    latch,
    deployer,
  ]);
  const items = m.contract("Items", [
    GAS_BACK_MAINNET,
    latch,
    deployer,
    teamVault,
  ]);

  const bridgeVault = m.contract("BridgeVault", []);
  const bridge = m.contract("Bridge", [bridgeVault]);

  const raidVault = m.contract("RaidVault", [latch, deployer]);
  const raid = m.contract("Raid", [latch, deployer, raidVault, teamVault]);

  const pvpVault = m.contract("PvpVault", [latch, deployer]);
  const pvp = m.contract("Pvp", [latch, deployer, raidVault, teamVault]);

  m.call(latch, "grantRole", [TOKEN_MINTER, tokenMarket]);
  m.call(bridgeVault, "grantRole", [MANAGER, bridge]);
  m.call(pvpVault, "grantRole", [DISTRIBUTOR, pvp]);
  m.call(raidVault, "grantRole", [DISTRIBUTOR, raid]);
  // m.call(items, "registerForGasback", []);

  m.call(items, "setBaseURI", [
    "https://rose-cheap-jaguar-233.mypinata.cloud/ipfs/bafybeihu5p24wubukadze54afr4t44bxdw2tqk6th4f5he7jkxvdqye6wy/",
  ]);
  m.call(items, "setItemStats", [
    [SWORD_ID, SHIELD_ID, BOOTS_ID],
    [SWORD_STATS, SHIELD_STATS, BOOTS_STATS],
  ]);
});
