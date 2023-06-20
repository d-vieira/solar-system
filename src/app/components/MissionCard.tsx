type MissionCardProps = {
  name: string;
  year: string;
  country: string;
  destination: string;
};

export default function MissionCard({
  name,
  year,
  country,
  destination,
}: MissionCardProps) {
  return (
    <div
      key={name}
      className="border rounded-xl bg-opacity-40 bg-black hover:bg-black/70"
    >
      <p className="border-b w-full p-3 font-bold">{name}</p>
      <p className="flex flex-col p-5">
        {year} <span>{country}</span> <span>{destination}</span>
      </p>
    </div>
  );
}
