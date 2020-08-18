import React from 'react';
import GraphNode from "./GraphNode";
import GraphBlock from "./GraphBlock";
import GraphArrow from "./GraphArrow";
import muscle from "../../images/ThirdPage/musle.png"
import betta from "../../images/ThirdPage/Betta.png"
import capa from "../../images/ThirdPage/Capa.png"
import Ice from '../Ice'
import Ice1 from "../../images/ThirdPage/ice1.png";
import Ice2 from "../../images/ThirdPage/ice2.png";

const FirstSlide = () => {
	const width = '70%';

	return (
		<div className={'Slide FirstSlide'}>
			<Ice img={Ice1} top={'510px'} left={'10px'} width={170}/>
			<Ice img={Ice2} top={'150px'} left={'600px'} width={100}/>
			<div className="Slide-Content">
				<h2>Звенья патогенеза СД2</h2>
				<div className="Graph Slide-Graph">
					<GraphNode position={{top: '110px', left: '340px'}}
					           img={betta}
					           capture={1}
					           text={"\u03B2-клетки"}
					           textPosition={'top'}
					           width={'40px'}
								nowrap={true}/>
					<GraphNode position={{top: '350px', left: '100px'}}
					           img={muscle}
					           capture={2}
					           text={"Мышцы"}
					           textPosition={'top'}
								width={width}/>
					<GraphNode position={{top: '350px', left: '600px'}}
					           img={capa}
					           capture={3}
					           text={"Печень"}
					           textPosition={'top'}
								width={width}/>
					<GraphBlock position={{top: '410px', left: '300px'}}
								width={'200px'}
								height={'100px'}
								text={"Гипергликемия"}/>
					<GraphArrow position={{top: '250px', left: '140px'}}
					            size={'250px'}
					            rot={130}/>
					<GraphArrow position={{top: '230px', left: '430px'}}
					            size={'250px'}
					            rot={35}/>
					<GraphArrow position={{top: '300px', left: '345px'}}
					            size={'120px'}
					            width={4}
					            rot={83}/>
					<GraphArrow position={{top: '410px', left: '210px'}}
					            size={'100px'}
					            width={5}
					            rot={-7}/>
					<GraphArrow position={{top: '420px', left: '490px'}}
					            size={'110px'}
					            width={5}
					            rot={173}/>
				</div>
			</div>
		</div>
	)
};

export default FirstSlide