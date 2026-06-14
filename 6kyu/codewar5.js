/*
Given his short hand notation as string, calculate the points a player scored in a set.

He codes the ball colors with letters:

- R  = red     -->  1 point
- Y  = yellow  -->  2 points
- G  = green   -->  3 points
- Bn = brown   -->  4 points
- Be = blue    -->  5 points
- P  = pink    -->  6 points
- Bk = black   -->  7 points
- W  = white   -->  no points because it's a foul
The color may be followed by a number, e.g. R12 would stand for 12 red balls pocketed. If there is no number given, the ball was pocketed once.

Notes:

If the string includes the white ball, return 'Foul'
If the total score is more than 147, return 'invalid data'
For your convenience the points for each color are provided as hash / dictionary with the name blz

Examples
'R15P3G1Bk4Y1Bn1Be3'          -->  85
'R13Bk14YRGBnBkRBePBk1'       -->  147
'G9G11P9Bn2Bn1Be10G7WBn10G3'  -->  'Foul'
'Bn14Bn14Bn8P9'               -->  'invalid data'
*/

//1. First store the codes of the colors in an object with the specific value they are equal.
//2. Check whether the string includes w within it and return foul
//3. Use match method with a regex to check every single digit and number following it
//4. Then iterate over the returned array and store the colour and count of every colour
//5. Then if the count is not there let it store 1
//6. then calculate the sum and if it is greater than 147 return invalid data.
function frame(balls) {
    const blz = {
        R: 1,
        Y: 2,
        G: 3,
        Bn: 4,
        Be: 5,
        P: 6,
        Bk: 7
    };
    if (balls.includes("W")) {
        return "Foul";
    }
    let total = 0;

    // Split into pieces like ["R15", "P3", "G1", "Bk4"]
    const receiver = balls.match(/Bn\d*|Be\d*|Bk\d*|R\d*|Y\d*|G\d*|P\d*/g) || [];
   
    for (let ball of receiver) {
        let color;
        let count;

        if (ball.startsWith("Bn") || ball.startsWith("Be") || ball.startsWith("Bk")) {
            color = ball.slice(0, 2);
            count = ball.slice(2);
        } else {
            color = ball[0];
            count = ball.slice(1);
        }
        count = (count === "") ? 1 : Number(count);

        total += blz[color] * count;
    }
    return total > 147 ? "invalid data" : total;
}

console.log(frame("R15Bk15YGBnBePBk"));