import Image from "next/image";
import Link from "next/link";
import TermsAction from "./_components/Terms-Action";

export default function TermsPage() {
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
              Step 3: Simplified Terms and Promises
            </h1>
            <p className="mb-4 text-gray-700">
              As a Professional on Vegan Collective, you are part of a trusted
              platform for ethical services. By continuing, you agree to uphold
              these commitments to ensure trust, quality, and alignment with our
              mission.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="mb-4 text-xl font-semibold text-[#1a2c4e]">
              The 10 Promises of Vegan Professionals:
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold">1. Vegan Integrity:</h3>
                <p className="text-gray-700">
                  I certify that I am vegan and that all services I provide
                  align with vegan principles.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">2. Professional Standards:</h3>
                <p className="text-gray-700">
                  I will deliver high-quality, reliable services to ensure
                  client satisfaction and trust.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">3. Transparency:</h3>
                <p className="text-gray-700">
                  I commit to providing accurate and honest information about my
                  qualifications and services.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">4. Respectful Interactions:</h3>
                <p className="text-gray-700">
                  I will treat all clients with courtesy, respect, and
                  professionalism.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">5. Compliance with Laws:</h3>
                <p className="text-gray-700">
                  I affirm that my services comply with applicable laws and
                  professional standards.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  6. Responsibility for Disputes:
                </h3>
                <p className="text-gray-700">
                  I will resolve client disputes promptly and fairly, following
                  platform guidelines.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">7. Zero Tolerance for Deceit:</h3>
                <p className="text-gray-700">
                  I understand that misrepresentation or ethical violations will
                  result in an immediate account ban and forfeiture of
                  referral-profit-sharing benefits.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">8. Mission Alignment:</h3>
                <p className="text-gray-700">
                  I support Vegan Collective&apos;s mission to promote veganism
                  and ethical values globally.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">9. Document Accuracy:</h3>
                <p className="text-gray-700">
                  I confirm that all uploaded documents are accurate and reflect
                  my identity and qualifications.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  10. Acknowledgment of Profit-Sharing and Terms:
                </h3>
                <p className="text-gray-700">
                  I understand that as a Professional, I will receive a unique
                  QR code for sharing Vegan Collective. Profits from referred
                  transactions will be shared according to the platform&apos;s
                  referral structure.
                </p>
              </div>
            </div>
          </div>

          <TermsAction />
        </div>
      </main>
    </div>
  );
}
