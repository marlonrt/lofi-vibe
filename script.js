var playlist = [
    { name: 'WatR - Fluid (itsWatR)', url: 'music/WatR - Fluid (itsWatR).mp3' },
    { name: 'Aesthetics (SoulProdMusic)', url: 'music/Aesthetics (SoulProdMusic).mp3' },
    { name: 'Lofi Beat (FASSounds)', url: 'music/Lofi Beat (FASSounds).mp3' },
    { name: 'Little Break - LoFi Beat (SoulProdMusic)', url: 'music/Little Break - LoFi Beat (SoulProdMusic).mp3' },
    { name: 'night coffee shop (Lofi_hour)', url: 'music/night coffee shop (Lofi_hour).mp3' },
    { name: 'Soft LoFi Beat (ComaStudio)', url: 'music/Soft LoFi Beat (ComaStudio).mp3' },
    { name: 'Retro Hip Hop (RoyaltyFreeMusic)', url: 'music/Retro Hip Hop (RoyaltyFreeMusic).mp3' },
    { name: 'Last Night (SoulProdMusic)', url: 'music/Last Night (SoulProdMusic).mp3' },
    { name: 'Puddles in the sky (chillmore)', url: 'music/Puddles in the sky (chillmore).mp3' },
    { name: 'Spring of Mind (chillmore)', url: 'music/Spring of Mind (chillmore).mp3' },
    { name: 'just chill (Lofi_hour)', url: 'music/just chill (Lofi_hour).mp3' }



  ];
  var currentIndex = 0;
  var audio = new Audio();
  var isPlaying = false;
  var volume = 1;
  
  var playPauseIcon = document.getElementById('playPauseIcon');
  var volumeDecreaseIcon = document.getElementById('volumeDecrease');
  var volumeIncreaseIcon = document.getElementById('volumeIncrease');
  var nextSongIcon = document.getElementById('nextSongIcon');
  var songNameElement = document.getElementById('songName');
  var clockElement = document.getElementById('clock');
  
  function playSong() {
    audio.src = playlist[currentIndex].url;
    audio.play();
    isPlaying = true;
    updateSongName();
  }
  
  function pauseSong() {
    audio.pause();
    isPlaying = false;
  }
  
  function togglePlayPause() {
    if (isPlaying) {
      pauseSong();
    } else {
      playSong();
    }
    updatePlayPauseIcon();
  }
  
  function updatePlayPauseIcon() {
    if (isPlaying) {
      playPauseIcon.classList.remove('fa-play');
      playPauseIcon.classList.add('fa-pause');
    } else {
      playPauseIcon.classList.remove('fa-pause');
      playPauseIcon.classList.add('fa-play');
    }
  }
  
  function updateSongName() {
    var songName = playlist[currentIndex].name;
    songNameElement.textContent = songName.toLowerCase();
  }
  
  function playNextRandomSong() {
    currentIndex = Math.floor(Math.random() * playlist.length);
    playSong();
  }
  
  function playRandomSong() {
    currentIndex = Math.floor(Math.random() * playlist.length);
    updateSongName();
  }
  
  playPauseIcon.addEventListener('click', function() {
    togglePlayPause();
  });
  
  volumeDecreaseIcon.addEventListener('click', function() {
    if (volume > 0) {
      volume -= 0.1;
      audio.volume = volume;
    }
  });
  
  volumeIncreaseIcon.addEventListener('click', function() {
    if (volume < 1) {
      volume += 0.1;
      audio.volume = volume;
    }
  });
  
  nextSongIcon.addEventListener('click', function() {
    pauseSong();
    playNextRandomSong();
  });
  
  audio.addEventListener('ended', function() {
    playNextRandomSong();
  });
  
  // Aguardar o usuário apertar Play antes de começar a tocar
  audio.oncanplay = function() {
    updatePlayPauseIcon();
  };
  
  function updateClock() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var time = hours + ':' + minutes;
    clockElement.textContent = time;
  }
  
  // Atualizar o relógio a cada segundo
  setInterval(updateClock, 1000);
  
  playRandomSong();
  
  function toggleDarkMode() {
    body.classList.toggle('bg-dark');
    modeToggleIcon.classList.toggle('icon-dark');
    var icons = document.getElementsByClassName('icon');
    var texts = document.getElementsByClassName('text');
    for (var i = 0; i < icons.length; i++) {
      icons[i].classList.toggle('icon-dark', isDarkMode);
    }
    for (var i = 0; i < texts.length; i++) {
      texts[i].classList.toggle('text-dark', isDarkMode);
    }
  }
  
  