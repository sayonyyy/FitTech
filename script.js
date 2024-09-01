
function showCategories() {
    document.getElementById('main-section').classList.add('hidden');
    document.getElementById('categories-section').classList.remove('hidden');
}

function showSports() {
    document.getElementById('categories-section').classList.add('hidden');
    document.getElementById('sports-section').classList.remove('hidden');
}
function showExercise() {
    document.getElementById('categories-section').classList.add('hidden');
    document.getElementById('exercise-section').classList.remove('hidden');
}

function showFootballOptions() {
    document.getElementById('sports-section').classList.add('hidden');
    document.getElementById('football-options').classList.remove('hidden');
}
function showCricketOptions() {
    document.getElementById('sports-section').classList.add('hidden');
    document.getElementById('cricket-options').classList.remove('hidden');
}
function showBasketballOptions() {
    document.getElementById('sports-section').classList.add('hidden');
    document.getElementById('basketball-options').classList.remove('hidden');
}
function showBadmintonOptions() {
    document.getElementById('sports-section').classList.add('hidden');
    document.getElementById('badminton-options').classList.remove('hidden');
}
function showTennisOptions() {
    document.getElementById('sports-section').classList.add('hidden');
    document.getElementById('tennis-options').classList.remove('hidden');
}
function showHockeyOptions() {
    document.getElementById('sports-section').classList.add('hidden');
    document.getElementById('hockey-options').classList.remove('hidden');
}
function showBaseballOptions() {
    document.getElementById('sports-section').classList.add('hidden');
    document.getElementById('baseball-options').classList.remove('hidden');
}
function showRugbyOptions() {
    document.getElementById('sports-section').classList.add('hidden');
    document.getElementById('rugby-options').classList.remove('hidden');
}
function showBoxingOptions() {
    document.getElementById('sports-section').classList.add('hidden');
    document.getElementById('boxing-options').classList.remove('hidden');
}
function showJudoOptions() {
    document.getElementById('sports-section').classList.add('hidden');
    document.getElementById('judo-options').classList.remove('hidden');
}





function showPushupOptions() {
    document.getElementById('exercise-section').classList.add('hidden');
    document.getElementById('pushup-options').classList.remove('hidden');
}
function showSitupOptions() {
    document.getElementById('exercise-section').classList.add('hidden');
    document.getElementById('situp-options').classList.remove('hidden');
}
function showJumpingjacksOptions() {
    document.getElementById('exercise-section').classList.add('hidden');
    document.getElementById('jumpingjacks-options').classList.remove('hidden');
}
function showBurpeesOptions() {
    document.getElementById('exercise-section').classList.add('hidden');
    document.getElementById('burpees-options').classList.remove('hidden');
}
function showLightcardioOptions() {
    document.getElementById('exercise-section').classList.add('hidden');
    document.getElementById('lightcardio-options').classList.remove('hidden');
}
function showSquatsOptions() {
    document.getElementById('exercise-section').classList.add('hidden');
    document.getElementById('squats-options').classList.remove('hidden');
}
function showShoulderpressOptions() {
    document.getElementById('exercise-section').classList.add('hidden');
    document.getElementById('shoulderpress-options').classList.remove('hidden');
}
function showsBenchpressOptions() {
    document.getElementById('exercise-section').classList.add('hidden');
    document.getElementById('benchpress-options').classList.remove('hidden');
}
function showPlanksOptions() {
    document.getElementById('exercise-section').classList.add('hidden');
    document.getElementById('planks-options').classList.remove('hidden');
}
function showRunningOptions() {
    document.getElementById('exercise-section').classList.add('hidden');
    document.getElementById('running-options').classList.remove('hidden');
}








function displayFootballDiet() {
    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);
    let result = '';

    if (weight < 30 && height > 4.5 && height <= 5.0) result = 'diet1';
    if (weight < 30 && height > 5 && height <= 5.5) result = 'diet2';
    if (weight < 30 && height > 5.5 && height <= 6) result = 'diet3';
    if (weight < 30 && height > 6 && height <= 6.5) result = 'diet4';
    if (weight >= 30 && weight < 45 && height >= 4.5 && height < 5.0) result = 'diet5';
    if (weight >= 30 && weight < 45 && height > 5 && height < 5.5) result = 'diet6';
    if (weight >= 30 && weight < 45 && height > 5.5 && height < 6) result = 'diet7';
    if (weight >= 30 && weight < 45 && height > 6 && height < 6.5) result = 'diet8';
    if (weight >= 45 && weight < 55 && height > 4.5 && height < 5.0) result = 'diet9';
    if (weight >= 45 && weight < 55 && height > 5 && height < 5.5) result = 'diet10';
    if (weight >= 45 && weight < 55 && height > 5.5 && height < 6) result = 'diet11'; 
    if (weight >= 45 && weight < 55 && height > 6 && height < 6.5) result = 'diet12';
    if (weight >= 55 && weight < 65 && height > 4.5 && height < 5.0) result = 'diet13';
    if (weight >= 55 && weight < 65 && height > 5 && height < 5.5) result = 'diet14';
    if (weight >= 55 && weight < 65 && height > 5.5 && height < 6) result = 'diet15';
    if (weight >= 55 && weight < 65 && height > 6 && height < 6.5) result = 'diet16';
    if (weight >= 65 && weight < 75 && height > 4.5 && height < 5.0) result = 'diet17';
    if (weight >= 65 && weight < 75 && height > 5 && height < 5.5) result = 'diet18';
    if (weight >= 65 && weight < 75 && height > 5.5 && height < 6) result = 'diet19';
    if (weight >= 65 && weight < 75 && height > 6 && height < 6.5) result = 'diet20';
    if (weight >= 75 && weight < 85 && height > 4.5 && height < 5.0) result = 'diet21';
    if (weight >= 75 && weight < 85 && height > 5 && height < 5.5) result = 'diet22';
    if (weight >= 75 && weight < 85 && height > 5.5 && height < 6) result = 'diet23';
    if (weight >= 75 && weight < 85 && height > 6 && height < 6.5) result = 'diet24';
    if (weight >= 85 && weight < 100 && height > 4.5 && height < 5) result = 'diet25';
    if (weight >= 85 && weight < 100 && height > 5 && height < 5.5) result = 'diet26';
    if (weight >= 85 && weight < 100 && height > 5.5 && height < 6) result = 'diet27';
    if (weight >= 85 && weight < 100 && height > 6 && height < 6.5) result = 'diet28';

    document.getElementById('result').innerText = result;
    document.getElementById('football-options').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
}



