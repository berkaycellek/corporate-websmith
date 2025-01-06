import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Layout, Smartphone } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Layout,
      title: "Web Design",
      description:
        "Crafting visually stunning and user-centric websites that perfectly capture your brand's essence and leave a lasting impression on visitors.",
    },
    {
      icon: Code,
      title: "Development",
      description:
        "Building robust, scalable web solutions using cutting-edge technologies and best practices to ensure optimal performance and maintainability.",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description:
        "Creating seamless experiences across all devices with fluid, adaptive layouts that maintain functionality and visual appeal from desktop to mobile.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 mb-6 text-sm font-medium bg-gray-100 dark:bg-gray-800 dark:text-gray-200 rounded-full">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">
            What I Can Do For You
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Delivering exceptional web solutions that transform your digital presence and drive results
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow border-0 bg-white dark:bg-gray-800"
            >
              <CardHeader>
                <service.icon className="w-12 h-12 mb-4 text-gray-700 dark:text-gray-300" />
                <CardTitle className="dark:text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;