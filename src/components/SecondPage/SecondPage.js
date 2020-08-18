import React from 'react';
import './SecondPage.css'
import Arrow from '../Arrow'
import Ice1 from '../../images/SecondPage/ice1.png'
import Ice2 from '../../images/SecondPage/ice2.png'
import Ice3 from '../../images/SecondPage/ice3.png'
import Ice4 from '../../images/SecondPage/ice4.png'
import Ice from '../Ice'

const SecondPage = () => {
	return (
		<>
			<div className="Page SecondPage">
				<Arrow position='top' dataAlt={'0'}/>
				<div className="Layer SecondLayer">
					<h1>Основа терапии —
						патогенез СД2</h1>
					<Ice img={Ice1} top={'150px'} left={'80px'} width={50}/>
					<Ice img={Ice2} top={'450px'} left={'250px'} width={100}/>
					<Ice img={Ice3} top={'590px'} left={'710px'} width={100}/>
					<Ice img={Ice4} top={'30px'} left={'880px'} width={150}/>
				</div>
				<Arrow position='bottom' dataAlt={'2'}/>
			</div>
		</>
	);
};

export default SecondPage;