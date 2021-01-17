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
    repo_name: "movie-review",
    description: "This is sample repo description",
    repo_full_name: "BrainBuzzer/movie-review",
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
  size: "192",
  created_at: "2018-05-12T06:33:59.000Z",
  owner_avatar:
    "https://avatars0.githubusercontent.com/u/10351046?u=e537ee0f7b38fc89668dc1d36b4fbcbde6240bc2&v=4",
  full_name: "BrainBuzzer/movie-review",
  html_url: "https://github.com/BrainBuzzer/movie-review",
  name: "movie-review",
  languages: [
    { id: "HTML", label: "HTML", color: "hsl(12,77.1%,52%)", value: "1597" },
    {
      id: "JavaScript",
      label: "JavaScript",
      color: "hsl(53,84.4%,64.9%)",
      value: "29501",
    },
    { id: "CSS", label: "CSS", color: "hsl(264,34.1%,36.3%)", value: "5942" },
  ],
  archived: false,
  default_branch: "master",
  homepage: null,
  owner: "BrainBuzzer",
  commits: {
    last_fetched_commit: {
      date: "2018-05-17T08:19:47.000Z",
      sha: "5511093008d198133033d4d85c8bc9a0aeb1a3d2",
    },
    contributors: {
      BrainBuzzer: {
        totalAdditions: "22869",
        days: {
          "2018-05-17": { additions: "3148", deletions: "2444" },
          "2018-05-12": { additions: "19721", deletions: "0" },
        },
        totalDeletions: "2444",
      },
    },
  },
  description: "React/Redux based movie review app",
  pushed_at: "2018-05-17T08:21:05.000Z",
  contributors: { BrainBuzzer: "2" },
  stargazers_count: "0",
  tech_stack: {
    libs: {
      "js.react": { deletions: 3, insertions: 191 },
      "js.redux": { deletions: 1, insertions: 22 },
      "js.react-redux": { deletions: 3, insertions: 168 },
    },
    tags: {
      "ui-framework": { deletions: 3, insertions: 191 },
      "state-management": { deletions: 4, insertions: 190 },
    },
    tech: { "javascript-web": { deletions: 7, insertions: 381 } },
  },
};

function useUser() {
  useEffect(() => {
    setTimeout(
      () => ({
        user: userInfo,
        isLoading: true,
        error: null,
      }),
      2000
    );
  }, []);
  return {
    user: {},
    isLoading: true,
    error: null,
  };
}

function useUserSocial() {
  useEffect(() => {
    setTimeout(
      () => ({
        social: userSocial,
        isLoading: false,
      }),
      2000
    );
  }, []);

  return {
    social: userSocial,
    isLoading: true,
  };
}

function useAllRepos() {
  const [repos, setRepos] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setRepos(allRepos);
    setLoading(false);
    return { repos, isLoading };
  }, []);
  return { repos, isLoading };
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
