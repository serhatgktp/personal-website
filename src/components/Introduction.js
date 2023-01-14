import React from 'react'
import github_logo from '../assets/github.svg'
import linkedin_logo from '../assets/linkedin.png'
import resume_logo from '../assets/resume.svg'
import resume_pdf from '../assets/resume.pdf'

const Introduction = () => {
  return (
    <div className="containers">
        <div className="firstContainer">
          <h1 className="apple-garamond">I'm a software developer, with a sense of humor.<br/>Welcome!</h1>
        </div>
        <div className="secondContainer sf-pro">
          <p>👨 My name is Efkan [Serhat] Goktepe</p>

          <p>🎓 4th year of Computer Science at <a href="https://www.utoronto.ca/">University of Toronto</a></p>

          <p>🔧 Currently a Software Developer at <a href="https://alphabytesolutions.com/">Alphabyte Solutions.</a></p>

          <p>🗺️ Extracurriculars:<br/>
            <ul>
                <li>🕹️ President, <a href="https://csec.club/gamers/">UTSC Game Dev Club</a></li>
                <li>✏️ Academic Representative, <a href="https://amacss.org/">AMACSS</a></li>
            </ul>
          </p>

          <p>My contributions are mostly in backend development and infrastructure, but I play across the entire tech stack!</p>

          <p>I love meeting new people and exploring opportunities - feel free to reach out!</p>

          <div className="media-icons">
            <a href="https://www.linkedin.com/in/serhatgoktepe">
              <img alt="linkedin-icon" src={linkedin_logo}/>
            </a>

            <a href="https://github.com/serhatgktp">
              <img alt="github-icon" src={github_logo} target=""/>
            </a>

            <a href={resume_pdf}>
              <img alt="resume-icon" src={resume_logo} target=""/>
            </a>
          </div>
        </div>
      </div>
  )
}

export default Introduction