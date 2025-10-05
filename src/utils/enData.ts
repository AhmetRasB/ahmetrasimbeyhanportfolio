export const en = {
  personal: {
    name: "Ahmet Rasim Beyhan",
    title: "Full Stack Developer",
    bio: "I am an 18-year-old software developer passionate about data analytics, full-stack development, and cutting-edge technologies. Currently, I work as a Junior Software Developer at Teklas, while also building my own startup, AgotaSoft, where we develop ERP solutions.\n\nBacked by 120K$+ investment from Microsoft, I am driving my startup forward while pursuing my Computer Programming degree (2nd year). My focus is on delivering scalable, efficient, and user-friendly solutions using modern technologies.\n\nAlways eager to learn, experiment, and contribute to impactful projects.",
    location: "Istanbul, Turkey",
    email: "ahmet@agotasoft.com",
  },
  skills: [
    "Laravel",
    "React",
    ".NET Framework",
    "JavaScript/TypeScript",
    "PHP",
    "C#",
    "MySQL",
    "PostgreSQL",
    "Git",
    "RESTful APIs",
    "Winforms",
    "Qliksense"
  ],
  experience: [
    {
      company: "AgotaSoft",
      position: "Founder & Manager",
      period: "Jul 2024 - Present",
      description: "We have been part of the Microsoft for Startups program since 2023, building an AI-powered ERP using .NET technologies. Our team consists of 10+ members. Within the TÜBİTAK BIGG program, we earned the right to advance to phase 2 in multiple technoparks."
    },
    {
      company: "Acunmedya Academy & MyStaff",
      position: "Software Intern",
      period: "Jan 2025 - May 2025",
      description: "Gained hands-on experience in web and software development, worked on real-world projects using modern frameworks, and learned agile development methodologies."
    },
    {
      company: "Teklas",
      position: "Software Intern",
      period: "Jun 2025 - Aug 2025",
      description: "Developed an ERP similar to the company’s existing system. As a result of outstanding performance during my internship, I received a job offer."
    },
    {
      company: "Teklas",
      position: "Software Developer",
      period: "Aug 2025 - Present",
      description: "I take part in both Desktop and Web ERP development processes while also performing C-level BI analyses with Qliksense."
    }
  ],
  education: [
    {
      institution: "Biruni University",
      degree: "Computer Programming",
      period: "2024 - 2026",
      details: "Current GPA: 3.10/4.00. Focused on software development principles and modern programming languages with active participation in coding competitions and technical projects."
    }
  ],

} as const;

export type EnData = typeof en;


