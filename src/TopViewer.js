import React, { useEffect, useState } from 'react';

function TopViewer() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3001/top')
            .then((response) => response.json())
            .then((json) => {
                setData(json);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching top data:', error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading top data...</p>;
    if (!data) return <p>Server unavailable.</p>;

    return (
        <section id="top">
            <div id="memory">
                <h2>Memory</h2>
                <ul>
                    <li class="used-mem">Used Memory: {data.memory.used} mebibytes (MiB)</li>
                    <li class="free-mem">Free Memory: {data.memory.free} mebibytes (MiB)</li>
                </ul>
            </div>
        </section>
    );
}

export default TopViewer;
