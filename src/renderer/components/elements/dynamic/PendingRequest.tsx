import emptyIcon from 'assets/image/empty.png';

const EmptyState = () => {
  return (
    <div className="w-full h-[50%] xl:h-[60%] flex flex-col items-center justify-center">
      <img src={emptyIcon} alt="No data found" />
      <h1 className="font-bold text-gray-400 tracking-wide xl:text-xl -mt-10">
        Empty pending request...
      </h1>
    </div>
  );
};

const PendingRequest = ({
  data,
  message,
}: {
  data: any[];
  message: string;
}) => {
  return (
    <section className="border-l-2 border-slate p-4 xl:p-5">
      <h1 className="text-lg xl:text-xl font-bold">Pending Request</h1>
      <p className="text-gray-500">{message}</p>
      <div className="w-full h-full">
        {data.length ? <h1>Hello</h1> : <EmptyState />}
      </div>
    </section>
  );
};

export default PendingRequest;
