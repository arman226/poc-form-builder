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

Trying to add Material Ui Component as a draggable component

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

## Adding the Created Compnoent Definition to the form builder

```js
//...other imports
import { MUILink } from "./component/muilink";

const builderView = new BuilderView([...builderComponents, MUILink.build()]);
//..other file contents
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
