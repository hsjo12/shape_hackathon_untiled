# Latch

Latch is a transparent, blockchain-based gaming platform that allows users to socialize and enjoy engaging features such as PvP and raid systems. It is open to integration with existing projects, providing them with unique privileges. In the future, various projects will be able to transfer their NFTs to Latch's bridge contract for use within the game.

**This is a brief overview of how Latch's smart contracts are structured**

<img src="./readMeImages/structure.png">

## Requirements

- [Node](https://nodejs.org/en/download/)
- [Git](https://git-scm.com/downloads)
- [Alchemy](https://www.alchemy.com/)

In order to deploy contract you will need:

1. **Ensure you have the following prerequisites:**

   - $ETH on Shape Mainnet or Shape Testnet.
   - Shape Mainnet or Shape Testnet RPC endpoint.

2. **Create a `.env` file with the following content:**
   ```env
   KEY="Alchemy RPC"
   PK="Deployer private key"
   ```

## Deploy Contracts

1. **On Mainnet**

   ```bash
   npx hardhat ignition deploy ignition/modules/deploy.js --network shape
   ```

2. **On Testnet**

   ```bash
   npx hardhat ignition deploy ignition/modules/deploy.js --network shape_sepolia
   ```

3. **On Local**

   ```bash
   npx hardhat node
   ```

   ```bash
   npx hardhat ignition deploy ignition/modules/deploy.js --network localhost
   ```

## Play Contracts

1. **Mint $Latch and Items**

   - Add address in `1.mintLatchAndItems.js`.

   ```bash
   npx hardhat run scripts/1.mintLatchAndItems.js --network shape/shape_sepolia/localhost
   ```

2. **Import Items**

   - Add address in `2.importItems.js`.

   ```bash
   npx hardhat run scripts/2.importItems.js --network shape/shape_sepolia/localhost
   ```

3. **Export Items**

   - Add address in `3.exportItems.js`.

   ```bash
   npx hardhat run scripts/3.exportItems.js --network shape/shape_sepolia/localhost
   ```

## Test Contracts

```bash
npx hardhat test --network shape/shape_sepolia/localhost
```

#### Mainnet

| Name          | Address                                    |
| ------------- | ------------------------------------------ |
| `Latch`       | 0xaf46e0E003d66258a0328aD71cBf238Ef3369950 |
| `TokenMarket` | 0x10544e85a1e4dc8202f533027B29B8726fd8a0f0 |
| `Items`       | 0x437aF77105008a059159DEcdbE54947f505eD80f |
| `Bridge`      | 0xC3B25914DaeCEbCbE39884604a72f208fEc349C8 |
| `BridgeVault` | 0x59bD6aaa1e30A5369b73cF0f90Ca75c66EAFb9d9 |
| `Pvp`         | 0x844fB4aAd43024B0F9559C144A0f64b34224586D |
| `PvpVault`    | 0x60dc99aF9ecA014d54F79deAd3605298d500223E |
| `Raid`        | 0x7E2a935a72B8bC9c4db6a1211864A789A624068d |
| `RaidVault`   | 0x7476fd67f7395B0837B7D27932CFE656acB35112 |
| `TeamVault`   | 0xc4D2ac145fdFfD7a95a15d961E8194F48Ef3D48f |

#### Sepolia

| Name          | Address                                    |
| ------------- | ------------------------------------------ |
| `Latch`       | 0x7476fd67f7395B0837B7D27932CFE656acB35112 |
| `TokenMarket` | 0x04A5aD493224264f77B3ED5B0E0c5eAA3466d81d |
| `Items`       | 0x7E2a935a72B8bC9c4db6a1211864A789A624068d |
| `Bridge`      | 0xc4D2ac145fdFfD7a95a15d961E8194F48Ef3D48f |
| `BridgeVault` | 0x60dc99aF9ecA014d54F79deAd3605298d500223E |
| `Pvp`         | 0x44904543E19E983DE9076d4eEf5A836798C6c851 |
| `PvpVault`    | 0x10544e85a1e4dc8202f533027B29B8726fd8a0f0 |
| `Raid`        | 0x41f1F742341C43D8D24fD713466DfC44743BdFA8 |
| `RaidVault`   | 0xf1A5D5e53beB937628F6ec1B33ED98e862EdEC26 |
| `TeamVault`   | 0x437aF77105008a059159DEcdbE54947f505eD80f |