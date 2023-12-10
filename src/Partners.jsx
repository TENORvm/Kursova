import h1 from "./img/partners/1.png";
import h2 from "./img/partners/2.png";
import h3 from "./img/partners/3.png";
import h4 from "./img/partners/4.png";
import h5 from "./img/partners/5.png";
import h6 from "./img/partners/6.png";
import h7 from "./img/partners/7.png";
import h8 from "./img/partners/8.png";
import h9 from "./img/partners/9.png";
import h10 from "./img/partners/10.png";
import h11 from "./img/partners/11.png";
import h12 from "./img/partners/12.png";
import h13 from "./img/partners/13.png";
import h14 from "./img/partners/14.png";
import h15 from "./img/partners/15.png";
import h16 from "./img/partners/16.png";
import h17 from "./img/partners/17.png";
import h18 from "./img/partners/18.png";

export const Partners = () => {
  const partners = [
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    h7,
    h8,
    h9,
    h10,
    h11,
    h12,
    h13,
    h14,
    h15,
    h16,
    h17,
    h18,
  ];
  return (
    <div className="partners">
      <h1>ПАРТНЕРЫ</h1>
      <ul>
        {partners.map((e) => (
          <li key={e}>
            <img
              src={e}
              alt={`Partner ${e}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
