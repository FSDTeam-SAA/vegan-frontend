"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import TermsAction from "./_components/Terms-Action";

const terms = [
  {
    id: 1,
    title: "Vegan Integrity",
    description:
      "I certify that I am vegan and that all services I provide align with vegan principles.",
    accountType: ["professional"],
  },
  {
    id: 2,
    title: "Professional Standards",
    description:
      "I will deliver high-quality, reliable services to ensure client satisfaction and trust.",
    accountType: ["professional"],
  },
  {
    id: 3,
    title: "Transparency",
    description:
      "I commit to providing accurate and honest information about my qualifications and services.",
    accountType: ["professional", "organization"],
  },
  {
    id: 4,
    title: "Respectful Interactions",
    description:
      "I will treat all clients with courtesy, respect, and professionalism.",
    accountType: [
      "professional",
      "merchant",
      "organization",
      "vegan",
      "nonVegan",
    ],
  },
  {
    id: 5,
    title: "Compliance with Laws",
    description:
      "I affirm that my services comply with applicable laws and professional standards.",
    accountType: ["professional", "merchant", "organization"],
  },
  {
    id: 6,
    title: "Responsibility for Disputes",
    description:
      "I will resolve client disputes promptly and fairly, following platform guidelines.",
    accountType: ["professional"],
  },
  {
    id: 7,
    title: "Zero Tolerance for Deceit",
    description:
      "I understand that misrepresentation or ethical violations will result in an immediate account ban and forfeiture of referral-profit-sharing benefits.",
    accountType: ["professional", "merchant"],
  },
  {
    id: 8,
    title: "Mission Alignment",
    description:
      "I support Vegan Collective’s mission to promote veganism and ethical values globally.",
    accountType: ["professional", "merchant", "organization"],
  },
  {
    id: 9,
    title: "Document Accuracy",
    description:
      "I confirm that all uploaded documents are accurate and reflect my identity and qualifications.",
    accountType: ["professional", "merchant", "organization"],
  },
  {
    id: 10,
    title: "Acknowledgment of Profit-Sharing and Terms",
    description:
      "I understand that as a Professional, I will receive a unique QR code for sharing Vegan Collective. Profits from referred transactions will be shared according to the platform’s referral structure.",
    accountType: ["professional"],
  },
  {
    id: 11,
    title: "Vegan Integrity",
    description:
      "I certify that all products I sell through Vegan Collective are 100% vegan and cruelty-free.",
    accountType: ["merchant"],
  },
  {
    id: 12,
    title: "Product Accuracy",
    description:
      "I commit to providing accurate descriptions, pricing, and details for all product listings.",
    accountType: ["merchant"],
  },
  {
    id: 13,
    title: "Transparency",
    description:
      "I will not misrepresent my products or their origins, ensuring full transparency with customers.",
    accountType: ["merchant"],
  },
  {
    id: 14,
    title: "Responsibility for Issues",
    description:
      "I will handle customer disputes and issues promptly and fairly, following platform guidelines.",
    accountType: ["merchant"],
  },
  {
    id: 15,
    title: "Acknowledgment of Profit-Sharing",
    description:
      "I understand that I will receive a unique QR code to share Vegan Collective. Profits from referred transactions will be shared according to the platform’s referral structure.",
    accountType: ["merchant", "organization"],
  },
  {
    id: 16,
    title: "Ethical Commitment",
    description:
      "I certify that my organization operates in alignment with vegan principles and promotes ethical practices.",
    accountType: ["organization"],
  },
  {
    id: 17,
    title: "Fundraising Integrity",
    description:
      "I will ensure that all funds raised through Vegan Collective are used for their stated purposes in alignment with our mission.",
    accountType: ["organization"],
  },
  {
    id: 18,
    title: "Volunteer Coordination",
    description:
      "I will manage volunteers and events professionally, ensuring clear communication and mutual respect.",
    accountType: ["organization"],
  },
  {
    id: 19,
    title: "Zero Tolerance for Misrepresentation",
    description:
      "I understand that misrepresentation or ethical violations will result in immediate account suspension.",
    accountType: ["organization"],
  },
  {
    id: 20,
    title: "Mission Support",
    description:
      "I will actively support Vegan Collective’s mission to promote veganism and ethical practices globally.",
    accountType: ["vegan", "nonVegan"],
  },
  {
    id: 21,
    title: "Profit-Sharing Integrity",
    description:
      "I understand that my participation directly contributes to the platform’s success and charity support initiatives.",
    accountType: ["vegan", "nonVegan"],
  },
  {
    id: 22,
    title: "Data Accuracy",
    description:
      "I will provide accurate and honest information during registration and platform use.",
    accountType: ["vegan", "nonVegan"],
  },
  {
    id: 23,
    title: "Acknowledgment of Terms",
    description:
      "I agree that these commitments are part of the Vegan Collective Terms and Conditions.",
    accountType: ["vegan", "nonVegan"],
  },
];

export default function TermsPage() {
  const searchParams = useSearchParams();
  const accountType =
    (searchParams.get("accountType") as
      | "professional"
      | "merchant"
      | "organization") ?? "professional";

  const title: {
    [key in "professional" | "merchant" | "organization"]: string;
  } = {
    professional:
      "As a Professional on Vegan Collective, you are part of a trusted platform for ethical services. By continuing, you agree to uphold these commitments to ensure trust, quality, and alignment with our mission.",
    merchant:
      "As a Merchant on Vegan Collective, you are joining a trusted platform for vegan products. By continuing, you agree to uphold these commitments to ensure trust, quality, and alignment with our mission.",
    organization:
      "As an Organization on Vegan Collective, you are part of a trusted platform for promoting ethical initiatives. By continuing, you agree to uphold these commitments to ensure alignment with our mission and the trust of your supporters.",
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#e9e2d5]">
      {/* Header */}
      <div className="flex h-[58px] w-full items-center justify-center bg-[#1D3557]">
        <Link href="/" className="flex items-center">
          <Image
            src="https://res.cloudinary.com/dgnustmny/image/upload/v1738649859/logo_white_zsmua3.png"
            height={48}
            width={48}
            alt="Logo"
          />
          <p className="font-lexend text-[16px] font-semibold leading-[23.2px] tracking-[-4%] text-white">
            VEGAN COLLECTIVE
          </p>
        </Link>
      </div>

      {/* Main Content */}
      <main className="flex flex-1 items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-3xl rounded-lg bg-white p-6 shadow-md md:p-8">
          <div className="mb-8 text-center">
            <h1 className="mb-6 text-2xl font-bold text-[#1a2c4e]">
              Simplified Terms and Promises
            </h1>
            <p className="mb-4 text-gray-700">{title[accountType]}</p>
          </div>

          <div className="mb-8">
            <h2 className="mb-4 text-xl font-semibold text-[#1a2c4e]">
              The 10 Promises of Vegan Professionals:
            </h2>

            <div className="space-y-6">
              {terms
                .filter(
                  (term) =>
                    !term.accountType || term.accountType.includes(accountType),
                )
                .map((term, index) => (
                  <div key={term.id}>
                    <h3 className="font-semibold">
                      {index + 1}. {term.title}:
                    </h3>
                    <p className="text-gray-700">{term.description}</p>
                  </div>
                ))}
            </div>
          </div>

          <TermsAction />
        </div>
      </main>
    </div>
  );
}
