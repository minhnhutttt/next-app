"use client";
import { useThemeContext } from "./context/page-context";
export default function PageWrapper({ children }) {
  const { loading } = useThemeContext();
  return (
    <div className="">
      {loading && (
        <div className="fixed inset-0 z-[99]">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              className="page-transition"
              style={{ animationDelay: `${0.09 * index}s` }}
              key={index}
            ></div>
          ))}
        </div>
      )}
      {children}
    </div>
  );
}
