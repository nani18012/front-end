class JumboTron extends HTMLElement {
	connectedCallback(){
		this.render();
	}

	render(){
		this.innerHTML = `
			<h1>SPORT LIST</h1>
			<p>Kelas Belajar Front End Web Development</p>`;
	}
}

customElements.define("jumbo-tron", JumboTron);