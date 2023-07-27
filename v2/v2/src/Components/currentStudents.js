function StudentCard(props) {
  const { name, year, department } = props;

  return (
    <div className="rounded-lg w-[350px] flexbox bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-black m-6">
      <div className="p-5">
        <h5 className="mb-3 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
          {name}
        </h5>
        <p className="mb-3 font-bold text-xl text-center text-gray-700 dark:text-gray-300">
            {year}
        </p>
        <p className="font-bold text-l text-center text-gray-700 dark:text-gray-400">
          {department}
        </p>
      </div>
    </div>
  );
}

export default StudentCard;
