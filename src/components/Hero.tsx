import { Button } from "antd";
import { ThunderboltFilled } from "@ant-design/icons";

export default function Hero() {
  return (
    <section className="hero">
      <div className="speed-lines" />
      <p className="eyebrow">#RevealTruePerformance</p>
      <h1>REVEAL TRUE <em>PERFORMANCE</em></h1>
      <p className="sub">Race-proven parts engineered for your exact machine.</p>
      <Button
        type="primary"
        size="large"
        className="pulse"
        icon={<ThunderboltFilled />}
        onClick={() => document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" })}
      >
        Shop Parts
      </Button>
    </section>
  );
}