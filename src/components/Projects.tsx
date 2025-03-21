import { useState } from "react";

function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (src:any) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="projects-container">
      <p>
        [UNDER CONSTRUCTION] <br />
        My plan is to post some of my more creative projects here
      </p>

      <h2>WifiCar</h2>
      <p>
        I built a smart car using an Arduino Uno R4, controlled via WiFi from my phone.
        It features two L298N motor drivers and a web-based control interface.
        The Arduino itself hosts a lightweight web server that receives and processes movement commands in real time.
        One of the biggest challenges was optimizing the response time to ensure smooth and precise movement.
      </p>
      <a href="https://github.com/codejac95/WifiCar" target="_blank" rel="noopener noreferrer" className="underline-link">
        Code for the WiFi-Car
      </a>

      <div className="video-container">
        <video width="250" height="220" controls>
          <source src="pictures/Car.mp4" />
        </video>
      </div>

      <h2>PlantCare+</h2>
      <p>
        I'm currently working on an automatic watering system for my plants.
        I use a variety of sensors to measure temperature, humidity, soil moisture, water levels, and progress.
        The system is powered by an Arduino, which monitors the environment and adjusts watering intervals based on real-time data.
        The system includes a water tank that supplies water through connected hoses, allowing precise control over the amount
        of water each plant receives. The sensors help ensure that the plants get the right amount of water at the right time,
        preventing both overwatering and underwatering.
        I also use an ultrasonic sensor to measure the water levels to make sure that the pump never runs without water in the tank.
        By automating the watering process, I can maintain an optimal environment for my plants with minimal effort, even when I'm away.
        This project has been a great learning experience in both hardware and software, and I continue to improve its efficiency
        as I monitor the system's performance.<br /><br />

        Specs: Arduino UNO R4, HC-SR04 ultra sonic dual sensor, MB102 breadboard, DHT11 temperature & humidity sensor,
        FC-28 Soil Moisture Sensor, 5v relay module, 5v water pump, water hoses & water container (the lid is covered with soundproofing
        material so that sound waves from the HC-SR04 do not bounce). <br /><br />

        (Project is not ready yet, more pictures will be coming shortly)
      </p>
      <a href="https://github.com/codejac95/PlantCare" target="_blank" rel="noopener noreferrer" className="underline-link">
        Code for PlantCare+
      </a>

      <div>
        <img
          src="pictures/ArduinoIMG.png"
          className="arduino-img"
          onClick={() => handleImageClick("pictures/ArduinoIMG.png")}
          alt="Arduino Image"
        />
        <img
          src="pictures/ArduinoScheme.png"
          className="arduino-img"
          onClick={() => handleImageClick("pictures/ArduinoScheme.png")}
          alt="Arduino Scheme"
        />
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <img src={selectedImage} className="fullsize-img" alt="Enlarged" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
