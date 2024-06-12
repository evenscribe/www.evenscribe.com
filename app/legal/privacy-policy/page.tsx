import { Legal } from "@/components/privacy-policy";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Evenscribe",
  description:
    "Privacy Policy for Evenscribe. Learn how we collect, use, and protect your data.",
  keywords: ["evenscribe", "privacy policy", "terms of services", "support"],
};

const data = [
  {
    title: "Changes to This Privacy Policy",
    description:
      "We may update this Privacy Policy from time to time, including to reflect changes to our practices or for other operational, legal, or regulatory reasons. We will post the revised Privacy Policy on the Site, update the 'Last updated' date and take any other steps required by applicable law.",
  },
  {
    title: "How We Collect and Use Your Personal Information",
    description:
      "To provide the Services, we collect and have collected over the past 12 months personal information about you from a variety of sources, as set out below. The information that we collect and use varies depending on how you interact with us. We may use information we collect about you to communicate with you, provide the Services, comply with any applicable legal obligations, enforce any applicable terms of service, and to protect or defend the Services, our rights, and the rights of our users or others.",
  },
  {
    title: "What Personal Information We Collect",
    description:
      "The types of personal information we obtain about you depends on how you interact with our Site and use our Services. 'Personal information' refers to information that identifies, relates to, describes or can be associated with you. The following sections describe the categories and specific types of personal information we collect.",
  },
  {
    title: "Information We Collect Directly from You",
    description:
      "Information that you directly submit to us through our Services may include: Basic contact details including your name, address, phone number, email; Order information including your name, billing address, shipping address, payment confirmation, email address, phone number; Account information including your username, password, security questions; Shopping information including the items you view, put in your cart or add to your wishlist; Customer support information including the information you choose to include in communications with us. Some features of the Services may require you to directly provide us with certain information about yourself.",
  },
  {
    title: "Information We Collect through Cookies",
    description:
      "We also automatically collect certain information about your interaction with the Services ('Usage Data'). To do this, we may use cookies, pixels and similar technologies ('Cookies'). Usage Data may include information about how you access and use our Site and your account, including device information, browser information, information about your network connection, your IP address and other information regarding your interaction with the Services.",
  },
  {
    title: "Information We Obtain from Third Parties",
    description:
      "We may obtain information about you from third parties, including from vendors and service providers who may collect information on our behalf, such as: Companies who support our Site and Services, such as Github; Our payment processors, who collect payment information to process your payment; When you visit our Site, open or click on emails we send you, or interact with our Services or advertisements, we, or third parties we work with, may automatically collect certain information using online tracking technologies such as pixels, web beacons, software developer kits, third-party libraries, and cookies. Any information we obtain from third parties will be treated in accordance with this Privacy Policy.",
  },
  {
    title: "How We Use Your Personal Information",
    description:
      "We use your personal information to provide you with the Services, including to process your payments, fulfill your orders, to send notifications to you related to your account, purchases, returns, exchanges or other transactions, to create, maintain and otherwise manage your account, to arrange for shipping, facilitate any returns and exchanges and to enable you to post reviews. We also use your personal information for marketing and promotional purposes, security and fraud prevention, and to communicate with you.",
  },
  {
    title: "Cookies",
    description:
      "Like many websites, we use Cookies on our Site. We use Cookies to power and improve our Site and our Services, to run analytics and better understand user interaction with the Services. Most browsers automatically accept Cookies by default, but you can choose to set your browser to remove or reject Cookies. Please keep in mind that removing or blocking Cookies can negatively impact your user experience.",
  },
  {
    title: "How We Disclose Personal Information",
    description:
      "We may disclose your personal information to third parties for legitimate purposes subject to this Privacy Policy, including with vendors or other third parties who perform services on our behalf, with business and marketing partners, with our affiliates, in connection with a business transaction, to comply with any applicable legal obligations, to enforce any applicable terms of service, and to protect or defend the Services, our rights, and the rights of our users or others.",
  },
  {
    title: "User Generated Content",
    description:
      "The Services may enable you to post product reviews and other user-generated content. If you choose to submit user generated content to any public area of the Services, this content will be public and accessible by anyone. We are not responsible for the privacy or security of any information that you make publicly available.",
  },
  {
    title: "Third Party Websites and Links",
    description:
      "Our Site may provide links to websites or other online platforms operated by third parties. If you follow links to sites not affiliated or controlled by us, you should review their privacy and security policies. We do not guarantee and are not responsible for the privacy or security of such sites. Our inclusion of such links does not imply any endorsement of the content on such platforms or of their owners or operators.",
  },
  {
    title: "Children's Data",
    description:
      "The Services are not intended to be used by children, and we do not knowingly collect any personal information about children. If you are the parent or guardian of a child who has provided us with their personal information, you may contact us to request that it be deleted. We do not 'share' or 'sell' personal information of individuals under 16 years of age.",
  },
  {
    title: "Security and Retention of Your Information",
    description:
      "No security measures are perfect or impenetrable, and we cannot guarantee 'perfect security.' Any information you send to us may not be secure while in transit. How long we retain your personal information depends on different factors, such as whether we need the information to maintain your account, to provide the Services, comply with legal obligations, resolve disputes or enforce other applicable contracts and policies.",
  },
  {
    title: "Your Rights and Choices",
    description:
      "Depending on where you live, you may have some or all of the rights listed below in relation to your personal information. These rights include the right to access/know, right to delete, right to correct, right of portability, right to opt out of sale or sharing or targeted advertising, right to limit and/or opt out of use and disclosure of sensitive personal information, restriction of processing, withdrawal of consent, appeal, and managing communication preferences.",
  },
  {
    title: "Complaints",
    description:
      "If you have complaints about how we process your personal information, please contact us. If you are not satisfied with our response to your complaint, depending on where you live you may have the right to appeal our decision or lodge your complaint with your local data protection authority.",
  },
  {
    title: "International Users",
    description:
      "We may transfer, store and process your personal information outside the country you live in, including the United States. If we transfer your personal information out of Europe, we will rely on recognized transfer mechanisms like the European Commission's Standard Contractual Clauses, or any equivalent contracts issued by the relevant competent authority of the UK.",
  },
  {
    title: "Contact",
    description:
      "Should you have any questions about our privacy practices or this Privacy Policy, or if you would like to exercise any of the rights available to you, please email us at support@evenscribe.com .",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="container relative">
      <div className="w-full py-12 space-y-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 space-y-8">
          <div className="space-y-2">
            <Image
              src="/hourglass.png"
              width={50}
              height={50}
              alt="Evenscribe Logo"
            />
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Evenscribe Privacy Policy
            </h1>
            <div className="max-w-prose text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              <p>Last Updated: June 12, 2024</p>
              <br />
              This Privacy Policy describes how Evenscribe (the
              &quot;Site&quot;, &quot;we&quot;, &quot;us&quot;, or
              &quot;our&quot;) collects, uses, and discloses your personal
              information when you visit, use our services, or make a purchase
              from *.evenscribe.com (the &quot;Site&quot;) or otherwise
              communicate with us (collectively, the &quot;Services&quot;). For
              purposes of this Privacy Policy, &quot;you&quot; and
              &quot;your&quot; means you as the user of the Services, whether
              you are a customer, website visitor, or another individual whose
              information we have collected pursuant to this Privacy Policy.
              Please read this Privacy Policy carefully. By using and accessing
              any of the Services, you agree to the collection, use, and
              disclosure of your information as described in this Privacy
              Policy. If you do not agree to this Privacy Policy, please do not
              use or access any of the Services.
            </div>
          </div>
          <Legal data={data} />
        </div>
      </div>
    </div>
  );
}
