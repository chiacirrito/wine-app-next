import { wineList } from "@/mocks/wineList";
import styles from "./index.module.scss";
import Image from "next/image";

const WineList = ({ wine }) => {
  console.log(wine);
  return (
    <>
      <main className={styles.main}>
        <h3>World's Best Wine Lists 2022</h3>
      </main>
      <div className={styles.list}>
        <ul className={styles.ul}>
          {wineList.map((wine) => (
            <li className={styles.li} key={wine.id}>
              <Image
                src={wine.images}
                alt={wine.alt}
                width={200}
                height={400}
                priority={true}
              />
              <h5>{wine.title}</h5>
              <h6>{wine.description}</h6>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default WineList;
