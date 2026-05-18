import { useState } from "react";
import GooglePlay from "../components/assets/images/Google Play.png";
import CreditScoreIllustration from "../components/assets/images/CreditScoreIllustration.svg";
import RealtimeAlertsIllustration from "../components/assets/images/RealtimeAlertsIllustration.svg";
import PhoneMockup from "../components/assets/images/Phone mockup @1.5x.png";
import PhoneMockups from "../components/assets/images/Phone mockups @2x.png";

const Logo = ({ id = "logo" }: { id?: string }) => (
  <div className="flex items-center gap-1">
    <div className="relative w-8 h-4 flex-shrink-0">
      <svg
        width="32"
        height="16"
        viewBox="0 0 32 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 16C3.70975e-07 11.7565 1.68571 7.68688 4.68629 4.68629C7.68687 1.68571 11.7565 2.4787e-06 16 0C20.2435 -2.4787e-06 24.3131 1.6857 27.3137 4.68628C30.3143 7.68686 32 11.7565 32 16L26.8977 16C26.8977 13.1097 25.7496 10.3379 23.7058 8.29414C21.6621 6.25042 18.8902 5.10227 16 5.10227C13.1097 5.10228 10.3379 6.25043 8.29414 8.29415C6.25042 10.3379 5.10228 13.1097 5.10227 16H0Z"
          fill="#1851A0"
        />
      </svg>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute"
        style={{ left: "8px", top: "5px" }}
      >
        <g clipPath={`url(#clip-${id})`}>
          <path
            d="M4.30886 12.9134C5.81072 14.2399 8.10063 14.104 9.42089 12.6092C10.7412 11.1145 12.351 3.8083 12.351 3.8083C12.351 3.8083 5.30122 6.30636 3.98096 7.80112C2.6607 9.29588 2.8086 11.585 4.31047 12.9116L4.30886 12.9134Z"
            fill="#2ECC71"
          />
        </g>
        <defs>
          <clipPath id={`clip-${id}`}>
            <rect
              width="12.1004"
              height="12.1004"
              fill="white"
              transform="translate(9.06924 17.0797) rotate(-138.547)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
    <span className="font-opensans font-bold text-xl leading-[130%]">
      <span className="text-brand-primary">Credit</span>
      <span className="text-brand-accent">Wise</span>
    </span>
  </div>
);

const AppStoreBadge = ({
  variant = "dark",
}: {
  variant?: "dark" | "white";
}) => {
  const src =
    variant === "white"
      ? "https://api.builder.io/api/v1/image/assets/TEMP/c5239184fb8ed2dca08881985d364f84ec33a172?width=360"
      : "https://api.builder.io/api/v1/image/assets/TEMP/49ffc12e944182a8d20f55e222b7f88f5bceeb1f?width=360";
  return (
    <img
      src={src}
      alt="Download on the App Store"
      className="h-[52px] w-[180px] object-contain"
    />
  );
};

const GooglePlayBadge = ({
  variant = "dark",
}: {
  variant?: "dark" | "white";
}) => (
  <img
    src={GooglePlay}
    alt="Get it on Google Play"
    className="h-[52px] w-[180px] object-contain"
  />
);

const StarRating = ({ count = 5 }: { count?: number }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.63067 1.28836C7.76731 0.959844 8.23269 0.959845 8.36933 1.28836L10.0222 5.26235C10.0798 5.40084 10.21 5.49547 10.3596 5.50745L14.6498 5.8514C15.0045 5.87983 15.1483 6.32244 14.8781 6.55391L11.6094 9.35391C11.4954 9.45149 11.4457 9.6046 11.4805 9.7505L12.4791 13.9371C12.5617 14.2831 12.1852 14.5567 11.8816 14.3712L8.2085 12.1277C8.0805 12.0496 7.91951 12.0496 7.7915 12.1277L4.11845 14.3712C3.81481 14.5567 3.43831 14.2831 3.52086 13.9371L4.51951 9.7505C4.55431 9.6046 4.50456 9.45149 4.39065 9.35391L1.12193 6.5539C0.851714 6.32244 0.995526 5.87983 1.35019 5.8514L5.64044 5.50745C5.78995 5.49547 5.9202 5.40084 5.9778 5.26235L7.63067 1.28836Z"
          fill={i < count ? "#FDB022" : "#E5E7EB"}
        />
      </svg>
    ))}
  </div>
);

