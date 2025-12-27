import { PenTool, File, Moon } from "lucide-react";

const Main = () => {
  const Data = [
    {
      icon: <File className="h-6 w-6" />,
      heading: "Clean Production Code",
      subhead: "No clutter, just solid structure.",
    },
    {
      icon: <Moon className="h-6 w-6" />,
      heading: "Dark Mode Ready",
      subhead: "Beautiful in every color scheme.",
    },
    {
      icon: <PenTool className="h-6 w-6" />,
      heading: "Fully Customizable",
      subhead: "Edit, remix, and ship your way.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6"
        >
          <path d="M22.219 11.784L11.784 22.219a1.045 1.045 0 0 0 1.476 1.476L23.695 13.26a1.045 1.045 0 0 0-1.476-1.476M20.132.305L.305 20.132a1.045 1.045 0 0 0 1.476 1.476L21.608 1.781A1.045 1.045 0 0 0 20.132.305" />
        </svg>
      ),
      heading: "Registry Ready",
      subhead: "Straight into your setup.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Data.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center text-center space-y-4 rounded-xl border border-border/50 bg-card p-6 shadow-sm transition-all hover:border-border hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted/50 text-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                {item.icon}
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-xl">{item.heading}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.subhead}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Main;
