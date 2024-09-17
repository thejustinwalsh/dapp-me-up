import contracts from "@contracts/ignition/deployments/chain-31337/deployed_addresses.json";

import { defineConfig } from "@wagmi/cli";
import { hardhat } from "@wagmi/cli/plugins";

const deployments = Object.keys(contracts)
  .map(
    (key: string) =>
      ({ [key.split("#")[1] ?? ""]: { 31337: (contracts as any)[key] } }) as {
        [key: string]: { [key: number]: `0x${string}` };
      }
  )
  .reduce((acc, val) => ({ ...acc, ...val }), {});

export default defineConfig({
  out: "src/generated.ts",
  contracts: [],
  plugins: [
    hardhat({
      project: "../../packages/contracts",
      deployments,
      commands: {
        clean: "",
        build: "yarn workspace contracts run compile",
        rebuild:
          "yarn workspace contracts run compile",
      },
    }),
  ],
});
