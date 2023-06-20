import Header from "./components/Header";
import Missions from "./components/Missions";
import SolarSystem from "./components/SolarSystem";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Header />
      <div>
        <SolarSystem />
        <Missions />
      </div>
    </main>
  );
}
