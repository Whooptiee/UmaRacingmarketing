import { Carousel } from "antd";

const TEAMS = [
  { cls: "ARRC 2025", name: "UMA Racing Yamaha Maju Motor Asia", note: "Asia Road Racing Championship" },
  { cls: "Team Inside Philippines", name: "Season 2025", note: "Sponsored teams" },
  { cls: "Team PH ARRC", name: "Season 2025", note: "Sponsored teams" },
 
];

// Add your own photos in public/images/teams/ and list them here
const SLIDES = [
  { img: "/images/Teams/ARRC 2025.jfif", title: "ARRC", caption: "UMA Racing Yamaha Maju Motor Asia" },
  { img: "/images/Teams/Umaracing philippines.jpg", title: "Team InsideRacing Philippines", caption: "2019" },
  { img: "/images/Teams/ARRC 2019ph.jpg", title: "Team PH ARRC ", caption: "2019" },
];

export default function Teams() {
  return (
    <section id="teams" className="info">
      <p className="eyebrow">RACE PROVEN</p>
      <h2>Our Sponsored Teams</h2>

      <Carousel autoplay autoplaySpeed={1800} effect="fade" dots className="team-carousel">
        {SLIDES.map((s) => (
          <div key={s.title}>
            <div className="slide">
              <img src={s.img} alt={s.title}
                onError={(e) => { e.currentTarget.src = "https://placehold.co/1000x420/16161a/e10600?text=" + s.title; }} />
              <div className="slide-cap">
                <span>{s.title}</span>
                <h3>{s.caption}</h3>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      <div className="teams">
        {TEAMS.map((t, i) => (
          <div className="team" key={t.cls} style={{ animationDelay: `${i * 80}ms` }}>
            <span>{t.cls}</span><h3>{t.name}</h3><small>{t.note}</small>
          </div>
        ))}
      </div>
    </section>
  );
}