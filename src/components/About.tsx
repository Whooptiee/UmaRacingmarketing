export default function About() {
  return (
    <>
      <section id="history" className="info">
        <p className="eyebrow">ABOUT US</p>
        <h2>Brand History</h2>
        <p>UMA Racing began in September 2002 in Malaysia, as a joint venture between Meng Kah Auto Parts Trading
          and Maju Motor Racing. Both partners shared a passion for high-performance motorcycle parts, and the name
          comes from the idea of a horse, a symbol of speed and power, shown in the prancing horse logo.</p>
        <p>Its parts are proven on and off the circuit, tested by professional riders and used in local and
          international racing championships. UMA Racing is now a global brand of MKA Group.</p>
      </section>
      <section id="rnd" className="info alt">
        <p className="eyebrow">ABOUT US</p>
        <h2>Research and Development Center</h2>
        <p>Product design and development is done in-house by a team of engineers and technicians, led by
          Japanese Chief Engineer Yoshio Hirano. The team uses modern design software, CNC machines and testing
          equipment, and takes each product from engineering through to test ride.</p>
        <div className="stats">
          {["Engineering", "CNC Machining", "Testing", "Test Ride"].map((s, i) => (
            <div key={s} style={{ animationDelay: `${i * 120}ms` }}><b>0{i + 1}</b>{s}</div>
          ))}
        </div>
      </section>
    </>
  );
}