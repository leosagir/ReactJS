import React from 'react';
import './Lesson04.css';
import { forceUsers } from './data';

export default function Lesson04() {
    return (
        <div className="lesson-container">
            <h3>Lesson04</h3>
            {forceUsers.map((hero, index) => (
                <div key={index} className={`hero-container ${hero.isDark ? 'dark' : ''}`}>
                    <h4>{hero.name}</h4>
                    <p>Age: {hero.age}</p>
                    <img width={200} src={hero.image} alt={`${hero.name}`} />
                    <p>Lightsaber colors:{" "}
                    {hero.lightsaberColors.map( (color, colorIndex) =>
                        <span key={colorIndex}>{color}</span>
                    )}
                    </p>
                </div>
            ))}
        </div>
    );
}

