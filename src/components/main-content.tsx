import { PenTool, File, Moon, Package } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const Main = () => {
  const Data = [
    {
      icon: <File className="h-6 w-6" />,
      heading: "Clean Production Code",
      subhead: "No clutter, just solid structure. Optimized for performance and readability.",
    },
    {
      icon: <Moon className="h-6 w-6" />,
      heading: "Dark Mode Ready",
      subhead: "Beautiful in every color scheme. toggle seamlessly between light and dark themes.",
    },
    {
      icon: <PenTool className="h-6 w-6" />,
      heading: "Fully Customizable",
      subhead: "Edit, remix, and ship your way. Use the components as a base for your own design system.",
    },
    {
      icon: <Package className="h-6 w-6" />,
      heading: "Registry Ready",
      subhead: "Straight into your setup. Install components via CLI or copy-paste directly.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Data.map((item, index) => (
            <Card key={index} className="group relative overflow-hidden transition-all hover:shadow-lg hover:border-primary/50">
              <CardHeader className="items-center text-center pb-2">
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-hover:scale-110 duration-300">
                  {item.icon}
                </div>
                <CardTitle className="text-xl">{item.heading}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                <CardDescription className="text-sm leading-relaxed">
                  {item.subhead}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Main;
