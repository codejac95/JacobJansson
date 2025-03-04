function Projects() {

    return (
      <>
        <h1>Projects</h1>
        <h2>WifiCar</h2>
        <p>I built a smart car using an Arduino Uno R4, controlled via WiFi from my phone. <br/>  
            It features two L298N motor drivers and a web-based control interface.   <br/> 
            The Arduino itself hosts a lightweight web server that receives and processes movement commands in real time.<br/>  
            One of the biggest challenges was optimizing the response time to ensure smooth and precise movement.</p>

        <div className="video-container">
          <video width="250" height="220" controls>
            <source src="Car.mp4"/>
          </video>
        </div>
        <h2>Smart watering</h2>
        <p>I'm currently working on a automatic watering system for my plants. <br />
        I use a variety of sensors to measure temperature, humidity, soilmoisture, waterlevels and progress<br/> 
        </p>
      </>
    )
  }
  
  export default Projects;
  