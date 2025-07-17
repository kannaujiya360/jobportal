const JobList = ({ jobs, onSelect }) => {
  return (
    <div className="w-full md:w-[50%] xl:w-[40%] h-full overflow-y-auto p-6 bg-gradient-to-b from-indigo-100 to-white rounded-2xl shadow-xl border-r border-gray-300">
      <h2 className="text-3xl font-extrabold text-indigo-800 mb-8 tracking-tight text-center md:text-left">
        🔥 Latest Job Listings
      </h2>

      {jobs.length === 0 && (
        <p className="text-gray-500 italic text-center">No jobs available...</p>
      )}

      <div className="space-y-6">
        {jobs.map((job, idx) => (
          <div
            key={idx}
            onClick={() => onSelect(job)}
            className="cursor-pointer bg-white hover:bg-indigo-100 transition-all duration-300 px-6 py-5 rounded-3xl shadow-lg hover:shadow-2xl border border-indigo-200"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              {job.title}
            </h3>
            <p className="text-lg text-gray-600">{job.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