function displayCricketDiet() {
    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);
    let result = '';

    if (weight < 30 && height > 4.5 && height < 5.0) result = 'C diet1';
    if (weight < 30 && height > 5 && height < 5.5) result = 'C diet2';
    if (weight < 30 && height > 5.5 && height < 6) result = 'C diet3';
    if (weight < 30 && height > 6 && height < 6.5) result = 'C diet4';
    if (weight >= 30 && weight < 45 && height > 4.5 && height < 5.0) result = 'C diet5';
    if (weight >= 30 && weight < 45 && height > 5 && height < 5.5) result = 'C diet6';
    if (weight >= 30 && weight < 45 && height > 5.5 && height < 6) result = 'C diet7';
    if (weight >= 30 && weight < 45 && height > 6 && height < 6.5) result = 'C diet8';
    if (weight >= 45 && weight < 55 && height > 4.5 && height < 5.0) result = 'C diet9';
    if (weight >= 45 && weight < 55 && height > 5 && height < 5.5) result = 'C diet10';
    if (weight >= 45 && weight < 55 && height > 5.5 && height < 6) result = 'C diet11';
    if (weight >= 45 && weight < 55 && height > 6 && height < 6.5) result = 'C diet12';
    if (weight >= 55 && weight < 65 && height > 4.5 && height < 5.0) result = 'C diet13';
    if (weight >= 55 && weight < 65 && height > 5 && height < 5.5) result = 'C diet14';
    if (weight >= 55 && weight < 65 && height > 5.5 && height < 6) result = 'C diet15';
    if (weight >= 55 && weight < 65 && height > 6 && height < 6.5) result = 'C diet16';
    if (weight >= 65 && weight < 75 && height > 4.5 && height < 5.0) result = 'C diet17';
    if (weight >= 65 && weight < 75 && height > 5 && height < 5.5) result = 'C diet18';
    if (weight >= 65 && weight < 75 && height > 5.5 && height < 6) result = 'C diet19';
    if (weight >= 65 && weight < 75 && height > 6 && height < 6.5) result = 'C diet20';
    if (weight >= 75 && weight < 85 && height > 4.5 && height < 5.0) result = 'C diet21';
    if (weight >= 75 && weight < 85 && height > 5 && height < 5.5) result = 'C diet22';
    if (weight >= 75 && weight < 85 && height > 5.5 && height < 6) result = 'C diet23';
    if (weight >= 75 && weight < 85 && height > 6 && height < 6.5) result = 'C diet24';
    if (weight >= 85 && weight < 100 && height > 4.5 && height < 5) result = ' C diet25';
    if (weight >= 85 && weight < 100 && height > 5 && height < 5.5) result = 'C diet26';
    if (weight >= 85 && weight < 100 && height > 5.5 && height < 6) result = 'C diet27';
    if (weight >= 85 && weight < 100 && height > 6 && height < 6.5) result = 'C diet28';

    document.getElementById('result').innerText = result;
    document.getElementById('cricket-options').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
}