interface ReviewCardProps {
  name: string;
  text: string;
  avatar: string;
  stars?: number;
}

const ReviewCard = ({ name, text, avatar, stars = 5 }: ReviewCardProps) => (
  <div className="flex flex-col justify-center items-start gap-2.5 p-5 rounded-lg bg-[#F5F7FB] min-w-0 flex-1">
    <div className="flex items-center gap-2.5">
      <img
        src={avatar}
        alt={name}
        className="w-8 h-8 rounded-full object-cover flex-shrink-0"
      />
      <span className="font-inter font-medium text-lg text-black leading-[30px]">
        {name}
      </span>
    </div>
    <p className="text-[rgba(0,0,0,0.7)] font-inter text-base leading-6">
      {text}
    </p>
    <StarRating count={stars} />
  </div>
);

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const reviews = [
    {
      name: "Emily Clark",
      text: "CreditWise helped me understand my credit score better than any other app I've tried.",
      avatar:
        "https://api.builder.io/api/v1/image/assets/TEMP/4d49b03798c0c6599970759847a402a1c03170ac?width=64",
      stars: 5,
    },
    {
      name: "Michael Thompson",
      text: "The real-time alerts are a game changer for keeping my credit secure.",
      avatar:
        "https://api.builder.io/api/v1/image/assets/TEMP/aab4c247626de781f6cbcf40702d2f09cfd680a1?width=64",
      stars: 5,
    },
    {
      name: "Sophia Martinez",
      text: "I love how easy it is to track my credit progress over time with CreditWise.",
      avatar:
        "https://api.builder.io/api/v1/image/assets/TEMP/6dc1de1428daeeb486e6361f7eb90856e25652be?width=64",
      stars: 5,
    },
    {
      name: "David Nguyen",
      text: "Using CreditWise gave me the confidence to apply for my first home loan.",
      avatar:
        "https://api.builder.io/api/v1/image/assets/TEMP/b6a4ec53aeea18d0858aa05f5d7fe529db7238bd?width=64",
      stars: 4,
    },
    {
      name: "Olivia Patel",
      text: "The detailed reports and tips helped me improve my score significantly.",
      avatar:
        "https://api.builder.io/api/v1/image/assets/TEMP/8ab4e23ac7fa5cdb72e0c60c06b8a219488ab1f9?width=64",
      stars: 5,
    },
    {
      name: "James Wilson",
      text: "This app makes monitoring my credit simple and stress-free.",
      avatar:
        "https://api.builder.io/api/v1/image/assets/TEMP/e1d11b3f1553acdf08c512fedcc62a3b449cc25a?width=64",
      stars: 4,
    },
  ];

  return (
    <div className="min-h-screen font-inter bg-white overflow-x-hidden">
      {/* Header */}
      <header className="w-full bg-white sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-[1216px] mx-auto px-5 lg:px-10 flex items-center justify-between h-16 lg:h-20">
          <Logo id="header-logo" />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {["How it Works", "Features", "Testimonials"].map((item) => (
              <button
                key={item}
                onClick={() =>
                  scrollTo(item.toLowerCase().replace(/\s+/g, "-"))
                }
                className="font-inter font-medium text-base text-black hover:text-brand-primary transition-colors cursor-pointer"
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              className="hidden md:flex items-center justify-center px-4 py-2 rounded-md bg-brand-primary text-white font-opensans text-base hover:bg-[#1340800] transition-colors whitespace-nowrap"
              style={{ backgroundColor: "#1851A0" }}
            >
              Download App
            </button>
            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                {mobileMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-5 py-4 flex flex-col gap-4">
            {["How it Works", "Features", "Testimonials"].map((item) => (
              <button
                key={item}
                onClick={() =>
                  scrollTo(item.toLowerCase().replace(/\s+/g, "-"))
                }
                className="text-left font-medium text-base text-black"
              >
                {item}
              </button>
            ))}
            <button
              className="w-full py-2 rounded-md bg-brand-primary text-white font-opensans text-base"
              style={{ backgroundColor: "#1851A0" }}
            >
              Download App
            </button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="w-full px-4 pt-8 pb-0 flex flex-col items-center overflow-hidden">
        <div
          className="w-full max-w-[1400px] mx-auto rounded-[20px] overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, #F2F6FD 48.63%, #E2F8EB 91.25%)",
          }}
        >
          <div className="flex flex-col items-center pt-12 lg:pt-20 px-4 gap-6 lg:gap-8">
            {/* Text content */}
            <div className="flex flex-col items-center gap-5 max-w-[840px] text-center">
              <h1 className="font-inter font-semibold text-[#212121] text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.2]">
                Manage Your Credit Score with CreditWise
              </h1>
              <p className="font-inter font-normal text-[#757575] text-base sm:text-lg leading-7 max-w-[640px]">
                Get the insights you need to reach your financial goals with our
                free credit monitoring app.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
                <AppStoreBadge variant="dark" />
                <GooglePlayBadge variant="dark" />
              </div>
            </div>

            {/* Phone mockups */}
            <div
              className="relative flex items-end justify-center w-full max-w-[520px] mx-auto"
              style={{ height: "380px" }}
            >
              <img
                src={PhoneMockups}
                alt="CreditWise app screen"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="w-full bg-white py-16 lg:py-20 px-5 lg:px-20"
      >
        <div className="max-w-[1216px] mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left image card */}
          <div className="w-full lg:w-[592px] flex-shrink-0 rounded-[20px] bg-brand-primary flex items-end justify-center pt-10 px-6 lg:px-10 overflow-hidden min-h-[320px] lg:min-h-[480px]">
            <img
              src={PhoneMockup}
              alt="CreditWise app on phone"
              className="w-full max-w-[380px] lg:max-w-[500px] object-contain"
            />
          </div>

          {/* Right content */}
          <div className="flex flex-col gap-8 max-w-[518px]">
            <div className="flex flex-col gap-4">
              <h2 className="font-inter font-semibold text-[#212121] text-3xl lg:text-[36px] leading-[38px] capitalize">
                How it works
              </h2>
              <p className="font-inter text-[#757575] text-base leading-6">
                Improving your credit shouldn't be a guessing game. We turn your
                data into a personalized roadmap.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {[
                {
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 4C13.0609 4 14.0783 4.42143 14.8284 5.17157C15.5786 5.92172 16 6.93913 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12C10.9391 12 9.92172 11.5786 9.17157 10.8284C8.42143 10.0783 8 9.06087 8 8C8 6.93913 8.42143 5.92172 9.17157 5.17157C9.92172 4.42143 10.9391 4 12 4ZM12 14C16.42 14 20 15.79 20 18V20H4V18C4 15.79 7.58 14 12 14Z"
                        fill="#1851A0"
                      />
                    </svg>
                  ),
                  title: "Step 1: Sign Up",
                  desc: "Create an account in seconds. It's secure, fast and easy.",
                },
                {
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.84 21.79 9.69 21.39 8.61L19.79 10.21C19.93 10.8 20 11.4 20 12C20 14.1217 19.1571 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20C9.87827 20 7.84344 19.1571 6.34315 17.6569C4.84285 16.1566 4 14.1217 4 12C4 9.87827 4.84285 7.84344 6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4C12.6 4 13.2 4.07 13.79 4.21L15.4 2.6C14.31 2.21 13.16 2 12 2ZM19 2L15 6V7.5L12.45 10.05C12.3 10 12.15 10 12 10C11.4696 10 10.9609 10.2107 10.5858 10.5858C10.2107 10.9609 10 11.4696 10 12C10 12.5304 10.2107 13.0391 10.5858 13.4142C10.9609 13.7893 11.4696 14 12 14C12.5304 14 13.0391 13.7893 13.4142 13.4142C13.7893 13.0391 14 12.5304 14 12C14 11.85 14 11.7 13.95 11.55L16.5 9H18L22 5H19V2ZM12 6C10.4087 6 8.88258 6.63214 7.75736 7.75736C6.63214 8.88258 6 10.4087 6 12C6 13.5913 6.63214 15.1174 7.75736 16.2426C8.88258 17.3679 10.4087 18 12 18C13.5913 18 15.1174 17.3679 16.2426 16.2426C17.3679 15.1174 18 13.5913 18 12H16C16 13.0609 15.5786 14.0783 14.8284 14.8284C14.0783 15.5786 13.0609 16 12 16C10.9391 16 9.92172 15.5786 9.17157 14.8284C8.42143 14.0783 8 13.0609 8 12C8 10.9391 8.42143 9.92172 9.17157 9.17157C9.92172 8.42143 10.9391 8 12 8V6Z"
                        fill="#1851A0"
                      />
                    </svg>
                  ),
                  title: "Step 2: Set Your Goal",
                  desc: "Pick a target score and use our Simulator to see how to get there.",
                },
                {
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M13.16 22.1898L11.5 18.3498C13.1 17.7698 14.57 16.9998 15.93 16.0798L13.15 22.1898M5.65 12.4998L1.81 10.8498L7.92 8.06982C6.98181 9.44619 6.21923 10.9344 5.65 12.4998ZM21.66 2.34982C21.66 2.34982 23.78 7.30982 18.11 12.9998C15.91 15.1698 13.53 16.4998 11.38 17.3398C10.64 17.6198 9.81 17.4398 9.26 16.8798L7.13 14.7498C6.57 14.1898 6.39 13.3698 6.66 12.6198C7.5 10.4998 8.83 8.08982 11 5.88982C16.69 0.215817 21.66 2.34982 21.66 2.34982ZM6.25 21.9998H4.84L8.93 17.8998C9.23 18.1098 9.56 18.2598 9.9 18.3498L6.25 21.9998ZM2 21.9998V20.5898L6.77 15.8098L8.2 17.2298L3.41 21.9998H2ZM2 19.1598V17.7498L5.65 14.0998C5.74 14.4498 5.89 14.7798 6.1 15.0698L2 19.1598ZM16 5.99982C15.4696 5.99982 14.9609 6.21053 14.5858 6.5856C14.2107 6.96068 14 7.46938 14 7.99982C14 8.53025 14.2107 9.03896 14.5858 9.41403C14.9609 9.7891 15.4696 9.99982 16 9.99982C17.11 9.99982 18 9.10982 18 7.99982C18 7.46938 17.7893 6.96068 17.4142 6.5856C17.0391 6.21053 16.5304 5.99982 16 5.99982Z"
                        fill="#1851A0"
                      />
                    </svg>
                  ),
                  title: "Step 3: Hit Your Target",
                  desc: "Receive real-time alerts as you reach your milestones.",
                },
              ].map((step) => (
                <div key={step.title} className="flex flex-col gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-[#D3E2F8] flex items-center justify-center flex-shrink-0">
                      {step.icon}
                    </div>
                    <span className="font-inter font-medium text-[#212121] text-xl leading-[30px]">
                      {step.title}
                    </span>
                  </div>
                  <p className="font-inter text-[#757575] text-base leading-6 ml-[46px]">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features A - Unlock Credit Score */}
      <section
        id="features"
        className="w-full bg-white pt-16 lg:pt-20 pb-8 lg:pb-10 px-5 lg:px-20"
      >
        <div className="max-w-[1216px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8">
          <img
            src={CreditScoreIllustration}
            alt="Unlock Your Credit Score illustration"
            className="w-full lg:w-[48%] max-w-[527px] object-contain"
          />
          <div className="flex flex-col gap-5 lg:w-[45%] max-w-[519px]">
            <h2 className="font-inter font-semibold text-[#212121] text-3xl lg:text-[36px] leading-[38px] capitalize">
              Unlock Your Credit Score
            </h2>
            <p className="font-inter text-[#757575] text-base lg:text-lg leading-7">
              Take control of your credit with CreditWise. Get personalized
              insights, track your progress, and achieve your financial goals.
            </p>
            <button className="self-start flex items-center justify-center px-4 py-2 rounded-md border border-[#333] text-[#333] font-opensans text-base hover:bg-gray-50 transition-colors">
              Download Now
            </button>
          </div>
        </div>
      </section>

      {/* Features B - Real-Time Alerts */}
      <section className="w-full bg-white pb-16 lg:pb-20 pt-8 lg:pt-10 px-5 lg:px-20">
        <div className="max-w-[1216px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8">
          <div className="flex flex-col gap-5 lg:w-[45%] max-w-[519px]">
            <h2 className="font-inter font-semibold text-[#212121] text-3xl lg:text-[36px] leading-[38px] capitalize">
              Stay Informed with Real-Time Alerts
            </h2>
            <p className="font-inter text-[#757575] text-base leading-6">
              Get notified of critical changes to your credit report with
              CreditWise. We'll alert you to new accounts, credit inquiries, and
              more, so you can take action quickly.
            </p>
            <button className="self-start flex items-center justify-center px-4 py-2 rounded-md border border-[#333] text-[#333] font-opensans text-base hover:bg-gray-50 transition-colors">
              Download Now
            </button>
          </div>
          {/* Illustration */}
          <img
            src={RealtimeAlertsIllustration}
            alt="Realtime Alerts illustration"
            className="w-full lg:w-[48%] max-w-[527px] object-contain"
          />
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="w-full bg-white py-16 lg:py-20 px-5 lg:px-20"
      >
        <div className="max-w-[1216px] mx-auto flex flex-col gap-10">
          <div className="flex flex-col items-center gap-3 text-center">
            <h2 className="font-inter font-semibold text-[#212121] text-3xl lg:text-4xl">
              Don't Just Take Our Word For It
            </h2>
            <p className="font-inter text-[#757575] text-base leading-6 max-w-[600px]">
              See how CreditWise is transforming the financial lives of users
              just like you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {reviews.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="w-full px-5 lg:px-20 py-10 lg:py-10"
        style={{
          background: "linear-gradient(180deg, #FFF 11.93%, #F8F9FA 102.17%)",
        }}
      >
        <div
          className="max-w-[1216px] mx-auto rounded-[20px] overflow-hidden"
          style={{ backgroundColor: "#1851A0" }}
        >
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex flex-col gap-5 p-8 lg:p-10 lg:pl-16 flex-1">
              <h2 className="font-inter font-semibold text-white text-2xl sm:text-3xl lg:text-[42px] leading-tight">
                Download CreditWise & Take Control of Your Finances Today
              </h2>
              <p className="font-inter text-[#F8F9FA] text-base lg:text-lg leading-7">
                Download on the App Store or Google Play Store
              </p>
              <div className="flex flex-wrap gap-4">
                <AppStoreBadge variant="white" />
                <GooglePlayBadge variant="white" />
              </div>
            </div>
            <div className="lg:self-end flex-shrink-0 px-8 lg:px-0 lg:pr-0">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/327183958cb1f419632378cd9fa9f5503e736e83?width=732"
                alt="CreditWise app"
                className="w-[220px] lg:w-[320px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#F8F9FA] pt-16 lg:pt-20 pb-8 px-5 lg:px-20">
        <div className="max-w-[1216px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 pb-10 lg:pb-12">
            {/* Brand */}
            <div className="flex flex-col gap-2 max-w-[280px]">
              <Logo id="footer-logo" />
              <p className="font-inter text-[#757575] text-base leading-6 mt-1">
                Empowering you to make smart financial choices.
              </p>
            </div>

            {/* Links */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-5 flex-1">
              {[
                {
                  title: "Help Center",
                  links: ["FAQs", "Support Articles", "Contact Us"],
                },
                {
                  title: "About Us",
                  links: ["Our Story", "Partners", "Newsroom"],
                },
                {
                  title: "Legal",
                  links: [
                    "Privacy Policy",
                    "Terms of Service",
                    "Cookie Settings",
                  ],
                },
                {
                  title: "Connect",
                  links: ["Blog", "Careers", "Social Media"],
                },
              ].map((col) => (
                <div key={col.title} className="flex flex-col gap-2.5">
                  <span className="font-inter font-medium text-[#212121] text-lg leading-7">
                    {col.title}
                  </span>
                  {col.links.map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="font-inter text-[#757575] text-base leading-7 hover:text-brand-primary transition-colors"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-[#F2F2F2] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a
                href="#"
                className="text-brand-primary hover:opacity-80 transition-opacity"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10.5" fill="#1851A0" />
                  <path
                    d="M15.9103 15.2112L16.3767 12.2476H13.4589V10.3252C13.4589 9.51428 13.8657 8.7233 15.1726 8.7233H16.5V6.20024C16.5 6.20024 15.2959 6 14.1452 6C11.7411 6 10.1712 7.4197 10.1712 9.98883V12.2476H7.5V15.2112H10.1712V22.3759C10.7075 22.458 11.2562 22.5 11.8151 22.5C12.374 22.5 12.9226 22.458 13.4589 22.3759V15.2112H15.9103Z"
                    fill="white"
                  />
                </svg>
              </a>
              {/* Twitter */}
              <a href="#" className="hover:opacity-80 transition-opacity">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M8.84156 21C6.41531 21 4.15363 20.2943 2.25 19.0767C3.86624 19.1813 6.71855 18.9308 8.49268 17.2386C5.82381 17.1161 4.6202 15.0692 4.4632 14.1945C4.68997 14.2819 5.77148 14.3869 6.382 14.142C3.31192 13.3722 2.84095 10.678 2.94561 9.85573C3.52125 10.2581 4.49809 10.3981 4.88185 10.3631C2.02109 8.31618 3.05027 5.23707 3.55613 4.57226C5.60912 7.4165 8.6859 9.01393 12.4923 9.10278C12.4205 8.78802 12.3826 8.46032 12.3826 8.12373C12.3826 5.70819 14.3351 3.75 16.7435 3.75C18.0019 3.75 19.1358 4.28457 19.9318 5.13963C20.7727 4.94258 22.0382 4.4813 22.6569 4.0824C22.3451 5.20208 21.3742 6.13612 20.7869 6.48231C21.3028 6.40428 22.6986 6.13603 23.25 5.76192C22.9773 6.39094 21.948 7.4368 21.1033 8.02232C21.2605 14.9535 15.9574 21 8.84156 21Z"
                    fill="#1851A0"
                  />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="hover:opacity-80 transition-opacity">
                <div
                  className="w-6 h-6 rounded-md bg-brand-primary flex items-center justify-center"
                  style={{ backgroundColor: "#1851A0" }}
                >
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <path
                      d="M12.75 3.375C12.75 3.99632 12.2463 4.5 11.625 4.5C11.0037 4.5 10.5 3.99632 10.5 3.375C10.5 2.75368 11.0037 2.25 11.625 2.25C12.2463 2.25 12.75 2.75368 12.75 3.375Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.5 11.25C9.57107 11.25 11.25 9.57107 11.25 7.5C11.25 5.42893 9.57107 3.75 7.5 3.75C5.42893 3.75 3.75 5.42893 3.75 7.5C3.75 9.57107 5.42893 11.25 7.5 11.25ZM7.5 9.75C8.74264 9.75 9.75 8.74264 9.75 7.5C9.75 6.25736 8.74264 5.25 7.5 5.25C6.25736 5.25 5.25 6.25736 5.25 7.5C5.25 8.74264 6.25736 9.75 7.5 9.75Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 7.2C0 4.67976 0 3.41965 0.490471 2.45704C0.921901 1.61031 1.61031 0.921901 2.45704 0.490471C3.41965 0 4.67976 0 7.2 0H7.8C10.3202 0 11.5804 0 12.543 0.490471C13.3897 0.921901 14.0781 1.61031 14.5095 2.45704C15 3.41965 15 4.67976 15 7.2V7.8C15 10.3202 15 11.5804 14.5095 12.543C14.0781 13.3897 13.3897 14.0781 12.543 14.5095C11.5804 15 10.3202 15 7.8 15H7.2C4.67976 15 3.41965 15 2.45704 14.5095C1.61031 14.0781 0.921901 13.3897 0.490471 12.543C0 11.5804 0 10.3202 0 7.8V7.2ZM7.2 1.5H7.8C9.08487 1.5 9.95831 1.50117 10.6334 1.55633C11.2911 1.61006 11.6274 1.70745 11.862 1.82698C12.4265 2.1146 12.8854 2.57354 13.173 3.13803C13.2926 3.37263 13.3899 3.70893 13.4437 4.36656C13.4988 5.04169 13.5 5.91513 13.5 7.2V7.8C13.5 9.08487 13.4988 9.95831 13.4437 10.6334C13.3899 11.2911 13.2926 11.6274 13.173 11.862C12.8854 12.4265 12.4265 12.8854 11.862 13.173C11.6274 13.2926 11.2911 13.3899 10.6334 13.4437C9.95831 13.4988 9.08487 13.5 7.8 13.5H7.2C5.91513 13.5 5.04169 13.4988 4.36656 13.4437C3.70893 13.3899 3.37263 13.2926 3.13803 13.173C2.57354 12.8854 2.1146 12.4265 1.82698 11.862C1.70745 11.6274 1.61006 11.2911 1.55633 10.6334C1.50117 9.95831 1.5 9.08487 1.5 7.8V7.2C1.5 5.91513 1.50117 5.04169 1.55633 4.36656C1.61006 3.70893 1.70745 3.37263 1.82698 3.13803C2.1146 2.57354 2.57354 2.1146 3.13803 1.82698C3.37263 1.70745 3.70893 1.61006 4.36656 1.55633C5.04169 1.50117 5.91513 1.5 7.2 1.5Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </a>
            </div>
            <p className="font-inter font-medium text-[#757575] text-xs leading-6">
              © Copyright 2026, All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
