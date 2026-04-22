import './ProjectPages.css'

function Sploot() {
    return (
        <>
            <section className="projectDetails">
                <div>
                    <h1>Sploot</h1>
                    <hr />

                    <br /><br />
                    <h3>Check it out on itch.io below!</h3>
                    <iframe frameborder="0" src="https://itch.io/embed/3412828?border_width=3&amp;bg_color=2679d5&amp;fg_color=ffffff&amp;link_color=1445a1&amp;border_color=000000" width="556" height="171">
                        <a href="https://sebastianha01.itch.io/sploot">
                            Sploot by Steam Bun Games - Sebastian Ha
                        </a>
                    </iframe>

                    <br />
                    <a href="https://github.com/PlaceholderGames/Sploot-FTS24.git">Check out the repository here</a>
                    <br />

                    <br />
                    <h3>Unity 6 | Scripting | 2D Top Down | Adventure RPG</h3>
                    <br />

                    <h2>Overview</h2>
                    <p>
                        Sploot is a 2D top-down RPG developed in Unity. The project is structured around a set of interacting game elements which 
                        together create the core gameplay loop. It includes a player controller, bounded NPC movement, dialogue interactions, a quest manager, enemy behaviour,
                        collectibles, item drops, health management and menu systems. These components work together to guide the player through 
                        exploration, combat and progression. Supporting systems such as camera follow, music control, sound effects and UI health bars were also implemented to improve 
                        feedback and create a more complete gameplay experience.
                    </p>

                    <img src="/Images/Sploot2.png" />
                    
                    <h2>Technical Implementation</h2>
                    <p>
                        Developed using Unity 6 and C# scripting that was organised around individual gameplay responsibilities. Separate scripts manage 
                        areas such as player behaviour, enemy control, health, item collection, loot drops, quest progression and audio. This helped 
                        keep the project modular and made it easier to extend core features during development.
                    </p>
                
                    <img src="/Images/Sploot4.png" />

                    <h2>Challenges and Improvements</h2>
                    <p>
                        A key challenge in this project was maintaining clear structure while developing multiple interacting gameplay systems. Working 
                        within scope was important, so the focus remained on completing core features first before expanding into additional mechanics 
                        such as quests, collectibles and interactive NPC dialogue.
                    </p>

                    <img src="/Images/Sploot8.png" />
                </div>
            </section>
        </>
    )
}

export default Sploot