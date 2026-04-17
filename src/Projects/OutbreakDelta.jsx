import './ProjectPages.css'

function OutbreakDelta() {
    return (
        <>
            <section className="projectDetails">
                <div>
                    <h2>Outbreak Delta</h2>
                    <hr />

                    <br /><br />
                    <h3>Check it out on itch.io below!</h3>
                    <iframe frameborder="0" src="https://itch.io/embed/3413107?border_width=4&amp;bg_color=3d5691&amp;fg_color=ffffff&amp;link_color=1a2aa5&amp;border_color=000000" width="558" height="173">
                        <a href="https://sebastianha01.itch.io/outbreak-delta">
                            Outbreak Delta by Steam Bun Games - Sebastian Ha
                        </a>
                    </iframe>

                    <h3>What makes this game unique</h3>
                    <p>
                        This project is unique due to the fact you can dismember enemies,
                        the enemies also have ragdoll physics and fall when their health 
                        is depleted. The project also has multiple look and movement types
                        to account for motion sickness and user play styles, teleportation,
                        continuous movement, snap turning, continuous turning, ray 
                        interactors if user’s have limited space. And lastly occlusion 
                        culling has been implemented to increase performance.
                    </p>

                    <img src="/Images/OutbreakDelta3.png"/>
                
                    <h3>The Good</h3>
                    <p>
                        For a first my first ever VR game I got functionality working with 
                        the headset done well and I managed to keep to a good time limit 
                        for each part of the project given the time I had. I also learnt 
                        optimisation techniques like reducing triangles in the map and 
                        occlusion culling so that the project could preform better.  
                    </p>
                    <img src="/Images/OutbreakDelta2.png"/>
                
                    <h3>The Bad</h3>
                    <p>
                        There was a lot of unfinished work, I got a basic game done but 
                        there was not that much polish. There was also little quality of 
                        gameplay, apart from moving around and shooting the enemies there 
                        was not much else and I crunched a very extreme amount, probably 
                        was not good for me health wise.
                    </p>
                
                    <img src="/Images/OutbreakDelta5.png"/>

                    <h3>The things I would do differently next time</h3>
                    <p>
                        I would cut the map down to a third of what it was, focus on a 
                        round system and scoring to keep the player interested, add story 
                        elements to add some depth to the gameplay and sort out the physics 
                        for the enemies when they get parts of them dismembered.
                    </p>

                    <img src="/Images/OutbreakDelta6.png"/>
                </div>
            </section>
        </>
    )
}

export default OutbreakDelta