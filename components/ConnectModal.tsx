/**----------------------------------------------------------------------------------
 * The connect module component
 * Mirage UI Kit (( v1.0 ))
 * @author fiig, max <fiig@mirage.space, max@mirage.space> | January 9, 2023 | Updated: January 9, 2023
 * ----------------------------------------------------------------------------------*/
import React from "react";
import styles from "./ConnectModal.module.css";
import Image from "next/image";
import Button from "./Button";

interface ConnectModalProps {
  isOpen: Boolean;
  address?: string;
  toggleModal: any;
  isLoading: Boolean;
  connectors?: Array<WagmiConnector>;
  connect?: any;
  disconnect?: any;
  error?: any;
}

interface WagmiConnector {
  id: string;
  name?: String;
  ready: Boolean;
}

// error JSX
//  {error && <div className={styles.errorMessage}>{error.message}</div>}

const ConnectModal: React.FC<ConnectModalProps> = ({
  isOpen,
  toggleModal,
  isLoading,
  address,
  connectors,
  connect,
}) => {
  const connectModalClass = [styles.modal].join(" ");

  const outsideRef = React.useRef(null);

  const connectWallet = (name: string) => {
    const connector = connectors?.find((connector) => connector.name == name);
    connect({ connector });
  };

  const handleCloseOnOverlay = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    if (e.target === outsideRef.current) {
      toggleModal();
    }
  };

  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  if (address) {
    return (
      <>
        <Connected address={address} toggleModal={toggleModal} />
      </>
    );
  }

  if (isOpen) {
    return (
      <>
        <div
          ref={outsideRef}
          className={styles.modalOverlay}
          onClick={handleCloseOnOverlay}
          data-testid="modal-test"
        />
        <div className={connectModalClass}>
          <div className={styles["--title"]}>
            <p>CONNECT WALLET</p>
            <div style={{ cursor: "pointer" }} onClick={() => toggleModal()}>
              <Image
                src="/icons/black-x.svg"
                alt="A live symbol"
                className={styles["--image"]}
                width={24}
                height={24}
                quality={100}
              />
            </div>
          </div>
          <div className={styles["--content"]}>
            <Button
              icon="metamask"
              color={"black"}
              onClick={() => connectWallet("MetaMask")}
            >
              METAMASK
            </Button>
            <Button
              icon="walletconnect"
              color={"black"}
              onClick={() => connectWallet("WalletConnect")}
            >
              WALLETCONNECT
            </Button>
            <Button secondary={true} color={"black"}>
              WHAT&#39;S A WALLET
            </Button>
          </div>
        </div>
      </>
    );
  }

  return null;
};

const Loading: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.button}>
      <img src="/images/spinner.gif" />
    </div>
    <p className={styles.connectText}>Check your wallet application</p>
  </div>
);

interface ConnectedProps {
  address: string;
  toggleModal: any;
  disconnect?: any;
}

const Connected: React.FC<ConnectedProps> = ({
  address,
  toggleModal,
  disconnect,
}) => {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={toggleModal}>
        <img src="/images/check.svg" />
      </button>
      <div className={styles.connectText}>
        Connected as {address}
        <a style={{ cursor: "pointer" }} onClick={() => disconnect()}>
          Disconnect
        </a>
      </div>
    </div>
  );
};

export default ConnectModal;
