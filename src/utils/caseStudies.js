import timplaImage from "../assets/projects/timpla.png";
import kourtsuiteImage from "../assets/projects/kourtsuite.png";
import ordlabspayImage from "../assets/projects/ordlabspay.png";

export const caseStudies = [
  {
    slug: "timpla",
    title: "Timpla",
    role: "Independent · designed from scratch",
    oneLiner:
      "Meal-kit and mart operations platform for a real Philippine food brand.",
    description:
      "End-to-end commerce and ops: catalog, inventory-driven pricing, orders, dual payments, promotions, sales reporting, and a multi-role staff portal.",
    liveUrl: "https://timpla.ph",
    liveLabel: "timpla.ph",
    image: timplaImage,
    stack: [
      "TypeScript",
      "Express",
      "Next.js",
      "MongoDB",
      "PayMongo",
      "PayPal",
      "Socket.io",
      "AWS EC2",
      "S3",
    ],
    problem: {
      title: "Problem",
      body: "A meal-kit brand needed one system for customers and staff: recipe kits whose price tracks mart ingredient costs, inventory that stays consistent, PH and international payments, and a portal for admin, warehouse, marketing, and accounting — not a pile of spreadsheets and chat orders.",
    },
    owned: {
      title: "What I owned",
      items: [
        "Architecture from modular Express API through Next.js portal and production ops on EC2/PM2.",
        "Domain design for catalog, mart, ordering, commerce, and sales snapshots.",
        "Standards and mentoring for the 3-developer team — reviews, pairing, and a layered DI migration path.",
      ],
    },
    architecture: {
      title: "Architecture",
      sections: [
        {
          heading: "API",
          body: "Modular Express/TypeScript monolith with domain folders (identity, catalog, mart, ordering, commerce, operations). Newer modules use repository → service → controller with Zod and tsyringe DI; high-churn domains still migrate incrementally.",
        },
        {
          heading: "Portal",
          body: "Next.js App Router staff portal for catalog, mart, orders, promos, referrals, sales insights, tickets, and superadmin analytics — JWT auth, Zustand, Socket.io for realtime catalog sync.",
        },
        {
          heading: "Ops",
          body: "MongoDB Atlas, S3 uploads and exports, daily mongodump backups to S3, PayMongo and PayPal rails, Expo push for the customer app.",
        },
      ],
    },
    decisions: {
      title: "Decisions",
      items: [
        {
          heading: "Modular monolith over microservices",
          body: "One deployable API with clear domain boundaries kept velocity high for a small team while leaving a documented extraction path.",
        },
        {
          heading: "Composition-based meal-kit pricing",
          body: "Kit price rolls up from mart ingredient costs plus marketing, VAT, and markup so inventory changes stay truthful at checkout.",
        },
        {
          heading: "Sales snapshots as reporting CQRS-lite",
          body: "Financial rollups persist on order submit so reports do not recompute from raw line items under load.",
        },
        {
          heading: "Layered DI as a migration, not a rewrite",
          body: "New modules ship on the repository/service standard while legacy fat controllers modernize behind the same routes.",
        },
      ],
    },
  },
  {
    slug: "kourtsuite",
    title: "KourtSuite",
    role: "Independent · designed from scratch",
    oneLiner:
      "White-label multi-tenant SaaS for court facility booking and operations.",
    description:
      "Branded public booking portals, admin and superadmin backoffice, PH e-wallet checkout, revenue and payouts, promos, and platform SaaS billing — one product system across four apps.",
    liveUrl: "https://kourtsuite.com",
    liveLabel: "kourtsuite.com",
    image: kourtsuiteImage,
    stack: [
      "TypeScript",
      "NestJS",
      "Next.js",
      "MongoDB",
      "Xendit",
      "Ordlabs Pay",
      "Cloud Run",
      "Netlify",
    ],
    problem: {
      title: "Problem",
      body: "Court operators needed more than a calendar: a branded booking site on their own domain, staff tools for schedule and revenue, GCash/Maya/QRPh checkout with clear fee math, and a platform that can bill venues while paying out landing revenue — without a separate codebase per venue.",
    },
    owned: {
      title: "What I owned",
      items: [
        "System design for NestJS API plus three Next.js apps (backoffice, booking portal, marketing).",
        "Multi-tenancy, RBAC, feature flags, and money flows: player checkout, SaaS subscriptions, and operator payouts.",
        "Engineering standards, Gherkin specs, and mentoring for the 3-developer team shipping against that architecture.",
      ],
    },
    architecture: {
      title: "Architecture",
      sections: [
        {
          heading: "API",
          body: "NestJS modular backend on MongoDB — tenants, auth, accounts/roles/permissions, bookings, rentals, payments, subscriptions, payouts, promos, gateway fees, invoices, notifications, exports. Global guards for JWT, features, and permissions.",
        },
        {
          heading: "Frontends",
          body: "Backoffice for tenant admin and superadmin; hostname-based booking portal that themes per tenant; public marketing site. Shared feature-colocation patterns and SWR data layer.",
        },
        {
          heading: "Deploy",
          body: "API on Google Cloud Run (asia-southeast1) via Docker and Cloud Build; frontends on Netlify. Health/ready endpoints, structured logging, and Joi-validated config.",
        },
      ],
    },
    decisions: {
      title: "Decisions",
      items: [
        {
          heading: "Hostname-based white-label portals",
          body: "One booking-portal deploy resolves tenant by domain and injects theme — no per-venue fork.",
        },
        {
          heading: "Features vs permissions",
          body: "Product feature flags live on the tenant document; RBAC stays on JWT permission codes so product toggles and staff access do not collide.",
        },
        {
          heading: "Pluggable payment gateways",
          body: "Xendit or Ordlabs Pay via DI adapters; ledger rows remember provider so cancel, refund, and sync stay consistent.",
        },
        {
          heading: "Hold-then-pay bookings",
          body: "Pending holds with configurable timeout and a cron sweep protect inventory while players finish e-wallet checkout.",
        },
      ],
    },
  },
  {
    slug: "ordlabspay",
    title: "Ordlabs Pay",
    role: "Independent · designed from scratch",
    oneLiner:
      "Production payments hub so multiple SaaS apps can share one Xendit account safely.",
    description:
      "Ledger-first payment requests, HMAC-signed webhook fan-out with retries, homegrown subscriptions, hashed API keys, and a superadmin operator console.",
    liveUrl: null,
    liveLabel: null,
    note: "Production",
    image: ordlabspayImage,
    stack: [
      "TypeScript",
      "NestJS",
      "Next.js",
      "MongoDB",
      "Xendit",
      "Cloud Run",
      "Netlify",
    ],
    problem: {
      title: "Problem",
      body: "Xendit allows one webhook URL per account. Multiple Ordlabs SaaS products cannot each own that endpoint. They needed a hub that owns the shared ledger and inbound webhook, then fans out signed events to each registered app — plus recurring billing without bolting a second PSP onto every product.",
    },
    owned: {
      title: "What I owned",
      items: [
        "Hub architecture: apps, payments, deliveries, subscriptions, and credential model.",
        "Security and reliability: peppered API keys, timing-safe compares, HMAC deliveries with backoff, ledger-first create and sync fallback.",
        "Operator console, in-console integration docs, and mentoring the 3-developer team on the Nest/Next platform pattern shared with KourtSuite.",
      ],
    },
    architecture: {
      title: "Architecture",
      sections: [
        {
          heading: "Hub API",
          body: "NestJS service: SaaS apps authenticate with API keys; superadmins with JWT. Payments create a PENDING ledger row, submit to Xendit, then reconcile via webhook or sync. Deliveries sign and retry outbound callbacks.",
        },
        {
          heading: "Subscriptions",
          body: "Homegrown cycle engine on top of payment requests — checkout vs saved-method paths, minute cron for due cycles, webhook metadata linking payment to subscription and cycle.",
        },
        {
          heading: "Console",
          body: "Next.js superadmin for apps, payments, subscriptions, webhook logs, and merchant-facing integration docs. API on Cloud Run; console on Netlify.",
        },
      ],
    },
    decisions: {
      title: "Decisions",
      items: [
        {
          heading: "Ledger-first, then gateway",
          body: "Persist PENDING before calling Xendit so uniqueness, audits, and sync have a source of truth even when the PSP is slow.",
        },
        {
          heading: "HMAC fan-out with backoff",
          body: "One inbound Xendit webhook; many outbound signed deliveries with claim locking and exponential retries so apps stay idempotent consumers.",
        },
        {
          heading: "Gateway adapter with room to grow",
          body: "IPaymentGateway interface with Xendit live and PayMongo reserved — products talk to Pay, not to a single PSP SDK.",
        },
        {
          heading: "Homegrown subscriptions",
          body: "Recurring billing as first-class cycles on the hub, not a thin wrapper around a PSP recurring product that does not fit PH e-wallet constraints.",
        },
      ],
    },
  },
];

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
