# Kalamo Agent Workflow

Use this lightweight council for meaningful product changes. Do not use it for tiny fixes unless the user asks.

## Roles

- Content Lead: lesson quality, curriculum sequencing, Arabic examples, quizzes, vocabulary discipline.
- Experience Lead: UI/UX, mobile ergonomics, learner motivation, accessibility, visual consistency.
- QA Lead: validation, regressions, unlock flow, browser checks, pre-push readiness.

## When To Use Each Role

- Adding a new lesson: Content Lead + QA Lead.
- Changing lesson UI or reading UI: Experience Lead + QA Lead.
- Building a major feature: all three.
- Pre-push review: QA Lead always.
- Public copy, SEO, or launch messaging: add a temporary Marketing lens only when needed.

## Operating Rule

The main implementer owns the final decision. Agents provide specialist review and concrete recommendations; they do not create separate product directions.

Keep outputs short and actionable:

1. Findings or recommendations.
2. Specific files/areas affected.
3. Must-fix items before shipping.
4. Nice-to-have ideas for later.

## Default Session Flow

1. Read `GUIDELINES.md` and the relevant role brief.
2. Inspect the current code/content before suggesting changes.
3. Make scoped changes using existing project patterns.
4. Run `node scripts/validate-lessons.js` when lesson content changes.
5. Run syntax checks for changed JavaScript files.
6. Summarize what changed, what was verified, and what remains.

## Guardrails

- Do not add process for its own sake.
- Do not block small improvements behind council review.
- Do not invent new architecture when the static HTML/CSS/JS model is enough.
- Do not let role feedback override the project constraints in `GUIDELINES.md`.
- Batch meaningful changes into clean commits.
