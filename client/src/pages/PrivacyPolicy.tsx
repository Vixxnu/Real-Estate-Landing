export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="bg-slate-50 py-12 mb-8">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl font-bold">Privacy Policy</h1>
          <p className="text-muted-foreground mt-2">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl prose prose-slate lg:prose-lg">
        <h3>1. Information We Collect</h3>
        <p>
          We collect information you provide directly to us when you fill out a contact form, 
          subscribe to our newsletter, or communicate with us. This may include your name, 
          email address, phone number, and message content.
        </p>

        <h3>2. How We Use Your Information</h3>
        <p>
          We use the information we collect to:
          <ul>
            <li>Respond to your inquiries and provide customer service.</li>
            <li>Send you updates, newsletters, and property information (if subscribed).</li>
            <li>Improve our website and services.</li>
          </ul>
        </p>

        <h3>3. Information Sharing</h3>
        <p>
          We do not sell, trade, or otherwise transfer your personally identifiable information 
          to outside parties. This does not include trusted third parties who assist us in 
          operating our website or conducting our business, so long as those parties agree 
          to keep this information confidential.
        </p>

        <h3>4. Security</h3>
        <p>
          We implement a variety of security measures to maintain the safety of your personal information.
        </p>

        <h3>5. Contact Us</h3>
        <p>
          If you have any questions about this Privacy Policy, please contact us at hello@primeestates.com.
        </p>
      </div>
    </div>
  );
}
