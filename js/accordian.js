function success(data) {
  data.forEach(function (item, index) {
    const title = `<div class="card enrich-card">
	<div class="card-header enrich-card-color" id="headingOne">
	   
		<button class="btn btn-link enrich-btn-case" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
		${Object.keys(item)[0].split('_').join('  ')}
		<i class="fa fa-angle-down icon-1"></i>
		<i class="fa fa-angle-up icon-2"></i>
		</button>
	  
	</div>
	
	<div id="collapse${index}" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
	<div class="card-body enrich-scroll">
	`;

    let plans = ``;
    item[Object.keys(item)[0]].forEach((plan) => {
      let sbtitle = '';
      plan.subtitles.forEach((sbtit) => {
        sbtitle = sbtitle + `<li>${sbtit}</li>`;
      });

      plans =
        plans +
        `<div class="row">
			<div class="col-sm-4 text-center">
				<img src="${plan.image}" class="img-thumbnail product-image" alt="plan914">
			</div>
			<div class="col-sm-8">
				<h5>${plan.title}</h5>
				<ul class="enrich-product-list">
					${sbtitle}
				</ul>
				<div class="enrich-btn">
				    <a href="${plan.formLink}" target="_blank"><button type="button" class="btn enrich-btn-primary">Get Form</button></a>
					<a href="${plan.pdfLink}" target="_blank"><button type="button" class="btn enrich-btn-primary">See Details</button></a>
				</div>
			</div>
		</div> <div class="enrich-seperator"></div>`;
    });

    const footer = `</div></div></div>`;

    $('#accordion').append(title + plans + footer);
  });
}

success(products);

function display(event) {
  event.preventDefault();
  $(`[data-target="#collapse${event.currentTarget.dataset.index}"]`)[0].click();
}

const path = location.search;
if (path) {
  const tab = path.replace('?', '');
  $(`[data-target="#collapse${tab}"]`)[0].click();
} else {
  $(`[data-target="#collapse0"]`)[0].click();
}
