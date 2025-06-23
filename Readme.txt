To change Email: Go to src/components/CopyEmailbutton.jsx and there change email.

To change Techstack, Timezone or draggable tech stack buttons: Go to src/sections/About.jsx and there change those.

To add Testimonials about what your clients have to say, you can add that section by going to: Go to src/sections/App.jsx and adding <Testimonial /> below Experiences and above Contact.

To add project: Go to: src/constants/index.js and add projects by un-commenting them. Also don't forget to add links. they will be put in the href of that project in index.js

To add work experience:  Go to: src/constants/index.js and add work experience by un-commenting them.

To add under Goals and Objectives: For desktop version: go to src/components/TypingTextDesktop.jsx and add content.
For mobile version: go to src/components/TypingText.jsx and add content.

To upload updated portfolio:
step-1: update files locally.
step-2: go to root directory of portfolio
step-3: type "cmd" in address bar and hit enter.
step-4: run these commands one by one: 
git add .
git commit -m "comment the changes you made"
git push
Vercel will automatically make the updated portfolio live within 5 minutes.