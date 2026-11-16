"use strict";

// ======================================
// QUESTION CLASS
// ======================================

class Question {
    constructor(question, choices, answer) {
        this.question = question;
        this.choices = choices;
        this.answer = answer;
    }
}

function Q(question, answer, wrong1, wrong2, wrong3) {
    return new Question(question, [answer, wrong1, wrong2, wrong3], answer);
}

// ======================================
// SUBJECTS
// ======================================

const subjects = {
    "First Semester": [
        "GEC 4 - Purposive Communication",
        "GEC 5 - Art Appreciation",
        "IT Inst 1 - Climate Change and Disaster Risk Management",
        "IT GE Elect 1 - Health and Wellness World",
        "IT GE Elect 2 - Foreign Language 1",
        "IT 111 - Introduction to Computing",
        "IT 112 - Computer Programming 1",
        "PE 1 - Physical Activity Toward Health Fitness 1"
    ],

    "Second Semester": [
        "GEC 1 - Understanding the Self",
        "GEC 2 - Reading in Philippine History",
        "GEC 3 - Mathematics in the Modern World",
        "GEC 7 - Ethics",
        "IT 121 - Computer Programming 2",
        "IT 122 - Human-Computer Interaction",
        "IT 123 - Discrete Mathematics",
        "PE 2 - Physical Activity Toward Health Fitness II (Exercise Program)"
    ]
};

// ======================================
// QUESTION BANK
// Each subject has 20 questions
// ======================================

