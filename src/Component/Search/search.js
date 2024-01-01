import imgSearch from "../../App/img/cauthu.jpg"
function Search() {
	return (
		<div className="subnav">
			<img class="img_soccer-logo" src={imgSearch} alt=""></img>
			<div className="search-main">
				<input className="search_input" type="text" placeholder="Tìm kiếm trên Thế giới bóng đá Nguyên Xá ...." />
				<div className="icon_search">
					<i className="fas fa-search"></i>
				</div>
			</div>
		</div>
	)
}
export default Search