
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Globe, Heart, Shield, Users, BookOpen, Gavel, Building } from "lucide-react";

const Index = () => {
  const objectives = [
    {
      icon: Users,
      title: "تعزيز الوعي المجتمعي",
      description: "نشر الثقافة حول قضايا التنمية المستدامة"
    },
    {
      icon: Shield,
      title: "حماية البيئة",
      description: "الحفاظ على الموارد الطبيعية لضمان استدامتها"
    },
    {
      icon: Gavel,
      title: "العدالة الاجتماعية",
      description: "ترسيخ مبادئ المساواة والعدالة الاجتماعية"
    },
    {
      icon: BookOpen,
      title: "التعلم المستمر",
      description: "دعم التعلم وتطوير المهارات والقدرات"
    },
    {
      icon: Heart,
      title: "حقوق الإنسان",
      description: "احترام وصون حقوق الإنسان وتعزيز كرامته"
    },
    {
      icon: Building,
      title: "التراث الثقافي",
      description: "الحفاظ على التراث الثقافي وتعزيز الهوية الوطنية"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50" dir="rtl">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-blue-600 rounded-full flex items-center justify-center">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">مؤسسة نهر ديالى للتنمية المستدامة</h1>
                <p className="text-sm text-gray-600">Diyala River Foundation for Sustainable Development</p>
                <p className="text-xs text-gray-500">منظمة غير حكومية</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6 space-x-reverse">
              <Button variant="ghost" className="text-gray-700 hover:text-green-600">الرئيسية</Button>
              <Button variant="ghost" className="text-gray-700 hover:text-green-600">من نحن</Button>
              <Button variant="ghost" className="text-gray-700 hover:text-green-600">أهدافنا</Button>
              <Button variant="ghost" className="text-gray-700 hover:text-green-600">اتصل بنا</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">مؤسسة نهر ديالى للتنمية المستدامة</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            نعمل من أجل مستقبل مستدام يحافظ على البيئة ويعزز العدالة الاجتماعية ويحترم حقوق الإنسان
          </p>
          <div className="flex items-center justify-center space-x-4 space-x-reverse text-lg">
            <MapPin className="w-6 h-6" />
            <span>العراق - ديالى - بعقوبة</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">من نحن</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              مؤسسة نهر ديالى للتنمية المستدامة هي منظمة غير حكومية تهدف إلى تحقيق التنمية المستدامة 
              في المجتمع العراقي من خلال العمل على حماية البيئة وتعزيز العدالة الاجتماعية واحترام حقوق الإنسان
            </p>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">أهدافنا</h2>
            <p className="text-lg text-gray-600">تهدف مؤسسة نهر ديالى للتنمية المستدامة إلى:</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {objectives.map((objective, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <objective.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-800">{objective.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center leading-relaxed">{objective.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-green-100 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">تواصل معنا</h2>
            <p className="text-lg text-gray-600">نحن هنا للإجابة على استفساراتكم ومساعدتكم</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="pt-6">
                <MapPin className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">العنوان</h3>
                <p className="text-gray-600">العراق - محافظة ديالى - بعقوبة</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">الهاتف</h3>
                <p className="text-gray-600">+964 XXX XXX XXXX</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <Mail className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">البريد الإلكتروني</h3>
                <p className="text-gray-600">info@diyalariver.org</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">مؤسسة نهر ديالى للتنمية المستدامة</h3>
              <p className="text-gray-300 mb-4">
                منظمة غير حكومية تعمل من أجل التنمية المستدامة وحماية البيئة وتعزيز حقوق الإنسان
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">الرئيسية</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">من نحن</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">أهدافنا</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">اتصل بنا</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">معلومات التواصل</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <MapPin className="w-5 h-5" />
                  <span>العراق - ديالى - بعقوبة</span>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Mail className="w-5 h-5" />
                  <span>info@diyalariver.org</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              &copy; 2024 مؤسسة نهر ديالى للتنمية المستدامة. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
