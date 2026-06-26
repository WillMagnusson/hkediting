export type Lang = 'sv' | 'en';

export const translations = {
  sv: {
    nav: {
      services: 'Tjänster',
      about: 'Om mig',
      voices: 'Röster',
      contact: 'Kontakt',
    },
    langSwitch: { label: 'English', href: '/en/' },

    hero: {
      eyebrow: 'Manuskriptredigering & omsorg',
      tagline: 'Genomtänkt redigering för författare som värnar om sina ord.',
      cta: 'Jobba med mig',
      flourish: 'en oberoende redaktör',
    },

    services: {
      eyebrow: 'Vad jag erbjuder',
      h2: 'Tre sätt att forma ett manus',
      items: [
        {
          no: '01',
          title: 'Strukturell redigering',
          kicker: 'Helhetsbilden',
          body: 'Vi tar ett steg tillbaka och ser på helheten — struktur, tempo, karaktär, argumentets form. Det här är den djupa, generösa läsningen som hjälper ett manus att bli den bok det sträcker sig efter att vara.',
        },
        {
          no: '02',
          title: 'Textredigering',
          kicker: 'Rad för rad',
          body: 'En noggrann genomgång för klarhet, konsekvens och elegans. Jag justerar meningar, mjukar upp övergångar och fångar upp de små motsägelserna — och arbetar alltid med din röst, inte över den.',
        },
        {
          no: '03',
          title: 'Korrekturläsning',
          kicker: 'Den sista handen',
          body: 'Den sista varsamma genomläsningen innan dina ord möter världen: stavfel, skiljetecken, lösa mellanslag och formatering — så att ingenting distraherar från den berättelse du har arbetat så hårt med.',
        },
      ],
    },

    about: {
      eyebrow: 'Om mig',
      h2: 'Läsaren din bok förtjänar innan alla andra möter den',
      p1: 'Jag är Frida — en redaktör som tillbringat det bästa av ett decennium i andras meningars tysta sällskap. Jag kom till det här arbetet den långa vägen, genom bokhandlar och högar med opublicerade manus och alldeles för många sena kvällar med en röd penna, och jag har aldrig riktigt kommit över spänningen av att hjälpa en berättelse hitta sin sannaste form.',
      p2: 'Varje manus som landar på mitt skrivbord får samma sak: ostressad uppmärksamhet, ett ärligt öra och en djup respekt för rösten som redan finns där. Jag är inte här för att få din bok att låta som min — jag är här för att den ska låta omisskännligt och tryggt som du.',
    },

    work: {
      eyebrow: 'Mitt arbete',
      h2: 'Böcker jag har redigerat',
      by: 'av',
    },

    testimonials: {
      eyebrow: 'Med deras egna ord',
    },

    contact: {
      eyebrow: 'Ta kontakt',
      h2: 'Låt oss prata om ditt manus',
      intro: 'Berätta lite om ditt projekt och var det befinner sig i sitt liv. Jag läser varje meddelande själv och svarar inom några dagar.',
      form: {
        nameLbl: 'Namn',
        emailLbl: 'E-post',
        projectLbl: 'Projekttyp',
        messageLbl: 'Ditt meddelande',
        namePlaceholder: 'Ditt namn',
        messagePlaceholder: 'Vad arbetar du med? Genre, längd, var befinner det sig…',
        projectOptions: [
          'Strukturell redigering',
          'Textredigering',
          'Korrekturläsning',
          'Osäker än — låt oss prata',
        ],
        submit: 'Skicka meddelande',
        submitting: 'Skickar…',
        errName: 'Vänligen ange ditt namn.',
        errEmail: 'Vänligen ange din e-postadress.',
        errEmailInvalid: 'Vänligen ange en giltig e-postadress.',
        errMessage: 'Berätta gärna lite om ditt projekt.',
        errServer: 'Något gick fel. Försök igen eller skicka ett e-postmeddelande direkt.',
        successTitle: 'Tack — ditt meddelande är på väg.',
        successBody: 'Jag hör av mig inom några dagar. Under tiden, fortsätt skriva.',
      },
    },

    footer: {
      copy: '© 2026 HK Editing · Skapat för författare som värnar om sina ord',
      email: 'E-post',
    },
  },

  en: {
    nav: {
      services: 'Services',
      about: 'About',
      voices: 'Voices',
      contact: 'Contact',
    },
    langSwitch: { label: 'Svenska', href: '/' },

    hero: {
      eyebrow: 'Manuscript Editing & Care',
      tagline: 'Thoughtful editing for writers who care about their words.',
      cta: 'Work With Me',
      flourish: 'an independent editor',
    },

    services: {
      eyebrow: 'What I Offer',
      h2: 'Three ways to shape a manuscript',
      items: [
        {
          no: '01',
          title: 'Developmental Editing',
          kicker: 'The big picture',
          body: "We step back and look at the whole — structure, pacing, character, the shape of the argument. This is the deep, generous read that helps a manuscript become the book it's reaching to be.",
        },
        {
          no: '02',
          title: 'Copy Editing',
          kicker: 'Line by line',
          body: 'A close pass for clarity, consistency, and grace. I tune sentences, smooth transitions, and catch the small contradictions, always working with your voice rather than over it.',
        },
        {
          no: '03',
          title: 'Proofreading',
          kicker: 'The final polish',
          body: "The last careful look before your words meet the world: typos, punctuation, stray spaces, and formatting — so nothing distracts from the story you've worked so hard to tell.",
        },
      ],
    },

    about: {
      eyebrow: 'About',
      h2: 'The reader your book deserves before anyone else meets it',
      p1: "I'm Frida — an editor who has spent the better part of a decade in the quiet company of other people's sentences. I came to this work the long way, through bookshops and slush piles and far too many late nights with a red pencil, and I've never quite gotten over the thrill of helping a story find its truest shape.",
      p2: "Every manuscript that lands on my desk gets the same thing: unhurried attention, an honest ear, and a deep respect for the voice that's already there. I'm not here to make your book sound like mine — I'm here to make it sound unmistakably, confidently like you.",
    },

    work: {
      eyebrow: 'My Work',
      h2: 'Books I Have Edited',
      by: 'by',
    },

    testimonials: {
      eyebrow: 'In Their Words',
    },

    contact: {
      eyebrow: 'Get In Touch',
      h2: "Let's talk about your manuscript",
      intro: 'Tell me a little about your project and where it is in its life. I read every note myself and reply within a few days.',
      form: {
        nameLbl: 'Name',
        emailLbl: 'Email',
        projectLbl: 'Project Type',
        messageLbl: 'Your Message',
        namePlaceholder: 'Your name',
        messagePlaceholder: "What are you working on? Genre, length, where it's at…",
        projectOptions: [
          'Developmental editing',
          'Copy editing',
          'Proofreading',
          "Not sure yet — let's discuss",
        ],
        submit: 'Send Message',
        submitting: 'Sending…',
        errName: 'Please enter your name.',
        errEmail: 'Please enter your email.',
        errEmailInvalid: 'Please enter a valid email address.',
        errMessage: 'Please tell me a little about your project.',
        errServer: 'Something went wrong. Please try again or email directly.',
        successTitle: 'Thank you — your note is on its way.',
        successBody: "I'll be in touch within a few days. In the meantime, keep writing.",
      },
    },

    footer: {
      copy: '© 2026 HK Editing · Crafted for writers who care',
      email: 'Email',
    },
  },
} as const;

export type Translations = (typeof translations)['en'];
