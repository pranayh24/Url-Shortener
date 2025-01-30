import React from 'react';

const ShortenUrlList = ({ data }) => {
    if (!data || !Array.isArray(data)) {
        return <div>No URLs available</div>;
    }

    return (
        <div>
            {data.map((url) => (
                <div key={url.id}>
                    <p>{url.shortUrl}</p>
                    <p>{url.originalUrl}</p>
                </div>
            ))}
        </div>
    );
};

export default ShortenUrlList;