import { useEffect } from "react";

interface SEOProps {
  title: string;
  description?: string;
  canonicalPath?: string;
}

const SEO = ({ title, description, canonicalPath }: SEOProps) => {
  useEffect(() => {
    document.title = title;

    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'description');
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', description);
    }

    // Canonical tag
    const canonicalHref = canonicalPath
      ? `${window.location.origin}${canonicalPath}`
      : window.location.href;
    let link: HTMLLinkElement | null = document.querySelector(
      'link[rel="canonical"]'
    );
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', canonicalHref);
  }, [title, description, canonicalPath]);

  return null;
};

export default SEO;
