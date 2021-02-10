import threewhiteFlowers from '../../images/plants/3whiteFlowers.png';
import aloeVera from '../../images/plants/aloe-vera.png';
import bamboo from '../../images/plants/bamboo.png';
import bananaPlant from '../../images/plants/bananaPlant.png';
import bean from '../../images/plants/bean.png';
import bonsai from '../../images/plants/bonsai.png';
import cactusInBlue from '../../images/plants/cactusInBlue.png';
import cactusInDarkBrown from '../../images/plants/cactusInDarkBrown.png';
import cactusInLightBrown from '../../images/plants/cactusInLightBrown.png';
import cactusWflower from '../../images/plants/cactusWflower.png';
import celery from '../../images/plants/celery.png';
import christmasTree from '../../images/plants/christmas-tree.png';
import cotton from '../../images/plants/cotton.png';
import darkRose from '../../images/plants/darkRose.png';
import kalanchoe from '../../images/plants/kalanchoe.png';
import lavender from '../../images/plants/lavender.png';
import moneyTree from '../../images/plants/money-tree.png';
import oak from '../../images/plants/oak.png';
import orangeSunflower from '../../images/plants/orangeSunflower.png';
import plantInRed from '../../images/plants/plantInRed.png';
import redViolet from '../../images/plants/redViolet.png';
import sakura from '../../images/plants/sakura.png';
import sansevieria from '../../images/plants/sansevieria.png';
import sansevieriaTrifasciata from '../../images/plants/sansevieriaTrifasciata.png';
import sprout from '../../images/plants/sprout.png';
import succulentInLightBrown from '../../images/plants/succulentInLightBrown.png';
import succulentInWhite from '../../images/plants/succulentInWhite.png';
import sunflower from '../../images/plants/sunflower.png';
import twoRedflowers from '../../images/plants/twoRedflowers.png';
import vaseW3flowers from '../../images/plants/vaseW3flowers.png';
import wheat from '../../images/plants/wheat.png';
import wildflowers from '../../images/plants/wildflowers.png';

const imgHard = [
    {src: threewhiteFlowers, alt: 'threewhiteFlowers'},
    {src: aloeVera, alt: 'aloeVera'},
    {src: bamboo, alt: 'bamboo'},
    {src: bananaPlant, alt: 'bananaPlant'},
    {src: bean, alt: 'bean'},
    {src: bonsai, alt: 'bonsai'},
    {src: cactusInBlue, alt: 'cactusInBlue'},
    {src: cactusInDarkBrown, alt: 'cactusInDarkBrown'},
    {src: cactusInLightBrown, alt: 'cactusInLightBrown'},
    {src: cactusWflower, alt: 'cactusWflower'},
    {src: celery, alt: 'celery'},
    {src: christmasTree, alt: 'christmasTree'},
    {src: cotton, alt: 'cotton'},
    {src: darkRose, alt: 'darkRose'},
    {src: kalanchoe, alt: 'kalanchoe'},
    {src: lavender, alt: 'lavender'},
    {src: moneyTree, alt: 'moneyTree'},
    {src: oak, alt: 'oak'},
    {src: orangeSunflower, alt: 'orangeSunflower'},
    {src: plantInRed, alt: 'plantInRed'},
    {src: redViolet, alt: 'redViolet'},
    {src: sakura, alt: 'sakura'},
    {src: sansevieria, alt: 'sansevieria'},
    {src: sansevieriaTrifasciata, alt: 'sansevieriaTrifasciata'},
    {src: sprout, alt: 'sprout'},
    {src: succulentInLightBrown, alt: 'succulentInLightBrown'},
    {src: succulentInWhite, alt: 'strawberryCheeseCake'},
    {src: sunflower, alt: 'sunflower'},
    {src: twoRedflowers, alt: 'twoRedflowers'},
    {src: vaseW3flowers, alt: 'vaseW3flowers'},
    {src: wheat, alt: 'wheat'},
    {src: wildflowers, alt: 'wildflowers'}
]

const imgMid = [], imgEasy = [];

imgHard.forEach(el => {
    imgMid.push(el);
    imgEasy.push(el);
});

//medium ( 6x6 ) //18
imgMid.splice(18);
//easy (4 colums x 4 rows) //8
imgEasy.splice(8);

export {imgHard, imgMid, imgEasy};