import React from 'react'
import './mainPage.scss'

export default function MainPage(props: any) {
  return (
    <>
      <section className="page-header">
        <h1 className="project-name font-weight-bold">Ajeet Shah</h1>
      </section>

      <section className="main-content">
        <h2 className="sub-heading">About</h2>
        <p className="text-content">Software Engineer</p>
      </section>

      <section className="main-content">
        <h2 className="sub-heading">Experience</h2>
        <p className="text-content">
          <a href="https://www.talentica.com/" className="text-info">
            Talentica Software
          </a>
          , Senior Software Engineer
        </p>
        <p className="text-content">
          <a href="https://www.accenture.com/" className="text-info">
            {' '}
            Accenture Services
          </a>
          , Senior Software Engineer
        </p>
        <p className="text-content">Fourace Software, Software Engineer</p>
      </section>

      <section className="main-content">
        <h2 className="sub-heading">Education</h2>
        <p className="text-content">
          <a href="https://www.iitk.ac.in/" className="text-info">
            Indian Institute of Technology Kanpur
          </a>
          , B.Tech., Civil Engineering
        </p>
      </section>

      <section className="main-content">
        <h2 className="sub-heading">Web</h2>
        <span className="text-content">
          <a href="https://stackoverflow.com/users/2873538/ajeet-shah">
            <img
              src="https://stackoverflow.com/users/flair/2873538.png?theme=default"
              width="208"
              height="58"
              alt="profile for Ajeet Shah at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
              title="profile for Ajeet Shah at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
            />
          </a>
        </span>
        <span className="text-content">
          <a href="https://codesandbox.io/u/ajeetshah" className="text-info">
            CodeSandbox
          </a>
        </span>
        <span className="text-content">
          <a href="https://www.linkedin.com/in/ajeetshah/" className="text-info">
            Linkedin
          </a>
        </span>
        <span className="text-content">
          <a href="https://github.com/ajeetshah/" className="text-info">
            Github
          </a>
        </span>
        <span className="text-content">
          <a href="https://www.npmjs.com/~iamajeets" className="text-info">
            NPM
          </a>
        </span>
      </section>

      <section className="main-content">
        <h2 className="sub-heading">Hobby</h2>
        <span className="text-content">
          <a
            href="https://www.goodreads.com/user/show/61644341-ajeet-shah"
            className="text-info"
          >
            Reading books
          </a>
        </span>
        <span className="text-content">Programming</span>
        <span className="text-content">Rubik's cube</span>
      </section>

      <section className="main-content">
        <h2 className="sub-heading">Social</h2>
        <span className="text-content">
          <a href="https://twitter.com/shahajeet" className="text-info">
            Twitter
          </a>
        </span>
        <span className="text-content">
          <a href="https://instagram.com/iamajeets/" className="text-info">
            Instagram
          </a>
        </span>
      </section>

      <section className="footer-content"></section>
      <a
        href="https://www.webfreecounter.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          style={{ opacity: 0.1 }}
          src="https://www.webfreecounter.com/hit.php?id=gvakfqq&nd=4&style=1"
          alt="visitor counter"
        />
      </a>
    </>
  )
}
