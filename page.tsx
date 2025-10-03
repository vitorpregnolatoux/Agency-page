"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Plane,
  Globe,
  Hotel,
  Compass,
  Star,
  MapPin,
  Calendar,
  Users,
  Award,
  TrendingUp,
  Menu,
  X,
  ChevronRight,
  Mail,
} from "lucide-react"

export default function TravelAgencyLanding() {
  const [scrollY, setScrollY] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeService, setActiveService] = useState<number | null>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
        }
      },
      { threshold: 0.3 },
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  const services = [
    {
      icon: Plane,
      title: "Reserva de Voos",
      description: "Ofertas premium de voos para destinos em todo o mundo com companhias aéreas parceiras exclusivas",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Hotel,
      title: "Hotéis de Luxo",
      description:
        "Acomodações 5 estrelas e estadias boutique cuidadosamente selecionadas para experiências inesquecíveis",
      color: "from-pink-500 to-purple-500",
    },
    {
      icon: Compass,
      title: "Tours Guiados",
      description: "Aventuras lideradas por especialistas e experiências culturais com insights locais",
      color: "from-teal-500 to-emerald-500",
    },
    {
      icon: Globe,
      title: "Pacotes Personalizados",
      description: "Roteiros sob medida projetados em torno dos seus sonhos e preferências",
      color: "from-orange-500 to-red-500",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "Nova York, EUA",
      text: "A experiência de viagem mais incrível da minha vida. Cada detalhe foi perfeitamente planejado e executado.",
      rating: 5,
      image: "/woman-traveler.png",
    },
    {
      name: "James Chen",
      location: "Singapura",
      text: "Serviço profissional e destinos incríveis. Eles transformaram as férias dos nossos sonhos em realidade.",
      rating: 5,
      image: "/man-traveler.jpg",
    },
    {
      name: "Emma Rodriguez",
      location: "Barcelona, Espanha",
      text: "Atenção excepcional aos detalhes. As acomodações de luxo superaram todas as expectativas.",
      rating: 5,
      image: "/woman-tourist.jpg",
    },
  ]

  const faqs = [
    {
      question: "Com quanto tempo de antecedência devo reservar minha viagem?",
      answer:
        "Recomendamos reservar com 3-6 meses de antecedência para viagens internacionais para garantir as melhores tarifas e disponibilidade. No entanto, também somos especializados em reservas de última hora e podemos criar experiências incríveis com menor antecedência.",
    },
    {
      question: "Vocês oferecem seguro viagem?",
      answer:
        "Sim, fazemos parceria com as principais seguradoras para oferecer seguro viagem abrangente cobrindo emergências médicas, cancelamentos de viagem, bagagem perdida e muito mais. Ajudaremos você a escolher a cobertura certa para sua jornada.",
    },
    {
      question: "Posso personalizar meu pacote de viagem?",
      answer:
        "Cada viajante é único, e nos orgulhamos de criar roteiros totalmente personalizados. Compartilhe suas preferências, orçamento e sonhos conosco, e criaremos a jornada perfeita.",
    },
    {
      question: "Quais formas de pagamento vocês aceitam?",
      answer:
        "Aceitamos todos os principais cartões de crédito, transferências bancárias e oferecemos planos de pagamento flexíveis para reservas maiores. Normalmente é necessário um depósito para garantir sua reserva, com o saldo devido antes da partida.",
    },
    {
      question: "Vocês fornecem suporte 24/7 durante a viagem?",
      answer:
        "Sim! Nossa equipe de suporte dedicada está disponível 24/7 durante toda a sua jornada. Você terá números de contato diretos e pode nos contatar a qualquer momento para assistência, alterações ou emergências.",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-dark">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">
            <span className="text-neon neon-text">Voyager</span>
            <span className="text-muted-foreground">.</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm hover:text-neon transition-colors">
              Serviços
            </a>
            <a href="#destinations" className="text-sm hover:text-neon transition-colors">
              Destinos
            </a>
            <a href="#testimonials" className="text-sm hover:text-neon transition-colors">
              Avaliações
            </a>
            <a href="#contact" className="text-sm hover:text-neon transition-colors">
              Contato
            </a>
            <Button className="bg-neon text-background hover:bg-neon/90 neon-glow">Reserve Agora</Button>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden glass-dark border-t border-border">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <a href="#services" className="text-sm hover:text-neon transition-colors">
                Serviços
              </a>
              <a href="#destinations" className="text-sm hover:text-neon transition-colors">
                Destinos
              </a>
              <a href="#testimonials" className="text-sm hover:text-neon transition-colors">
                Avaliações
              </a>
              <a href="#contact" className="text-sm hover:text-neon transition-colors">
                Contato
              </a>
              <Button className="bg-neon text-background hover:bg-neon/90">Reserve Agora</Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 gradient-mesh opacity-80"
            style={{
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
          />
          <div className="absolute inset-0 bg-[url('/tropical-beach-aerial.jpg')] bg-cover bg-center opacity-20" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div
            className="space-y-6"
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
              opacity: 1 - scrollY / 500,
            }}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-balance leading-tight">
              Explore o<span className="block text-neon neon-text">Extraordinário</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Experiências de viagem de luxo curadas que transformam jornadas em histórias inesquecíveis
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button size="lg" className="bg-neon text-background hover:bg-neon/90 neon-glow text-lg px-8">
                Comece Sua Jornada
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="glass text-lg px-8 border-neon/30 hover:border-neon bg-transparent"
              >
                Ver Destinos
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-neon/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-neon rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section ref={statsRef} className="py-20 relative">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "150+", label: "Países", icon: Globe },
              { value: "50K+", label: "Viajantes Felizes", icon: Users },
              { value: "98%", label: "Taxa de Satisfação", icon: Award },
              { value: "25+", label: "Anos de Experiência", icon: TrendingUp },
            ].map((stat, index) => (
              <Card
                key={index}
                className="glass p-8 text-center group hover:neon-glow transition-all duration-300 cursor-pointer"
              >
                <stat.icon className="h-8 w-8 mx-auto mb-4 text-neon group-hover:scale-110 transition-transform" />
                <div className="text-4xl md:text-5xl font-bold text-neon mb-2">{hasAnimated ? stat.value : "0"}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Bento Grid */}
      <section id="services" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-balance">
              Serviços <span className="text-neon">Premium</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Soluções de viagem abrangentes adaptadas a todas as suas necessidades
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="glass p-8 group hover:neon-glow transition-all duration-500 cursor-pointer relative overflow-hidden"
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                <div className="relative z-10">
                  <service.icon className="h-12 w-12 text-neon mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-pretty">{service.description}</p>
                  <Button
                    variant="ghost"
                    className="mt-4 text-neon hover:text-neon/80 p-0 h-auto font-semibold group/btn"
                  >
                    Saiba Mais
                    <ChevronRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Bento Grid */}
      <section id="destinations" className="py-20 relative">
        <div className="absolute inset-0 gradient-mesh opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-balance">
              Destinos em <span className="text-neon">Destaque</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Descubra locais deslumbrantes ao redor do globo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {/* Large Card */}
            <Card className="md:col-span-2 md:row-span-2 glass group overflow-hidden relative cursor-pointer">
              <div className="absolute inset-0 bg-[url('/maldives-beach-resort.png')] bg-cover bg-center group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-2 text-neon mb-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">Maldivas</span>
                </div>
                <h3 className="text-3xl font-bold mb-2">Ilhas Paradisíacas</h3>
                <p className="text-muted-foreground mb-4 text-pretty">Vilas sobre a água e lagoas cristalinas</p>
                <Button className="bg-neon text-background hover:bg-neon/90">
                  Explorar <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>

            {/* Small Cards */}
            <Card className="glass group overflow-hidden relative cursor-pointer">
              <div className="absolute inset-0 bg-[url('/santorini-village.png')] bg-cover bg-center group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 text-neon mb-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">Grécia</span>
                </div>
                <h3 className="text-xl font-bold">Santorini</h3>
              </div>
            </Card>

            <Card className="glass group overflow-hidden relative cursor-pointer">
              <div className="absolute inset-0 bg-[url('/tokyo-night-scene.png')] bg-cover bg-center group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 text-neon mb-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">Japão</span>
                </div>
                <h3 className="text-xl font-bold">Tóquio</h3>
              </div>
            </Card>

            <Card className="md:col-span-2 glass group overflow-hidden relative cursor-pointer">
              <div className="absolute inset-0 bg-[url('/swiss-alps-mountains.png')] bg-cover bg-center group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 text-neon mb-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">Suíça</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Alpes Suíços</h3>
                <p className="text-muted-foreground text-pretty">Picos majestosos e luxo alpino</p>
              </div>
            </Card>

            <Card className="glass group overflow-hidden relative cursor-pointer">
              <div className="absolute inset-0 bg-[url('/dubai-skyline.png')] bg-cover bg-center group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 text-neon mb-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">EAU</span>
                </div>
                <h3 className="text-xl font-bold">Dubai</h3>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section id="testimonials" className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-balance">
              Histórias de <span className="text-neon">Viajantes</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Experiências reais de nossos clientes valiosos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass p-8 hover:neon-glow transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-neon text-neon" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 text-pretty leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon to-neon-pink" />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 relative">
        <div className="absolute inset-0 gradient-mesh opacity-20" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-balance">
              Perguntas <span className="text-neon">Frequentes</span>
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Tudo o que você precisa saber sobre viajar conosco
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="glass rounded-lg px-6 border-0">
                <AccordionTrigger className="text-left hover:text-neon transition-colors text-lg font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-pretty leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section with Map */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
                Vamos Planejar Sua
                <span className="block text-neon">Próxima Aventura</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
                Nossos especialistas em viagens estão prontos para criar seu roteiro perfeito. Entre em contato e vamos
                começar a planejar.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-neon/10 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-neon" />
                  </div>
                  <div>
                    <div className="font-semibold">Envie um Email</div>
                    <div className="text-muted-foreground">ola@voyager.travel</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-neon/10 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-neon" />
                  </div>
                  <div>
                    <div className="font-semibold">Visite-nos</div>
                    <div className="text-muted-foreground">Rua das Viagens 123, SP 01001</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-neon/10 flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-neon" />
                  </div>
                  <div>
                    <div className="font-semibold">Horário de Funcionamento</div>
                    <div className="text-muted-foreground">Seg - Sex: 9h - 18h</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="glass p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Nome</label>
                    <Input className="glass border-border" placeholder="João" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Sobrenome</label>
                    <Input className="glass border-border" placeholder="Silva" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" className="glass border-border" placeholder="joao@exemplo.com" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Destino</label>
                  <Input className="glass border-border" placeholder="Para onde você quer ir?" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Mensagem</label>
                  <textarea
                    className="w-full glass border border-border rounded-lg p-3 min-h-[120px] bg-transparent text-foreground"
                    placeholder="Conte-nos sobre as férias dos seus sonhos..."
                  />
                </div>
                <Button className="w-full bg-neon text-background hover:bg-neon/90 neon-glow text-lg py-6">
                  Enviar Mensagem
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </Card>
          </div>

          {/* Map Placeholder */}
          <div className="mt-12 h-[400px] rounded-2xl overflow-hidden glass">
            <div className="w-full h-full bg-[url('/dark-world-map.png')] bg-cover bg-center opacity-50" />
          </div>
        </div>
      </section>

      {/* Footer with Newsletter */}
      <footer className="relative py-20 border-t border-border">
        <div className="absolute inset-0 gradient-mesh opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="text-3xl font-bold mb-4">
                <span className="text-neon neon-text">Voyager</span>
                <span className="text-muted-foreground">.</span>
              </div>
              <p className="text-muted-foreground mb-6 text-pretty leading-relaxed">
                Criando experiências de viagem extraordinárias desde 1999. Sua jornada para os destinos mais belos do
                mundo começa aqui.
              </p>
              <div className="flex gap-4">
                {["Facebook", "Instagram", "Twitter", "LinkedIn"].map((social) => (
                  <button
                    key={social}
                    className="w-10 h-10 rounded-full glass hover:neon-glow transition-all flex items-center justify-center"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5 bg-neon/50 rounded-full" />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-neon transition-colors">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-neon transition-colors">
                    Destinos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-neon transition-colors">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-neon transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Suporte</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-neon transition-colors">
                    Central de Ajuda
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-neon transition-colors">
                    Termos de Serviço
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-neon transition-colors">
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-neon transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="glass rounded-2xl p-8 mb-12">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-3xl font-bold mb-4">
                Assine Nossa <span className="text-neon">Newsletter</span>
              </h3>
              <p className="text-muted-foreground mb-6 text-pretty">
                Receba ofertas exclusivas de viagem, guias de destinos e dicas privilegiadas direto na sua caixa de
                entrada
              </p>
              <div className="flex gap-4 max-w-md mx-auto">
                <Input type="email" placeholder="Digite seu email" className="glass border-border flex-1" />
                <Button className="bg-neon text-background hover:bg-neon/90 neon-glow">Assinar</Button>
              </div>
            </div>
          </div>

          <div className="text-center text-muted-foreground text-sm">
            <p>© 2025 Voyager Agência de Viagens. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
