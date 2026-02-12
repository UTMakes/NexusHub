import React from 'react';
import { Terminal, Shield, Cloud, Database, Code, Activity, Layout, Cpu } from 'lucide-react';

export const CATEGORIES = ["All", "DevOps", "Security", "Productivity", "Data Tools", "Testing", "Frontend"];

export const SOFTWARE_DATA = [
  {
    id: 1,
    name: "DevSync",
    description: "Real-time collaboration and state synchronization tool for distributed development teams.",
    category: "Productivity",
    icon: <Terminal className="w-6 h-6 text-emerald-400" />,
    stars: "1.2k",
    starCount: 1200,
    version: "v2.4.1",
    tags: ["Collaboration", "Real-time"],
    command: "npm install @nexus/devsync",
    author: "NexusOS Core",
    status: "online"
  },
  {
    id: 2,
    name: "CodeGuard",
    description: "Automated vulnerability scanning and dependency tracking for your CI/CD pipeline.",
    category: "Security",
    icon: <Shield className="w-6 h-6 text-cyan-400" />,
    stars: "850",
    starCount: 850,
    version: "v1.1.0",
    tags: ["SAST", "Security"],
    command: "npm install -g codeguard-cli",
    author: "SecureDev",
    status: "active"
  },
  // ... more items would go here in a real app
];
