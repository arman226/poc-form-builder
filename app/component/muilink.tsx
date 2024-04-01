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