const questionBank = {

    // 1. GEC 4 - PURPOSIVE COMMUNICATION
    "GEC 4 - Purposive Communication": [
        Q("What is communication?", "Sharing information and ideas", "Cooking food", "Playing games", "Drawing pictures"),
        Q("What is verbal communication?", "Using spoken or written words", "Using gestures only", "Using facial expressions only", "Using pictures only"),
        Q("What is nonverbal communication?", "Communicating without spoken words", "Writing an essay", "Reading aloud", "Sending an email"),
        Q("Which is an example of written communication?", "Email", "Handshake", "Nodding", "Eye contact"),
        Q("What is the main purpose of listening?", "To understand the message", "To interrupt", "To change the topic", "To ignore information"),
        Q("What is feedback?", "A response to a message", "A greeting", "A communication barrier", "A loud sound"),
        Q("What is a communication barrier?", "Anything that prevents understanding", "A clear message", "Good listening", "Proper pronunciation"),
        Q("Which is an example of formal communication?", "A business letter", "A casual chat", "A personal joke", "A family nickname"),
        Q("What does audience mean?", "People receiving a message", "A dictionary writer", "A dining place", "A song topic"),
        Q("What is the purpose of eye contact?", "To show attention", "To avoid listening", "To change language", "To make noise"),
        Q("What is public speaking?", "Speaking to an audience", "Writing privately", "Reading silently", "Sending a private message"),
        Q("What is the main idea?", "The most important point", "A minor detail", "The title only", "The last word"),
        Q("What is tone in communication?", "The speaker's attitude or manner", "Paper size", "Number of paragraphs", "Spelling"),
        Q("Which is an example of visual communication?", "A chart", "A phone call", "A spoken announcement", "A conversation"),
        Q("Why should messages be clear?", "To avoid misunderstanding", "To confuse people", "To hide meaning", "To make them longer"),
        Q("What is a reliable source?", "A source with trustworthy information", "An unsupported rumor", "An unrelated opinion", "An unknown claim"),
        Q("What is paraphrasing?", "Restating an idea in your own words", "Copying word for word", "Deleting the main idea", "Changing the topic"),
        Q("What is plagiarism?", "Using another person's work without credit", "Giving proper credit", "Writing original ideas", "Summarizing a book"),
        Q("What is empathy in communication?", "Understanding another person's feelings", "Ignoring others", "Speaking louder", "Avoiding questions"),
        Q("Which skill helps prevent misunderstanding?", "Active listening", "Interrupting", "Guessing", "Ignoring feedback")
    ],

    // 2. GEC 5 - ART APPRECIATION
    "GEC 5 - Art Appreciation": [
        Q("What is art?", "Creative expression of ideas and feelings", "A machine", "A mathematical operation", "A weather condition"),
        Q("What is visual art?", "Art that is seen", "Art that is smelled", "Art that is tasted", "Art that is heard"),
        Q("Which is an example of visual art?", "Painting", "Singing", "Dancing", "Storytelling"),
        Q("What are the basic elements of art?", "Line, shape, color, texture, space, form, and value", "Speed, force, mass, and time", "Words and grammar", "Sound and pitch"),
        Q("What is a sculpture?", "A three-dimensional artwork", "A written poem", "A musical performance", "A dance"),
        Q("What is texture in art?", "The surface quality of an artwork", "The price", "The artist's age", "The title"),
        Q("What is color used for in art?", "To create mood and visual interest", "To measure distance", "To calculate weight", "To tell time"),
        Q("What is a portrait?", "An artwork showing a person", "A map", "A building", "A mountain"),
        Q("Who is known for painting rural Philippine scenes?", "Fernando Amorsolo", "Jose Rizal", "Andres Bonifacio", "Emilio Aguinaldo"),
        Q("What is contemporary art?", "Art created in the present period", "Art made only in ancient times", "Art without meaning", "Art that cannot be displayed"),
        Q("What is abstract art?", "Art that does not directly show realistic objects", "Art that copies photographs exactly", "Art made only with words", "Art without shapes"),
        Q("What is architecture?", "The art and design of buildings", "The study of plants", "The creation of songs", "The study of numbers"),
        Q("What is balance in art?", "Distribution of visual weight", "Use of sound", "Removal of colors", "The size of a canvas"),
        Q("What is emphasis in art?", "Making one part stand out", "Making everything invisible", "Removing all details", "Using only one material"),
        Q("Which is a performing art?", "Dance", "Painting", "Drawing", "Photography"),
        Q("What does culture contribute to art?", "Ideas, traditions, and identity", "Only computer programs", "Only mathematical rules", "Nothing"),
        Q("What is art appreciation?", "Understanding and valuing artworks", "Destroying artworks", "Ignoring creative works", "Copying every artwork"),
        Q("Which material is commonly used in sculpture?", "Clay", "Water vapor", "Light", "Sound"),
        Q("What is the purpose of art criticism?", "To analyze and evaluate artworks", "To destroy artworks", "To prevent creativity", "To copy an artist"),
        Q("Why is art important in society?", "It reflects culture and human experiences", "It has no connection to society", "It prevents communication", "It removes history")
    ],

    // 3. IT INST 1 - CLIMATE CHANGE AND DISASTER RISK MANAGEMENT
    "IT Inst 1 - Climate Change and Disaster Risk Management": [
        Q("What is climate change?", "Long-term changes in Earth's climate", "Daily changes in clothing", "Computer settings", "A temporary temperature change only"),
        Q("What contributes greatly to current global warming?", "Burning fossil fuels", "Planting trees", "Recycling paper", "Walking to school"),
        Q("Which is a major greenhouse gas?", "Carbon dioxide", "Oxygen", "Helium", "Neon"),
        Q("What is global warming?", "Increase in Earth's average temperature", "Movement of continents", "Formation of mountains", "Decrease in all ocean levels"),
        Q("Which is a renewable energy source?", "Solar energy", "Coal", "Diesel", "Natural gas"),
        Q("What is a natural disaster?", "A natural event that causes serious damage", "A school activity", "A computer error", "A planned celebration"),
        Q("Which agency monitors weather in the Philippines?", "PAGASA", "LTO", "CHED", "BIR"),
        Q("What should people prepare for emergencies?", "An emergency kit", "Extra decorations", "Unnecessary gadgets", "Heavy furniture"),
        Q("What is disaster risk reduction?", "Reducing disaster risks and impacts", "Increasing environmental damage", "Ignoring warnings", "Avoiding emergency planning"),
        Q("Which is a possible effect of climate change?", "Rising sea levels", "Permanent disappearance of storms", "No changes in rainfall", "The end of earthquakes"),
        Q("What is deforestation?", "Removal of large areas of forests", "Planting new trees", "Cleaning rivers", "Protecting wildlife"),
        Q("Which action helps reduce plastic pollution?", "Using reusable bags", "Throwing plastic into rivers", "Burning plastic waste", "Using more single-use plastics"),
        Q("What should people do during an earthquake?", "Drop, Cover, and Hold On", "Use the elevator", "Stand beside glass windows", "Ignore safety instructions"),
        Q("What is a flood?", "Overflow of water onto normally dry land", "A long period without rain", "Movement of Earth's plates", "A volcanic eruption"),
        Q("What is the purpose of an evacuation plan?", "To guide people to a safer place", "To delay emergency response", "To increase confusion", "To prevent communication"),
        Q("Which activity helps protect the environment?", "Planting trees", "Illegal logging", "Dumping waste in rivers", "Burning forests"),
        Q("What is climate change adaptation?", "Adjusting to actual or expected climate effects", "Increasing emissions", "Ignoring climate risks", "Stopping all weather changes"),
        Q("What is climate change mitigation?", "Reducing greenhouse gas emissions", "Increasing air pollution", "Destroying habitats", "Using more fossil fuels"),
        Q("Which is a geological hazard?", "Earthquake", "Heat wave", "Drought", "Heavy rainfall"),
        Q("Why is disaster preparedness important?", "It helps protect lives and property", "It increases damage", "It prevents warnings", "It removes the need for planning")
    ],

    // 4. IT GE ELECT 1 - HEALTH AND WELLNESS WORLD
    "IT GE Elect 1 - Health and Wellness World": [
        Q("What is health?", "Physical, mental, and social well-being", "Absence of exercise", "Having expensive belongings", "Physical strength only"),
        Q("What is wellness?", "An active process of making healthy choices", "Avoiding all activities", "Ignoring personal needs", "Eating without limits"),
        Q("Which nutrient provides the body's main energy source?", "Carbohydrates", "Vitamins", "Minerals", "Water"),
        Q("Which nutrient helps build and repair body tissues?", "Protein", "Sugar", "Salt", "Water"),
        Q("Why is drinking enough water important?", "It helps maintain normal body functions", "It replaces all nutrients", "It removes the need for food", "It stops sweating"),
        Q("What is a balanced diet?", "Eating different foods in proper amounts", "Eating only one food", "Avoiding vegetables", "Eating only sweets"),
        Q("Which activity supports cardiovascular health?", "Walking", "Watching television all day", "Sitting continuously", "Avoiding movement"),
        Q("What is mental health?", "Emotional and psychological well-being", "A person's height", "Bone strength only", "Ability to lift objects"),
        Q("Which is a healthy way to manage stress?", "Talking to someone you trust", "Ignoring every problem", "Avoiding sleep", "Skipping meals"),
        Q("Why is sleep important?", "It helps the body rest and recover", "It replaces healthy food", "It removes the need for exercise", "It prevents learning"),
        Q("Which is an example of personal hygiene?", "Washing hands regularly", "Sharing toothbrushes", "Wearing dirty clothes", "Avoiding bathing"),
        Q("What is the purpose of physical activity?", "To improve fitness and overall health", "To avoid movement", "To replace meals", "To prevent social interaction"),
        Q("Which food is a good source of vitamins and minerals?", "Fruits and vegetables", "Candy", "Soft drinks", "Chips only"),
        Q("What is preventive healthcare?", "Actions taken to prevent illness", "Ignoring symptoms", "Avoiding checkups", "Taking medicine without guidance"),
        Q("What does BMI stand for?", "Body Mass Index", "Basic Medical Information", "Body Movement Indicator", "Balanced Meal Intake"),
        Q("Which habit helps maintain oral health?", "Brushing teeth regularly", "Eating sweets without brushing", "Avoiding dental checkups", "Sharing toothbrushes"),
        Q("What is emotional wellness?", "Understanding and managing emotions", "Ignoring all feelings", "Avoiding communication", "Never experiencing stress"),
        Q("Which helps prevent the spread of germs?", "Washing hands with soap", "Sharing used towels", "Touching the face with dirty hands", "Ignoring cleanliness"),
        Q("Why should people avoid smoking?", "It can damage the lungs and overall health", "It improves lung function", "It guarantees longer life", "It prevents all diseases"),
        Q("Why are regular health checkups important?", "They help monitor health", "They replace healthy habits", "They guarantee no illness", "They are only for athletes")
    ],

    // 5. IT GE ELECT 2 - FOREIGN LANGUAGE 1
    "IT GE Elect 2 - Foreign Language 1": [
        Q("What is a foreign language?", "A language different from one's native language", "A computer program", "A type of mathematics", "A musical instrument"),
        Q("Which language uses Hiragana?", "Japanese", "Spanish", "French", "German"),
        Q("What is the Japanese word for hello?", "Konnichiwa", "Arigato", "Sayonara", "Ohayo"),
        Q("What is the Japanese word for thank you?", "Arigato", "Gomen", "Hai", "Iie"),
        Q("What does Sayonara mean?", "Goodbye", "Good morning", "Thank you", "Sorry"),
        Q("What is the Japanese word for yes?", "Hai", "Iie", "Dame", "Nani"),
        Q("What is the Japanese word for no?", "Iie", "Hai", "Arigato", "Ohayo"),
        Q("What does Ohayo mean?", "Good morning", "Good evening", "Goodbye", "Thank you"),
        Q("What does Konbanwa mean?", "Good evening", "Good afternoon", "Good morning", "Sorry"),
        Q("What does Gomen nasai mean?", "I'm sorry", "Thank you", "Goodbye", "Hello"),
        Q("What is the Japanese word for water?", "Mizu", "Neko", "Inu", "Hon"),
        Q("What does Neko mean?", "Cat", "Dog", "Bird", "Fish"),
        Q("What does Inu mean?", "Dog", "Cat", "Bird", "Horse"),
        Q("What is the Japanese word for book?", "Hon", "Mizu", "Neko", "Sora"),
        Q("What does Tomodachi mean?", "Friend", "Teacher", "Student", "Family"),
        Q("What does Sensei mean?", "Teacher", "Friend", "Mother", "Father"),
        Q("What does Okaasan mean?", "Mother", "Father", "Brother", "Sister"),
        Q("What does Otousan mean?", "Father", "Mother", "Friend", "Teacher"),
        Q("What is the Japanese word for one?", "Ichi", "Ni", "San", "Yon"),
        Q("What is the Japanese word for two?", "Ni", "Ichi", "Go", "Roku")
    ],

    // 6. IT 111 - INTRODUCTION TO COMPUTING
    "IT 111 - Introduction to Computing": [
        Q("What does IT stand for?", "Information Technology", "Internet Tool", "Integrated Text", "Information Transfer"),
        Q("What is a computer?", "An electronic device", "A cooking tool", "A vehicle", "A musical instrument"),
        Q("Which part is commonly called the brain of the computer?", "CPU", "Monitor", "Keyboard", "Mouse"),
        Q("Which device is used to type text?", "Keyboard", "Monitor", "Printer", "Speaker"),
        Q("Which device displays information?", "Monitor", "Mouse", "Microphone", "Scanner"),
        Q("Which is an input device?", "Keyboard", "Printer", "Speaker", "Monitor"),
        Q("Which is an output device?", "Printer", "Mouse", "Keyboard", "Scanner"),
        Q("What does RAM stand for?", "Random Access Memory", "Read All Memory", "Run Access Machine", "Random Application Mode"),
        Q("What is software?", "Programs and applications", "Physical computer parts", "Computer cables", "A computer desk"),
        Q("What is hardware?", "Physical parts of a computer", "Computer programs", "Internet websites", "Digital files"),
        Q("Which is an operating system?", "Windows", "Google Chrome", "Microsoft Word", "Facebook"),
        Q("What is the Internet?", "A global network", "A computer part", "A keyboard", "A printer"),
        Q("Which device moves the pointer on screen?", "Mouse", "Printer", "Speaker", "Monitor"),
        Q("What does USB stand for?", "Universal Serial Bus", "United System Board", "Universal Software Base", "User Service Box"),
        Q("Which device is used to store files?", "Flash drive", "Mouse pad", "Speaker", "Microphone"),
        Q("What is a web browser?", "A program for accessing websites", "A computer virus", "A storage device", "A keyboard type"),
        Q("Which is a web browser?", "Google Chrome", "Microsoft Word", "Paint", "Calculator"),
        Q("What is email used for?", "Sending electronic messages", "Printing documents", "Playing music only", "Cleaning a computer"),
        Q("What is a computer virus?", "A harmful program", "A computer monitor", "A storage device", "A keyboard shortcut"),
        Q("What is the purpose of a printer?", "Producing hard copies", "Typing text", "Displaying sound", "Moving the pointer")
    ],

    // 7. IT 112 - COMPUTER PROGRAMMING 1
    "IT 112 - Computer Programming 1": [
        Q("What is programming?", "Writing instructions for a computer", "Repairing furniture", "Drawing maps", "Playing music"),
        Q("What is an algorithm?", "A step-by-step solution to a problem", "A computer screen", "A storage device", "A type of virus"),
        Q("What is a variable?", "A named storage location for data", "A computer cable", "A web browser", "A printer"),
        Q("Which symbol is used for assignment in JavaScript?", "=", "===", "!", "&&"),
        Q("What is a string?", "A sequence of characters", "A whole number only", "A true or false value", "A computer part"),
        Q("Which data type represents true or false?", "Boolean", "String", "Number", "Array"),
        Q("What is a loop used for?", "Repeating instructions", "Deleting a program", "Turning off a computer", "Printing a document"),
        Q("Which statement is used for decision-making?", "if", "for", "class", "return"),
        Q("What is a function?", "A reusable block of code", "A monitor", "A keyboard", "A storage cable"),
        Q("Which keyword declares a variable in JavaScript?", "let", "style", "body", "image"),
        Q("What is an array?", "A collection of values", "A single letter", "A computer screen", "A web address"),
        Q("What does console.log() do?", "Displays output in the console", "Deletes a variable", "Closes a browser", "Restarts a computer"),
        Q("What is syntax?", "Rules for writing code", "Computer hardware", "Internet speed", "Screen brightness"),
        Q("What is debugging?", "Finding and fixing errors", "Deleting all code", "Changing a keyboard", "Installing a monitor"),
        Q("What is a comment in code?", "Text explaining code", "A command that always runs", "A variable type", "A loop"),
        Q("Which operator means addition?", "+", "-", "*", "/"),
        Q("Which operator means comparison for equality and type?", "===", "=", "+", "%"),
        Q("What is an infinite loop?", "A loop that never ends", "A loop that runs once", "A function without a name", "A variable"),
        Q("What does return do in a function?", "Sends a value back", "Deletes the function", "Opens a website", "Stops the computer"),
        Q("What is an IDE?", "Integrated Development Environment", "Internet Data Equipment", "Internal Design Engine", "Input Device Editor")
    ],

    // 8. PE 1 - PHYSICAL ACTIVITY TOWARD HEALTH FITNESS 1
    "PE 1 - Physical Activity Toward Health Fitness 1": [
        Q("What does PE stand for?", "Physical Education", "Personal Exercise", "Public Event", "Physical Energy"),
        Q("What is physical fitness?", "Ability to perform daily activities effectively", "Ability to avoid movement", "Ability to sleep all day", "Ability to eat quickly"),
        Q("What is a warm-up?", "Activity done before exercise", "Activity done only after sleeping", "A type of meal", "A resting position"),
        Q("Why is cooling down important?", "It helps the body return gradually to rest", "It increases sudden movement", "It replaces warm-up", "It prevents hydration"),
        Q("Which is an example of cardiovascular exercise?", "Jogging", "Reading", "Drawing", "Sleeping"),
        Q("What does flexibility mean?", "Ability of joints to move through a range of motion", "Ability to lift heavy objects", "Ability to run fast", "Ability to hold breath"),
        Q("Which activity improves flexibility?", "Stretching", "Watching television", "Typing", "Sleeping"),
        Q("What is muscular strength?", "Ability of muscles to exert force", "Ability to hear sounds", "Ability to see clearly", "Ability to digest food"),
        Q("What is muscular endurance?", "Ability of muscles to work over time", "Ability to sleep longer", "Ability to jump once", "Ability to hold a pencil"),
        Q("What is body composition?", "The proportion of fat and other tissues in the body", "The color of clothing", "The height of a person", "The size of shoes"),
        Q("Which is a locomotor movement?", "Running", "Bending in place", "Stretching in place", "Twisting in place"),
        Q("Which is a non-locomotor movement?", "Bending", "Running", "Walking", "Skipping"),
        Q("What is a manipulative movement?", "Throwing a ball", "Standing still", "Bending the waist", "Turning the head"),
        Q("Why is hydration important during activity?", "It helps regulate body functions", "It removes the need for rest", "It replaces all food", "It prevents all injuries"),
        Q("What is an exercise safety rule?", "Use proper technique", "Ignore pain and discomfort", "Skip warm-ups", "Exercise in unsafe places"),
        Q("What is agility?", "Ability to change direction quickly", "Ability to remain asleep", "Ability to lift objects", "Ability to stand still"),
        Q("What is balance?", "Ability to maintain body stability", "Ability to run long distances", "Ability to hear music", "Ability to lift weights"),
        Q("What is coordination?", "Ability to use body parts together smoothly", "Ability to avoid movement", "Ability to sleep", "Ability to memorize words"),
        Q("What is reaction time?", "Time needed to respond to a stimulus", "Time spent sleeping", "Time needed to eat", "Time spent reading"),
        Q("Why should exercise be regular?", "To support health and fitness", "To avoid all movement", "To replace meals", "To prevent learning")
    ],

    // 9. GEC 1 - UNDERSTANDING THE SELF
    "GEC 1 - Understanding the Self": [
        Q("What is the self?", "A person's identity", "A computer program", "A school subject", "A type of food"),
        Q("What is self-awareness?", "Knowing and understanding yourself", "Copying other people", "Ignoring feelings", "Avoiding responsibility"),
        Q("What are emotions?", "Feelings", "Objects", "Places", "Numbers"),
        Q("What is personality?", "A person's patterns of behavior and characteristics", "A person's address", "A school building", "A type of clothing"),
        Q("What is self-esteem?", "How you value yourself", "How much money you have", "Your height", "Your age"),
        Q("What is the physical self?", "Your body and physical characteristics", "Your friendships only", "Your beliefs only", "Your grades"),
        Q("What is the social self?", "How you interact with others", "How you solve math problems", "How you sleep", "How you use a computer"),
        Q("What is emotional intelligence?", "Understanding and managing emotions", "Memorizing numbers", "Avoiding people", "Ignoring feelings"),
        Q("What is self-confidence?", "Belief in your abilities", "Fear of everything", "Avoiding challenges", "Depending on others for every decision"),
        Q("What is a personal goal?", "Something you want to achieve", "A random object", "A school building", "Something unrelated to you"),
        Q("What is self-reflection?", "Thinking about your actions and experiences", "Ignoring mistakes", "Copying answers", "Avoiding learning"),
        Q("What helps improve self-awareness?", "Knowing your strengths and weaknesses", "Ignoring feedback", "Blaming others", "Avoiding experiences"),
        Q("What is motivation?", "A reason or desire to act", "A type of food", "A computer device", "A school uniform"),
        Q("What is a value?", "A belief about what is important", "A random number", "A computer file", "A type of sport"),
        Q("What is identity?", "Who a person is", "Where a computer is made", "A type of application", "A school subject"),
        Q("What is personal development?", "Improving yourself over time", "Avoiding responsibilities", "Refusing to learn", "Copying others"),
        Q("Why can family be important?", "It can provide support and guidance", "It prevents learning", "It replaces education", "It removes responsibilities"),
        Q("What is a healthy way to manage stress?", "Taking a break and asking for support", "Ignoring every problem", "Avoiding sleep", "Keeping worries to yourself"),
        Q("What is empathy?", "Understanding another person's feelings", "Laughing at others", "Ignoring people", "Always arguing"),
        Q("Why is self-acceptance important?", "It helps you appreciate who you are", "It stops personal growth", "It makes you ignore others", "It prevents learning")
    ],

    // 10. GEC 2 - READING IN PHILIPPINE HISTORY
    "GEC 2 - Reading in Philippine History": [
        Q("What is history?", "The study of past events", "The study of planets only", "The study of computers", "The study of numbers"),
        Q("Who is widely known as the Philippine national hero?", "Jose Rizal", "Andres Bonifacio", "Emilio Aguinaldo", "Apolinario Mabini"),
        Q("Who wrote Noli Me Tangere?", "Jose Rizal", "Andres Bonifacio", "Marcelo H. del Pilar", "Juan Luna"),
        Q("Who founded the Katipunan?", "Andres Bonifacio", "Jose Rizal", "Emilio Jacinto", "Antonio Luna"),
        Q("When was Philippine independence declared from Spain?", "June 12, 1898", "July 4, 1946", "August 21, 1983", "December 30, 1896"),
        Q("Where was Philippine independence declared in 1898?", "Kawit, Cavite", "Manila", "Cebu", "Davao"),
        Q("Who was the first president of the Philippines?", "Emilio Aguinaldo", "Jose Rizal", "Manuel Quezon", "Sergio Osmena"),
        Q("What was the Katipunan?", "A secret society seeking Philippine independence", "A Spanish royal family", "A school organization", "A trade company"),
        Q("What does primary source mean?", "A source created during the period being studied", "A modern summary only", "A fictional story", "An unrelated opinion"),
        Q("Which is an example of a primary source?", "A personal diary from the period", "A modern textbook summary", "A recent movie review", "A fictional novel"),
        Q("What was the Propaganda Movement?", "A campaign for reforms under Spanish rule", "A sports movement", "A farming program", "A trade agreement"),
        Q("Who was known as the Sublime Paralytic?", "Apolinario Mabini", "Andres Bonifacio", "Juan Luna", "Antonio Luna"),
        Q("Who painted the Spoliarium?", "Juan Luna", "Fernando Amorsolo", "Jose Rizal", "Felix Resurreccion Hidalgo"),
        Q("What was the role of the Galleon Trade?", "Trade between the Philippines and Mexico", "Trade between the Philippines and Japan only", "A local farming system", "A school program"),
        Q("When did the Philippine Revolution begin?", "1896", "1521", "1898", "1946"),
        Q("Who led the Cry of Pugad Lawin?", "Andres Bonifacio and Katipuneros", "Jose Rizal alone", "Manuel Quezon", "Sergio Osmena"),
        Q("What happened on December 30, 1896?", "Jose Rizal was executed", "Independence was declared", "The Katipunan was founded", "The Commonwealth began"),
        Q("What is historical context?", "The circumstances surrounding an event", "A list of random names", "A fictional ending", "A mathematical formula"),
        Q("Why do historians examine different sources?", "To compare evidence and understand events", "To avoid facts", "To create rumors", "To remove context"),
        Q("What is the purpose of studying Philippine history?", "To understand the country's past and identity", "To memorize unrelated facts only", "To avoid culture", "To ignore historical events")
    ],

    // 11. GEC 3 - MATHEMATICS IN THE MODERN WORLD
    "GEC 3 - Mathematics in the Modern World": [
        Q("What is mathematics?", "The study of numbers, patterns, and relationships", "The study of cooking only", "The study of music only", "The study of weather only"),
        Q("What is a set?", "A well-defined collection of objects", "A type of computer", "A musical instrument", "A building"),
        Q("What symbol means union of sets?", "∪", "∩", "=", "÷"),
        Q("What symbol means intersection of sets?", "∩", "∪", "+", "−"),
        Q("What is a prime number?", "A number with exactly two positive factors", "A number divisible by zero", "An even number only", "A decimal number"),
        Q("Which is a prime number?", "7", "8", "9", "10"),
        Q("What is a percentage?", "A value expressed out of 100", "A value out of 10 only", "A type of fraction only", "A negative number"),
        Q("What is the value of 25% of 200?", "50", "25", "100", "75"),
        Q("What is a ratio?", "A comparison of two quantities", "A type of graph only", "A whole number only", "A measurement of time"),
        Q("What is a proportion?", "An equality between two ratios", "A type of angle", "A single number", "A random pattern"),
        Q("What is an average?", "A measure of central tendency", "A type of triangle", "A prime number", "A unit of distance"),
        Q("How do you find the mean?", "Add values and divide by their number", "Multiply all values by zero", "Subtract the largest value", "Choose the smallest value"),
        Q("What is probability?", "The measure of how likely an event is", "The size of an object", "The distance between places", "The weight of an item"),
        Q("What is the probability of getting heads on a fair coin?", "1/2", "1/4", "1/3", "1"),
        Q("What is a variable in mathematics?", "A symbol representing a value", "A fixed answer only", "A type of graph", "A geometric shape"),
        Q("What is an equation?", "A mathematical statement showing equality", "A random list of numbers", "A drawing", "A measurement tool"),
        Q("What is a polygon?", "A closed plane figure with straight sides", "A curved line only", "A three-dimensional sphere", "A number pattern"),
        Q("How many degrees are in a triangle's interior angles?", "180 degrees", "90 degrees", "270 degrees", "360 degrees"),
        Q("What is a graph used for?", "Displaying information visually", "Deleting information", "Writing essays", "Measuring temperature only"),
        Q("What is logic in mathematics?", "Reasoning using valid principles", "Guessing randomly", "Drawing without rules", "Memorizing colors")
    ],

    // 12. GEC 7 - ETHICS
    "GEC 7 - Ethics": [
        Q("What is ethics?", "The study of right and wrong conduct", "The study of weather", "The study of computers", "The study of plants"),
        Q("What is morality?", "Principles about right and wrong behavior", "A type of machine", "A mathematical formula", "A form of exercise"),
        Q("What is honesty?", "Telling the truth", "Cheating", "Stealing", "Blaming others"),
        Q("What is respect?", "Treating others with consideration", "Ignoring people", "Insulting others", "Taking things without permission"),
        Q("What is responsibility?", "Being accountable for one's actions", "Avoiding duties", "Blaming others", "Ignoring rules"),
        Q("What is fairness?", "Treating people justly", "Favoring only friends", "Ignoring other people", "Making unfair decisions"),
        Q("What is integrity?", "Doing what is right even when unobserved", "Changing values for rewards", "Cheating when possible", "Avoiding responsibility"),
        Q("What is a moral dilemma?", "A situation involving difficult moral choices", "A simple math problem", "A sports activity", "A computer error"),
        Q("What is empathy?", "Understanding another person's feelings", "Making fun of others", "Ignoring people", "Avoiding communication"),
        Q("What is justice?", "Fair treatment and giving people what is due", "Favoritism", "Dishonesty", "Discrimination"),
        Q("What is a consequence?", "A result of an action", "A random object", "A type of rule", "A personal opinion"),
        Q("What is ethical decision-making?", "Choosing actions based on moral principles", "Choosing randomly", "Ignoring possible effects", "Following rumors"),
        Q("What is plagiarism?", "Using another person's work without proper credit", "Giving proper citations", "Writing original work", "Reading a book"),
        Q("What is respect for privacy?", "Protecting personal information", "Sharing private details without permission", "Reading private messages", "Posting secrets"),
        Q("What is social responsibility?", "Acting for the good of the community", "Ignoring community needs", "Damaging public property", "Avoiding helpful actions"),
        Q("What is tolerance?", "Respecting differences among people", "Forcing everyone to agree", "Insulting different beliefs", "Rejecting all opinions"),
        Q("What is accountability?", "Accepting responsibility for actions", "Hiding mistakes", "Blaming others", "Avoiding duties"),
        Q("What is an ethical leader?", "A leader who acts honestly and fairly", "A leader who abuses power", "A leader who ignores rules", "A leader who favors dishonesty"),
        Q("Why should rules be followed?", "To maintain order and protect people", "To create confusion", "To encourage unfairness", "To prevent cooperation"),
        Q("What is compassion?", "Concern for the suffering of others", "Lack of care", "Selfishness", "Dishonesty")
    ],

    // 13. IT 121 - COMPUTER PROGRAMMING 2
    "IT 121 - Computer Programming 2": [
        Q("What is object-oriented programming?", "A programming approach using objects", "A type of hardware", "A web browser", "A database only"),
        Q("What is a class?", "A blueprint for creating objects", "A single variable", "A computer screen", "A programming error"),
        Q("What is an object?", "An instance of a class", "A type of loop", "A syntax error", "A programming language"),
        Q("What is a constructor?", "A special method used to initialize objects", "A type of variable", "A web page", "A computer device"),
        Q("What is inheritance?", "A class receiving features from another class", "Deleting a class", "Repeating a loop", "Changing a variable"),
        Q("What is encapsulation?", "Bundling data and methods together", "Deleting all data", "Repeating instructions", "Opening a website"),
        Q("What is polymorphism?", "The ability to take many forms", "A type of virus", "A storage device", "A programming error"),
        Q("What is a method?", "A function inside a class", "A computer monitor", "A keyboard", "A web browser"),
        Q("Which keyword creates a class in JavaScript?", "class", "function", "print", "return"),
        Q("Which keyword creates an object in JavaScript?", "new", "class", "if", "while"),
        Q("What is an array used for?", "Storing multiple values", "Displaying only images", "Deleting programs", "Connecting cables"),
        Q("What is recursion?", "A function calling itself", "A variable changing its name", "A class being deleted", "A program stopping"),
        Q("What is an exception?", "An event that interrupts normal program execution", "A type of monitor", "A computer cable", "A storage device"),
        Q("What is debugging?", "Finding and fixing errors in code", "Creating a computer", "Deleting the operating system", "Changing a monitor"),
        Q("What is a parameter?", "A variable listed in a function definition", "A computer screen", "A keyboard", "A web browser"),
        Q("What does return do in a function?", "Sends a value back", "Deletes the function", "Stops the computer", "Opens a website"),
        Q("What is a loop used for?", "Repeating instructions", "Creating a keyboard", "Deleting files", "Changing hardware"),
        Q("Which loop checks a condition before each repetition?", "while loop", "do-while loop", "switch statement", "if statement"),
        Q("What is an IDE?", "Integrated Development Environment", "Internet Data Equipment", "Internal Design Engine", "Input Device Editor"),
        Q("What is the purpose of comments in code?", "To explain the code", "To run the program faster", "To delete variables", "To create hardware")
    ],

    // 14. IT 122 - HUMAN-COMPUTER INTERACTION
    "IT 122 - Human-Computer Interaction": [
        Q("What does HCI stand for?", "Human-Computer Interaction", "Human Computer Internet", "Hardware Control Interface", "High Computer Integration"),
        Q("What is HCI?", "Study of interaction between people and computers", "Study of hardware only", "Study of programming only", "Study of networks only"),
        Q("What is a user interface?", "A way users interact with a system", "A computer virus", "A storage device", "A programming error"),
        Q("What is usability?", "How easy a system is to use", "How expensive a computer is", "How large a screen is", "How fast a printer works"),
        Q("What is user experience?", "The overall experience of using a product", "The computer's brand", "The size of a keyboard", "The number of files"),
        Q("What is a button in a user interface?", "A control that performs an action when selected", "A storage device", "A computer virus", "A type of cable"),
        Q("What is a menu?", "A list of available options", "A computer processor", "A storage disk", "A type of keyboard"),
        Q("What is accessibility in design?", "Making a system usable by people with different needs", "Making text unreadable", "Removing all instructions", "Limiting users"),
        Q("What is a prototype?", "An early model of a design", "A finished law", "A computer virus", "A storage device"),
        Q("What is user-centered design?", "Designing based on users' needs", "Designing without users", "Ignoring feedback", "Using random colors only"),
        Q("Why is consistency important in interface design?", "It makes the system easier to learn", "It makes every page confusing", "It removes navigation", "It hides information"),
        Q("What is usability testing?", "Observing users as they use a system", "Deleting the application", "Changing computer hardware", "Writing a novel"),
        Q("What is feedback in an interface?", "A response showing the result of an action", "A hidden file", "A computer cable", "A screen size"),
        Q("What is navigation?", "Moving between sections of a system", "Turning off a monitor", "Deleting files", "Changing a password"),
        Q("What is a wireframe?", "A basic layout of a user interface", "A computer virus", "A type of database", "A finished animation"),
        Q("What is a responsive design?", "A layout that adapts to different screen sizes", "A layout that works on one screen only", "A design without text", "A design that cannot change"),
        Q("Why should buttons have clear labels?", "So users understand their actions", "To make the page confusing", "To hide their purpose", "To increase errors"),
        Q("What is an error message?", "A notice that something went wrong", "A welcome message", "A background image", "A navigation menu"),
        Q("What is information architecture?", "Organizing information for easy access", "Deleting all information", "Changing screen brightness", "Installing software"),
        Q("What is the purpose of a user interface?", "To help users interact with a system", "To replace the computer processor", "To store electricity", "To create network cables")
    ],

    // 15. IT 123 - DISCRETE MATHEMATICS
    "IT 123 - Discrete Mathematics": [
        Q("What is discrete mathematics?", "The study of distinct and separate structures", "The study of continuous motion only", "The study of cooking", "The study of weather"),
        Q("What is a proposition?", "A statement that is either true or false", "A question", "A command", "An expression with no truth value"),
        Q("What does the logical operator AND mean?", "Both statements must be true", "At least one must be false", "Both must be false", "Neither statement matters"),
        Q("What does the logical operator OR mean?", "At least one statement is true", "Both must be false", "Only the first is true", "Neither can be true"),
        Q("What is a negation?", "The opposite truth value of a statement", "A repeated statement", "A number pattern", "A set of objects"),
        Q("What is a set?", "A collection of distinct elements", "A computer program", "A type of graph only", "A single equation"),
        Q("What is an empty set?", "A set with no elements", "A set with one element", "A set with many elements", "An infinite set"),
        Q("What is a subset?", "A set whose elements are all in another set", "A set with no relation", "A number line", "A logical operator"),
        Q("What is a relation?", "A connection between elements of sets", "A computer cable", "A type of loop", "A programming error"),
        Q("What is a function in mathematics?", "A relation assigning each input exactly one output", "A relation with no inputs", "A set with no elements", "A random graph"),
        Q("What is a graph in discrete mathematics?", "A structure of vertices and edges", "A painting", "A bar chart only", "A spreadsheet"),
        Q("What is a vertex?", "A point or node in a graph", "A connecting line only", "A number system", "A logical statement"),
        Q("What is an edge?", "A connection between vertices", "A point in a graph", "A set with no elements", "A truth value"),
        Q("What is a tree in graph theory?", "A connected graph with no cycles", "A graph with every possible cycle", "A set of numbers", "A logical operator"),
        Q("What is a path in a graph?", "A sequence of connected vertices", "A single isolated point", "A type of number", "A truth table"),
        Q("What is a truth table used for?", "Showing truth values of logical statements", "Measuring distance", "Drawing buildings", "Storing computer files"),
        Q("What is a binary number system?", "A base-2 number system", "A base-8 system", "A base-10 system", "A base-16 system"),
        Q("Which digits are used in binary?", "0 and 1", "1 and 2", "0 to 9", "A to F"),
        Q("What is a factorial?", "The product of positive integers up to a number", "The sum of all decimals", "A type of graph", "A logical statement"),
        Q("What is combinatorics?", "The study of counting and arrangements", "The study of weather", "The study of painting", "The study of sound")
    ],

    // 16. PE 2 - EXERCISE PROGRAM
    "PE 2 - Physical Activity Toward Health Fitness II (Exercise Program)": [
        Q("What is an exercise program?", "A planned schedule of physical activities", "A list of computer games", "A type of food menu", "A school timetable only"),
        Q("What does FITT stand for?", "Frequency, Intensity, Time, Type", "Fitness, Interest, Training, Test", "Force, Interval, Time, Task", "Food, Intake, Training, Target"),
        Q("What does frequency mean in FITT?", "How often exercise is performed", "How difficult exercise is", "How long exercise lasts", "The kind of exercise"),
        Q("What does intensity mean?", "How hard the activity is", "How often it is done", "The type of shoes used", "The location of exercise"),
        Q("What does time mean in FITT?", "How long an exercise session lasts", "How often exercise is done", "The kind of activity", "The exercise location"),
        Q("What does type mean in FITT?", "The kind of physical activity", "The time of day", "The number of people", "The amount of water"),
        Q("What is a warm-up?", "Preparation before exercise", "A replacement for exercise", "A sleeping period", "A type of meal"),
        Q("What is a cool-down?", "Gradual reduction of activity after exercise", "A sudden stop before exercise", "A warm-up activity", "A type of sport"),
        Q("What is aerobic exercise?", "Activity that uses oxygen over sustained periods", "An activity with no movement", "A type of stretching only", "A sleeping activity"),
        Q("Which is an example of aerobic exercise?", "Cycling", "Reading", "Drawing", "Sleeping"),
        Q("What is strength training?", "Exercise that challenges muscles against resistance", "Exercise that avoids muscles", "A type of meditation only", "A computer activity"),
        Q("What is flexibility training?", "Exercise that improves range of motion", "Exercise that improves typing", "Exercise that avoids movement", "Exercise that measures height"),
        Q("What is a rest day?", "A day for recovery from training", "A day to exercise continuously", "A day without water", "A day to skip all meals"),
        Q("Why is hydration important during exercise?", "It supports normal body functions", "It replaces sleep", "It removes the need for food", "It prevents all injuries"),
        Q("What is progressive overload?", "Gradually increasing exercise demands", "Never changing exercise", "Stopping all activity", "Repeating only one movement forever"),
        Q("What is the purpose of an exercise goal?", "To give direction to a fitness plan", "To avoid planning", "To replace warm-ups", "To ignore progress"),
        Q("What is a cool-down stretch used for?", "To help the body transition toward rest", "To start a sprint", "To replace drinking water", "To increase sudden movement"),
        Q("Why is proper exercise technique important?", "It helps improve safety and movement quality", "It guarantees no effort is needed", "It makes warm-ups unnecessary", "It prevents learning"),
        Q("What should you do if you feel unwell during exercise?", "Stop and seek appropriate help", "Ignore it and continue", "Exercise harder", "Avoid telling anyone"),
        Q("Why should an exercise program be appropriate to the person?", "People have different needs and abilities", "Everyone has identical needs", "It removes the need for rest", "It guarantees the same results")
    ]
};

