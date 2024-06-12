function LegalSubComponent({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="space-y-2">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="max-w-prose text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
        {description}
      </p>
    </div>
  );
}

export function Legal({
  data,
}: {
  data: {
    title: string;
    description: string;
  }[];
}) {
  return (
    <div className="space-y-8">
      {data.map((item, index) => (
        <LegalSubComponent
          key={index}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}
