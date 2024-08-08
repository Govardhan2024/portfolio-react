import './About.css'
import profile_img from '../../assets/Images/profile_img.svg'
const About = () => {
  return (
    <div>
        <h1 style={{textAlign:'center',padding:'20px', fontSize:'50px'}}>About Me</h1>
    <div className='about'>
      <div className='About-title'>
      </div>
      <div className='about-sections'>     
         <div className='about-left'>
      <img src={profile_img}/>
      </div>
      </div>

      <div className='About-right'>
        <div className='about-para'>
            <p>I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
            <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
        </div>
        <div className='about-skills'>
           <div className='about-skill'><p>HTML</p><hr style={{width:"90%",}}/></div>
           <div className='about-skill'><p>CSS</p><hr style={{width:"80%",}}/></div>
           <div className='about-skill'><p>JAVA SCRIPT</p><hr style={{width:"40%",}}/></div>
           <div className='about-skill'><p>REACT JS</p><hr style={{width:"50%",}}/></div>
           <div className='about-skill'><p>REACT NATIVE</p><hr style={{width:"50%",}}/></div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About
