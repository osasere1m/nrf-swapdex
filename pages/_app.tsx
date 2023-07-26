import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { WagmiConfig, createConfig } from "wagmi";
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultConfig,
} from "connectkit";
import { useEffect, useState } from "react";

const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: "S0-a7U98kE7vpidDg59El1sFGhcRJj2c",
    walletConnectProjectId: "8e16682173935a4257a24ace3a4025cf",

    // Required
    appName: "Nearfinance protocol swap App",

    // Optional
    appDescription: "Nearfinance protocol swap App using 0x Swap API and ConnectKit",
  })
);

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <WagmiConfig config={config}>
        <ConnectKitProvider>
          <ConnectKitButton />
          {mounted && <Component {...pageProps} />}
        </ConnectKitProvider>
      </WagmiConfig>
    </div>
  );
}
