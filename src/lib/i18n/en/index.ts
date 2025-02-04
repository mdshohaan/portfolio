import type { BaseTranslation } from '../i18n-types';
import { calculateAge } from '../utils';

const productName = 'Irfanul Islam';
const slogan =
	'Build your dream product faster with industry-standard tools and best practices';
const title = `${slogan} | ${productName}`;
const description = `${productName}  is a full-stack developer and a tech enthusiast currently working as frontend lead @secureship inc. He loves to build products that help people to solve their problems. He is also a big fan of open-source and loves to contribute to open-source projects. So if you want to build your dream product faster with industry-standard tools and best practices then you are in the right place.`;

const common = {
	etc: 'etc',
	andManyMore: 'and many more...',
	slogan,
	show: 'Show',
	hide: 'Hide',
	toggleNavigationMenu: 'Toggle navigation menu'
};

const profile = {
	fullName: 'Irfanul Islam',
	email: 'irfanulislamdu@gmail.com',
	designation: 'Full-stack developer @shamscorner',
	upworkLink: 'https://www.upwork.com/freelancers/~017677c090f8fd7a34',
	facebookLink: 'https://www.facebook.com/Mdshohaan',
	xLink: 'https://x.com/IslamIrfan20544',
	linkedinLink: 'https://www.linkedin.com/in/mohammadirfanulislam/',
	githubLink: 'https://github.com/mdshohaan'
};

