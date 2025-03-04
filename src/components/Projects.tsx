function Projects() {

    return (
      <>
        <h1>Projects</h1>
        <p>I built a smart car using an Arduino Uno R4, controlled via WiFi from my phone.  
            It features two L298N motor drivers and a web-based control interface.  
            The Arduino itself hosts a lightweight web server that receives and processes movement commands in real time.  
            One of the biggest challenges was optimizing the response time to ensure smooth and precise movement.</p>

        <div className="video-container">
        <video width="250" height="220" controls>
          <source src="Car.mp4" type="video/mp4" />
        </video>
      </div>
 </>
    )
  }
  
  export default Projects;
  