import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Send, MessageSquare } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t('contact.toast.title'),
      description: t('contact.toast.description'),
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 opacity-90" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1 mb-6 text-sm font-medium bg-white/30 backdrop-blur-sm dark:bg-white/10 rounded-full">
            <MessageSquare className="w-4 h-4" />
            {t('contact.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-400">
            {t('contact.title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="bg-white/70 dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder={t('contact.form.name')}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder={t('contact.form.email')}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400"
                />
              </div>
              <div>
                <Textarea
                  placeholder={t('contact.form.message')}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className="min-h-[150px] bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400"
                />
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 dark:from-purple-500 dark:to-blue-500 flex items-center justify-center gap-2 group">
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                {t('contact.form.submit')}
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;