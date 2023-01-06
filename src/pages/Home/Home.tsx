import s from "./Home.module.scss";
import img1 from "../../assets/images/bitcoin.png";
import img2 from "../../assets/images/bg-1.png";
import cl from "classnames";
import Button from "../../components/Button";
const Home = () => {
  return (
    <section className={cl(s.investing, "container")}>
      <img src={img1} alt="bg" className={s.img1} />
      <div className={s.description}>
        <h2 className={s.title}>
          Инвестируй с&nbsp;лучшими&nbsp;крипто-трейдерами
        </h2>
        <p className={s.text}>
          Сервис автоматического копирования сделок на&nbsp;криптовалютных
          биржах.
        </p>
        <Button className="investing" onClick={() => {}}>
          Создать аккаунт
        </Button>
      </div>

      <div className={s.man}>
        <img src={img2} alt="bg" className={s.img2} />
        <p className={s.text1}>Пассивный зароботок</p>
        <p className={s.text2}>Публичный трейдинг</p>
      </div>
    </section>
  );
};

export default Home;
