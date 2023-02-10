import Image from "next/image";
import styles from "./index.module.scss";

const Gallery = () => {
  return (
    <div className={styles.Gallery}>
      <p>A man who drinks only water has a secret to hide.</p>
      <p>Charles Baudelaire</p>
      <div className={styles.images}>
        <Image
          src="https://img.freepik.com/free-photo/top-view-charming-black-grapes-overturned-wine-glass-wine-bottle-wine-opener-walnut-dark-table_140725-145864.jpg?w=996&t=st=1675593989~exp=1675594589~hmac=6051de836a7961058111d35d3eeebecd19c3513532ab047ffc2fddba2ac4af55"
          alt="img1"
          width={300}
          height={300}
          priority={true}
        />
        <Image
          src="https://img.freepik.com/free-photo/high-angle-decanter-wine-glasses_23-2149746530.jpg?w=360&t=st=1675594110~exp=1675594710~hmac=1f4236dc8a2ffb1a606bc3d70bd2a878a714c692b471b194550cc61763565af8"
          alt="img2"
          width={300}
          height={300}
          priority={true}
        />
        <Image
          src="https://img.freepik.com/free-photo/uncorking-bottle-red-wine_53876-42469.jpg?t=st=1675595604~exp=1675596204~hmac=82a72a029b3bced926658db76cbb5f9906cf36b63ed0b35e21a12ccb04bb4afd"
          alt="img5"
          width={300}
          height={300}
          priority={true}
        />
      </div>
      <p>Wine is the only artwork you can drink.</p>
      <p>Luis Fernando Olaverri</p>
    </div>
  );
};

export default Gallery;
