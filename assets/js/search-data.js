// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Here comes the list of my publications.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "I have been the teaching assistant for the following courses.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-successfully-defended-ph-d-thesis-approximate-computing-techniques-from-logic-synthesis-to-deep-learning",
          title: 'Successfully defended Ph.D. thesis Approximate Computing Techniques: From Logic Synthesis to Deep Learning....',
          description: "",
          section: "News",},{id: "news-by-co-author-manar-abdelatty-presented-our-work-metrex-a-benchmark-for-verilog-code-metric-reasoning-using-llms-at-the-asia-and-south-pacific-design-automation-conference-aspdac-25",
          title: '(By co-author Manar Abdelatty) Presented our work MetRex: A Benchmark for Verilog Code...',
          description: "",
          section: "News",},{id: "news-received-ph-d-in-engineering-from-the-school-of-engineering-brown-university",
          title: 'Received Ph.D. in Engineering from the School of Engineering, Brown University.',
          description: "",
          section: "News",},{id: "news-presented-my-work-ff-int8-efficient-forward-forward-dnn-training-on-edge-devices-with-int8-precision-at-the-design-automation-conference-dac-25",
          title: 'Presented my work FF-INT8: Efficient Forward-Forward DNN Training on Edge Devices with INT8...',
          description: "",
          section: "News",},{id: "projects-large-scale-approximate-computing",
          title: 'Large-scale Approximate Computing',
          description: "Approximate logic synthesis using Boolean Matrix Factorization",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_research.html";
            },},{id: "projects-hardware-metric-reasoning-using-llms",
          title: 'Hardware Metric Reasoning using LLMs',
          description: "A benchmark for Verilog code metric reasoning using fine-tuned Large Language Models (LLMs)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_research.html";
            },},{id: "projects-low-precision-training-of-deep-neural-network",
          title: 'Low-Precision Training of Deep Neural Network',
          description: "An INT8-quantized training framework built upon the Forward-Forward algorithm, enabling efficient and memory-light deep learning training on resource-constrained edge devices",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_research.html";
            },},{id: "projects-dynamic-neural-network-with-weight-enabling-scheme",
          title: 'Dynamic Neural Network with Weight-Enabling Scheme',
          description: "A dynamic neural network framework that adaptively enables or disables weights during inference to balance accuracy and efficiency",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_research.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%69%6E%67%78%69%61%6F_%6D%61@%62%72%6F%77%6E.%65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jingxiao-ma", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-4916-4033", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=_VBt3aYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://scale-lab.github.io/pages/jingxiao.html", "_blank");
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
