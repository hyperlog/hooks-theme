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

let allProjects = [
  {
    slug: "sample-project-3FWGFyeqG2Ch",
    name: "Sample Project",
    tagline: "A sample project",
    description: "",
    icon:
      "https://avatars.githubusercontent.com/u/37668193?u=d82557c244492c497a6ffb25a9d77d0afa8d01cd&v=4",
    repos: [
      {
        id: "6ed37847-6114-4477-9aea-7df2ff19b927",
        full_name: "nikochiko/who-came-by-telegram-bot",
        repo_analysis:
          '{"fork": false, "name": "who-came-by-telegram-bot", "size": 611, "owner": "nikochiko", "private": false, "archived": false, "homepage": null, "html_url": "https://github.com/nikochiko/who-came-by-telegram-bot", "language": "JavaScript", "full_name": "nikochiko/who-came-by-telegram-bot", "languages": [{"id": "JavaScript", "color": "hsl(53,84.4%,64.9%)", "label": "JavaScript", "value": 1128}], "pushed_at": "2020-06-30T05:56:13.000Z", "created_at": "2020-06-30T05:27:51.000Z", "fetched_at": "2021-01-28T20:16:13.032Z", "updated_at": "2020-06-30T05:56:15.000Z", "description": "A Telegram bot to alert you of messages from a text box on your website", "contributors": {"nikochiko": 4}, "owner_avatar": "https://avatars.githubusercontent.com/u/37668193?u=d82557c244492c497a6ffb25a9d77d0afa8d01cd&v=4", "default_branch": "master", "stargazers_count": 0, "insignificant_repo": true}',
      },
    ],
  },
  {
    slug: "hello-world-3TJNsjQjDDcT",
    name: "Hello World",
    tagline: "example tagline",
    description: "Sample description",
    icon:
      "https://avatars.githubusercontent.com/u/37668193?u=d82557c244492c497a6ffb25a9d77d0afa8d01cd&v=4",
    repos: [
      {
        id: "ebb2e6f7-e442-447d-b377-4ff8868e163c",
        full_name: "nikochiko/df-wizard-chess",
        repo_analysis:
          '{"fork": false, "name": "df-wizard-chess", "size": 77751, "owner": "nikochiko", "license": {"key": "gpl-3.0", "url": "http://choosealicense.com/licenses/gpl-3.0/", "name": "GNU General Public License v3.0", "node_id": "MDc6TGljZW5zZTk=", "spdx_id": "GPL-3.0"}, "private": false, "archived": false, "homepage": "https://df-wizardchess.herokuapp.com", "html_url": "https://github.com/nikochiko/df-wizard-chess", "language": "Python", "full_name": "nikochiko/df-wizard-chess", "languages": [{"id": "Python", "color": "hsl(207,51.4%,42.7%)", "label": "Python", "value": 143899}, {"id": "Shell", "color": "hsl(97,69.8%,59.8%)", "label": "Shell", "value": 174}], "pushed_at": "2021-01-25T23:38:16.000Z", "created_at": "2020-04-27T11:14:48.000Z", "fetched_at": "2021-01-28T20:16:13.029Z", "updated_at": "2021-01-08T04:39:21.000Z", "description": " \\ud83e\\uddd9 Dialogflow fulfillment for Wizard Chess", "contributors": {"nikochiko": 96, "dependabot-preview[bot]": 25}, "owner_avatar": "https://avatars.githubusercontent.com/u/37668193?u=d82557c244492c497a6ffb25a9d77d0afa8d01cd&v=4", "default_branch": "master", "stargazers_count": 11, "insignificant_repo": false}',
      },
    ],
  },
];

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

function useUserSocial() {
  const [social, setSocial] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSocial(userSocial);
      setIsLoading(false);
    }, 2000);
  }, []);

  return {
    social,
    isLoading,
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
