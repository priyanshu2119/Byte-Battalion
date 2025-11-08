import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="min-h-screen px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-muted hover:text-text"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <article className="prose prose-invert max-w-none">
          <h1>Terms of Service</h1>
          <p className="text-muted">Last updated: November 8, 2024</p>

          <h2>Acceptance of Terms</h2>
          <p>
            By accessing and using DevOrbit, you accept and agree to be bound
            by these Terms of Service.
          </p>

          <h2>User Accounts</h2>
          <p>
            You are responsible for maintaining the confidentiality of your
            account and for all activities that occur under your account.
          </p>

          <h2>Content</h2>
          <p>
            You retain ownership of content you submit to DevOrbit. By
            submitting content, you grant us a license to use, display, and
            distribute it as part of our services.
          </p>

          <h2>Verification</h2>
          <p>
            Event participation verification is provided by event organizers.
            We are not responsible for the accuracy of third-party
            verifications.
          </p>

          <h2>Prohibited Conduct</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Impersonate others</li>
            <li>Submit false information</li>
            <li>Harass or abuse other users</li>
            <li>Violate any applicable laws</li>
          </ul>

          <h2>Termination</h2>
          <p>
            We reserve the right to suspend or terminate your account for
            violations of these Terms.
          </p>

          <h2>Contact</h2>
          <p>
            For questions about these Terms, contact us at legal@devorbit.dev
          </p>
        </article>
      </div>
    </div>
  );
}
