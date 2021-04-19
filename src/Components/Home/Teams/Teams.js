import React from 'react';
import Team from '../Team/Team';
import alexender from '../../../images/man-1.jpg';
import john from '../../../images/man-2.jpg';
import silvia from '../../../images/man-3.jpg';
import './Teams.css'

const Teams = () => {
    const teamData = [
        {
            image: alexender,
            name: "Alexender Gary",

        },
        {
            image: john,
            name: "John Abraham",
        },
        {
            image: silvia,
            name: "Silvia Stan",
        }
    ]
    return (
        <section className="teams pt-5">
            <div className="container">
                <div className="row">
                    <div className="service-section text-center ">
                        <h1>Team</h1>
                    </div>
                    {
                        teamData.map(data => <Team data={data}></Team>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Teams;