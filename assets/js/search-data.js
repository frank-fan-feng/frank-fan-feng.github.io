// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-fan-feng",
    title: "Fan Feng",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-curriculum-vitae",
          title: "Curriculum Vitae",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-semi-supervised-learning-approach-to-handling-missing-data-in-predictive-analytics-received-best-paper-in-track-award-at-the-2024-pacific-asia-conference-on-information-systems-ho-chi-minh-city-vietnam",
          title: '“A semi-supervised learning approach to handling missing data in predictive analytics” received Best...',
          description: "",
          section: "News",},{id: "news-beijing-municipal-social-science-foundation-grant-on-generative-ai-and-supply-chain-resilience",
          title: 'Beijing Municipal Social Science Foundation Grant on generative AI and supply chain resilience...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-12-03-nsfc-grant/";
            },},{id: "news-climate-change-exposure-and-bankruptcy-risk-published-in-british-journal-of-management-was-recognized-as-an-esi-highly-cited-paper-in-march-2026",
          title: '“Climate change exposure and bankruptcy risk,” published in British Journal of Management, was...',
          description: "",
          section: "News",},{id: "projects-cornell-deft-lab-collaborations",
          title: 'Cornell DEFT Lab Collaborations',
          description: "Joint research with Cornell&#39;s Digital Economy and Financial Technology Lab on cross-border financing and marketplace design.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/deft-lab/";
            },},{id: "projects-machine-learning-amp-quantitative-investment",
          title: 'Machine Learning &amp;amp; Quantitative Investment',
          description: "Graduate course launching at ZUEL to connect modern ML methods with institutional investing.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ml-quant-course/";
            },},{id: "projects-tokenomics-and-risk-spillovers",
          title: 'Tokenomics and Risk Spillovers',
          description: "National Natural Science Foundation project investigating how platform tokens transmit risk into traditional markets.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tokenomics-risk/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/weiyi_zhao_cv.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%77%65%69%79%69_%7A%68%61%6F@%7A%75%65%6C.%65%64%75.%63%6E", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=N5HhtJYAAAAJ&hl=en", "_blank");
        },
      },{
        id: 'social-ssrn_id',
        title: 'Ssrn_id',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
