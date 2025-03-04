function Projects() {

    return (
      <>
        <h2>WifiCar</h2>
        <p className="projects">
          I built a smart car using an Arduino Uno R4, controlled via WiFi from my phone. <br/>  
          It features two L298N motor drivers and a web-based control interface.   <br/> 
          The Arduino itself hosts a lightweight web server that receives and processes movement commands in real time.<br/>  
          One of the biggest challenges was optimizing the response time to ensure smooth and precise movement.
        </p>
        <a href="https://github.com/codejac95/WifiCar" target="_blank" rel="noopener noreferrer" className="underline-link">
            Code for the WiFi-Car
          </a>

        <div className="video-container">
          <video width="250" height="220" controls>
            <source src="Car.mp4"/>
          </video>
        </div>
        <h2>PlantCare+</h2>
        <p className="projects">
          I'm currently working on an automatic watering system for my plants.<br/>
          I use a variety of sensors to measure temperature, humidity, soil moisture, water levels and progress.<br/>
          The system is powered by an Arduino, which monitors the environment and adjusts watering intervals based on real-time data.<br/>
          The system includes a water tank that supplies water through connected hoses, allowing precise control over the amount<br/>
          of water each plant receives. The sensors help ensure that the plants get the right amount of water at the right time,<br/> 
          preventing both overwatering and underwatering. I also use a ultra sonic sensor to measure the water levels to make sure<br/>
          that the pump never runs without water in the tank. By automating the watering process, I can maintain an optimal environment<br/>
          for my plants with minimal effort, even when I'm away. This project has been a great learning experience in both hardware<br/>
          and software, and I continue to improve its efficiency as I monitor the system's performance.
        </p>

        <a href="https://github.com/codejac95/PlantCare" target="_blank" rel="noopener noreferrer" className="underline-link">
            Code for PlantCare+
          </a>
      </>
    )
  }
  
  export default Projects;
  