import Image from "next/image";

export type IconProps = {
  name: "car-wash" | "oil" | "tires";
};

export default function Icon({ name }: IconProps) {
  return (
    <>
      <Image
        src={`icons/${name}.svg`}
        width="109"
        height="89"
        alt={`${name} Icon`}
      />
    </>
  );
}
