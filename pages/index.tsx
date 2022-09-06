import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles['body-wrapper']}>
      <h1>About 👋</h1>
      <p>
        Hello! I&apos;m Sam - a highly motivated and passionate <u>Fullstack Software Developer & Tech Lead</u> currently working for Lendscape since 2019.
        I graduated from the University of Sussex with a <u>First Class in Computer Science and Artificial Intelligence BSc</u>.
        I love travelling, cooking, attending concerts, reading, and <u>coffee!</u>
      </p>

      <h1>Key Technology 🖥️</h1>
      <p>Here are some of the most notable tech I use day to day:</p>
      <div className={styles['tech-bits']}>
        <span>Java</span>
        <span>TypeScript</span>
        <span>Python</span>
        <span>Rust</span>
        <span>React</span>
        <span>SQL</span>
        <span>HTML & CSS</span>
        <span>Linux</span>
        <span>Bash/Shell</span>
        <span>Docker</span>
        <span>Spring</span>
        <span>Gradle</span>
        <span>Git</span>
        <span>Vaadin</span>
      </div>
      <h1>Recent Achievements 🏆</h1>
      <div className={styles['achievements-wrapper']}>
        <p><strong>Developed and maintain our in-house automated testing framework</strong>. This is responsible for deploying and testing our core monolith product and web app frontend via Docker containers and Cypress, which feeds back to our CI/CD build process. Also created and set up the guidelines for the Cypress project used by testers.</p>
        <p><strong>Reduced processing time by 67% for a high volume I/O feature</strong> of our core Java monolith product, by increasing concurrency and rewriting core functionality.</p>
        <p><strong>Designed and implemented internal tooling which reduced time spent requesting internal environments by 80%</strong>. Primarily for Testers, BAs and the Sales team for testing and demonstrations, allowed them to deploy builds themselves via a modern web frontend.</p>
      </div>
      <h1>Strengths & Values 🌟</h1>
      <p><strong>Fast Learner & Adaptable - </strong>I pride myself in being a fast learner and highly adaptable when it comes to new technology. I&apos;m always willing to try something new and learn from each success and mistake!</p>
      <p><strong>Passionate & Innovative - </strong>When picking up something new, I try to experiment with ideas and hands on practise as much as I can. Asking questions and being creative gives me a much deeper understanding.</p>
      <p><strong>Team Player - </strong>Throughout my career when I&apos;ve had positions of leadership, treating everyone as peers is always my #1 priority. It&apos;s important for people to feel they are contributing to the team because they see the value in the team working, not to do something because they are told to. Playing to people&apos;s strengths is just as important as giving people the chance to learn and thrive. </p>
      <p><strong>Mentoring - </strong>As a tech lead, I enjoy being responsible for mentoring team members, encouraging best practises, and maintaining a high standard for code quality.</p>
      <h1></h1>
    </div>)
}
export default Home
