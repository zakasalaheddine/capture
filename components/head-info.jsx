import Head from "next/head";
export default function HeadInfo({
  title,
  description = "Capture, Project made with Next JS and Framer Motion",
}) {
  return (
    <Head>
      <title>{title && `${title} | `}Capture</title>
      <meta
        name="description"
        content={description}
      />
      <meta name="robots" content="index, follow" />
    </Head>
  );
}
