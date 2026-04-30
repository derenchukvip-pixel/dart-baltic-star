import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      toast.success("Brief received — we'll reply within 1 business day.");
      (e.target as HTMLFormElement).reset();
    }, 700);
  };

  return (
    <Layout>
      <SEO
        title="Contact DART Agency — Baltic Influencer Marketing"
        description="Book a strategy call or request a campaign proposal for Estonia, Latvia, Lithuania or regional launch support."
        path="/contact"
      />

      <section className="container-tight pt-20 pb-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-highlight">Contact</p>
            <h1 className="mt-3 text-balance text-5xl font-bold tracking-tight md:text-6xl">
              Tell us what you need to launch.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Share your target market, timeline, budget range and objective. We'll reply with the best-fit
              format: pilot, retainer, workshop, or audit.
            </p>

            <div className="mt-8 space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-highlight" />
                <div>
                  <div className="font-semibold text-foreground">HQ — Vilnius</div>
                  <div className="text-muted-foreground">Gedimino pr. 20, LT-01103 Vilnius, Lithuania</div>
                </div>
              </div>
              <a href="mailto:hello@dartagency.com" className="flex items-start gap-3 hover:text-foreground">
                <Mail className="mt-0.5 h-5 w-5 text-highlight" />
                <div>
                  <div className="font-semibold text-foreground">Email</div>
                  <div className="text-muted-foreground">hello@dartagency.com</div>
                </div>
              </a>
              <a href="tel:+37060000000" className="flex items-start gap-3 hover:text-foreground">
                <Phone className="mt-0.5 h-5 w-5 text-highlight" />
                <div>
                  <div className="font-semibold text-foreground">Phone</div>
                  <div className="text-muted-foreground tabular">+370 600 00000</div>
                </div>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-soft md:p-10">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-grad">
                    <Send className="h-5 w-5 text-foreground" />
                  </div>
                  <h2 className="mt-4 text-2xl font-bold">Brief received</h2>
                  <p className="mt-2 text-muted-foreground">We'll reply within one business day with the best-fit format.</p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <Label htmlFor="name">Full name</Label>
                      <Input id="name" required placeholder="Jonas Kazlauskas" className="mt-1.5" />
                    </div>
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" required placeholder="Brand or agency" className="mt-1.5" />
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <Label htmlFor="email">Work email</Label>
                      <Input id="email" type="email" required placeholder="you@brand.com" className="mt-1.5" />
                    </div>
                    <div>
                      <Label htmlFor="website">Website</Label>
                      <Input id="website" placeholder="brand.com" className="mt-1.5" />
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div>
                      <Label>Country</Label>
                      <Select>
                        <SelectTrigger className="mt-1.5"><SelectValue placeholder="Market" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="lt">Lithuania</SelectItem>
                          <SelectItem value="lv">Latvia</SelectItem>
                          <SelectItem value="ee">Estonia</SelectItem>
                          <SelectItem value="all">All Baltics</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Budget band</Label>
                      <Select>
                        <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="<10">Under €10k</SelectItem>
                          <SelectItem value="10-25">€10k–€25k</SelectItem>
                          <SelectItem value="25-75">€25k–€75k</SelectItem>
                          <SelectItem value="75+">€75k+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Launch timing</Label>
                      <Select>
                        <SelectTrigger className="mt-1.5"><SelectValue placeholder="When" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">ASAP</SelectItem>
                          <SelectItem value="1m">1 month</SelectItem>
                          <SelectItem value="q">This quarter</SelectItem>
                          <SelectItem value="exp">Exploring</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="goal">Objective</Label>
                    <Textarea id="goal" required rows={4} placeholder="Awareness, launch, social proof, traffic, sales…" className="mt-1.5" />
                  </div>
                  <div className="flex items-start gap-2">
                    <Checkbox id="consent" required className="mt-1" />
                    <Label htmlFor="consent" className="text-xs leading-snug text-muted-foreground">
                      I agree that DART Agency may contact me about this enquiry. See our <a className="underline" href="/legal/privacy">privacy policy</a>.
                    </Label>
                  </div>
                  <Button type="submit" disabled={submitting} className="w-full bg-foreground text-background hover:opacity-90">
                    {submitting ? "Sending…" : "Send brief"} <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;