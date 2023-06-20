type TitleProps = {
  headline: string;
};

export default function Title({ headline }: TitleProps) {
  return (
    <h2 className="bg-opacity-40 bg-black border rounded-xl font-semibold text-4xl text-center mt-16 p-2 max-md:text-2xl">
      {headline}
    </h2>
  );
}
