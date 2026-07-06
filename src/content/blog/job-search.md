# Riki's Guide to Job Searching for Early-in-Career Software Engineer Roles

_or RGJSEICSWER, for short_.

## Introduction

This is a guide to job searching for junior- to mid-level roles in software
engineering in 2026. This will be most helpful for engineers with 1-3 years of
experience, as that's the perspective I have to offer, but there should be
something in here helpful for pretty much anyone early in career.

The current tech job market is one of the worst in recent memory with CEOs
trying to eliminate as much headcount as possible and other economic factors.
Expect to be job hunting for a long time. I personally spent about 9 months job
searching after leaving a SWE I role at an
[evil Big Tech company](https://noazureforapartheid.com/why-microsoft/) and
eventually landed a role with similar pay as a SWE II at a mid-size company that
I'm more excited about.

For context on my experience job searching, I have 2 years of decently high
impact, non-internship experience at a Big Tech company and an Ivy League
degree. In total, I sent out 200+ applications (this may seem like a relatively
low number, but I was prioritizing mid- to high-match roles), failing many
technical and behavioral interviews along the way. I spent much of the past few
months scouring Reddit, YouTube, and other sources to understand the current job
market and how to compete in it. I'm not an expert or a job search consultant by
any means, so take what I say here with a grain of salt. My hope is to give you,
the reader, a broad overview of my understanding of how to conduct your job
search in this weird time period.

Here are some things I'd like to focus on in this guide:

- Building a strong, ATS-friendly resume (how to attract recruiters)
- Finding and filling job apps (and how to automate this process)
- Building projects
- Preparing for interviews (so you can succeed once you actually get them)

_Note_: I did not use AI to write this post. The only thing I have to promote is
a GitHub repository that is free to use if you find it helpful :)

## Building and Tailoring Your Resume

Much of the conventional wisdom for resumes still applies today:

- Organize your information to have most important details first
- Keep resumes to one page, especially at this level
- Prioritize impact points over job responsibilities
  - One way you can handle this is to have your first bullet explain the primary
    job responsibility ("Led development of a full stack application..."), and
    then make the rest of the points impact points. Generally, there shouldn't
    be more than one "job responsibility" point on your resume.
- Quantifiable impact is usually best ("Reduced setup time by 2 weeks", etc.),
  though anything that indicates high impact is good
  - I personally think it's ok to make educated estimates of the quantity if you
    don't have hard numbers, as long as you can justify them
- Limit bullet points to ~6 at most for each experience
- If you have an objective, limit it to about 2-3 sentences (I personally did
  not have an objective on my resume)

### Resume Optimization in the Era of ATS