// ======================================
// PAGE NAVIGATION
// ======================================

function showPage(pageId) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    const page = document.getElementById(pageId);

    if (page) {
        page.classList.add("active");
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

	closeMenu();
}

// ======================================
// HAMBURGER MENU
// ======================================

function toggleMenu() {
    const menu = document.getElementById("mainMenu");
    const button = document.getElementById("menuToggle");

    if (menu) {
        menu.classList.toggle("active");

        if (button) {
            button.setAttribute(
                "aria-expanded",
                menu.classList.contains("active")
            );
        }
    }
}

function closeMenu() {
    const menu = document.getElementById("mainMenu");
    const button = document.getElementById("menuToggle");

    if (menu) {
        menu.classList.remove("active");
    }

    if (button) {
        button.setAttribute("aria-expanded", "false");
    }
}
// ======================================
// QUIZ VARIABLES
// ======================================

let currentSubject = "";
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let studentAnswersList = [];

// ======================================
// LOAD SUBJECTS
// ======================================

function loadSubjects() {
    const semester = document.getElementById("semester");
    const subjectSelect = document.getElementById("subject");

    if (!semester || !subjectSelect) return;

    subjectSelect.innerHTML = '<option value="">Choose a subject</option>';

    if (!subjects[semester.value]) return;

    subjects[semester.value].forEach(subject => {
        const option = document.createElement("option");
        option.value = subject;
        option.textContent = subject;
        subjectSelect.appendChild(option);
    });
}

