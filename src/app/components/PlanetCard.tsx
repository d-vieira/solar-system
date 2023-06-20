import Image from "next/image";

type PlanetCardProps = {
  planetName: string;
  planetImage: string;
  x: number;
  y: number;
  css?: string;
};

export default function PlanetCard({
  planetName,
  planetImage,
  x,
  y,
  css = " ",
}: PlanetCardProps) {
  return (
    <div
      key={planetName}
      className={`${css} flex flex-col items-center justify-center w-fit`}
    >
      <Image
        src={planetImage}
        alt={`Planeta: ${planetName}`}
        width={x}
        height={y}
        className={`object-none h-60 max-md:object-scale-down max-md:h-10`}
        id={css}
      />
      <p>{planetName}</p>
    </div>
  );
}
