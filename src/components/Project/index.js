/* eslint-disable array-callback-return */
import React from 'react';

function Project() {
  const projects = [
    {
      title: 'Where Were You When',
      github: 'https://github.com/McAmy2001/Where-Were-You-When',
      demo: 'https://drive.google.com/file/d/1C6EWA8fwwzReNiAU_IeZ_Cdg-EA-BYcy/view?usp=sharing',
      alt: 'Screenshot from Where Were You When app',
      description: 'An app for saving and sharing memories',
      key: 'where'
    },
    {
      title: 'Take A Hike',
      github: 'https://github.com/McAmy2001/Take-A-Hike-2',
      demo: 'https://drive.google.com/file/d/1LRUDjDxmAqvSzSuLUa-ZjrTZWKCeawjh/view?usp=sharing',
      alt: 'Take A Hike Logo',
      description: 'An app to post and share your favorite hiking trails',
      key: 'hike'
    },
    {
      title: 'Note Taker',
      github: 'https://github.com/McAmy2001/Note-Taker',
      demo: 'https://drive.google.com/file/d/1GcbPPLbGfnvWzIbB0tE7NJOfwAQefcRG/view?usp=sharing',
      alt: 'Screenshot from app',
      description: 'A simple note taking app',
      key: 'note'
    },
    {
      title: 'Team Profile Generator',
      github: 'https://github.com/McAmy2001/Team-Profile-Generator',
      demo: 'https://drive.google.com/file/d/15azTnuvrG5-n4NCZOghTncArcsGqRmZX/view?usp=sharing',
      alt: 'Screenshot from app',
      description: 'A command line app that generates a team portfolio',
      key: 'team'
    },
    {
      title: 'Employee Tracker',
      github: 'https://github.com/McAmy2001/Employee-Tracker',
      demo: 'https://drive.google.com/file/d/1ov36Aefa2VhTnuU6X6BHd4s9-JGG2BYk/view?usp=sharing',
      alt: 'Screenshot from app',
      description: 'A command line app that displays requested employee information from a database in tables',
      key: 'tracker'
    },
    {
      title: 'Social Network API',
      github: 'https://github.com/McAmy2001/social-network-API',
      demo: 'https://drive.google.com/file/d/1FnuIkFQh_85KhVpQ8BcnsmWC13FA6h_y/view?usp=sharing',
      alt: 'Screenshot from app',
      description: 'A social network API backend',
      key: 'social'
    }
    /*
    {
      title: 'Get Facts and Find Cats',
      github: 'https://github.com/McAmy2001/Get-Facts-and-Find-Cats',
      demo: 'https://mcamy2001.github.io/Get-Facts-and-Find-Cats/',
      alt: 'Monster the cat, meowing at the camera',
      key: 'cats'
    }, */
    /*{
      title: 'Tech Blog',
      github: 'https://github.com/McAmy2001/Tech-Blog',
      demo: 'https://mcamy-tech-blog.herokuapp.com/',
      alt: 'Screenshot from app',
      key: 'blog'
    }, */
  ]
  return (
    <div className='portfolio-container'>
      <h1>My Projects</h1>
      <div className='portfolio'>
        {projects.map((project, i) => (
          <div className='project' key={project.key}>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
            <img src={require(`../../assets/img${i}.jpeg`)} alt={project.alt} />
            <h3>
            {project.title}<br />
            </h3>
            </a><br/>
            <p>{project.description}</p><br/>
            <h4>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">Watch a demo</a>
            </h4>
          </div>

          //key={project.key}
        ))}
      </div>

    </div>
  )
}

export default Project;