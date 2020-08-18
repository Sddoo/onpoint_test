import React from 'react';
import GraphNode from "./GraphNode";
import GraphBlock from "./GraphBlock";
import GraphArrow from "./GraphArrow";
import muscle from "../../images/ThirdPage/musle.png"
import betta from "../../images/ThirdPage/Betta.png"
import capa from "../../images/ThirdPage/Capa.png"
import lipid from "../../images/ThirdPage/lipid.png"
import brain from "../../images/ThirdPage/brain.png"
import kidneys from "../../images/ThirdPage/kidneys.png"
import stomach from "../../images/ThirdPage/stomach.png"
import infection from "../../images/ThirdPage/infection.png"
import intestine from "../../images/ThirdPage/intestine.png"
import Ice from "../Ice";
import Ice6 from "../../images/ThirdPage/ice6.png";
import Ice7 from "../../images/ThirdPage/ice7.png";
import Ice8 from "../../images/ThirdPage/ice8.png";

const ThirdSlide = () => {
	const width = '70%';
	const wrapSize = '70px';
	
	return (
		<div className={'Slide ThirdSlide'}>
			<div className="Slide-Content">
				<Ice img={Ice6} top={'120px'} left={'-100px'} width={50}/>
				<Ice img={Ice7} top={'400px'} left={'50px'} width={200}/>
				<Ice img={Ice8} top={'150px'} left={'820px'} width={100}/>
				<h2>Звенья патогенеза СД2</h2>
				<div className="Graph Slide-Graph">
					<GraphNode position={{top: '420px', left: '300px'}}
					           img={kidneys}
					           capture={"11"}
					           text={"Почки"}
					           textPosition={'left'}
					           width={width}
					           wrapSize={wrapSize}/>
					<GraphNode position={{top: '340px', left: '50px'}}
					           img={stomach}
					           capture={"10"}
					           text={"Желудок"}
					           textPosition={'left'}
					           align={'right'}
					           width={width}
					           wrapSize={wrapSize}/>
					<GraphNode position={{top: '200px', left: '-200px'}}
					           img={infection}
					           capture={"9"}
					           text={"Нарушение иммунной регуляции/воспаление"}
					           textPosition={'left'}
					           align={'right'}
					           width={width}
					           wrapSize={wrapSize}/>
					<GraphNode position={{top: '100px', left: '-60px'}}
					           img={intestine}
					           capture={"8"}
					           text={"Микрофлора кишечника"}
					           textPosition={'left'}
					           align={'right'}
					           width={width}
					           wrapSize={wrapSize}/>
					<GraphNode position={{top: '0px', left: '350px'}}
					           img={betta}
					           capture={1}
					           text={"\u03B2-клетки"}
					           textPosition={'top'}
					           width={'35px'}
					           wrapSize={'100px'}
								nowrap={true}/>
					<GraphNode position={{top: '100px', left: '600px'}}
					           img={brain}
					           capture={"7"}
					           text={"Головной мозг"}
					           textPosition={'right'}
					           align={'left'}
					           width={width}
					           wrapSize={wrapSize}
					           nowrap={true}/>
					
					
					<div className="aside">
						<h3>Инсулинорезистентность</h3>
						<GraphNode position={{top: '40px', left: '0px'}}
						           img={capa}
						           capture={"6"}
						           text={"Печень"}
						           textPosition={'right'}
						           align={'left'}
						           width={width}
						           wrapSize={wrapSize}
						           nowrap={true}/>
						<GraphNode position={{top: '120px', left: '0px'}}
						           img={muscle}
						           capture={"5"}
						           text={"Мышцы"}
						           textPosition={'right'}
						           align={'left'}
						           width={width}
						           wrapSize={wrapSize}
						           nowrap={true}/>
						<GraphNode position={{top: '200px', left: '0px'}}
						           img={lipid}
						           capture={"4"}
						           text={"Жировые клетки"}
						           textPosition={'right'}
						           align={'left'}
						           width={width}
						           wrapSize={wrapSize}
						           nowrap={true}/>
					</div>
					<GraphBlock position={{top: '300px', left: '200px'}}
					            width={'400px'}
					            height={'150px'}
					            text={"Гипергликемия"}
								borders={false}/>
					<GraphBlock position={{top: '250px', left: '130px'}}
					            width={'100px'}
					            height={'100px'}
					            text={"амилин"}
					            borders={false}
								fontSize={'13pt'}/>
					<GraphBlock position={{top: '230px', left: '270px'}}
					            width={'100px'}
					            height={'70px'}
					            header={'2'}
					            text={"Инкретинового эффекта"}
					            align={'right'}
					            borders={false}
					            fontSize={'15pt'}/>
					<GraphBlock position={{top: '230px', left: '420px'}}
					            width={'150px'}
					            height={'70px'}
					            header={'3'}
					            text={"Дефект \u03B1-клеток"}
					            align={'left'}
					            borders={false}
					            fontSize={'15pt'}/>
					<GraphBlock position={{top: '300px', left: '400px'}}
					            width={'150px'}
					            height={'70px'}
					            header={''}
					            text={"глюкагон"}
					            align={'left'}
					            borders={false}
					            fontSize={'13pt'}/>
					            
					<GraphArrow position={{top: '30px', left: '215px'}}
					            size={'170px'}
					            width={3}
					            rot={-15}/>
					<GraphArrow position={{top: '70px', left: '185px'}}
					            size={'170px'}
					            width={3}
					            rot={165}/>
					
					<GraphArrow position={{top: '70px', left: '195px'}}
					            size={'200px'}
					            width={3}
					            rot={-35}/>
					<GraphArrow position={{top: '120px', left: '175px'}}
					            size={'200px'}
					            width={3}
					            rot={145}/>
					
					<GraphArrow position={{top: '130px', left: '140px'}}
					            size={'260px'}
					            width={2}
					            rot={140}/>
					
					<GraphArrow position={{top: '295px', left: '135px'}}
					            size={'20px'}
					            width={15}
					            rot={83}/>
					            
					<GraphArrow position={{top: '315px', left: '160px'}}
					            size={'30px'}
					            width={14}
					            rot={83}/>
					            
					<GraphArrow position={{top: '190px', left: '307px'}}
					            size={'220px'}
					            width={2}
					            rot={83}/>
					
					<GraphArrow position={{top: '190px', left: '350px'}}
					            size={'80px'}
					            width={5}
					            rot={83}/>
					            
					<GraphArrow position={{top: '190px', left: '390px'}}
					            size={'80px'}
					            width={5}
					            rot={83}/>
					
					<GraphArrow position={{top: '310px', left: '360px'}}
					            size={'55px'}
					            width={7}
					            rot={83}/>
					
					<GraphArrow position={{top: '310px', left: '420px'}}
					            size={'20px'}
					            width={20}
					            rot={83}/>
					<GraphArrow position={{top: '335px', left: '423px'}}
					            size={'10px'}
					            width={30}
					            rot={-97}/>
					<GraphArrow position={{top: '350px', left: '420px'}}
					            size={'20px'}
					            width={20}
					            rot={83}/>
					
					<GraphArrow position={{top: '395px', left: '380px'}}
					            size={'30px'}
					            width={10}
					            rot={-97}/>
					<GraphArrow position={{top: '395px', left: '400px'}}
					            size={'30px'}
					            width={10}
					            rot={83}/>
					
					<GraphArrow position={{top: '30px', left: '465px'}}
					            size={'180px'}
					            width={3}
					            rot={0}/>
					<GraphArrow position={{top: '60px', left: '425px'}}
					            size={'180px'}
					            width={3}
					            rot={180}/>
					
					<GraphArrow position={{top: '120px', left: '455px'}}
					            size={'220px'}
					            width={3}
					            rot={30}/>
					<GraphArrow position={{top: '100px', left: '405px'}}
					            size={'220px'}
					            width={3}
					            rot={210}/>
					
					<GraphArrow position={{top: '190px', left: '690px'}}
					            size={'60px'}
					            width={5}
					            rot={83}/>
					<GraphArrow position={{top: '183px', left: '695px'}}
					            size={'60px'}
					            width={5}
					            rot={-97}/>
					
					<GraphArrow position={{top: '270px', left: '200px'}}
					            size={'140px'}
					            width={3}
					            rot={25}/>
					<GraphArrow position={{top: '320px', left: '210px'}}
					            size={'110px'}
					            width={4}
					            rot={-7}/>
				</div>
			</div>
		</div>
	)
};

export default ThirdSlide