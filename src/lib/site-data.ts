export const DOCTOR = {
  name: "Dr. Avinash Punshi",
  title: "Consultant Rheumatologist",
  credentials: "MBBS, FCPS (Medicine), FCPS (Rheumatology), MRCP (UK)",
  experience: "15+ years",
  reviews: "1,000+",
  satisfaction: "99%",
  languages: "English, Urdu",
  city: "Karachi",
};

// Replace with the clinic's real WhatsApp number.
export const WHATSAPP_NUMBER = "923001234567";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Assalam o Alaikum, I would like to book an appointment with Dr. Avinash Punshi.",
)}`;
export const PHONE_DISPLAY = "+92 300 1234567";

export type Location = {
  slug: string;
  name: string;
  area: string;
  address: string;
  fee: string;
  days: string;
  hours: string;
  mapQuery: string;
};

export const LOCATIONS: Location[] = [
  {
    slug: "ziauddin-clifton",
    name: "Dr. Ziauddin Hospital",
    area: "Clifton",
    address: "Dr. Ziauddin Hospital, Clifton, Karachi",
    fee: "Rs. 3,000",
    days: "Monday, Wednesday, Friday",
    hours: "5:00 PM – 8:00 PM",
    mapQuery: "Dr Ziauddin Hospital Clifton Karachi",
  },
  {
    slug: "ziauddin-north-nazimabad",
    name: "Dr. Ziauddin Hospital",
    area: "North Nazimabad",
    address: "Dr. Ziauddin Hospital, North Nazimabad, Karachi",
    fee: "Rs. 3,000",
    days: "Tuesday, Thursday",
    hours: "4:00 PM – 7:00 PM",
    mapQuery: "Dr Ziauddin Hospital North Nazimabad Karachi",
  },
  {
    slug: "south-city-clifton",
    name: "South City Hospital",
    area: "Clifton",
    address: "South City Hospital, Clifton, Karachi",
    fee: "Rs. 3,500",
    days: "Monday, Thursday",
    hours: "2:00 PM – 4:00 PM",
    mapQuery: "South City Hospital Clifton Karachi",
  },
  {
    slug: "rims-pechs",
    name: "RIMS Trauma Hospital",
    area: "PECHS",
    address: "RIMS Trauma Hospital, PECHS, Karachi",
    fee: "Rs. 2,000",
    days: "Saturday",
    hours: "11:00 AM – 2:00 PM",
    mapQuery: "RIMS Trauma Hospital PECHS Karachi",
  },
  {
    slug: "idc-saddar",
    name: "Islamabad Diagnostic Centre",
    area: "Saddar",
    address: "Islamabad Diagnostic Centre (IDC), Saddar, Karachi",
    fee: "Rs. 2,000",
    days: "Wednesday",
    hours: "11:00 AM – 1:00 PM",
    mapQuery: "Islamabad Diagnostic Centre Saddar Karachi",
  },
  {
    slug: "online-video-consultation",
    name: "Online Video Consultation",
    area: "Anywhere",
    address: "Secure video call from home, anywhere in Pakistan or abroad",
    fee: "Rs. 2,200",
    days: "Monday – Saturday",
    hours: "9:00 PM – 10:30 PM",
    mapQuery: "",
  },
];

export type Condition = {
  slug: string;
  name: string;
  short: string;
  intro: string;
  symptoms: string[];
  treatment: string;
};

export const CONDITIONS: Condition[] = [
  {
    slug: "rheumatoid-arthritis",
    name: "Rheumatoid Arthritis",
    short: "Painful, swollen joints that feel worst in the morning.",
    intro:
      "Rheumatoid arthritis happens when the body's own defence system mistakenly attacks the lining of the joints. It usually affects the small joints of the hands, wrists and feet on both sides of the body. With early treatment, most patients keep working, praying and living normally — the key is starting the right medicine before joint damage sets in.",
    symptoms: [
      "Joint pain and swelling in the hands, wrists or feet",
      "Morning stiffness that lasts more than 30 minutes",
      "Tiredness and low-grade fever",
      "Symptoms on both sides of the body",
      "Weak grip or difficulty opening jars and doors",
    ],
    treatment:
      "Care usually begins with blood tests and an examination, followed by disease-modifying medicines (such as methotrexate) or, when needed, newer biologic therapy. You will be reviewed regularly so the dose can be adjusted safely.",
  },
  {
    slug: "osteoarthritis",
    name: "Osteoarthritis",
    short: "Wear-and-tear knee, hip or hand pain that worsens with activity.",
    intro:
      "Osteoarthritis is the gradual thinning of the smooth cartilage that cushions a joint — most often the knees, hips, lower back or hands. It is common after the age of 45 and with extra body weight. It is not something you simply have to live with: pain can be brought down a lot with the right combination of exercise, weight support and medicines.",
    symptoms: [
      "Knee or hip pain that increases with walking and stairs",
      "Short-lived stiffness after resting",
      "Grinding or clicking in the joint",
      "Swelling around the knee",
      "Bony bumps on the fingers",
    ],
    treatment:
      "Treatment focuses on strengthening the muscles around the joint, weight and posture advice, pain relief that is safe for your stomach and kidneys, and joint injections when appropriate.",
  },
  {
    slug: "ankylosing-spondylitis",
    name: "Ankylosing Spondylitis",
    short: "Persistent lower back pain in young adults that improves with movement.",
    intro:
      "Ankylosing spondylitis is a form of inflammation in the spine and pelvic joints that typically starts before the age of 40. Unlike ordinary back pain, it feels worse after rest and better after moving around. Many patients in Karachi are treated for years as 'muscle pain' before the correct diagnosis — early recognition protects the flexibility of the spine.",
    symptoms: [
      "Lower back and buttock pain lasting more than three months",
      "Pain and stiffness worst in the early morning or at night",
      "Relief with exercise, not with rest",
      "Heel pain or chest wall tightness",
      "Red, painful eye (iritis) in some patients",
    ],
    treatment:
      "A daily exercise programme, anti-inflammatory medicine, and — where inflammation stays high — biologic therapy that can dramatically reduce pain and stiffness.",
  },
  {
    slug: "fibromyalgia",
    name: "Fibromyalgia",
    short: "Widespread body pain, poor sleep and exhaustion — tests often look normal.",
    intro:
      "Fibromyalgia is a real, recognised condition in which the nervous system becomes over-sensitive to pain signals. Reports and X-rays usually come back normal, which is why many patients are told 'there is nothing wrong'. There is something wrong, it can be explained, and it can be managed.",
    symptoms: [
      "Pain across the whole body for months",
      "Waking up unrefreshed despite sleeping",
      "Deep fatigue and low stamina",
      "Difficulty concentrating (\"brain fog\")",
      "Headaches, tingling or stomach upset",
    ],
    treatment:
      "Management combines a clear explanation of the condition, graded exercise, sleep restoration, and medicines that calm pain signalling. Most patients improve steadily over a few months.",
  },
  {
    slug: "gout",
    name: "Gout",
    short: "Sudden, severe attacks of pain — often in the big toe.",
    intro:
      "Gout occurs when uric acid crystals settle inside a joint and trigger a fierce attack of pain, redness and swelling, often overnight. Attacks settle within days, but without long-term uric acid control they return more often and can damage the joint and the kidneys.",
    symptoms: [
      "Sudden severe pain, often in the big toe, ankle or knee",
      "Redness, heat and swelling over the joint",
      "Pain so intense that even a bedsheet hurts",
      "Attacks after rich food, red meat or dehydration",
      "Hard lumps (tophi) around joints in long-standing gout",
    ],
    treatment:
      "Fast relief for the attack, then a simple daily tablet to bring uric acid to a safe level, with dietary guidance suited to local food habits.",
  },
  {
    slug: "osteoporosis",
    name: "Osteoporosis",
    short: "Silent bone thinning that leads to fractures from minor falls.",
    intro:
      "Osteoporosis makes bones thin and fragile without causing any pain until a bone breaks — commonly the wrist, hip or spine. It is very common in Pakistani women after menopause and in anyone who has taken steroids for a long time. A simple DEXA scan and a blood test tell us where you stand.",
    symptoms: [
      "A fracture after a minor fall or knock",
      "Loss of height or a stooping posture",
      "Sudden mid-back pain from a spinal fracture",
      "No symptoms at all in early stages",
    ],
    treatment:
      "Vitamin D and calcium correction, safe exercise, fall prevention advice, and prescription bone-strengthening treatment when the scan shows it is needed.",
  },
  {
    slug: "lupus-sle",
    name: "Lupus (SLE) & Mixed Connective Tissue Disease",
    short: "Fatigue, rashes and joint pain caused by an overactive immune system.",
    intro:
      "Lupus is an autoimmune condition that can affect the skin, joints, blood, kidneys and other organs. It varies enormously from person to person. With regular monitoring and modern treatment, the great majority of patients live full lives, complete their studies, work and have healthy pregnancies.",
    symptoms: [
      "Fatigue that does not improve with rest",
      "Rash across the cheeks or after sun exposure",
      "Joint pain and swelling",
      "Mouth ulcers and hair fall",
      "Fever, or swelling of the legs and face",
    ],
    treatment:
      "Careful blood and urine monitoring, hydroxychloroquine as a foundation, and targeted immune treatment when organs are involved — with a clear plan you understand.",
  },
  {
    slug: "vasculitis",
    name: "Vasculitis",
    short: "Inflammation of blood vessels affecting skin, nerves or organs.",
    intro:
      "Vasculitis is a group of conditions in which blood vessels become inflamed, reducing blood supply to the skin, nerves, kidneys or lungs. Because it can look like many other illnesses, it needs an experienced eye and the right tests to confirm — and prompt treatment usually settles it well.",
    symptoms: [
      "Purple spots or ulcers on the skin",
      "Persistent fever and weight loss",
      "Numbness or weakness in a hand or foot",
      "Blood in the urine",
      "Sinus problems, cough or breathlessness",
    ],
    treatment:
      "Rapid assessment, steroids to control the inflammation, and immune-suppressing therapy with a planned tapering schedule.",
  },
  {
    slug: "raynauds-phenomenon",
    name: "Raynaud's Phenomenon",
    short: "Fingers that turn white, blue then red in the cold.",
    intro:
      "In Raynaud's phenomenon the small blood vessels of the fingers and toes tighten sharply in cold weather or during stress, cutting off blood flow for a few minutes. It is often harmless — but sometimes it is the first sign of an underlying connective tissue disease, so a check-up is worthwhile.",
    symptoms: [
      "Fingers turning white, then blue, then red",
      "Numbness, pins and needles or pain during an attack",
      "Triggered by cold water, air conditioning or stress",
      "Skin ulcers on the fingertips in severe cases",
    ],
    treatment:
      "Practical warmth and lifestyle measures, screening blood tests and nailfold examination, plus circulation-improving medicine when attacks are frequent or painful.",
  },
  {
    slug: "polymyositis-dermatomyositis",
    name: "Polymyositis & Dermatomyositis",
    short: "Muscle weakness in the shoulders and thighs, sometimes with a rash.",
    intro:
      "These conditions cause the immune system to inflame the muscles, leading to weakness rather than pain — difficulty climbing stairs, standing from the floor, or lifting the arms. Dermatomyositis adds a characteristic rash on the eyelids, knuckles or chest.",
    symptoms: [
      "Difficulty standing up from sitting or squatting",
      "Trouble lifting arms above the head",
      "Purple-red rash on eyelids or knuckles",
      "Difficulty swallowing",
      "Breathlessness in some patients",
    ],
    treatment:
      "Blood enzyme tests and specialised imaging to confirm, then steroids with immune-modulating medicine and physiotherapy to rebuild muscle strength.",
  },
  {
    slug: "antiphospholipid-syndrome",
    name: "Antiphospholipid Syndrome",
    short: "A clotting disorder linked to repeated miscarriage and blood clots.",
    intro:
      "Antiphospholipid syndrome makes the blood more likely to clot. It is an important and treatable cause of recurrent miscarriage, deep vein thrombosis and stroke in young people. Once confirmed by blood tests, it is managed very effectively.",
    symptoms: [
      "Two or more unexplained miscarriages",
      "Clot in the leg (painful, swollen calf)",
      "Stroke or clot at a young age",
      "Lace-like purple pattern on the skin",
      "Low platelet count on a blood report",
    ],
    treatment:
      "Confirmatory antibody testing repeated after 12 weeks, blood-thinning treatment tailored to your history, and close support during pregnancy.",
  },
  {
    slug: "interstitial-lung-disease",
    name: "Interstitial Lung Disease (ILD)",
    short: "Dry cough and breathlessness linked to autoimmune disease.",
    intro:
      "Some rheumatic conditions can involve the lungs, causing scarring of the delicate lung tissue. Caught early, treatment can slow or stop the process — which is why patients with rheumatoid arthritis, scleroderma or myositis should mention any new cough or breathlessness.",
    symptoms: [
      "Dry cough that will not settle",
      "Breathlessness climbing stairs or walking",
      "Reduced exercise tolerance",
      "Crackling sounds heard by your doctor",
      "Fatigue and weight loss",
    ],
    treatment:
      "High-resolution CT and lung function testing, immune treatment or anti-fibrotic therapy, and joint care with a chest specialist where required.",
  },
  {
    slug: "chronic-back-and-joint-pain",
    name: "Chronic Back and Joint Pain",
    short: "Pain lasting months with no clear answer so far.",
    intro:
      "If back or joint pain has lasted more than three months and you have already tried painkillers, physiotherapy and multiple opinions, the first job is to find out what type of pain it is — mechanical, inflammatory or nerve-related. The right label leads directly to the right treatment.",
    symptoms: [
      "Pain persisting beyond three months",
      "Pain waking you at night",
      "Stiffness after sitting or driving",
      "Pain spreading down the leg or arm",
      "Reduced ability to work, pray or sleep",
    ],
    treatment:
      "A structured assessment, only the tests that are genuinely needed, and a written plan combining exercise, medicine and follow-up.",
  },
];

export type Video = {
  id: string;
  title: string;
  language: string;
  summary: string;
};

// Replace the YouTube IDs with Dr. Punshi's actual videos.
export const VIDEOS: Video[] = [
  {
    id: "dQw4w9WgXcQ",
    title: "Arthritis kya hai? Samajhne ka aasan tareeqa",
    language: "Urdu",
    summary:
      "What arthritis actually means, the difference between wear-and-tear and inflammatory arthritis, and the warning signs that mean you should see a rheumatologist rather than wait.",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Fibromyalgia: jab tests normal hon lekin dard rahay",
    language: "Urdu",
    summary:
      "Why fibromyalgia does not show up on reports, how it is diagnosed, and the sleep, exercise and medication steps that help most patients feel better.",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Ankylosing Spondylitis — kamar ka dard jo raat ko barhta hai",
    language: "Roman Urdu",
    summary:
      "How to tell inflammatory back pain apart from ordinary back pain, when to ask for an MRI, and what modern treatment can achieve.",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Kamar dard: kya karain, kya na karain",
    language: "Urdu",
    summary:
      "Practical daily advice on posture, sitting, prayer positions and safe exercises for long-standing back pain, plus red flags that need urgent review.",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Gout aur uric acid — khanay ki ehtiyat",
    language: "Urdu",
    summary:
      "Which foods genuinely matter, why uric acid tablets must be taken daily, and how to stop attacks from coming back.",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Osteoporosis: haddiyon ki kamzori se bachao",
    language: "Urdu",
    summary:
      "Who should get a DEXA scan, the role of vitamin D and calcium, and how to prevent fractures at home.",
  },
];

export const TESTIMONIALS = [
  {
    name: "S. Fatima",
    location: "Clifton",
    text: "For two years I was told my joint pain was 'just weakness'. Dr. Punshi listened for a full half hour, ran the right tests and started treatment. Within three months I could hold my baby again without pain.",
  },
  {
    name: "M. Arshad",
    location: "North Nazimabad",
    text: "Very thorough and never rushes. He explained my ankylosing spondylitis in Urdu with a diagram so my whole family understood what was happening.",
  },
  {
    name: "R. Khan",
    location: "Online consultation",
    text: "I live in Dubai and consulted online. Reports were reviewed before the call, prescription came the same evening. Felt exactly like an in-person visit.",
  },
  {
    name: "A. Siddiqui",
    location: "PECHS",
    text: "My mother's lupus is finally stable. Dr. Sahib monitors every report carefully and always picks up the phone when we are worried.",
  },
  {
    name: "H. Memon",
    location: "Saddar",
    text: "Honest doctor — he told me I did not need expensive tests that another clinic had advised. That is rare and it earned my trust.",
  },
  {
    name: "N. Bhatti",
    location: "Clifton",
    text: "Gout attacks used to hit me every month. One simple daily tablet and clear diet advice later, I have not had an attack in over a year.",
  },
];

export const FAQS = [
  {
    q: "Do you accept insurance or panel patients?",
    a: "Yes. Several of the hospitals where Dr. Punshi consults accept major insurance panels. Please confirm your specific panel with the hospital reception when booking, and bring your insurance card and CNIC to the visit.",
  },
  {
    q: "Can I come without an appointment?",
    a: "Walk-in patients are seen when slots allow, but clinics are often fully booked. Booking online or on WhatsApp is strongly recommended so you are not kept waiting.",
  },
  {
    q: "What should I bring to my first visit?",
    a: "Bring any previous blood reports, X-rays or MRI films (even old ones), a list of medicines you are currently taking including any herbal or homeopathic treatment, and your CNIC. A brief written note of when your symptoms started is very helpful.",
  },
  {
    q: "How does an online video consultation work?",
    a: "Book an online slot, share your reports on WhatsApp beforehand, and you will receive a secure video link at your appointment time. After the call your prescription and test advice are sent to you in writing. The fee is Rs. 2,200.",
  },
  {
    q: "How long is a consultation?",
    a: "First consultations are typically 20–30 minutes so there is time for a proper history, examination and explanation. Follow-up visits are usually shorter.",
  },
  {
    q: "Do rheumatology medicines have serious side effects?",
    a: "Most patients tolerate treatment well. Medicines are chosen to suit your kidney, liver and blood results, and simple monitoring tests are scheduled so any issue is caught early. Every possible side effect will be explained before you start.",
  },
];
