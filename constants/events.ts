import images from "./images.js";
import { Images_cannot_stop } from "./cannot_stop/dayByday";
import { activityPhotos } from "./eventActivityImages";
interface events {
  id: number;
  programTitle: string;
  eventName: string;
  date: string;
  title: string;
  url: string;
  activityTitleOne: string;
  activityTitleTwo: string;
  activityContentOne: string;
  activityContentTwo: string;
  activityPhotos?: {
    photosFirst?: string;
    photosSecond?: string;
  };
  photo: string;
  poster: string;
  featuredImage: string[];
  memory?: {
    day1?: string;
    day2?: string;
    day3?: string;
  };
}

export const events = [
  {
    id: 1,
    title: "Whistle Blowers",
    programTitle: "Creative voices for Change Program",
    eventName: "Awareness Event",
    date: "17-20 March 2022",
    photo: images.img_whistle_blower_poster,
    url: "whistle-blowers",
    activityTitleOne: "Executive Summary",
    activityTitleTwo: "Objectives and Outputs",
    activityContentOne: `"Can't Stop, Won't Stop" project, a three-day event, successfully fostered community resilience and bonding through creative expressions, artistic endeavors, food, and films. This initiative addressed the challenges of displacement and identity crisis faced by communities affected by the coup since February 2021, offering a rejuvenating space that rekindled cultural connections and a sense of belonging. Furthermore, it supported local businesses, contributing to unity and laying the groundwork for sustainable societal growth, demonstrating the power of cultural and artistic engagement in healing and unifying communities during times of upheaval.`,
    activityContentTwo: `The outdoor film festival over two days offered attendees a curated selection of films ranging from documentaries that delve into the socio-political intricacies of Myanmar to heartwarming short films depicting the everyday lives and struggles of its people. This segment not only provided a platform for filmmakers to showcase their work but also facilitated insightful discussions between creators and the audience, fostering a deeper understanding of the themes presented.`,
    activityPhotos: {
      photosFirst: activityPhotos.whistle_blowers,
    },
  },
  {
    id: 2,
    title: "On Our Own Time",
    programTitle: "Creative voices for Change Program",
    eventName: "Awareness Event",
    date: "4 August 2022",
    photo: images.img_on_our_own_time_poster,
    url: "on-our-own-time",
    activityTitleOne: "Activity Description:",
    activityTitleTwo: "The Impact:",
    activityContentOne: `This photo series by Htet Aung Lwyn delves into the profound themes of communal joy amidst societal collapse, the cathartic power of rage, and the concept of finding home within a community. Through evocative imagery, the series captures the raw emotions and the unspoken trials of individuals in a society where expressing full, unbridled anger is often suppressed. By channeling feelings that have been historically masked with forced politeness or muted grief, the series seeks to expose and validate the spectrum of human emotions that are often sidelined.`,
    activityContentTwo: `The impact of this photo series is multifaceted. Firstly, it serves as an artistic outlet for communal rage, providing both the subjects and the viewers a space to confront and process complex emotions in a cathartic manner. By visually narrating the struggles of maintaining composure in the face of adversity, the series encourages empathy and a deeper understanding of the psychological toll such experiences entail.
    Furthermore, the series aims to spark conversations about the societal norms that restrict emotional expression, questioning the validity and impact of such norms on mental health and community solidarity. It also offers an opportunity for viewers to reflect on their own experiences with suppressed emotions and the societal expectations that shape them.
    By highlighting the resilience found in community bonds, the series underscores the importance of collective healing and the strength derived from shared experiences and mutual support. This celebration of community serves not only as a beacon of hope but also as a crucial reminder of the power of collective endurance and unity in times of turmoil.`,
    activityPhotos: {
      photosFirst: activityPhotos.oootActivity,
      photosSecond: activityPhotos.oootImpact,
    },
  },
  {
    id: 3,
    title: "Can’t Stop, Won’t Stop 2023",
    programTitle: "Creative Resistance Program",
    eventName: "Solidarity Event",
    date: "22-24 February 2023",
    photo: images.img_cannot_stop_2023_poster,
    url: "can't-stop-2023",
    activityTitleOne: "Executive Summary",
    activityTitleTwo: "Objectives and Outputs",
    activityContentOne: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    activityContentTwo: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    objectives: `The outdoor film festival over two days offered attendees a curated selection of films ranging from documentaries that delve into the socio-political intricacies of Myanmar to heartwarming short films depicting the everyday lives and struggles of its people. This segment not only provided a platform for filmmakers to showcase their work but also facilitated insightful discussions between creators and the audience, fostering a deeper understanding of the themes presented.`,
    activityPhotos: {
      photosFirst: activityPhotos.csws23_1,
      photosSecond: activityPhotos.csws23_2,
    },
  },
  {
    id: 4,
    title: "Indivisible",
    programTitle: "Creative Resistance Program",
    eventName: "Advocacy Event",
    date: "6-14 October 2023",
    photo: images.img_indivisible_poster,
    url: "indivisible",
    activityTitleOne: "ACTIVITY OVERVIEW",
    activityTitleTwo: "Mae Sot Exhibition",
    activityContentOne: `The photo exhibition  was conducted from 6th Oct to 14th Oct, and panel discussion on 11th Oct at Alliance Francaise, Chiang Mai.
    At the exhibition, a  total of 41 pictures  and a video through the lens of a dedicated photographer, Khin Sandar Nyunt were displayed, with curation by Som Supaparinya. The displayed pictures showcased the daily routines of medical students who ventured into Karenni State after Coup. They initiated mobile medical services in IDP camps in Karenni state, a region marked by intense conflict. Subsequently, a clinic was established providing essential daily healthcare services. 
    Over the course of the 10 days, approximately over 400 visitors to the exhibition engaged at Alliance Francaise Chiang Mai and online key posts had a reach of 16,740. A total of 54,893 Baht was raised through the sale of, postcards and donation. An additional 18000 baht  is expected to be raised in artwork orders in the coming days. 
    The exhibition opened with close door event on the evening of the Thursday 5th October and opening event on the 6th of October with speeches, film screening, music, food and drink. `,
    activityContentTwo: `The photo exhibition is now showing at Stardust Studio from 23th Nov to 3rd Dec.  
    One of the visitor at Chiang Mai exhibition is the owner of Stardust Studio and she is currently teaching photography workshop in migrant school in Mae Sot with co-owner of the Stardust Studio. They requested to host INDIVISIBLE exhibition as their frist exhitbion in their studio. 
    Htoo Alainmar Bo (photographer) & May Miya Moe (painter) who both are stuck in Mae Sot since early 2022. Both of them are under 25, queer aritsts who are struggling to create in such space as Mae Sot due to day to day survival need. Even thought they have never curate before we want to give oppotunatity and creat jobs for them. 
    On 23rd of November we had opening night for INDIVISIBLE Mae Sot edition and we had over 40 people attending. Journalist, Migrant school teacher, film maker, artists, students and  member of FGWM Federation of General Workers Myanmar  `,
    activityPhotos: {
      photosFirst: activityPhotos.activity,
      photosSecond: activityPhotos.exhibition,
    },
  },
  {
    id: 5,
    title: "Can’t Stop, Won’t Stop 2024",
    programTitle: "Creative Resistance Program",
    eventName: "Solidarity Event",
    date: "22-24 February 2024",
    photo: images.img_cannot_stop_2024_poster,
    url: "can't-stop-2024",
    summary: `"Can't Stop, Won't Stop" project, a three-day event, successfully fostered community resilience and bonding through creative expressions, artistic endeavors, food, and films. This initiative addressed the challenges of displacement and identity crisis faced by communities affected by the coup since February 2021, offering a rejuvenating space that rekindled cultural connections and a sense of belonging. Furthermore, it supported local businesses, contributing to unity and laying the groundwork for sustainable societal growth, demonstrating the power of cultural and artistic engagement in healing and unifying communities during times of upheaval.`,
    objectives: `The outdoor film festival over two days offered attendees a curated selection of films ranging from documentaries that delve into the socio-political intricacies of Myanmar to heartwarming short films depicting the everyday lives and struggles of its people. This segment not only provided a platform for filmmakers to showcase their work but also facilitated insightful discussions between creators and the audience, fostering a deeper understanding of the themes presented.`,
    featuredImage: [
      images.img_cannot_stop01,
      images.img_cannot_stop02,
      images.img_cannot_stop03,
    ],
    memory: {
      day1: Images_cannot_stop.day1,
      day2: Images_cannot_stop.day2,
      day3: Images_cannot_stop.day3,
    },
  },
  {
    id: 6,
    title: "Echos Of Resistances",
    programTitle: "Creative Resistance Program",
    eventName: "Advocacy Event",
    date: "12-14 April 2024",
    photo: images.img_echos_of_resistances_poster,
    url: "echos-of-resistances",
    activityTitleOne: "Executive Summary",
    activityTitleTwo: "Objectives and Outputs",
    activityContentOne: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    activityContentTwo: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    objectives: `The outdoor film festival over two days offered attendees a curated selection of films ranging from documentaries that delve into the socio-political intricacies of Myanmar to heartwarming short films depicting the everyday lives and struggles of its people. This segment not only provided a platform for filmmakers to showcase their work but also facilitated insightful discussions between creators and the audience, fostering a deeper understanding of the themes presented.`,
  },
  {
    id: 7,
    title: "Fights For Our Rights",
    programTitle: "Creative Resistance Program",
    eventName: "Advocacy Event",
    date: "12-14 April 2024",
    photo: images.img_fights_for_our_rights_poster,
    url: "fights-for-our-rights",
    activityTitleOne: "Activity Description",
    activityContentOne: `A New Burma team works closely with the ground team from FGWM by voice interviewing factory workers in Myanmar. Total 20 workers from 4 different factories were interviewed in the factory. Each of them were interviewed for 3-5 minutes, due to security reasons, we are not putting their name or where they work. 

    Based on that Mg Phoe created 6 watercolor art pieces. 
    Here is the issue we have covered and showcasing the issue that currently happening in the factory on the calendar.

    As there not enough transportation provided, workers have to commute dangerously 
    Lives of different child workers who are subjected to forced labour under various conditions 
    Factory cafeteria also acting as storage space. As there are not enough tables, workers have to eat their meals on the floor. There is usually a shortage of drinking water as well
    Life of a pergrants worker being pressured to work until the product meets the quality control standard 
    Life of an underaged child worker who should be in school
    For a fair wage, For peaceful and safe working conditions, For a new age for workers `,
    activityContentTwo: `Raising Awareness: The series highlights critical issues within the factories, such as unsafe transportation, the exploitation of child labor, inadequate facilities, and the challenges faced by pregnant workers and underaged children. By bringing these issues to life through art, Mg Phoe’s work raises awareness among a broader audience, drawing attention to conditions that might otherwise remain hidden from public view.
    Advocacy and Dialogue: The visual depiction of these conditions serves as a powerful tool for advocacy. It can influence public opinion and potentially sway policymakers and industry leaders to reconsider and reform labor practices. The artwork encourages dialogue among stakeholders, including NGOs, government bodies, and the international community, about improving labor standards and ensuring worker safety.
    Empowering Workers: By sharing their stories through the project, the workers are given a voice, albeit anonymously, to express their struggles and injustices faced daily. This act of sharing can be empowering for other workers in similar situations, knowing that their hardships are being recognized and articulated on a public platform.
    Supporting Change and Fundraising: The exposure generated by this art series can support campaigns aimed at improving labor conditions, securing fair wages, and enforcing labor laws that protect workers, including vulnerable groups like pregnant women and children. Additionally, selling the calendars featuring these watercolors can raise funds for the FGWN (Factory Ground Workers Network), directly supporting their efforts to advocate for and assist factory workers.`,
    activityPhotos: {
      photosFirst: activityPhotos.ffor1,
      photosSecond: activityPhotos.ffor2,
    },
  },
  {
    id: 8,
    title: "For The Love of Coming Home",
    programTitle: "Creative Resistance Program",
    eventName: "Advocacy Event",
    date: "12-14 April 2024",
    photo: images.img_for_the_love_of_poster,
    url: "for-the-love-of-coming-home",
    artistData: {
      alco: {
        artistName: "alco",
        artistProfie:
          "Born in 1999 in Mogok, Shan State, Myanmar, Alco discovered a passion for art early on by exploring and experimenting with portrait drawings. After graduating with a diploma in interior design, Alco worked as a decorative artist for residences and stores. By late 2019, Alco embarked on a career as an independent full-time artist, driven by a creative mind and an innovative spirit. Alco is passionate about expressing art through various mediums. As an act of satirizing high art and embracing innovation, Alco has experimented with vandalism art.",
        artistArtwork: activityPhotos.alco,
      },
      habo: {
        artistName: "HABo",
        artistProfie:
          "HALMBo currently resides in Mae Sot, Thailand, where she finds joy in exploring the city and capturing its moments. Since 2017, she has developed a passion for photo manipulation, a medium through which she expresses the thoughts and emotions that consume her mind and heart.",
        artistArtwork: activityPhotos.habo,
      },
      rabelluaye: {
        artistName: "Rabelluaye",
        artistProfie:
          "Home is the sacred space where the heartbeat of family resonates in shared moments and cherished memories.",
        artistArtwork: activityPhotos.rabelluaye,
      },
      nukonoku: {
        artistName: "Nu KONO ku",
        artistProfie:
          "Born and raised in Mandalay, Nu KONO Ku is a digital collage artist whose creations transcend time and groove to the beats of vintage aesthetics and rap melodies. He blends the reality between the past and the present through the art of collage. His creative journey began in 2020. Each collage narrates a tale, woven together with fragments of vintage photographs, textures, and the soulful resonance of rap lyrics sometimes. His collages is where pixels meet poetry and vintage vibes to find a new resonance to explore the intersection of time, music, and digital expression.",
        artistArtwork: activityPhotos.nukonoku,
      },
      morrisjohn: {
        artistName: "Morrisjohn",
        artistProfie:
          "Morris John is a Mandalay-based visual artist who specializes in watercolor, acrylic, and oil paintings: he has also exhibited installations and collages, and published two chapbooks. He first exhibited in his house, in his room, as his inaugural underground solo show in 2022, which was attended by only one viewer. He then hosted a second underground solo show at his house in July 2023. During this second exhibition, he explored installations themed around nature and cities, and he began to experiment with flat color designs and idea-based paintings, moving away from his usual focus on light and dark contrasts. He made his first public appearance in the `Abnormal Dreams Duo Exhibition` in December 2023, at the Mother & Child Art Gallery in Yangon, where he explored themes related to Mandalay and the contemporary era. He is currently running a poetry publishing house, Yate Chauk.",
        artistArtwork: activityPhotos.morrisjohn,
      },
      noahchan: {
        artistName: "Noah",
        artistProfie:
          "Channy is passionate digital artist and animation film makers based on Myanmar. With a fascination for storytelling and a flair for visual artistry, he brings the characters and world to life through animation.",
        artistArtwork: activityPhotos.noahchan,
      },
    },
  },
  {
    id: 9,
    title: "When We See The Planes",
    programTitle: "Creative voices for Change Program",
    eventName: "Awareness Event",
    date: "15-17 March 2024",
    photo: images.img_planes_poster,
    url: "when-we-see-the-planes",
    activityTitleOne: "Executive Summary",
    activityTitleTwo: "Objectives and Outputs",
    activityContentOne: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    activityContentTwo: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    activityPhotos: {
      photosFirst: activityPhotos.when_we_see_planes1,
      photosSecond: activityPhotos.when_we_see_planes2,
    },
  },
  {
    id: 10,
    title: "Limbo Collective",
    programTitle: "Creative Resistance Program",
    eventName: "Advocacy Event",
    date: "11-29 September 2024",
    photo: images.img_limbo_poster,
    url: "limbo",
    activityTitleOne: "",
    activityTitleTwo: "",
    activityContentOne: `Seven Thai and seven Myanmar artists were given the task of imagining the society they dream of living in and produced 15 artworks for the LIMBO exhibition and performances. The opening includes performances as well as a talk (in English) by project director Somrak Sila and curators about stories of solidarity and the LIMBO Collective. 
    The artworks take various forms, including painting, photography, VDO art, multimedia installation, short film, internet art, art toys, interactive art and performance`,
    activityContentTwo: `The artworks take various forms, including painting, photography, VDO art, multimedia installation, short film, internet art, art toys, interactive art and performance`,
    activityPhotos: {
      photosFirst: activityPhotos.limbo1,
      photosSecond: activityPhotos.limbo2,
    },
  },
  {
    id: 11,
    title: "We Fight We Win",
    programTitle: "Creative voices for Change Program",
    eventName: "Awareness Event",
    date: "4 August 2022",
    photo: images.img_we_fight_we_win_poster,
    url: "we-fight-we-win",
    activityTitleOne: "Executive Summary",
    activityTitleTwo: "Objectives and Outputs",
    activityContentOne: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    activityContentTwo: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    activityPhotos: {
      photosFirst: activityPhotos.we_fight_we_win1,
      photosSecond: activityPhotos.we_fight_we_win2,
    },
  },
  {
    id: 12,
    title: "In Exile Exhibitions",
    programTitle: "Creative voices for Change Program",
    eventName: "Awareness Event",
    date: "1 February 2022",
    photo: images.img_imprisoned_poster,
    url: "in-exile-exhib",
    activityTitleOne: "Executive Summary",
    activityTitleTwo: "Objectives and Outputs",
    activityContentOne: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    activityContentTwo: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    activityPhotos: {
      photosFirst: activityPhotos.imprisoned1,
    },
  },
];
