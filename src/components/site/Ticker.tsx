export function Ticker() {
  const items = [
    "Priya · ₹500", "Rohan · ₹1,500", "Anonymous · ₹10,000", "Meera · ₹300", "Aditya · ₹2,500",
    "Sneha · ₹750", "Kabir · ₹5,000", "Anonymous · ₹1,200", "Riya · ₹3,000", "Vikram · ₹600",
  ];
  return (
    <div className="border-y border-border bg-primary/5 py-3">
      <div className="relative overflow-hidden">
        <div className="flex w-max gap-10 whitespace-nowrap animate-ticker">
          {[...items, ...items].map((t, i) => (
            <span key={i} className="text-xs font-medium text-foreground/70">
              💛 {t} just donated
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
