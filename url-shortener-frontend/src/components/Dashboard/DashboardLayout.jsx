import React, { useState } from 'react';
import Graph from './Graph';
import { FaLink, FaChartLine } from 'react-icons/fa';
import ShortenUrlList from './ShortenUrlList';
import { useStoreContext } from '../../contextApi/ContextApi';
import { useFetchMyShortUrls, useFetchTotalClicks } from '../../hooks/UseQuery';
import { useNavigate } from 'react-router-dom';
import ShortenPopUp from './ShortenPopUp';
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
                    {/* Analytics and URLs Container */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Analytics Column */}
                        <div className="lg:col-span-2">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-white rounded-2xl shadow-md p-6 h-full"
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                                        <FaChartLine className="text-indigo-900" />
                                        Analytics Overview
                                    </h2>
                                </div>

                                <div className="h-[350px] relative">
                                    {totalClicks.length === 0 ? (
                                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
                                            <h1 className="text-gray-800 font-serif text-2xl font-bold mb-2">
                                                No Data Available
                                            </h1>
                                            <p className="text-gray-600 text-center max-w-md">
                                                Share your short links to start tracking engagements.
                                            </p>
                                        </div>
                                    ) : (
                                        <Graph graphData={totalClicks} />
                                    )}
                                </div>
                            </motion.div>
                        </div>

                        {/* URLs List Column */}
                        <div className="lg:col-span-1">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-white rounded-2xl shadow-md p-6 h-full"
                            >
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-2xl font-bold text-gray-800">Your Short URLs</h2>
                                    <button
                                        onClick={() => setShortenPopUp(true)}
                                        className="bg-indigo-900 text-white px-3 py-2 rounded-full text-sm hover:opacity-90 transition-all duration-300 flex items-center gap-2"
                                    >
                                        <FaLink />
                                        New
                                    </button>
                                </div>

                                {!isLoadingUrls && myShortenUrls.length === 0 ? (
                                    <div className="flex justify-center py-12">
                                        <div className="bg-gray-50 rounded-lg p-8 text-center">
                                            <div className="flex items-center justify-center mb-4">
                                                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
                                                    <FaLink className="text-indigo-900 text-2xl" />
                                                </div>
                                            </div>
                                            <h3 className="text-gray-800 font-semibold text-lg mb-2">
                                                No Short Links
                                            </h3>
                                            <p className="text-gray-600">
                                                Create your first short link
                                            </p>
                                        </div>
                                    </div>
                                ) : (
                                    <ShortenUrlList data={myShortenUrls} />
                                )}
                            </motion.div>
                        </div>
                    </div>
                </div>
            )}
            <ShortenPopUp refetch={refetch} open={shortenPopUp} setOpen={setShortenPopUp} />
        </div>
    );
};

export default DashboardLayout;