function displayBasketballDiet() {
    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);
    let result = '';

    if (weight < 30 && height > 4.5 && height < 5.0) result = 'B diet1';
    if (weight < 30 && height > 5 && height < 5.5) result = 'B diet2';
    if (weight < 30 && height > 5.5 && height < 6) result = 'B diet3';
    if (weight < 30 && height > 6 && height < 6.5) result = 'B diet4';
    if (weight >= 30 && weight < 45 && height > 4.5 && height < 5.0) result = 'B diet5';
    if (weight >= 30 && weight < 45 && height > 5 && height < 5.5) result = 'B diet6';
    if (weight >= 30 && weight < 45 && height > 5.5 && height < 6) result = 'B diet7';
    if (weight >= 30 && weight < 45 && height > 6 && height < 6.5) result = 'B diet8';
    if (weight >= 45 && weight < 55 && height > 4.5 && height < 5.0) result = 'B diet9';
    if (weight >= 45 && weight < 55 && height > 5 && height < 5.5) result = 'B diet10';
    if (weight >= 45 && weight < 55 && height > 5.5 && height < 6) result = 'B diet11';
    if (weight >= 45 && weight < 55 && height > 6 && height < 6.5) result = 'B diet12';
    if (weight >= 55 && weight < 65 && height > 4.5 && height < 5.0) result = 'B diet13';
    if (weight >= 55 && weight < 65 && height > 5 && height < 5.5) result = 'B  diet14';
    if (weight >= 55 && weight < 65 && height > 5.5 && height < 6) result = 'B diet15';
    if (weight >= 55 && weight < 65 && height > 6 && height < 6.5) result = 'B diet16';
    if (weight >= 65 && weight < 75 && height > 4.5 && height < 5.0) result = 'B diet17';
    if (weight >= 65 && weight < 75 && height > 5 && height < 5.5) result = 'B diet18';
    if (weight >= 65 && weight < 75 && height > 5.5 && height < 6) result = 'B diet19';
    if (weight >= 65 && weight < 75 && height > 6 && height < 6.5) result = 'B diet20';
    if (weight >= 75 && weight < 85 && height > 4.5 && height < 5.0) result = 'B diet21';
    if (weight >= 75 && weight < 85 && height > 5 && height < 5.5) result = 'B diet22';
    if (weight >= 75 && weight < 85 && height > 5.5 && height < 6) result = 'B diet23';
    if (weight >= 75 && weight < 85 && height > 6 && height < 6.5) result = 'B diet24';
    if (weight >= 85 && weight < 100 && height > 4.5 && height < 5) result = 'B diet25';
    if (weight >= 85 && weight < 100 && height > 5 && height < 5.5) result = 'B diet26';
    if (weight >= 85 && weight < 100 && height > 5.5 && height < 6) result = 'B diet27';
    if (weight >= 85 && weight < 100 && height > 6 && height < 6.5) result = 'B diet28';

    document.getElementById('result').innerText = result;
    document.getElementById('basketball-options').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
}

