var progress = [ 
	{
        "name": "Completing a course: <a href='https://www.pluralsight.com/courses/understanding-machine-learning' target='_blank'>Understanding Machine Learning</a>",
        "currentValue": 0,
        "currentText": "",
		"lastWeeksProgress": 0,
        "weeklyProgress": 100
    },
	{
        "name": "Reading a book: <a href='http://shop.oreilly.com/product/0636920132448.do' target='_blank'>The Site Reliability Workbook</a>",
        "currentValue": ((125-0)/508)*100,
        "currentText": "",
		"lastWeeksProgress": 0,
        "weeklyProgress": 0
    },
	{
        "name": "Completing a course: <a href='https://www.udacity.com/course/human-computer-interaction--ud400' target='_blank'>Human-Computer Interaction</a>",
        "currentValue": 75,
        "currentText": "",
		"lastWeeksProgress": 79-75,
        "weeklyProgress": 0
    },
	{
        "name": "Reading a book: <a href='http://shop.oreilly.com/product/0636920039297.do' target='_blank'>Infrastructure as Code</a>",
        "currentValue": ((211-0)/362)*100,
        "currentText": "",
		"lastWeeksProgress": ((270-211)/362)*100,
        "weeklyProgress": ((288-270)/362)*100
    },
	{
        "name": "Reading a book: <a href='https://mitpress.mit.edu/books/algorithms-unlocked' target='_blank'>Algorithms Unlocked</a>",
        "currentValue": ((133-0)/237)*100,
        "currentText": "",
		"lastWeeksProgress": 0,
        "weeklyProgress": 0
    },
	{
        "name": "Completing a language course: <a href='http://www.pimsleur.com/learn-french' target='_blank'>Pimsleur French (part 2)</a>",
        "currentValue": 69,
        "currentText": "",
		"lastWeeksProgress": 0,
        "weeklyProgress": 0
    }
]

/*
	{
        "name": "Reading a book: <a href='http://www.stroustrup.com/4th.html' target='_blank'>The C++ Programming Language (4th Edition)</a>",
        "currentValue": (114/1366)*100,
        "currentText": "",
		"lastWeeksProgress": 0,
        "weeklyProgress": 0
    },
	{
        "name": "Reading a book: <a href='https://www.apress.com/gp/book/9781484224021' target='_blank'>Low-Level Programming</a>",
        "currentValue": (100/446)*100,
        "currentText": "",
		"lastWeeksProgress": 0,
        "weeklyProgress": 0
    },	
    {
        "name": "Reading a book: <a href='https://www.amazon.com/Data-Structures-Abstraction-Design-Using-ebook/dp/B01AKSZA2E' target='_blank'>Data Structures: Abstraction and Design Using Java, 3rd Edition</a>",
        "currentValue": (217/686)*100,
        "currentText": "",
		"lastWeeksProgress": 0,
        "weeklyProgress": 0
    },
	{
        "name": "Completing a course: <a href='https://www.udacity.com/course/advanced-operating-systems--ud189' target='_blank'>Advanced Operating Systems</a>",
        "currentValue": 75,
        "currentText": "",
		"lastWeeksProgress": 0,
        "weeklyProgress": 0
    },
*/
 
