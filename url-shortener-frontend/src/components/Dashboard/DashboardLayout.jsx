import React, { useState } from 'react';
import Graph from './Graph';
import { dummyData } from '../../dummyData/data';
import { useStoreContext } from '../../contextApi/ContextApi';
import { useFetchMyShortUrls }  from '../../hooks/UseQuery';
import { useFetchTotalClicks } from '../../hooks/UseQuery';
import ShortenPopUp from './ShortenPopUp';
import { FaLink, FaChartLine } from 'react-icons/fa';
import ShortenUrlList from './ShortenUrlList';
import { useNavigate } from 'react-router-dom';
import Loader from '../Loader';
import { motion } from 'framer-motion';

const DashboardLayout = () => {
    const { token } = useStoreContext();
    const navigate = useNavigate();
    const [shortenPopUp, setShortenPopUp] = useState(false);

    const onError = () => {
        navigate("/error");
    };

    const { isLoading: isLoadingUrls, data: myShortenUrls, refetch } = useFetchMyShortUrls(token, onError);
    const { isLoading: isLoadingClicks, data: totalClicks } = useFetchTotalClicks(token, onError);

    return (
        <div className="min-h-[calc(100vh-80px)] bg-slate-50 px-4 sm:px-8 lg:px-14">
            {isLoadingClicks ? (
                <Loader />
            ) : (
                <div className="max-w-7xl mx-auto py-8">
                    {/* Analytics Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-2xl shadow-md p-6 mb-8"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                                <FaChartLine className="text-indigo-900" />
                                Analytics Overview
                            </h2>
                        </div>

                        <div className="h-96 relative">
                            {totalClicks.length === 0 ? (
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
                                    <h1 className="text-gray-800 font-serif text-2xl font-bold mb-2">
                                        No Data Available
                                    </h1>
                                    <p className="text-gray-600 text-center max-w-md">
                                        Share your short links to start tracking engagements and visualizing your data.
                                    </p>
                                </div>
                            ) : (
                                <Graph graphData={totalClicks} />
                            )}
                        </div>
                    </motion.div>

                    {/* Action Button */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex justify-end mb-8"
                    >
                        <button
                            onClick={() => setShortenPopUp(true)}
                            className="bg-gradient-to-r from-indigo-900 to-purple-900 px-6 py-3 rounded-full text-white font-semibold hover:opacity-90 transition-all duration-300 flex items-center gap-2 shadow-md"
                        >
                            <FaLink />
                            Create New Short URL
                        </button>
                    </motion.div>

                    {/* URLs List Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-2xl shadow-md p-6"
                    >
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Short URLs</h2>

                        {!isLoadingUrls && myShortenUrls.length === 0 ? (
                            <div className="flex justify-center py-12">
                                <div className="bg-gray-50 rounded-lg p-8 text-center max-w-md">
                                    <div className="flex items-center justify-center mb-4">
                                        <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
                                            <FaLink className="text-indigo-900 text-2xl" />
                                        </div>
                                    </div>
                                    <h3 className="text-gray-800 font-semibold text-lg mb-2">
                                        No Short Links Yet
                                    </h3>
                                    <p className="text-gray-600">
                                        Create your first short link to start tracking its performance
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <ShortenUrlList data={myShortenUrls} />
                        )}
                    </motion.div>
                </div>
            )}
            <ShortenPopUp refetch={refetch} open={shortenPopUp} setOpen={setShortenPopUp} />
        </div>
    );
};

export default DashboardLayout;