import React, { useState } from 'react';
import { FaCopy, FaExternalLinkAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

const ShortenUrlList = ({ data }) => {
    const [copiedIndex, setCopiedIndex] = useState(null);

    if (!data || !Array.isArray(data)) {
        return <div>No URLs available</div>;
    }

    const handleCopy = (text, index) => {
        navigator.clipboard.writeText(text);
        setCopiedIndex(index);
        toast.success('Copied to clipboard!', {
            position: "top-right",
            autoClose: 2000,
        });
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white">
                <thead>
                <tr className="bg-gray-100 border-b">
                    <th className="p-3 text-left">#</th>
                    <th className="p-3 text-left">Original URL</th>
                    <th className="p-3 text-left">Short URL</th>
                    <th className="p-3 text-center">Actions</th>
                </tr>
                </thead>
                <tbody>
                {data.map((url, index) => (
                    <tr
                        key={url.id}
                        className="border-b hover:bg-gray-50 transition-colors"
                    >
                        <td className="p-3 font-bold">{index + 1}</td>
                        <td className="p-3 max-w-xs truncate">
                            <a
                                href={url.originalUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                {url.originalUrl}
                            </a>
                        </td>
                        <td className="p-3">
                            <div className="flex items-center">
                                <span className="text-green-600 mr-2">{url.shortUrl}</span>
                            </div>
                        </td>
                        <td className="p-3 text-center">
                            <div className="flex justify-center space-x-2">
                                <button
                                    onClick={() => handleCopy(url.shortUrl, index)}
                                    className={`p-2 rounded ${
                                        copiedIndex === index
                                            ? 'bg-green-500 text-white'
                                            : 'text-gray-600 hover:bg-gray-200'
                                    }`}
                                >
                                    <FaCopy />
                                </button>
                                <button
                                    onClick={() => openInNewTab(url.shortUrl)}
                                    className="p-2 text-gray-600 hover:bg-gray-200 rounded"
                                >
                                    <FaExternalLinkAlt />
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ShortenUrlList;