var achievements = 
	{
        "id": 69,
        "title": "Completed A Course",
        "date": "September 24th, 2018",
        "link": "https://www.pluralsight.com/courses/understanding-machine-learning",
        "shortlink": "Understanding Machine Learning",
        "text": "Just something to kill time with. :)" 
    },
	{
        "id": 68,
        "title": "Finished Reading A Book",
        "date": "August 10th, 2018",
        "link": "http://shop.oreilly.com/product/0636920052036.do",
        "shortlink": "Understanding Compression",
        "text": "What a fantastic book!"
    },
	{
        "id": 67,
        "title": "Finished Reading A Book",
        "date": "July 15th, 2018",
        "link": "http://shop.oreilly.com/product/0636920039334.do",
        "shortlink": "Decentralized Applications",
        "text": "As I see it, it's a good introduction book for showing what kind of apps can be built using blockchain technology."
    },
	{
        "id": 66,
        "title": "Completed a personal GitHub project",
        "date": "July 14th, 2018",
        "link": "https://github.com/lfourky/definitely-not-an-illegal-book-downloader",
        "shortlink": "github.com/lfourky/definitely-not-an-illegal-book-downloader",
        "text": "Basically, not everyone can pay for books. And everyone should be able to access them. Just my two cents on the topic." 
    },
	{
        "id": 65,
        "title": "Completed a personal GitHub project",
        "date": "June 29th, 2018",
        "link": " https://github.com/lfourky/go-quicksort",
        "shortlink": "github.com/lfourky/go-quicksort",
        "text": "" 
    },
	{
        "id": 64,
        "title": "Finished an Audiobook",
        "date": "June 21st, 2018",
        "link": "https://www.amazon.com/Phoenix-Project-DevOps-Helping-Business/dp/0988262592",
        "shortlink": "The Phoenix Project",
        "text": "Enjoyed this one quite a lot."
    },
	{
        "id": 63,
        "title": "Finished Reading A Book",
        "date": "June 19th, 2018",
        "link": "http://shop.oreilly.com/product/0636920072768.do",
        "shortlink": "Designing Distributed Systems",
        "text": "A surprising amount of Kubernetes examples can be found in this book, but, I'm just fine with it. Overall a pretty good book."
    },
	{
        "id": 62,
        "title": "Completed A Course",
        "date": "June 18th, 2018",
        "link": "https://www.udacity.com/course/computer-networking--ud436",
        "shortlink": "Computer Networking",
        "text": "A bit more advanced course on networking this time. Still not there, yet." 
    },
	{
        "id": 61,
        "title": "Completed A Course",
        "date": "June 16th, 2018",
        "link": "https://www.pluralsight.com/courses/practical-networking",
        "shortlink": "Practical Networking",
        "text": "" 
    },
	{
        "id": 60,
        "title": "Completed A Course",
        "date": "June 3rd, 2018",
        "link": "https://www.udacity.com/course/networking-for-web-developers--ud256",
        "shortlink": "Networking for Web Developers",
        "text": "Served as a nice intro to a more in-depth course that I'm planning to take after this one." 
    },
	{
        "id": 59,
        "title": "Finished an Audiobook",
        "date": "June 2nd, 2018",
        "link": "https://www.audible.com/pd/Science-Technology/The-Elegant-Universe-Audiobook/B002V0TEUO",
        "shortlink": "The Elegant Universe",
        "text": ""
    },
	{
        "id": 58,
        "title": "Finished Reading A Book",
        "date": "May 28th, 2018",
        "link": "http://shop.oreilly.com/product/0636920043874.do",
        "shortlink": "Kubernetes: Up and Running",
        "text": "Yeah, definitely cool."
    },
	{
        "id": 57,
        "title": "Completed A Course",
        "date": "May 19th, 2018",
        "link": "https://www.pluralsight.com/courses/getting-started-kubernetes",
        "shortlink": "Getting Started with Kubernetes",
        "text": "Well, it seems that Kubernetes is really cool." 
    },
	{
        "id": 56,
        "title": "Completed A Course",
        "date": "May 18th, 2018",
        "link": "https://www.pluralsight.com/courses/implementing-devops-real-world",
        "shortlink": "Implementing DevOps in the Real World",
        "text": "This course kind of took another route instead of the one I thought it'd take. Still, it was interesting to see the perspective of a senior director of product from Pivotal on this subject." 
    },
	{
        "id": 55,
        "title": "Completed A Course",
        "date": "May 13th, 2018",
        "link": " https://www.udacity.com/course/intro-to-devops--ud611",
        "shortlink": "Intro to DevOps",
        "text": "Quite an interesting topic." 
    },
	{
        "id": 54,
        "title": "Completed A Course",
        "date": "May 12th, 2018",
        "link": " https://www.pluralsight.com/courses/protocol-buffers-beyond-json-xml",
        "shortlink": "Moving Beyond JSON and XML with Protocol Buffers",
        "text": "" 
    },
	{
        "id": 53,
        "title": "Completed A Course",
        "date": "May 10th, 2018",
        "link": " https://www.pluralsight.com/courses/grpc-enhancing-application-communication",
        "shortlink": "Enhancing Application Communication with gRPC",
        "text": "" 
    },
    {
        "id": 52,
        "title": "Finished an Audiobook",
        "date": "April 20th, 2018",
        "link": "https://www.audible.com/pd/Science-Technology/Astrophysics-for-People-in-a-Hurry-Audiobook/B06X9MXN32",
        "shortlink": "Astrophysics for People in a Hurry",
        "text": ""
    },
	{
        "id": 51,
        "title": "Completed a personal GitHub project",
        "date": "April 17th, 2018",
        "link": " https://github.com/lfourky/file-splitter",
        "shortlink": "github.com/lfourky/file-splitter",
        "text": "I've made this program quite a while ago, but never had any description or an example of how to use it in the repo. Now I've added an example and modified the code a bit to be a bit friendlier to read." 
    },
	{
        "id": 50,
        "title": "Completed A Course",
        "date": "April 17th, 2018",
        "link": " http://shop.oreilly.com/product/0636920039518.do",
        "shortlink": "Distributed Systems",
        "text": "" 
    },
	{
        "id": 49,
        "title": "Completed A Course",
        "date": "April 6th, 2018",
        "link": " http://shop.oreilly.com/product/0636920047513.do",
        "shortlink": "Intermediate Go Programming",
        "text": "Refreshing my Go skeelz." 
    },
	{
        "id": 48,
        "title": "Completed A Course",
        "date": "April 3rd, 2018",
        "link": " https://www.udacity.com/course/gt-refresher-advanced-os--ud098",
        "shortlink": "Intro to Advanced Operating Systems",
        "text": "A very nice introduction to memory & file systems, multithreaded programming and networking." 
    },
	{
        "id": 47,
        "title": "Completed A Course",
        "date": "March 25th, 2018",
        "link": " https://www.udacity.com/course/intro-to-theoretical-computer-science--cs313",
        "shortlink": "Intro to Theoretical Computer Science",
        "text": "Quite a lot of challenging and thought-provoking problems. I liked it." 
    },
	{
        "id": 46,
        "title": "Completed A Course",
        "date": "March 24th, 2018",
        "link": " http://shop.oreilly.com/product/0636920024774.do",
        "shortlink": "Mastering Advanced Git (O'Reilly)",
        "text": "Time well spent, I'd say." 
    },
	{
        "id": 45,
        "title": "Completed A Course",
        "date": "March 13th, 2018",
        "link": " http://shop.oreilly.com/product/0636920017462.do",
        "shortlink": "Mastering Git (O'Reilly)",
        "text": "It's time to git serious. (ughhh that didn't sound as good as I thought it might...) Anyways, a nice course." 
    },
    {
        "id": 44,
        "title": "Finished an Audiobook",
        "date": "March 12th, 2018",
        "link": "https://www.amazon.com/Rich-Dad-Poor-Teach-Middle/dp/1543626610",
        "shortlink": "Rich Dad Poor Dad",
        "text": "Quite an interesting book. Perhaps not life changing, but certainly valuable and worth reading / listening to."
    },
	{
        "id": 43,
        "title": "Introduced Home Surveillance",
        "date": "February 23th, 2018",
        "link": "",
        "shortlink": "",
        "text": "Created a system that monitors the room (Raspberry Pi 3, USB WebCam) for motion (OpenCV in C++) and, if motion is detected, it starts taking pictures. Then, the following happens: an app (written in Golang) sends out a notification (Firebase FCM, REST API) to a custom android application (Java), and it uploads the pictures to my Google Drive (Golang, GoogleDrive API)." 
    },
	{
        "id": 42,
        "title": "Completed A Course",
        "date": "February 19th, 2018",
        "link": " https://www.udacity.com/course/c-for-programmers--ud210",
        "shortlink": "C++ For Programmers",
        "text": "~ meh" 
    },
    {
        "id": 41,
        "title": "Completed A Language Course",
        "date": "January 16th, 2018",
        "link": " http://www.pimsleur.com/learn-french",
        "shortlink": "Learn French (Pimsleur)",
        "text": "Around 13 and a half hours of conversations in French. This course earns my highest recommendations, although it comes with a 'but'. Previously, before I even knew that this course existed, I finished all the French lessons on Duolingo, and I've played with some other similar apps (MosaLingua, Memrise...). I have no idea if I would be able to comprehend and absorb as much as I did, while listening to this course, if I didn't previously have at least basic knowledge of French. Still, I strongly recommend this course."
    },
    {
        "id": 40,
        "title": "Completed A Course",
        "date": "January 7th, 2018",
        "link": "https://www.udacity.com/course/firebase-in-a-weekend-by-google-android--ud0352",
        "shortlink": "Firebase in a Weekend: Android course by Google",
        "text": "Firebase seems quite handy."
    },
    {
        "id": 39,
        "title": "Finished Reading A Book",
        "date": "November 4th, 2017",
        "link": "https://www.amazon.com/Building-Microservices-Designing-Fine-Grained-Systems/dp/1491950358",
        "shortlink": "Building Microservices: Designing Fine-Grained Systems",
        "text": "Great introduction to microservices. And while I only scratched the surface by reading this book, I feel like I've found a lot of doors to open for further exploration - which makes me quite happy. :)"
    },
    {
        "id": 38,
        "title": "Finished Reading A Book",
        "date": "August 15th, 2017",
        "link": "https://www.manning.com/books/docker-in-action",
        "shortlink": "Docker In Action",
        "text": "What a great book! I definitely recommend it."
    },
    {
        "id": 37,
        "title": "Completed A Course",
        "date": "August 12th, 2017",
        "link": "https://www.pluralsight.com/courses/integrating-docker-with-devops-automated-workflows",
        "shortlink": "Integrating Docker with DevOps Automated Workflows",
        "text": "Since I'm almost done reading a book about Docker, I just wanted to 'harden' the knowledge by watching a course while I'm still reading the book. Anyways, this was a nice course."
    },
    {
        "id": 36,
        "title": "Finished Reading A Book",
        "date": "June 8th, 2017",
        "link": "https://www.manning.com/books/go-in-practice",
        "shortlink": "Go in Practice",
        "text": "Woah, it's been a while since I've last read a technical book. This was quite refreshing, and the book was such a good read."
    },
    {
        "id": 35,
        "title": "Completed A Course",
        "date": "June 7th, 2017",
        "link": "https://www.pluralsight.com/courses/docker-deep-dive",
        "shortlink": "Docker Deep Dive",
        "text": ""
    },
    {
        "id": 34,
        "title": "Completed A Course",
        "date": "May 20th, 2017",
        "link": "https://www.pluralsight.com/courses/go-horizontal-scaling-apps",
        "shortlink": "Scaling Go Applications Horizontally",
        "text": ""
    },
    {
        "id": 33,
        "title": "Completed A Course",
        "date": "May 8th, 2017",
        "link": "https://www.pluralsight.com/courses/oauth2-json-web-tokens-openid-connect-introduction",
        "shortlink": "Introduction to OAuth2, OpenID Connect and JSON Web Tokens (JWT)",
        "text": ""
    },
    {
        "id": 32,
        "title": "Completed A Course",
        "date": "May 7th, 2017",
        "link": "https://www.pluralsight.com/courses/microservices-architecture",
        "shortlink": "Microservices Architecture",
        "text": "Quite an interesting topic. :)"
    },
    {
        "id": 31,
        "title": "Completed A Course",
        "date": "March 19th, 2017",
        "link": "https://www.udacity.com/course/website-performance-optimization--ud884",
        "shortlink": "Website Performance Optimization by Google",
        "text": ""
    },
    {
        "id": 30,
        "title": "Completed A Course",
        "date": "March 10th, 2017",
        "link": "https://www.pluralsight.com/courses/build-go-apps-gorilla-toolkit",
        "shortlink": "Building Better Go Web Apps with the Gorilla Toolkit",
        "text": ""
    },
    {
        "id": 29,
        "title": "Finished an Audiobook",
        "date": "February 19th, 2017",
        "link": "http://www.audible.com.au/pd/Non-fiction/Moonwalking-with-Einstein-Audiobook/B00FEZGM12",
        "shortlink": "Moonwalking with Einstein",
        "text": "A great insight into how memory feats are possible for ordinary people, too."
    },
    {
        "id": 28,
        "title": "Completed A Course",
        "date": "January 29th, 2017",
        "link": "https://www.pluralsight.com/courses/gradle-fundamentals",
        "shortlink": "Gradle Fundamentals",
        "text": ""
    },
    {
        "id": 27,
        "title": "Completed A Course",
        "date": "January 20th, 2017",
        "link": "https://www.pluralsight.com/courses/design-patterns-java-behavioral",
        "shortlink": "Design Patterns in Java: Behavioral",
        "text": ""
    },
    {
        "id": 26,
        "title": "Completed A Course",
        "date": "January 10th, 2017",
        "link": "https://www.pluralsight.com/courses/java-8-whats-new",
        "shortlink": "What's new in Java 8",
        "text": "Also read these great blogs about it: http://winterbe.com/posts/2014/03/16/java-8-tutorial/ , http://winterbe.com/posts/2014/07/31/java8-stream-tutorial-examples/"
    },
    {
        "id": 25,
        "title": "Completed A Course",
        "date": "December 30th, 2016",
        "link": "https://www.lynda.com/SSL-tutorials/Understanding-Secure-Sockets-Layer/178124-2.html",
        "shortlink": "Understanding Secure Sockets Layer",
        "text": ""
    },
    {
        "id": 24,
        "title": "Completed A Course",
        "date": "December 16th, 2016",
        "link": "https://www.pluralsight.com/courses/play-by-play-docker-java-developers-arun-gupta-michael-hoffman",
        "shortlink": "Play by Play: Docker for Java Developers with Arun Gupta and Michael Hoffman",
        "text": ""
    },
    {
        "id": 23,
        "title": "Completed A Course",
        "date": "December 9th, 2016",
        "link": "https://www.pluralsight.com/courses/spring-boot-efficient-development-configuration-deployment",
        "shortlink": "Spring Boot: Efficient Development, Configuration, and Deployment",
        "text": "A little something to help me out on the project I'm currently working on."
    },
    {
        "id": 22,
        "title": "Introduced AngularJS, Facebook & Google OAauth to the website",
        "date": "October 17th, 2016",
        "link": "",
        "shortlink": "",
        "text": ""
    },
    {
        "id": 21,
        "title": "Finished an Audiobook",
        "date": "October 16th, 2016",
        "link": "http://www.audible.com/pd/Science-Technology/Superintelligence-Audiobook/B00LPMD72K",
        "shortlink": "Superintelligence: Paths, Dangers, Strategies",
        "text": "Wanted to listen to something about AI. Wouldn't say that I was disappointed, but Nick talks way too much about the dangers of AI that he thinks are possible, and he repeats himself a lot. Nevertheless, was a nice time killer."
    },
    {
        "id": 20,
        "title": "Work&Travel",
        "date": "October 2nd, 2016",
        "link": "https://en.wikipedia.org/wiki/Jackson,_Wyoming",
        "shortlink": "Came back",
        "text": "It was a wonderful journey, and I will surely write some more about it (once I find some free time to do so)."
    },
    {
        "id": 19,
        "title": "Finished an Audiobook",
        "date": "June 10th, 2016",
        "link": "http://www.audible.com/pd/Science-Technology/Sapiens-Audiobook/B00SXJF7J4",
        "shortlink": "Sapiens: A Brief History of Humankind",
        "text": "Recommended by Bill Gates on his blog @ https://www.gatesnotes.com/About-Bill-Gates/Summer-Books-2016"
    },
    {
        "id": 18,
        "title": "Finished an Audiobook",
        "date": "May 29th, 2016",
        "link": "http://www.audible.com/pd/Bios-Memoirs/Elon-Musk-Audiobook/B00UX8ODPM",
        "shortlink": "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future",
        "text": "Enjoyed every hour. Elon is kind of an idol of mine."
    },
    {
        "id": 17,
        "title": "Work&Travel",
        "date": "May 24th, 2016",
        "link": "http://lazarivkov.com/usa",
        "shortlink": "USA",
        "text": "Started my 4-months journey to America."
    },
    {
        "id": 16,
        "title": "Internship",
        "date": "April 4th, 2016",
        "link": "http://www.execom.eu/",
        "shortlink": "Accepted as an intern @ Execom",
        "text": ":)"
    },
    {
        "id": 15,
        "title": "Finished Reading A Book",
        "date": "April 2nd, 2016",
        "link": "http://www.amazon.com/The-4-Hour-Workweek-Escape-Anywhere/dp/0307465357",
        "shortlink": "The 4-Hour Workweek",
        "text": "Well - not sure. I'd recommend just reading the summary of the book."
    },
    {
        "id": 14,
        "title": "MIT Lecture",
        "date": "March 21st, 2016",
        "link": "https://www.youtube.com/watch?v=TjZBTDzGeGg",
        "shortlink": " Introduction and Scope",
        "text": "This lecture actually got me really interested, but I was always interested in AI - and I also wrote about 7 a4 pages about it."
    },
    {
        "id": 13,
        "title": "MIT Lecture",
        "date": "March 20th, 2016",
        "link": "https://www.youtube.com/watch?v=g1ka1MXpo3s&feature=youtu.be",
        "shortlink": "Introduction to the visual system",
        "text": "Sometimes, I enjoy watching lectures on different topics that I find interesting. And I do not regret watching this one. It was quite awesome, but I will continue switching topics for now, to see what I enjoy the most."
    },
    {
        "id": 12,
        "title": "Completed A Course",
        "date": "March 5th, 2016",
        "link": "https://mva.microsoft.com/en-US/training-courses/mean-stack-jump-start-8442",
        "shortlink": "MEAN Stack Jump Start",
        "text": ""
    },
    {
        "id": 11,
        "title": "Completed A Course",
        "date": "February 27th, 2016",
        "link": "https://egghead.io/",
        "shortlink": "AngularJS course",
        "text": "These 3 hours of content were a nice introduction to AngularJS."
    },
    {
        "id": 10,
        "title": "Completed A Course",
        "date": "February 19th, 2016",
        "link": "https://www.codecademy.com/learn/learn-angularjs",
        "shortlink": "Learn AngularJS",
        "text": "Enjoying the MEAN stack."
    },
    {
        "id": 9,
        "title": "50 days streak on Duolingo (French)",
        "date": "February 17th, 2016",
        "link": "https://www.duolingo.com/l4ky",
        "shortlink": "",
        "text": "^_^"
    },
    {
        "id": 8,
        "title": "Completed A Course",
        "date": "February 10th, 2016",
        "link": "https://www.udemy.com/learn-nodejs-by-building-10-projects/",
        "shortlink": "Learn Node.js by building 10 projects",
        "text": "Phew, This one lasted 19hrs (and more, if you count the hours wasted on fixing stuff), but I'm glad I did it. It was a nice kickstart into Node.js."
    },
    {
        "id": 7,
        "title": "Finished Reading A Book",
        "date": "February 10th, 2016",
        "link": "http://www.amazon.com/Outliers-Story-Success-Malcolm-Gladwell/dp/0316017930",
        "shortlink": "Outliers: The Story of Success",
        "text": "A little something to boost my motivation. :)"
    },
    {
        "id": 6,
        "title": "Finished Reading A Book",
        "date": "February 7th, 2016",
        "link": "http://www.amazon.com/Code-Language-Computer-Hardware-Software/dp/0735611319",
        "shortlink": "Code: The Hidden Language of Computer Hardware and Software",
        "text": "One of the most enlightening books that I've ever read - it introduced me to the inner workings of a computer like no one / nothing ever did. I was in awe most of the time while reading it."
    },
    {
        "id": 5,
        "title": "40 days streak on Duolingo (French)",
        "date": "February 6th, 2016",
        "link": "https://www.duolingo.com/l4ky",
        "shortlink": "",
        "text": "The largest streak before this one was ~15 days long, but sadly it was broken. And I'm quite proud of pushing myself to exercise French everyday. :)"
    },
    {
        "id": 4,
        "title": "Read A Book In One Day",
        "date": "February 4th, 2016",
        "link": "http://www.amazon.com/RESTful-Web-API-Design-Node-js/dp/1783985860",
        "shortlink": "RESTful Web API Design with Node.js",
        "text": "After starting exploring Node.js, I've decided to read a short book about it. This was the one I chose - and it turned out to be a good decision. Again, it was done as a part of the 'Book A Day' challenge that I've put myself up against."
    },
    {
        "id": 3,
        "title": "Finished Reading A Book",
        "date": "February 2nd, 2016",
        "link": "http://www.amazon.com/For-Dummies-Stephen-R-Davis/dp/0470317264",
        "shortlink": "C++ For Dummies",
        "text": "It's been quite a while since I've started reading this, and I've had a bugging feeling that I should just go on through with it. So I did. :)"
    },
    {
        "id": 2,
        "title": "Completed A Course",
        "date": "January 27th, 2016",
        "link": "https://www.pluralsight.com/courses/accelerated-introduction-cpp",
        "shortlink": "Accelerated Introduction C++",
        "text": "This was also done in one day. Again, the goal was to do something I've never done before."
    },
    {
        "id": 1,
        "title": "Read A Book In One Day",
        "date": "January 16th, 2016",
        "link": "http://www.amazon.com/Mind-Numbers-Science-Flunked-Algebra/dp/039916524X",
        "shortlink": "A Mind for Numbers: How to Excel at Math and Science (Even If You Flunked Algebra)",
        "text": "Basically, the idea behind this was to push my limits. I've never focused on reading a single book in one day, so this marks the first time I did such a thing."
    }
];