function displayExerciseDiet() {
    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);
    let result = '';

    if (weight < 30 && height > 4.5 && height < 5.0) result = 'E diet1';
    if (weight < 30 && height > 5 && height < 5.5) result = 'E diet2';
    if (weight < 30 && height > 5.5 && height < 6) result = 'E diet3';
    if (weight < 30 && height > 6 && height < 6.5) result = 'E diet4';
    if (weight >= 30 && weight < 45 && height > 4.5 && height < 5.0) result = 'E diet5';
    if (weight >= 30 && weight < 45 && height > 5 && height < 5.5) result = 'E diet6';
    if (weight >= 30 && weight < 45 && height > 5.5 && height < 6) result = 'E diet7';
    if (weight >= 30 && weight < 45 && height > 6 && height < 6.5) result = 'E diet8';
    if (weight >= 45 && weight < 55 && height > 4.5 && height < 5.0) result = 'E diet9';
    if (weight >= 45 && weight < 55 && height > 5 && height < 5.5) result = 'E diet10';
    if (weight >= 45 && weight < 55 && height > 5.5 && height < 6) result = 'E diet11';
    if (weight >= 45 && weight < 55 && height > 6 && height < 6.5) result = 'E diet12';
    if (weight >= 55 && weight < 65 && height > 4.5 && height < 5.0) result = 'E diet13';
    if (weight >= 55 && weight < 65 && height > 5 && height < 5.5) result = 'E diet14';
    if (weight >= 55 && weight < 65 && height > 5.5 && height < 6) result = 'E diet15';
    if (weight >= 55 && weight < 65 && height > 6 && height < 6.5) result = 'E diet16';
    if (weight >= 65 && weight < 75 && height > 4.5 && height < 5.0) result = 'E diet17';
    if (weight >= 65 && weight < 75 && height > 5 && height < 5.5) result = 'E diet18';
    if (weight >= 65 && weight < 75 && height > 5.5 && height < 6) result = 'E diet19';
    if (weight >= 65 && weight < 75 && height > 6 && height < 6.5) result = 'E diet20';
    if (weight >= 75 && weight < 85 && height > 4.5 && height < 5.0) result = 'E diet21';
    if (weight >= 75 && weight < 85 && height > 5 && height < 5.5) result = 'E diet22';
    if (weight >= 75 && weight < 85 && height > 5.5 && height < 6) result = 'E diet23';
    if (weight >= 75 && weight < 85 && height > 6 && height < 6.5) result = 'E diet24';
    if (weight >= 85 && weight < 100 && height > 4.5 && height < 5) result = ' E diet25';
    if (weight >= 85 && weight < 100 && height > 5 && height < 5.5) result = 'E diet26';
    if (weight >= 85 && weight < 100 && height > 5.5 && height < 6) result = 'E diet27';
    if (weight >= 85 && weight < 100 && height > 6 && height < 6.5) result = 'E diet28';

    document.getElementById('result').innerText = result;
    document.getElementById('pushup-options').classList.add('hidden');
    document.getElementById('situp-options').classList.add('hidden');
    document.getElementById('jumpingjacks-options').classList.add('hidden');
    document.getElementById('burpees-options').classList.add('hidden');
    document.getElementById('lightcardio-options').classList.add('hidden');
    document.getElementById('squats-options').classList.add('hidden');
    document.getElementById('shoulderpress-options').classList.add('hidden');
    document.getElementById('benchpress-options').classList.add('hidden');
    document.getElementById('planks-options').classList.add('hidden');
    document.getElementById('running-options').classList.add('hidden');

    document.getElementById('result').classList.remove('hidden');
}
function displayBadmintonDiet() {
    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);
    let result = '';

    if (weight < 30 && height > 4.5 && height < 5.0) result = 'a diet1';
    if (weight < 30 && height > 5 && height < 5.5) result = 'a diet2';
    if (weight < 30 && height > 5.5 && height < 6) result = 'a diet3';
    if (weight < 30 && height > 6 && height < 6.5) result = 'a diet4';
    if (weight >= 30 && weight < 45 && height > 4.5 && height < 5.0) result = 'a diet5';
    if (weight >= 30 && weight < 45 && height > 5 && height < 5.5) result = 'a diet6';
    if (weight >= 30 && weight < 45 && height > 5.5 && height < 6) result = 'a diet7';
    if (weight >= 30 && weight < 45 && height > 6 && height < 6.5) result = 'a diet8';
    if (weight >= 45 && weight < 55 && height > 4.5 && height < 5.0) result = 'a diet9';
    if (weight >= 45 && weight < 55 && height > 5 && height < 5.5) result = 'a diet10';
    if (weight >= 45 && weight < 55 && height > 5.5 && height < 6) result = 'a diet11';
    if (weight >= 45 && weight < 55 && height > 6 && height < 6.5) result = 'a diet12';
    if (weight >= 55 && weight < 65 && height > 4.5 && height < 5.0) result = 'a diet13';
    if (weight >= 55 && weight < 65 && height > 5 && height < 5.5) result = 'a diet14';
    if (weight >= 55 && weight < 65 && height > 5.5 && height < 6) result = 'a diet15';
    if (weight >= 55 && weight < 65 && height > 6 && height < 6.5) result = 'a diet16';
    if (weight >= 65 && weight < 75 && height > 4.5 && height < 5.0) result = 'a diet17';
    if (weight >= 65 && weight < 75 && height > 5 && height < 5.5) result = 'a diet18';
    if (weight >= 65 && weight < 75 && height > 5.5 && height < 6) result = 'Bd diet19';
    if (weight >= 65 && weight < 75 && height > 6 && height < 6.5) result = 'a diet20';
    if (weight >= 75 && weight < 85 && height > 4.5 && height < 5.0) result = 'a diet21';
    if (weight >= 75 && weight < 85 && height > 5 && height < 5.5) result = 'a diet22';
    if (weight >= 75 && weight < 85 && height > 5.5 && height < 6) result = 'a diet23';
    if (weight >= 75 && weight < 85 && height > 6 && height < 6.5) result = 'a diet24';
    if (weight >= 85 && weight < 100 && height > 4.5 && height < 5) result = ' a diet25';
    if (weight >= 85 && weight < 100 && height > 5 && height < 5.5) result = 'a diet26';
    if (weight >= 85 && weight < 100 && height > 5.5 && height < 6) result = 'a diet27';
    if (weight >= 85 && weight < 100 && height > 6 && height < 6.5) result = 'a diet28';

    document.getElementById('result').innerText = result;
    document.getElementById('badminton-options').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
}
function displayTennisDiet() {
    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);
    let result = '';

    if (weight < 30 && height > 4.5 && height < 5.0) result = 't diet1';
    if (weight < 30 && height > 5 && height < 5.5) result= 't diet2';
    if (weight < 30 && height > 5.5 && height < 6) result = 't diet3';
    if (weight < 30 && height > 6 && height < 6.5) result = 't diet4';
    if (weight >= 30 && weight < 45 && height > 4.5 && height < 5.0) result = 't diet5';
    if (weight >= 30 && weight < 45 && height > 5 && height < 5.5) result = 't diet6';
    if (weight >= 30 && weight < 45 && height > 5.5 && height < 6) result = 't diet7';
    if (weight >= 30 && weight < 45 && height > 6 && height < 6.5) result = 't diet8';
    if (weight >= 45 && weight < 55 && height > 4.5 && height < 5.0) result = 't diet9';
    if (weight >= 45 && weight < 55 && height > 5 && height < 5.5) result = 't diet10';
    if (weight >= 45 && weight < 55 && height > 5.5 && height < 6) result = 't diet11';
    if (weight >= 45 && weight < 55 && height > 6 && height < 6.5) result = 't diet12';
    if (weight >= 55 && weight < 65 && height > 4.5 && height < 5.0) result = 't diet13';
    if (weight >= 55 && weight < 65 && height > 5 && height < 5.5) result = 't diet14';
    if (weight >= 55 && weight < 65 && height > 5.5 && height < 6) result = 't diet15';
    if (weight >= 55 && weight < 65 && height > 6 && height < 6.5) result = 't diet16';
    if (weight >= 65 && weight < 75 && height > 4.5 && height < 5.0) result = 't diet17';
    if (weight >= 65 && weight < 75 && height > 5 && height < 5.5) result = 't diet18';
    if (weight >= 65 && weight < 75 && height > 5.5 && height < 6) result = 't diet19';
    if (weight >= 65 && weight < 75 && height > 6 && height < 6.5) result = 't diet20';
    if (weight >= 75 && weight < 85 && height > 4.5 && height < 5.0) result = 't diet21';
    if (weight >= 75 && weight < 85 && height > 5 && height < 5.5) result = 't diet22';
    if (weight >= 75 && weight < 85 && height > 5.5 && height < 6) result = 't diet23';
    if (weight >= 75 && weight < 85 && height > 6 && height < 6.5) result = 't diet24';
    if (weight >= 85 && weight < 100 && height > 4.5 && height < 5) result = 't diet25';
    if (weight >= 85 && weight < 100 && height > 5 && height < 5.5) result = 't diet26';
    if (weight >= 85 && weight < 100 && height > 5.5 && height < 6) result = 't diet27';
    if (weight >= 85 && weight < 100 && height > 6 && height < 6.5) result = 't diet28';

    document.getElementById('result').innerText = result;
    document.getElementById('tennis-options').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
}




