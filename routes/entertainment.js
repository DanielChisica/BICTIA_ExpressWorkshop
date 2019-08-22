var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('news', { title: 'All we know about PES 2020',
        source:'Realsport101',
        paragraph:'Enlisting the expertise of legendary midfielder Andres Iniesta has shaped the latest instalment with a focus on authenticity, translating his ability to find and read space, and unlock a defensive line with a new dynamic dribbling technique; the finesse dribble.\n' +
            '\n' +
            'Renowned as one of football’s most entertaining players, Ronaldinho’s unique style of football is also coming to PES 2020, featuring animation sets that allow players to move like the man himself, using unparalleled technical flair and fluid movement to beat defenders, together with showboat first-touch techniques such as chest and back control.\n' +
            'Other components that have been announced include new first touch techniques, upgraded trapping mechanics, context-sensitive kick accuracy, improved ball physics as well as new skills & abilities. There are also new ways to defend, including the intentional foul and an adaptive player interaction system that recreates player personalities on the pitch.',
        imgUrl:'/images/pes2020.jpg'});
});

module.exports = router;
