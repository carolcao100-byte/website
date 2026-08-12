import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Send, CheckCircle } from "lucide-react";

type Lang = "en" | "zh";

const content = {
  en: {
    nav: {
      about: "About",
      services: "Services",
      approach: "Approach",
      faq: "FAQ",
      contact: "Contact",
      book: "Book a Session",
    },
    hero: {
      headline: "Mental clarity starts with one conversation",
      subhead: "Compassionate counselling designed for your life",
      body: "Book your first session in seconds—no judgement, just support",
      cta: "Schedule Your Session",
      secondaryCta: "Meet Carol",
      badge: "心理咨询 · Counselling",
      nextLabel: "Free call",
      nextTime: "Book a Free 15-min Discovery Call",
      videoLabel: "",
    },
    stats: [
      { num: "4+", label: "Years Practice" },
      { num: "15–35", label: "Age Focus" },
      { num: "Free", label: "First Consult" },
    ],
    about: {
      label: "About Carol",
      name: "Carol Cao",
      credentials: "MA · ACA",
      bio1: "I support people navigating cultural, relationship, and family conflict who want a clear, culturally aware space to organise their thinking—and use practical positive psychology strategies to create real, everyday change.",
      bio2: "Having lived in China, Australia, and Canada, and with a background in HR and employee wellbeing, I bring a multi-perspective lens to every session. My style is warm, direct, and grounded in evidence—walking with you one step at a time.",
      bio3: "I also offer outdoor sessions at a café or park—a more relaxed, natural setting for those who find a traditional office daunting.",
      credentialsList: [
        "MA — Counselling",
        "Bachelor of Honours in Psychology",
        "Member, Australian Counselling Association (ACA-L2) #82035",
        "Sessions available in English and Mandarin",
      ],
    },
    services: {
      label: "How I Can Help",
      headline: "Therapy that meets you where you are",
      items: [
        {
          title: "Anxiety & Stress",
          desc: "Build practical tools to quiet the noise and manage pressure from work, relationships, or life in a new country.",
          icon: "🌿",
        },
        {
          title: "Relationships & Family",
          desc: "Navigate conflict, improve communication, and strengthen connections that matter—individuals and couples welcome.",
          icon: "🤝",
        },
        {
          title: "Cultural Identity",
          desc: "A safe space for international students, Asian migrants, and anyone reconciling identity across cultures and generations.",
          icon: "🌏",
        },
        {
          title: "Life & Career Transitions",
          desc: "Career changes, relocation, life stages—move through uncertainty with clarity and confidence.",
          icon: "🧭",
        },
      ],
    },
    approach: {
      label: "My Approach",
      headline: "Evidence-based. Culturally aware. Practically grounded.",
      steps: [
        {
          num: "01",
          title: "Connect",
          desc: "We start with a free 15-minute discovery call—no pressure, no paperwork. Just a conversation to see if we are a good fit.",
        },
        {
          num: "02",
          title: "Explore",
          desc: "Using CBT, ACT, Positive Psychology and person-centred methods, we examine what is driving how you feel and where you want to go.",
        },
        {
          num: "03",
          title: "Change",
          desc: "Most clients notice a gradual lifting of symptoms within the first month. The recommended starting point is 6 regular sessions.",
        },
      ],
    },
    testimonials: {
      label: "From Clients",
      items: [
        {
          quote: "Carol understood my background without me having to explain it from scratch. The cultural sensitivity made all the difference.",
          author: "Amy L.",
          role: "International Student",
        },
        {
          quote: "I came in anxious about starting therapy. Within minutes I felt at ease. The practical tools she gave me actually work.",
          author: "James T.",
          role: "Software Engineer",
        },
        {
          quote: "The café session option was perfect for me—less clinical, more human. I could not recommend Carol more highly.",
          author: "Mei Z.",
          role: "Marketing Professional",
        },
      ],
    },
    faq: {
      label: "FAQ",
      headline: "Questions you might have",
      items: [
        {
          q: "Do you offer a free first consultation?",
          a: "Yes—call or email Carol now for a free 15-minute discovery call at (07) 2100 4112. It is a relaxed conversation with no obligation to continue.",
        },
        {
          q: "Do you offer sessions in Mandarin?",
          a: "Yes. Sessions are available in both English and Mandarin. Many clients find it easier to explore personal or emotional topics in their first language.",
        },
        {
          q: "Where are sessions held?",
          a: "Carol sees clients at Brisbane City (QLD 4000), online, and in budget-friendly café or park settings. Sessions are flexible to work around your schedule.",
        },
        {
          q: "What therapeutic approaches do you use?",
          a: "Carol draws on CBT, ACT, Positive Psychology, Person-Centred Therapy, IFS, Mindfulness-Based methods, and Trauma-Focused approaches—selecting what fits each client best.",
        },
        {
          q: "Who do you work with?",
          a: "Carol works with individuals and couples primarily aged 15–35—including teenagers, young adults, and those navigating early career or major life transitions. She has specific experience supporting Asian communities, international students, and LGBTQ+ allied clients.",
        },
        {
          q: "How many sessions will I need?",
          a: "It varies. Many clients see meaningful improvement within the first month. The recommended starting point is 6 regular sessions. Some choose ongoing support. You and Carol will reassess regularly so it always fits your needs.",
        },
      ],
    },
    contact: {
      label: "Get in Touch",
      headline: "Not ready to book? Send a message",
      body: "If you would like to reach out before scheduling, leave Carol a message below. She will get back to you within one business day.",
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email address",
      messagePlaceholder: "What is on your mind? Share whatever feels comfortable.",
      cta: "Send Message",
      successHeadline: "Message received",
      successBody: "Thank you for reaching out. Carol will be in touch within one business day.",
      sendAnother: "Send another message",
    },
    booking: {
      label: "Cal.com Booking",
      headline: "Ready when you are",
      body: "Select a time that works for you. Sessions available mornings, evenings, and weekends—video or in-person at Brisbane City.",
      cta: "See Available Times",
      note: "Free 15-minute discovery call available.",
      selectTime: "Select a time",
    },
    footer: {
      tagline: "Now, for you. Support through life's changes — you're never alone.",
      locations: ["Brisbane City, QLD 4000", "Milton, QLD 4006", "Online · Café / Park sessions"],
      phone: "(07) 2100 4112",
      email: "carol@nowpsychology.com.au",
      links: ["Privacy Policy", "Terms of Service"],
      copy: "© 2024 Now Psychology. All rights reserved.",
      aca: "ACA Member #82035",
    },
  },
  zh: {
    nav: {
      about: "关于我",
      services: "咨询服务",
      approach: "我的方法",
      faq: "常见问题",
      contact: "联系我",
      book: "预约咨询",
    },
    hero: {
      headline: "心理健康，从一次对话开始",
      subhead: "为您量身定制的专业心理咨询",
      body: "几秒钟内预约您的第一次咨询——没有评判，只有支持",
      cta: "立即预约",
      secondaryCta: "了解Carol",
      badge: "心理咨询 · Counselling",
      nextLabel: "免费通话",
      nextTime: "预约免费15分钟探索对话",
      videoLabel: "",
    },
    stats: [
      { num: "4+", label: "年从业经验" },
      { num: "15–35", label: "岁服务群体" },
      { num: "免费", label: "首次咨询" },
    ],
    about: {
      label: "关于Carol",
      name: "Carol Cao（曹莉丹）",
      credentials: "MA · ACA",
      bio1: "我帮助在文化冲突、人际关系冲突和家庭冲突中摸索前行的来访者，在一个清晰、尊重您的咨询空间中整理思路，并运用心理学的实用策略来带来切实可行的日常改变。",
      bio2: "在中国、澳洲和加拿大生活多年，兼具HR和员工关怀经验，致力于为您提供一个多元视角的咨询空间。我的咨询风格温暖、直接，以实证为基础——陪你一步一步向前走。",
      bio3: "我也提供户外心理咨询——咖啡馆或公园咨询，更放松、更自在、更贴近自然，让心理咨询不再拘束！",
      credentialsList: [
        "咨询学硕士（MA — Counselling）",
        "心理学荣誉学士",
        "澳大利亚咨询协会会员（ACA-L2）#82035",
        "提供普通话和英语双语咨询",
      ],
    },
    services: {
      label: "我能帮助您",
      headline: "适合您生活节奏的心理咨询",
      items: [
        {
          title: "焦虑与压力",
          desc: "建立实用工具，在工作、关系或旅居新国家的压力中找到宁静与平衡。",
          icon: "🌿",
        },
        {
          title: "关系与家庭",
          desc: "化解冲突，改善沟通，加强最重要的情感连接——欢迎个人及伴侣。",
          icon: "🤝",
        },
        {
          title: "文化认同",
          desc: "为留学生、亚裔移民及跨文化身份认同提供安全、尊重的咨询空间。",
          icon: "🌏",
        },
        {
          title: "人生与职业转型",
          desc: "职业转变、城市迁移、人生阶段——在不确定中从容前行，找到清晰方向。",
          icon: "🧭",
        },
      ],
    },
    approach: {
      label: "我的方法",
      headline: "以实证为基础，以文化为视角，以实践为导向",
      steps: [
        {
          num: "01",
          title: "连接",
          desc: "我们从一次免费的15分钟探索对话开始——没有压力，没有繁琐手续。只是一次对话，看看我们是否合适。",
        },
        {
          num: "02",
          title: "探索",
          desc: "运用CBT、ACT、积极心理学和以人为中心的方法，共同探索驱动您感受的力量，以及您想去的方向。",
        },
        {
          num: "03",
          title: "改变",
          desc: "大多数来访者在第一个月内就会感受到症状的逐渐减轻。推荐的起始方案是6次定期咨询。",
        },
      ],
    },
    testimonials: {
      label: "来访者的声音",
      items: [
        {
          quote: "Carol理解我的文化背景，不需要我从头解释。这种文化敏感度对我意义重大。",
          author: "Amy L.",
          role: "留学生",
        },
        {
          quote: "我本来很担心开始咨询。几分钟后我就感到放松了。她给我的实用工具真的有效。",
          author: "James T.",
          role: "软件工程师",
        },
        {
          quote: "咖啡馆咨询的形式非常适合我——不那么临床，更有人情味。我强烈推荐Carol。",
          author: "Mei Z.",
          role: "市场营销专业人士",
        },
      ],
    },
    faq: {
      label: "常见问题",
      headline: "您可能想了解的问题",
      items: [
        {
          q: "提供免费首次咨询吗？",
          a: "是的——请致电(07) 2100 4112联系Carol，获得免费15分钟探索对话。这是一次轻松的对话，没有任何继续的义务。",
        },
        {
          q: "提供普通话咨询吗？",
          a: "是的。咨询可以用英语或普通话进行。许多来访者在探讨个人或情感话题时，更愿意用母语来表达。",
        },
        {
          q: "咨询在哪里进行？",
          a: "Carol在布里斯班市（QLD 4000）提供面对面咨询，也可在线进行。还提供实惠的咖啡馆/公园户外咨询，灵活配合大家的日程。",
        },
        {
          q: "使用哪些治疗方法？",
          a: "Carol综合运用CBT、ACT、积极心理学、以人为中心疗法、IFS、正念疗法和创伤聚焦疗法，根据每位来访者的情况灵活选择最适合的方式。",
        },
        {
          q: "接待哪些来访者？",
          a: "Carol主要与15至35岁的个人和伴侣合作，包括青少年、年轻人及处于早期职业或重大人生转型期的来访者。她在支持亚裔社区、留学生及LGBTQ+友好来访者方面有丰富经验。",
        },
        {
          q: "需要进行多少次咨询？",
          a: "因人而异。许多来访者在第一个月内就看到了显著改善。推荐的起始方案是6次定期咨询。有些人选择持续合作。Carol会定期重新评估，确保始终符合每位来访者的需求。",
        },
      ],
    },
    contact: {
      label: "联系我",
      headline: "还没准备好预约？先发条消息",
      body: "如果您想在预约前先联系Carol，请在下方留下您的信息。她会在一个工作日内回复您。",
      nameLabel: "姓名",
      emailLabel: "电子邮件",
      messageLabel: "留言",
      namePlaceholder: "您的姓名",
      emailPlaceholder: "您的电子邮件",
      messagePlaceholder: "您想说些什么？分享您感到舒适的任何内容。",
      cta: "发送消息",
      successHeadline: "消息已收到",
      successBody: "感谢您的来信。Carol将在一个工作日内与您联系。",
      sendAnother: "再发一条消息",
    },
    booking: {
      label: "Cal.com 预约",
      headline: "随时准备好迎接您",
      body: "选择适合您的时间。早晨、傍晚和周末均有空档——线上或在布里斯班市面对面。",
      cta: "查看可用时间",
      note: "提供免费15分钟探索对话。",
      selectTime: "选择时间",
    },
    footer: {
      tagline: "此刻，为你而来。陪伴你走过生命中的每一次改变——你从不孤单。",
      locations: ["布里斯班市，QLD 4000", "Milton，QLD 4006", "线上 · 咖啡馆/公园咨询"],
      phone: "(07) 2100 4112",
      email: "carol@nowpsychology.com.au",
      links: ["隐私政策", "服务条款"],
      copy: "© 2024 Now Psychology。保留所有权利。",
      aca: "ACA 会员 #82035",
    },
  },
};

