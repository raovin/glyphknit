export type InquiryProject = {
  slug: string;
  title: string;
};

export function buildInquiryDraft({
  recipient,
  problem,
  stack,
  timing,
  details,
  relatedProject,
}: {
  recipient: string;
  problem: string;
  stack: string;
  timing: string;
  details: string;
  relatedProject?: InquiryProject;
}) {
  const subject = `GlyphKnit project: ${problem.trim()}`;
  const lines = [
    `Project or problem: ${problem.trim()}`,
    ...(stack.trim() ? [`Stack or context: ${stack.trim()}`] : []),
    ...(timing.trim() ? [`Timing: ${timing.trim()}`] : []),
    ...(relatedProject
      ? [`Related project: ${relatedProject.title}`]
      : []),
    ...(details.trim() ? ["", details.trim()] : []),
  ];
  const body = lines.join("\n");

  return {
    mailtoHref: `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    text: `To: ${recipient}\nSubject: ${subject}\n\n${body}`,
  };
}
