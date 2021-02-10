import onecandleChocoCake from '../../images/cakes/1candleChocoCake.png'
import twofloorBirthdayCake from '../../images/cakes/2floorBirthdayCake.png';
import twofloorCake from '../../images/cakes/2floorCake.png';
import twofloorChocoCake from '../../images/cakes/2floorChocoCake.png';
import twofloorMatchaCake from '../../images/cakes/2floorMatchaCake.png';
import threeStrawCake from '../../images/cakes/3strawCake.png';
import birthdayCake from '../../images/cakes/birthdayCake.png';
import blueberCheeseCake from '../../images/cakes/blueberCheeseCake.png';
import blueberryCheesePie from '../../images/cakes/blueberryCheesePie.png';
import cheeseCake from '../../images/cakes/cheeseCake.png';
import cherryCake from '../../images/cakes/cherryCake.png';
import chocoCake from '../../images/cakes/chocoCake.png';
import chocoCakePop from '../../images/cakes/chocoCake-pop.png';
import chocoCherryCake from '../../images/cakes/chocoCherryCake.png';
import heartCake from '../../images/cakes/heartCake.png';
import iceCreamCake from '../../images/cakes/ice-creamCake.png';
import iceCreamChocoCake from '../../images/cakes/ice-creamChocoCake.png';
import lovelyCake from '../../images/cakes/lovelyCake.png';
import lovelyStrawCake from '../../images/cakes/lovelyStrawCake.png';
import pieceOfCherryCake from '../../images/cakes/pieceOfCherryCake.png';
import pieceOfCherryPie from '../../images/cakes/pieceOfCherryPie.png';
import pieceOfMatchaCake from '../../images/cakes/pieceOfMatchaCake.png';
import pinkCake from '../../images/cakes/pinkCake.png';
import pinkCandlesbirthdayCake from '../../images/cakes/pinkCandlesbirthdayCake.png';
import pinkCherryCake from '../../images/cakes/pinkCherryCake.png';
import strawberryCake from '../../images/cakes/strawberryCake.png';
import strawberryCheeseCake from '../../images/cakes/strawCheeseCake.png';
import strawCupcake from '../../images/cakes/strawCupcake.png';
import vanillaCake from '../../images/cakes/vanillaCake.png';
import vanillaCherryCake from '../../images/cakes/vanillaCherryCake.png';
import weddingCake from '../../images/cakes/weddingCake.png';
import yellowCake from '../../images/cakes/yellowCake.png';

//hard ( 8x8 ) //32
const imgHard = [ 
    {src: onecandleChocoCake, alt: 'onecandleChocoCake'},
    {src: twofloorBirthdayCake, alt: 'twofloorBirthdayCake'},
    {src: twofloorCake, alt: 'twofloorCake'},
    {src: twofloorChocoCake, alt: 'twofloorChocoCake'},
    {src: twofloorMatchaCake, alt: 'twofloorMatchaCake'},
    {src: threeStrawCake, alt: 'threeStrawCake'},
    {src: birthdayCake, alt: 'birthdayCake'},
    {src: blueberCheeseCake, alt: 'blueberCheeseCake'},
    {src: blueberryCheesePie, alt: 'blueberryCheesePie'},
    {src: cheeseCake, alt: 'cheeseCake'},
    {src: cherryCake, alt: 'cherryCake'},
    {src: chocoCake, alt: 'chocoCake'},
    {src: chocoCakePop, alt: 'chocoCakePop'},
    {src: chocoCherryCake, alt: 'chocoCherryCake'},
    {src: heartCake, alt: 'heartCake'},
    {src: iceCreamCake, alt: 'iceCreamCake'},
    {src: iceCreamChocoCake, alt: 'iceCreamChocoCake'},
    {src: lovelyCake, alt: 'lovelyCake'},
    {src: lovelyStrawCake, alt: 'lovelyStrawCake'},
    {src: pieceOfCherryCake, alt: 'pieceOfCherryCake'},
    {src: pieceOfCherryPie, alt: 'pieceOfCherryPie'},
    {src: pieceOfMatchaCake, alt: 'pieceOfMatchaCake'},
    {src: pinkCake, alt: 'pinkCake'},
    {src: pinkCandlesbirthdayCake, alt: 'pinkCandlesbirthdayCake'},
    {src: pinkCherryCake, alt: 'pinkCherryCake'},
    {src: strawberryCake, alt: 'strawberryCake'},
    {src: strawberryCheeseCake, alt: 'strawberryCheeseCake'},
    {src: strawCupcake, alt: 'strawCupcake'},
    {src: vanillaCake, alt: 'vanillaCake'},
    {src: vanillaCherryCake, alt: 'vanillaCherryCake'},
    {src: weddingCake, alt: 'weddingCake'},
    {src: yellowCake, alt: 'yellowCake'}
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