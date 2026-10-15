import joesonsAutopartsImage from "../assets/projects/joesons.png";
import kourtsuiteImage from "../assets/projects/kourtsuite.png";
import timplaImage from "../assets/projects/timpla.png";

/**
 * Single source for project cards and case studies.
 * Add a public repo URL only when one exists. Mark metrics with estimate: true
 * unless they are measured. Do not add response times, uptime, or revenue
 * figures that are not already established.
 */
const studies = [
  {
    slug: "kourtsuite",
    title: "KourtSuite",
    role: "Freelance · sports venue SaaS",
    featured: true,
    oneLiner:
      "Architected and developed a production SaaS platform integrating court reservations, payment processing, POS, inventory, and staff operations.",
    description:
      "A white-label platform for court facilities: branded booking, staff operations, PH e-wallet checkout, and the money flows around them.",
    metaDescription:
      "Case study: KourtSuite, a sports venue SaaS for booking, payments, POS, and staff operations. NestJS, MongoDB, Next.js, and Cloud Run.",
    liveUrl: "https://kourtsuite.com",
    liveLabel: "kourtsuite.com",
    repoUrl: null,
    image: kourtsuiteImage,
    imageAlt:
      "KourtSuite venue dashboard showing booking operations, revenue over time, and court utilization.",
    imageWidth: 1920,
    imageHeight: 868,
    cardStack: [
      "TypeScript",
      "NestJS",
      "MongoDB",
      "Next.js",
      "Cloud Run",
      "Xendit",
    ],
    overview: {
      what: "KourtSuite is a sports venue management platform. Operators run court booking, payments, POS, inventory, and staff tools from one product. Players book through a branded portal on the venue’s own domain.",
      who: "Court and facility operators, their staff, and the players who book time. One codebase serves many venues.",
      status: "In production at kourtsuite.com.",
      context:
        "Operators needed more than a calendar: a branded booking site, staff tools for schedule, revenue, POS, and inventory, and GCash, Maya, and QRPh checkout with clear fee math. The platform also bills venues and pays out landing revenue without a separate codebase per venue.",
    },
    contributions: {
      summary:
        "I architected the platform and implemented the backend workflows below, including reservation management, payments, access control, and the Cloud Run deployment.",
      mine: [
        "Backend reservation and payment workflows, including pending booking holds and reconciliation with the payment provider.",
        "Role-based access control, with product feature flags kept separate from staff permission codes.",
        "Third-party payment integration with Xendit, behind a gateway adapter, and transactional email.",
        "POS, inventory, and staff operations on the same tenant and permission model as bookings.",
        "Production deployment of the NestJS API on Google Cloud Run.",
        "System design for the API and the three Next.js apps: backoffice, booking portal, and marketing site.",
      ],
    },
    diagram: {
      summary:
        "Players and staff use Next.js apps. Those apps call a NestJS API on Google Cloud Run. The API stores data in MongoDB and talks to Xendit, plus transactional email. The frontends are deployed on Netlify.",
      layers: [
        {
          name: "Clients",
          items: [
            "Next.js booking portal",
            "Next.js backoffice",
            "Next.js marketing site",
          ],
        },
        {
          name: "Backend",
          items: ["NestJS API"],
        },
        {
          name: "Data and services",
          items: ["MongoDB", "Xendit", "Transactional email"],
        },
        {
          name: "Infrastructure",
          items: ["Google Cloud Run", "Docker", "Netlify"],
        },
      ],
    },
    architecture: [
      {
        heading: "API",
        body: "NestJS on MongoDB. Modules cover tenants, auth, accounts, roles, permissions, bookings, rentals, payments, subscriptions, payouts, promos, gateway fees, invoices, notifications, and exports. POS and inventory use the same tenant context. Global guards enforce JWT, feature flags, and permission codes.",
      },
      {
        heading: "Frontends",
        body: "The backoffice serves tenant admins and superadmins. The booking portal resolves the tenant from the hostname and applies that venue’s theme. A separate marketing site presents the product. Clients share a feature-colocation layout and an SWR data layer.",
      },
      {
        heading: "Deploy",
        body: "The API runs on Google Cloud Run in asia-southeast1 from a Docker image built with Cloud Build. Frontends deploy to Netlify. The service exposes health and readiness endpoints, writes structured logs, and validates config with Joi.",
      },
    ],
    challenges: [
      {
        heading: "Hostname-based white-label portals",
        body: "One booking-portal deploy resolves the tenant from the domain and injects the theme. Venues do not get a forked codebase.",
      },
      {
        heading: "Features versus permissions",
        body: "Product feature flags live on the tenant document. Staff access stays on JWT permission codes, so a product toggle and a person’s role do not get modeled as the same thing.",
      },
      {
        heading: "Pluggable payment gateways",
        body: "Xendit sits behind a gateway adapter. Ledger rows record which provider handled the charge, so cancel, refund, and sync stay tied to that charge.",
      },
      {
        heading: "Hold, then pay",
        body: "A booking is held in a pending state with a configurable timeout. A scheduled sweep releases holds that never finish e-wallet checkout, so a court is not left locked.",
      },
    ],
    outcomes: [
      {
        text: "Public production site at kourtsuite.com.",
        estimate: false,
      },
      {
        text: "₱200K+ in monthly transactions on the live Cloud Run deployment.",
        estimate: false,
      },
    ],
    stackGroups: [
      { label: "Backend", items: ["TypeScript", "Node.js", "NestJS"] },
      { label: "Clients", items: ["Next.js"] },
      { label: "Data", items: ["MongoDB"] },
      {
        label: "Integrations",
        items: ["Xendit", "Transactional email"],
      },
      {
        label: "Infrastructure",
        items: ["Docker", "Google Cloud Run", "Cloud Build", "Netlify"],
      },
    ],
  },
  {
    slug: "timpla",
    title: "Timpla.PH",
    role: "Freelance · meal-kit platform",
    featured: true,
    oneLiner:
      "Architected and developed a production ordering platform integrating customer-facing web and mobile applications with an administrative backoffice.",
    description:
      "Commerce and operations for a Philippine meal-kit brand: catalog, ingredient-based pricing, orders, payments, and a multi-role staff portal.",
    metaDescription:
      "Case study: Timpla, a meal-kit ordering platform with web, mobile, and an admin backoffice. Express, MongoDB, Next.js, and React Native.",
    liveUrl: "https://timpla.ph",
    liveLabel: "timpla.ph",
    repoUrl: null,
    image: timplaImage,
    imageAlt:
      "Timpla marketing page beside the meal-kit mobile app, showing weekly specials priced in Philippine pesos.",
    imageWidth: 1024,
    imageHeight: 464,
    cardStack: [
      "TypeScript",
      "Express",
      "MongoDB",
      "Next.js",
      "React Native",
      "Docker",
    ],
    overview: {
      what: "Timpla is a meal-kit ordering platform. Customers browse and order through the web and a React Native app. Staff run catalog, inventory, orders, promotions, and reporting in an administrative backoffice.",
      who: "A Philippine meal-kit brand, its customers, and staff across admin, warehouse, marketing, and accounting.",
      status: "In production at timpla.ph.",
      context:
        "The brand needed one system for customers and staff: recipe kits whose price tracks mart ingredient costs, inventory that stays consistent with those costs, local and international payments, and a portal for operations. The previous process was spreadsheets and chat orders.",
    },
    contributions: {
      summary:
        "I designed the platform from the Express API through the Next.js portal and the production deploy.",
      mine: [
        "Modular Express API and the domain model for catalog, mart, ordering, commerce, and sales snapshots.",
        "Dynamic pricing and serving customization: ingredient selections are priced in the API as the order is built.",
        "Order processing and PayMongo and PayPal integration.",
        "Staff-portal flows for catalog, orders, promotions, referrals, and sales reporting.",
        "Production backend services packaged with Docker and deployed on Google Cloud.",
      ],
    },
    diagram: {
      summary:
        "The customer website, React Native app, and staff portal call one Express API. The API uses MongoDB, PayMongo, PayPal, and S3. The API is packaged with Docker and runs on Google Cloud.",
      layers: [
        {
          name: "Clients",
          items: [
            "Next.js customer site",
            "React Native app",
            "Next.js staff portal",
          ],
        },
        {
          name: "Backend",
          items: ["Express.js API"],
        },
        {
          name: "Data and services",
          items: ["MongoDB", "PayMongo", "PayPal", "Amazon S3"],
        },
        {
          name: "Infrastructure",
          items: ["Docker", "Google Cloud"],
        },
      ],
    },
    architecture: [
      {
        heading: "API",
        body: "A modular Express and TypeScript monolith with domain folders for identity, catalog, mart, ordering, commerce, and operations. Newer modules use repository, service, and controller layers with Zod validation and tsyringe. Older, higher-churn modules still follow the earlier controller style and are migrated in place.",
      },
      {
        heading: "Clients",
        body: "The Next.js staff portal covers catalog, mart, orders, promos, referrals, sales insights, tickets, and superadmin analytics. It uses JWT auth, Zustand, and Socket.io so catalog changes reach open sessions. Customers use the marketing site and a React Native app, with push notifications from the API.",
      },
      {
        heading: "Data and ops",
        body: "MongoDB holds catalog, orders, and sales snapshots. S3 stores uploads, exports, and database backups. PayMongo and PayPal are the payment rails. The API ships as a Docker image on Google Cloud.",
      },
    ],
    challenges: [
      {
        heading: "Modular monolith over microservices",
        body: "One deployable API with explicit domain boundaries kept a small team moving, and left a documented path to extract a service later if a domain outgrew the process.",
      },
      {
        heading: "Price the kit from its ingredients",
        body: "A meal-kit price is composed from mart ingredient costs plus marketing, VAT, and markup. When ingredient costs change, checkout still shows a price that matches the mart.",
      },
      {
        heading: "Snapshots for sales reporting",
        body: "Financial rollups are written when an order is submitted. Reports read those snapshots instead of recomputing every line item on each request.",
      },
      {
        heading: "Layer the new code, leave the routes",
        body: "New modules ship on the repository and service standard. Older fat controllers are modernized behind the same routes, so the migration does not stall feature work.",
      },
    ],
    outcomes: [
      {
        text: "Public production site at timpla.ph, with customer web, a mobile app, and a staff backoffice.",
        estimate: false,
      },
    ],
    stackGroups: [
      {
        label: "Backend",
        items: ["TypeScript", "Node.js", "Express.js", "Socket.io"],
      },
      { label: "Clients", items: ["Next.js", "React Native"] },
      { label: "Data", items: ["MongoDB"] },
      { label: "Integrations", items: ["PayMongo", "PayPal"] },
      {
        label: "Infrastructure",
        items: ["Docker", "Google Cloud", "Amazon S3"],
      },
    ],
  },
  {
    slug: "joesons-autoparts",
    title: "Joesons Autoparts",
    role: "Freelance · e-commerce",
    featured: true,
    oneLiner:
      "Architected and developed a production e-commerce platform supporting end-to-end order processing, inventory management, fulfillment, and delivery workflows.",
    description:
      "An autoparts commerce platform: catalog and inventory, customer orders, and the staff workflows that fulfill and deliver them.",
    metaDescription:
      "Case study: Joesons Autoparts, an e-commerce platform for ordering, inventory, fulfillment, and delivery. NestJS, MongoDB, Next.js, and Cloud Run.",
    liveUrl: null,
    liveLabel: null,
    repoUrl: null,
    note: "Production",
    image: joesonsAutopartsImage,
    imageAlt: null,
    imageWidth: null,
    imageHeight: null,
    cardStack: [
      "TypeScript",
      "NestJS",
      "MongoDB",
      "Next.js",
      "React Native",
      "Cloud Run",
    ],
    overview: {
      what: "Joesons Autoparts is an e-commerce platform for the full order lifecycle: customer ordering, inventory, fulfillment, and delivery. Web and mobile clients share one backend.",
      who: "The autoparts business, the staff who manage stock and orders, and the customers who place those orders.",
      status: "In production. A public website is not listed for this project.",
      context:
        "The business needed ordering, inventory, fulfillment, and delivery in one system, with a website and a mobile app reading the same orders and stock.",
    },
    contributions: {
      summary:
        "I architected and developed the platform described here, including the backend, the client integration, and the Cloud Run deployment.",
      mine: [
        "Product data, inventory operations, and order management in the NestJS API.",
        "Administrative workflows for fulfillment and delivery, including payment methods shared by the web and mobile apps.",
        "A shared API for the Next.js web app and the React Native app.",
        "Backend deployment on Google Cloud Run.",
      ],
    },
    diagram: {
      summary:
        "The Next.js web app and the React Native app call a NestJS API. The API stores products, inventory, and orders in MongoDB. The API runs on Google Cloud Run.",
      layers: [
        {
          name: "Clients",
          items: ["Next.js web app", "React Native app"],
        },
        {
          name: "Backend",
          items: ["NestJS API"],
        },
        {
          name: "Data",
          items: ["MongoDB"],
        },
        {
          name: "Infrastructure",
          items: ["Google Cloud Run"],
        },
      ],
    },
    architecture: [
      {
        heading: "API",
        body: "A NestJS service owns the catalog, inventory, and order records. Administrative actions for stock, fulfillment, and delivery go through that service, as do customer orders.",
      },
      {
        heading: "Clients",
        body: "The Next.js app covers customer ordering and staff workflows. The React Native app uses the same API, so order and inventory rules stay on the server.",
      },
      {
        heading: "Deploy",
        body: "The backend is deployed on Google Cloud Run. Both clients point at that service.",
      },
    ],
    challenges: [
      {
        heading: "One lifecycle for the order",
        body: "Ordering, inventory, fulfillment, and delivery are handled in the NestJS API as one order flow. Staff actions and customer actions write the same order and stock data.",
      },
      {
        heading: "Web and mobile share the API",
        body: "The Next.js app and the React Native app both call the NestJS service. Catalog, inventory, and order behavior live in that service, so the two clients do not each grow their own copy.",
      },
      {
        heading: "Deploy the API on Cloud Run",
        body: "The NestJS service runs on Google Cloud Run. Web and mobile stay pointed at one hosted backend, and the service is deployed as a containerized Node application.",
      },
    ],
    outcomes: [
      {
        text: "Production platform covering ordering, inventory, fulfillment, and delivery.",
        estimate: false,
      },
      {
        text: "₱400K+ in monthly order value.",
        estimate: true,
      },
    ],
    stackGroups: [
      { label: "Backend", items: ["TypeScript", "Node.js", "NestJS"] },
      { label: "Clients", items: ["Next.js", "React Native"] },
      { label: "Data", items: ["MongoDB"] },
      { label: "Infrastructure", items: ["Google Cloud Run"] },
    ],
  },
];

/** Resume order: KourtSuite, Joesons Autoparts, Timpla.PH. */
const projectOrder = ["kourtsuite", "joesons-autoparts", "timpla"];

export const caseStudies = [...studies].sort(
  (a, b) => projectOrder.indexOf(a.slug) - projectOrder.indexOf(b.slug),
);

export const getCaseStudy = (slug) =>
  caseStudies.find((study) => study.slug === slug);

export const getAdjacentCaseStudies = (slug) => {
  const index = caseStudies.findIndex((study) => study.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? caseStudies[index - 1] : null,
    next: index < caseStudies.length - 1 ? caseStudies[index + 1] : null,
  };
};
