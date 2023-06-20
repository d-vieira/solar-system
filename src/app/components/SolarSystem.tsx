import { PLANETS } from "../data/planets";
import PlanetCard from "./PlanetCard";
import Title from "./Title";

export default function SolarSystem() {
  return (
    <section className="w-full">
      <Title headline="Planetas" />
      <div className="flex justify-center gap-10 max-md:grid max-md:grid-cols-4 max-md:my-10">
        {PLANETS.map(({ name, image, x, y, css }) => (
          <PlanetCard
            key={name}
            planetImage={image}
            planetName={name}
            x={x}
            y={y}
            css={css}
          />
        ))}
      </div>
    </section>
  );
}
