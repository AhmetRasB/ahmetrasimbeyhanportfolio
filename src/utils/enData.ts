export const en = {
  personal: {
    name: "Ahmet Rasim Beyhan",
    title: "Full Stack Developer",
    bio: "Embarking on my technological journey at an early age, I have amassed experience in the ever-evolving realm of technology. My professional career focuses on full-stack development, where I hone my skills in Laravel, .NET, React, and modern web technologies. I am passionate about creating efficient solutions and contributing to meaningful projects.",
    location: "Istanbul, Turkey",
    email: "ahmet@agotasoft.com",
    phone: "+90 552 517 57 81"
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
    "RESTful APIs"
  ],
  experience: [
    {
      company: "AgotaSoft",
      position: "Software Developer",
      period: "Jul 2024 - Present",
      description: "I develop and maintain ERP systems using Laravel and .NET frameworks, creating responsive web applications with React and modern JavaScript. I focus on optimizing database performance and implementing efficient data structures while collaborating with cross-functional teams."
    },
    {
      company: "Acunmedya Academy & MyStaff",
      position: "Software Intern",
      period: "Jan 2025 - May 2025",
      description: "Gained hands-on experience in web and software development practices, working on real-world projects using modern development frameworks and learning agile development methodologies."
    },
    {
      company: "Teklas",
      position: "Software Intern",
      period: "Jun 2025 - Aug 2025",
      description: "Contributed to software development projects in a professional environment, improving skills in backend development and database management while participating in code reviews and quality assurance processes."
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


