import s from "./Home.module.scss";
import cl from "classnames";
import Button from "../../components/Button";
const Home = () => {
  return (
    <section className={cl(s.investing)}>
      <div className={cl(s.container, "container")}>
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
          <p className={s.text1}>Пассивный зароботок</p>
          <p className={s.text2}>Публичный трейдинг</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
