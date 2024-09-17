dApp Me Up
> Collection of speed run dApps

# Quick Start
```bash
# Install dependencies
yarn install
# Start the development server
yarn run dev
```

```bash
# Compile the contracts
yarn run compile
# Deploy the contracts to the network (if needed)
yarn run network
yarn workspace contracts run hardhat ignition deploy ./ignition/modules/SimpleStorage.ts  --network localhost
...
```

[!TIP]
The `dev` command will watch for changes in the contracts and regenerate the ABI and deploy the contracts to the network.

# Notes
The development frontend server will be available at `http://localhost:3000`.
The development hardhat JSON-RPC will be available at `http://localhost:8545`.

Fund your hardhat wallet on network 31337:
```bash
yarn workspace contracts hardhat fund --to 0x30219F3701a7E610d6F067e4Df6517Ce203b5642 --network localhost --amount 1337
```