// ======================================
// SHUFFLE ARRAY
// ======================================

function shuffleArray(array) {
    const copy = [...array];

    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }

    return copy;
}

// ======================================
// START QUIZ
// ======================================

function startQuiz() {
    const subjectSelect = document.getElementById("subject");

    if (!subjectSelect) return;

    const subject = subjectSelect.value;

    if (!subject) {
        alert("Please select a subject first.");
        return;
    }

    if (!questionBank[subject] || questionBank[subject].length === 0) {
        alert("No questions available for this subject.");
        return;
    }

    currentSubject = subject;
    currentQuestions = shuffleArray(questionBank[subject]);
    currentQuestionIndex = 0;
    score = 0;
    studentAnswersList = [];

    document.getElementById("quizArea").hidden = false;
    document.getElementById("quizTitle").textContent = subject;
    document.getElementById("quizResult").innerHTML = "";

    showQuestion();
}

// ======================================
// SHOW QUESTION
// ======================================

function showQuestion() {
    const question = currentQuestions[currentQuestionIndex];

    document.getElementById("questionNumber").textContent =
        `Question ${currentQuestionIndex + 1} of ${currentQuestions.length}`;

    document.getElementById("questionText").textContent =
        question.question;

    const choices = document.getElementById("choices");
    choices.innerHTML = "";

    shuffleArray(question.choices).forEach(choice => {
        const button = document.createElement("button");

        button.type = "button";
        button.textContent = choice;
        button.className = "choice-btn";

        button.onclick = () => selectAnswer(choice, button);

        choices.appendChild(button);
    });

    document.getElementById("nextBtn").disabled = true;
}