const HERO_IMG =
  "https://images.unsplash.com/photo-1786051376076-9ff627bcdcba?w=1400&h=1000&fit=crop&auto=format";
const BOOKING_IMG =
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&h=700&fit=crop&auto=format";
const PORTRAIT_IMG =
  "https://photos.psychologytoday.com/1041a5f7-25f3-4a50-bcdc-d111677d9919/2/320x400.jpeg";

const DAYS_EN = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const DAYS_ZH = ["周一", "周二", "周三", "周四", "周五", "周六"];
const TIMES = ["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "4:00 PM", "6:00 PM"];

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export default function App() {
  const [lang, setLang] = useState<Lang>("en");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedDay, setSelectedDay] = useState(1);
  const [selectedTime, setSelectedTime] = useState(1);
  const [form, setForm] = useState<ContactForm>({ name: "", email: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  const t = content[lang];
  const days = lang === "en" ? DAYS_EN : DAYS_ZH;

  // Load Psychology Today verified seal script
  useEffect(() => {
    const existing = document.getElementById("pt-verified-seal-script");
    if (existing) return;
    const script = document.createElement("script");
    script.id = "pt-verified-seal-script";
    script.type = "text/javascript";
    script.src = "https://member.psychologytoday.com/verified-seal.js";
    script.setAttribute("data-badge", "14");
    script.setAttribute("data-id", "1612945");
    script.setAttribute(
      "data-code",
      "aHR0cHM6Ly93d3cucHN5Y2hvbG9neXRvZGF5LmNvbS9hcGkvdmVyaWZpZWQtc2VhbC9zZWFscy8xNC9wcm9maWxlLzE2MTI5NDU/Y2FsbGJhY2s9c3hjYWxsYmFjaw=="
    );
    document.body.appendChild(script);
    return () => {
      const el = document.getElementById("pt-verified-seal-script");
      if (el) document.body.removeChild(el);
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setFormError(lang === "en" ? "Please fill in all fields." : "请填写所有字段。");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setFormError(
        lang === "en" ? "Please enter a valid email address." : "请输入有效的电子邮件地址。"
      );
      return;
    }
    setFormError("");
    setFormSubmitted(true);
  };

  return (
    <div
      className="bg-background text-foreground min-h-screen overflow-x-hidden"
      style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
    >
      {/* ─── NAV ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-5 md:px-10 h-16 flex items-center justify-between gap-4">
          <button
            onClick={() => scrollTo("hero")}
            className="flex flex-col leading-none text-left shrink-0"
          >
            <span className="text-[10px] tracking-widest uppercase text-muted-foreground font-medium">
              心理咨询
            </span>
            <span
              className="text-base tracking-tight text-foreground"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              Now Psychology
            </span>
          </button>

          <div className="hidden md:flex items-center gap-6">
            {(["about", "services", "approach", "faq", "contact"] as const).map((k) => (
              <button
                key={k}
                onClick={() => scrollTo(k)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.nav[k]}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              onClick={() => setLang(lang === "en" ? "zh" : "en")}
              className="text-xs tracking-wider border border-border rounded-full px-3 py-1.5 text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all"
            >
              {lang === "en" ? "中文" : "EN"}
            </button>
            <a
              href="https://cal.com/nowpsychology.carol-c"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground text-sm px-5 py-2 rounded-full hover:bg-primary/90 transition-colors"
            >
              {t.nav.book}
            </a>
          </div>

          <button
            className="md:hidden p-1 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-background border-t border-border px-5 py-5 flex flex-col gap-4">
            {(["about", "services", "approach", "faq", "contact"] as const).map((k) => (
              <button
                key={k}
                onClick={() => scrollTo(k)}
                className="text-sm text-left text-muted-foreground hover:text-foreground"
              >
                {t.nav[k]}
              </button>
            ))}
            <div className="flex gap-3 pt-2 border-t border-border">
              <button
                onClick={() => setLang(lang === "en" ? "zh" : "en")}
                className="text-xs border border-border rounded-full px-3 py-1.5 text-muted-foreground"
              >
                {lang === "en" ? "中文" : "EN"}
              </button>
              <a
                href="https://cal.com/nowpsychology.carol-c"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground text-sm px-5 py-2 rounded-full"
              >
                {t.nav.book}
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ─── HERO ─── */}
      <section
        id="hero"
        className="min-h-screen pt-16 grid md:grid-cols-[1fr_1fr] lg:grid-cols-[55%_45%]"
      >
        <div className="flex flex-col justify-center px-8 md:px-14 lg:px-24 py-20">
          <span className="text-xs tracking-widest uppercase text-muted-foreground mb-8 block">
            {t.hero.badge}
          </span>
          <h1
            className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] mb-6 text-foreground"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            {t.hero.headline}
          </h1>
          <p className="text-lg text-foreground/70 mb-2 leading-relaxed">{t.hero.subhead}</p>
          <p className="text-sm text-muted-foreground mb-10 leading-relaxed">{t.hero.body}</p>
          <div className="flex flex-wrap gap-3 mb-16">
            <a
              href="https://cal.com/nowpsychology.carol-c"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-7 py-3.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-all hover:shadow-md"
            >
              {t.hero.cta}
            </a>
            <button
              onClick={() => scrollTo("about")}
              className="border border-border px-7 py-3.5 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all"
            >
              {t.hero.secondaryCta} →
            </button>
          </div>
          <div className="flex gap-10">
            {t.stats.map(({ num, label }) => (
              <div key={label}>
                <div
                  className="text-2xl font-medium text-foreground"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  {num}
                </div>
                <div className="text-xs text-muted-foreground mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden md:block bg-muted overflow-hidden">
          <img
            src={HERO_IMG}
            alt="A warm, sunlit consultation room with two chairs"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/15" />
          <div className="absolute bottom-10 left-8 bg-card/95 backdrop-blur-md rounded-2xl p-5 w-[230px] shadow-xl border border-border/50">
            <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">
              {t.hero.nextLabel}
            </p>
            <p className="text-sm font-medium text-foreground mb-3">{t.hero.nextTime}</p>
            <div className="h-px bg-border mb-3" />
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-primary/10 overflow-hidden border border-border shrink-0">
                <img
                  src={PORTRAIT_IMG}
                  alt="Carol Cao"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <p className="text-xs font-medium text-foreground">Carol Cao</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" className="py-24 lg:py-32 bg-secondary/40">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          {/* Photo + name header */}
          <div className="flex items-center gap-6 mb-10">
            <div className="relative shrink-0">
              <div className="w-28 h-36 md:w-36 md:h-48 rounded-2xl overflow-hidden bg-muted shadow-md">
                <img
                  src={PORTRAIT_IMG}
                  alt="Carol Cao, Counsellor at Now Psychology, Brisbane"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-lg bg-primary/10 -z-10" />
            </div>
            <div>
              <span className="text-xs tracking-widest uppercase text-muted-foreground block mb-1">
                {t.about.label}
              </span>
              <h2
                className="text-3xl md:text-4xl"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                {t.about.name}
              </h2>
              <p className="text-sm text-muted-foreground mt-1">{t.about.credentials}</p>
            </div>
          </div>
          {/* Bio + credentials */}
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-base leading-relaxed text-foreground/80 mb-4">{t.about.bio1}</p>
              <p className="text-base leading-relaxed text-foreground/80 mb-4">{t.about.bio2}</p>
              <p className="text-base leading-relaxed text-foreground/80">{t.about.bio3}</p>
            </div>
            <div>
              <ul className="space-y-3 mb-8">
                {t.about.credentialsList.map((cred) => (
                  <li key={cred} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-0.5 text-primary shrink-0">✦</span>
                    {cred}
                  </li>
                ))}
              </ul>
              {/* Psychology Today Verified Seal — renders on live site */}
              <a
                href="https://www.psychologytoday.com/profile/1612945"
                className="sx-verified-seal"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
              {/* Static fallback — always visible */}
              <a
                href="https://www.psychologytoday.com/profile/1612945"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl border border-[#4a7c59]/30 bg-white hover:bg-[#f4f9f6] transition-colors w-fit"
              >
                <div className="w-8 h-8 rounded-full bg-[#4a7c59] flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-[11px] font-semibold text-[#4a7c59] tracking-wide uppercase">Verified</span>
                  <span className="text-[12px] text-gray-600">Psychology Today</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-14">
            <span className="text-xs tracking-widest uppercase text-muted-foreground block mb-4">
              {t.services.label}
            </span>
            <h2
              className="text-4xl md:text-5xl max-w-xl"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              {t.services.headline}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.services.items.map((svc) => (
              <div
                key={svc.title}
                className="group bg-card border border-border rounded-2xl p-7 hover:shadow-md hover:border-primary/25 transition-all cursor-default"
              >
                <div className="text-3xl mb-5">{svc.icon}</div>
                <h3
                  className="text-xl mb-3 text-foreground"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  {svc.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── APPROACH ─── */}
      <section id="approach" className="py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <span className="text-xs tracking-widest uppercase opacity-50 block mb-4">
              {t.approach.label}
            </span>
            <h2
              className="text-4xl md:text-5xl max-w-2xl"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              {t.approach.headline}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12 md:gap-8 relative">
            {t.approach.steps.map((step, i) => (
              <div key={step.num} className="relative">
                {i < 2 && (
                  <div className="hidden md:block absolute top-10 left-[calc(100%+1px)] w-full h-px bg-primary-foreground/15" />
                )}
                <div
                  className="text-6xl font-light opacity-20 mb-6 leading-none"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  {step.num}
                </div>
                <h3
                  className="text-2xl mb-4"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm opacity-65 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="text-xs tracking-widest uppercase text-muted-foreground text-center mb-14">
            {t.testimonials.label}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {t.testimonials.items.map((item) => (
              <div
                key={item.author}
                className="bg-card border border-border rounded-2xl p-8 flex flex-col"
              >
                <span
                  className="text-4xl text-primary/25 mb-4 leading-none"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  "
                </span>
                <p className="text-base leading-relaxed text-foreground/75 flex-1 mb-6">
                  {item.quote}
                </p>
                <div className="border-t border-border pt-4">
                  <p className="text-sm font-medium">{item.author}</p>
                  <p className="text-xs text-muted-foreground">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section id="faq" className="py-24 lg:py-32 bg-secondary/40">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-14">
            <span className="text-xs tracking-widest uppercase text-muted-foreground block mb-4">
              {t.faq.label}
            </span>
            <h2
              className="text-4xl md:text-5xl"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              {t.faq.headline}
            </h2>
          </div>
          <div className="divide-y divide-border">
            {t.faq.items.map((item, i) => (
              <div key={i}>
                <button
                  className="w-full text-left py-5 flex items-start justify-between gap-4 group"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span className="text-base font-medium group-hover:text-primary transition-colors">
                    {item.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`mt-0.5 shrink-0 text-muted-foreground transition-transform duration-200 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <p className="pb-6 text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT FORM ─── */}
      <section id="contact" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-14 lg:gap-20 items-start">
            <div className="md:pt-4">
              <span className="text-xs tracking-widest uppercase text-muted-foreground block mb-4">
                {t.contact.label}
              </span>
              <h2
                className="text-4xl md:text-5xl mb-6"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                {t.contact.headline}
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-10">
                {t.contact.body}
              </p>
              <div className="space-y-4">
                <a
                  href="tel:+61721004112"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="text-primary">✦</span>
                  (07) 2100 4112
                </a>
                <a
                  href="mailto:carol@nowpsychology.com.au"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="text-primary">✦</span>
                  carol@nowpsychology.com.au
                </a>
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="text-primary mt-0.5">✦</span>
                  <span>Brisbane City QLD 4000 · Milton QLD 4006 · Online</span>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
              {formSubmitted ? (
                <div className="flex flex-col items-center text-center py-10 gap-4">
                  <CheckCircle size={44} className="text-primary" />
                  <h3
                    className="text-2xl"
                    style={{ fontFamily: "'DM Serif Display', serif" }}
                  >
                    {t.contact.successHeadline}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                    {t.contact.successBody}
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setForm({ name: "", email: "", message: "" });
                    }}
                    className="mt-2 text-xs text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors"
                  >
                    {t.contact.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      {t.contact.nameLabel}
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder={t.contact.namePlaceholder}
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      {t.contact.emailLabel}
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder={t.contact.emailPlaceholder}
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      {t.contact.messageLabel}
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder={t.contact.messagePlaceholder}
                      rows={5}
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all resize-none"
                    />
                  </div>
                  {formError && (
                    <p className="text-xs text-destructive">{formError}</p>
                  )}
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-all hover:shadow-md"
                  >
                    <Send size={14} />
                    {t.contact.cta}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── BOOKING ─── */}
      <section id="booking" className="py-16 lg:py-24 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm">
            <div className="grid md:grid-cols-2">
              <div className="p-10 md:p-14 lg:p-16 flex flex-col justify-center">
                <span className="text-xs tracking-widest uppercase text-muted-foreground block mb-4">
                  {t.booking.label}
                </span>
                <h2
                  className="text-4xl mb-4"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  {t.booking.headline}
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed mb-8">
                  {t.booking.body}
                </p>
                <a
                  href="https://cal.com/nowpsychology.carol-c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-medium hover:bg-primary/90 transition-all hover:shadow-md w-fit"
                >
                  {t.booking.cta} →
                </a>
                <p className="text-xs text-muted-foreground mt-4">{t.booking.note}</p>
              </div>

              <div className="relative min-h-[380px] md:min-h-0 bg-muted">
                <img
                  src={BOOKING_IMG}
                  alt="A calm, warm office interior"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/25" />
                <div className="absolute inset-5 md:inset-8 bg-card/93 backdrop-blur-sm rounded-2xl p-5 flex flex-col shadow-lg">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-4">
                    {t.booking.selectTime}
                  </p>
                  <div className="grid grid-cols-3 gap-1.5 mb-4">
                    {days.map((day, i) => (
                      <button
                        key={day}
                        onClick={() => setSelectedDay(i)}
                        className={`py-2 rounded-lg text-xs font-medium transition-colors border ${
                          selectedDay === i
                            ? "bg-primary text-primary-foreground border-primary"
                            : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                        }`}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-1.5 flex-1">
                    {TIMES.map((time, i) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(i)}
                        className={`py-2 px-3 rounded-lg text-xs font-medium text-center transition-colors border ${
                          selectedTime === i
                            ? "bg-primary text-primary-foreground border-primary"
                            : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                  <a
                    href="https://cal.com/nowpsychology.carol-c"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 w-full bg-primary text-primary-foreground py-2.5 rounded-xl text-xs font-medium hover:bg-primary/90 transition-colors text-center block"
                  >
                    {t.booking.cta}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-border py-12 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-8 items-start mb-10">
            <div>
              <p className="text-[10px] tracking-widest uppercase text-muted-foreground mb-1">
                心理咨询
              </p>
              <p
                className="text-lg mb-3 text-foreground"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                Now Psychology
              </p>
              <p className="text-sm text-muted-foreground mb-4">{t.footer.tagline}</p>
              <p className="text-xs text-muted-foreground mb-4">{t.footer.aca}</p>
            </div>
            <div className="text-sm space-y-1.5 text-muted-foreground">
              {t.footer.locations.map((loc) => (
                <p key={loc}>{loc}</p>
              ))}
              <p className="pt-2">
                <a href="tel:+61721004112" className="hover:text-foreground transition-colors">
                  {t.footer.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${t.footer.email}`}
                  className="hover:text-foreground transition-colors"
                >
                  {t.footer.email}
                </a>
              </p>
            </div>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground md:items-end">
              {t.footer.links.map((link) => (
                link === "Privacy Policy" || link === "隐私政策" ? (
                  <a
                    key={link}
                    href="https://docs.google.com/document/d/1-BDFe_zJ0JvfPcGyZt0KMoI46lh5rq6fpcEkhugQ1wA/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors text-left md:text-right"
                  >
                    {link}
                  </a>
                ) : (
                  <button
                    key={link}
                    className="hover:text-foreground transition-colors text-left md:text-right"
                  >
                    {link}
                  </button>
                )
              ))}
            </div>
          </div>
          <div className="border-t border-border pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <p className="text-xs text-muted-foreground">{t.footer.copy}</p>
            <button
              onClick={() => setLang(lang === "en" ? "zh" : "en")}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors self-start md:self-auto"
            >
              {lang === "en" ? "切换至中文 →" : "Switch to English →"}
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
