import { MISSIONS } from "../data/missions";
import MissionCard from "./MissionCard";
import Title from "./Title";

export default function Missions() {
  return (
    <section className="w-full flex flex-col gap-5">
      <Title headline="Missões" />
      <div className="grid grid-cols-3 self-center gap-5 w-full max-md:flex max-md:flex-col max-md:text-center">
        {MISSIONS.map(({ name, year, country, destination }) => (
          <MissionCard
            key={name}
            name={name}
            year={year}
            country={country}
            destination={destination}
          />
        ))}
      </div>
    </section>
  );
}
