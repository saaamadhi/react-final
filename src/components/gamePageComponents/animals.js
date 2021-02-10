import bull from '../../images/animals/bull.png'
import pig from '../../images/animals/pig.png';
import sheep from '../../images/animals/sheep.png';
import cheetah from '../../images/animals/cheetah.png';
import cow from '../../images/animals/cow.png';
import buffalo from '../../images/animals/buffalo.png';
import panda from '../../images/animals/panda.png';
import lion from '../../images/animals/lion.png';
import bear from '../../images/animals/bear.png';
import antelope from '../../images/animals/antelope.png';
import chicken from '../../images/animals/chicken.png';
import leopard from '../../images/animals/leopard.png';
import wolf from '../../images/animals/wolf.png';
import terrier from '../../images/animals/terrier.png';
import labrador from '../../images/animals/labrador.png';
import owl from '../../images/animals/owl.png';
import squirrel from '../../images/animals/squirrel.png';
import rhinoceros from '../../images/animals/rhinoceros.png';
import rabbit from '../../images/animals/rabbit.png';
import giraffe from '../../images/animals/giraffe.png';
import horse from '../../images/animals/horse.png';
import greyCat from '../../images/animals/greyCat.png';
import snail from '../../images/animals/snail.png';
import chameleon from '../../images/animals/chameleon.png';
import flamingo from '../../images/animals/flamingo.png';
import donkey from '../../images/animals/donkey.png';
import elephant from '../../images/animals/elephant.png';
import hen from '../../images/animals/hen.png';
import hasky from '../../images/animals/hasky.png';
import peachCat from '../../images/animals/peachCat.png';
import goose from '../../images/animals/goose.png';
import bison from '../../images/animals/bison.png';

//hard ( 8x8 ) //32
const imgHard = [ 
    {src: bull, alt: 'bull'},
    {src: pig, alt: 'pig'},
    {src: sheep, alt: 'sheep'},
    {src: cheetah, alt: 'cheetah'},
    {src: cow, alt: 'cow'},
    {src: buffalo, alt: 'buffalo'},
    {src: panda, alt: 'panda'},
    {src: lion, alt: 'lion'},
    {src: bear, alt: 'bear'},
    {src: antelope, alt: 'antelope'},
    {src: chicken, alt: 'chicken'},
    {src: leopard, alt: 'leopard'},
    {src: wolf, alt: 'wolf'},
    {src: terrier, alt: 'terrier'},
    {src: labrador, alt: 'labrador'},
    {src: owl, alt: 'owl'},
    {src: squirrel, alt: 'squirrel'},
    {src: rhinoceros, alt: 'rhinoceros'},
    {src: rabbit, alt: 'rabbit'},
    {src: giraffe, alt: 'giraffe'},
    {src: horse, alt: 'horse'},
    {src: greyCat, alt: 'greyCat'},
    {src: snail, alt: 'snail'},
    {src: chameleon, alt: 'chameleon'},
    {src: flamingo, alt: 'flamingo'},
    {src: donkey, alt: 'donkey'},
    {src: elephant, alt: 'elephant'},
    {src: hen, alt: 'hen'},
    {src: hasky, alt: 'hasky'},
    {src: peachCat, alt: 'peachCat'},
    {src: goose, alt: 'goose'},
    {src: bison, alt: 'bison'}
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