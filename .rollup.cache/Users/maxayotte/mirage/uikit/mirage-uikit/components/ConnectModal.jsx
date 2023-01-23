/**----------------------------------------------------------------------------------
 * The connect module component
 * Mirage UI Kit (( v1.0 ))
 * @author fiig, max <fiig@mirage.space, max@mirage.space> | January 9, 2023 | Updated: January 9, 2023
 * ----------------------------------------------------------------------------------*/
import React from "react";
import styles from "./ConnectModal.module.css";
import Image from "next/image";
import Button from "./Button";
// error JSX
//  {error && <div className={styles.errorMessage}>{error.message}</div>}
var ConnectModal = function (_a) {
    var isOpen = _a.isOpen, toggleModal = _a.toggleModal, isLoading = _a.isLoading, address = _a.address, connectors = _a.connectors, connect = _a.connect;
    var connectModalClass = [styles.modal].join(" ");
    var outsideRef = React.useRef(null);
    var connectWallet = function (name) {
        var connector = connectors === null || connectors === void 0 ? void 0 : connectors.find(function (connector) { return connector.name == name; });
        connect({ connector: connector });
    };
    var handleCloseOnOverlay = function (e) {
        if (e.target === outsideRef.current) {
            toggleModal();
        }
    };
    if (isLoading) {
        return (<>
        <Loading />
      </>);
    }
    if (address) {
        return (<>
        <Connected address={address} toggleModal={toggleModal}/>
      </>);
    }
    if (isOpen) {
        return (<>
        <div ref={outsideRef} className={styles.modalOverlay} onClick={handleCloseOnOverlay}/>
        <div className={connectModalClass}>
          <div className={styles["--title"]}>
            <p>CONNECT WALLET</p>
            <div style={{ cursor: "pointer" }} onClick={function () { return toggleModal(); }}>
              <Image src="/icons/black-x.svg" alt="A live symbol" className={styles["--image"]} width={24} height={24} quality={100}/>
            </div>
          </div>
          <div className={styles["--content"]}>
            <Button icon="metamask" color={"black"} onClick={function () { return connectWallet("MetaMask"); }}>
              METAMASK
            </Button>
            <Button icon="walletconnect" color={"black"} onClick={function () { return connectWallet("WalletConnect"); }}>
              WALLETCONNECT
            </Button>
            <Button secondary={true} color={"black"}>
              WHAT&#39;S A WALLET
            </Button>
          </div>
        </div>
      </>);
    }
    return null;
};
var Loading = function () { return (<div className={styles.container}>
    <div className={styles.button}>
      <img src="/images/spinner.gif"/>
    </div>
    <p className={styles.connectText}>Check your wallet application</p>
  </div>); };
var Connected = function (_a) {
    var address = _a.address, toggleModal = _a.toggleModal, disconnect = _a.disconnect;
    return (<div className={styles.container}>
      <button className={styles.button} onClick={toggleModal}>
        <img src="/images/check.svg"/>
      </button>
      <div className={styles.connectText}>
        Connected as {address}
        <a style={{ cursor: "pointer" }} onClick={function () { return disconnect(); }}>
          Disconnect
        </a>
      </div>
    </div>);
};
export default ConnectModal;
//# sourceMappingURL=ConnectModal.jsx.map