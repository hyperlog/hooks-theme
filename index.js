const { useState, useEffect } = require("react");

let userSocial = {
  devto: { url_prefix: "https://dev.to/", username: "test" },
  github: { url_prefix: "https://github.com/", username: "test" },
  dribbble: { url_prefix: "https://dribbble.com/", username: "test" },
  twitter: { url_prefix: "https://twitter.com/", username: "test" },
  facebook: { url_prefix: "https://facebook.com/", username: "test" },
  linkedin: { url_prefix: "https://linkedin.com/in/", username: "test" },
  stackoverflow: {
    url_prefix: "https://stackoverflow.com/users/",
    username: "123",
  },
};

let userInfo = {
  first_name: "John",
  last_name: "Doe",
  tagline: "Senior Software Engineer at Google",
  username: "JohnDoe",
  contactInfo: {
    email: "johndoe@gmail.com",
    phone: "+1-437-333-2425",
    address: "420, Street 69, San Fransisco, USA",
  },
  userSocial,
};

let allProjects = [
  {
    id: "fa1c05c0-8069-4971-981b-cf9e06058633",
    name: "Would You Rather",
    tagline: "Sample Project",
    description: "Sample Project made for just showcasing",
    image_url:
      "https://avatars.githubusercontent.com/u/10351046?u=e537ee0f7b38fc89668dc1d36b4fbcbde6240bc2\u0026v=4",
    aggregated_tech_analysis: { libs: {}, tags: {}, tech: {} },
    repos: [
      {
        id: "b0797e43-c92d-47af-a522-234a7c70f7ed",
        full_name: "hyperlog/hyperlog",
        description: "Portfolio for developers",
        primary_language: "HTML",
        stargazers: 27,
        image_url:
          "https://avatars.githubusercontent.com/u/61115154?s=400\u0026v=4",
        html_url: "https://github.com/hyperlog/hyperlog",
      },
    ],
  },
  {
    id: "6a8d075a-cefa-4fbb-a5d4-e8d20a70cfb5",
    name: "Hyperlog",
    tagline: "Portfolios for developers",
    description: "test",
    image_url:
      "https://avatars.githubusercontent.com/u/10351046?u=e537ee0f7b38fc89668dc1d36b4fbcbde6240bc2\u0026v=4",
    aggregated_tech_analysis: {
      libs: { "js.react": { deletions: 111, insertions: 307 } },
      tags: { "ui-framework": { deletions: 111, insertions: 307 } },
      tech: { "javascript-web": { deletions: 111, insertions: 307 } },
    },
    repos: [
      {
        id: "cbb305eb-3083-4d82-9bf0-28d78e5ef418",
        full_name: "hyperlog/hooks-theme",
        description: null,
        primary_language: "JavaScript",
        stargazers: 0,
        image_url:
          "https://avatars.githubusercontent.com/u/61115154?s=400\u0026v=4",
        html_url: "https://github.com/hyperlog/hooks-theme",
      },
    ],
  },
];

function useUser() {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setUser(userInfo);
      setIsLoading(false);
    }, 2000);
  }, [setIsLoading, setUser]);
  return {
    user,
    isLoading,
    error: null,
  };
}

function useProjects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setProjects(allProjects);
    setLoading(false);
    return { projects, isLoading };
  }, []);
  return { projects, isLoading };
}

module.exports = {
  useProjects,
  useUser,
};
