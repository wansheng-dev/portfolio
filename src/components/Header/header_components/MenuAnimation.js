import gsap from 'gsap';

// gsap animation helper functions

// Open menu animation
export const staggerReveal = (node1, node2) => {
	gsap.from([node1, node2], {
		duration: 0.8,
		height: 0,
		transformOrigin: 'right top',
		skewY: 2,
		ease: 'power3.inOut',
		stagger: {
			amount: 0.1,
		},
	});
};

// Close menu animation
export const staggerRevealClose = (node1, node2) => {
	gsap.to([node1, node2], {
		duration: 0.8,
		height: 0,
		ease: 'power3.inOut',
		stagger: {
			amount: 0.07,
		},
	});
};

// Navigation stagger animation
export const staggerText = (node1, node2, node3) => {
	gsap.from([node1, node2, node3], {
		duration: 0.8,
		y: 100,
		delay: 0.1,
		ease: 'power3.inOut',
		stagger: {
			amount: 0.3,
		},
	});
};

// intro fade up animation
export const fadeInUp = (node) => {
	gsap.from(node, {
		y: 60,
		duration: 1,
		delay: 0.2,
		opacity: 0,
		ease: 'power3.inOut',
	});
};

// Navigation hover in animation
export const navHoverIn = (e) => {
	gsap.to(e.target, {
		duration: 0.3,
		y: 3,
		skewX: 4,
		ease: 'power1.inOut',
	});
};

// Navagation hover off animation
export const navHoverOff = (e) => {
	gsap.to(e.target, {
		duration: 0.3,
		y: -3,
		skewX: 0,
		ease: 'power1.inOut',
	});
};