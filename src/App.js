import './App.css';
import fakedata from '../src/FakeData/Data.json';
import { useEffect, useState } from 'react';
import UserDatas from '../src/Components/userDatas/UserDatas';
import Header from '../src/Components/Header/Header';
import Welcome from '../src/Components/WecomeArea/Welcome';
import Footer from '../src/Components/Footer/Footer';


function App() {
	const [userDatas, setUserDatas] = useState([])
	useEffect(()=>{
		console.log(fakedata);
		setUserDatas(userDatas);
	},[])

	return (
		<div className="user-wrapper">
			<Header></Header>
			<Welcome></Welcome>
			
			<p style={{color:"goldenrod", fontSize:"30px", textAlign:"center"}}>Our Team Member</p>
			{
				fakedata.map(fakeDataItem => <UserDatas fakeDataItem={fakeDataItem}></UserDatas>)
			}
			<Footer></Footer>
		</div>
	);
}

export default App;
