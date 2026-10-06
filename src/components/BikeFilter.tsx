import { Segmented } from "antd";
import { BIKES } from "../data";

type Props = { value: string; onChange: (bike: string) => void };

export default function BikeFilter({ value, onChange }: Props) {
  return (
    <Segmented
      className="bikes"
      value={value}
      onChange={(v) => onChange(v as string)}
      options={["All", ...BIKES]}
    />
  );
}