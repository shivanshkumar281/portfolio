export const myProjects = [
  {
    id: 1,
    title: "Adaptive Hashing — AI-Enhanced File Integrity Monitoring",
    description:
      "M.Tech thesis at IIT Patna (Research Paper Submitted): a host-based File Integrity Monitoring (FIM) agent that replaces O(N) periodic full-scan hashing with an O(K) event-driven streaming-hash pipeline, projected at a 2,000x reduction in hash computations and sub-5 second detection on a 10M-file server.",
    subDescription: [
      "Architected an event-driven pipeline: inotify / FSEvents / ReadDirectoryChangesW -> metadata filter -> streaming SHA-256 -> Isolation Forest anomaly classifier on 12 behavioral features.",
      "Designed an adaptive hashing strategy that processes only changed files, achieving ~50MB constant memory footprint independent of total file count on the monitored server.",
      "Trained an Isolation Forest model on temporal, structural, and behavioral features to flag stealth tampering and defeat timestomping attacks (MITRE ATT&CK T1070.006).",
      "Built the prototype in Python (asyncio) with the watchdog library, scikit-learn for ML inference, and PostgreSQL for event/state persistence.",
    ],
    href: "https://github.com/shivanshkumar281",
    logo: "",
    image: "/assets/projects/adaptive-hashing.svg",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "scikit-learn",
        path: "/assets/logos/python.svg",
      },
      {
        id: 3,
        name: "PostgreSQL",
        path: "/assets/logos/postgresql.svg",
      },
      {
        id: 4,
        name: "SHA-256",
        path: "/assets/logos/git.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Grocery Delivery E-Commerce Platform",
    description:
      "Full-stack MERN e-commerce platform with a responsive React + Tailwind storefront, admin and seller portals, Node/Express REST APIs over MongoDB, and Stripe payment integration. Deployed on Vercel.",
    subDescription: [
      "Developed a responsive React.js + Tailwind CSS storefront with product browsing, cart, ordering, and a seamless checkout user experience.",
      "Built a secure admin and seller portal with dynamic product management and Stripe-based online payments.",
      "Designed Node.js / Express.js RESTful APIs for users, orders, and products, backed by MongoDB for persistent storage.",
      "Containerized the build and deployed the application on Vercel for public access.",
    ],
    href: "https://github.com/shivanshkumar281/grocery-ecommerce-app",
    logo: "",
    image: "/assets/projects/freshcart.jpg",
    tags: [
      {
        id: 1,
        name: "MongoDB",
        path: "/assets/logos/mongodb.svg",
      },
      {
        id: 2,
        name: "Express.js",
        path: "/assets/logos/nodejs.svg",
      },
      {
        id: 3,
        name: "React.js",
        path: "/assets/logos/react.svg",
      },
      {
        id: 4,
        name: "Node.js",
        path: "/assets/logos/nodejs.svg",
      },
      {
        id: 5,
        name: "Stripe",
        path: "/assets/logos/stripe.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/shivanshkumar281",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "GitHub",
    href: "https://github.com/shivanshkumar281",
    icon: "/assets/logos/github.svg",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/918860669917",
    icon: "/assets/socials/whatsApp.svg",
  },
];

export const experiences = [
  {
    title: "Software Engineer Intern",
    job: "Warner Bros. Discovery — CaptionAI / CDL Data Platform",
    date: "Sep 2025 — Jul 2026",
    contents: [
      "Architected and shipped end-to-end MD5 checksum verification across three production S3 <-> GCS transport boundaries in Go microservices via streaming io.TeeReader pipelines — eliminated a tamper-detection gap on 100% of caption/translation asset transfers and reduced peak memory from 500MB+ to a constant ~8KB.",
      "Engineered a reusable Proto-Field Validation framework with a source-language consistency rule across three Go ingest microservices — patched a proto3-optional pointer-nil presence-check defect spanning 3 code paths and added DB-side prerequisite validation that prevents malformed translation requests from triggering orphaned Airflow DAG runs downstream.",
      "Architected and launched a containerized Operational Tools platform migrating 25+ legacy maintenance scripts off shared VMs onto IAM-isolated Cloud Run Jobs with per-tool service accounts, column-level Cloud SQL grants, and just-in-time Privileged Access Manager-gated production execution — eliminated 100% of standing engineer access to production databases via a code-reviewed, audited execution model.",
      "Delivered EMT translation pipeline features in Go across gcp-ingest and gcp-delivery microservices (demand routing, v3 multi-file delivery, status flows, producer=MERLIN tagging across V1/V2); shipped non-inventory feedback support for Scripting/EMT/Translation (new schema, validators, status routing).",
      "Automated operational reliability: migrated Cloud SQL Proxy to a security-hardened image; built a 16-step Python data-reconciliation backfill (parallel GCS scans, batched idempotent inserts, dry-run + snapshots) reconciling 5 PostgreSQL tables across DEV/INT/PROD; engineered a cross-VPC private-IP schema-diff CLI; integrated Slack alerting.",
      "Owned end-to-end development of Merlin UI (Python/Taipy internal tool used daily by Global Content Operations for AI captioning/translation/scripting workflows on WBD's streaming catalog): shipped Translation/EMT feedback pages, bulk-GCS-URI upload, journey-completion notifications; designed and launched two business-facing Looker dashboards (LookML) with GT-vs-ML quality splits.",
    ],
  },
  {
    title: "Teaching Assistant (GATE — CSE)",
    job: "Dazzling Career GATE Coaching",
    date: "2024 — 2025",
    contents: [
      "Conducted doubt-solving sessions for GATE Computer Science aspirants on Data Structures, Algorithms, OS, DBMS, and Computer Networks.",
      "Created and delivered video-recorded solutions for 15 years of GATE CSE previous year questions, breaking down problem-solving strategies and core concepts.",
      "Designed personalized preparation strategies for aspirants based on their progress, strengths, and remaining time to the exam.",
      "Helped students build conceptual clarity and exam readiness through targeted discussions and analytical approaches.",
    ],
  },
];

export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
