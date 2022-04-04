import './leftNav.scss'
export default function leftNav() {
    return (
      <div className="left-nav">
        <div className="left-nav_avatar">
            <img className="img1" src="https://vitejs.cn/logo.svg"></img>
            </div>
        <div className='left-nav_item'>
            <div className='left-nav_icon'>
                <img src='https://vitejs.cn/logo.svg'></img>
            </div>
        </div>
      </div>
    );
  }