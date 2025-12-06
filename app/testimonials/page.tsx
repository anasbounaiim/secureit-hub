// app/testimonials/page.tsx
import type { Metadata } from "next";
import TestimonialsCarousel from "./TestimonialsCarousel";
import { MessageSquareQuote, Shield } from "lucide-react";


export const metadata: Metadata = {
  title: "Testimonials – SecureIT-Hub",
  description: "LinkedIn recommendations about working with Mohammed.",
};

type Recommendation = {
  index: number;
  name: string;
  profileUrl: string;
  headline: string;
  text: string;
  date?: string;
  connection?: string;
  relationship?: string | null;
  imageDataSavepageSrc?: string | null;
};

// ✅ PASTE YOUR const recommendations HERE
const recommendations: Recommendation[] = [
  {
    index: 0,
    name: "Kevin R.",
    headline: "Digital Media Manager",
    profileUrl: "https://www.linkedin.com/in/kevin-r-63422092",
    imageDataSavepageSrc:
      "https://media.licdn.com/dms/image/v2/D4E03AQHJ4lZtLPYbFA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1685564066059?e=1765411200&v=beta&t=PuR2HiFwuI4NI076Wchc5fiXalyNhS92bSVmi5GXdFU",
    date: "Le 29 octobre 2025,",
    relationship: "Kevin a travaillé avec Mohammed mais dans des équipes différentes",
    text:
      "Working with Mohammed was a real pleasure. He’s not only technically sharp but also genuinely collaborative. Mohammed doesn’t just fix problems; he anticipates them, often having a solution ready before they escalate.\n\n" +
      "What I appreciated most was his ability to break down complex technical challenges into clear, actionable steps. His upfront thinking and calm presence quietly raise the bar for everyone around him. Any team would benefit from having Mohammed, not just for his expertise, but for the positive energy and professionalism he brings to the room.\n\n" },
  {
    index: 1,
    name: "Kevin Huysmans",
    headline: "Senior Network engineer",
    profileUrl: "https://www.linkedin.com/in/kevin-huysmans-94aa8a40",
    imageDataSavepageSrc:
      "https://media.licdn.com/dms/image/v2/D4E03AQHpfwDT3VM8qQ/profile-displayphoto-scale_100_100/B4EZqEdhSnGUAc-/0/1763158924122?e=1765411200&v=beta&t=mW6-ZR1p7GyddG4jr29bJXT16TjwEm1HPWGC6uZ7ujo",
    date: "Le 20 octobre 2025,",
    relationship: "Kevin a travaillé avec Mohammed mais dans des équipes différentes",
    text:
      "I’ve had the pleasure of working alongside Mohammed at Delhaize. Even though we’re in different teams, his proactive and solution-driven approach really stands out. He’s always willing to help and goes the extra mile to solve problems efficiently.\n\n" +
      "Mohammed is skilled, approachable, and calm under pressure; the kind of professional who makes collaboration easy. A true team player and a real asset to any organization.\n\n" },
  {
    index: 2,
    name: "Michael Van Nynatten",
    headline: "Experienced Client Services Manager | Driving Results through Strategic Digital Initiatives",
    profileUrl: "https://www.linkedin.com/in/michaelvn",
    imageDataSavepageSrc:
      "https://media.licdn.com/dms/image/v2/D4E03AQG_BsNMSdStUQ/profile-displayphoto-scale_100_100/B4EZi90RjHHEAc-/0/1755531254633?e=1765411200&v=beta&t=r8X2lqEhgWo49BO3kSOfdx84tBuxduA7tpRP85uDngs",
    date: "Le 14 octobre 2025,",
    text:
      "Experienced Client Services Manager | Driving Results through Strategic Digital Initiatives\n\n" +
      "I had the pleasure of working directly with Mohammed during his time at Ahold Delhaize, and I can confidently say he is one of the most reliable and driven professionals I’ve worked with. Mohammed consistently demonstrated a strong sense of ownership, a sharp analytical mindset, and a collaborative spirit that made him an invaluable member of the team.\n\n" +
      "Beyond his technical and strategic capabilities, what stands out most is his eagerness to learn and grow. He actively sought feedback, embraced new responsibilities, and continuously pushed himself to exceed expectations.\n\n" +
      "I highly recommend Mohammed to any organization looking for a dedicated, thoughtful, and high-performing team member. He will undoubtedly be a strong asset wherever he goes.\n\n" 
     },
  {
    index: 3,
    name: "Besmir Mehmetaj",
    headline: "IT consultant at Consort",
    profileUrl: "https://www.linkedin.com/in/besmir-mehmetaj-171a5a1a0",
    imageDataSavepageSrc: null,
    date: "Le 12 septembre 2025,",
    text:
      "I’ve had the privilege of working alongside Mohammed, and to say he is hardworking would be an understatement. He is sharp—able to see solutions where others see roadblocks—and his resourcefulness makes him indispensable to any team. What sets him apart is not just his skill, but his reliability. He is the steady hand you want when things get complicated, the person who shows up not only with answers but with a calm determination that inspires those around him.",
  },
  {
    index: 4,
    name: "Alfredo de Azeredo",
    headline: "Director Company-Owned Stores at Delhaize Luxembourg",
    profileUrl: "https://www.linkedin.com/in/alfredo-de-azeredo-a42169172",
    imageDataSavepageSrc:
      "https://media.licdn.com/dms/image/v2/C4E03AQH__aUE0J4sEQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1538332170498?e=1765411200&v=beta&t=jVzA-hWUDgksor8G1G_JGdvzypBE9n8NnT29VTaNmrk",
    date: "Le 29 août 2025,",
    text:
      "I had the pleasure of working with Mohammed on network incident management for Luxembourg. His approach is always structured and incredibly efficient. He consistently responds with speed and clarity, making him a reliable and essential team member.",
  },
  {
    index: 5,
    name: "Axel Joris",
    headline: "R2R & ESG Product Owner chez Delhaize Le Lion/De Leeuw SCA",
    profileUrl: "https://www.linkedin.com/in/axel-joris-512674a4",
    imageDataSavepageSrc:
      "https://media.licdn.com/dms/image/v2/D4E03AQGMMXXvep-iEQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1693568672474?e=1765411200&v=beta&t=97oYJbSdBf23uqvueQtjbaf6O0T5-dRnjti5pnGHH6Q",
    date: "Le 26 août 2025,",
    relationship: "Axel a travaillé avec Mohammed mais dans des équipes différentes",
    text:
      "I truly enjoyed working with Mohammed. He is highly available, customer-focused, and always finds pragmatic solutions quickly. A reliable professional with a strong service mindset.\n\n" +
      "Thanks again Mohammed for the solutions provided to us as client.",
  },
  {
    index: 6,
    name: "Aydan A.",
    headline: "IT Consultant",
    profileUrl: "https://www.linkedin.com/in/aydansec",
    imageDataSavepageSrc:
      "https://media.licdn.com/dms/image/v2/D4E03AQFLYs3Yq2DuGQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1684649650275?e=1765411200&v=beta&t=UN_UzVCK-zSldnI6tYuBSoGvcvLPY_8r7dk2UVEEm_8",
    date: "Le 9 août 2025,",
    text:
      "Working with Mohammed is like having a Swiss Army knife on your team, he’s everywhere, always ready, and always effective.\n\n" +
      "He has an exceptional ability to communicate clearly, even under pressure, and brings calm to chaos like it’s second nature. Whether it’s solving complex issues or navigating tight deadlines, Mohammed handles it with confidence and precision.\n\n" +
      "A true problem solver and someone you definitely want in your corner when it counts.\n\n"
  },
  {
    index: 7,
    name: "Valeed KHAN",
    headline: "Supply chain Replenishment Specialiste",
    profileUrl: "https://www.linkedin.com/in/valeed-khan-908076157",
    imageDataSavepageSrc:
      "https://media.licdn.com/dms/image/v2/D4E03AQEJjmeQn5fA3w/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1685486227321?e=1765411200&v=beta&t=LJQGeN99p5Trx5JitqcZ_UGKs39LrvOBDH0gvAlnOJ8",
    date: "Le 8 août 2025,",
    relationship: "Valeed a travaillé avec Mohammed mais dans des équipes différentes",
    text:
      "I had the pleasure of working with Mohammed on several SAP Change Waves. His technical expertise, calm approach, and ability to manage critical deployments made a real difference. He was always one step ahead, anticipating issues and supporting the team with clarity and precision. A true asset for any IT or infrastructure project.",
  },
  {
    index: 8,
    name: "Antoine Boyenval",
    headline: "Supply Chain Consultant at EY",
    profileUrl: "https://www.linkedin.com/in/antoine-boyenval-877154161",
    imageDataSavepageSrc:
      "https://media.licdn.com/dms/image/v2/C4D03AQGqu9il9LOACA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1632307717678?e=1765411200&v=beta&t=mQjOPlBLphIzz9-spf8648HQevCSCSXogZMGGhK6HFs",
    date: "Le 5 août 2025,",
    relationship: "Antoine a travaillé avec Mohammed mais dans des équipes différentes",
    text:
      "Working with Mohammed during the deployment of Pickstar at Forest & Puurs was a game-changer.\n\n" +
      "Even with the network instability on the new site and the switch from Cisco VPN to Zscaler, he quickly implemented a practical solution to restore our RDP access using a custom VBS script.\n\n" +
      "His ability to adapt, troubleshoot, and secure business continuity under pressure was outstanding.\n\n" +
      "Mohammed is a true go-to person for critical IT/business challenges",
  },
  {
    index: 9,
    name: "Sam Molkens",
    headline: "Reverse Logistics Manager bij Delhaize Belgium",
    profileUrl: "https://www.linkedin.com/in/sammolkens",
    imageDataSavepageSrc:
      "https://media.licdn.com/dms/image/v2/C4E03AQGj2tB83qNQmA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1659515563479?e=1765411200&v=beta&t=O7HVjEVd0MMMx44aMXctau69ZZDPGYM1JmG3UuPhzjA",
    date: "Le 5 août 2025,",
    relationship: "Sam a travaillé avec Mohammed mais dans des équipes différentes",
    text:
      "I collaborated with Mohammed on a logistics transformation related to MyTransics. His technical expertise and involvement played a role in addressing several challenges and helping to stabilize operations. He approached issues with a problem-solving mindset and provided support across both IT and business areas. He is a useful asset on complex projects.",
  },
  {
    index: 10,
    name: "Boualam Zariouh",
    headline: "Conseiller affiliés chez Delhaize Luxembourg SA",
    profileUrl: "https://www.linkedin.com/in/boualam-zariouh-9a6a45131",
    imageDataSavepageSrc:
      "https://media.licdn.com/dms/image/v2/C4E03AQE5S9tR7mhAYQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1662638564797?e=1765411200&v=beta&t=EX2cTi1EePVqRqBpdiK5POLYtN91XYwlv4HbO8pKW-I",
    date: "Le 5 août 2025,",
    text:
      "Working with Mohammed has always been a great experience from a client perspective.\n\n" +
      "As the advisor of the affiliated stores in Luxembourg, I’ve seen him solve many critical IT and network incidents with speed and efficiency.\n\n" +
      "Whenever an issue arises, he brings confidence and clear communication, making sure our operations continue without disruption.\n\n" +
      "His technical expertise and dedication to supporting the stores make him a highly reliable professional.\n\n" +
      "Thanks a lot",
  },
  {
    index: 11,
    name: "David Tshibassu",
    headline: "Solution Consultant S&C - Microsoft at SoftwareOne /  CEO of DogConnXion",
    profileUrl: "https://www.linkedin.com/in/david-tshibassu",
    imageDataSavepageSrc:
      "https://media.licdn.com/dms/image/v2/D4E03AQHjEYlSQdaVsQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1703016995144?e=1765411200&v=beta&t=oEu1_VTrNaq7_Zdgov28498JYJBtZ7wB-vutZ-C_Yjc",
    date: "Le 24 juillet 2025,",
    text:
      "I had the pleasure of working with Mohammed Arbaoui in a security company, and I can confidently recommend him. He is reliable, professional, and always showed great attention to detail. His calm demeanor and quick thinking made him a valuable team member in both routine and high-pressure situations. A true asset in any security role.",
  },
  {
    index: 12,
    name: "Hassan NAITALI",
    headline: "Consultant .NET @ Delhaize Belgium | Azure",
    profileUrl: "https://www.linkedin.com/in/naitali",
    imageDataSavepageSrc:
      "https://media.licdn.com/dms/image/v2/C4D03AQFL8429Gjcl1Q/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1556381523835?e=1765411200&v=beta&t=OpahEnfZ6_fz4SWWR3cF8c1dKmIieC36oQDudwnzX8E",
    date: "Le 22 juillet 2025,",
    relationship: "Hassan a travaillé avec Mohammed mais dans des équipes différentes",
    text:
      "Mohammed has been a great help every time my tickets landed in his queue.\n\n" +
      "He’s always helpful, a good listener, and focused on finding the best solution.\n\n" +
      "I truly believe Mohammed would be a valuable member of any team he joins.",
  },
  {
    index: 13,
    name: "Ismaël Saïdi",
    headline: "ServiceNow Consultant",
    profileUrl: "https://www.linkedin.com/in/ismael-saidi-890613201",
    imageDataSavepageSrc:
      "https://media.licdn.com/dms/image/v2/C4E03AQHcwe8M15LwjQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1607453666052?e=1765411200&v=beta&t=NUUQT7hplna-c6vT8phRqCy4dI28USLwe1MutpS8G9A",
    date: "Le 9 juillet 2025,",
    relationship: "Ismaël a travaillé avec Mohammed mais dans des entreprises différentes",
    text:
      "I've known Mohammed since our high school days and it’s been great to reconnect years later as we both evolved in the IT world.\n\n" +
      "We’ve had the chance to exchange on various technical topics like automation, security, and systems. I’ve always appreciated his sharp mind, calm attitude, and clear way of explaining things.\n\n" +
      "He’s a grounded, helpful, and skilled professional. Someone you can count on when it matters.\n\n" 
  },
  {
    index: 14,
    name: "Youssef Boutazakhti",
    headline: "Reporting & Analytics specialist",
    profileUrl: "https://www.linkedin.com/in/youssef-boutazakhti-8b7b5812a",
    imageDataSavepageSrc:
      "https://media.licdn.com/dms/image/v2/C5603AQFKKFtLjyqTBA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1545613778502?e=1765411200&v=beta&t=4wGfR53JZj6Oo9lhRq2W0w7VKh6KTT5giO4N7lltalo",
    date: "Le 24 juin 2025,",
    relationship: "Youssef a travaillé avec Mohammed mais dans des équipes différentes",
    text:
      "I’ve had the pleasure of working with Mohammed as a colleague. He’s a skilled system engineer with strong expertise in networking and security. Always professional, helpful, and a great team player. Highly recommend!",
  },
  {
    index: 15,
    name: "Filip Djordjevic",
    headline: "DevSecOps",
    profileUrl: "https://www.linkedin.com/in/filip-djordjevic-0a91b121a",
    imageDataSavepageSrc:
      "https://media.licdn.com/dms/image/v2/D4D03AQFN82n3544Cog/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1706820781164?e=1765411200&v=beta&t=t7emW-Mx4ZfIW1gT6dACs8URsTdO5NQS_UVf8melYO8",
    date: "Le 12 juin 2025,",
    text:
      "I had the pleasure of working with Mohammed Arbaoui at Ahold Delhaize, and I can confidently say they are one of the most dedicated and talented professionals I’ve worked alongside. He brought a unique mix of creativity, strategic thinking, and a strong work ethic to every project.\n\n" +
      "Whether it was collaborating on high-pressure deadlines or finding smart solutions to complex problems, Mohammed consistently delivered exceptional results while maintaining a positive and team-oriented attitude. He also have a natural ability to lead by example, making everyone around them better at what they do.\n\n" +
  "Any team would be lucky to have Mohammed Arbaoui.",
  },
  {
    index: 16,
    name: "Leeroy Salomez",
    headline: "Leeroy",
    profileUrl: "https://www.linkedin.com/in/leeroy-salomez-68aa602",
    imageDataSavepageSrc:
      "https://media.licdn.com/dms/image/v2/C4E03AQFzkOFb0kECIQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1649422325159?e=1765411200&v=beta&t=hJksjjeS0kOQCvSZZPZUIHT5bT-CkoDAuZbUoEd4boY",
    date: "Le 21 mai 2025,",
    relationship: "Leeroy a travaillé avec Mohammed mais dans des équipes différentes",
    text:
      "Customer Care Manager @Delhaize Belgium - Offering the Delhaize Customers the best service!\n\n" +
      "Mohammed is a very service-minded colleague with a hands-on attitude. His knowledge of our internal processes and applications is indispensable!",
  },
  {
    index: 17,
    name: "Dimitri Nikenas",
    headline: "Global IT Service Continuity & Data Integrity Lead at UCB",
    profileUrl: "https://www.linkedin.com/in/dimitri-nikenas-9755693",
    imageDataSavepageSrc: null,
    date: "Le 30 janvier 2025,",
    relationship: "Dimitri a travaillé avec Mohammed mais dans des équipes différentes",
    text:
      "I've met Mohammed in the position of System Engineer in Ahold Delhaize. He has demonstrated excellent technical skills and ability to communicate effectively with the teams. His technical expertise and aptitude for solving problems have been a valuable asset to the organization.\n\n" +
      "I am confident that Mohammed will continue to excel and bring significant value to any organization.\n\n" +
      "Sincerely,\nDimitri",
  },
  {
    index: 18,
    name: "Isa S.",
    headline: "Isa Salehe",
    profileUrl: "https://www.linkedin.com/in/isasalehe",
    imageDataSavepageSrc: null,
    date: "Le 15 octobre 2024,",
    text:
      "I had the pleasure of working with Mohammed at Verisure, where he worked under my supervision.\n\n" +
      "Later I had the opportunity to rely on him as IT Support at Ahold Delhaize.\n" +
      "Mohammed is professional, proactive, driven, and consistently goes above and beyond in his work. His contributions significantly impacted our team by improving efficiency and productivity.\n\n" +
      "Mohammed is an excellent team player, always willing to collaborate and support his colleagues to achieve common goals. His problem-solving skills have been invaluable in addressing issues swiftly and effectively.\n\n" +
      "On a personal note, I have always been impressed by Mohammed's dedication and positive attitude. His ability to stay calm under pressure and find innovative solutions has made a lasting impression on me.\n\n" +
      "I am grateful to have had the opportunity to work with someone as talented, flexible and reliable as Mohammed.\n\n" +
      "His technical expertise, particularly in IT support, has been instrumental ensuring smooth operations.\n\n" +
      "I highly recommend Mohammed for any position that requires a dedicated and skilled professional\n\n" 
  },
  {
    index: 19,
    name: "André Powroznik",
    headline: "IT Strategy and Operations, Business Transformation and Change",
    profileUrl: "https://www.linkedin.com/in/powro",
    imageDataSavepageSrc:
      "https://media.licdn.com/dms/image/v2/C5603AQGdYj_nfXLKGw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1551948617570?e=1765411200&v=beta&t=gQ91HR0hROayaQnpCnzqKiHfBK20r1eKsLhtR6_uXzM",
    date: "Le 30 juillet 2023,",
    relationship: "André a travaillé avec Mohammed mais dans des équipes différentes",
    text:
      "J'ai eu le plaisir de collaborer avec Mohammed Arbaoui chez Johnson Controls et j'ai été ravi de le retrouver chez Ahold Delhaize. Tout au long de notre parcours professionnel ensemble, j'ai été impressionné par son dynamisme, sa proactivité ainsi que ses excellentes compétences techniques. Mohammed se distingue par sa capacité à communiquer efficacement et à apporter des solutions pertinentes. Sa détermination à relever les défis en fait un collègue apprécié et un atout précieux pour toute personne travaillant avec lui.",
  },
];

