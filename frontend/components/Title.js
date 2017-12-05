import React from 'react';
import PropTypes from 'prop-types';
import { Accordion, AccordionItem } from 'react-sanfona';

const Title = ({ name }) => {
    // this is how we can legit do the form submit later when want to build it out https://stackoverflow.com/questions/27932923/react-js-show-a-message-on-and-after-form-submission
    return (
        <div className="paid-profile-title"> {/* page */}
            <div> {/* top content */}
                <div> {/* title */}
                    <img src=""></img>
                    <h1>Mason Lantay</h1>
                    <h3>International Yoga Instructor</h3>
                </div>
                <div> {/* description */}
                    <p> Mason is an International Yoga Instructor who has taught in studios, co-working spaces, and resorts in the United States, Thailand, and India. An avid meditator and student of psychology and spirituality, Mason teaches music-filled classes helping people find their own flow on the mat and in life. Prior to teaching Yoga, Mason taught martial arts, music, and partner dancing. As of now Mason is traveling the world spreading Yoga, writing software, and building communities of consciousness.
                    </p>
                    <img src=""></img>
                    <img src=""></img>
                    <img src=""></img>
                </div>
            </div>
            <div> {/* collapsable content*/}
                <div>
                    {/*  component that lets me switch between blog and website (and later music) */}
                    <h2>Website // Blog</h2>
                </div>
                <div>
                    <Accordion allowMultiple={true}>
                        <AccordionItem title={`My Work`} expanded={false}>
                            <div>
                                {`This is all my work.`}
                            </div>
                        </AccordionItem>
                        <AccordionItem title={`Testimonials`} expanded={false}>
                            <div>
                                {`This is all my work.`}
                            </div>
                        </AccordionItem>
                        <AccordionItem title={`Contact`} expanded={false}>
                            <div>
                                {`This is all my work.`}
                            </div>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
            <div>{/* footer*/}
                <p>You are not a drop in the ocean,
                    you are the entire ocean in one drop.
                    -Rumi
                </p>
            </div>
        </div>


    );
};

Title.propTypes = {
    name: PropTypes.string,
};


export default Title;


// useful code once using actual variables
// <Accordion>
// {[1, 2, 3, 4, 5].map(item => {
//     return (
//         <AccordionItem title={`Item ${item}`} expanded={item === 1}>
//             <div>
//                 {`Item ${item} content`}
//             </div>
//         </AccordionItem>
//     );
// })}
// </Accordion>