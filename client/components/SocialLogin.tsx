export const AppleLogo = ({ size = 18, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
    <path d="M16.3396 20.28C15.4004 21.23 14.375 21.08 13.3879 20.63C12.3433 20.17 11.385 20.15 10.2829 20.63C8.90293 21.25 8.1746 21.07 7.35043 20.28C2.67376 15.25 3.36377 7.59 8.67293 7.31C9.96668 7.38 10.8675 8.05 11.6246 8.11C12.7554 7.87 13.8383 7.18 15.0458 7.27C16.4929 7.39 17.5854 7.99 18.3042 9.07C15.3142 10.94 16.0233 15.05 18.7642 16.2C18.2179 17.7 17.5088 19.19 16.33 20.29L16.3396 20.28ZM11.5288 7.25C11.385 5.02 13.1196 3.18 15.1129 3C15.3908 5.58 12.8704 7.5 11.5288 7.25Z" fill="white"/>
  </svg>
);

export const GoogleLogo = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M10.9908 12.7416V9.33165H19.5708C19.6991 9.90915 19.8 10.45 19.8 11.2108C19.8 16.445 16.2891 20.1666 11 20.1666C5.93998 20.1666 1.83331 16.06 1.83331 11C1.83331 5.93998 5.93998 1.83331 11 1.83331C13.475 1.83331 15.5466 2.74081 17.1325 4.22581L14.5291 6.75581C13.8691 6.13248 12.7141 5.39915 11 5.39915C7.96581 5.39915 5.49081 7.91998 5.49081 11.0091C5.49081 14.0983 7.96581 16.6191 11 16.6191C14.5108 16.6191 15.8033 14.19 16.0416 12.7508H10.9908V12.7416Z" fill="black"/>
  </svg>

);

export const FacebookLogo = ({
  size = 18,
  color = "#1877F2",
}: {
  size?: number;
  color?: string;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
    <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z" fill="black"/>
  </svg>
);

export function SocialLoginShowcase() {
  return (
    <div className="flex flex-col gap-6">
      {/* Text / Full Width */}
      <div>
        <p className="text-xs text-gray-400 font-medium mb-2">Sign In</p>
        <div className="flex flex-col gap-2">
          <button className="w-full flex items-center justify-center gap-2 bg-black text-white py-2.5 rounded-lg text-sm font-medium hover:bg-gray-900 transition-colors">
            <AppleLogo size={24} color="white" />
            Sign in with Apple
          </button>
          <button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-800 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
            <GoogleLogo size={24} />
            Sign in with Google
          </button>
          <button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-800 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
            <FacebookLogo size={24} />
            Sign in with Facebook
          </button>
        </div>
      </div>

      {/* Icon Only */}
      <div>
        <p className="text-xs text-gray-400 font-medium mb-2">Icon Only</p>
        <div className="flex gap-3">
          <button className="w-10 h-10 rounded-[8px] bg-black flex items-center justify-center hover:bg-gray-900 transition-colors">
            <AppleLogo size={24} color="white" />
          </button>
          <button className="w-10 h-10 rounded-[8px] bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
            <GoogleLogo size={24} />
          </button>
          <button className="w-10 h-10 rounded-[8px] bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
            <FacebookLogo size={24} />
          </button>
        </div>
      </div>

      {/* Continue With */}
      <div>
        <p className="text-xs text-gray-400 font-medium mb-2">Continue With</p>
        <div className="flex flex-col gap-2">
          <button className="w-full flex items-center justify-center gap-2 bg-black text-white px-2 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-900 transition-colors">
            <AppleLogo size={20} color="white" />
            Continue with Apple
          </button>
          <button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-800 px-2 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
            <GoogleLogo size={20} />
            Continue with Google
          </button>
          <button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-800 px-2 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
            <FacebookLogo size={20} />
            Continue with Facebook
          </button>
        </div>
      </div>
    </div>
  );
}
