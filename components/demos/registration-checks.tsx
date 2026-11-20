"use client";

import { CheckCircle2, Inbox, Mail, MessageSquare } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent } from "react";

const deliveryDeadline = 10;
const maximumDelay = 30;
const channels = ["Email", "SMS"] as const;
type Channel = (typeof channels)[number];
const recipients = { Email: "alex@example.test", SMS: "+1 202-555-0147" };
const primaryButton = "inline-flex min-h-11 items-center justify-center rounded bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-[var(--accent-ink)] hover:bg-[var(--accent-strong)]";

type Delivery = {
  channel: Channel;
  delay: number;
  startedAt: number;
  code: string;
};

function registrationScreen(response: { verified: boolean }) {
  return response.verified ? "Registration complete" : "Try the code again";
}

const browserCases = [
  { response: { verified: true }, expected: "Registration complete" },
  { response: { verified: false }, expected: "Try the code again" }
];
const browserPassed = browserCases.every(({ response, expected }) => registrationScreen(response) === expected);

export function RegistrationChecks() {
  const [channel, setChannel] = useState<Channel>("Email");
  const [delays, setDelays] = useState<Record<Channel, number>>({ Email: 3, SMS: 3 });
  const [run, setRun] = useState<Delivery | null>(null);
  const [elapsed, setElapsed] = useState(0);
  const [entry, setEntry] = useState("");
  const [attempt, setAttempt] = useState<"early" | "invalid" | null>(null);
  const [verified, setVerified] = useState(false);
  const codeInput = useRef<HTMLInputElement>(null);
  const successHeading = useRef<HTMLHeadingElement>(null);
  const startButton = useRef<HTMLButtonElement>(null);
  const restoreStartFocus = useRef(false);
  const delay = run?.delay ?? delays[channel];
  const arrived = run !== null && elapsed >= run.delay;
  const deliveryPending = run !== null && !arrived && elapsed < deliveryDeadline;
  const deliveryVerdict = deliveryPending ? "Waiting" : delay <= deliveryDeadline ? "Pass" : "Fail";
  const recipient = recipients[run?.channel ?? channel];
  const ChannelIcon = channel === "Email" ? Mail : MessageSquare;
  let error = "";
  if (attempt === "early" && !arrived) error = "Your message is still on its way. Enter the code when it arrives.";
  if (attempt === "invalid") error = registrationScreen({ verified: false }) + ". Check the six digits in your inbox.";

  let deliveryDetail = `Preview for a ${delay}-second delay. The delivery deadline is ${deliveryDeadline} s.`;
  if (run) {
    if (arrived) {
      deliveryDetail = `${run.channel} arrived at ${delay} s. The deadline was ${deliveryDeadline} s.`;
    } else if (deliveryPending) {
      deliveryDetail = `Waiting for ${run.channel}. The deadline is ${deliveryDeadline} s.`;
    } else {
      deliveryDetail = `The ${deliveryDeadline}-second deadline passed. The message is still on its way.`;
    }
  }

  useEffect(() => {
    if (!run || run.delay === 0) return;
    let timer: ReturnType<typeof setTimeout>;
    function tick(delivery: Delivery) {
      const milliseconds = performance.now() - delivery.startedAt;
      const seconds = Math.floor(milliseconds / 1000);
      setElapsed(Math.min(delivery.delay, seconds));
      if (seconds < delivery.delay) {
        timer = setTimeout(() => tick(delivery), (seconds + 1) * 1000 - milliseconds);
      }
    }
    timer = setTimeout(() => tick(run), Math.max(0, 1000 - (performance.now() - run.startedAt)));
    return () => clearTimeout(timer);
  }, [run]);

  useEffect(() => {
    if (verified) successHeading.current?.focus();
    else if (run) codeInput.current?.focus();
    else if (restoreStartFocus.current) startButton.current?.focus();
  }, [run, verified]);

  function start(event: FormEvent) {
    event.preventDefault();
    const [sample] = crypto.getRandomValues(new Uint32Array(1));
    setRun({ channel, delay, startedAt: performance.now(), code: String(100000 + sample % 900000) });
  }

  function verify(event: FormEvent) {
    event.preventDefault();
    if (!run) return;
    if (!arrived) {
      setAttempt("early");
    } else if (entry.trim() !== run.code) {
      setAttempt("invalid");
      codeInput.current?.select();
    } else {
      setAttempt(null);
      setVerified(true);
    }
  }

  function restart() {
    restoreStartFocus.current = true;
    setRun(null);
    setElapsed(0);
    setEntry("");
    setAttempt(null);
    setVerified(false);
  }

  return (
    <div className="overflow-hidden rounded-md border border-[var(--line)] bg-[var(--surface)]">
      <div className="registration-controls grid gap-6 border-b border-[var(--line)] p-5 sm:grid-cols-[1fr_1.5fr] sm:gap-12 sm:p-7">
        <fieldset disabled={run !== null}>
          <legend className="mb-3 text-sm font-semibold text-[var(--paper)]">Delivery channel</legend>
          <div className="flex gap-2">
            {channels.map((option) => (
              <label key={option} className="flex min-h-10 cursor-pointer items-center gap-2 rounded border border-[var(--line)] px-3 text-sm has-checked:border-[var(--accent)] has-checked:bg-[var(--surface-soft)]">
                <input
                  className="accent-[var(--accent)]"
                  type="radio"
                  name="delivery-channel"
                  value={option}
                  checked={channel === option}
                  onChange={() => setChannel(option)}
                />
                {option}
              </label>
            ))}
          </div>
        </fieldset>
        <div>
          <div className="flex items-baseline justify-between gap-4">
            <label htmlFor="delivery-delay" className="text-sm font-semibold text-[var(--paper)]">{channel} delay</label>
            <span aria-hidden="true" className="font-mono text-2xl leading-none tabular-nums">{delay} s</span>
          </div>
          <input
            id="delivery-delay"
            type="range"
            min={0}
            max={maximumDelay}
            step={1}
            value={delay}
            disabled={run !== null}
            aria-valuetext={`${delay} seconds`}
            aria-describedby="delivery-rule"
            onChange={(event) => {
              const seconds = event.currentTarget.valueAsNumber;
              setDelays((previous) => ({ ...previous, [channel]: seconds }));
            }}
            className="my-2 block h-9 w-full cursor-pointer accent-[var(--accent)]"
          />
          <div aria-hidden="true" className="relative flex justify-between font-mono text-xs text-[var(--muted)]">
            <span>0 s</span>
            <span className="absolute -translate-x-1/2 text-[var(--paper)]" style={{ left: `${deliveryDeadline / maximumDelay * 100}%` }}>{deliveryDeadline} s limit</span>
            <span>{maximumDelay} s</span>
          </div>
          <span id="delivery-rule" className="sr-only">Delivery passes when the message arrives at or before {deliveryDeadline} seconds.</span>
        </div>
      </div>
      <div className="registration-experience grid border-b border-[var(--line)] md:grid-cols-2">
        <section aria-label="Sign-up screen" className="p-5 sm:p-7">
          <p className="mono-label mb-4">Sign-up screen</p>
          {!run ? (
            <form onSubmit={start}>
              <h2 className="text-2xl">Create an account</h2>
              <label htmlFor="demo-recipient" className="mt-5 block text-sm text-[var(--muted)]">
                {channel === "Email" ? "Demo email address" : "Demo phone number"}
              </label>
              <input id="demo-recipient" readOnly value={recipient} className="mt-1 w-full rounded border border-[var(--line)] px-3 py-2 text-sm" />
              <button ref={startButton} type="submit" className={`mt-4 ${primaryButton}`}>Create demo account</button>
            </form>
          ) : verified ? (
            <div>
              <CheckCircle2 size={25} aria-hidden="true" className="mb-3 text-[var(--accent-strong)]" />
              <h2 ref={successHeading} tabIndex={-1} className="text-2xl">{registrationScreen({ verified: true })}</h2>
              <p className="mt-3 text-sm text-[var(--muted)]">Your demo account for {recipient} is ready.</p>
            </div>
          ) : (
            <form onSubmit={verify}>
              <h2 className="text-2xl">{channel === "Email" ? "Check your email" : "Check your messages"}</h2>
              <p className="mt-2 text-sm text-[var(--muted)]">Enter the six-digit code sent to {recipient}.</p>
              <label htmlFor="verification-code" className="mt-4 block text-sm font-semibold">Verification code</label>
              <input id="verification-code" ref={codeInput} value={entry} inputMode="numeric" autoComplete="off"
                maxLength={6} required pattern="[0-9]{6}" title="Enter six digits" placeholder="6 digits"
                className="mt-1 block w-36 rounded border border-[var(--line)] bg-[var(--background)] px-3 py-2 font-mono tracking-widest"
                aria-invalid={!!error} aria-describedby={error ? "code-error" : undefined}
                onChange={(event) => { setEntry(event.target.value); setAttempt(null); }} />
              {error && <p role="alert" id="code-error" className="mt-2 text-sm text-[var(--danger)]">{error}</p>}
              <button type="submit" className={`mt-4 ${primaryButton}`}>Verify code</button>
            </form>
          )}
          {run && <button type="button" onClick={restart} className="focus-link mt-3 block min-h-10 cursor-pointer text-sm">Start over</button>}
        </section>
        <section aria-labelledby="inbox-heading" className="border-t border-[var(--line)] bg-[var(--background)] p-5 sm:p-7 md:border-l md:border-t-0">
          <h2 id="inbox-heading" className="flex items-center gap-2 text-lg"><Inbox aria-hidden="true" size={18} /> Synthetic inbox</h2>
          <p className="mb-4 mt-1 text-sm text-[var(--muted)]">{recipient}</p>
          <div aria-live="polite" aria-atomic="true">
            {run && arrived ? (
              <div className={run.channel === "Email"
                ? "rounded border border-[var(--line)] bg-[var(--surface)] p-4"
                : "w-fit rounded-2xl rounded-bl-sm bg-[var(--surface-soft)] px-4 py-3"}>
                <p className="flex items-center gap-2 text-xs text-[var(--muted)]"><ChannelIcon aria-hidden="true" size={15} /> {run.channel} from GlyphKnit · {run.delay} s</p>
                <h3 className="mt-3 text-base">{run.channel === "Email" ? "Confirm your email address" : "Your sign-up code"}</h3>
                <strong className="mt-2 block select-all font-mono text-2xl tracking-widest">{run.code}</strong>
                {!verified && <button type="button" className="focus-link mt-2 min-h-10 cursor-pointer text-sm" onClick={() => {
                  setEntry(run.code);
                  setAttempt(null);
                  codeInput.current?.focus();
                }}>Use this code</button>}
              </div>
            ) : <p className="rounded border border-dashed border-[var(--line)] p-4 text-sm text-[var(--muted)]">
              {run ? "Waiting for the verification message…" : "No messages yet."}
            </p>}
          </div>
          {run && !arrived && <p aria-hidden="true" className="mt-3 font-mono text-xs tabular-nums text-[var(--muted)]">{elapsed} s elapsed</p>}
        </section>
      </div>
      <div className="grid sm:grid-cols-2">
        <section aria-labelledby="browser-check" className="p-5 sm:p-7">
          <h2 id="browser-check" className="text-lg">Browser registration</h2>
          <p className={`my-2 font-mono text-2xl font-semibold ${browserPassed ? "text-[var(--accent-strong)]" : "text-[var(--danger)]"}`}>{browserPassed ? "Pass" : "Fail"}</p>
          <p className="text-sm text-[var(--muted)]">
            The browser check supplies its own verification responses. An accepted code shows “{registrationScreen({ verified: true })}”. A rejected code shows “{registrationScreen({ verified: false })}”.
          </p>
        </section>
        <section aria-labelledby="delivery-check" aria-live="polite" aria-atomic="true" className="border-t border-[var(--line)] p-5 sm:border-l sm:border-t-0 sm:p-7">
          <h2 id="delivery-check" className="text-lg">Message delivery</h2>
          <p className={`my-2 font-mono text-2xl font-semibold ${deliveryVerdict === "Fail" ? "text-[var(--danger)]" : deliveryPending ? "text-[var(--muted)]" : "text-[var(--accent-strong)]"}`}>{deliveryVerdict}</p>
          <p className="text-sm text-[var(--muted)]">{deliveryDetail}</p>
        </section>
      </div>
    </div>
  );
}
