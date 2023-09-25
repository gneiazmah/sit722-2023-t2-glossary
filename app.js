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
];

app.get('/', (req, res) => {
  res.render('index', { glossary });
});

app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
