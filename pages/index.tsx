import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles['body-wrapper']}>
      <h1>About</h1>
      <p>
        Hello! I&apos;m Sam - I&apos;m a <u>Fullstack Software Developer & Tech Lead</u> currently living in Brighton, U.K.
        I&apos;m currently working for Lendscape - a London-based fintech, and have been since 2019.
        Before this I graduated from the University of Sussex with a <u>First Class in Computer Science and Artificial Intelligence BSc</u>.
        I love travelling, cooking, reading, <u>coffee!</u>
      </p>

      <h1>Key Technology</h1>
      <div className={styles['tech-bits']}>
        <span>Java</span>
        <span>Rust</span>
        <span>TypeScript</span>
        <span>Python</span>
        <span>SQL</span>
        <span>Docker</span>
        <span>React</span>
        <span>HTML & CSS</span>
        <span>Linux</span>
        <span>Bash/Shell</span>
        <span>Spring</span>
        <span>Vaadin</span>
      </div>
      <h1>Recent Achievements</h1>
      <div className={styles['achievements-wrapper']}>
        <p><strong>Developed and maintain our in-house automated testing framework</strong>. This is responsible for deploying and testing our core monolith product and web app frontend via Docker containers and Cypress, which feeds back to our CI/CD build process. Also created and set up the guidelines for the Cypress project used by testers.</p>
        <p><strong>Reduced processing time by 67% for a high volume I/O feature</strong> of our core Java monolith product, by increasing concurrency and rewriting core functionality.</p>
        <p><strong>Designed and implemented internal tooling which reduced time spent requesting internal environments by 80%</strong>. Primarily for Testers, BAs and the Sales team for testing and demonstrations, allowed them to deploy builds themselves via a modern web frontend.</p>
      </div>
      <h1>Values</h1>
      <p><strong>Adaptability - </strong>Every day is a school day! I find a lot of value in being adaptable to new technology and flexibilility in being able to turn my hand to any task. </p>
      <p><strong>Passionate & Curious - </strong>I really enjoy learning new languages, frameworks and concepts and try to experiment with ideas and hands on practise as much as I can. Making mistakes and asking questions is the key to deeper understanding.</p>
      <p><strong>Team Player - </strong>Throughout my career when I&apos;ve had positions of leadership, treating everyone as peers is always my #1 priority. It&apos;s important for people to feel they are contributing to the team because they see the value in the team working, not to do something because they are told to. Playing to people&apos;s strengths is just as important as giving people the chance to learn and thrive. </p>
      <p><strong>Mentoring - </strong>As a tech lead, I enjoy being responsible for mentoring team members, encouraging best practises, maintaining a high standard for code quality.</p>
    </div>)
}

{/* Values? */ }
{/* ------------------------------- */ }
{/* I am very adaptable, resilient, and flexible to changes in technology, picking up new tasks, and thoroughly enjoy learning something new. */ }
{/* An example of this was I was tasked with reviving the dead integration system framework, to which I&apos;ve modernised, supported, and improved for 2 years now. */ }
{/* This required me to pick up Linux, Bash/Shell, distributed systems, and I handled it well. */ }

{/* I value readability and discoverability in code. As long as the code is easy to follow or the documentation is extensive, I can adapt */ }

{/* Team player, throughout my career when I&apos;ve had positions of leadership (DM at COOP / mentored newbies / stand in for TL), treating everyone as peers is always my #1 priority. Instead of ordering, we discuss. It&apos;s important for people to feel they are contributing to the team because they see the value in the team working, not to do something because they are told to. Playing to peoples strengths in a team is just as important as giving team members the chance to learn and thrive. */ }
{/* ------------------------------- */ }

{/* Achivements */ }
{/* ------------------------------- */ }
{/* Upgraded current integration testing platform, and now modernised a new platform using containers, integrating nicely into our build process. */ }
{/* Developed internal tooling for the companies BAs, testers, and sales members to quickly create a testing environment with highly customisable config using Docker */ }
{/* Reduced  */ }
{/* ------------------------------- */ }


export default Home
