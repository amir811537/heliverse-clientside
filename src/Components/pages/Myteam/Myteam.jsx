import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Myteam = () => {
    const [teamData, setTeamData] = useState([]);

    useEffect(() => {
        axios.get('https://serverside-heliverse.vercel.app/team')
            .then(response => {
                setTeamData(response.data);
            })
            .catch(error => {
                console.error('Error fetching team data:', error);
            });
    }, []);

    return (
        <div className='max-w-7xl py-14 mx-auto'>
            {teamData.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name & Email</th>
                                <th>Domain</th>
                                <th>Status</th>
                                <th>Gender</th>
                            </tr>
                        </thead>
                        <tbody>
                            {teamData.map(member => (
                                <tr key={member._id}>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={member.avatar} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{member.first_name} {member.last_name}</div>
                                                <div className="text-sm opacity-50">{member.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {member.domain}
                                    </td>
                                    <td>{member.available ? 'Available' : 'Not Available'}</td>
                                    <td>
                                        <button className="btn btn-ghost btn-xs">{member.gender}</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className='text-7xl text-center'>No team member added, sorry !!</div>
            )}
        </div>
    );
};

export default Myteam;
