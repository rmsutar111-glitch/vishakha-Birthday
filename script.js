const giftBtn=document.getElementById('giftBtn');const giftMessage=document.getElementById('giftMessage');giftBtn.addEventListener('click',()=>{giftBtn.classList.add('open');giftMessage.hidden=false;giftBtn.setAttribute('aria-label','Birthday gift opened');confetti();});const wishes=['✨ May this year bring you every reason to smile.','💗 Wish sent! A beautiful year is waiting for you.','🌟 Keep dreaming big and shining bright.','🎂 More laughter, adventures, and cake are on the way!'];document.getElementById('wishBtn').addEventListener('click',()=>{document.getElementById('wishResult').textContent=wishes[Math.floor(Math.random()*wishes.length)];confetti()});function confetti(){const colors=['#d45d83','#ffd166','#f2a8bf','#c4e5d5','#c9b7f5'];for(let i=0;i<45;i++){const el=document.createElement('span');el.textContent=Math.random()>.5?'✦':'♡';el.style.left=Math.random()*100+'vw';el.style.color=colors[Math.floor(Math.random()*colors.length)];el.style.fontSize=(12+Math.random()*14)+'px';el.style.animationDuration=(2.5+Math.random()*3)+'s';document.querySelector('.hearts').appendChild(el);setTimeout(()=>el.remove(),6000)}}if(!matchMedia('(prefers-reduced-motion: reduce)').matches){setInterval(()=>{const el=document.createElement('span');el.textContent=Math.random()>.5?'♡':'✦';el.style.left=Math.random()*100+'vw';el.style.fontSize=(12+Math.random()*12)+'px';el.style.animationDuration=(7+Math.random()*5)+'s';document.querySelector('.hearts').appendChild(el);setTimeout(()=>el.remove(),13000)},1800)}
// Browser-based spoken birthday wish. Audio starts only after the visitor taps the button.
const voiceBtn=document.getElementById('voiceBtn');
const voiceBtnText=document.getElementById('voiceBtnText');
const voiceIcon=document.getElementById('voiceIcon');
const voiceStatus=document.getElementById('voiceStatus');
const birthdayWish="Hey Vishakha! Happy birthday! This little surprise is made just for you, from Rushikesh. I hope your day is filled with laughter, lovely surprises, delicious cake, and people who make you feel special. Keep smiling, keep chasing your dreams, and never stop being your wonderful self. May this new year bring you happiness, confidence, good health, and countless beautiful memories. Thank you for being someone worth celebrating. Have the happiest birthday, Vishakha! You deserve all the good things coming your way. Once again, happy birthday!";
let speaking=false;
voiceBtn.addEventListener('click',()=>{
  if(!('speechSynthesis' in window) || !('SpeechSynthesisUtterance' in window)){
    voiceStatus.textContent='Sorry, this browser does not support spoken playback. Try the latest Chrome or Edge.';
    return;
  }
  if(speaking){window.speechSynthesis.cancel();speaking=false;voiceBtnText.textContent='Hear your birthday wish';voiceIcon.textContent='▶';voiceStatus.textContent='Voice playback stopped.';return;}
  window.speechSynthesis.cancel();
  const message=new SpeechSynthesisUtterance(birthdayWish);
  const voices=window.speechSynthesis.getVoices();
  message.voice=voices.find(v=>/^en-IN$/i.test(v.lang))||voices.find(v=>/^en-GB$/i.test(v.lang))||voices.find(v=>/^en/i.test(v.lang))||null;
  message.lang=message.voice?.lang||'en-IN';message.rate=0.92;message.pitch=1.06;message.volume=1;
  message.onstart=()=>{speaking=true;voiceBtnText.textContent='Stop birthday wish';voiceIcon.textContent='■';voiceStatus.textContent='Playing your birthday message… 💗';};
  message.onend=()=>{speaking=false;voiceBtnText.textContent='Hear your birthday wish again';voiceIcon.textContent='▶';voiceStatus.textContent='That wish was sent with love. 💗';};
  message.onerror=()=>{speaking=false;voiceBtnText.textContent='Try the voice wish again';voiceIcon.textContent='▶';voiceStatus.textContent='The voice could not play. Please try again in your browser.';};
  window.speechSynthesis.speak(message);
});

