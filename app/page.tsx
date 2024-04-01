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
import { MUILink } from "./component/muilink";

const builderComponents = rSuiteComponents.map((c) => c.build());
const builderView = new BuilderView([...builderComponents, MUILink.build()])
  .withErrorMeta(rsErrorMessage.build())
  .withTooltipMeta(rsTooltip.build())
  .withViewerWrapper(RsLocalizationWrapper)
  .withCssLoader(BiDi.LTR, ltrCssLoader)
  .withCssLoader(BiDi.RTL, rtlCssLoader);

// const getForm = (_?: string) => JSON.stringify(SampleForm);

function App() {
  return <FormBuilder view={builderView} />;
}

export default App;
