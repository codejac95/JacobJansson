function Cv() {
  return (
    <div className="cv-container">
  
      <section className="contact-info">
        <h2>Contact Information</h2>
        <ul>
          <li>Stenroddargränd 1, 55330 Jönköping</li>
          <li>0727069659</li>
          <li>Jacob950422@gmail.com</li>
        </ul>
      </section>

      <section className="experience">
        <h2>Experience</h2>
        <div className="job">
          <h3>Contracting Electrician</h3>
          <span>2014/07/01 - 2021/09/24</span>
          <p>Bogesunds El & Tele AB - Leading installer on major new productions around the country</p>
        </div>
        <div className="job">
          <h3>Service Electrician</h3>
          <span>2021/10/04 - 2023/08/25</span>
          <p>Eltjänst i Vätterbygden AB - Worked as a service electrician in Jönköping.</p>
        </div>
      </section>

      <section className="education">
        <h2>Education</h2>
        <div className="school">
          <h3>Java development</h3>
          <p>Jönköping University/Värnamo (In collaboration with Campus Värnamo)</p>
        </div>
        <div className="school">
          <h3>El & Teknik</h3>
          <p>Tingsholmsgymnasiet, Ulricehamn</p>
        </div>
      </section>

      <section className="summary">
        <h2>Summary</h2>
        <p>
          As a leading installer, I was responsible for a team of electricians from start to finish, 
          primarily in new construction of apartment buildings. My duties included material orders, 
          scheduling, and execution. I thrive in a challenging environment that offers opportunities 
          for personal development. I have a strong interest in computers, new technology, and problem 
          solving, which led me to pursue Java development.
        </p>
        <p>
          I have a solid foundational knowledge of IT and programming, which continues to grow 
          as I study. During my internship at the Swedish Courts (Domstolsverketet) in Jönköping, I had the opportunity 
          to work on real IT projects, where I developed my understanding of system development, 
          database management, and backend programming. I also gained experience working in a 
          professional environment, collaborating with development teams, and handling technical challenges. 
          The internship gave me deeper insight into how IT solutions are applied in public organizations 
          and strengthened my ability to work in a structured and problem-solving manner.
        </p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>Java</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>c++</li>
          <li>mySQL</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </section>
    </div>
  );
}

export default Cv;
