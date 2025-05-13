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

            <div id="processes">
                <h2>Processes</h2>
                <table>
                    <thead>
                        <tr>
                            <th class="pid">PID</th>
                            <th class="user">User</th>
                            <th class="cpu">CPU</th>
                            <th class="memory">Memory</th>
                            <th class="time">Time</th>
                            <th class="command">Command</th>
                        </tr>
                    </thead>
                    <tbody>
                    {data.processes.map((process) => (
                        <tr>
                            <td class="pid">{process.pid}</td>
                            <td class="user">{process.user}</td>
                            <td class="cpu">{process.cpu}%</td>
                            <td class="mem">{process.mem} MiB</td>
                            <td class="time">{process.time}</td>
                            <td class="command">{process.command}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default TopViewer;
