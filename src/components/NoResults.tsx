interface INoResultsProps {
  title: string;
  message: string;
}

export default function NoResults({ title, message }: INoResultsProps) {
  return (
    <div className=" col-span-full min-h-96 flex flex-col items-center justify-center h-full py-10">
      <h1 className="text-2xl font-bold text-gray-700">{title}</h1>
      <p className="text-gray-500 mt-2 text-center">{message}</p>
    </div>
  );
}
