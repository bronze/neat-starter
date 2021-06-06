// https://github.com/theNewDynamic/thenewdynamic.com/blob/7af5d4fa303c5b945935207541806d48ec81e5ed/layouts/article/single.html
const pageHeading = document.querySelectorAll("#pageheading");

let observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		// The target is the div AFTER the heading.
		const target = entry.target.nextElementSibling;
		if (entry.intersectionRatio > 0) {
			target.classList.add("opacity-0");
		} else {
			target.classList.remove("opacity-0");
		}
	});
});

pageHeading.forEach((heading) => {
	observer.observe(heading);
});