const en: BaseTranslation = {
	appName: productName,
	title,
	description,
	keywords: `Full-stack developer, Web development, Frontend development, Backend development, JavaScript, HTML, CSS, Responsive design, User interface (UI), User experience (UX), Database design, Server-side scripting, API integration, Software architecture, Code optimization, Version control (e.g., Git), Agile development, Problem-solving, Project management, Client collaboration, ${productName}`,
	appTwitterAccount: '@shamscorner',

	common,
	profile,

	appLogo: {
		hrefTitle: description,
		alt: `${productName} Logo`
	},

	schemaMarkup: {
		type: 'Corporation',
		name: 'Irfanul Islam',
		markupDescription: description,
		founder: [
			{
				type: 'Person',
				name: 'Irfanul Islam'
			}
		],
		foundingDate: '2025-07-04',
		contactPoint: [
			{
				type: 'ContactPoint',
				email: 'irfanulislamdu@gmail.com',
				telephone: '',
				contactType: 'customer service'
			}
		]
	},

	errorPage: {
		title: '404',
		subtitle: 'Not found',
		pageTitle: '404',
		description: 'Looking for help? Reach out to me at mail@shamscorner.com',
		keywords: 'Support, Contact, Help, 404, Not found'
	},

	navbar: {
		items: [
			{ name: 'Experience', link: '#section-experience' },
			{ name: 'Works I Do', link: '#section-works-i-do' },
			{ name: 'Projects', link: '#section-project-showcase' },
			{ name: 'Feedbacks', link: '#section-what-others-saying' },
			{ name: 'FAQs', link: '#section-faqs' },
			{ name: "Let's Talk", link: '#section-lets-get-started' }
		]
	},

	footer: {
		copyrights: '© All rights reserved 2019',
		remarks:
			'Designed and build by myself with <a href="https://nuxtjs.org/" target="_blank" rel="noopener" class="underline">SvelteKit</a> and <a href="https://tailwindcss.com/" target="_blank" rel="noopener" class="underline">Tailwind CSS</a>. Deployed at <a href="https://www.netlify.com/" target="_blank" rel="noopener" class="underline">Vercel</a>'
	},

	onboarding: {
		greeting: 'Hi, I\'m <span class="font-semibold">Irfanul Islam</span>',
		title:
			'A Passionate Full-stack Web & Mobile Application Developer with Machine Learning Experience',
		subtitle:
			'Feel free to contact me with any queries you have. We can discuss how we can work together to meet your Business Needs.',
		callToAction: {
			contactMe: 'Contact Me',
			downloadCv: 'Download CV',
			downloadCvTitle: 'Download my CV if you prefer to read it later'
		},
		quickStatistics: {
			stats: [
				{
					title:
						'Bachelor of Arts (BA)<br> University Of Dhaka<br> 2016 - 2022',
					value: ''
				},
				{
					title: 'Job Experience',
					value: '1 year'
				},
				{
					title: 'Total Jobs',
					value: '1'
				},
				{
					title: 'IELTS Score',
					value: '7.0'
				},
				// {
				// 	title: 'Job Success Score<br>on Upwork',
				// 	value: '100%'
				// },
				{
					title:
						'Helped <span class="text-4xl font-bold mx-1">1</span> startups to reality',
					value: ''
				}
			],
			marketplaces: [
				{
					title: 'Check out my Upwork profile',
					link: profile.upworkLink
				}
			],
			socialLinks: [
				{
					title: 'My Facebook account',
					icon: 'facebook',
					link: profile.facebookLink
				},
				{
					title: 'My X account',
					icon: 'x',
					link: profile.xLink
				},
				{
					title: 'My Linkedin account',
					icon: 'linkedin',
					link: profile.linkedinLink
				}
			]
		},
		techStack: {
			title: 'My Tech Stack',
			technologies: [
				{
					title: 'Frontend',
					items: [
						'SvelteKit',
						'ReactJS',
						'NextJS',
						'Astro',
						'TailwindCSS',
						'Vuetify',
						'shadcn-ui',
						'Typescript',
						'Material Design',
						'Vite',
						'DaisyUI',
						'SSR',
						'SSG',
						'SPA',
						'PWA'
					]
				},
				{
					title: 'Backend',
					items: [
						'Express',

						'Firebase',
						'Supabase',
						'Convex',

						'PostgreSQL',
						'MongoDB'
					]
				},
				{
					title: 'Others',
					items: [
						'Electron',
						'Flutter',
						'Python',
						'Tensorflow',
						'Scikit Learn',
						'Data mining',
						'Machine learning',
						'Docker',
						'Github Automation',
						'AWS',
						'Azure',
						'GCP',
						'CI/CD',
						'Kubernetes'
					]
				}
			],
			githubProfile: {
				title: 'Visit my Github profile',
				link: profile.githubLink
			}
		}
	},

	areYouInterested: {
		title: 'Are you interested?',
		callToAction: {
			letsTalk: "Let's Talk"
		}
	},

	meAtAGlance: {
		title: '-- Me at a glance --',
		profilePicture: {
			alt: 'Yep! This is me. A raw version of me sitting on a coffee shop. One of my friend took this photo.'
		},
		infoItems: [
			'Tech Enthusiast',
			'I can speak Bengali, Hindi, Urdu,Arabic,English',
			'University Carrom Champion',
			'I like playing Cricket, Football, Badminton, and Table Tennis',
			'I love AI & Data Mining',
			'I am versatile on working schedule',
			'Currently learning advanced Data Structures & Algorithms',
			`${calculateAge('1998-07-05')} years old :)`
		]
	},

	pastWorkingExperiences: {
		title: 'My Past Working Experiences',
		description:
			'I began freelancing while I was still in university, and I worked on some exciting projects. I will list my main jobs in the order they happened.',
		experiences: [
			{
				year: '2025',
				company: 'shamscorner',
				role: 'Full-stack  Developer',
				timeline: '01 JANUARY - PRESENT'
			},
			{
				year: '2025',
				company: 'Code Alpa',
				role: 'Front-end Developer',
				timeline: '28 JANUARY - PRESENT'
			}
		]
	},

	whatWorkIDo: {
		title: 'What kind of works that I do?',
		description:
			'Here are some services that I usually offer. But feel free to contact with me if you need something else.',
		services: [
			{
				title: 'Content Management System (CMS)',
				description:
					'I offer custom CMS tools making content management easy. With my CMS, you can focus on your core business while I handle the technical side, ensuring your online presence remains engaging.',
				image: 'cms'
			},
			{
				title: 'Software as a Service (SaaS) Development',
				description:
					'I offer custom SaaS solutions designed specific to your business. With my SaaS, you can focus on your sales, and delegate the management work to the tools.',
				image: 'sass'
			},
			{
				title: 'Dashboard or Web Portals Development',
				description:
					"Let's create a dynamic and informative hub for your business needs. These tools provide live data updates and a user-friendly interface, helping you make informed decisions, predictions, and access crucial information effortlessly.",
				image: 'dashboard'
			},
			{
				title: 'E-commerce Application Development',
				description:
					'I provide custom E-commerce solutions tailored to your specific needs. These solutions offer a user-friendly platform for managing your online store, enabling you to concentrate on your business while my tools handle the technical aspects.',
				image: 'ecommerce'
			},
			{
				title: 'Landing Page Design & Development',
				description:
					'Let me help you make a strong first impression online with a stunning landing page that captures attention and drive action, making it easy for your audience to engage with your content and offerings.',
				image: 'landing'
			},
			{
				title: 'Content Sharing Blog Sites Development',
				description:
					"Let's create an engaging platform for your ideas and stories to shine online. My websites are designed to make it easy for you to publish and share your content with your audience.",
				image: 'blog'
			},
			{
				title: 'Single Page Application (SPA) Development',
				description:
					"Let's build a modern, user-friendly application for your specific needs that provide a seamless and responsive user experience. They load quickly and smoothly, delivering a snappy and efficient web interaction. ",
				image: 'spa'
			},
			{
				title: 'Progressive Web Application (PWA) Development',
				description:
					"If your business needs a reliable and user-friendly PWA to enhance your online presence. PWAs offer a seamless and engaging user experience across various devices, just like native apps, but they're accessible through web browsers.",
				image: 'pwa'
			},
			{
				title: 'Scalable & Reliable API Development ',
				description:
					"I provide scalable and reliable API development, offering both RESTful and GraphQL solutions. Let's build the foundation for seamless data interaction in your systems to support all your customer’s needs.",
				image: 'api'
			},
			{
				title: 'Social Media Applications Development',
				description:
					'If you want to create a vibrant and interactive digital space for your brand, I can help building the required infrastructures & platforms to engage with your customers effectively.',
				image: 'social'
			},
			{
				title: 'Chatbot or Messaging Integrations',
				description:
					"Let's integrate these tools to streamline and enhance your user engagement. Since AI can automate many solutions, why not incorporate it into your business applications? Let's work together to make that happen.",
				image: 'chatbot'
			},
			{
				title: 'Mobile Applications Development',
				description:
					"My expertise lies in creating user-friendly and feature-rich mobile apps that cater to your specific needs. Let's build an app that brings your vision to life and engages your audience on their mobile devices.",
				image: 'mobile'
			}
		]
	},

	letsGetStarted: {
		title: "Let's get started",
		description:
			'Why not start with a simple email first? From there we can decide how we can continue our conversation moving forward.',
		form: {
			email: 'Email',
			emailPlaceholder: 'Your e-mail address',
			submit: 'Get Started',
			fullName: 'Full name',
			message: 'Message',
			messagePlaceholder: 'Your message here...',
			send: 'Send',
			successMessage: 'Email sent successfully!'
		}
	},

	whatOthersSaying: {
		title: 'What people are saying about me?',
		description:
			"I am an experienced and expert developer who you will love working with. But don't just take my word for it. See what some of my clients have to say.",
		feedbacks: [
			{
				client: {
					fullName: 'Julian Albert',
					position: 'DPhil Candidate at Oxford Institute'
				},
				comment:
					'Thank you for your support, Shamim! The process was flawless from start to end. He has great communication skills and a thoughtful approach to freelancing. Highly recommended!',
				class: 'md:row-span-4'
			},
			{
				client: {
					fullName: 'Jack Sharkey',
					position: 'Upwork client, Frosted IT'
				},
				comment:
					'Shamim did a wonderful job and did it very quickly. He made our website look beautiful and elegant. Would highly recommend.',
				class: 'md:row-start-2 md:col-start-4 md:row-span-4'
			},
			{
				client: {
					fullName: 'Sean Wright',
					position: 'Upwork client, Hyped Marketing'
				},
				comment:
					"Shamim is an amazing developer and a real gem. He's talented, smart and has unmatched work ethic. I highly recommend working with him.",
				class: 'md:row-start-5 md:col-start-1 md:row-span-4'
			},
			{
				client: {
					fullName: 'Landon Cope',
					position: 'Senior Software developer at Pattern.inc'
				},
				comment:
					'Shamim was great to work with, would recommend for Vue.js and Laravel. Thank you.',
				class: 'md:row-start-4 md:col-start-2 md:row-span-4'
			},
			{
				client: {
					fullName: 'Jack Sharkey',
					position: 'Upwork client, Frosted IT'
				},
				comment: 'Shamim is a beast! Highly recommend.',
				class: 'md:row-start-5 md:col-start-3 md:row-span-4'
			},
			{
				client: {
					fullName: 'Brandon Barclay',
					position: 'Upwork client, Pattern.inc'
				},
				comment: 'Putting on a different contract. Great developer.',
				class: 'md:row-start-6 md:col-start-4 md:row-span-4'
			}
		],
		seeMore: 'Check out more if you want'
	},

	thingsIWantToLearn: {
		title: 'Things I want to learn',
		description:
			'I have been fortunate enough to learn many things throughout my career, but I still have a long way to go. This is a list of some of the technologies that I would love to learn.',
		technologies: [
			{ name: 'ML5', done: 'false' },
			{ name: 'ThreeJS', done: 'false' },
			{ name: 'Tensorflow.js', done: 'false' },
			{ name: 'Drizzle ORM', done: 'false' },
			{ name: 'Miko ORM', done: 'false' },
			{ name: 'Automation', done: 'true' },
			{ name: 'Web Scrapping', done: 'true' },
			{ name: 'Algorithms', done: 'true' },
			{ name: 'Data Structures', done: 'true' },
			{ name: 'SvelteKit', done: 'true' },
			{ name: 'Vue', done: 'true' },
			{ name: 'Nuxt', done: 'true' },
			{ name: 'Astro', done: 'true' },
			{ name: 'React', done: 'true' },
			{ name: 'NextJS', done: 'true' },
			{ name: 'TailwindCSS', done: 'true' },
			{ name: 'Vuetify', done: 'true' },
			{ name: 'Shadcn UI', done: 'true' },
			{ name: 'Typescript', done: 'true' },
			{ name: 'Material Design', done: 'true' },
			{ name: 'Vite', done: 'true' },
			{ name: 'Websocket', done: 'true' },
			{ name: 'SSR', done: 'true' },
			{ name: 'SSG', done: 'true' },
			{ name: 'SPA', done: 'true' },
			{ name: 'PWA', done: 'true' },
			{ name: 'NestJS', done: 'true' },
			{ name: 'Express', done: 'true' },
			{ name: 'Fastify', done: 'true' },
			{ name: 'Firebase', done: 'true' },
			{ name: 'Supabase', done: 'true' },
			{ name: 'Appwrite', done: 'true' },
			{ name: 'DGraph', done: 'true' },
			{ name: 'Prisma', done: 'true' },
			{ name: 'Graphbase', done: 'true' },
			{ name: 'GraphQL', done: 'true' },
			{ name: 'MySQL', done: 'true' },
			{ name: 'SQLite', done: 'true' },
			{ name: 'PostgreSQL', done: 'true' },
			{ name: 'MongoDB', done: 'true' },
			{ name: 'Redis', done: 'true' },
			{ name: 'TypeORM', done: 'true' },
			{ name: 'Microservices', done: 'true' },
			{ name: 'MonoRepo', done: 'true' },
			{ name: 'TurboRepo', done: 'true' },
			{ name: 'Electron', done: 'true' },
			{ name: 'Flutter', done: 'true' },
			{ name: 'Python', done: 'true' },
			{ name: 'Scikit Learn', done: 'true' },
			{ name: 'Data mining', done: 'true' },
			{ name: 'Machine learning', done: 'true' },
			{ name: 'Docker', done: 'true' },
			{ name: 'AWS', done: 'true' },
			{ name: 'Azure', done: 'true' },
			{ name: 'GCP', done: 'true' },
			{ name: 'CI/CD', done: 'true' },
			{ name: 'Kubernetes', done: 'true' },
			{ name: 'Java', done: 'true' },
			{ name: 'Dart', done: 'true' },
			{ name: 'PHP', done: 'true' },
			{ name: 'C', done: 'true' },
			{ name: 'C++', done: 'true' }
		]
	},

	faqs: {
		title: 'Frequently Asked Questions',
		description:
			'Here are some frequently asked questions. If you have any other questions, feel free to contact me.',
		questions: [
			{
				question: 'Where can I see your professional work?',
				answer:
					'Thank you for asking! For full transparency, I am unable to show my best work publicly because they are locked behind non-disclosure agreements. If you contact me however, I will be able to share them with you in private during the call. <br><br> If that is not enough for you, I am happy to report that this entire website that you are in, is designed, crafted and fully built by me using Nuxt and Tailwind CSS (JamStack Hosted), and thus can be considered as part of my professional work. I hope that it is satisfactory to your liking 😊'
			},
			{
				question: 'How much does it cost to get started?',
				answer:
					'It will depend upon the scope and requirements of the project. For reference, past projects have ranged between $30 - $40 (hourly, 40+ per week). <br><br> On the call, we will seek to identify specifics and objectives that can affect the cost. These are things like what type of project, which tech stack to choose, timeline, complexity, frontend/backend/fullstack, etc. All these will contribute to the cost and will vary from project to project.'
			},
			{
				question: 'How long will the work take from start to finish?',
				answer:
					'It will depend on the scope of the project. <br><br> <ul class="list-disc ml-5"><li>If it is a frontend application, it will take less time.</li><li>If it involves complexity with backend stack, it will take slightly longer than before.</li><li>For fullstack applications with both frontend, backend, database, etc, will take longer time. A previous project of mine took almost 1200+ (6+ months) hours to complete including deploying to production server.</li><li>For mobile applications, if it requires an API to develop, then the time will be as equal as the previous one.</li></ul>'
			},
			{
				question:
					'Do you offer any deployment services like Docker, Kubernetes, AWS/GCP/Azure, Heroku, VPS, Static/Shared Hosting, etc?',
				answer:
					'Yes, I do. If you need any of these services, I can do that for you after finishing the development and testing phase.'
			},
			{
				question:
					'Do you offer any maintenance services in the future after the project has been finished?',
				answer:
					'Yes, I do if it is a major breakdown. However, I may charge additional fees according to your requirements and maintenance workload.'
			},
			{
				question: 'Can you help me to grow my own startup?',
				answer:
					'Yes, of course I can. I have already worked with some startups, building their ideas into reality. I also worked as a project manager in my previous company that I worked with. From building a Minimum Viable Product (MVP) to launch and growth, I can help you in each step.'
			},
			{
				question: 'Do you have any agency or team to work with you?',
				answer:
					"Yes, I have a team of 5 members who are experts in their own field. We're working together for the last 3 years. Moreover, we are planning to expand our team with an agency in the near future."
			}
		]
	},

	projectShowcase: {
		title: 'Projects that I worked on or working',
		description:
			'I have designed, developed, and delivered projects for many clients, both large and small. Here are some worth to mention.',
		projects: [
			{
				title: 'Splashr Client SaaS',
				type: 'Client Job',
				company: 'Splashr',
				completed: 'June 2021',
				description:
					'<p>Splashr is an advertising company from Franch. I created their SaaS application where they can manage their assets with their clients, more like a customer-manager web application.</p><p>They make short ads for social media platforms like Tiktok, Instagram, Facebook, Youtube, etc. I had a great time working with their domain experts to tackle various problems including video data stream & management. Also, worked with different APIs like Frame.io, Google Sheet, docs, slides, etc.</p><p>This was one of a kind project where I get a vast knowledge about complex software development & architecture. It was a huge boost on my career at that time.</p>',
				banners: [
					{ banner: 'SplashrMain', class: '' },
					{ banner: 'Splashr1', class: '-top-10 left-0 -rotate-12' },
					{ banner: 'Splashr2', class: 'top-10 left-40 -rotate-12' },
					{ banner: 'Splashr3', class: 'top-40 left-40 rotate-3' },
					{ banner: 'Splashr4', class: '-bottom-20 left-28 rotate-6' },
					{ banner: 'Splashr5', class: '-bottom-28 -left-5 rotate-12' }
				]
			},
			{
				title: 'Sales Report Builder',
				type: 'Remote Job',
				company: 'Pattern.Inc',
				completed: 'December 2019',
				description:
					"<p>This is a report builder project for Amazon, Walmart, Shopify, Target.com, etc. We developed some scrappers for these sites and collected a large number of data. Then we use those data to generate more than 100 types of reports both in Google Slide and PDF format. In the report builder, there are many tools that users can use to create their reports according to their preferences. They can share those reports with the sales team or any business personnel through Emails since all the reports are stored in the Amazon S3 bucket</p><p>There are a lot of features that I can't explain because of some permission issue but I hope you get the basic overview from here.</p><a href='https://youtu.be/kwAnOKU5vyg' target='_blank' rel='noopener' class='underline'>Video Demo</a>",
				banners: [
					{ banner: 'ReportBuilderMain', class: '' },
					{ banner: 'ReportBuilder1', class: '-top-20 right-16 rotate-12' },
					{ banner: 'ReportBuilder2', class: 'top-0 right-40 rotate-6' },
					{ banner: 'ReportBuilder3', class: 'top-20 right-56 -rotate-3' },
					{ banner: 'ReportBuilder4', class: 'top-48 right-40 -rotate-6' },
					{ banner: 'ReportBuilder5', class: '-bottom-28 right-20 -rotate-6' }
				]
			}
		]
	},

	feedbackPage: {
		title: 'What people are saying about me?',
		description:
			"I am an experienced and expert developer who you will love working with. But don't just take my word for it. See what some of my clients have to say.",
		keywords: ''
	},

	errors: {
		somethingWentWrong: 'Something went wrong'
	}
};

export default en;
