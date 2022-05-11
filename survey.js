const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


/* What's your name? Nicknames are also acceptable :)
What's an activity you like doing?
What do you listen to while doing that?
Which meal is your favourite (eg: dinner, brunch, etc.)
What's your favourite thing to eat for that meal?
Which sport is your absolute favourite?
What is your superpower? In a few words, tell us what you are amazing at!
 */
let user = {}

rl.question("What's your name? Nicknames are also acceptable :)", (nickname) => {
  user.nickname = nickname;
  rl.question("What's an activity you like doing?", (activity) => {
    user.activity = activity;
    rl.question("What do you listen to while doing that?", (favoriteMusic) => {
      user.favoriteMusic = favoriteMusic;
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (favoriteMeal) => {
        user.favoriteMeal = favoriteMeal;
        rl.question("What's your favourite thing to eat for that meal?", (favoriteThingsToEat) => {
          user.favoriteThingsToEat = favoriteThingsToEat;
          rl.question("Which sport is your absolute favourite?", (favoriteSpot) => {
            user.favoriteSpot = favoriteSpot;
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (superpower) => {
              user.superpower = superpower;
              rl.close();
              
              const template = `${user.nickname} loves listening to ${user.favoriteMusic} while ${user.activity}, devouring ${user.favoriteThingsToEat} for ${user.favoriteMeal}, prefers ${user.favoriteSpot} over any other sport, and is amazing at ${user.superpower}.\n`

              process.stdout.write(template);
            })
          })
        })
      });
    });
  });
  //rl.close();
});
