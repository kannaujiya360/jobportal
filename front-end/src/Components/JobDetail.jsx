import { FaBuilding, FaMapMarkerAlt, FaBriefcase, FaClock, FaLink } from 'react-icons/fa';

const JobDetail = ({ job }) => {
  if (!job) {
    return (
      <div className="w-full md:w-2/3 p-6 text-center bg-white/60 backdrop-blur-md rounded-xl shadow-lg border border-gray-200">
        <p className="text-lg text-gray-600">🔍 Select a job to view details.</p>
      </div>
    );
  }

  return (
    <div className="w-full md:w-2/3 p-6 bg-white/70 backdrop-blur-md rounded-2xl shadow-2xl border border-indigo-100 transition-all duration-300">
      <h2 className="text-3xl font-extrabold text-indigo-800 mb-4">{job.title}</h2>

      <div className="space-y-3 text-gray-700">
        <p className="flex items-center gap-2 text-lg">
          <FaBuilding className="text-indigo-500" />
          <span>{job.company}</span>
        </p>

        <p className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-pink-500" />
          <span>{job.location}</span>
        </p>

        <p className="flex items-center gap-2">
          <FaBriefcase className="text-green-600" />
          <span>Employment Type: {job.employment_type}</span>
        </p>

        <p className="flex items-center gap-2">
          <FaClock className="text-yellow-500" />
          <span>Experience: {job.experience}</span>
        </p>

        <p className="text-sm text-gray-600">
          Source: <span className="font-medium text-blue-700">{job.source}</span>
        </p>

        <p className="text-sm text-gray-600">
          Posted on:{' '}
          <span className="font-medium">
            {new Date(job.postedDateTime).toLocaleDateString()}
          </span>
        </p>

        <a
          href={job.job_link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 mt-4 text-indigo-700 hover:text-indigo-900 underline font-semibold"
        >
          <FaLink />
          View Job Link
        </a>
      </div>
    </div>
  );
};

export default JobDetail;