function displayHockeyDiet() {
    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);
    let result = '';

    if (weight < 30 && height > 4.5 && height < 5.0) result = 'H diet1';
    if (weight < 30 && height > 5 && height < 5.5) result = 'H diet2';
    if (weight < 30 && height > 5.5 && height < 6) result = 'H diet3';
    if (weight < 30 && height > 6 && height < 6.5) result = 'H diet4';
    if (weight >= 30 && weight < 45 && height > 4.5 && height < 5.0) result = 'H diet5';
    if (weight >= 30 && weight < 45 && height > 5 && height < 5.5) result = 'H diet6';
    if (weight >= 30 && weight < 45 && height > 5.5 && height < 6) result = 'H diet7';
    if (weight >= 30 && weight < 45 && height > 6 && height < 6.5) result = 'H diet8';
    if (weight >= 45 && weight < 55 && height > 4.5 && height < 5.0) result = 'H diet9';
    if (weight >= 45 && weight < 55 && height > 5 && height < 5.5) result = 'H diet10';
    if (weight >= 45 && weight < 55 && height > 5.5 && height < 6) result = 'H diet11';
    if (weight >= 45 && weight < 55 && height > 6 && height < 6.5) result = 'H diet12';
    if (weight >= 55 && weight < 65 && height > 4.5 && height < 5.0) result = 'H diet13';
    if (weight >= 55 && weight < 65 && height > 5 && height < 5.5) result = 'H  diet14';
    if (weight >= 55 && weight < 65 && height > 5.5 && height < 6) result = 'H diet15';
    if (weight >= 55 && weight < 65 && height > 6 && height < 6.5) result = 'H diet16';
    if (weight >= 65 && weight < 75 && height > 4.5 && height < 5.0) result = 'H diet17';
    if (weight >= 65 && weight < 75 && height > 5 && height < 5.5) result = 'H diet18';
    if (weight >= 65 && weight < 75 && height > 5.5 && height < 6) result = 'H diet19';
    if (weight >= 65 && weight < 75 && height > 6 && height < 6.5) result = 'H diet20';
    if (weight >= 75 && weight < 85 && height > 4.5 && height < 5.0) result = 'H diet21';
    if (weight >= 75 && weight < 85 && height > 5 && height < 5.5) result = 'H diet22';
    if (weight >= 75 && weight < 85 && height > 5.5 && height < 6) result = 'H diet23';
    if (weight >= 75 && weight < 85 && height > 6 && height < 6.5) result = 'H diet24';
    if (weight >= 85 && weight < 100 && height > 4.5 && height < 5) result = 'H diet25';
    if (weight >= 85 && weight < 100 && height > 5 && height < 5.5) result = 'H diet26';
    if (weight >= 85 && weight < 100 && height > 5.5 && height < 6) result = 'H diet27';
    if (weight >= 85 && weight < 100 && height > 6 && height < 6.5) result = 'H diet28';

    document.getElementById('result').innerText = result;
    document.getElementById('hockey-options').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
}







