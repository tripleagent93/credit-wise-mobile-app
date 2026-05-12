export function TextInputShowcase() {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <label className="text-xs font-medium text-gray-500 mb-1 block">Email</label>
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-[#212121] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1851A0] focus:border-transparent transition"
        />
      </div>
      <div>
        <label className="text-xs font-medium text-gray-500 mb-1 block">Password</label>
        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-[#212121] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1851A0] focus:border-transparent transition"
        />
      </div>
    </div>
  );
}
