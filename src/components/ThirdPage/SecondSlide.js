import React from 'react';
import GraphNode from "./GraphNode";
import GraphBlock from "./GraphBlock";
import GraphArrow from "./GraphArrow";
import muscle from "../../images/ThirdPage/musle.png"
import betta from "../../images/ThirdPage/Betta.png"
import capa from "../../images/ThirdPage/Capa.png"
import two from "../../images/ThirdPage/2.png"
import three from "../../images/ThirdPage/3.png"
import lipid from "../../images/ThirdPage/lipid.png"
import brain from "../../images/ThirdPage/brain.png"
import kidneys from "../../images/ThirdPage/kidneys.png"
import Ice from "../Ice";
import Ice3 from "../../images/ThirdPage/ice3.png";
import Ice4 from "../../images/ThirdPage/ice4.png";
import Ice5 from "../../images/ThirdPage/ice5.png";

const SecondSlide = () => {
	const width = '40%';
	const wrapSize = '70px';

	return (
		<div className={'Slide SecondSlide'}>
			<div className="Slide-Content">
				<Ice img={Ice3} top={'120px'} left={'-100px'} width={100}/>
				<Ice img={Ice4} top={'0px'} left={'400px'} width={50}/>
				<Ice img={Ice5} top={'350px'} left={'820px'} width={150}/>
				<h2>Смертельный октет</h2>
				<div className="Graph Slide-Graph">
					<GraphNode position={{top: '105px', left: '15px'}}
					           img={two}
					           capture={""}
					           text={"Инкретиновый эффект"}
					           textPosition={'left'}
					           width={width}
					           wrapSize={wrapSize}/>
					<GraphNode position={{top: '40px', left: '355px'}}
					           img={betta}
					           capture={1}
					           text={"\u03B2-клетки"}
					           textPosition={'top'}
					           width={width}
					           wrapSize={wrapSize}
								nowrap={true}/>
					<GraphNode position={{top: '105px', left: '505px'}}
					           img={three}
					           capture={""}
					           text={"Дефект α-клеток"}
					           textPosition={'right'}
					           width={width}
					           wrapSize={wrapSize}/>
					<GraphNode position={{top: '240px', left: '625px'}}
					           img={lipid}
					           capture={"4"}
					           text={"Жировые клетки"}
					           textPosition={'right'}
					           width={width}
					           wrapSize={wrapSize}/>
					<GraphNode position={{top: '405px', left: '525px'}}
					           img={muscle}
					           capture={"5"}
					           text={"Мышцы"}
					           textPosition={'bottom'}
					           width={'70%'}
					           wrapSize={wrapSize}/>
					<GraphNode position={{top: '405px', left: '355px'}}
					           img={capa}
					           capture={"6"}
					           text={"Печень"}
					           textPosition={'bottom'}
					           width={'70%'}
					           wrapSize={wrapSize}/>
					<GraphNode position={{top: '405px', left: '165px'}}
					           img={brain}
					           capture={"7"}
					           text={"Головной мозг"}
					           textPosition={'bottom'}
					           width={'70%'}
					           wrapSize={wrapSize}/>
					<GraphNode position={{top: '250px', left: '25px'}}
					           img={kidneys}
					           capture={"4"}
					           text={"Почки"}
					           textPosition={'left'}
					           width={"70%"}
					           wrapSize={wrapSize}/>
					<GraphBlock position={{top: '220px', left: '200px'}}
					            width={'400px'}
					            height={'150px'}
					            text={"Гипергликемия"}/>
					<GraphArrow position={{top: '275px', left: '163px'}}
					            size={'35px'}
					            width={10}
					            rot={-7}/>
					<GraphArrow position={{top: '275px', left: '600px'}}
					            size={'35px'}
					            width={10}
					            rot={173}/>
					<GraphArrow position={{top: '190px', left: '550px'}}
					            size={'30px'}
					            width={10}
					            rot={83}/>
					<GraphArrow position={{top: '195px', left: '390px'}}
					            size={'25px'}
					            width={12}
					            rot={83}/>
					<GraphArrow position={{top: '190px', left: '220px'}}
					            size={'30px'}
					            width={12}
					            rot={83}/>
					<GraphArrow position={{top: '375px', left: '212px'}}
					            size={'35px'}
					            width={12}
					            rot={-97}/>
					<GraphArrow position={{top: '375px', left: '378px'}}
					            size={'35px'}
					            width={12}
					            rot={-97}/>
					<GraphArrow position={{top: '375px', left: '550px'}}
					            size={'35px'}
					            width={12}
					            rot={-97}/>
					            
				</div>
			</div>
		</div>
	)
};

export default SecondSlide