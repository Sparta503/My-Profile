type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Abel Chomunodisa ",
    fullName: "Abel Chomunodisa",
    email: "chomunodisaa68@gmail.com",
  },
  hero: {
    name: "Abel Chomunodisa",
    p: ["Development of  3D visuals, user", "interfaces and web applications is much of my interests."],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Preliminary",
      h2: "Briefing.",
      content: `
      As a seasoned software developer, Im mostly good at Html,Css and JavaScript, 
      with in-depth knowledge of frameworks such as React, Node.js,tailwind  Css and Bootstrap.
       My ability to learn swiftly and my dedication to close client collaboration enable me to craft efficient, scalable, and user-friendly solutions tailored to real-world challenges. 
       I'm excited to partner with you to turn your ideas into reality!`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "Thoughts of others towards my Work",
      h2: "Accolades.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `The following projects highlight my expertise and experience through practical examples. 
      Each project includes a brief description along with links to code repositories and live demos, 
      demonstrating my proficiency in tackling complex problems, utilizing diverse technologies, and 
      managing projects efficiently.`,
    },
  },
};
