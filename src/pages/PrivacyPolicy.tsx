import React from "react";
import Layout from "@/components/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
          
          <div className="text-sm text-muted-foreground mb-8 text-center">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="mb-4">
              This Privacy Policy describes how HyphenBox ("we," "our," or "us") collects, uses, and protects your information when you use our browser extension and related services. We are committed to protecting your privacy and being transparent about our data practices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-medium mb-3">User Activity Data</h3>
            <p className="mb-4">
              Our browser extension collects user interaction data only when you actively start a recording session. This includes:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Click events and their target elements</li>
              <li>Form input interactions (content you type)</li>
              <li>Page navigation actions</li>
              <li>Element selectors and DOM information</li>
              <li>Timestamps of interactions</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">Website Content</h3>
            <p className="mb-4">
              During recording sessions, we capture:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Screenshots of web pages</li>
              <li>Page URLs and titles</li>
              <li>Text content of interactive elements</li>
              <li>HTML structure information for element identification</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">Authentication Information</h3>
            <p className="mb-4">
              We store authentication tokens locally in your browser to maintain your login session with our service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="mb-4">
              We use the collected information solely for the following purposes:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Creating detailed recordings of your web interactions for testing and documentation purposes</li>
              <li>Generating element selectors for automated testing scenarios</li>
              <li>Providing replay and analysis capabilities through our dashboard</li>
              <li>Enabling export functionality for integration with testing tools</li>
              <li>Improving the accuracy of our recording and playback technology</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Storage and Security</h2>
            <p className="mb-4">
              Your recorded data is securely transmitted and stored using industry-standard encryption protocols. We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction.
            </p>
            <p className="mb-4">
              Recording data is stored on secure cloud infrastructure and is accessible only through your authenticated account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">User Control and Consent</h2>
            <p className="mb-4">
              <strong>Explicit Recording Control:</strong> Our extension only records data when you explicitly start a recording session. Recording is completely under your control and can be stopped at any time.
            </p>
            <p className="mb-4">
              <strong>Data Access:</strong> You have full access to view, download, and delete your recorded data through our dashboard.
            </p>
            <p className="mb-4">
              <strong>Selective Recording:</strong> You choose which websites and interactions to record. The extension does not passively monitor your browsing activity.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Sharing and Third Parties</h2>
            <p className="mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties. Your recorded data is:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Not used for advertising or marketing purposes</li>
              <li>Not shared with data brokers or analytics companies</li>
              <li>Not used to create user profiles for unrelated purposes</li>
              <li>Only accessible to you and necessary service personnel for technical support</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
            <p className="mb-4">
              We retain your recorded data for as long as your account remains active and as needed to provide our services. You may delete your recordings at any time through our dashboard. Upon account deletion, all associated data is permanently removed from our systems within 30 days.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Chrome Extension Specific Information</h2>
            <p className="mb-4">
              Our Chrome extension requires certain permissions to function:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Storage:</strong> To save recording sessions and authentication state locally</li>
              <li><strong>Tabs:</strong> To capture screenshots and manage recording across browser tabs</li>
              <li><strong>ActiveTab:</strong> To monitor interactions on the currently active tab during recording</li>
              <li><strong>Scripting:</strong> To inject recording functionality into web pages</li>
              <li><strong>Host Permissions:</strong> To record interactions across any website you choose to record</li>
            </ul>
            <p className="mb-4">
              These permissions are used exclusively for the recording functionality and only when actively recording.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
            <p className="mb-4">
              Our service is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us to have it removed.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p><strong>Email:</strong> privacy@hyphenbox.com</p>
              <p><strong>Website:</strong> https://hyphenbox.com</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Legal Compliance</h2>
            <p className="mb-4">
              This Privacy Policy complies with applicable data protection laws, including GDPR and CCPA where applicable. If you are located in the European Union, you have additional rights under GDPR, including the right to access, rectify, erase, or port your personal data.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy; 