import "./PublicationsPage.css"
import React, { Component } from 'react'
import Footer from "../homePage/Footer";
import { useState } from 'https://esm.sh/react@18.2.0';

// Accordion container
const Accordion = (props) => {
	return (
    <div className="accordion">
      {props.drawer.map((drawer) =>
        <Drawer title={drawer.title} content={drawer.content}/>
      )}
    </div>
	);
}

// Accordion drawer
const Drawer = (props) => {
	const {title, content} = props;
	const [isOpen, setOpen] = useState(false);
	
	const toggleDrawer = (e) => {
		let content = e.target.closest('.accordion__drawer').querySelector('.accordion__content');
		let contentInner = content.querySelector('.accordion__content-inner');
		setOpen(!isOpen);
		isOpen ? content.style.height = 0 : content.style.height = contentInner.offsetHeight + 'px';
	}
	
 	return (
		<div className={`accordion__drawer ${isOpen ? 'accordion__drawer--open' : '' }`}>
			<div className="accordion__header" onClick={(e) => toggleDrawer(e)}>
				<h3 className="accordion__title">{title}</h3>
				<button className="accordion__toggle">{isOpen ? '-' : '+'}</button>
			</div>
			<div className="accordion__content">
				<div className="accordion__content-inner">
					{content}
				</div>
			</div>
		</div>	
    )
}

// Drawer data
const Drawers = [
	{
		title: "First Law",
		content:
		"A robot may not injure a human being or, through inaction, allow a human being to come to harm."
	},
	{
		title: "Second Law",
		content:
		"A robot must obey the orders given it by human beings except where such orders would conflict with the First Law."
	},
	{
		title: "Third Law",
		content:
		"A robot must protect its own existence as long as such protection does not conflict with the First or Second Law."
	}
];

export default class PublicationsPage extends Component {
  render() {
    return (
      <div>
        <main>
          <h1 className="place-holder-nav-bar">Welcome to Research lab IITH</h1>
          <center><h3 className="mb-3 mt-5">Publications</h3></center>
          <Accordion drawers={Drawers} />
        </main>
        <Footer />
      </div>
    )
  }
}