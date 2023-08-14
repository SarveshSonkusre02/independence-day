import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../styles/Future.css'; // Make sure to import the correct CSS file
import image1 from 'C:/Users/lenovo/Desktop/independence-day-website/src/Firefly Design an image showcasing a historical maritime scene with Portuguese ships arriving on Ind.jpg';

function Future() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  // Replace the following data with your own cards' data
  const futureCards = [
    {
      title: '🚀Space: India plans to launch a manned mission to the moon by 2029. The country is also developing a reusable launch vehicle, which could revolutionize the space industry.',
      content: <p>India's plans for space exploration are ambitious. The country plans to launch a manned mission to the moon by 2029, and it is also developing a reusable launch vehicle, which could revolutionize the space industry. India's space program is a source of national pride,<br/>and it is seen as a symbol of the country's growing technological prowess.
      The manned mission to the moon is a major undertaking, and it will require a significant investment of time and resources. However, India is confident that it has the technology and expertise to succeed. The mission will be a major milestone for India, and it will help to put the country on the map as a leading spacefaring nation.
      
      The reusable launch vehicle is another important project for India's space program. The vehicle could significantly reduce the cost of launching satellites and other payloads into space. This would make it more affordable for India to pursue its ambitious space exploration goals.<br/>The mission will be called Gaganyaan, which means "sky vehicle" in Sanskrit.<br/>The spacecraft will be launched by India's GSLV Mk III heavy-lift launch vehicle.
      <br/>The spacecraft will carry three astronauts, who will spend about seven days on the moon.<br/>The astronauts will conduct scientific experiments on the moon, and they will also collect samples.<br/>This Moon Mission will se a new steeping stone for India in Future</p>,
      // Add more properties like 'image' if needed
    },
    {
      title: '🏗️Infrastructure: India plans to invest heavily in infrastructure development in the coming years. This includes roads, railways, airports, and power plants. The country also plans to develop smart cities, which will use technology to improve efficiency and sustainability.',
      content: <p> India's infrastructure is in need of major investment. The country's roads, railways, airports, and power plants are outdated and inefficient. This is a major obstacle to economic growth, and it also contributes to environmental problems.<br/>India's government has plans to invest heavily in infrastructure development in the coming years. This will involve building new roads, railways, airports, and power plants. The government is also planning to develop smart cities, which will use technology to improve efficiency and sustainability.<br/>The development of smart cities is a priority for India's government. Smart cities will use technology to improve transportation, energy, and water management. They will also use technology to provide better healthcare and education services.<br/>The government plans to invest $1.4 trillion in infrastructure development over the next five years.
      This investment will be used to build new roads, railways, airports, power plants, and other infrastructure projects.<br/>
The development of smart cities is a priority for the government, as it believes that they will help to improve the quality of life for citizens and attract investment.</p>,
    },
    {
      title: '📖Education: India plans to make education more accessible and affordable for all citizens. The country is also working to improve the quality of education, so that Indian students can compete with students from other countries.',
      content: <p>India plans to make education more accessible and affordable for all citizens. The country is also working to improve the quality of education, so that Indian students can compete with students from other countries.<br/>The government is investing in new schools and colleges, and it is also providing financial assistance to students from poor families. The government is also working to improve the quality of teachers, and it is introducing new curriculums.<br/>India's education system is facing a number of challenges, but the government is committed to improving it. The government believes that education is essential for economic growth and social development.<br/>The country is facing a shortage of teachers.
      <br/>The government plans to invest $1 trillion in education over the next five years.
This investment will be used to build new schools and colleges, and to improve the quality of education in existing schools and colleges.
      <br/>There is a need for better infrastructure, such as schools and libraries.
      <br/>There is a need for better curriculums that are relevant to the needs of the 21st century workforce.
      <br/>There is a need for better assessment systems that can measure the progress of students.</p>,
    },
    {
      title: '🧑‍⚕️Healthcare: India plans to provide universal healthcare to its citizens by 2030. The country is also working to improve the quality of healthcare, so that Indian citizens can live longer and healthier lives.',
      content: <p>India has a large population, and the healthcare system is not always able to meet the needs of all citizens. The government is working to provide universal healthcare to its citizens by 2030.
        <br/>The government is building new hospitals and clinics, and it is also providing financial assistance to poor patients. The government is also working to improve the quality of healthcare providers, and it is introducing new medical technologies.
        <br/>India's healthcare system is facing a number of challenges, but the government is committed to improving it. The government believes that healthcare is essential for the well-being of its citizens.
        <br/>The government plans to improve the quality of healthcare providers by increasing the number of doctors and nurses, and by providing them with better training. The government is also working to introduce new medical technologies to improve the quality of care.
        <br/>The government plans to embrace technology to improve the efficiency and effectiveness of the healthcare system. This includes using telemedicine to provide healthcare to remote areas, and using artificial intelligence to diagnose diseases and recommend treatments.
        <br/>The government believes that these plans will help to improve the healthcare system in India and make it more accessible to all citizens.
        </p>,
    },
    {
      title: '🧑‍💻Technology: India is a major player in the global technology industry. The country plans to continue to invest in research and development, so that it can stay ahead of the curve in the tech world.',
      content: <p>India is a major player in the global technology industry. The country is home to a number of successful technology companies, such as Infosys, Tata Consultancy Services, and Wipro. The government is working to create a more favorable environment for technology companies, so that they can continue to grow and innovate.
        <br/>The government is also investing in research and development, so that India can stay ahead of the curve in the tech world. The government believes that technology is essential for economic growth and social development.
        <br/>India's technology industry is facing a number of challenges, such as the shortage of skilled workers. However, the government is confident that India can overcome these challenges and become a leading global technology hub.
        <br/>The government plans to focus on emerging technologies, such as artificial intelligence, cloud computing, and the Internet of Things. These technologies have the potential to revolutionize the way we live and work, and India wants to be at the forefront of this revolution.
        <br/>The government plans to develop a skilled workforce to meet the needs of the technology industry. This includes investing in education and training programs. The government is also working to create partnerships with universities and colleges to develop new programs in technology.
      </p>,
    },
    {
      title: '🧑‍🌾Agriculture: India is a major agricultural country. The country plans to modernize its agriculture sector, so that it can produce more food and meet the needs of its growing population.',
      content: <p>India is a major agricultural country. The country produces a wide variety of crops, including rice, wheat, and cotton. The government is working to modernize the agriculture sector, so that it can produce more food and meet the needs of its growing population.
        <br/>The government is investing in irrigation projects, new farming technologies, and agricultural research. The government is also working to improve the marketing of agricultural products, so that farmers can get a fair price for their crops.
        <br/>India's agriculture sector is facing a number of challenges, such as climate change and water scarcity. However, the government is confident that India can overcome these challenges and become a major food exporter.
        <br/>The government plans to invest in irrigation projects to ensure that farmers have access to water. This includes building new dams and canals, and also modernizing existing irrigation systems.
        <br/>The government plans to improve the marketing of agricultural products, so that farmers can get a fair price for their crops. This includes setting up new markets and improving the infrastructure for transportation and storage of agricultural products
        <br/> The government plans to promote sustainable agriculture practices, such as organic farming and crop rotation. These practices can help to protect the environment and ensure the long-term sustainability of the agriculture sector.
      </p>,
    },
    // Add more cards as needed
  ];

  const handleNextCard = () => {
    setActiveCardIndex((prevIndex) => (prevIndex + 1) % futureCards.length);
  };

  const handlePrevCard = () => {
    setActiveCardIndex((prevIndex) => (prevIndex - 1 + futureCards.length) % futureCards.length);
  };

  return (
    <div className="future">
      <Navbar />
      <h1 className='heading'>Our Future</h1>
      <p className='para'>What are nwe Plan to ward progress</p>
      <div className="card-container">
        {futureCards.map((card, index) => (
          <div
            key={index}
            className={`card ${index === activeCardIndex ? 'active' : ''} ${
              index < activeCardIndex ? 'push-up' : ''
            }`}
          >
            <h2 className="card-title">{card.title}</h2>
            {/* Add your image here */}
            <p className="card-content">{card.content}</p>
          </div>
        ))}
      </div>
      <div className="card-navigation">
        <button onClick={handlePrevCard}>&lt; Previous</button>
        <button onClick={handleNextCard}>Next &gt;</button>
      </div>
    </div>
  );
}

export default Future;
