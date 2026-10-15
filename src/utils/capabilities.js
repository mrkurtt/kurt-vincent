/** Skills from the current resume, grouped the way that resume groups them. */
export const capabilities = [
  {
    domain: "Backend Engineering",
    items: [
      "TypeScript",
      "Node.js",
      "NestJS",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "Microservices",
    ],
    note: "NestJS and Express services for KourtSuite, Timpla, and Joesons, plus NestJS, GraphQL, and microservices at ScaleForge.",
  },
  {
    domain: "Databases and Data Workflows",
    items: [
      "MongoDB",
      "SQL",
      "Data modeling",
      "Aggregation pipelines",
      "Database migrations",
      "Reporting workflows",
    ],
    note: "MongoDB for the three production products. Aggregation pipelines and reporting also show up in the ScaleForge Gross Gaming Revenue work.",
  },
  {
    domain: "Cloud and Infrastructure",
    items: ["Google Cloud Run", "AWS EC2", "Docker", "Cloud deployment"],
    note: "Cloud Run for the KourtSuite and Joesons APIs. Timpla ships with Docker on Google Cloud. AWS EC2 is part of the freelance deployment work.",
  },
  {
    domain: "DevOps and Automation",
    items: [
      "GitHub Actions",
      "CI/CD pipelines",
      "Automated deployments",
      "Production troubleshooting",
    ],
    note: "Used on the freelance backends where a pipeline was part of the deploy, and when tracing production issues after release.",
  },
  {
    domain: "Payments and Integrations",
    items: [
      "Xendit",
      "Payment status handling",
      "Webhooks",
      "OAuth 2.0",
      "Third-party APIs",
    ],
    note: "Xendit on KourtSuite. Timpla uses PayMongo and PayPal. ScaleForge work includes conversion tracking toward external advertising platforms.",
  },
  {
    domain: "Architecture",
    items: [
      "Event-driven architecture",
      "CQRS",
      "Event sourcing",
      "Third-party API integrations",
    ],
    note: "Applied on the ScaleForge backend. KourtSuite and Timpla are integration-heavy production systems on a smaller service boundary.",
  },
  {
    domain: "Frontend",
    items: ["React", "Next.js", "React Native", "Tailwind CSS", "Zustand"],
    note: "Next.js for the product sites and staff tools. React Native for Timpla and Joesons. Zustand on the Timpla staff portal.",
  },
  {
    domain: "Testing",
    items: ["Jest", "Vitest"],
    note: "Test tooling from the current resume, used alongside the TypeScript services above.",
  },
];