function displayBaseballDiet() {
    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);
    let result = '';

    if (weight < 30 && height > 4.5 && height < 5.0) result = 'l diet1';
    if (weight < 30 && height > 5 && height < 5.5) result = 'l diet2';
    if (weight < 30 && height > 5.5 && height < 6) result = 'l diet3';
    if (weight < 30 && height > 6 && height < 6.5) result = 'l diet4';
    if (weight >= 30 && weight < 45 && height > 4.5 && height < 5.0) result = 'l diet5';
    if (weight >= 30 && weight < 45 && height > 5 && height < 5.5) result = 'l diet6';
    if (weight >= 30 && weight < 45 && height > 5.5 && height < 6) result = 'l diet7';
    if (weight >= 30 && weight < 45 && height > 6 && height < 6.5) result = 'l diet8';
    if (weight >= 45 && weight < 55 && height > 4.5 && height < 5.0) result = 'l diet9';
    if (weight >= 45 && weight < 55 && height > 5 && height < 5.5) result = 'l diet10';
    if (weight >= 45 && weight < 55 && height > 5.5 && height < 6) result = 'l diet11';
    if (weight >= 45 && weight < 55 && height > 6 && height < 6.5) result = 'l diet12';
    if (weight >= 55 && weight < 65 && height > 4.5 && height < 5.0) result = 'l diet13';
    if (weight >= 55 && weight < 65 && height > 5 && height < 5.5) result = 'l diet14';
    if (weight >= 55 && weight < 65 && height > 5.5 && height < 6) result = 'l diet15';
    if (weight >= 55 && weight < 65 && height > 6 && height < 6.5) result = 'l diet16';
    if (weight >= 65 && weight < 75 && height > 4.5 && height < 5.0) result = 'l diet17';
    if (weight >= 65 && weight < 75 && height > 5 && height < 5.5) result = 'l diet18';
    if (weight >= 65 && weight < 75 && height > 5.5 && height < 6) result = 'l diet19';
    if (weight >= 65 && weight < 75 && height > 6 && height < 6.5) result = 'l diet20';
    if (weight >= 75 && weight < 85 && height > 4.5 && height < 5.0) result = 'l diet21';
    if (weight >= 75 && weight < 85 && height > 5 && height < 5.5) result = 'l diet22';
    if (weight >= 75 && weight < 85 && height > 5.5 && height < 6) result = 'l diet23';
    if (weight >= 75 && weight < 85 && height > 6 && height < 6.5) result = 'l diet24';
    if (weight >= 85 && weight < 100 && height > 4.5 && height < 5) result = 'l diet25';
    if (weight >= 85 && weight < 100 && height > 5 && height < 5.5) result = 'l diet26';
    if (weight >= 85 && weight < 100 && height > 5.5 && height < 6) result = 'l diet27';
    if (weight >= 85 && weight < 100 && height > 6 && height < 6.5) result = 'l diet28';

    document.getElementById('result').innerText = result;
    document.getElementById('baseball-options').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
}
function displayRugbyDiet() {
    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);
    let result = '';

    if (weight < 30 && height > 4.5 && height < 5.0) result = 'R diet1';
    if (weight < 30 && height > 5 && height < 5.5) result = 'R diet2';
    if (weight < 30 && height > 5.5 && height < 6) result = 'R diet3';
    if (weight < 30 && height > 6 && height < 6.5) result = 'R diet4';
    if (weight >= 30 && weight < 45 && height > 4.5 && height < 5.0) result = 'R diet5';
    if (weight >= 30 && weight < 45 && height > 5 && height < 5.5) result = 'R diet6';
    if (weight >= 30 && weight < 45 && height > 5.5 && height < 6) result = 'R diet7';
    if (weight >= 30 && weight < 45 && height > 6 && height < 6.5) result = 'R diet8';
    if (weight >= 45 && weight < 55 && height > 4.5 && height < 5.0) result = 'R diet9';
    if (weight >= 45 && weight < 55 && height > 5 && height < 5.5) result = 'R diet10';
    if (weight >= 45 && weight < 55 && height > 5.5 && height < 6) result = 'R diet11';
    if (weight >= 45 && weight < 55 && height > 6 && height < 6.5) result = 'R diet12';
    if (weight >= 55 && weight < 65 && height > 4.5 && height < 5.0) result = 'R diet13';
    if (weight >= 55 && weight < 65 && height > 5 && height < 5.5) result = 'R diet14';
    if (weight >= 55 && weight < 65 && height > 5.5 && height < 6) result = 'R diet15';
    if (weight >= 55 && weight < 65 && height > 6 && height < 6.5) result = 'R diet16';
    if (weight >= 65 && weight < 75 && height > 4.5 && height < 5.0) result = 'R diet17';
    if (weight >= 65 && weight < 75 && height > 5 && height < 5.5) result = 'R diet18';
    if (weight >= 65 && weight < 75 && height > 5.5 && height < 6) result = 'R diet19';
    if (weight >= 65 && weight < 75 && height > 6 && height < 6.5) result = 'R diet20';
    if (weight >= 75 && weight < 85 && height > 4.5 && height < 5.0) result = 'R diet21';
    if (weight >= 75 && weight < 85 && height > 5 && height < 5.5) result = 'R diet22';
    if (weight >= 75 && weight < 85 && height > 5.5 && height < 6) result = 'R diet23';
    if (weight >= 75 && weight < 85 && height > 6 && height < 6.5) result = 'R diet24';
    if (weight >= 85 && weight < 100 && height > 4.5 && height < 5) result = 'R diet25';
    if (weight >= 85 && weight < 100 && height > 5 && height < 5.5) result = 'R diet26';
    if (weight >= 85 && weight < 100 && height > 5.5 && height < 6) result = 'R diet27';
    if (weight >= 85 && weight < 100 && height > 6 && height < 6.5) result = 'R diet28';

    document.getElementById('result').innerText = result;
    document.getElementById('rugby-options').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');

}

