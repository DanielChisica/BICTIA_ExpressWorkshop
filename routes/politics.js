var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('news', { title: 'Colombia’s historic peace agreement with the FARC is fraying. We talked to 1,700 Colombians to understand why.' ,
        source:'The Washington Post',
        paragraph:'In 2016, after 50 years of conflict, the Colombian government signed a historic peace agreement with the country’s once-largest rebel group, the FARC-EP. That agreement is now threatened from several sides. President Iván Duque is trying to back out of key provisions, painstakingly negotiated, enabling former rebels to apply to receive reduced or commuted prison sentences in return for confessions. Colombia’s military leaders have ordered soldiers to prioritize attacks against illegal armed groups, without worrying about protecting innocent civilians from getting killed. This policy did not target the FARC directly, but could undermine the FARC’s already low levels of trust in the government.\n' +
            '\n' +
            'A public and institutional outcry forced a reluctant Duque to sign into law the peace agreement’s special tribunal, which will handle the sentencing of former rebels. And after the New York Times and local media outlets reported on the military’s plans to measure success by the number of kills made, the Duque administration promised to review its strategies.\n' +
            '\n' +
            'But there’s still another threat to the agreement. In the countryside, the government isn’t investing in infrastructure, ensuring security, and providing health and welfare services, as promised in the agreement.\n' +
            '\n' +
            'In Colombia, human rights workers are getting killed. Here\'s what could help save the peace.\n' +
            '\n' +
            'The peace accord’s success will be measured not only by whether armed conflict resumes, but also whether ordinary Colombians who suffered under the conflict for decades feel that they are now living at peace. The peace accord promised that the state would rebuild their infrastructure and provide security and welfare services. Do they believe their lives have been made better by the agreement? Our research finds that while they believe in its terms and goals, they’re not confident it is being carried out quickly and successfully.\n' +
            '\n' +
            'How we did our research\n' +
            '\n' +
            'We have run surveys in rural areas of four regions in Colombia that were affected by the country’s civil war. To date we’ve asked around 4,000 people what they think about how the peace process is going.\n' +
            '\n' +
            'From 2018 to 2019, we fielded locally representative surveys in some of the areas most affected by the armed conflict, trying to find out what ordinary rural residents want most from the peace, and what they think about how the agreement is being put into practice. Most surveys in Colombia are nationally representative; since most Colombians live in cities, their opinions dominate, though they were least affected by the conflict and have the least at stake in the peace.\n' +
            '\n' +
            'In January 2019, we focused on two other areas that both the government and the FARC considered priorities: Arauca, which borders Venezuela and is a base for the smaller but still active ELN rebel group (which was not part of the agreement mentioned above); and Tolima, an Andean region where the FARC was founded in the mid-1960s. Here we conducted more than 1,700 face-to-face interviews in which we asked citizens about their overall support for the peace agreement, their support for specific items in the peace accord, and their assessment of how implementation is proceeding.\n' +
            '\n' +
            'The FARC just became a Colombian political party. Here\'s why elections are key to a lasting peace.\n' +
            '\n' +
            'Here’s what people think about how the accord is being implemented\n' +
            '\n' +
            'People in Arauca and Tolima, almost regardless of background and outlook on the conflict, report that implementation of the parts of the accord relating to infrastructure, security, and welfare services has been too slow. As the figure below shows, in Arauca, approximately half of our survey respondents indicate that they are “not at all satisfied” with how the agreement is being implemented, the lowest possible level of support. Results are only slightly more encouraging in Tolima.\n' +
            'As part of the agreement, the government is supposed to expand its presence and public services in areas where it has historically been weak or even absent. This has had mixed success. People report that local police rather than armed rebel groups are now handling disputes, and that new schools had been built and staffed. In Tolima, for instance, nearly 45 percent report that the government has made “good” progress in building rural roads.\n' +
            '\n' +
            'But people also report that adequate health services remain poor or nonexistent. Overall, we find that our respondents’ primary priorities are more and better health care, schools, and public services more generally. Other priorities, not directly related to the peace accord, include reducing crime, unemployment and immigration — especially in Arauca, which has recently seen a flood of Venezuelan migrants.\n' +
            'Security, interestingly, is generally further down on the list of citizens’ priorities, depending on where they live. In Arauca, as many as 60 percent of the population reports that the ELN and FARC splinter groups, and not local police, had governed their communities in the last six months. Trust in the police is also quite low in Arauca.\n' +
            'So what’s next?\n' +
            '\n' +
            'As we write this, peace negotiations between the government and the ELN have broken down. Disillusioned FARC ex-combatants are leaving the camps set up as part of the peace accord, intended to help them disarm and be reincorporated into society. And in many areas throughout the country, violence — especially from organized crime and narco-trafficking — remains worryingly high.\n' +
            '\n' +
            'And yet those who lived through the conflict still support the peace agreement and its goals. In Tolima and Arauca, we find that most people are either somewhat satisfied or satisfied with the agreement’s provisions, with the exception of including the FARC in the political system. While ordinary citizens have not yet seen the benefits in their communities, they seem willing to give the peace process a chance. For how long, though, remains an open question. If people withdraw their support, then it will become hard if not impossible for the government to continue implementing the accord. That would put the entire peace process in jeopardy.',
        imgUrl:'/images/lideres.jpg'});
});

module.exports = router;
