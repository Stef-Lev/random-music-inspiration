const genre = document.querySelector('#genre')
const key = document.querySelector('#key')
const scale = document.querySelector('#scale')
const submitBtn = document.querySelector('#submit')

const genreList = ['Drill','Boom Bap','GFunk', 'Trap', 'LoFi', 'AfroBeats', 'Baile Funk', 'Club Banger', 'Jersey Club']
const keyList = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
const scaleList = ['Major','Minor', 'Melodic Minor', 'Harmonic Minor']

submitBtn.addEventListener('click', ()=> {
    const randomGenreIndex = Math.floor(Math.random()*genreList.length)
    const randomKeyIndex = Math.floor(Math.random()*keyList.length)
    const randomScaleIndex =Math.floor(Math.random()*scaleList.length)
    genre.innerHTML = genreList[randomGenreIndex]
    key.innerHTML = keyList[randomKeyIndex]
    scale.innerHTML = scaleList[randomScaleIndex]
})