// ======================================
// SELECT ANSWER
// ======================================

function selectAnswer(answer, selectedButton) {
    if (studentAnswersList[currentQuestionIndex] !== undefined) return;

    studentAnswersList[currentQuestionIndex] = answer;

    document.querySelectorAll(".choice-btn").forEach(button => {
        button.disabled = true;
    });

    selectedButton.classList.add("selected");

    if (answer === currentQuestions[currentQuestionIndex].answer) {
        score++;
    }

    document.getElementById("nextBtn").disabled = false;
}

// ======================================
// NEXT QUESTION
// ======================================

function nextQuestion() {
    if (studentAnswersList[currentQuestionIndex] === undefined) {
        alert("Please select an answer first.");
        return;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < currentQuestions.length) {
        showQuestion();
    } else {
        finishQuiz();
    }
}

// ======================================
// FINISH QUIZ
// ======================================

function finishQuiz() {
    document.getElementById("quizArea").hidden = true;

    const percentage = Math.round(
        (score / currentQuestions.length) * 100
    );

    document.getElementById("quizResult").innerHTML = `
        <h3>Quiz Completed!</h3>
        <p>Subject: ${escapeHTML(currentSubject)}</p>
        <p>Score: ${score}/${currentQuestions.length}</p>
        <p>Percentage: ${percentage}%</p>
        <p>Remarks: ${getRemark(percentage)}</p>
        <button type="button" onclick="showQuizReview()">Review Answers</button>
        <button type="button" onclick="startQuiz()">Try Again</button>
    `;
}

