import './ProjectPages.css'

function RuleBasedSystem() {
  return (
    <>
      <section className="projectDetails">
        <div>
          <h1>Wait for Table Rule-Based System in C++</h1>
          <hr />

          <br />
          <a href="https://github.com/sebha01/IntelligentSystemsAssignment1.git">Check out the repository here</a>
          <br />

          <br />
          <h3>C++ | Rule Base | Working Memory | Forward Chaining | Inference Engines</h3>
          <br />

          <p>
            This project is a C++ rule-based expert system built to solve the “wait for table”
            decision problem. The system guides a user through an interactive consultation and
            recommends whether they should wait for a table or leave, based on a structured set
            of rules derived from a decision tree.
          </p>

          <img src="/Images/RBS1.png" alt="Rule-based system decision tree" />

          <h2>Project Overview</h2>
          <p>
            The goal of the project was to implement a rule-based expert system that captures
            specialist decision logic in a narrow problem domain. The system uses a rule base,
            working memory, and inference engine to apply facts provided by the user and reach
            a justified conclusion.
          </p>

          <h2>Problem Being Solved</h2>
          <p>
            The system models the everyday decision of whether a restaurant customer should wait
            for a table. Factors such as the number of customers, waiting time, whether there is
            an alternative restaurant, reservation status, bar availability, weather and popular
            days all influence the final recommendation.
          </p>

          <h2>Architecture</h2>
          <p>
            I implemented the system using an object-oriented architecture in C++ rather than
            relying on a specialist shell such as CLIPS. The design is split into a RuleBase,
            WorkingMemory and InferenceEngine with the inference engine encapsulating the
            knowledge base and working memory to manage their interaction. This made the system
            modular, easier to follow and aligned with standard expert system structure.
          </p>

          <img src="/Images/RBS2.png" alt="Rule-based system consultation screen" />

          <h2>Inference and Decision Logic</h2>
          <p>
            The system applies forward chaining, making it well suited to an interactive,
            fact-driven consultation. After each user response, the inference engine compares
            the working memory against the rules in the rule base. When multiple rules remain
            valid, conflict resolution is handled by specificity, selecting the rule with the
            largest number of antecedents to ask the most relevant next question.
          </p>

          <h2>Traceability and Explanation</h2>
          <p>
            A key strength of the system is that it explains how it reached its conclusion.
            Once a decision is made, the system presents the reasoning by listing the facts
            that led to the final outcome. This makes the consultation transparent and improves
            trust in the recommendation, which is one of the major advantages of rule-based
            systems compared to more opaque approaches.
          </p>

          <img src="/Images/RBS3.png" alt="Rule-based system wait decision output" />
          <img src="/Images/RBS5.png" alt="Rule-based system leave decision output" />

          <h2>Usability and Reliability</h2>
          <p>
            Beyond the reasoning logic, I added input validation to ensure invalid input could
            not break the consultation flow. The system only asks relevant questions by excluding
            branches that no longer match the facts already gathered, which keeps the dialogue
            focused and avoids unnecessary prompts. I also added replay support and small UX
            touches such as status messages and delay handling to make the consultation feel more
            complete.
          </p>

          <img src="/Images/RBS4.png" alt="Rule-based system consultation path" />

          <h2>What This Project Demonstrates</h2>
          <p>
            This project shows my ability to design software architecture in C++, implement
            structured decision-making logic and build systems that prioritise transparency
            and reliability. It also reflects my interest in decision-support systems and
            applied AI, particularly in contexts where software must justify the reasoning
            behind its output.
          </p>

          <h2>Limitations and Future Work</h2>
          <p>
            The system works well in a narrow domain, but it is tightly coupled to its specific
            rule base and would become harder to maintain as the number of rules grows.
            I identified future improvements such as handling uncertainty, making the
            system more adaptable across domains and exploring hybrid approaches that combine
            rule-based reasoning with inductive learning techniques.
          </p>

          <h2>Why It Matters</h2>
          <p>
            Although the problem domain is simple, the project demonstrates concepts that are
            relevant far beyond this scenario: knowledge representation, inference, traceability,
            validation, and structured decision support. Those are the parts of the project that
            are most transferable to real-world software and intelligence-focused systems.
          </p>
        </div>
      </section>
    </>
  )
}

export default RuleBasedSystem