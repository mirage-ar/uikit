import '../styles/globals.css';
import { WagmiConfig, configureChains, createClient } from "wagmi";
import { mainnet, goerli } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
var _a = configureChains([mainnet, goerli], [
    alchemyProvider({ apiKey: "t0ilAl1IaUvoOuxMZ_dFzeVAcPxKCuRK" }),
    publicProvider(),
]), chains = _a.chains, provider = _a.provider;
var client = createClient({
    autoConnect: true,
    provider: provider,
    connectors: [
        new MetaMaskConnector({ chains: chains }),
        new WalletConnectConnector({
            chains: chains,
            options: {
                qrcode: true,
            },
        }),
    ],
});
export default function App(_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    return (<WagmiConfig client={client}>
  <Component {...pageProps}/>
  </WagmiConfig>);
}
//# sourceMappingURL=_app.jsx.map