// ======================================
// REMARKS
// ======================================

function getRemark(percentage) {
    if (percentage >= 90) return "Excellent!";
    if (percentage >= 80) return "Very Good!";
    if (percentage >= 75) return "Passed!";
    return "Keep practicing. You can improve!";
}

// ======================================
// REVIEW ANSWERS
// ======================================

function showQuizReview() {
    const result = document.getElementById("quizResult");

    let html = "<h3>Answer Review</h3>";

    currentQuestions.forEach((question, index) => {
        const studentAnswer = studentAnswersList[index] || "No answer";
        const isCorrect = studentAnswer === question.answer;

        html += `
            <div class="review-item">
                <p><strong>${index + 1}. ${escapeHTML(question.question)}</strong></p>
                <p>Your answer: ${escapeHTML(studentAnswer)}</p>
                <p>Correct answer: ${escapeHTML(question.answer)}</p>
                <p>${isCorrect ? "Correct" : "Incorrect"}</p>
            </div>
        `;
    });

    html += `
        <button type="button" onclick="startQuiz()">Try Again</button>
    `;

    result.innerHTML = html;
}

// ======================================
// ESCAPE HTML
// ======================================

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    })[character]);
}

// ======================================
// QUIZZY CHECKER
// ======================================

class QuizChecker {
    constructor(answerKey, studentAnswers) {
        this.answerKey = answerKey;
        this.studentAnswers = studentAnswers;
    }

