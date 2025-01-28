import React from 'react';
import Graph from './Graph';
import { dummyData } from '../dummyData/data';
import { useStoreContext } from '../contextApi/ContextApi';
import { useFetchTotalClicks } from '../hooks/UseQuery';

const DashboardLayout = () => {
  const { token } = useStoreContext();

  const onError = () => {
    console.log("Error fetching data");
  };

  const { data, error, isLoading } = useFetchTotalClicks(token, onError);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  return (
    <div className='lg:px-14 sm:px-8 px-4 min-h-[calc(100vh-64px)]'>
      <div className='lg:w-[90%] w-full mx-auto py-16'>
        <div className='h-96 relative'>
          <Graph graphData={data || dummyData} />
        </div>
        <div className='py-5 sm:text-end text-center'>
          <button 
            className='bg-custom-gradient px-4 py-2 text-white rounded-md mt-4'>
            Create a New Short URL
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;