const HomeFilters = () => {
  const filters = [
    { value: "newest", label: "Newest" },
    { value: "recommended", label: "Recommended Questions" },
    { value: "frequent", label: "Frequent" },
    { value: "unanswered", label: "Unanswered" },
  ];

  const active = "newest"; // For design mode

  return (
    <div className="mt-10 flex gap-3 max-md:hidden">
      {filters.map((filter) => (
        <button
          key={filter.value}
          className={`body-medium rounded-lg px-6 py-3 capitalize ${
            active === filter.value
              ? "dark:bg-dark-400 bg-primary-100 text-primary-500"
              : "dark:bg-dark-300 bg-light-800 text-light-500 hover:bg-light-700 dark:text-light-500 dark:hover:bg-dark-400"
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default HomeFilters; 