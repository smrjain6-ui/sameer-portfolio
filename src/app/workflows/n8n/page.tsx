import Image from "next/image";
import Link from "next/link";

export default function N8NWorkflowPage() {
  return (
    <main className="mx-auto w-full max-w-[960px] px-6 pb-20 pt-32">
      <Link href="/#ai-tools" className="mb-8 inline-block text-sm text-accent link-underline">
        ← Back to AI & Tools
      </Link>

      <article className="rounded-2xl border border-borderSoft bg-bgCard p-6 md:p-8">
        <p className="mb-2 text-sm font-medium text-accentAi">Automation Workflows</p>
        <h1 className="mb-4 font-serif text-4xl md:text-5xl">n8n Workflow Playbook</h1>
        <p className="mb-8 text-[1.05rem] leading-8 text-textSecondary">
          A quick documentation page of two n8n workflows: a personal Google Suite assistant and a tweet intelligence
          pipeline that captures top engagement posts by keyword into Google Sheets.
        </p>

        <section className="mb-8 rounded-xl border border-borderSoft p-5">
          <h2 className="mb-3 font-serif text-2xl">Workflow 1: Personal Google Suite Assistant</h2>
          <p className="leading-8 text-textSecondary">
            A chat-based AI assistant that can remember context, send emails via Gmail, and create events in Google
            Calendar based on the user&apos;s message.
          </p>
        </section>

        <section className="mb-8 rounded-xl border border-borderSoft p-5">
          <h2 className="mb-3 font-serif text-2xl">
            Workflow 2: Highest-Engagement Tweets by Keyword (Auto-saved to Google Sheets)
          </h2>
          <p className="leading-8 text-textSecondary">
            Enter a keyword, and the workflow pulls the top/highest-engagement tweets related to it using the
            Twitter/X API, then automatically compiles the results into a Google Sheet (one row per tweet).
          </p>
        </section>

        <section className="rounded-xl border border-borderSoft p-5">
          <h2 className="mb-4 font-serif text-2xl">Document Snapshot</h2>
          <div className="overflow-hidden rounded-lg border border-borderSoft">
            <Image
              src="/workflows/n8n/page-1.png"
              alt="n8n workflows PDF page"
              width={1224}
              height={1584}
              className="h-auto w-full object-contain"
            />
          </div>
        </section>
      </article>
    </main>
  );
}
