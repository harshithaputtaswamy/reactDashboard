import Header from '../shared/Header';
import SideBar from '../shared/SideBar';

const DefaultLayout = ({children}) =>{
  return (
    <div className="d-flex flex-row w-100">
      <div className="p-0" style={{position: 'fixed'}}>
        <SideBar />
      </div>
      <div className="p-0" style={{backgroundColor: '#f5f6ff', marginLeft: 230, width: 'calc(100vw - 230px)'}}>
        <Header />
        {children}
      </div>
    </div>
  )
}

export default DefaultLayout