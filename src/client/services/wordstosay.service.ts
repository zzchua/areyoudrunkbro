import { Http, Headers, RequestOptions, Response }      from '@angular/http';
import { Injectable }                                   from '@angular/core';
import { Observable }                                   from 'rxjs/Observable';
import { Constants }                                    from './../constants';


@Injectable()
export class WordsToSay {
    quotes: Array<string> = [
        "Peter Piper picked a peck of pickled peppers",
        "Betty Botter bought some butter ",
        "How much wood would a woodchuck chuck if a woodchuck could chuck wood?",
        "She sells seashells by the seashore",
        "How can a clam cram in a clean cream can?",
        "I scream, you scream, we all scream for ice cream",
        "I saw Susie sitting in a shoeshine shop",
        "Fuzzy Wuzzy was a bear. Fuzzy Wuzzy had no hair.",
        "Can you can a can as a canner can can a can?",
        "I have got a date at a quarter to eight",
        "I saw a kitten eating chicken in the kitchen",
        "If a dog chews shoes, whose shoes does he choose?",
        "I thought I thought of thinking of thanking you",
        "I wish to wash my Irish wristwatch",
        "Near an ear, a nearer ear, a nearly eerie ear",
        "Willie’s really weary",
        "A big black bear sat on a big black rug",
        "Tom threw Tim three thumbtacks",
        "He threw three free throws",
        "Nine nice night nurses nursing nicely",
        "So, this is the sushi chef",
        "Four fine fresh fish for you",
        "Wayne went to wales to watch walruses",
        "Six sticky skeletons Six sticky skeletons Six sticky skeletons",
        "Which witch is which? Which witch is which? Which witch is which?",
        "Snap crackle pop Snap crackle pop Snap crackle pop",
        "Red Buick, blue Buick, Red Buick, blue Buick, Red Buick, blue Buick",
        "Red lorry, yellow lorry, Red lorry, yellow lorry, Red lorry, yellow lorry",
        "Thin sticks, thick bricks, Thin sticks, thick bricks, Thin sticks, thick bricks",
        "Stupid superstition, Stupid superstition, Stupid superstition",
        "Eleven benevolent elephants, Eleven benevolent elephants, Eleven benevolent elephants",
        "Two tried and true tridents, Two tried and true tridents, Two tried and true tridents",
        "Black back bat, Black back bat, Black back bat",
        "Truly rural, Truly rural, Truly rural",
        "Good blood, bad blood, Good blood, bad blood, Good blood, bad blood",
        "Pre-shrunk silk shirts, Pre-shrunk silk shirts, Pre-shrunk silk shirts",
        "Ed had edited it, Ed had edited it, Ed had edited it.",
        "We surely shall see the sun shine soon",
        "Which wristwatches are Swiss wristwatches?",
        "Fred fed Ted bread, and Ted fed Fred bread",
        "I slit the sheet, the sheet I slit, and on the slitted sheet I sit",
        "A skunk sat on a stump and thunk the stump stunk, but the stump thunk the skunk stunk",
        "Lesser leather never weathered wetter weather better",
    ]

}