    normalize(value) {
        return String(value).trim().toLowerCase();
    }

    check() {
        let correct = 0;
        const review = [];

        this.answerKey.forEach((answer, index) => {
            const studentAnswer = this.studentAnswers[index] || "";
            const isCorrect =
                this.normalize(answer) === this.normalize(studentAnswer);

            if (isCorrect) correct++;

            review.push({
                number: index + 1,
                answer: answer,
                studentAnswer: studentAnswer,
                correct: isCorrect
            });
        });

        return {
            score: correct,
            total: this.answerKey.length,
            percentage: this.answerKey.length
                ? Math.round((correct / this.answerKey.length) * 100)
                : 0,
            review: review
        };
    }
}

// ======================================
// CHECK ANSWERS
// ======================================

function checkAnswers() {
    const answerKeyText = document.getElementById("answerKey");
    const studentAnswersText = document.getElementById("studentAnswers");
    const resultBox = document.getElementById("checkerResult");

    if (!answerKeyText || !studentAnswersText || !resultBox) return;

    const answerKey = answerKeyText.value
        .split(/[\n,;]+/)
        .map(item => item.trim())
        .filter(item => item !== "");

    const studentAnswers = studentAnswersText.value
        .split(/[\n,;]+/)
        .map(item => item.trim());

    if (answerKey.length === 0) {
        alert("Please enter the answer key.");
        return;
    }

    if (studentAnswers.filter(item => item !== "").length === 0) {
        alert("Please enter the student's answers.");
        return;
    }

    if (studentAnswers.length !== answerKey.length) {
        alert(
            `The answer key has ${answerKey.length} answers, but the student answers have ${studentAnswers.length} entries.`
        );
        return;
    }

    const checker = new QuizChecker(answerKey, studentAnswers);
    const result = checker.check();

    let html = `
        <h3>Checking Result</h3>
        <p>Score: ${result.score}/${result.total}</p>
        <p>Percentage: ${result.percentage}%</p>
        <p>Remarks: ${getRemark(result.percentage)}</p>
        <h3>Answer Review</h3>
    `;

    result.review.forEach(item => {
        html += `
            <div class="review-item">
                <p><strong>Question ${item.number}</strong></p>
                <p>Student Answer: ${escapeHTML(item.studentAnswer)}</p>
                <p>Correct Answer: ${escapeHTML(item.answer)}</p>
                <p>${item.correct ? "Correct" : "Incorrect"}</p>
            </div>
        `;
    });

    resultBox.innerHTML = html;
}

