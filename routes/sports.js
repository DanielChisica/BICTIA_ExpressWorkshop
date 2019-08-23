var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log('entro')
    res.render('news', {title: 'Egan Bernal becomes first Colombian to win the Tour de France' ,
        source:'The Guardian sports',
        paragraph:'Egan Bernal has become the first Colombian to win the Tour de France, sealing victory as darkness ' +
            'fell across Paris on Sunday.\n' +
            '\n' +
            'As a spectacular 21st stage of the 2019 Tour took in the Palais du Louvre, the Place de la Concorde and the' +
            ' Champs Élysées, Caleb Ewan proved the fastest of a fatigued peloton in the traditional sprint finish to ' +
            'the three-week race.\n' +
            '\n' +
            'The Australian Ewan came from well back in the pack to outsprint Dylan Groenewegen and collect his third ' +
            'stage win of the Tour as the sun set over the Arc de Triomphe at the end of the 130km stage from ' +
            'Rambouillet. Just behind, Bernal crossed the line alongside last year’s winner Geraint Thomas to secure his' +
            ' first Grand Tour victory in only his second career three-week race.\n' +
            '\n' +
            'Peter Sagan celebrated winning the green jersey of points classification for a record seventh time, but it ' +
            'was Bernal’s remarkable triumph that sent shockwaves through the sport. The 22-year-old was mobbed by ' +
            'teammates and delirious Colombian fans who had flooded the city of lights to celebrate a long-awaited ' +
            'success in the world’s most famous bicycle race.\n' +
            '\n' +
            'Speaking from the top step of the podium on the Champs Élysées, Bernal told ITV4: “Today I am the most ' +
            'happy guy in the world. I just won the Tour de France and I can’t believe it.”\n' +
            '\n' +
            'Bernal, who spoke in English, Italian, Spanish and French, added: “I think I should say thank you to all' +
            ' my team, thank you ‘G’ [Thomas] for the opportunity and all the team for their support and belief in me.”\n' +
            '\n' +
            'Dave Brailsford, the Team Ineos principal, said: “I don’t think he knows what’s hit him yet. I don’t think' +
            ' he has any idea what’s just happened to him. In sport, we lose way more than we win. As for him being the' +
            ' first ever Colombian, having been to Colombia and seen millions of people just when Egan won the ' +
            'Tour of Colombia, the place went bananas.\n' +
            '\n' +
            '“His status in cycling has changed now. He came into this race and it was ‘Geraint and Egan’, whereas ' +
            'now I think people will perceive him and ride against him in a different light. Geraint Thomas drew ' +
            'a lot of attention and that allowed Egan to go under the radar a little bit.”\n' +
            'As Brailsford and his staff celebrated a 10th Grand Tour win since 2012, Romain Bardet took the King ' +
            'of the Mountains classification while the long-term race leader and fellow French favourite, Julian ' +
            'Alapahilippe, who spent 14 days in the yellow jersey and won two stages, was awarded the “super ' +
            'combativity” prize for most aggressive rider.\n' +
            '\n' +
            'At 22, and third youngest winner in the history of the Tour, Bernal also claimed the best young rider ' +
            'classification, in addition to the yellow jersey. But despite his prowess in the mountain stages, Bernal also finished the Tour without a stage win, as did teammate Chris Froome in 2017.\n' +
            '\n' +
            'Bernal is widely tipped to go on to further Grand Tour success after this breakthrough win for South ' +
            'American cycling, but Brailsford is wary of the impact stardom may have on the young Colombian.\n' +
            '\n' +
            '“The big thing is that the status of his life will change and at a relatively young age,” he said. ' +
            '“He’s got all his 20s to adapt to that. I think it will go one way or another for him. Some carry ' +
            'on and get used to the world they live in and everything they have to deal with and other people don’t.\n' +
            '\n' +
            '“A lot of the guys who became successful for us were older, late 20s, and the life-change came after ' +
            'they got used to life at a certain level. When it happens younger you adapt quicker so you grow up ' +
            'in a different world from some of the other guys. His agent I know very well and is close to him.' +
            ' He’s got a good network around him and his coach is really important now. So we need to sit down' +
            ' and have a plan.”\n' +
            '\n' +
            'Thomas, who was lying second overall in the 2017 edition when he was forced to abandon the race after' +
            ' a crash on stage nine, was proud of his efforts even though he was unable to retain his title. “[I was]' +
            ' second in the Tour de France two years ago, I was here with a broken collarbone and my arm in a sling' +
            ' and watching Froomey win his fourth, and really just disappointed not to be able to ride my bike, and' +
            ' I would’ve taken second then, but it just shows how times and expectations have moved on,” Thomas said.' +
            ' “But I think I can be proud of how I just managed to get in decent enough shape. This year has just' +
            ' been mainly downs, it hasn’t been a smooth ride at all, and even in the race it was one thing after' +
            ' the next. But I can be happy with it, I gave it everything, didn’t let the downs affect me and just' +
            ' kept pressing on. To be second to a teammate makes it OK. If it was Kruijswijk sitting on the top step,' +
            ' and I was second then for sure I would be a lot more disappointed.”',
        imgUrl:'/images/egan.jpg'});
});

module.exports = router;
