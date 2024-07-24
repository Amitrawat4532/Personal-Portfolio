const expertise = [
    {
        id: 0,
        title: 'Front End Development',
        desc: 'I am a skilled React and Next JS developer with extensive experience in building robust web applications using Next.js React.js, and Node.js. I possess a strong understanding of server-side rendering, API integration. With my expertise, I can deliver dynamic and efficient web solutions tailored to meet the unique requirements of clients.',
    },
    {
        id: 1,
        title: 'Slack and Jira',
        desc: "As a developer, I'm proficient in Jira and Slack methodologies. I use Jira to simplify project management tasks like task assignment, prioritization, and progress tracking. Slack has improved my teamwork, utilizing daily stand-ups, sprint planning, and retrospectives. My expertise ensures high-quality software products are delivered promptly.",
    },
   
    {
        id: 2,
        title: 'Github and Gitlab',
        desc: "GitHub and Gitlab is essential for version control and collaboration. Its intuitive interface and features like pull requests and issue tracking simplify the process. Continuous integration ensures up-to-date code. GitHub is vital to my success as a developer.",
    },

]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
