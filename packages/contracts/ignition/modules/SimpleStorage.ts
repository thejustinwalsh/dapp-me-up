import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const SimpleStorageModule = buildModule("SimpleStorageModule", (m) => {
  const storage = m.contract("SimpleStorage", ["Simple Storage v1"]);

  return { storage };
});

export default SimpleStorageModule;
