import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  AppHeader,
  TabBar,
  ButtonShowcase,
  BadgeShowcase,
  AlertShowcase,
  ModalShowcase,
  SocialLoginShowcase,
  GaugeShowcase,
  TextInputShowcase,
  AccordionShowcase,
  BottomSheet,
  Overlay,
} from "@/components";

function Section({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div>
      <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">{label}</p>
      <div
        className={cn(
          "border-2 border-dashed border-purple-200 rounded-lg p-4 bg-white h-full",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}

export default function Components() {
  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      <div className="max-w-screen-2xl mx-auto px-6 py-8">
        {/* Page header */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-sm text-[#1851A0] hover:underline mb-4 font-medium"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-[#212121] font-inter">
            CreditWise Components
          </h1>
          <p className="text-[#757575] mt-1.5">
            Component library showcase — design system reference
          </p>
        </div>

        {/* Row 1: Header | Tab Bar | Buttons | Badges | Alerts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
          <Section label="App Header">
            <AppHeader />
          </Section>
          <Section label="Tab Bar">
            <TabBar />
          </Section>
          <Section label="Buttons">
            <ButtonShowcase />
          </Section>
          <Section label="Badges">
            <BadgeShowcase />
          </Section>
          <Section label="Alerts">
            <AlertShowcase />
          </Section>
        </div>

        {/* Row 2: Modal | Social Login | Gauges | Input */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <Section label="Modal">
            <ModalShowcase />
          </Section>
          <Section label="Social Login">
            <SocialLoginShowcase />
          </Section>
          <Section label="Credit Score Gauge">
            <GaugeShowcase />
          </Section>
          <Section label="Text Input">
            <TextInputShowcase />
          </Section>
        </div>

        {/* Row 3: Accordion | Bottom Sheet | Overlay */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12">
          <Section label="Accordion">
            <AccordionShowcase />
          </Section>
          <Section label="Bottom Sheet">
            <BottomSheet />
          </Section>
          <Section label="Overlay">
            <Overlay />
          </Section>
        </div>
      </div>
    </div>
  );
}
