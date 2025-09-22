import AOS from "aos";
import "aos/dist/aos.css";
import style from "../style/singleAuth.module.css";
import { useEffect } from "react";
export default function SingleAuth({ author }) {
  useEffect(() => {
    AOS.init({ duration: 550, once: true });
  }, []);

  return (
    <div
      className={style.singleAuth}
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-offset="100"
    >
      <div className={style.image}>
        <img loading="lazy" src={author.image} alt={author.name} />
      </div>
      <h1 className={style.name}>{author.name}</h1>
      <h3 className={style.title}>{author.title}</h3>
      <p className={style.mainDescription}>{author.mainDescription}</p>
      <p className={style.secoundryDescription}>
        {author.secoundryDescription}
      </p>
    </div>
  );
}
