import Image from "next/image";
import Head from "next/head";
import styles from "./Header.module.scss";
import { HEADER_IMAGE } from "../../lib/constants";
import HeroCopy from "../poll-for-signature/HeroCopy";

const Header = () => {
  return (
    <header className={styles.header}>
      <Head>
        <title>NFT Vending Machine</title>
      </Head>
      <br/><br/>
      <Image
        src={HEADER_IMAGE}
        width={500}
        height={200}
        alt="Header"
        priority
      />
    </header>
  );
};

export default Header;
