const donationItems = [
  "Priya · ₹500", "Rohan · ₹1,500", "Anonymous · ₹10,000", "Meera · ₹300",
  "Aditya · ₹2,500", "Sneha · ₹750", "Kabir · ₹5,000", "Anonymous · ₹1,200",
  "Riya · ₹3,000", "Vikram · ₹600", "Lakshmi · ₹2,000", "Arjun · ₹8,500",
];

const missionItems = [
  "Education", "Menstrual Dignity", "Skill Development", "Healthcare Access",
  "Leadership", "Economic Freedom", "Safety", "Empowerment", "Equality",
  "Voice", "Independence", "Growth",
];

export function Ticker() {
  return (
    <div className="border-y border-border overflow-hidden">
      {/* Top ticker — donations, warm bg */}
      <div className="bg-primary/8 py-3">
        <div className="relative overflow-hidden">
          <div className="flex w-max gap-10 whitespace-nowrap animate-ticker">
            {[...donationItems, ...donationItems].map((t, i) => (
              <span key={i} className="inline-flex items-center gap-2 text-xs font-semibold text-foreground/80">
                <span className="text-base leading-none">💛</span>
                {t} just donated
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom ticker — mission words, dark bg */}
      <div className="bg-secondary py-3">
        <div className="relative overflow-hidden">
          {/* Reverse direction */}
          <div
            className="flex w-max gap-8 whitespace-nowrap"
            style={{ animation: "ticker 22s linear infinite reverse" }}
          >
            {[...missionItems, ...missionItems].map((t, i) => (
              <span key={i} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-secondary-foreground/70">
                <span className="h-1 w-1 rounded-full bg-primary" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}