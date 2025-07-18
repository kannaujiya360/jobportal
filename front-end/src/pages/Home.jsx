import React, { useEffect, useState } from 'react';
import JobList from '../Components/JobList';
import JobDetail from '../Components/JobDetail';
import SearchBar from '../Components/SearchBar';
import axios from 'axios';

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [location, setLocation] = useState('');

  const fetchJobs = async () => {
    try {
      const baseUrl = `${import.meta.env.VITE_API_URL}/api/jobs`;
      const res = await axios.get(
        location ? `${baseUrl}/search?location=${location}` : baseUrl
      );
      setJobs(res.data);
      setSelectedJob(res.data[0]);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [location]);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-100 via-sky-100 to-purple-100 p-4 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-2 text-center">
            🌟 Find Your Dream Job
          </h1>
          <p className="text-center text-gray-600 mb-6">
            Search and explore curated job listings with ease.
          </p>
          <SearchBar onSearch={setLocation} />
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Job List */}
          <div className="w-full md:w-1/2 bg-white/60 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-indigo-100 overflow-y-auto h-[70vh]">
            <JobList jobs={jobs} onSelect={setSelectedJob} />
          </div>

          {/* Job Detail */}
          <div className="w-full md:w-1/2 bg-white/80 rounded-2xl p-6 shadow-2xl border border-indigo-100 overflow-y-auto h-[70vh]">
            <JobDetail job={selectedJob} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