function displayBoxingDiet() {
    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);
    let result = '';

    if (weight < 30 && height > 4.5 && height < 5.0) result = 'o diet1';
    if (weight < 30 && height > 5 && height < 5.5) result = 'o diet2';
    if (weight < 30 && height > 5.5 && height < 6) result = 'o diet3';
    if (weight < 30 && height > 6 && height < 6.5) result = 'o diet4';
    if (weight >= 30 && weight < 45 && height > 4.5 && height < 5.0) result = 'o diet5';
    if (weight >= 30 && weight < 45 && height > 5 && height < 5.5) result = 'o diet6';
    if (weight >= 30 && weight < 45 && height > 5.5 && height < 6) result = 'o diet7';
    if (weight >= 30 && weight < 45 && height > 6 && height < 6.5) result = 'o diet8';
    if (weight >= 45 && weight < 55 && height > 4.5 && height < 5.0) result = 'o diet9';
    if (weight >= 45 && weight < 55 && height > 5 && height < 5.5) result = 'o diet10';
    if (weight >= 45 && weight < 55 && height > 5.5 && height < 6) result = 'o diet11';
    if (weight >= 45 && weight < 55 && height > 6 && height < 6.5) result = 'o diet12';
    if (weight >= 55 && weight < 65 && height > 4.5 && height < 5.0) result = 'o diet13';
    if (weight >= 55 && weight < 65 && height > 5 && height < 5.5) result = 'o diet14';
    if (weight >= 55 && weight < 65 && height > 5.5 && height < 6) result = 'o diet15';
    if (weight >= 55 && weight < 65 && height > 6 && height < 6.5) result = 'o diet16';
    if (weight >= 65 && weight < 75 && height > 4.5 && height < 5.0) result = 'o diet17';
    if (weight >= 65 && weight < 75 && height > 5 && height < 5.5) result = 'o diet18';
    if (weight >= 65 && weight < 75 && height > 5.5 && height < 6) result = 'o diet19';
    if (weight >= 65 && weight < 75 && height > 6 && height < 6.5) result = 'o diet20';
    if (weight >= 75 && weight < 85 && height > 4.5 && height < 5.0) result = 'o diet21';
    if (weight >= 75 && weight < 85 && height > 5 && height < 5.5) result = 'o diet22';
    if (weight >= 75 && weight < 85 && height > 5.5 && height < 6) result = 'o diet23';
    if (weight >= 75 && weight < 85 && height > 6 && height < 6.5) result = 'o diet24';
    if (weight >= 85 && weight < 100 && height > 4.5 && height < 5) result = 'o diet25';
    if (weight >= 85 && weight < 100 && height > 5 && height < 5.5) result = 'o diet26';
    if (weight >= 85 && weight < 100 && height > 5.5 && height < 6) result = 'o diet27';
    if (weight >= 85 && weight < 100 && height > 6 && height < 6.5) result = 'o diet28';

    document.getElementById('result').innerText = result;
    document.getElementById('boxing-options').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
}
function displayJudoDiet() {
    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);
    let result = '';

    if (weight < 30 && height > 4.5 && height < 5.0) result = 'u  diet1';
    if (weight < 30 && height > 5 && height < 5.5) result = 'u diet2';
    if (weight < 30 && height > 5.5 && height < 6) result = 'u diet3';
    if (weight < 30 && height > 6 && height < 6.5) result = 'u diet4';
    if (weight >= 30 && weight < 45 && height > 4.5 && height < 5.0) result = 'u diet5';
    if (weight >= 30 && weight < 45 && height > 5 && height < 5.5) result = 'u diet6';
    if (weight >= 30 && weight < 45 && height > 5.5 && height < 6) result = 'u diet7';
    if (weight >= 30 && weight < 45 && height > 6 && height < 6.5) result = 'u diet8';
    if (weight >= 45 && weight < 55 && height > 4.5 && height < 5.0) result = 'u diet9';
    if (weight >= 45 && weight < 55 && height > 5 && height < 5.5) result = 'u diet10';
    if (weight >= 45 && weight < 55 && height > 5.5 && height < 6) result = 'u diet11';
    if (weight >= 45 && weight < 55 && height > 6 && height < 6.5) result = 'u diet12';
    if (weight >= 55 && weight < 65 && height > 4.5 && height < 5.0) result = 'u diet13';
    if (weight >= 55 && weight < 65 && height > 5 && height < 5.5) result = 'u diet14';
    if (weight >= 55 && weight < 65 && height > 5.5 && height < 6) result = 'u diet15';
    if (weight >= 55 && weight < 65 && height > 6 && height < 6.5) result = 'u diet16';
    if (weight >= 65 && weight < 75 && height > 4.5 && height < 5.0) result = 'u diet17';
    if (weight >= 65 && weight < 75 && height > 5 && height < 5.5) result = 'u diet18';
    if (weight >= 65 && weight < 75 && height > 5.5 && height < 6) result = 'u diet19';
    if (weight >= 65 && weight < 75 && height > 6 && height < 6.5) result = 'u diet20';
    if (weight >= 75 && weight < 85 && height > 4.5 && height < 5.0) result = 'u diet21';
    if (weight >= 75 && weight < 85 && height > 5 && height < 5.5) result = 'u diet22';
    if (weight >= 75 && weight < 85 && height > 5.5 && height < 6) result = 'u diet23';
    if (weight >= 75 && weight < 85 && height > 6 && height < 6.5) result = 'u diet24';
    if (weight >= 85 && weight < 100 && height > 4.5 && height < 5) result = 'u diet25';
    if (weight >= 85 && weight < 100 && height > 5 && height < 5.5) result = 'u diet26';
    if (weight >= 85 && weight < 100 && height > 5.5 && height < 6) result = 'u diet27';
    if (weight >= 85 && weight < 100 && height > 6 && height < 6.5) result = 'u diet28';

    document.getElementById('result').innerText = result;
    document.getElementById('judo-options').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');

}





