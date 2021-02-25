import React from 'react';
import {ISkill} from "../../model";

export const Skills = ({skills}: {skills: ISkill[]}) => {

    const stars = (grade: number) => {
        const nbStars = 5;
        const nbFullStars = Math.floor(grade/2);
        const nbHalfStars = grade% 2;
        const stars: JSX.Element[] = [];
        for(let i = 0; i < nbStars; i++) {
            if (i < nbFullStars) {
                const star = <i className="fa fa-star" />;
                stars.push(star);
                continue;
            }
            if (nbHalfStars !== 0) {
                const star = <i className="fa fa-star-half-o" />;
                stars.push(star);
                continue;
            }
            const star = <i className="fa fa-star-o" />;
            stars.push(star);
        }

        return stars;
    }
    return (
        <section className="skills" id="skills">
            <div className="block-title">
                <h3>Skills and <span>Languages</span></h3>
            </div>
            {skills.map((skill: ISkill) => {
                return (
                    <span className="skill-item">
                        {skill.title}
                        <span className="level">
                            {skill.grade !== undefined && stars(skill.grade)}
                            {skill.favourite &&
                                <i class="fa fa-heart"/>
                            }
                        </span>
                        {skill.date &&
                            <span className="item-period">
                                {skill.date.since !== undefined && skill.date.until !== undefined &&
                                    <>
                                        {skill.date.since} - {skill.date.until}
                                    </>
                                }
                                {skill.date.since !== undefined && skill.date.until === undefined &&
                                    <>
                                        since {skill.date.since}
                                    </>
                                }
                                {skill.date.since === undefined && skill.date.until !== undefined &&
                                    <>
                                        until {skill.date.until}
                                    </>
                                }
                            </span>
                        }
                    </span>
                )
            })}
        </section>
    );
}
