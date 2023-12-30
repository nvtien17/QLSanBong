import React from "react";
import './Trademark.css';

import ListTradeMark from "../../App/img/trademark/listTrademark";
function Trademark() {
	return (
		<div className="trademark">
			<div className="grid wide">
				<div className="title-section">
					<a className="title-section-link" href="#">
						<h2 className="heading-section main-effect">Thương hiệu</h2>
					</a>
				</div>
				<ul className="tradermark__list">

					{ListTradeMark.map((item, index) => (
						<li key={index} className="tradermark__item">
							<a className="tradermark__item-link" href="">
								<img className="tradermark__item-logo" src={item.src} alt="" />
							</a>
						</li>
					))}


				</ul>
			</div>
		</div>

	)
}
export default Trademark;