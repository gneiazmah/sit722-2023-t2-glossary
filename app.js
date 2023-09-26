const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');

const glossary = [
    { id: 1, term: 'Agile', definition: 'A project management and product development approach that prioritizes flexibility, collaboration, and customer feedback.', reference: '"Agile Alliance", 2023, https://www.agilealliance.org/agile101/'},
    { id: 2, term: 'Scrum', definition: 'A framework within the Agile methodology that emphasizes iterative development, collaboration, and daily stand-up meetings.', reference: '"Atlassian", 2023, https://www.atlassian.com/agile/scrum' },
    { id: 3, term: 'DevOps', definition: 'A set of practices that combines software development (Dev) and IT operations (Ops).', reference: '"Amazon Web Services", 2023, https://aws.amazon.com/devops/' },
    { id: 4, term: 'Kanban', definition: 'A visual workflow management method that helps teams visualize their work and optimize efficiency.', reference: '"Atlassian", 2023, https://www.atlassian.com/agile/kanban' },
    { id: 5, term: 'CI/CD', definition: 'Continuous Integration (CI) and Continuous Delivery (CD) practices to automate software development processes.', reference: '"Synopsys", 2023, https://www.synopsys.com/glossary/what-is-cicd.html' },
    { id: 6, term: 'Version Control', definition: 'The practice of tracking and managing changes to code and other files, often using tools like Git.', reference: 'https://www.atlassian.com/git/tutorials/what-is-version-control' },
    { id: 7, term: 'Git', definition: 'A distributed version control system used for tracking changes in source code during software development.',reference: '"Atlassian", 2023, https://www.atlassian.com/git/tutorials/what-is-git' },
    { id: 8, term: 'GitHub', definition: 'A web-based platform for version control and collaboration that uses Git.',reference: '"GitHub", 2023, https://docs.github.com/en/get-started/quickstart/hello-world' },
    { id: 9, term: 'Bitbucket', definition: 'A web-based platform for version control and collaboration that supports both Git and Mercurial.', reference: '"Atlassian BitBucket", 2023, https://bitbucket.org/product/guides/getting-started/overview#a-brief-overview-of-bitbucket' },
    { id: 10, term: 'Containerization', definition: 'The practice of packaging an application and its dependencies together in a container for consistent deployment.',reference: '"Amazon Web Services", 2023, https://aws.amazon.com/what-is/containerization/' },
    { id: 11, term: 'Docker', definition: 'A popular containerization platform that allows you to package and run applications in containers.',reference: '"Docker Inc", 2013-2023, https://docs.docker.com/get-started/overview/' },
    { id: 12, term: 'Kubernetes', definition: 'An open-source container orchestration platform for automating deployment, scaling, and management of containerized applications.',reference: '"The Kubernetes Authors", 2023, https://kubernetes.io/docs/concepts/overview/' },
    { id: 13, term: 'Infrastructure as Code (IaC)', definition: 'The practice of managing and provisioning infrastructure using code and automation tools.',reference: '"Red Hat", May 11, 2022, https://www.redhat.com/en/topics/automation/what-is-infrastructure-as-code-iac' },
    { id: 14, term: 'REST', definition: 'Representational State Transfer, an architectural style for designing networked applications.', reference: 'Codecademy Team, 2023, https://www.codecademy.com/article/what-is-rest' },
    { id: 15, term: 'Microservices', definition: 'An architectural style where an application is composed of loosely coupled, independently deployable services.',reference: '"Amazon Web Services", 2023, https://aws.amazon.com/microservices/' },
    { id: 16, term: 'API', definition: 'Application Programming Interface, a set of rules and protocols that allows different software applications to communicate with each other.',reference: '"Amazon Web Services", 2023, https://aws.amazon.com/what-is/api/' },
    { id: 17, term: 'Cloud Computing', definition: 'The delivery of computing services, including servers, storage, databases, networking, and more, over the internet.',reference: '"Amazon Web Services", 2023, https://aws.amazon.com/what-is-cloud-computing/' },
    { id: 18, term: 'AWS', definition: 'Amazon Web Services, a popular cloud computing platform offering a wide range of services.',reference: '"Amazon Web Services", 2023, https://aws.amazon.com/what-is-aws/' },
    { id: 19, term: 'Azure', definition: 'Microsoft Azure, a cloud computing platform and infrastructure created by Microsoft.',reference: '"Microsoft", 2023, https://azure.microsoft.com/en-au/resources/cloud-computing-dictionary/what-is-azure/' },
    { id: 20, term: 'Google Cloud', definition: 'Google Cloud Platform (GCP), a suite of cloud computing services offered by Google.',reference: 'Stephen J. Bigelow, "TechTarget", 2023, https://www.techtarget.com/searchcloudcomputing/definition/Google-Cloud-Platform' },
    { id: 21, term: 'Jenkins', definition: 'An open-source automation server used for building, testing, and deploying code.',reference: 'Adam Riglian, "TechTarget", 2023, ,https://www.techtarget.com/searchsoftwarequality/definition/Jenkins' },
    { id: 22, term: 'VSCode', definition: 'Visual Studio Code, also commonly referred to as VS Code, is a source-code editor made by Microsoft with the Electron Framework, for Windows, Linux and macOS.',reference: 'Martin Heller, "InfoWorld", 08 July 2022, https://www.infoworld.com/article/3666488/what-is-visual-studio-code-microsofts-extensible-code-editor.html' },
    { id: 23, term: 'Node JS', definition: 'Node.js allows developers to create both front-end and back-end applications using JavaScript. It was released in 2009 by Ryan Dahl', reference: 'B. Semah, “What Exactly is Node.js? Explained for Beginners,” freeCodeCamp.org, Dec. 05, 2022. https://www.freecodecamp.org/news/what-is-node-js/' },
    { id: 24, term: 'Serverless', definition: 'A cloud computing method of providing backend services on an as-used basis.' ,reference: '"CloudFair, 2023, "https://www.cloudflare.com/learning/serverless/what-is-serverless/'},
    { id: 25, term: 'Load Balancing', definition: 'The distribution of incoming network traffic across multiple servers to ensure high availability and reliability.',reference: '"NGINX", https://www.nginx.com/resources/glossary/load-balancing/' },
    { id: 26, term: 'Firewall', definition: 'A network security device that monitors and filters incoming and outgoing network traffic based on predefined security rules.',reference: '"Cisco Systems", 2023, https://www.cisco.com/c/en/us/products/security/firewalls/what-is-a-firewall.html#~related-topics' },
    { id: 27, term: 'DNS', definition: 'Domain Name System, a system that translates domain names (e.g., example.com) into IP addresses.' ,reference: 'John Bogna, "PC" Jul 06 2022, https://au.pcmag.com/networking/94949/what-is-dns-everything-you-need-to-know-about-the-webs-phone-book'},
    { id: 28, term: 'SSL/TLS', definition: 'Secure Sockets Layer (SSL) and Transport Layer Security (TLS) protocols used to secure internet communication.' ,reference: '"DigiCert", 2023, https://www.digicert.com/what-is-ssl-tls-and-https'},
    { id: 29, term: 'Agile Manifesto', definition: 'A set of guiding values and principles for Agile software development, emphasizing individuals and interactions over processes and tools.',reference: 'Paul KirvanMary, K. Pratt, "TechTarget", 2023, https://www.techtarget.com/searchcio/definition/Agile-Manifesto' },
    { id: 30, term: 'User Story', definition: 'A brief description of a software feature from an end user perspective, typically used in Agile development.',reference: 'MAX REHKOPF, "Atlassian", 2023, https://www.atlassian.com/agile/project-management/user-stories' },
    { id: 31, term: 'Backlog', definition: 'A list of prioritized work items, often used in Agile project management.',reference: 'DAN RADIGAN, "Atlassian", 2023, https://www.atlassian.com/agile/scrum/backlogs' },
    { id: 32, term: 'Sprint', definition: 'A time-boxed development cycle in Scrum, typically two to four weeks long.',reference: 'Vicki-Lynn Brunskill, "TechTarget", 2023, https://www.techtarget.com/searchsoftwarequality/definition/Scrum-sprint' },
    { id: 33, term: 'MVP', definition: 'Minimum Viable Product, a version of a new product with the minimum features required to satisfy early customers and collect feedback.',reference: '"ProductPlan", 2023, https://www.productplan.com/glossary/minimum-viable-product/' },
    { id: 34, term: 'Dependency Injection', definition: 'A technique in which an object receives its dependencies from an external source rather than creating them itself.',reference: 'Wikipedia Contributors, https://en.wikipedia.org/wiki/Dependency_injection' },
    { id: 35, term: 'Mocking', definition: 'The practice of creating fake objects or components in software testing to simulate real objects and test interactions.',reference: 'Wikipedia Contributors, Mock Object, https://en.wikipedia.org/wiki/Mock_object' },
    { id: 36, term: 'Load Testing', definition: 'A type of performance testing that assesses a system ability to handle a specific load or level of concurrent users.',reference: 'Thomas Hamilton, August 12 2023, https://www.guru99.com/load-testing-tutorial.html' },
    { id: 37, term: 'API Gateway', definition: 'A server that acts as an API front-end, receiving API requests, enforcing throttling and security policies, passing requests to the back-end service, and passing back the response.',reference: '"Amazon Web Services", 2023, https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html' },
    { id: 38, term: 'Encryption', definition: 'The process of converting data into a code to prevent unauthorized access or tampering.',reference: '"CloudFair, 2023, https://www.cloudflare.com/learning/ssl/what-is-encryption/' },
    { id: 39, term: 'Root Cause Analysis', definition: 'A problem-solving technique used to identify the underlying cause of an issue or incident.',reference: 'MAX REHKOPF, "Wikipedia Contributors, https://en.wikipedia.org/wiki/Root_cause_analysis' },
    { id: 40, term: 'GitLab', definition: 'A web-based platform that provides source code management, continuous integration, and more, using Git.',reference: 'MAX REHKOPF, "Simplilearn", Karin Kelley, Jan 16, 2023, https://www.simplilearn.com/tutorials/git-tutorial/what-is-gitlab' },
    
  ];

app.get('/', (req, res) => {
  res.render('index', { glossary });
});

app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
