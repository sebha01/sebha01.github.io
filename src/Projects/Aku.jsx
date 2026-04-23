import './ProjectPages.css'

function Aku() {
    return (
        <>
            <section className="projectDetails">
                <div>
                    <h1>Aku, Frenzied Shinigami</h1>
                    <hr />

                    <br /><br />
                    <h3>Check it out on itch.io below!</h3>
                    
                    <iframe frameborder="0" src="https://itch.io/embed/3413053?border_width=3&amp;bg_color=5f5d5b&amp;fg_color=ffffff&amp;link_color=00017e&amp;border_color=000000" width="556" height="171">
                        <a href="https://sebastianha01.itch.io/aku-frenzied-shinigami">
                            Aku, Frenzied Shinigami by Steam Bun Games - Sebastian Ha
                        </a>
                    </iframe>

                    <br />
                    <a href="https://github.com/PlaceholderGames/uppercutstudios.git">Check out the repository here</a>
                    <br />

                    <br />
                    <h3>Unreal Engine 4.27 | Blueprints | 3D Souls Like Boss Fight</h3>
                    <br />

                    <h3>Overview</h3>
                    <p>
                        Aku, Frenzied Shinigami is a 3D souls like boss fight developed in Unreal Engine 4.27 using Blueprints. The project focuses on implementing a structured 
                        combat encounter supported by a tutorial section, allowing players to learn core mechanics before entering the main boss fight.
                    </p>

                    <img src="/Images/Aku1.png"/>

                    <h3>Combat and Encounter Design</h3>
                    <p>
                        The game is centred around a single boss encounter where the player must use movement, timing and positioning to survive and deal damage. The boss behaviour is 
                        designed to create pressure through conditioned attack patterns, requiring the player to react and adapt rather than rely on simple repetition.
                    </p>

                    <p>
                        A tutorial section introduces the core mechanics before the encounter begins, helping players understand movement, dodging and combat interactions. This creates a 
                        smoother introduction to the mechanics before entering the boss fight.
                    </p>

                    <img src="/Images/Aku2.png"/>

                    <h3>Technical Implementation</h3>
                    <p>
                        The project was built using Unreal Engine 4.27 with blueprints to control gameplay behaviour. Systems were implemented to manage player state, enemy 
                        behaviour, attack handling and combat feedback within the encounter.
                    </p>

                    <img src="/Images/Aku4.png"/>

                    <h3>Iteration and Playtesting</h3>
                    <p>
                        Playtesting feedback was used to refine the experience, particularly around combat clarity and difficulty. Adjustments were made to improve player understanding 
                        of mechanics and ensure the encounter remained challenging without becoming frustrating.
                    </p>

                    <img src="/Images/Aku6.png"/>
                </div>
            </section>
        </>
    )
}

export default Aku