function displayFootballVideos() {
    document.getElementById('result').innerText = 'Football videos will be added later';
    document.getElementById('football-options').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
}
function displayCricketVideos() {
    document.getElementById('result').innerText = 'Cricket videos will be added later';
    document.getElementById('cricket-options').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
}
function displayBasketballVideos() {
    document.getElementById('result').innerText = 'Basketball videos will be added later';
    document.getElementById('basketball-options').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
}
function displayBadmintonVideos() {
    document.getElementById('result').innerText = 'Badminton videos will be added later';
    document.getElementById('badminton-options').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
}
function displayTennisVideos() {
    document.getElementById('result').innerText = 'Tennis videos will be added later';
    document.getElementById('tennis-options').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
}
function displayHockeyVideos() {
    document.getElementById('result').innerText = 'Hockey videos will be added later';
    document.getElementById('hockey-options').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
}
function displayBaseballVideos() {
    document.getElementById('result').innerText = 'Baseball videos will be added later';
    document.getElementById('baseball-options').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
}
function displayRugbyVideos() {
    document.getElementById('result').innerText = 'Rugby videos will be added later';
    document.getElementById('rugby-options').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
}
function displayBoxingVideos() {
    document.getElementById('result').innerText = 'Boxing videos will be added later';
    document.getElementById('boxing-options').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
}

function displayJudoVideos() {
    document.getElementById('result').innerText = 'Judo videos will be added later';
    document.getElementById('judo-options').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
}




function displayPushupVideos() {
    document.getElementById('result').innerText = 'Pushup videos will be added later';
    document.getElementById('pushup-options').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
}
function displaySitupVideos() {
    document.getElementById('result').innerText = 'Situp videos will be added later';
    document.getElementById('situp-options').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
}
function displayJumpingjacksVideos() {
    document.getElementById('result').innerText = 'Jumpingjacks videos will be added later';
    document.getElementById('jumpingjacks-options').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
}
function displayBurpeesVideos() {
    document.getElementById('result').innerText = 'Burpees videos will be added later';
    document.getElementById('burpees-options').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
}
function displayLightcardioVideos() {
    document.getElementById('result').innerText = 'Lightcardio videos will be added later';
    document.getElementById('lightcardio-options').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
}
function displaySquatsVideos() {
    document.getElementById('result').innerText = 'Squats videos will be added later';
    document.getElementById('squats-options').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
}
function displayShoulderpressVideos() {
    document.getElementById('result').innerText = 'Shoulderpress videos will be added later';
    document.getElementById('shoulderpress-options').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
}
function displayBenchpressVideos() {
    document.getElementById('result').innerText = 'Benchpress videos will be added later';
    document.getElementById('benchpress-options').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
}
function displayPlanksVideos() {
    document.getElementById('result').innerText = 'Planks videos will be added later';
    document.getElementById('planks-options').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
}
function displayRunningVideos() {
    document.getElementById('result').innerText = 'Running videos will be added later';
    document.getElementById('running-options').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
}






function displayFootballAbout() {
    document.getElementById('result').innerText = 'Description of football will be added later';
    document.getElementById('football-options').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
}
function displayCricketAbout() {
    document.getElementById('result').innerText = 'Description of cricket will be added later';
    document.getElementById('cricket-options').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
}
function displayBasketballAbout() {
    document.getElementById('result').innerText = 'Description of basketball will be added later';
    document.getElementById('basketball-options').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
}


function displayPushupAbout() {
    document.getElementById('result').innerText = 'Description of pushup will be added later';
    document.getElementById('pushup-options').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
}
function displaySitupAbout() {
    document.getElementById('result').innerText = 'Description  of situp will be added later';
    document.getElementById('situp-options').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
}
function displayJumpingjacksAbout() {
    document.getElementById('result').innerText = 'Description of Jumpingjacks will be added later';
    document.getElementById('jumpingjacks-options').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
}
function displayBurpeesAbout() {
    document.getElementById('result').innerText = 'Description of burpees will be added later';
    document.getElementById('burpees-options').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
}
function displayLightcardioAbout() {
    document.getElementById('result').innerText = 'Description of Lightcardio will be added later';
    document.getElementById('lightcardio-options').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
}
function displaySquatsAbout() {
    document.getElementById('result').innerText = 'Description of Squats will be added later';
    document.getElementById('squats-options').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
}
function displayShoulderpressAbout() {
    document.getElementById('result').innerText = 'Description of shoulderpress will be added later';
    document.getElementById('shoulderpress-options').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
}
function displayBenchpressAbout() {
    document.getElementById('result').innerText = 'Description of benchpress will be added later';
    document.getElementById('benchpress-options').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
}
function displayPlanksAbout() {
    document.getElementById('result').innerText = 'Description of Planks will be added later';
    document.getElementById('planks-options').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
}
function displayRunningAbout() {
    document.getElementById('result').innerText = 'Description of Running will be added later';
    document.getElementById('running-options').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
}




function displayBadmintonAbout() {
    document.getElementById('result').innerText = 'Description of badminton will be added later';
    document.getElementById('badminton-options').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
}
function displayTennisAbout() {
    document.getElementById('result').innerText = 'Description of Tennis will be added later';
    document.getElementById('tennis-options').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
}
function displayHockeyAbout() {
    document.getElementById('result').innerText = 'Description of Hockey will be added later';
    document.getElementById('hockey-options').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
}
function displayBaseballAbout() {
    document.getElementById('result').innerText = 'Description of Baseball will be added later';
    document.getElementById('baseball-options').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
}
function displayRugbyAbout() {
    document.getElementById('result').innerText = 'Description of Rugby will be added later';
    document.getElementById('rugby-options').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
}
function displayBoxingAbout() {
    document.getElementById('result').innerText = 'Description of Boxing will be added later';
    document.getElementById('boxing-options').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
}
function displayJudoAbout() {
    document.getElementById('result').innerText = 'Description of Judo will be added later';
    document.getElementById('judo-options').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
}






