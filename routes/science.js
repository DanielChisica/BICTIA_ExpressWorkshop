var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('news', { title: 'India\'s Chandrayaan 2 Has Officially Entered an Orbit Around The Moon' ,
        source:'Sciencealert',
        paragraph:'India\'s Chandrayaan 2 spacecraft is now in orbit around the Moon.\n' +
            '\n' +
            'That means it\'s on schedule to touch down on the lunar surface on September 7, according to Agence France-Presse (AFP).\n' +
            '\n' +
            'If the mission continues as planned, India will become the fourth country to land a spacecraft on the Moon, following Russia, the US, and China - an accomplishment that would cement its space agency\'s role as a major player in the field.\n' +
            '\n' +
            'The maneuver that brought the spacecraft into orbit around the Moon is one of the trickiest parts of the entire mission, AFP reports reports.\n' +
            '\n' +
            'If it approached at too high a speed, the Moon\'s gravitational pull wouldn\'t have been enough to stabilize the ship and it would have careened off into space.\n' +
            '\n' +
            'Too slow and it would have been pulled straight down into a crash landing on the Moon.\n' +
            '\n' +
            '"The approach velocity had to be just right and the altitude over the moon precise. Even a small error would have killed the mission," Indian Space Research Organization chief Kailasavadivoo Sivan said at a media briefing attended by AFP.\n' +
            '\n' +
            'India has reached lunar orbit before - the Chandrayaan-1 spacecraft did so in 2008.\n' +
            '\n' +
            'But a successful landing would keep the country on track for its stated goal to launch a crewed mission by 2022 and a yet-unscheduled landing on Mars.',
        imgUrl:'/images/chandrayaan2.jpg'});
});

module.exports = router;
