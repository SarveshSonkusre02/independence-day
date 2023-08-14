import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../styles/Present.css';

function Present() {
  // Dummy data for blog cards
  const blogPosts1 = [
    {
      id: 1,
      title: 'Lunar Mission',
      /*content: 'Content of the first blog post...',*/
      id: 2,
      title: 'Lunar Mission',
      /*content: 'Content of the first blog post...',*/
    },
  ];

  const blogPosts2 = [
    {
      id: 2,
      title: "World's largest vaccine drive by india",
    },
  ];

  const blogPosts3 = [
    {
      id: 3,
      title: "Fastest-growing startup ecosystem: India",
    },
  ];

  const blogPosts4 = [
    {
      id: 4,
      title: "Largest digital market: India",
    },
  ];

  return (
    <div className="opinions">
      <Navbar />
      <div>
        <h3 className="opinions-heading">Present</h3>
      </div>
      <div className="blog-cards-container">
        {blogPosts1.map((post) => (
          <div className="blog-card1" key={post.id}>
            <h2 className="blog-title">{post.title}</h2>
            <pre className="blog-content">The Chandrayaan-3 mission was launched by the Indian Space Research Organisation (ISRO) on July 14, 2023,<br/>from the Satish Dhawan Space Centre in Sriharikota, Andhra Pradesh, India. The spacecraft is carrying a lander and rover,<br/>which will attempt to soft-land on the lunar surface near the south pole.</pre>
            <pre className='blog-content'>The Chandrayaan-3 mission is a follow-up to the Chandrayaan-2 mission, which was launched in 2019.<br/>The Chandrayaan-2 mission was successful in entering lunar orbit, but the lander crashed during the landing attempt.<br/>The Chandrayaan-3 mission is designed to address the issues that led to the Chandrayaan-2 lander crash,<br/>and to successfully soft-land on the lunar surface.</pre>
            <pre className='blog-content'>The Chandrayaan-3 spacecraft is made up of three modules: a lander, a rover, and a propulsion module.<br/>The lander will carry the rover to the lunar surface, and the propulsion module will provide communication and navigation support for the spacecraft.</pre>
            <pre className="blog-content">The Chandrayaan-3 mission is a major milestone for India's space program. The success of the mission will demonstrate India's ability to soft-land and<br/>operate a robotic rover on the lunar surface. The mission will also help India to learn more about the lunar surface and to improve its lunar exploration<br/>capabilities.</pre>
          </div>
        ))}
      </div>


      <div className="blog-cards-container">
        {blogPosts2.map((post) => (
          <div className="blog-card2" key={post.id}>
            <h2 className="blog-title">{post.title}</h2>
            <pre className="blog-content">India launched the world's largest vaccination drive against COVID-19 on January 16, 2021. The goal of the drive was to vaccinate 300 million people in<br/>the first phase, which included healthcare workers, frontline workers, and people over the age of 60. The second phase of the drive focused on vaccinating<br/>people between the ages of 18 and 60.</pre>
            <pre className="blog-content">The vaccine drive was a massive undertaking, and it was met with some challenges. The initial supply of vaccines was limited, and there were some delays in<br/>the distribution of vaccines. However, the Indian government was able to overcome these challenges, and the vaccination drive was a success.</pre>
            <pre className="blog-content">As of March 2023, over 1.7 billion doses of the COVID-19 vaccine have been administered in India. This is more than any other country in the world.<br/>The vaccination drive has helped to significantly reduce the number of COVID-19 cases and deaths in India.</pre>
            <pre className="blog-content">The world's largest vaccine drive by India is a major achievement. It is a testament to the strength and resilience of the Indian people,<br/>and it is a sign of India's growing global leadership.</pre>
            <pre className="blog-content">The world's largest vaccine drive by India is a landmark achievement. It has helped to save lives and to protect the health of millions of people.<br/>It is a testament to the strength and resilience of the Indian people, and it is a sign of India's growing global leadership.</pre>
          </div>
        ))}
      </div>


      <div className="blog-cards-container">
        {blogPosts3.map((post) => (
          <div className="blog-card3" key={post.id}>
            <h2 className="blog-title">{post.title}</h2>
            <pre className="blog-content">India has the third largest number of startups in the world, after the United States and China.The Indian startup ecosystem is growing at a rate of<br/>20-25% per year.</pre>
            <pre className="blog-content">The Indian startup ecosystem is highly diverse, with startups in a variety of sectors, including technology, healthcare, education, and finance.</pre>
            <pre className="blog-content">Indian startups are attracting significant investment from both domestic and international investors.Indian startups are making a significant impact on the<br/>Indian economy, creating jobs and generating revenue.</pre>
            <pre className="blog-content">A large and growing pool of skilled talent: India has a large and growing pool of skilled talent, particularly in the technology sector. This talent pool<br/>is a major draw for startups, both domestic and international.</pre>
            <pre className="blog-content">A supportive government: The Indian government has been supportive of the startup ecosystem, providing a number of initiatives to help startups grow and succeed.<br/>A favorable business environment: India has a relatively favorable business environment for startups, with low taxes and a growing middle class.<br/>A strong entrepreneurial culture: India has a strong entrepreneurial culture, with a long history of innovation and risk-taking. This culture is a major driver<br/>of the startup ecosystem.</pre>
          </div>
        ))}
      </div>

      <div className="blog-cards-container">
        {blogPosts4.map((post) => (
          <div className="blog-card4" key={post.id}>
            <h2 className="blog-title">{post.title}</h2>
            <pre className="blog-content">India has over 1.4 billion internet users, making it the second most populous country with internet access in the world.The number of internet<br/>users in India is growing rapidly, at a rate of over 20% per year.</pre>
            <pre className="blog-content">India's digital market is worth over $1 trillion, making it the third largest digital market in the world. The Indian digital market is growing rapidly,<br/>at a rate of over 25% per year.</pre>
            <pre className="blog-content">The Indian digital market is highly diverse, with a variety of sectors, including e-commerce, digital payments, social media, and online gaming.<br/>Indian digital startups are attracting significant investment from both domestic and international investors.<br/>Indian digital startups are making a significant impact on the Indian economy, creating jobs and generating revenue.</pre>
            <pre className="blog-content">The rise of smartphones: The increasing affordability of smartphones has made it possible for more people in India to access the internet.<br/>The growth of e-commerce: E-commerce is growing rapidly in India, as more people are shopping online for goods and services.<br/>The rise of digital payments: Digital payments are becoming increasingly popular in India, as people are using their smartphones to pay for goods and services.<br/>The growth of social media: Social media is very popular in India, with over 400 million active users.<br/>The growth of online gaming: Online gaming is also popular in India, with over 300 million gamers.</pre>
            <pre className="blog-content">India's digital market is poised for continued growth in the years to come. The country has a number of advantages<br/>that make it an attractive destination for digital businesses, including a large and growing population, a young population, a growing middle class,<br/>a favorable regulatory environment, and a strong technological infrastructure. Economist confident that India will continue to be the largest digital market<br/>in the world in the years to come.</pre>
          </div>
        ))}
      </div>

    </div>
  );
}
    

export default Present;
