import { headers } from "next/headers";

const Url = () => {
  const headersList = headers();
  const domain = headersList.get("host") || "";
  const fullUrl = headersList.get("referer") || "";

  console.log("url", fullUrl);
  return fullUrl;
};

export default Url;
