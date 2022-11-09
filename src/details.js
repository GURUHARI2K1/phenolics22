const details = [
    {
        title: 'paper presentation',

        descrip: 'Let your mind write the paper not your hand.',

        rules: ["1. Maximum three participant are allowed per presentation.","2. Abstract should not exceed 200 words.(The abstract file name should be the title of your paper and must be sent to phenolics22@gmail.com on or before 11 November in both .doc and .pdf format as per the abstract format mentioned below).",'3. Paper presentation: " TITLE by author/s (participant\'s name) and College name".',"4. The mail should mention under which of the above given topics you are willing to present.","5. Selected participants should bring 2 hard copies of their paper and softcopy of presentation in .ppt format.","6. The number of slides for presentation shall be inbetween 10-15.","7. Time alloted for presentation is 5-6 minutes followed by 2 minutes of Q & A session.","8. Judges desicion are final and binding.","9. Working models,Samples --fetch you extra points."],

        contact: ["Nantha kumar - 9361435912","Pasupathinesan - 7358092573."],

        topics: ["1)  Polymers in  A.I and semi-conductors.","2) Plastics in the field of Nanotechnology.","3) Plastics in Civil & interior-household decors.","4) Polymers development in pharmaceutical field.","5)Plastic Design development in robotics & aerospace.","6)Plastic degradation & recycling - latest development.","7) Recovery of materials /energy from plastic recycling.","8) Role of plastic materials in energy harvesting and storage."],

        absFormat: ['Abstract should be not more than 200 words, formatted in Microsoft word, and single-spaced, using size 12 times new Roman font.','It must contain.','Presentation title:',"Author's name :","Author's details: phone number / mail id","College name:","Abstract:","Key words:","Conclusion."],

        paperFormat: ["1. Paper should be in a one column format and should not exceed 15 pages.","2. Paper should be in times new Roman font of size 12.","3. For heading use bold and a font of size 16.","4. Paper must contain index, list of figures, list of tables, abstract, introduction, point wise description of subject and conclusion and references.","5. Paper must be preceded by the cover page specifying the title of the paper, name of the authors and their college names as also their contact number and mail ids. (Phenolics22@gmail.com)"],
        route:'/paper-presentation'
    },
    {
        title: 'poster presentation',
        descrip: 'Transform your research work into a colourful and illustrative poster .',
        rules: ["Maximum of 3 Participants are allowed per presentation","Abstract should be sent to the Mail ID 'phenolics22@gmail.com' in PDF format on or before 6 November 22.","The Subject of the mail should be in the following format.",'Poster Presentation: "Topic" by authors (College Name).',"The Email should mention under which of the above given topics you are willing to present the Poster.","Abstract should not exceed 250 words.","Abstract should contain the following details","Participant name:","Department:","Institution Name:","Contact Details :","Abstract File Name should be the title of the Poster.","Poster Dimensions: 75cm x 60cm","Use photos, diagrams, graphs or any other artwork as a focal point to attract attention and avoid distracting colours."],
        topics: ["1)  Polymers in  A.I and semi-conductors.","2) Plastics in the field of Nanotechnology.","3) Plastics in Civil & interior-household decors.","4) Polymers development in pharmaceutical field.","5)Plastic Design development in robotics & aerospace.","6)Plastic degradation & recycling - latest development.","7) Recovery of materials /energy from plastic recycling.","8) Role of plastic materials in energy harvesting and storage."],
        importDates: 'The abstract in .pdf or .doc format should be mailed to phenolics22@gmail.com on or before 6 November 2022',
        route:'/poster-presentation'
    },
    {
        title: 'trial by trivia',
        descrip: 'Settle a dispute by speaking out  unimportant facts or details that are considered to be amusing rather than serious or useful.',
        rules: ["-Two members per team.","-Registration can be done through either online or offline","-Spot registration can be done prior 15minutes the event","Three rounds will be conducted","-prelims will be choice based questions","•30 seconds for each questions","-Technical crossword:","•Time: 10mins","•First 4 teams with correct answers will be qualified for the next round","-Technical connection","• Overall 10 Questions first two teams to answer most wins the exciting cash prize."],
        contact: ["Nishanthini - 8248408236","Madhu mitha - 91763 99611"],
        route:'/trial-by-trivia'
    },
    {
        title: 'workshop',
        descrip: 'Knowledge gained through experience is far superior and many times more useful than bookish knowledge.',
        topic:"Reverse engineering and Rapid prototyping",
        rules: [
            "Registration mode online/ offline.","Spot registration also available.","Food will be provided for registerd candidate.","Certificates will be given only for those who attend all the sessions of the workshop."
        ],
        contact: ["Kalaiyarasan  - 9003540736"],
        route:'/work-shop-1'
    },
    {
        title: 'wacky art',
        descrip: 'A good idea becomes a great idea when you let it out.',
        rules: ["Every team will get 60 mins to make /craft an model using the scrap/ waste .",">  Entry fee - 100 (per team)",">  No.of participants per team - 2",">  Both online and offline registration available",">  spot registration - 20 mins before the event begins",">  Winner and runner will be given prizes","* Mobile Phones are strictly prohibited","* The waste/scrap required to make an art will be issued by us.","*  The things required to make that waste into an art must be brought by the participants (For eg : scissors, Tapes,Glue, sketch,Paint, etc...)","*  Decorative things can be taken by the participants if needed."],
        contact: ["Vishwanath -8072860900","Yamuna - 8489447123","Sowmiya - 7395862991"],
        route:'/wacky-art'
    },
    {
        title: 'mind martians',
        descrip: 'The stuff you had taken is too high for ur mind!! Just spill it here and free up for upcoming stuffs!!!.',
        rules: ["- Entry fee Rs.100 per Team.","- Registration can be done through both online and offline .","- Spot Registration should be done 15 mins before the event begins.","-Time Required : 1 hr","- No of members per team:2","- Event include Two Rounds (Memorize & Connections)","- Preliminary Round : Memorize","- Final Round : Connections","Memorize:","- Picture will be displayed for 5 seconds, questions will be asked from that.","- 5-10 questions.       ( depends on no. of participants).","- Top teams will be selected for connections.","Connections:","- Questions from Movies and Sports.","- Questions asked on 3 levels (Easy, Medium , Hard)","    . Easy > 1 Point","    . Medium > 1.5 Points","    . Hard > 2 Points","- Time limit :","    Easy : 10sec","    Medium : 12sec","    Hard : 15sec","- Top 2 teams will be awarded."],
        contact: ["Parthasarathy- 7868951547","Abinesh- 9344513934"],
        route:'/mind-martians'
    },
    {
        title: 'peace in battleground',
        descrip: 'The digital era made games become one of entertainment thant knows no age. Play with your friends and be the last one standing to bring PEACE IN BATTLEGROUND.',
        rules: ["Games: BGMI & FREE FIRE","Event name: BGMI","No of members per team:4","Rules: On spot ( overall common rules to every team ).","Event name:FREE FIRE(CLASH SQUAD)","No of members per team:04","Rules:","NO GRENADE","NO HACK"],
        contact: ["Prathap - 8925219847","Maria Antony - 9360368489","Ramanraj - 8667265669"],
        route:'/peace-in-battleground'
    },
    {
        title: 'chennai-600032',
        descrip: 'Heavy rain or hot sun never mind gully cricket with pals after school. Missing those days ,bring back the memories now and cherish the moment.',
        rules: ["Entry fee 150*per team","1. Each Team must have 7 players .","2. Overs will be decided on that day .","3. Only Throw bowling is allowed .","4. Disqualification will be at every round so be sure you win every round .","5. Umpire's decision will be considered as the final call .","6. No ABUSIVE Language will be encouraged , If it is found so . The team will simply be disqualified .","7. College ID card to be carried .","8. Prior registeration is required ,either online or on spot before."],
        contact: ["Muthukumar G: 9360483381","Sanjaikumaran: 6383126835"],
        route:'/chennai-600032'
    },
    {
        title: 'photography',
        descrip: "It's an art of observation. Go now  find something interesting in an ordinary place…",
        rules: ["1. Participants should register for particular theme and pay the entry fee through online. A payment received mail will be sent to particular person.","2. After payment, the participants should enter the details in the mail","Details :","Name","Year of studying","Department","College Name","3. Participants should share their photos in the email along with the details.","4. Only one photo is allowed per person.","5. No watermarks Or Using Filters is strictly prohibited.","6. The photo should be taken by them.","7. Winners will be chosen based on CREATIVITY and LIKES.","8. WINNERS will be awarded with Certificates and Cash prize.","9. Deadline for Submitting photos is 02 / 11 / 2022."],
        themes: ["REPETITION PHOTOGRAPHY","MONOCHROME PHOTOGRAPHY","WORLD BEYOND THE WINDOW PHOTOGRAPHY"],
        route:'/photography'
    },
    {
        title: 'clash of memes',
        descrip: 'Express the thoughts and feelings in image / video to reach out a specific audience.',
        rules: ["• Every participant can submit one meme.","• The meme can be both post or reels.","• The meme should not contain any logos, watermark or other links.","• Make sure your content isn't political, unethical, or derogatory to any college.","• Do video memes but make sure to keep them short and simple.","• No adult memes , make sure tha content don't discriminate Any gender.","• Abusive contents will be elimated from the competition.","Send your memes or video to","Gmail - phenolics22@gmail.com","Instagram id- phenolics22.ipt"],
        contact: ["Bharathiraja -  7094710780","Mullaivelavan- 934450056"],
        topics: ["Education and exam","Relationship status","Life without Internet","College and school life","Humanity"],
        procedure: ["• Register your name and details with I'd proof in below link","•  Make payment and upload screen shot in that link ( JPEG format below 5mb )","•  After registration, your meme will be posted in our page with corresponding details"],
        route:'/clash-of-memes'
    },
    {
        title: 'plasticore',
        descrip: 'Express your knowledge and skills in Plastics  especially in material and product identification .',
        rules: ["Round1","Event starts with preliminary round -quiz (From Basics of plastics Materials,compounding,etc..).","• All registered teams can attend the quiz.","• There is no negative marks","• Total Duration : 15 mins","• Total question to be answered: 25","Second Round"," - Material and Product Identification","• Shortlisted Teams from the preliminary round will play the Secondary round.","  ~ Two members per team .","  ~ Only team play . No solo play","  ~ Registeration can be done  through  either online or offline mode","  ~ Spot Registeration should be done on 15 mins prior to the event starts ."," Total duration - 1 hour .","• Every team will be ranked on accuracy (score) and speed (time of that question answered). This means that if two teams have the same score, then the team that answered their question earlier will be ranked higher","• All decision in the matter of ranking and final judgement will be with Plasticore and the organizers."],
        contact: ['Selvakumar : 7339124842.'],
        route:'/plasticore'
    },
    {
        title: 'just in time',
        descrip: "Where smarter answers won't get you fired. Sharpen your brains to Topics and answer yourself to please the BOSS and AUDIENCE over there at our fest.",
        rules: ["1.Limited registration.First come first serve","2.Solo participation","3. Registration can be done in online mode(offline registration will be informed later)","4.Topic will be technical oriented and given on spot.","5. The contestant will be given 3 minutes for preparation and they should conclude their speech within 3 minutes. (3+3= 6 mins for each contestant)","6. Results will be finalized by the jury. Ko6. Top 2 contestants will be awarded."],
        contact: ["SUDHARSAN: 9360445690","PRAVEN: 7539915972","ALTHAF:7708319247"],
        route:'/just-in-time'
    },
]

export default details