import fs from "fs";

const RELEASE_PUBKEY = `-----BEGIN PUBLIC KEY-----
MFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAEN7qcsG6bogi1nkD3jnMWS813wWguYEcI
CRcijSvFskSFjHB5la4xUt+Omb2t6iUwop+JRy+EUhy0UQ9p/cPsQA==
-----END PUBLIC KEY-----
`;

function getPubKey(): string {
  const keyPath = process.env.UPDATE_CHECK_PUBKEY_PATH;
  if (keyPath) {
    return fs.readFileSync(keyPath, "utf-8");
  }
  return RELEASE_PUBKEY;
}

export default getPubKey();
