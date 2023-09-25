const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');

const glossary = [
    { id: 1, term: 'Agile', definition: 'A project management and product development approach that prioritizes flexibility, collaboration, and customer feedback.', reference: 'https://www.agilealliance.org/agile101/'},
    { id: 2, term: 'Scrum', definition: 'A framework within the Agile methodology that emphasizes iterative development, collaboration, and daily stand-up meetings.', reference: 'https://www.atlassian.com/agile/scrum' },
    { id: 3, term: 'DevOps', definition: 'A set of practices that combines software development (Dev) and IT operations (Ops).', reference: 'https://aws.amazon.com/devops/' },
    { id: 4, term: 'Kanban', definition: 'A visual workflow management method that helps teams visualize their work and optimize efficiency.', reference: 'https://www.atlassian.com/agile/kanban' },
    { id: 5, term: 'CI/CD', definition: 'Continuous Integration (CI) and Continuous Delivery (CD) practices to automate software development processes.', reference: 'https://www.synopsys.com/glossary/what-is-cicd.html' },
    { id: 6, term: 'Version Control', definition: 'The practice of tracking and managing changes to code and other files, often using tools like Git.', reference: 'https://www.atlassian.com/git/tutorials/what-is-version-control' },
    { id: 7, term: 'Git', definition: 'A distributed version control system used for tracking changes in source code during software development.',reference: 'https://www.atlassian.com/git/tutorials/what-is-git' },
    { id: 8, term: 'GitHub', definition: 'A web-based platform for version control and collaboration that uses Git.',reference: 'https://docs.github.com/en/get-started/quickstart/hello-world' },
    { id: 9, term: 'Bitbucket', definition: 'A web-based platform for version control and collaboration that supports both Git and Mercurial.', reference: 'https://bitbucket.org/product/guides/getting-started/overview#a-brief-overview-of-bitbucket' },
    { id: 10, term: 'Containerization', definition: 'The practice of packaging an application and its dependencies together in a container for consistent deployment.',reference: 'https://aws.amazon.com/what-is/containerization/' },
    { id: 11, term: 'Docker', definition: 'A popular containerization platform that allows you to package and run applications in containers.',reference: 'https://docs.docker.com/get-started/overview/' },
    { id: 12, term: 'Kubernetes', definition: 'An open-source container orchestration platform for automating deployment, scaling, and management of containerized applications.',reference: 'https://kubernetes.io/docs/concepts/overview/' },
    { id: 13, term: 'Infrastructure as Code (IaC)', definition: 'The practice of managing and provisioning infrastructure using code and automation tools.',reference: 'https://www.redhat.com/en/topics/automation/what-is-infrastructure-as-code-iac' },
    { id: 14, term: 'REST', definition: 'Representational State Transfer, an architectural style for designing networked applications.', reference: 'https://www.codecademy.com/article/what-is-rest' },
    { id: 15, term: 'Microservices', definition: 'An architectural style where an application is composed of loosely coupled, independently deployable services.',reference: 'https://aws.amazon.com/microservices/' },
    { id: 16, term: 'API', definition: 'Application Programming Interface, a set of rules and protocols that allows different software applications to communicate with each other.',reference: 'https://aws.amazon.com/what-is/api/' },
    { id: 17, term: 'Cloud Computing', definition: 'The delivery of computing services, including servers, storage, databases, networking, and more, over the internet.',reference: 'https://aws.amazon.com/what-is-cloud-computing/' },
    { id: 18, term: 'AWS', definition: 'Amazon Web Services, a popular cloud computing platform offering a wide range of services.',reference: 'https://aws.amazon.com/what-is-aws/' },
    { id: 19, term: 'Azure', definition: 'Microsoft Azure, a cloud computing platform and infrastructure created by Microsoft.',reference: 'https://azure.microsoft.com/en-au/resources/cloud-computing-dictionary/what-is-azure/' },
    { id: 20, term: 'Google Cloud', definition: 'Google Cloud Platform (GCP), a suite of cloud computing services offered by Google.',reference: 'https://cloud.google.com/docs/overview' },
    ];

app.get('/', (req, res) => {
  res.render('index', { glossary });
});

app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
