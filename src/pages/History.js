import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/History.css';

import image1 from 'C:/Users/lenovo/Desktop/independence-day-website/src/Firefly Design an image showcasing a historical maritime scene with Portuguese ships arriving on Ind.jpg';
import image2 from 'C:/Users/lenovo/Desktop/independence-day-website/src/Firefly Create an artistic representation of a British East India Company trading post, surrounded b.jpg';
import image3 from 'C:/Users/lenovo/Desktop/independence-day-website/src/Firefly Design an image capturing the tension and rivalry between European powers in India during th.jpg';
import image4 from 'C:/Users/lenovo/Desktop/independence-day-website/src/Firefly Create a dramatic depiction of the Battle of Plassey, highlighting the clash between British.jpg';
import image5 from 'C:/Users/lenovo/Desktop/independence-day-website/src/Firefly Create an image portraying the governance practices of the British Raj. Showcase British off.jpg';
import image6 from 'C:/Users/lenovo/Desktop/independence-day-website/src/Firefly rani laxmi bai leading the way againg the britishers, dresses in sari riding a horse in a ba.jpg';
import image7 from 'C:/Users/lenovo/Desktop/independence-day-website/src/Firefly many people marching in protest, india 1900, old time, people dressed in white sari and dhot.jpg';
import image8 from 'C:/Users/lenovo/Desktop/independence-day-website/src/Firefly Create a modern representation of independent India, featuring diverse scenes of progress an.jpg';

const content1 = (
  <p>
    The Portuguese were among the first European powers to establish a presence in India. Vasco da Gama's voyage in 1498 marked a significant turning point, as it opened a sea route to India. The Portuguese established trading posts and fortified settlements along the western coast, primarily focused on maritime trade and control of key ports.
  </p>
);

const content2 = (
  <p>
    The 17th century saw the emergence of the British East India Company as a major player in India. The company initially operated as a trading entity, establishing factories and outposts along the Indian coastline. Over time, it expanded its influence by forming alliances with local rulers, engaging in military campaigns, and extracting economic concessions.
  </p>
);

const content3 = (
  <p>
    The 18th century witnessed intense competition among European powers, including the British, French, Dutch, and others, for control over India's lucrative trade routes and resources. Military conflicts between European powers and indigenous rulers further destabilized the region and created opportunities for territorial expansion.
  </p>
);

const content4 = (
  <p>
    The Battle of Plassey marked a pivotal moment when the British East India Company decisively defeated the Nawab of Bengal. This victory allowed the company to exercise political control over Bengal, leading to a shift from trade-oriented interests to direct governance.
  </p>
);

const content5 = (
  <p>
    Following the Indian Rebellion of 1857, known as the Sepoy Mutiny or First War of Independence, the British Crown assumed direct control over India from the British East India Company. This marked the beginning of the British Raj, a period of direct British rule over the Indian subcontinent that lasted until India's independence in 1947.
  </p>
);

const content6 = (
  <p>
    The Indian Rebellion of 1857, often referred to as the Sepoy Mutiny or the First War of Independence, was a significant uprising against British colonial rule in India. It began as a result of various social, political, and economic grievances among Indian soldiers (sepoys) in the British East India Company's army. The revolt quickly spread to encompass a wide range of Indian society, including peasants, nobles, and other marginalized groups who were disillusioned by British policies and practices.
    {/* ... complete the content ... */}
  </p>
);

const content7 = (
  <p>
    After the arrival of Mahatma Gandhi in India, a significant shift in the country's path to independence began. Mahatma Gandhi, also known as the "Father of the Nation," returned to India from South Africa in 1915 and immediately embarked on a journey of nonviolent resistance and civil disobedience against British colonial rule. His leadership and philosophy of satyagraha, or truth force, inspired millions of Indians to join the struggle for freedom.
    {/* ... complete the content ... */}
  </p>
);

const content8 = (
  <p>
    After gaining independence from British colonial rule in 1947, India embarked on a remarkable journey that has shaped its legacy in profound ways. The post-independence era witnessed the nation's fervent pursuit of democracy, unity, and development. Through a commitment to secularism and inclusivity, India became a diverse and multicultural democracy, granting its citizens the right to practice various religions, cultures, and languages freely. The adoption of a constitution, based on principles of justice, liberty, and equality, solidified the nation's democratic foundations.
    {/* ... complete the content ... */}
  </p>
);

function History() {
  const sections1 = [
    {
      id: 'about1',
      title: 'Portuguese Arrival and Trade:',
      content: content1,
      image: image1,
    },
    {
      id: 'about2',
      title: 'Rise of the British East India Company: ',
      content: content2,
      image: image2,
    },
    {
      id: 'about3',
      title: 'Conflict and Expansion:',
      content: content3,
      image: image3,
    },
    {
      id: 'about4',
      title: 'Battle of Plassey (1757) and Bengal',
      content: content4,
      image: image4,
    },
    {
      id: 'about5',
      title: 'British Control and Raj: ',
      content: content5,
      image: image5,
    },
  ];

  const sections2 = [
    {
      id: 'about6',
      title: 'Indian Rebellion of 1857:',
      content: content6,
      image: image6,
    },
    {
      id: 'about7',
      title: 'Path to Independence: ',
      content: content7,
      image: image7,
    },
    {
      id: 'about8',
      title: 'Legacy of Independence: ',
      content: content8,
      image: image8,
    },
  ];

  const [activeSectionIndex1, setActiveSectionIndex1] = useState(0);
  const [activeSectionIndex2, setActiveSectionIndex2] = useState(0);

  const handleNextSlide1 = () => {
    setActiveSectionIndex1((prevIndex) => (prevIndex + 1) % sections1.length);
  };

  const handlePrevSlide1 = () => {
    setActiveSectionIndex1((prevIndex) => (prevIndex - 1 + sections1.length) % sections1.length);
  };

  const handleNextSlide2 = () => {
    setActiveSectionIndex2((prevIndex) => (prevIndex + 1) % sections2.length);
  };

  const handlePrevSlide2 = () => {
    setActiveSectionIndex2((prevIndex) => (prevIndex - 1 + sections2.length) % sections2.length);
  };

  useEffect(() => {
    const interval1 = setInterval(handleNextSlide1, 5000);
    const interval2 = setInterval(handleNextSlide2, 10000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, [handleNextSlide1, handleNextSlide2]);

  return (
    <div>
      <Navbar />
      <div className="about">
        <div>
          <h3 className="h3">Our History</h3>
        </div>
        <div className='high'>
          <Carousel
            showThumbs={false}
            selectedItem={activeSectionIndex1}
            onChange={setActiveSectionIndex1}
            dynamicHeight={false}
          >
            {sections1.map((section) => (
              <div key={section.id} >
                <div >
                  <div >
                    <img src={section.image} alt={`Slide ${section.id}`} />
                  </div>
                  <div >
                    <h2 >{section.title}</h2>
                    <p >{section.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <div className="section-buttons">
          <button onClick={handlePrevSlide1}>Previous</button>
          <button onClick={handleNextSlide1}>Next</button>
        </div>

        <div className='high'>
          <Carousel
            showThumbs={false}
            selectedItem={activeSectionIndex2}
            onChange={setActiveSectionIndex2}
            dynamicHeight={false}
          >
            {sections2.map((section) => (
              <div key={section.id} >
                <div >
                  <div >
                    <img src={section.image} alt={`Slide ${section.id}`} />
                  </div>
                  <div >
                    <h2 >{section.title}</h2>
                    <p >{section.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <div className="section-buttons2">
          <button onClick={handlePrevSlide2}>Previous</button>
          <button onClick={handleNextSlide2}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default History;
