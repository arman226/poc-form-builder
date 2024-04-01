# REACT FORM BUILDER PROOF OF CONCEPT IN NEXT JS

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) created for a proof of concept of an ongoing form builder tool using @react-form-builder

## Libraries Installation

<h1>React form builder:</h1>

```bash
npm install @react-form-builder/core @react-form-builder/designer @react-form-builder/components-rsuite
```

<h1>Material Ui</h1>

```bash
npm install @mui/material @emotion/react @emotion/styled
```

## Creation of Simple Instance

```js
"use client";
import {
  RsLocalizationWrapper,
  ltrCssLoader,
  rSuiteComponents,
  rsErrorMessage,
  rsTooltip,
  rtlCssLoader,
} from "@react-form-builder/components-rsuite";
import { BiDi } from "@react-form-builder/core";
import { BuilderView, FormBuilder } from "@react-form-builder/designer";

const builderComponents = rSuiteComponents.map((c) => c.build());
const builderView = new BuilderView(builderComponents)
  .withErrorMeta(rsErrorMessage.build())
  .withTooltipMeta(rsTooltip.build())
  .withViewerWrapper(RsLocalizationWrapper)
  .withCssLoader(BiDi.LTR, ltrCssLoader)
  .withCssLoader(BiDi.RTL, rtlCssLoader);

function App() {
  return <FormBuilder view={builderView} />;
}

export default App;
```

## Creation of MUILink Component definition

```js
import { Link } from "@mui/material";
import { define, event, oneOf, string } from "@react-form-builder/core";

export const MUILink = define(Link, "MuiLink")
  .name("Link")
  .props({
    children: string.named("Text").default("Link"),
    color: oneOf("primary", "inherit", "secobdary", "success"),
    underline: oneOf("none", "hover", "always"),
    href: string.named("Href").default(""),
    onClick: event,
  });
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