[Applicant tracking systems](https://en.wikipedia.org/wiki/Applicant_tracking_system)
(ATS) are ubiquitous at this point, so it's best to optimize your resume for
them to improve your chances.

#### Make your resume as machine-readable as possible

_NEVER USE CANVA TO MAKE YOUR RESUME_. ATS are bad at reading Canva resumes.
There are a number of free ATS compliance tools online to check that your resume
is machine-readable. You should be able to highlight and copy the text of your
PDF resume and paste it somewhere else without losing any of the information.
Generally, avoid multi-column resume formats or anything that would not be
readable by a machine. Word, Google Docs, LaTeX are fairly standard, and I
personally would recommend using something like these over a website that is
built for creating resumes where you have less control over the format and data.

I originally made my resume in Figma, using one textbox for the body of the
resume. This resulted in a huge file (1.2 MB) and wasn't super easy to update. I
eventually moved to creating an HTML version of my resume, and then printing
that file to PDF. I kept a master resume in markdown that I could pull relevant
bullet points from for each job description.

This was a huge improvement for a number of reasons:

- File size decreased ~10x to 110 kB, with the same appearance
- The resume became more readable by machines
- AI agents could programmatically pull and edit the most relevant bullet points
  into the HTML resume based on a given job description

#### Resume Tailoring

The best way to match your experience to job descriptions is to fill out
applications that you're qualified for. We'll cover that later in finding
applications. Once you've found a listing that matches your experience, you'll
want to prioritize bullet points that match the listing, and ensure the wording
matches what they're looking for. Pick out key technologies and keywords from
the job description and try to make sure they're represented in your resume if
you have experience with them. Generally, it's best to show _how_ or _why_ you
used the technology that they're looking for rather than mashing them somewhere
in the resume.

Resume tailoring can be automated with AI agents if you have a good system to
edit and export customized resumes (e.g. HTML files, LaTeX, etc.).

#### Evaluating Your Resume

Running your bullet points through AI can be helpful to ensure that you're
properly highlighting impact while being concise. Having friends look over the
resume is also helpful. There's no real way to get feedback from recruiters on
your resume. Note that a low response rate is par for the course in the current
job market, so don't be too hard on yourself. If the ratio of quality
applications filled to positive responses is abnormally low (e.g. >30:1), then
you may want to see what larger changes you can make to the resume to see if you
can get better results.

## Finding and Filling Job Applications

### Applying Early, Automating Search and Filling

There are tons of custom job boards, so you can choose whatever board is most
relevant to you. I primarily used LinkedIn with filters applied through Chrome
extensions as well as Built In. [Hiring Cafe](https://hiring.cafe/) also often
had other jobs listed. Applying early is highly important right now, due to the
sheer volume of applicants that any job posting gets, especially for those
posted on LinkedIn. I tried to apply to jobs posted that same day, or from the
past 3 days once same-day postings had been exhausted. I was successful with
landing interviews on jobs posted on LinkedIn despite the high number of other
applicants.

I grew tired of checking these boards every day. However, scraping LinkedIn is
increasingly difficult using conventional scraping technologies. I eventually
found that I could automate the process using
[Kimi WebBridge](https://www.kimi.com/features/webbridge), a browser automation
tool for AI agents. Refer to the job application agent repository for more info
on this.

I used the free version of the [Simplify extension](https://simplify.jobs/) to
fill out repetitive application questions. There are many alternatives, and you
can also customize an AI agent to do this with some effort.

### Being Human in Responses and Cover Letters (Don't be "Sloppy")

Any text you write into long-form responses should pass the smell test that a
human wrote them. Recruiters are currently inundated with AI slop responses to
custom questions and cover letters. From recruiter responses on Reddit, it seems
that these are often instantly discarded if it's obvious that they were written
by AI. Always look over any AI-generated text, and manually rewrite it if it
doesn't pass the smell test. Emdashes and other obvious AI tells shouldn't be
anywhere in your responses. I would generally recommend handwriting cover
letters only for job apps that are worth the time investment, or not including
them.

I kept track of every custom response and cover letter that I wrote on job
application questions. That way, I could refer to previous responses for future
questions that were similar. If you have a strong enough writing agent, you can
feed these as writing samples to automatically generate responses to future
questions. I didn't find too much success with this, and ended up handwriting
responses anyway.

## Personal Projects and Staying Busy

Don't let filling job applications consume your whole life. If you have the
liberty to spare the time, try and stay busy doing things that you enjoy to take
breaks from the process.

If you want to do something productive other than job searching, projects can be
a way to spend time away from applications while still contributing to your
hireability. It's also crucial to remain up-to-date on developing trends during
the current industry-wide transition to AI-centric software engineering.
Projects that I worked on during my unemployment gave me good conversation
topics during interviews that could signal that I understood how to productively
use AI tooling.

If you're fresh out of college or generally low on work experience, I would take
the advice from [this video](https://www.youtube.com/watch?v=0QXzV2T9p20) and
spend the first few months building and shipping something using AI, rather than
working on applications. You should have something that is publicly accessible
that you can talk about in interviews and walk through your design decisions and
process. It's easier than ever to build something from nothing. Building
something that has potential to become an actual product is going to be a much
better use of your time than applying if you don't have the work experience to
point to.

I personally used cheap open-weight models to start building a
[multiplayer browser game](https://github.com/r-fameli/protectors.io). This was
an interesting project, and it allowed me to replace a college project on my
resume and have something for job listings requiring Node.js/Express experience.
I also "built" the job application browser agent that I linked previously. Given
more time in the job hunt, I would probably put this on my resume, since it is a
strong signal that I can use AI tooling productively.

If you want to maximize for hireability, I would follow current trends and build
projects around that or incorporate them into projects. AI agents, local LLMs,
etc. are things you can build around if you need ideas. That being said, I would
build something that is genuinely interesting to you, as it can be a
time-consuming process.

## Preparing for Interviews

You should practice interviewing skills as you're applying, and especially when
you actively have interviews on your calendar. The current interview landscape
is a bit more variable than in years past, as companies are shifting away from
Leetcode puzzles. I would break down the interviews you can expect into the
following buckets:

- Behavioral
- Leetcode
- System design
- AI coding
- Non-AI problem solving

Occasionally, you'll get a takehome assignment as well, but that's usually not
something you'll have to prepare in advance for unless it's especially
time-limited.

### Note on Cheating Tools (InterviewCoder, etc.)

Interviewcoder and Ultracode seem to be increasingly popular, especially among
undergraduates. I've never used these, and would generally recommend against
using them. There are Reddit threads and reviews about the increasing
detectability of these tools, and of users getting silently blacklisted for the
future.

See
[here](https://www.reddit.com/r/leetcode/comments/1te9ew4/do_not_fall_for_the_interview_coder_scam/),
[here](https://www.reddit.com/r/InterviewCoderHQ/comments/1sgcijw/do_not_try_ultracode_its_a_scam/),
etc.

### Behavioral Interviews and Phone Screens

Phone screens are often miniature, lower-stakes behavioral interviews. If you
don't make it past a phone screen (this happened once or twice for me), the role
is likely not a good enough fit for you to spend time interviewing for it
anyways.

#### "Tell me about yourself"

You should memorize a 90-120 second pitch for "Tell me about yourself" and
similar prompts that are usually the first question you get in an interview. For
≤2 years of experience, aim for the lower end of that if possible. It's very
important that the delivery for this feels natural and that you tailor it to the
question actually being asked. If your interviewer asks the question "Could you
tell me about your frontend experience and why you're excited about this
startup?", then your response absolutely should answer those two separate
questions (what's your frontend experience and why are you applying here) and
make them the main focus of your response. If you just say your original
memorized pitch and it doesn't feel like a natural response to the question
asked, you'll lose some points with the interviewer. They'll think that you're
regurgitating some pitch that you had memorized (which, to be fair, you are).
Tailor your pitch to the specific question(s) being asked, even if it means that
you lose some of the detail of the original pitch.

This is a paraphrased version of the pitch I used:

> I'm Riki; I'm a full-stack software engineer based here in Seattle. I was most
> recently at Poop Corp working for the Core Infrastructure team. Our team
> validated the performance of new datacenter hardware, which mainly included
> load-testing, power-testing, and debugging issues across the storage stack.
> While I was there, I built a full-stack dashboarding app in React and Python
> that replaced one of our main scripts and I carried this project forward to
> become a central hub for all my team's tooling. I also managed multiple
> hardware SKUs and coordinated each step of the sign-off process with our
> partners internationally to get 5 SKUs to market.
>
> Before this, I interned at Poop Corp and worked on a frontend charting display
> project. I studied at Gigachad University and TAed there for three semesters.
> In general, I really enjoy the process of building things from the ground up,
> and recently I've started working on a browser game to play with friends. I'm
> excited about Glorp Corp because [...].

Now, this is a bit verbose and could probably use more workshopping, but I can
pick and choose what feels most relevant from this based on the company, role,
and question, and choose more natural wording as I'm saying it. Some things that
this pitch does:

- Starts with the most relevant information (worked at Poop Corp)
- Establishes context for what I worked on and what the role was for
- Highlights the stack I worked with (React + Python) - helpful for recruiters
- Doesn't waste too much time on internships or university
- Gives some context on why I like software engineering and what I've been doing
  recently - this is not super necessary, but can give some humanity to your
  response
- Ends with why I'm excited about the company (see next section)

#### Researching the company, "Why work here?"

Before every phone screen or behavioral interview, I had the following things
ready:

- My initial pitch was locked and loaded in my head, ready to be tailored based
  on the intro questions
- I had believable reasons for why the company would be a good fit for me
- I had questions in mind to ask the interviewer
- I looked up the person interviewing me on LinkedIn beforehand, in case there
  was anything helpful there that could help me predict what they might like in
  a candidate, or anything that we have in common

For that second bullet point about reasons to work at a company, it's best to do
a little research on the company online. I usually searched queries such as
"working at [company] reddit" and I often checked the company's hiring page and
Glassdoor page. The goal of this is to glean any information that you can about
the company's culture so that you can tailor some of your responses and show
that that's what you're looking for.

My most common reason for wanting to work somewhere was something like this:
"After working at Poop Corp for a couple years, I want to work somewhere that
feels more agile and where I have more ability to work on earlier-stage projects
rather than the behemoths we work on there." Sometimes, I could be more specific
if the role offered something pertinent to my experience, or if there was
anything unique I had read about the culture.

#### Questions to ask your interviewer

Job interviews are supposed to be a two-way street in which applicants are also
learning about the company they could potentially work for and seeing if it's
the right fit for them. In general, the more that you embody this in your
interview, the more successful you'll be. You can, for example, ask clarifying
questions about the work or culture during the interview before you get to the
eventual Q&A at the end. The questions you ask at the end should reflect this as
well.

I usually asked my first question to get a general overview of what working at
the company would look like. As an example, "What's been your experience working
here so far and what do you think is unique about Glorp Corp compared to other
places you've worked?".

Some other questions that I've used:

- What's the company's current stance on using AI in coding? Is it something
  that leadership at Glorp Corp is trying to maximize? Do some engineers code
  without using much AI?
- How would you describe how leadership and management works here?
- What are some of the qualities you see in the engineers who excel here?

It's possible to overdo this, and seem as if you are asking "good questions" for
the sake of asking "good questions". Be genuinely interested in your
interviewer's responses, and listen actively. Also, ensure that you're asking
questions that your interviewer is the best person to answer. Your recruiter is
not going to be able to provide too much information about specific engineering
culture questions.

#### Nerves in behavioral interviews

Most people get nervous at some point going through behavioral interviews. The
best remedy I'm aware of is exposure therapy. Get as many opportunities as you
can to interview. Your prepared stories are never going to be enough to match
100% of interview questions they throw at you, so you'll need to practice those
moments where you're a bit off-guard and have to think on the fly. I recorded
myself responding to questions on the fly a few times and did many mock
interviews in between my real ones. Real interviews are the best practice, so
try and mentally evaluate how you did on each of them and note that down for the
future.

Rambling and having very drawn-out responses is very common, and recording
yourself can be a way to cut down on the fluff in your natural speech.

### Leetcode Interviews and Online Assessments

Leetcode problems mainly show up in online assessments for bigger companies. I
did, however, face (and fail) one Leetcode technical interview for a startup.

The [Neetcode 150 roadmap](https://neetcode.io/roadmap) is the best resource I
know of to learn all the most common Leetcode patterns in a sensible sequence. I
would recommend doing most, if not all the problems (including the hards), to
learn the initial patterns. Getting to 150-200 solved non-redundant Leetcode
problems will put you in a good place. Obviously, your time is limited, so try
to do as much as you can and triage as necessary.

When tackling problems, you need to balance getting through problems quickly
with having enough time per problem to retain the patterns. I would attempt a
given problem and look up a video solution pretty soon after I stopped making
progress, pausing the video and switching back to the problem when I became
properly unblocked. AI can be helpful in the cases where you nearly had a
working solution, but ran into some off-by-one error, or when you want to learn
how to modify the code you started into a working solution.

Looking up company-specific problems was helpful insofar as it helped me
understand which patterns were most commonly represented, but I rarely, if ever,
saw a problem I had done specifically to practice for a specific company.

When doing Leetcode technical interviews (as opposed to unsupervised
assessments), make sure that you are communicating with your interviewer on your
approach. If you have an approach in mind, talk it through before you write any
code, specifying any potential pitfalls, tradeoffs, performance issues, etc. I
typically wrote most of my approach in code comments, discussed this with the
interviewer, then moved them into the code block and wrote the code to implement
each comment underneath.

Some interviews I had required me to implement an "API", which essentially
boiled down to just writing out a function definition. Don't do more than you
need to, and generally try and get these questions done iteratively (unoptimized
-> optimized) unless you know the goal pattern well.

I recommend Python for coding interviews, if you have no strong preference for
other languages. [This video](https://www.youtube.com/watch?v=0K_eZGS5NsU) can
help you get acquainted.

### System Design Interviews

I picked up system design fairly late into my job search as many of the roles I
applied to didn't have any explicit system design interview. However, I felt
that once I had picked up some system design knowledge, it was a huge bonus when
I had to discuss anything technical in interviews. It also helped me realize
some of the shortcomings of projects I had led or designed at work, and gave me
a more critical and sophisticated lens to evaluate software architecture. All
software companies are concerned with scalability and building out solid
architecture decisions. If you are more on the junior side and can sprinkle in
some system design knowledge as you're talking through design choices (e.g. how
you might extend something you had to implement in an interview), that can be a
"cherry on top" in the demonstration of your expertise. System design knowledge
was crucial in the technical interview for the role that I eventually landed.

I spent about two weeks intensively studying system design concepts. In that
time, I developed the following capabilities:

- Understanding the fundamental, well-known concepts of system design and common
  buzzwords (e.g. replicability, CAP Theorem)
- Being able to touch briefly on more specialized tools or approaches (e.g.
  using NoSQL for analytical workloads requiring text search using something
  like Elasticsearch)
- Critiquing my previous and future work project design(s) and understanding how
  they could be improved
- Creating mostly complete design diagrams for easy system design questions that
  I hadn't seen before and understanding most of their pitfalls (though maybe
  not always how to resolve them)

Here were my favorite free resources for studying system design in that time:

- [HelloInterview](https://www.hellointerview.com/learn/system-design/in-a-hurry/introduction) -
  a good overview as well as some good free articles for more in-depth coverage
  of some tools and topics
- [Jordan has no life on Youtube](https://www.youtube.com/@jordanhasnolife5163) -
  Probably the best creator of system design YouTube content
  - [JHNL System Design Concepts](https://www.youtube.com/watch?v=bwt09KXDH94&list=PLjTveVh7FakLdTmm42TMxbN8PvVn5g4KJ)
  - [JHNL System Design Problem Walkthroughs](https://www.youtube.com/watch?v=A7xEG6smBAk&list=PLjTveVh7FakLGZ36GbWAk_DMf_0xBZpGv)
  - [JHNL System Design in an hour](https://www.youtube.com/watch?v=iYIjJ7utdDI)
- [Alex Xu's System Design Interview Book](https://bytes.usc.edu/~saty/courses/docs/data/SystemDesignInterview.pdf) -
  I read through all of this, but would recommend reading through the
  HelloInterview content over this book
- Designing Data Intensive Applications 2nd ed. - The classic system design
  book. I wouldn't recommend this unless you need to go deep into anything
  specific or just have a lot of time to spend on studying. Make sure you're
  reading the second edition, as it's updated with more of the cloud native
  designs that are prevalent today.

Mock interviewing and practice in general are very important for information and
pattern retention in system design. Passive learning will only take you so far,
so make sure you take occasional breaks from binge-reading and studying and try
implementing what you've learned to make learning more active.

### AI Coding Interviews

This is a newer genre of interview that has become more prevalent recently.
Generally, you are tasked with either implementing something or debugging an
existing project in a relatively short time, requiring you to use AI tooling to
get the task done in time. For the few of these that I had, I had to bring and
pay for my own model/agent to do the task (Opencode + DeepSeek V4 got me through
these well and kept costs really low). There's not much you can do specifically
to prepare for these other than to just build projects using AI coding tools.
Creating my own project using AI tooling helped me to understand the agentic
engineering patterns I was most comfortable using before I had to tackle these.

### Non-AI Problem Solving Interviews

I had one interview in which I was tasked with solving a more abstract problem
(mine was to find a way to get the average size of images across Wikipedia
pages). The main thing to prioritize here is communicating well with the
interviewer, asking clarifying questions, even potentially asking for help if
you get stuck.

## Other Resources

### Subreddits

- r/jobsearch - if you want to feel less alone in being frustrated about the
  current market
- r/jobsearchhacks - occasionally some helpful info
- r/cscareerquestions
- r/interviewcoderHQ - good for scoping out what the interview process for
  popular companies looks like
