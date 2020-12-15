$('#enrichNavContainer').append(
	`<div class="container-fluid enrich-top-bar">
			<div class='logo'>
				<img class="enrich-logo" src="img/enrich-v.png" />
			</div>
			<div class="header-right">
				<img src="img/wa.png" width="40" height="40"/>
				<a href="https://api.whatsapp.com/send?phone=917776017181" target="_blank" class="hr-btn" style="margin-right: 10px;">+91 7776-017-181 </a>
				<a href="#" class="hr-btn"><i class="flaticon-029-telephone-1"></i>	</a>
				<a href="#" class="hr-btn" style="margin-right: 10px;">+91 9028-530-476</a>
				<a href="#" class="hr-btn"><i class="flaticon-013-mail"></i>enrichags@gmail.com </a>
			</div>
		</div>

		<nav class="navbar navbar-expand-md bg-dark navbar-dark enrich-navigation">
			<!--<a class="navbar-brand" href="#">EnrichAGS</a> -->
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="collapsibleNavbar">
				<ul class="navbar-nav main-menu">
					<li id="index" class="nav-item"><a href="index.html">Home</a></li>
					<li id="product" class="nav-item"><a href="product.html">Products</a>
						<ul class="sub-menu">	
							<li data-index='0' onclick="display(event)"><a href="product.html?0">Endowment</a></li>
							<li data-index='1' onclick="display(event)"><a href="product.html?1">Children</a></li>
							<li data-index='2' onclick="display(event)"><a href="product.html?2">Moneyback</a></li>	
							<li data-index='3' onclick="display(event)"><a href="product.html?3">Term Assurance</a></li>
							<li data-index='4' onclick="display(event)"><a href="product.html?4">Health</a></li>
							<li data-index='5' onclick="display(event)"><a href="product.html?5">Pension</a></li>
							<li data-index='6' onclick="display(event)"><a href="product.html?6">Whole Life</a></li>
						</ul>
					</li>
					<li id="service" class="nav-item"><a href="service.html">Services</a>
					<!-- <li id="profile" class="nav-item"><a href="profile.html">LIC Profile</a></li> -->
					<li id="gallery" class="nav-item"><a href="gallery.html">Gallery</a></li>
					<li id="about-us" class="nav-item"><a href="about-us.html">About Us</a></li>
					<li id="contact" class="nav-item"><a href="contact.html">Contact Us</a></li>
				</ul>
			</div>
		</nav>
    `
);

function settab() {
	let tab = location.pathname.split('.html')[0];
	if (tab) {
		tab = tab.replace('/', '')
		$(`#${tab}>a`).addClass('active-tab');
	}
}

settab();