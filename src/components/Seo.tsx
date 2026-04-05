import { useEffect } from "react";

type SeoProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string;
  noIndex?: boolean;
  schema?: Record<string, unknown> | Record<string, unknown>[];
};

const SITE_NAME = "TAB Technical Services";
const SITE_URL = "https://www.tabtechnicalservices.com";

const upsertMeta = (selector: string, attributes: Record<string, string>) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
};

const upsertLink = (selector: string, attributes: Record<string, string>) => {
  let element = document.head.querySelector<HTMLLinkElement>(selector);

  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
};

const Seo = ({ title, description, path = "/", image, keywords, noIndex = false, schema }: SeoProps) => {
  useEffect(() => {
    const canonicalUrl = new URL(path, SITE_URL).toString();
    const resolvedImage = image ?? `${SITE_URL}/image/favicon.ico`;
    const fullTitle = `${title} | ${SITE_NAME}`;

    document.title = fullTitle;

    upsertMeta('meta[name="description"]', { name: "description", content: description });
    upsertMeta('meta[name="keywords"]', { name: "keywords", content: keywords ?? "" });
    upsertMeta('meta[name="robots"]', { name: "robots", content: noIndex ? "noindex, nofollow" : "index, follow" });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: fullTitle });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: description });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: canonicalUrl });
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: resolvedImage });
    upsertMeta('meta[property="og:site_name"]', { property: "og:site_name", content: SITE_NAME });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: fullTitle });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description });
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: resolvedImage });
    upsertLink('link[rel="canonical"]', { rel: "canonical", href: canonicalUrl });

    const schemaElementId = "app-seo-schema";
    const existingSchema = document.getElementById(schemaElementId);
    if (existingSchema) {
      existingSchema.remove();
    }

    if (schema) {
      const schemaScript = document.createElement("script");
      schemaScript.id = schemaElementId;
      schemaScript.type = "application/ld+json";
      schemaScript.textContent = JSON.stringify(schema);
      document.head.appendChild(schemaScript);
    }

    return () => {
      const liveSchema = document.getElementById(schemaElementId);
      if (liveSchema) {
        liveSchema.remove();
      }
    };
  }, [description, image, keywords, noIndex, path, schema, title]);

  return null;
};

export default Seo;
