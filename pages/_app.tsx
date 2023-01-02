import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { WagmiConfig, configureChains, createClient } from "wagmi";
import { mainnet, goerli } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";

const { chains, provider } = configureChains(
  [mainnet, goerli],
  [
    alchemyProvider({ apiKey: "t0ilAl1IaUvoOuxMZ_dFzeVAcPxKCuRK" }),
    publicProvider(),
  ]
);

const client = createClient({
  autoConnect: true,
  provider,
  connectors: [
    new MetaMaskConnector({ chains }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
      },
    }),
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
  <Component {...pageProps} />
  </WagmiConfig>
  )
}
