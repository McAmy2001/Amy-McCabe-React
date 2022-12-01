/* eslint-disable array-callback-return */
import React from 'react';

function Project() {
  const projects = [
    {
      title: 'Where Were You When',
      github: 'https://github.com/McAmy2001/Where-Were-You-When',
      deployed: 'https://where-were-you-when.herokuapp.com/',
      alt: 'Screenshot from Where Were You When app',
      key: 'where'
    },
    {
      title: 'Take A Hike',
      github: 'https://github.com/McAmy2001/Take-A-Hike-2',
      deployed: 'https://mcamy2001-take-a-hike.herokuapp.com/',
      alt: 'Take A Hike Logo',
      key: 'hike'
    },
    {
      title: 'Get Facts and Find Cats',
      github: 'https://github.com/McAmy2001/Get-Facts-and-Find-Cats',
      deployed: 'https://mcamy2001.github.io/Get-Facts-and-Find-Cats/',
      alt: 'Monster the cat, meowing at the camera',
      key: 'cats'
    },
    {
      title: 'Social Network API',
      github: 'https://github.com/McAmy2001/social-network-API',
      deployed: 'https://drive.google.com/file/d/1PglojSptrJ6UPB-Rc7vr6rkAl69Wav7C/view',
      alt: 'Screenshot from app',
      key: 'social'
    },
    {
      title: 'Tech Blog',
      github: 'https://github.com/McAmy2001/Tech-Blog',
      deployed: 'https://mcamy-tech-blog.herokuapp.com/',
      alt: 'Screenshot from app',
      key: 'blog'
    },
    {
      title: 'Note Taker',
      github: 'https://github.com/McAmy2001/Note-Taker',
      deployed: 'https://shrouded-hamlet-63560.herokuapp.com/',
      alt: 'Screenshot from app',
      key: 'note'
    },
    {
      title: 'Team Profile Generator',
      github: 'https://github.com/McAmy2001/Team-Profile-Generator',
      deployed: 'https://drive.google.com/file/d/1t6GYVjfg9aCq8yMyezeVdvsPPCCuWa08/view',
      alt: 'Screenshot from app',
      key: 'team'
    },
    {
      title: 'Employee Tracker',
      github: 'https://github.com/McAmy2001/Employee-Tracker',
      deployed: 'https://drive.google.com/file/d/1eY53Ts_SpbI8EfKOuU5_KY3YrN5s2ONN/view',
      alt: 'Screenshot from app',
      key: 'tracker'
    }
  ]
  return (
    <div className='portfolio-container'>
      <h1>My Projects</h1>
      <div className='portfolio'>
        {projects.map((project, i) => (
          <div className='project' key={project.key}>
            <img src={require(`../../assets/img${i}.jpeg`)} alt={project.alt} />
            <h3>
            <a href={project.github}>{project.title}</a><br />
            </h3><br/>
          </div>

          //key={project.key}
        ))}
      </div>

    </div>
  )
}

export default Project;