
import random


class MessageService:
    # message lists are AI genearted by GPT-3.5
    motivational_messages = [
        "Failure is a stepping stone to success. Learn from this setback and rise stronger.",
        "Mistakes are proof that you are trying. Keep pushing forward, your success is inevitable.",
        "Don't let one quiz define your journey. It's just a small part of your larger story.",
        "Every expert was once a beginner. Use this experience to grow and improve.",
        "Success is not final, failure is not fatal. It's the courage to continue that counts.",
        "Embrace failure as a teacher. It's guiding you towards a better version of yourself.",
        "Your potential is limitless. This setback is temporary; your success is permanent.",
        "A setback is a setup for a comeback. Keep your head high and keep moving forward.",
        "You're not defined by one quiz. Your true potential is still waiting to be unleashed.",
        "Success is a journey, not a destination. This is just a small detour on your path.",
        "Believe in yourself and all that you are. Remember, you have the power to bounce back.",
        "In the face of adversity, find the strength within to turn setbacks into stepping stones.",
        "Failure is not falling down but refusing to get up. Stand tall and face the challenges ahead.",
        "Your worth is not determined by a single grade. You have so much more to offer.",
        "Challenges are what make life interesting; overcoming them is what makes life meaningful.",
        "Take this failure as a challenge to prove that you can and will do better.",
        "The only way to do great work is to love what you do. Keep pursuing your passion.",
        "Success is the sum of small efforts repeated day in and day out. Keep going.",
        "You have the power to turn this disappointment into a comeback story. Seize the opportunity.",
        "You are capable of amazing things. Dust off and keep reaching for the stars.",
        "Your journey may have bumps, but the view from the top will be worth it.",
        "Use failure as fuel to ignite the fire of determination within you. You've got this.",
        "Strive for progress, not perfection. Each step forward is a victory in itself.",
        "Your education is a marathon, not a sprint. Pace yourself and keep moving forward.",
        "Success is not about avoiding failure but learning and growing from it. Keep evolving.",
        "The only limit to your impact is your imagination and commitment. Keep dreaming big.",
        "Don't let a momentary setback overshadow the potential for long-term success.",
        "You're not alone in facing challenges. Seek support, learn, and conquer your goals.",
        "You're not defined by one quiz. Your character and determination will prevail.",
        "The best way to predict the future is to create it. Use this setback to shape your success story."
    ]

    funny_compliments = [
        "Did you borrow Hermione's time-turner for this exam? Your grade is magical!",
        "Are you sure you're not secretly a genius? That grade is suspiciously smart.",
        "If grades were desserts, yours would be a double chocolate fudge cake with sprinkles.",
        "I hope you didn't pull a muscle getting that grade—it looks like a solid workout for the brain!",
        "Is it just me, or did your grade just break the scale? You might need a new one.",
        "You must have a Ph.D. in awesomeness because that grade is off the charts!",
        "Your brain deserves a standing ovation for this performance. Bravo!",
        "If getting good grades were an Olympic sport, you'd be a gold medalist!",
        "I'm convinced you have a secret deal with the exam fairy. Share the magic, please!",
        "Your grade is so high, it's getting a bit dizzy. Maybe offer it some oxygen?",
        "Are you a wizard or just a regular genius? Either way, well done!",
        "Your brain cells must be doing the cha-cha with joy after that grade!",
        "I think your grade just solved world hunger. It's that impressive.",
        "You're so smart, even Google would ask you for help!",
        "Did you just rewrite the laws of physics to get that grade? Because it's out of this world!",
        "I heard Einstein wants to borrow your brain for a weekend. He's jealous of your grades.",
        "Your grade is so high, it's on a first-name basis with the stars.",
        "You must have a degree in excellence because that's the only explanation for this grade!",
        "Your grade called—it wants to thank you for making it look so good!",
        "If good grades were a fashion statement, you'd be a trendsetter!",
        "I'm starting to suspect that your pencil is a magic wand. Accio A+!",
        "Your brain is the real MVP. Most Valuable Intellect, that is!",
        "You're not just a star student; you're a whole constellation of success!",
        "If brains were currency, you'd be the richest person in the world right now.",
        "Your grade is so good, it's causing envy in the gradebook!",
        "I didn't know it was possible to be jealous of a test paper until I saw your grade.",
        "You must have a black belt in academics because that grade is a total knockout!",
        "Your brain deserves a spa day after that mental workout. Maybe some cucumber slices for the neurons?",
        "Did your grade just do a mic drop? Because that's what it feels like!",
        "Your grade is so impressive, it should have its own fan club. Sign me up!",
    ]

    @staticmethod
    def get_a_motivational_message():
        return random.choice(MessageService.motivational_messages)

    @staticmethod
    def get_rizz_message():
        return random.choice(MessageService.funny_compliments)
