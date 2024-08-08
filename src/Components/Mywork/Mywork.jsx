import   './Mywork.css'
import mywork_data from './../../assets/Images/project_1-5xYOfh0z.svg'
import arrow_icon from '../../assets/Images/arrow_icon.svg'
const Mywork = () => {
  return (
    <div className='Mywork'>
        <h1 style={{textAlign:'center',fontSize:'50px'}}>My work Latest</h1>
        <div className='myworkcard2'>
        <div className='mywork-title'>
        <img src={mywork_data} alt=''/>
        </div>
        <div className='mywork-title'>
        <img src={mywork_data} alt=''/>
        </div>
        <div className='mywork-title'>
        <img src={mywork_data} alt=''/>
        </div>
        </div>
        <div  className='myworkcard2'>
        <div className='mywork-title'>
        <img src={mywork_data} alt=''/>
        </div>
        <div className='mywork-title'>
        <img src={mywork_data} alt=''/>
        </div>
        <div className='mywork-title'>
        <img src={mywork_data} alt=''/>
        </div>
        
        </div>
        <div className='showmore'>
      <button className='btn-3'>Show More <img  src={arrow_icon}/></button>
      </div>
    </div>
  )
}

export default Mywork
