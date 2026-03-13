# Company Website Rebuild (OffshoreMitra)

This repository documents the complete process of rebuilding the OffshoreMitra company website using modern web technologies and AI-assisted development tools.

The goal is to transform the existing website into a modern, responsive, and scalable platform while maintaining all existing content and services.

---

# Project Goal

Rebuild the existing company website:

https://offshoremitra.com

Objectives:

* Modern UI/UX
* Faster performance
* Better SEO
* Interactive design
* Maintain existing content
* Deploy on Vercel

---

# Technology Stack

Frontend Framework

* Next.js

Language

* JavaScript

Styling

* Tailwind CSS

Development Environment

* Node.js

Code Editor

* VS Code

Version Control

* Git + GitHub

Deployment

* Vercel

AI Tools Used

* ChatGPT / Codex
* Vercel v0
* Gemini
* Figma

---

# Development Log

This section records every step used to build the project.

---

# STEP 0 — Install Development Environment

## Goal

Prepare the local machine for modern JavaScript web development.

Modern frameworks such as Next.js require Node.js to run locally.

---

## Software Installed

Node.js (LTS version)

Node.js provides the following tools:

node → JavaScript runtime
npm → package manager
npx → tool runner

---

## Installation

Download Node.js from the official website:

https://nodejs.org

Install the **LTS version**.

---

## Verification

Run the following commands in the terminal:

node -v

npm -v

npx -v

---

## Expected Output

Example:

node v20.x.x
npm 10.x.x
npx 10.x.x

---

## Result

The system is now ready to run modern JavaScript frameworks such as Next.js.



## Result

The Next.js development server started successfully.

Command used:

npm run dev

Server output:

Local: http://localhost:3000

The default Next.js starter page loaded correctly in the browser.

---

## What This Means

The development environment is now fully operational.

The system can now:

* run a local development server
* compile React components
* render pages
* support Tailwind CSS styling
* prepare the project for deployment to Vercel

---

## Next Step

The default Next.js template will be cleaned and reorganized to match a professional company website structure.

# STEP 2 — Project Architecture Setup

## Goal

Prepare a clean and scalable project structure suitable for a production company website.

The default Next.js template contains minimal files and is not structured for larger projects.

This step reorganizes the project to separate components, sections, assets, and styles.

---

## Why This Is Important

As the project grows, the number of files increases.

Without structure the codebase becomes difficult to maintain.

A clear architecture allows:

* easier debugging
* reusable components
* organized styling
* scalable development

---

## Target Project Structure

app
components
sections
styles
data
public

---

## Folder Purpose

components
Reusable UI elements such as buttons, cards, navigation bars, and footers.

sections
Large page sections such as Hero, Services, Testimonials, and Contact.

styles
Global styling and custom CSS.

data
Static data such as service descriptions or testimonials.

public
Images, icons, logos, and other static assets.

---

## Outcome

The project will now be structured like a real production website instead of the default Next.js template.

# STEP 3 — Homepage Skeleton

## Goal

Create the structural components required for the homepage.

Instead of writing all code in one file, the page will be composed of reusable components and sections.

---

## Sections Created

Hero
Services
WhyUs
Testimonials
CTA
Footer

---

## Components Created

Navbar

---

## Purpose

This modular structure allows the homepage to be built using reusable components, improving scalability and maintainability.

Each section will later contain its own layout and styling.