export default function TestimonialsPage() {
  return (
    <section className="mx-auto w-full max-w-xl md:max-w-5xl space-y-10 text-gray-200">

      {/* Header */}
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-emerald-400">
          /Recommendations
        </p>

        <div className="flex items-center gap-3">
          <MessageSquareQuote className="h-7 w-7 text-emerald-400 opacity-80" />
          <h1 className="text-3xl md:text-4xl font-semibold tracking-wide text-white">
            Recommendations
          </h1>
        </div>

        {/* Clean paragraph with highlighted spans */}
        <p className="max-w-2xl text-gray-300 text-[15px] leading-relaxed">
          I receive consistent appreciation from{" "}
          <span className="text-emerald-300">
            engineers, managers and colleagues
          </span>{" "}
          I collaborate with. Only{" "}
          <span className="text-emerald-300">public LinkedIn recommendations</span>{" "}
          are displayed here to keep everything{" "}
          <span className="text-emerald-400">clean, secure and fully compliant</span>.
          Each recommendation highlights what defines my work:{" "}
          <span className="text-emerald-300">
            clarity, reliability, discipline
          </span>{" "}
          and{" "}
          <span className="text-emerald-400">
            real problem-solving in live production environments
          </span>.
        </p>

        {/* Small terminal prompt line */}
        <div className="inline-flex items-center gap-2 rounded-md border border-emerald-500/40 bg-black/80 px-3 py-2 font-mono text-[11px] text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.25)]">
          <span className="text-emerald-400">$</span>
          <span>cat testimonials.log</span>
        </div>
      </header>

      {/* Carousel */}
      <TestimonialsCarousel recommendations={recommendations} />
    </section>
  );
}