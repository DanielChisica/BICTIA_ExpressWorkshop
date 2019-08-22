var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('news', { title: 'Economists Baffled as Colombia Finance Minister Flip Flops on Budget' ,
        source:'Bloomberg',
        paragraph:'Colombia will finance its 2020 budget without “a single cent” from the privatization of state companies.\n' +
            '\n' +
            'So said Finance Minister Alberto Carrasquilla on Monday, when he presented the budget to reporters.\n' +
            '\n' +
            'On Tuesday, Carrasquilla told lawmakers that asset sales are one of the ways the government will fill a $2.4 billion shortfall in the budget next year.\n' +
            '\n' +
            'Economists are still in the dark over what the government is planning to do. To help clear the confusion, the Finance Ministry’s press office told reporters to wait for Carrasquilla in a corridor of congress, outside the room where he was giving evidence on Tuesday. While they waited, he slipped out of the building via a different route.\n' +
            '\n' +
            'The ministry didn’t reply to emails seeking comment.\n' +
            '\n' +
            'Alejandro Reyes, an economist at BBVA’s Colombia unit, said that Carrasquilla appears to be choosing his words carefully. The government could be planning to divest assets without necessarily “privatizing” them in the sense of selling them to private buyers, he said.\n' +
            '\n' +
            'A development plan approved by congress this year allows the government to use money set aside for infrastructure projects to invest in some public companies, in which case the government would effectively be buying assets from itself.\n' +
            '\n' +
            'Read More: Colombia Accused of Accounting Shenanigans to Hit Deficit Goals\n' +
            '\n' +
            'But even if Reyes is right, the government’s financial plan published in June did refer to the “privatization” of assets, which it said would raise revenue equivalent to 0.8% of gross domestic product next year.\n' +
            '\n' +
            'When the government presented that plan, it seemed clear that it was going to sell public assets this year and next, but now it’s hard to tell what it will do, said Sergio Olarte, economist at Scotiabank Colpatria.\n' +
            '\n' +
            'Munir Jalil, head analyst at BTG Pactual’s Andes region, said he tended to give more weight to the ministry’s written documents than to Carrasquilla’s declarations.\n' +
            '\n' +
            '“There is more confusion around what the minister is saying in recent days,” Jalil said. “It is better to go with the text, because these days it’s difficult to trust in what they say.”\n' +
            '\n',
        imgUrl:'/images/carraspillo.jpg'});
});

module.exports = router;
