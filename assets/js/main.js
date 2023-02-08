console.log("test");
const singers = [
    { name: 'The Beatles', country: 'United Kingdom', period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
    { name: 'Elvis Presley', country: 'United States', period_active: { start: 1954, end: 1977 }, genre: "Rock and roll" },
    { name: 'Michael Jackson', country: 'United States', period_active: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B" },
    { name: 'Elton John', country: 'United Kingdom', period_active: { start: 1964, end: "present" }, genre: "Pop / Rock" },
    { name: 'Madonna', country: 'United States', period_active: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica" },
    { name: 'Led Zeppelin', country: 'United Kingdom', period_active: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock" },
    { name: 'Rihanna', country: 'United States', period_active: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop" },
    { name: 'Pink Floyd', country: 'United Kingdom', period_active: { start: 1965, end: 1996, extra: 2014 }, genre: "Progressive rock / Psychedelic rock" },
];

console.log(singers);
console.table(singers);

function sortieren(a, b) {
    if (a.name < b.name) { return -1; }
    else if (a.name > b.name) { return 1; }
};

singers.sort(sortieren)
console.log(singers)
console.table(singers)


// mit .localCompare
console.log(singers.sort((a, b) => a.name.localeCompare(b.name)))
console.table(singers.sort((a, b) => a.name.localeCompare(b.name)))

// function(a, b){return a-b}
console.log(singers.sort(function(a, b){return a-b}
))
console.table(singers.sort(function(a, b){return a-b}
))