function getProgressTemplate(progress) {
    var template =
        `	<tr>  
					<td style="width:50%">
					` + progress.name + `
					</td>
					<td>
						<div class="progress">
							<div class="progress-bar" style="width: ` + progress.currentValue + `%">
								<span>` + progress.currentText + `</span>
							</div>
							<div class="progress-bar progress-bar-info" style="width: ` + progress.lastWeeksProgress + `%"></div>
							<div class="progress-bar progress-bar-warning" style="width: ` + progress.weeklyProgress + `%"></div>
						</div>
					</td>
				</tr>
				`;
    return template;
}

function getAchievementTemplate(achievement) {
    var clazz = "timeline";

    if (achievement.id % 2 == 0) {
        clazz = "timeline-inverted";
    }

    var template = '    	<li class="' + clazz + '">' +
        '			<div class="timeline-badge">' +
        '				<i class="glyphicon glyphicon-check"></i>' +
        '			</div>' +
        '			<div class="timeline-panel">' +
        '				<div class="timeline-heading">' +
        '					<h4 class="timeline-title">' + achievement.title + '</h4>' +
        '					<p>' +
        '						<small class="text-muted styled-date">' +
        '						  <i class="glyphicon glyphicon-time"></i>' +
        '						  &nbsp;&nbsp;' +
        '						  ' + achievement.date +
        '						</small>' +
        '					</p>' +
        '				</div>' +
        '				<div class="timeline-body">' +
        '				  <b> <a href=" ' + achievement.link + '" target="_blank">' + achievement.shortlink + '</a> </b>' +
        '					<p style="overflow:auto">' + achievement.text + '</p>' +
        '				</div>' +
        '			</div>' +
        '		</li>'
    return template;
}

function populateAchievements() {
	var achievementList = $("#achievements-timeline");
	for (var i = 0; i < achievements.length; i++) {
			achievementList.append(getAchievementTemplate(achievements[i]));
	}
}
populateAchievements();

function populateProgress() {
	var progressList = $("#progress-list");
	for (var i = 0; i < progress.length; i++) {
			progressList.append(getProgressTemplate(progress[i]));
	}
}
populateProgress();

function alertVisitor() {
        $.ajax({
            url: "http://l4ky.xyz:35000/alert/visitor",
            crossDomain: true, 
            withCredentials:false,
            type: 'GET'
        });
}
alertVisitor();