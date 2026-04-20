import './ProjectPages.css'

function FinalYearProject() {
  return (
    <>
        <section className="projectDetails">
            <div>
                <h1>
                    An Educational Virtual Reality Approach to Raising Awareness of Digital Eye Strain
                </h1>
                <hr />

                <h3>Final Year Project</h3>

                <br />
                <a href="https://github.com/sebha01/VR_EyeProject.git">Check out the repository here</a>
                <br />

                <br />
                <p>Unreal Engine 5.3.2 | Blueprints | Meta Quest 3 | VR Interaction Design | User Iterative Testing</p>
                <br />

                <p>
                    This project explores how Virtual Reality can be used as an educational tool
                    to raise awareness of Digital Eye Strain (Computer Vision Syndrome) through an
                    interactive, immersive experience.
                </p>

                <img
                    src="/Images/VR_Project7.png"
                    alt="Final VR environment overview"
                />

                <h2>Project Overview</h2>
                <p>
                    Digital Eye Strain is an increasingly common issue caused by prolonged screen
                    use, with symptoms including eye fatigue, light sensitivity, focus strain,
                    headaches, and discomfort. The goal of this project was to use VR to present
                    those symptoms in a more engaging and memorable way than traditional teaching
                    approaches. 
                </p>

                <h2>The Problem</h2>
                <p>
                    Although awareness of Digital Eye Strain exists, preventative habits are still
                    not consistently adopted. The project was designed to address that gap by
                    creating an experience that allows users to interact with causes, symptoms,
                    and preventative measures inside a simulated desk environment. 
                </p>

                <img src="/Images/VR_Project1.png" alt="Eye fatigue symptom simulation"/>

                <h2>Aim</h2>
                <p>
                    The aim was to raise awareness of Digital Eye Strain by using Virtual Reality
                    to immerse and engage users with educational material relating to ocular
                    health. 
                </p>

                <h2>What I Built</h2>
                <p>
                    I developed an interactive VR experience in Unreal Engine 5.3.2, tested on a
                    Meta Quest 3 headset, using objective-based progression to guide users through
                    symptom causes and preventative actions. The experience used a realistic desk
                    environment, gaze-based interactions, hand-trigger interactions, diegetic UI
                    displayed through an in-world monitor, and post-processing effects to simulate
                    symptoms of Digital Eye Strain. 
                </p>

                <img src="/Images/VR_Project5.png" alt="Prototype room layout in Unreal Engine"/>

                <h2>Technical Implementation</h2>
                <p>
                    The project was built in Unreal Engine using Blueprints. Objective data was
                    stored and updated during runtime, with progression controlled through gaze
                    tracking and interactive objects. Event dispatchers were used to notify the
                    system of state changes such as objective completion, symptom activation,
                    symptom reversal, and UI updates.
                </p>

                <p>
                    To simulate Digital Eye Strain symptoms, I used post-processing effects:
                    vignette for eye fatigue, bloom for light sensitivity, and blur for focus
                    strain. Timelines were used to gradually apply and reverse these effects to
                    keep transitions readable and comfortable for users. 
                </p>

                <img src="/Images/VR_Project6.png" alt="Focus strain objective shown on monitor"/>

                <h2>Interaction Design</h2>
                <p>
                    A key design goal was to keep the experience intuitive for users with limited
                    VR familiarity. Gaze interaction was used to reduce controller complexity and
                    make progression feel natural, while a grab-trigger interaction was used for
                    the light switch. The objective system used a cause → symptom → prevention
                    flow to reinforce learning without breaking immersion.
                </p>

                <img src="/Images/VR_Project2.png" alt="Light switch interaction"/>

                <h2>Challenges</h2>
                <p>
                    One of the biggest challenges was balancing realism with user comfort.
                    Symptoms needed to be noticeable enough to communicate the effects of Digital
                    Eye Strain, but not so strong that they caused unnecessary discomfort. Another
                    challenge was refining VR interaction in Unreal Engine, particularly around
                    gaze detection, hand physics collisions, and keeping the diegetic UI readable
                    and immersive.
                </p>

                <h2>Testing and Iteration</h2>
                <p>
                    The project followed a User Centred Design approach with iterative testing.
                    Early prototype testing revealed two main usability problems: gaze detection
                    felt too unforgiving, and the light switch interaction felt clunky. In
                    response, hand physics collisions were removed, the light switch logic was
                    simplified, and the gaze system was changed from a line trace to a wider
                    capsule trace to improve error tolerance. 
                </p>

                <img src="/Images/VR_Project4.png" alt="Start menu environment"/>

                <h2>Results</h2>
                <p>
                    Final testing showed that the improved experience more clearly demonstrated
                    the causes, symptoms, and preventative measures of Digital Eye Strain. User
                    feedback indicated that the simulated symptoms helped recognition and
                    understanding, while iterative refinements reduced frustration and improved
                    usability. 
                </p>

                <h2>What This Project Shows</h2>
                <p>
                    This project highlights my ability to research a problem domain, design an
                    interactive system around user needs, implement VR interactions in Unreal
                    Engine, test usability issues, and iterate based on feedback. It also shows
                    my interest in technically focused work that combines software development,
                    interaction design, and applied problem solving. This lines up closely with
                    how the project is positioned in my CV. 
                </p>

                <h2>Future Improvements</h2>
                <p>
                    Future work would include narration within the experience, accessibility
                    settings, eye tracking for gaze detection, additional environments, and a
                    more intuitive light switch interaction. Larger and more diverse testing
                    groups would also strengthen the experience further. 
                </p>

                <img src="/Images/VR_Project3.png" alt="Light sensitivity prevention task"/>
            </div>
        </section>
    </>
  )
}

export default FinalYearProject