import h1 from "./img/t1.png";
import h2 from "./img/h2.png";
import h3 from "./img/h3.png";
import h4 from "./img/h4.png";
import h5 from "./img/h5.png";
import h6 from "./img/h6.png";
export const Their = () => {
  return (
    <div className="their">
      <h2>
        <span>НАШИ</span> ПРЕИМУЩЕСТВА
      </h2>
      <div className="center-their">
        <ul>
          <li>
            <div>
              <img
                src={h1}
                alt=""
              />
              <h4>Real-time подробная статистика</h4>
            </div>
          </li>
          <li>
            <div>
              <img
                src={h2}
                alt=""
              />
              <h4>Быстрые выплаты</h4>
            </div>
          </li>
          <li>
            <div>
              <img
                src={h3}
                alt=""
              />
              <h4>Удобный личный кабинет</h4>
            </div>
          </li>
          <li>
            <div>
              <img
                src={h4}
                alt=""
              />
              <h4>Опытный персональный менеджер</h4>
            </div>
          </li>
          <li>
            <div>
              <img
                src={h5}
                alt=""
              />
              <h4>Эксклюзивные промоматериалы</h4>
            </div>
          </li>
          <li>
            <div>
              <img
                src={h6}
                alt=""
              />
              <h4>Уникальные условия для топовых партнеров</h4>
            </div>
          </li>
        </ul>
        <button className="buttonLikeHero">Вступить</button>
      </div>
    </div>
  );
};
