export default function TimeLineItem({
  title,
  date,
  description,
  icon,
}: {
  title: string;
  date: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <li className="mb-10 ml-6">
      <span className="flex absolute -left-5 justify-center items-center w-10 h-10 bg-blue-200  ring-primary">
        <div className="bg-secondary rounded-full p-2">{icon}</div>
      </span>
      <div className="ml-2">
        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
          {title}{" "}
        </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          {date}
        </time>
        <p className="mb-4 text-base italic font-normal text-gray-500 dark:text-gray-400">
          {description}
        </p>
      </div>
    </li>
  );
}