// ======================================
// IMAGE PREVIEW
// ======================================

function previewImage() {
    const input = document.getElementById("questionImage");
    const preview = document.getElementById("imagePreview");

    if (!input || !preview) return;

    const file = input.files[0];

    if (!file) {
        preview.hidden = true;
        preview.removeAttribute("src");
        return;
    }

    if (!file.type.startsWith("image/")) {
        alert("Please upload a valid image.");
        input.value = "";
        preview.hidden = true;
        return;
    }

    const reader = new FileReader();

    reader.onload = function(event) {
        preview.src = event.target.result;
        preview.hidden = false;
    };

    reader.readAsDataURL(file);
}

// ======================================
// OCR SCANNER
// ======================================

async function scanQuestionnaire() {
    const input = document.getElementById("questionImage");
    const questionList = document.getElementById("questionList");
    const status = document.getElementById("ocrStatus");

    if (!input || !questionList || !status) return;

    const file = input.files[0];

    if (!file) {
        alert("Please upload a questionnaire image first.");
        return;
    }

    if (typeof Tesseract === "undefined") {
        status.textContent = "OCR library is not available. Check your internet connection.";
        return;
    }

    try {
        status.textContent = "Scanning image. Please wait...";

        const result = await Tesseract.recognize(file, "eng");

        questionList.value = result.data.text.trim();

        status.textContent =
            "Scanning completed! Please review and edit the extracted text.";

    } catch (error) {
        console.error(error);
        status.textContent = "Unable to scan the image. Please try another clear image.";
    }
}

// ======================================
// INITIALIZE
// ======================================

document.addEventListener("DOMContentLoaded", function() {

    const imageInput = document.getElementById("questionImage");

    if (imageInput) {
        imageInput.addEventListener("change", previewImage);
    }

    const menuButton = document.getElementById("menuToggle");

    if (menuButton) {
        menuButton.addEventListener("click", toggleMenu);
    }

    // Check that every subject has 20 questions
    Object.keys(questionBank).forEach(subject => {
        console.log(
            `${subject}: ${questionBank[subject].length} questions`
        );
    });

});

