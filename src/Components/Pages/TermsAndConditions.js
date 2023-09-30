import { Link } from "react-router-dom";
import styles from "./TermsAndConditions.module.css";
import Footer from "../UI/Footer";
const TermsAndConditions = () => {
  return (<>
      <div className={styles.termsContainer}>
      <h1 className={styles.h1}>Terms And Conditions</h1>
      <hr className={styles.hr} />
      <h3>1. Introduction and Acceptance of Terms</h3>
      <p>
       - Welcome to Muneer Automotive. By accessing and using our website, you
        agree to comply with and be bound by these terms and conditions. If you
        do not agree with these terms, please refrain from using our website.
      </p>

      <h3>2. Definitions</h3>

      <p>
       - "Muneer Automotive," "we," "us," or "our" refers to the owners and
        operators of this website. <br/>- "User" refers to anyone who accesses or
        uses our website.
      </p>

      <h3>3. Website Use</h3>
      <p>
        - Our website is intended for users who are 18 years or older. - You may
        use our website for lawful purposes only. You agree not to use it for
        any unlawful or prohibited activities.<br/> - We reserve the right to deny
        access to our website to any user who violates these terms.
      </p>
      <h3>4. Product Listings and Descriptions</h3>
      <p>
        - We strive to provide accurate product listings and descriptions.
        However, we do not guarantee the accuracy, completeness, or reliability
        of any product information.<br/> - Product images are for illustrative
        purposes only and may not reflect the actual product.<br/> - We reserve the
        right to correct any errors, inaccuracies, or omissions in product
        listings.
      </p>
      <h3>5. Pricing and Payment</h3>
      <p>
        - Product prices are listed in Kenyan Shillings. Prices are subject to
        change without notice.<br/> - Payment for products must be made using one of
        the accepted payment methods.<br/> - Users are responsible for any applicable
        taxes or fees associated with their purchases.
      </p>
      <h3>6. Shipping and Delivery</h3>
      <p>
        - We offer shipping to the client's destination upon agreement with us.
        Estimated delivery times are provided for reference but are not
        guaranteed.<br/> - Shipping costs are specified at the time of purchase.
      </p>
      <h3>7. Returns and Refunds</h3>
      <p>
        - Our return and refund policies are based on the warranty given at the
        time of purchase and condition of the good(s)
      </p>
      <h3>8. Intellectual Property</h3>
      <p>
        - All content on our website, including text, images, logos, and
        graphics, is owned by Muneer Automotive and is protected by copyright
        and other intellectual property laws.<br/> - Users may not reproduce,
        distribute, or use our content without our express permission.
      </p>
      <h3>9. Privacy Policy</h3>
      <p>
        - Your use of our website is also governed by our Privacy Policy,
        available at{" "}
        <Link to="/privacyPolicy" className={styles.link}>
          Privacy policy
        </Link>
      </p>
      <h3>10. User Accounts</h3>
      <p>
        - Users may be required to register an account with us to access certain
        features of our website.<br/> - Users are responsible for maintaining the
        confidentiality of their account credentials and are liable for all
        activities associated with their accounts.
      </p>
      <h3>11. Termination</h3>
      <p>
        - We reserve the right to terminate or suspend user accounts or access
        to our website at our discretion and without notice.
      </p>
      <h3>12. Dispute Resolution</h3>
      <p>
        - Any disputes arising from or relating to these terms will first be
        resolved informally by contacting us
      </p>
      <h3>13. Limitation of Liability</h3>
      <p>
        - Muneer Automotive and its owners shall not be liable for any direct,
        indirect, incidental, consequential, or punitive damages arising from
        your use of our website or products.
      </p>
      <h3>14. Links to Other Websites</h3>
      <p>
        - Our Service may contain links to third-party web sites or services that
        are not owned or controlled by the Company. The Company has no control
        over, and assumes no responsibility for, the content, privacy policies,
        or practices of any third party web sites or services. You further
        acknowledge and agree that the Company shall not be responsible or
        liable, directly or indirectly, for any damage or loss caused or alleged
        to be caused by or in connection with the use of or reliance on any such
        content, goods or services available on or through any such web sites or
        services. We strongly advise You to read the terms and conditions and
        privacy policies of any third-party web sites or services{" "}
      </p>
      <h3>15. Indemnity</h3>
      <p>
        - By using our website, you agree to indemnify and hold Muneer
        Automotive and its owners harmless from any claims, damages, or
        liabilities arising from your use of our website.
      </p>
      <h3>16. Changes to Terms and Conditions</h3>
      <p>
        - We may update these terms and conditions from time to time. Any
        changes will be posted on our website, and your continued use of our
        website constitutes acceptance of the modified terms.
      </p>
      <h3>17. Governing Law</h3>
      <p>- These terms and conditions are governed by the laws of Kenya.</p>
      <h3>18. Contact Information</h3>
      <p>
        - For questions or concerns regarding these terms and conditions, please
        contact us at
        <a href="tel:254707686784" className={styles.link}>
          +254707686784
        </a>
        or through email <a href="mailto:muneerautomotive@gmail.com" className={styles.link}>muneerautomotive@gmail.com</a>
      </p>
      <h3> 19. Related Information</h3>
        <Link to="/privacyPolicy" className={styles.link}>
          Privacy Policy
        </Link>
      <p>Last Updated: 29/09/2023 <br/> Thank you for using Muneer Automotive.</p>
    </div>
    <Footer/>
    </>
  );
};
export default TermsAndConditions;
