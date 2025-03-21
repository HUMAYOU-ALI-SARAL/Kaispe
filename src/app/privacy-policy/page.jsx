'use client'
import Navbar from "@/components/common/Navbar"
import HeroSection from "@/components/common/HeroSection"
import Footer from '@/components/common/Footer'

export default function PrivacyPolicy() {
  return (
    <div className="w-full overflow-y-hidden">
      {/* Optional: Navbar can be included if desired */}
      {/* <Navbar /> */}

      <HeroSection
        mainHeading="Privacy Policy"
        subtext="Learn about how we collect, use, and protect your personal information to ensure transparency and maintain your trust in our services."
      />

      <div className="px-6 py-12 max-w-4xl mx-auto">
        <p className="text-sm text-gray-500 mb-8">Last updated: April 14, 2022</p>

        <p className="mb-4">
          This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
        </p>
        <p className="mb-4">
          We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the Privacy Policy Template.
        </p>

        {/* Interpretation and Definitions */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Interpretation and Definitions</h2>

          <h3 className="text-xl font-bold mb-2">Interpretation</h3>
          <p className="mb-4">
            The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
          </p>

          <h3 className="text-xl font-bold mb-2">Definitions</h3>
          <p className="mb-4">For the purposes of this Privacy Policy:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.
            </li>
            <li>
              <strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Deca4 LLC, Dubai.
            </li>
            <li>
              <strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.
            </li>
            <li>
              <strong>Country</strong> refers to: United Arab Emirates.
            </li>
            <li>
              <strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.
            </li>
            <li>
              <strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.
            </li>
            <li>
              <strong>Service</strong> refers to the Website.
            </li>
            <li>
              <strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.
            </li>
            <li>
              <strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).
            </li>
            <li>
              <strong>Website</strong> refers to App Genix Solutions, accessible from{' '}
              {/* <a
                href="https://www.deca4.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                https://www.deca4.com/
              </a>. */}
            </li>
            <li>
              <strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
            </li>
          </ul>
        </section>

        {/* Collecting and Using Your Personal Data */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Collecting and Using Your Personal Data</h2>

          <h3 className="text-xl font-bold mb-2">Types of Data Collected</h3>

          <h4 className="text-lg font-bold mb-2">Personal Data</h4>
          <p className="mb-4">
            While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
          </p>
          <ul className="list-disc ml-6 space-y-1 mb-4">
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Usage Data</li>
          </ul>

          <h4 className="text-lg font-bold mb-2">Usage Data</h4>
          <p className="mb-4">
            Usage Data is collected automatically when using the Service. It may include information such as:
          </p>
          <ul className="list-disc ml-6 space-y-1 mb-4">
            <li>Your Device's Internet Protocol address (e.g. IP address)</li>
            <li>Browser type and version</li>
            <li>The pages of our Service that You visit</li>
            <li>The time and date of Your visit</li>
            <li>The time spent on those pages</li>
            <li>Unique device identifiers and other diagnostic data</li>
          </ul>
          <p className="mb-4">
            When You access the Service via a mobile device, We may automatically collect additional details including the type of mobile device, your mobile device unique ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browser you use, and other diagnostic data.
          </p>
          <p className="mb-4">
            We may also collect information that Your browser sends whenever You visit our Service or access the Service through a mobile device.
          </p>

          <h3 className="text-xl font-bold mb-2">Tracking Technologies and Cookies</h3>
          <p className="mb-4">
            We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. These technologies may include:
          </p>
          <ul className="list-disc ml-6 space-y-1 mb-4">
            <li>
              <strong>Cookies or Browser Cookies:</strong> Small files placed on Your Device. You can instruct Your browser to refuse Cookies; however, this may affect some parts of our Service.
            </li>
            <li>
              <strong>Flash Cookies:</strong> Locally stored objects (or Flash Cookies) that may be used to collect and store information about Your preferences or activity on our Service.
            </li>
            <li>
              <strong>Web Beacons:</strong> Small electronic files that may be used to count users who have visited certain pages or opened an email.
            </li>
          </ul>
          <p className="mb-4">
            Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on Your device when offline, while Session Cookies are deleted once you close your browser. Learn more about cookies{' '}
            <a
              href="https://www.privacypolicies.com/blog/cookies/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              here
            </a>.
          </p>
          <p className="mb-4">We use both Session and Persistent Cookies for the purposes set out below:</p>
          <ul className="list-disc ml-6 space-y-2 mb-4">
            <li>
              <strong>Necessary / Essential Cookies</strong>
              <ul className="list-disc ml-6 space-y-1">
                <li>Type: Session Cookies</li>
                <li>Administered by: Us</li>
                <li>
                  Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. Without these, the services you have requested cannot be provided.
                </li>
              </ul>
            </li>
            <li>
              <strong>Cookies Policy / Notice Acceptance Cookies</strong>
              <ul className="list-disc ml-6 space-y-1">
                <li>Type: Persistent Cookies</li>
                <li>Administered by: Us</li>
                <li>Purpose: These Cookies identify if users have accepted the use of cookies on the Website.</li>
              </ul>
            </li>
            <li>
              <strong>Functionality Cookies</strong>
              <ul className="list-disc ml-6 space-y-1">
                <li>Type: Persistent Cookies</li>
                <li>Administered by: Us</li>
                <li>Purpose: These Cookies remember choices you make (such as login details or language preference) to provide a more personal experience.</li>
              </ul>
            </li>
          </ul>
          <p>
            For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or refer to the Cookies section of our Privacy Policy.
          </p>
        </section>

        {/* Use of Your Personal Data */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Use of Your Personal Data</h2>
          <p className="mb-4">The Company may use Personal Data for the following purposes:</p>
          <ul className="list-disc ml-6 space-y-1 mb-4">
            <li>To provide and maintain our Service, including monitoring its usage.</li>
            <li>To manage Your Account and facilitate registration as a user.</li>
            <li>
              For the performance of a contract: development, compliance and undertaking of the purchase contract for the products, items or services you have purchased.
            </li>
            <li>To contact You via email, telephone, SMS, or other electronic communication regarding updates or informational communications.</li>
            <li>
              To provide you with news, special offers, and general information about goods, services, or events similar to those you have purchased or enquired about (unless you have opted not to receive such information).
            </li>
            <li>To manage Your requests to Us.</li>
            <li>
              For business transfers: to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of our assets.
            </li>
            <li>
              For other purposes such as data analysis, identifying usage trends, and evaluating and improving our Service, products, services, marketing, and your experience.
            </li>
          </ul>
          <p className="mb-4">We may share your personal information in the following situations:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>
              <strong>With Service Providers:</strong> to monitor and analyze the use of our Service and to contact you.
            </li>
            <li>
              <strong>For business transfers:</strong> in connection with any merger, sale of Company assets, financing, or acquisition.
            </li>
            <li>
              <strong>With Affiliates:</strong> your information may be shared with our affiliates who are required to honor this Privacy Policy.
            </li>
            <li>
              <strong>With business partners:</strong> to offer you certain products, services or promotions.
            </li>
            <li>
              <strong>With other users:</strong> when you share personal information in public areas, such information may be viewed by all users.
            </li>
            <li>
              <strong>With your consent:</strong> for any other purpose you agree to.
            </li>
          </ul>
        </section>

        {/* Retention and Transfer */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Retention of Your Personal Data</h2>
          <p className="mb-4">
            The Company will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will also retain Usage Data for internal analysis purposes for a shorter period, unless required for security or legal reasons.
          </p>

          <h2 className="text-2xl font-bold mb-4">Transfer of Your Personal Data</h2>
          <p className="mb-4">
            Your information, including Personal Data, is processed at the Company's operating offices and may be transferred to — and maintained on — computers located outside of your jurisdiction where data protection laws may differ. Your consent to this Privacy Policy and your submission of information represent your agreement to that transfer. The Company will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy.
          </p>
        </section>

        {/* Disclosure */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Disclosure of Your Personal Data</h2>

          <h3 className="text-xl font-bold mb-2">Business Transactions</h3>
          <p className="mb-4">
            If the Company is involved in a merger, acquisition or asset sale, your Personal Data may be transferred. We will provide notice before your Personal Data is transferred and becomes subject to a different Privacy Policy.
          </p>

          <h3 className="text-xl font-bold mb-2">Law Enforcement</h3>
          <p className="mb-4">
            Under certain circumstances, the Company may be required to disclose your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).
          </p>

          <h3 className="text-xl font-bold mb-2">Other Legal Requirements</h3>
          <p className="mb-4">
            The Company may disclose your Personal Data in the good faith belief that such action is necessary to:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Comply with a legal obligation</li>
            <li>Protect and defend the rights or property of the Company</li>
            <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
            <li>Protect the personal safety of users of the Service or the public</li>
            <li>Protect against legal liability</li>
          </ul>
        </section>

        {/* Security */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Security of Your Personal Data</h2>
          <p className="mb-4">
            The security of your Personal Data is important to us, but remember that no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
          </p>
        </section>

        {/* Children's Privacy */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
          <p className="mb-4">
            Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and are aware that your child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from anyone under the age of 13 without parental consent, we will take steps to remove that information from our servers.
          </p>
          <p>
            If consent is required by law from a parent, we may require your parent's consent before collecting such information.
          </p>
        </section>

        {/* Links */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Links to Other Websites</h2>
          <p className="mb-4">
            Our Service may contain links to other websites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
          </p>
        </section>

        {/* Changes */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
          <p className="mb-4">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page, and we will update the "Last updated" date at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes.
          </p>
        </section>

        {/* Contact */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, you can contact us:
          </p>
          <ul className="list-disc ml-6">
            <li>
              By email:{' '}
              <a href="mailto:info@App Genix Solutions.com" className="text-blue-500 underline">
                info@App Genix Solutions.com
              </a>
            </li>
          </ul>
        </section>
      </div>

      <Footer />
    </div>
  );
}
