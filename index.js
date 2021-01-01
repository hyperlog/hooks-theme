const { useState, useEffect } = require("react");

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
};

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

const allRepos = [
  {
    repo_name: "react",
    description: "This is sample repo description",
    repo_full_name: "facebook/react",
    external_url: "https://github.com/",
    primary_language: "JavaScript",
    visibility: "public",
  },
  {
    repo_name: "corerepo",
    description: "This is sample repo description",
    repo_full_name: "some/corerepo",
    external_url: "https://github.com/",
    primary_language: "JavaScript",
    visibility: "private",
  },
  {
    repo_name: "test",
    description: "This is sample repo description",
    repo_full_name: "test/test",
    external_url: "https://github.com/",
    primary_language: "JavaScript",
    visibility: "public",
  },
  {
    repo_name: "Hello-World",
    description: "This is sample repo description",
    repo_full_name: "user/Hello-World",
    external_url: "https://github.com/",
    primary_language: "JavaScript",
    visibility: "public",
  },
  {
    repo_name: "finalrepo",
    description: "This is sample repo description",
    repo_full_name: "facebook/finalrepo",
    external_url: "https://github.com/",
    primary_language: "JavaScript",
    visibility: "public",
  },
];

// Need to add more detailed analysis in this portion
const singleRepo = {
  private: false,
  size: 27,
  created_at: "2015-09-11T15:09:12.000Z",
  owner_avatar:
    "https://avatars0.githubusercontent.com/u/10351046?u=e537ee0f7b38fc89668dc1d36b4fbcbde6240bc2&v=4",
  full_name: "BrainBuzzer/vuejs-sublime-complete",
  html_url: "https://github.com/BrainBuzzer/vuejs-sublime-complete",
  name: "vuejs-sublime-complete",
  license: {
    name: "MIT License",
    spdx_id: "MIT",
    key: "mit",
    url: "http://choosealicense.com/licenses/mit/",
    node_id: "MDc6TGljZW5zZTEz",
  },
  languages: [
    {
      id: "Shell",
      label: "Shell",
      color: "hsl(97,69.8%,59.8%)",
      value: 509131,
    },
    {
      id: "Ruby",
      label: "Ruby",
      color: "hsl(359,68.4%,26.1%)",
      value: 1327,
    },
    {
      id: "Perl",
      label: "Perl",
      color: "hsl(193,98%,38.6%)",
      value: 3816,
    },
    {
      id: "Python",
      label: "Python",
      color: "hsl(207,51.4%,42.7%)",
      value: 2648,
    },
    {
      id: "Makefile",
      label: "Makefile",
      color: "hsl(94,65.5%,28.4%)",
      value: 59,
    },
    {
      id: "Groff",
      label: "Groff",
      color: "hsl(0,0%,0%)",
      value: 4567,
    },
  ],
  archived: true,
  default_branch: "master",
  homepage: "",
  owner: "BrainBuzzer",
  description:
    "Better Vue.js completions for sublime text with syntax highlighting.",
  commits: {
    last_fetched_commit: {
      date: "2019-09-05T08:27:22.000Z",
      sha: "dd49df1b5154dec5100bd4cdcbfd4802099bab68",
    },
  },
  pushed_at: "2019-09-05T08:27:24.000Z",
  stargazers_count: 58,
  contributors: {
    klee0589: 1,
    DannyFeliz: 1,
    nabijaczleweli: 1,
    BrainBuzzer: 39,
    maxkoryukov: 2,
  },
  tech: {
    "env-vars": { deletions: 8, insertions: 74 },
    "flask-sqlalchemy": { deletions: 10, insertions: 17 },
    "micro-framework": { deletions: 1035, insertions: 2161 },
    sql: { deletions: 112, insertions: 197 },
    "unit-testing": { deletions: 726, insertions: 939 },
    wsgi: { deletions: 35, insertions: 112 },
  },
};

function useUser() {
  return {
    user: userInfo,
    isLoading: false,
    error: null,
  };
}

function useUserSocial() {
  return {
    social: userSocial,
    isLoading: false,
  };
}

function useAllRepos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setRepos(allRepos);
    setLoading(false);
    return [repos, loading];
  }, []);
  return [repos, loading];
}

function useRepo(repo_name) {
  const [repo, setRepo] = useState({});
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setRepo(singleRepo);
      setLoading(false);
    }, 2000);
  }, []);
  return { repo, error: null, isLoading: isLoading };
}

function submitForm(formData) {}

function useStats() {
  return "stats";
}

module.exports = {
  useAllRepos,
  useRepo,
  useUserSocial,
  useUser,
};
